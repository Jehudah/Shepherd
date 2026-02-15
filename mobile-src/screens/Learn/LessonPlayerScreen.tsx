import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { useStore } from '../../store/useStore';
import { Question, RootStackParamList } from '../../types';
import { shuffleArray, shuffleOptions } from '../../utils/shuffle';
import CharacterGuide from '../../components/CharacterGuide';
import Character from '../../components/Character';
import { getCharacterForLesson, getCharacterMessage } from '../../data/characterMapping';

// Icon alias for consistency
const Icon = Feather;

// Import question data
import {
  prophetsQuestions,
  kingsQuestions,
  apostlesQuestions,
  womenQuestions,
} from '../../data/namesQuestions';
import {
  loveThemeQuestions,
  faithThemeQuestions,
  hopeThemeQuestions,
  peaceThemeQuestions,
  wisdomThemeQuestions,
} from '../../data/themesQuestions';
import { creationQuestions } from '../../data/timelineQuestions';
import { salvationVersesQuestions } from '../../data/versesQuestions';
import { parablesQuestions } from '../../data/parablesQuestions';

type LessonPlayerScreenRouteProp = RouteProp<RootStackParamList, 'LessonPlayer'>;
type LessonPlayerScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LessonPlayer'
>;

interface Props {
  route: LessonPlayerScreenRouteProp;
  navigation: LessonPlayerScreenNavigationProp;
}

interface QuestionWithShuffled extends Question {
  shuffledOptions?: string[];
}

export default function LessonPlayerScreen({ route, navigation }: Props) {
  const { category, subcategory, lessonId } = route.params;
  const { updateXP, completeLesson, updateStreak, startSession } = useStore();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [wrongQuestions, setWrongQuestions] = useState<QuestionWithShuffled[]>([]);
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());

  // Load questions based on category
  const getQuestions = (): Question[] => {
    if (category === 'names' && subcategory && lessonId) {
      if (subcategory === 'prophets' && prophetsQuestions[lessonId]) {
        return prophetsQuestions[lessonId];
      }
      if (subcategory === 'kings' && kingsQuestions[lessonId]) {
        return kingsQuestions[lessonId];
      }
      if (subcategory === 'apostles' && apostlesQuestions[lessonId]) {
        return apostlesQuestions[lessonId];
      }
      if (subcategory === 'women' && womenQuestions[lessonId]) {
        return womenQuestions[lessonId];
      }
    }

    if (category === 'themes' && subcategory && lessonId) {
      if (subcategory === 'love' && loveThemeQuestions[lessonId]) {
        return loveThemeQuestions[lessonId];
      }
      if (subcategory === 'faith' && faithThemeQuestions[lessonId]) {
        return faithThemeQuestions[lessonId];
      }
      if (subcategory === 'hope' && hopeThemeQuestions[lessonId]) {
        return hopeThemeQuestions[lessonId];
      }
      if (subcategory === 'peace' && peaceThemeQuestions[lessonId]) {
        return peaceThemeQuestions[lessonId];
      }
      if (subcategory === 'wisdom' && wisdomThemeQuestions[lessonId]) {
        return wisdomThemeQuestions[lessonId];
      }
    }

    if (category === 'timeline' && subcategory && lessonId) {
      if (subcategory === 'creation' && creationQuestions[lessonId]) {
        return creationQuestions[lessonId];
      }
    }

    if (category === 'verses' && subcategory && lessonId) {
      if (subcategory === 'salvation' && salvationVersesQuestions[lessonId]) {
        return salvationVersesQuestions[lessonId];
      }
    }

    if (category === 'parables' && subcategory && lessonId) {
      if (subcategory === 'kingdom' && parablesQuestions[lessonId]) {
        return parablesQuestions[lessonId];
      }
    }

    return [];
  };

  const originalQuestions = getQuestions();

  // Shuffle questions once
  const shuffledQuestions = useMemo(() => {
    return shuffleArray(originalQuestions);
  }, [category, subcategory, lessonId]);

  // Shuffle options for each question
  const questionsWithShuffledOptions = useMemo(() => {
    return shuffledQuestions.map((q) => {
      if (q.type === 'multiple-choice' && q.options) {
        return {
          ...q,
          shuffledOptions: shuffleOptions(q.options),
        };
      }
      return q;
    });
  }, [shuffledQuestions]);

  useEffect(() => {
    if (questionsWithShuffledOptions.length > 0) {
      const fullLessonId = `${category}-${subcategory}-${lessonId}`;
      startSession(fullLessonId);
      updateStreak();
    }
  }, [questionsWithShuffledOptions]);

  if (questionsWithShuffledOptions.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Lesson not found</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.errorLink}>Return to lessons</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const currentQuestion = questionsWithShuffledOptions[currentQuestionIndex];
  const totalQuestions = questionsWithShuffledOptions.length + wrongQuestions.length;
  const answeredCount = completedQuestions.size;
  const progress = (answeredCount / totalQuestions) * 100;

  // Determine which character to show based on lesson context
  const lessonCharacter = useMemo(() => {
    const lessonTitle = lessonId || '';
    return getCharacterForLesson(lessonTitle, category, subcategory);
  }, [category, subcategory, lessonId]);

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || isAnswered) return;

    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      setCorrectAnswers((prev) => prev + 1);
      setCompletedQuestions((prev) => new Set([...prev, currentQuestion.id]));
    } else {
      if (!completedQuestions.has(currentQuestion.id)) {
        setWrongQuestions((prev) => [...prev, currentQuestion]);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questionsWithShuffledOptions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      if (wrongQuestions.length > 0 && !completedQuestions.has(wrongQuestions[0].id)) {
        const retryQuestions = wrongQuestions.map((q) => {
          if (q.type === 'multiple-choice' && q.options) {
            return {
              ...q,
              shuffledOptions: shuffleOptions(q.options),
            };
          }
          return q;
        });
        questionsWithShuffledOptions.push(...retryQuestions);
        setWrongQuestions([]);
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer('');
        setIsAnswered(false);
        setIsCorrect(false);
      } else {
        const fullLessonId = `${category}-${subcategory}-${lessonId}`;
        const xpEarned = questionsWithShuffledOptions.length * 10;
        updateXP(xpEarned);
        completeLesson(fullLessonId, category);
        setShowResults(true);
      }
    }
  };

  if (showResults) {
    const accuracy = Math.round((correctAnswers / answeredCount) * 100);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.resultsContainer}>
          <CharacterGuide
            character={lessonCharacter}
            message={getCharacterMessage(lessonCharacter, 'complete')}
            mood="celebrating"
          />

          <View style={styles.xpBadge}>
            <Icon name="award" size={32} color="#FFFFFF" />
            <Text style={styles.xpText}>
              +{questionsWithShuffledOptions.length * 10} XP
            </Text>
            <Text style={styles.xpSubtext}>Great job!</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Icon name="check-circle" size={32} color="#10B981" />
              <Text style={styles.statNumber}>{correctAnswers}</Text>
              <Text style={styles.statLabel}>Correct</Text>
            </View>
            <View style={styles.statBox}>
              <Icon name="star" size={32} color="#6B7280" />
              <Text style={styles.statNumber}>{accuracy}%</Text>
              <Text style={styles.statLabel}>Accuracy</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.goBack()}>
            <Text style={styles.primaryButtonText}>Continue Learning</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => {
              setCurrentQuestionIndex(0);
              setSelectedAnswer('');
              setIsAnswered(false);
              setIsCorrect(false);
              setCorrectAnswers(0);
              setShowResults(false);
              setWrongQuestions([]);
              setCompletedQuestions(new Set());
            }}
          >
            <Text style={styles.secondaryButtonText}>Practice Again</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#3B82F6" />
          <Text style={styles.backText}>Exit</Text>
        </TouchableOpacity>
        <Text style={styles.questionCounter}>
          Question {answeredCount + 1} of {totalQuestions}
        </Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>

      <View style={styles.mainContent}>
        {/* Top 1/3: Character with Speech Bubble */}
        <View style={styles.characterSection}>
          <Character name={lessonCharacter} size={140} style={styles.characterImage} />
          <View style={styles.speechBubble}>
            <View style={styles.speechBubbleArrow} />
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
          </View>
        </View>

        {/* Bottom 2/3: Answer Options */}
        <ScrollView style={styles.answersSection} contentContainerStyle={styles.answersContent}>
          <View style={styles.optionsContainer}>
          {((currentQuestion as QuestionWithShuffled).shuffledOptions || currentQuestion.options || []).map(
            (option: string, index: number) => {
              const isSelected = selectedAnswer === option;
              const showCorrect = isAnswered && option === currentQuestion.correctAnswer;
              const showWrong = isAnswered && isSelected && !isCorrect;

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    isSelected && !isAnswered && styles.optionButtonSelected,
                    showCorrect && styles.optionButtonCorrect,
                    showWrong && styles.optionButtonWrong,
                  ]}
                  onPress={() => handleAnswerSelect(option)}
                  disabled={isAnswered}
                >
                  <Text
                    style={[
                      styles.optionText,
                      isSelected && !isAnswered && styles.optionTextSelected,
                      (showCorrect || showWrong) && styles.optionTextAnswered,
                    ]}
                  >
                    {option}
                  </Text>
                  {showCorrect && <Icon name="check-circle" size={24} color="#10B981" />}
                  {showWrong && <Icon name="x-circle" size={24} color="#F59E0B" />}
                </TouchableOpacity>
              );
            }
          )}
          </View>

          {/* Feedback */}
          {isAnswered && (
            <View style={styles.feedbackSection}>
              <Text style={[styles.feedbackText, isCorrect ? styles.feedbackCorrectText : styles.feedbackIncorrectText]}>
                {isCorrect
                  ? getCharacterMessage(lessonCharacter, 'correct')
                  : getCharacterMessage(lessonCharacter, 'incorrect')}
              </Text>
              {!isCorrect && (
                <View style={styles.correctAnswerHint}>
                  <Text style={styles.correctAnswerText}>
                    The correct answer is: <Text style={styles.correctAnswerBold}>{currentQuestion.correctAnswer}</Text>
                  </Text>
                </View>
              )}
            </View>
          )}
        </ScrollView>
      </View>

      {/* Action Button */}
      <View style={styles.actionContainer}>
        {!isAnswered ? (
          <TouchableOpacity
            style={[styles.actionButton, !selectedAnswer && styles.actionButtonDisabled]}
            onPress={handleSubmit}
            disabled={!selectedAnswer}
          >
            <Text style={styles.actionButtonText}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.actionButton} onPress={handleNext}>
            <Text style={styles.actionButtonText}>
              {currentQuestionIndex < questionsWithShuffledOptions.length - 1 ||
              (wrongQuestions.length > 0 && !completedQuestions.has(wrongQuestions[0].id))
                ? 'Next Question'
                : 'Finish'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E3FF', // Light lilac
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backText: {
    color: '#3B82F6',
    fontSize: 16,
  },
  questionCounter: {
    color: '#6B7280',
    fontSize: 14,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#10B981',
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  mainContent: {
    flex: 1,
  },
  characterSection: {
    minHeight: '30%',
    backgroundColor: '#E8E3FF', // Light lilac
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
  },
  characterImage: {
    marginBottom: 10,
  },
  speechBubble: {
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 20,
    padding: 20,
    paddingTop: 25,
    marginHorizontal: 20,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    position: 'relative',
    minHeight: 80,
  },
  speechBubbleArrow: {
    position: 'absolute',
    top: -15,
    left: '50%',
    marginLeft: -15,
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderLeftColor: 'transparent',
    borderRightWidth: 15,
    borderRightColor: 'transparent',
    borderBottomWidth: 15,
    borderBottomColor: '#FFFFFF',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    lineHeight: 26,
    textAlign: 'center',
  },
  answersSection: {
    flex: 1,
    backgroundColor: '#E8E3FF', // Light lilac
  },
  answersContent: {
    padding: 16,
    paddingBottom: 100,
  },
  correctAnswerHint: {
    backgroundColor: '#FFF7ED',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  correctAnswerText: {
    fontSize: 14,
    color: '#6B7280',
  },
  correctAnswerBold: {
    fontWeight: '600',
    color: '#1F2937',
  },
  resultsCharacter: {
    marginBottom: 16,
  },
  feedbackSection: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  feedbackCorrectText: {
    color: '#10B981',
  },
  feedbackIncorrectText: {
    color: '#F59E0B',
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  optionButtonSelected: {
    borderColor: '#3B82F6',
    backgroundColor: '#EFF6FF',
  },
  optionButtonCorrect: {
    borderColor: '#10B981',
    backgroundColor: '#ECFDF5',
  },
  optionButtonWrong: {
    borderColor: '#F59E0B',
    backgroundColor: '#FFF7ED',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  optionTextSelected: {
    color: '#3B82F6',
    fontWeight: '600',
  },
  optionTextAnswered: {
    fontWeight: '600',
  },
  feedbackContainer: {
    marginTop: 24,
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
  },
  feedbackCorrect: {
    backgroundColor: '#ECFDF5',
    borderLeftColor: '#10B981',
  },
  feedbackWrong: {
    backgroundColor: '#FFF7ED',
    borderLeftColor: '#F59E0B',
  },
  feedbackContent: {
    flexDirection: 'row',
    gap: 12,
  },
  feedbackTextContainer: {
    flex: 1,
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  feedbackSubtext: {
    fontSize: 14,
    color: '#6B7280',
  },
  actionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#E8E3FF', // Light lilac
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  actionButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  actionButtonDisabled: {
    backgroundColor: '#D1D5DB',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  errorLink: {
    color: '#3B82F6',
    fontSize: 16,
  },
  resultsContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultsEmoji: {
    fontSize: 72,
    marginBottom: 24,
  },
  resultsTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 24,
  },
  xpBadge: {
    backgroundColor: '#F59E0B',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 32,
    width: '100%',
  },
  xpText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 8,
  },
  xpSubtext: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
    width: '100%',
  },
  statBox: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  primaryButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '100%',
  },
  secondaryButtonText: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: '600',
  },
});
