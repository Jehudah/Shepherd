import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather as Icon } from '@expo/vector-icons';
// Temporarily disabled for Expo Go compatibility
// import DraggableFlatList, {
//   ScaleDecorator,
//   RenderItemParams,
// } from 'react-native-draggable-flatlist';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootStackParamList, Question } from '../../types';
import { useStore } from '../../store/useStore';
import Wooly from '../../components/Wooly';
import Character from '../../components/Character';
import { creationQuestions } from '../../data/timelineQuestions';
import { shuffleArray, shuffleOptions } from '../../utils/shuffle';

type TimelineDragScreenRouteProp = RouteProp<RootStackParamList, 'TimelineDrag'>;
type TimelineDragScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'TimelineDrag'
>;

interface Props {
  route: TimelineDragScreenRouteProp;
  navigation: TimelineDragScreenNavigationProp;
}

interface OrderItem {
  id: string;
  text: string;
}

export default function TimelineDragScreen({ route, navigation }: Props) {
  const { lessonId } = route.params;
  const { updateXP, completeLesson } = useStore();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userOrder, setUserOrder] = useState<OrderItem[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Load ALL questions (both order and multiple-choice)
  const questions = useMemo(() => {
    const allQuestions = creationQuestions[lessonId] || [];
    // Shuffle to mix order and multiple-choice questions
    return shuffleArray(allQuestions);
  }, [lessonId]);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion) {
      if (currentQuestion.type === 'order' && currentQuestion.options) {
        // Shuffle the options for order questions
        const shuffled = shuffleArray([...currentQuestion.options]);
        setUserOrder(shuffled.map((text, index) => ({ id: `item-${index}`, text })));
      }
      setIsAnswered(false);
      setIsCorrect(false);
      setSelectedAnswer('');
    }
  }, [currentQuestionIndex, currentQuestion]);

  const handleCheck = () => {
    if (!currentQuestion || isAnswered) return;

    if (currentQuestion.type === 'order') {
      const userOrderTexts = userOrder.map(item => item.text);
      const correct = JSON.stringify(userOrderTexts) === JSON.stringify(currentQuestion.correctAnswer);
      setIsCorrect(correct);
      setIsAnswered(true);
      if (correct) {
        setCorrectAnswers(prev => prev + 1);
      }
    } else if (currentQuestion.type === 'multiple-choice') {
      const correct = selectedAnswer === currentQuestion.correctAnswer;
      setIsCorrect(correct);
      setIsAnswered(true);
      if (correct) {
        setCorrectAnswers(prev => prev + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const xpEarned = correctAnswers * 20;
      updateXP(xpEarned);
      completeLesson(lessonId, 'timeline');
      setShowResults(true);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
  };

  const handleItemPress = (index: number) => {
    if (isAnswered) return;

    if (selectedItemIndex === null) {
      // Select this item
      setSelectedItemIndex(index);
    } else if (selectedItemIndex === index) {
      // Deselect
      setSelectedItemIndex(null);
    } else {
      // Swap the two items
      const newOrder = [...userOrder];
      [newOrder[selectedItemIndex], newOrder[index]] = [newOrder[index], newOrder[selectedItemIndex]];
      setUserOrder(newOrder);
      setSelectedItemIndex(null);
    }
  };

  if (!currentQuestion || questions.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Icon name="alert-circle" size={48} color="#EF4444" />
          <Text style={styles.errorText}>No timeline questions available</Text>
          <TouchableOpacity style={styles.retryButton} onPress={() => navigation.goBack()}>
            <Text style={styles.retryButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (showResults) {
    const accuracy = Math.round((correctAnswers / questions.length) * 100);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.resultsContainer}>
          <Wooly
            message={`Amazing work! You got ${correctAnswers} out of ${questions.length} questions right! ${accuracy >= 80 ? "You really know your biblical history!" : "Keep practicing to master the timeline!"}`}
            mood="celebrating"
          />

          <View style={styles.xpBadge}>
            <Icon name="award" size={32} color="#FFFFFF" />
            <Text style={styles.xpText}>+{correctAnswers * 20} XP</Text>
            <Text style={styles.xpSubtext}>Timeline Complete!</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Icon name="check-circle" size={32} color="#10B981" />
              <Text style={styles.statNumber}>{correctAnswers}/{questions.length}</Text>
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
              setCorrectAnswers(0);
              setShowResults(false);
            }}
          >
            <Text style={styles.secondaryButtonText}>Practice Again</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isOrderQuestion = currentQuestion.type === 'order';

  return (
    <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-left" size={24} color="#3B82F6" />
            <Text style={styles.backText}>Exit</Text>
          </TouchableOpacity>
          <Text style={styles.questionCounter}>
            {currentQuestionIndex + 1} / {questions.length}
          </Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>

        <View style={styles.mainContent}>
          {/* Question */}
          <View style={styles.questionSection}>
            <Wooly
              message={currentQuestion.question}
              mood="thinking"
              size="small"
            />
          </View>

          {isOrderQuestion ? (
            // ORDER QUESTION - Tap to swap
            <>
              <View style={styles.instructionsCard}>
                <Icon name="shuffle" size={18} color="#3B82F6" />
                <Text style={styles.instructionsText}>
                  {isAnswered
                    ? "Review the correct order above"
                    : selectedItemIndex !== null
                    ? "Tap another event to swap positions"
                    : "Tap an event to select, then tap another to swap"}
                </Text>
              </View>

              <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
                <View style={styles.timelineContainer}>
                  {userOrder.map((item, index) => {
                    const isSelected = selectedItemIndex === index;
                    const isInCorrectPosition = isAnswered && currentQuestion.correctAnswer
                      ? currentQuestion.correctAnswer[index] === item.text
                      : false;
                    const isInWrongPosition = isAnswered && !isInCorrectPosition;

                    return (
                      <TouchableOpacity
                        key={item.id}
                        onPress={() => handleItemPress(index)}
                        disabled={isAnswered}
                        style={[
                          styles.timelineItem,
                          isSelected && styles.timelineItemSelected,
                          isInCorrectPosition && styles.timelineItemCorrect,
                          isInWrongPosition && styles.timelineItemWrong,
                        ]}
                      >
                        <View style={[
                          styles.timelineNumber,
                          isSelected && styles.timelineNumberSelected,
                          isInCorrectPosition && styles.timelineNumberCorrect,
                          isInWrongPosition && styles.timelineNumberWrong,
                        ]}>
                          <Text style={[
                            styles.timelineNumberText,
                            (isSelected || isInCorrectPosition || isInWrongPosition) && styles.timelineNumberTextWhite,
                          ]}>
                            {index + 1}
                          </Text>
                        </View>
                        <Text style={[
                          styles.timelineItemText,
                          isSelected && styles.timelineItemTextSelected,
                        ]}>
                          {item.text}
                        </Text>
                        {isInCorrectPosition && <Icon name="check" size={20} color="#10B981" />}
                        {isInWrongPosition && <Icon name="x" size={20} color="#EF4444" />}
                        {!isAnswered && isSelected && <Icon name="check-square" size={20} color="#3B82F6" />}
                        {!isAnswered && !isSelected && <Icon name="square" size={20} color="#9CA3AF" />}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </>
          ) : (
            // MULTIPLE CHOICE QUESTION
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
              <View style={styles.optionsContainer}>
                {(currentQuestion.options || []).map((option: string, index: number) => {
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
                      {showWrong && <Icon name="x-circle" size={24} color="#EF4444" />}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          )}

          {/* Feedback */}
          {isAnswered && (
            <View style={[
              styles.feedbackCard,
              isCorrect ? styles.feedbackCardCorrect : styles.feedbackCardWrong,
            ]}>
              <Icon
                name={isCorrect ? "check-circle" : "x-circle"}
                size={24}
                color={isCorrect ? "#10B981" : "#EF4444"}
              />
              <Text style={[
                styles.feedbackText,
                isCorrect ? styles.feedbackTextCorrect : styles.feedbackTextWrong,
              ]}>
                {isCorrect
                  ? (isOrderQuestion ? "Perfect! You got the chronological order right!" : "Correct! Great job!")
                  : (isOrderQuestion ? "Not quite right. Review the correct order above and try the next one!" : "Not quite. Review the correct answer above and keep learning!")}
              </Text>
            </View>
          )}
        </View>

        {/* Action Button */}
        <View style={styles.actionContainer}>
          {!isAnswered ? (
            <TouchableOpacity
              style={[
                styles.actionButton,
                (isOrderQuestion || selectedAnswer) ? null : styles.actionButtonDisabled,
              ]}
              onPress={handleCheck}
              disabled={!isOrderQuestion && !selectedAnswer}
            >
              <Text style={styles.actionButtonText}>Check Answer</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleNext}
            >
              <Text style={styles.actionButtonText}>
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish'}
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
    backgroundColor: '#E8E3FF',
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
    fontWeight: '600',
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
  mainContent: {
    flex: 1,
  },
  questionSection: {
    paddingHorizontal: 16,
  },
  instructionsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 16,
    marginTop: 12,
    gap: 8,
  },
  instructionsText: {
    flex: 1,
    fontSize: 14,
    color: '#1E40AF',
    fontWeight: '600',
  },
  timelineContainer: {
    gap: 12,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  timelineItemSelected: {
    borderColor: '#3B82F6',
    backgroundColor: '#EFF6FF',
    elevation: 4,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  timelineItemCorrect: {
    borderColor: '#10B981',
    backgroundColor: '#ECFDF5',
  },
  timelineItemWrong: {
    borderColor: '#EF4444',
    backgroundColor: '#FEE2E2',
  },
  timelineNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineNumberSelected: {
    backgroundColor: '#3B82F6',
  },
  timelineNumberCorrect: {
    backgroundColor: '#10B981',
  },
  timelineNumberWrong: {
    backgroundColor: '#EF4444',
  },
  timelineNumberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6B7280',
  },
  timelineNumberTextWhite: {
    color: '#FFFFFF',
  },
  timelineItemText: {
    flex: 1,
    fontSize: 15,
    color: '#1F2937',
  },
  timelineItemTextSelected: {
    color: '#1E40AF',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
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
    borderColor: '#EF4444',
    backgroundColor: '#FEE2E2',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  optionTextSelected: {
    color: '#1E40AF',
    fontWeight: '600',
  },
  optionTextAnswered: {
    fontWeight: '600',
  },
  feedbackCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 12,
    gap: 12,
  },
  feedbackCardCorrect: {
    backgroundColor: '#ECFDF5',
    borderWidth: 2,
    borderColor: '#10B981',
  },
  feedbackCardWrong: {
    backgroundColor: '#FEE2E2',
    borderWidth: 2,
    borderColor: '#EF4444',
  },
  feedbackText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  feedbackTextCorrect: {
    color: '#059669',
  },
  feedbackTextWrong: {
    color: '#DC2626',
  },
  actionContainer: {
    padding: 16,
    backgroundColor: '#E8E3FF',
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
  errorText: {
    fontSize: 18,
    color: '#6B7280',
    marginTop: 16,
    marginBottom: 24,
  },
  retryButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  resultsContainer: {
    padding: 24,
    alignItems: 'center',
  },
  xpBadge: {
    backgroundColor: '#F59E0B',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginVertical: 24,
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
