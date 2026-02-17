import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather as Icon } from '@expo/vector-icons';
import { RootStackParamList } from '../../types';
import {
  fetchBibleVerse,
  parseVerseIntoWords,
  generateProgressiveLevels,
  BibleVerse,
} from '../../services/bibleApiService';
import { useStore } from '../../store/useStore';
import Wooly from '../../components/Wooly';

const iconAlias = Icon;

type ProgressiveVerseScreenRouteProp = RouteProp<RootStackParamList, 'ProgressiveVerse'>;
type ProgressiveVerseScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProgressiveVerse'
>;

interface Props {
  route: ProgressiveVerseScreenRouteProp;
  navigation: ProgressiveVerseScreenNavigationProp;
}

interface Exercise {
  lesson: number;
  exercise: number;
  exerciseType: 'fill-blanks' | 'word-placement';
  hiddenIndices: number[];
  hidePercentage: number;
  description: string;
}

export default function ProgressiveVerseScreen({ route, navigation }: Props) {
  const { verseReference, category, lessonLevel } = route.params;
  const { updateXP, completeLesson } = useStore();

  const [loading, setLoading] = useState(true);
  const [verseData, setVerseData] = useState<BibleVerse | null>(null);
  const [words, setWords] = useState<string[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [revealedWords, setRevealedWords] = useState<Set<number>>(new Set());
  const [placedWords, setPlacedWords] = useState<Map<number, number>>(new Map()); // blank position -> word index
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null); // for drag-and-drop
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    loadVerse();
  }, [verseReference]);

  const loadVerse = async () => {
    try {
      setLoading(true);
      const data = await fetchBibleVerse(verseReference, 'kjv');
      setVerseData(data);

      const verseWords = parseVerseIntoWords(data.text);
      setWords(verseWords);

      // 5 lessons, 4 exercises per lesson = 20 total exercises
      const allExercises = generateProgressiveLevels(verseWords, 5, 4);

      // Filter to only include exercises for the selected lesson level
      const lessonExercises = allExercises.filter(ex => ex.lesson === lessonLevel);
      setExercises(lessonExercises);

      setLoading(false);
    } catch (error) {
      console.error('Error loading verse:', error);
      Alert.alert('Error', 'Failed to load verse. Please try again.');
      setLoading(false);
    }
  };

  // Handle tapping a word in fill-blanks mode
  const handleWordPress = (index: number) => {
    if (currentExerciseIndex >= exercises.length) return;
    const currentExercise = exercises[currentExerciseIndex];

    if (currentExercise.exerciseType === 'fill-blanks' && currentExercise.hiddenIndices.includes(index)) {
      const newRevealed = new Set(revealedWords);
      newRevealed.add(index);
      setRevealedWords(newRevealed);
    }
  };

  // Handle selecting a word from the word bank (step 1 of drag-drop)
  const handleSelectWord = (wordIndex: number) => {
    if (currentExerciseIndex >= exercises.length) return;
    const currentExercise = exercises[currentExerciseIndex];

    if (currentExercise.exerciseType === 'word-placement') {
      setSelectedWordIndex(wordIndex);
    }
  };

  // Handle tapping a blank to place the selected word (step 2 of drag-drop)
  const handlePlaceWord = (blankPosition: number) => {
    if (currentExerciseIndex >= exercises.length || selectedWordIndex === null) return;
    const currentExercise = exercises[currentExerciseIndex];

    if (currentExercise.exerciseType === 'word-placement') {
      // Place the selected word at this blank position
      const newPlaced = new Map(placedWords);
      newPlaced.set(blankPosition, selectedWordIndex);
      setPlacedWords(newPlaced);
      setSelectedWordIndex(null); // Deselect word
    }
  };

  // Remove a placed word (tap to remove)
  const handleRemovePlacedWord = (blankPosition: number) => {
    if (currentExerciseIndex >= exercises.length) return;
    const currentExercise = exercises[currentExerciseIndex];

    if (currentExercise.exerciseType === 'word-placement') {
      const newPlaced = new Map(placedWords);
      newPlaced.delete(blankPosition);
      setPlacedWords(newPlaced);
    }
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setRevealedWords(new Set());
      setPlacedWords(new Map());
      setSelectedWordIndex(null);
    } else {
      // Completed all exercises for this lesson level
      const lessonId = `verse-${category}-${verseReference.replace(/[^\w]/g, '-')}-level-${lessonLevel}`;
      const xpEarned = 20; // 20 XP per lesson level (4 exercises × 5 XP)
      updateXP(xpEarned);
      completeLesson(lessonId, 'verses');
      setShowResults(true);
    }
  };

  const handleRevealAll = () => {
    if (currentExerciseIndex >= exercises.length) return;
    const currentExercise = exercises[currentExerciseIndex];

    if (currentExercise.exerciseType === 'fill-blanks') {
      setRevealedWords(new Set(currentExercise.hiddenIndices));
    } else if (currentExercise.exerciseType === 'word-placement') {
      // Auto-place all words correctly
      const newPlaced = new Map<number, number>();
      currentExercise.hiddenIndices.forEach(idx => {
        newPlaced.set(idx, idx);
      });
      setPlacedWords(newPlaced);
      setSelectedWordIndex(null);
    }
  };

  const isWordHidden = (index: number): boolean => {
    if (currentExerciseIndex >= exercises.length) return false;
    const currentExercise = exercises[currentExerciseIndex];

    if (currentExercise.exerciseType === 'fill-blanks') {
      return currentExercise.hiddenIndices.includes(index) && !revealedWords.has(index);
    } else if (currentExercise.exerciseType === 'word-placement') {
      return currentExercise.hiddenIndices.includes(index) && !placedWords.has(index);
    }

    return false;
  };

  const isWordRevealed = (index: number): boolean => {
    return revealedWords.has(index);
  };

  const isWordPlaced = (index: number): boolean => {
    return placedWords.has(index);
  };

  const getPlacedWordIndex = (position: number): number | undefined => {
    return placedWords.get(position);
  };

  const isWordCorrectlyPlaced = (blankPosition: number): boolean => {
    const placedWordIdx = placedWords.get(blankPosition);
    return placedWordIdx !== undefined && placedWordIdx === blankPosition;
  };

  const allWordsCompleted = (): boolean => {
    if (currentExerciseIndex >= exercises.length) return true;
    const currentExercise = exercises[currentExerciseIndex];

    if (currentExercise.exerciseType === 'fill-blanks') {
      return currentExercise.hiddenIndices.every(idx => revealedWords.has(idx));
    } else if (currentExercise.exerciseType === 'word-placement') {
      // Check if all blanks are filled AND correctly placed
      return currentExercise.hiddenIndices.every(idx =>
        placedWords.has(idx) && placedWords.get(idx) === idx
      );
    }

    return false;
  };

  const getAvailableWords = (): Array<{ index: number; word: string }> => {
    if (currentExerciseIndex >= exercises.length) return [];
    const currentExercise = exercises[currentExerciseIndex];

    if (currentExercise.exerciseType !== 'word-placement') return [];

    // Get words that need to be placed but haven't been placed yet
    const placedWordIndices = new Set(Array.from(placedWords.values()));

    return currentExercise.hiddenIndices
      .filter(idx => !placedWordIndices.has(idx))
      .map(idx => ({ index: idx, word: words[idx] }))
      .sort(() => Math.random() - 0.5); // Shuffle
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3B82F6" />
          <Text style={styles.loadingText}>Loading verse...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!verseData || exercises.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Icon name="alert-circle" size={48} color="#EF4444" />
          <Text style={styles.errorText}>Failed to load verse</Text>
          <TouchableOpacity style={styles.retryButton} onPress={loadVerse}>
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (showResults) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.resultsContainer}>
          <Wooly
            message={`Great job! You've completed Lesson ${lessonLevel}! ${lessonLevel < 5 ? 'Try the next level for an extra challenge!' : "You've mastered this verse!"}`}
            mood="celebrating"
            size="medium"
          />

          <View style={styles.xpBadge}>
            <Icon name="award" size={32} color="#FFFFFF" />
            <Text style={styles.xpText}>+20 XP</Text>
            <Text style={styles.xpSubtext}>Lesson {lessonLevel} Complete!</Text>
          </View>

          <View style={styles.verseCard}>
            <Text style={styles.verseReference}>{verseData.reference}</Text>
            <Text style={styles.verseTextFull}>{verseData.text}</Text>
            <Text style={styles.verseTranslation}>{verseData.translation_name}</Text>
          </View>

          {lessonLevel < 5 && (
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => {
                navigation.replace('ProgressiveVerse', {
                  verseReference,
                  category,
                  lessonLevel: lessonLevel + 1,
                });
              }}
            >
              <Text style={styles.primaryButtonText}>Next Level ({lessonLevel + 1})</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={lessonLevel < 5 ? styles.secondaryButton : styles.primaryButton}
            onPress={() => navigation.navigate('VerseLessons', { verseReference, category })}
          >
            <Text style={lessonLevel < 5 ? styles.secondaryButtonText : styles.primaryButtonText}>
              Choose Another Level
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => {
              setCurrentExerciseIndex(0);
              setRevealedWords(new Set());
              setPlacedWords(new Map());
              setSelectedWordIndex(null);
              setShowResults(false);
            }}
          >
            <Text style={styles.secondaryButtonText}>Practice Again</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const currentExercise = exercises[currentExerciseIndex];
  const currentLesson = currentExercise.lesson;
  const exercisesInLesson = exercises.filter(ex => ex.lesson === currentLesson);
  const lessonProgress = exercisesInLesson.findIndex(ex => ex.exercise === currentExercise.exercise) + 1;
  const exerciseTypeText = currentExercise.exerciseType === 'fill-blanks' ? 'Reveal Words' : 'Drag Words';

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#3B82F6" />
          <Text style={styles.backText}>Exit</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Lesson {currentLesson} ({currentExercise.hidePercentage}%) - {exerciseTypeText}
        </Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${(lessonProgress / exercisesInLesson.length) * 100}%` }]} />
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Reference */}
        <View style={styles.referenceCard}>
          <Icon name="bookmark" size={20} color="#EF4444" />
          <Text style={styles.referenceText}>{verseData.reference}</Text>
        </View>

        {/* Exercise Description */}
        <Wooly
          message={currentExercise.description}
          mood={currentLesson < 2 ? 'encouraging' : currentLesson < 4 ? 'thinking' : 'excited'}
          size="small"
        />

        {/* Verse Display */}
        <View style={styles.verseContainer}>
          <View style={styles.wordsGrid}>
            {words.map((word, index) => {
              const hidden = isWordHidden(index);
              const revealed = isWordRevealed(index);
              const placed = isWordPlaced(index);
              const placedWordIdx = getPlacedWordIndex(index);
              const isCorrect = isWordCorrectlyPlaced(index);
              const placedWord = placedWordIdx !== undefined ? words[placedWordIdx] : '';

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.wordButton,
                    hidden && styles.wordButtonHidden,
                    revealed && styles.wordButtonRevealed,
                    placed && isCorrect && styles.wordButtonCorrect,
                    placed && !isCorrect && styles.wordButtonIncorrect,
                  ]}
                  onPress={() => {
                    if (currentExercise.exerciseType === 'fill-blanks') {
                      handleWordPress(index);
                    } else if (currentExercise.exerciseType === 'word-placement' && hidden) {
                      handlePlaceWord(index);
                    } else if (placed) {
                      handleRemovePlacedWord(index);
                    }
                  }}
                  disabled={currentExercise.exerciseType === 'fill-blanks' && !hidden}
                >
                  <Text
                    style={[
                      styles.wordText,
                      hidden && !revealed && !placed && styles.wordTextHidden,
                      revealed && styles.wordTextRevealed,
                      placed && isCorrect && styles.wordTextCorrect,
                      placed && !isCorrect && styles.wordTextIncorrect,
                    ]}
                  >
                    {hidden && !revealed && !placed ? '___' : placed ? placedWord : word}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Word Bank for Word Placement */}
        {currentExercise.exerciseType === 'word-placement' && (
          <View style={styles.wordBankContainer}>
            <Text style={styles.wordBankTitle}>
              {selectedWordIndex !== null
                ? 'Tap a blank above to place the word'
                : 'Tap a word, then tap where it belongs:'}
            </Text>
            <View style={styles.wordBank}>
              {getAvailableWords().map((item, idx) => (
                <TouchableOpacity
                  key={`${item.index}-${idx}`}
                  style={[
                    styles.wordBankButton,
                    selectedWordIndex === item.index && styles.wordBankButtonSelected,
                  ]}
                  onPress={() => handleSelectWord(item.index)}
                >
                  <Text style={[
                    styles.wordBankText,
                    selectedWordIndex === item.index && styles.wordBankTextSelected,
                  ]}>
                    {item.word}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Hints */}
        <View style={styles.hintsCard}>
          <View style={styles.hintsHeader}>
            <Icon name="help-circle" size={18} color="#6B7280" />
            <Text style={styles.hintsTitle}>Need Help?</Text>
          </View>
          <Text style={styles.hintsText}>
            {currentExercise.exerciseType === 'fill-blanks'
              ? 'Tap the blank spaces to reveal words. Try to remember as many as you can before revealing!'
              : 'Select a word below, then tap the blank where it belongs. Tap a placed word to remove it.'}
          </Text>
          <TouchableOpacity style={styles.revealButton} onPress={handleRevealAll}>
            <Icon name="eye" size={16} color="#6B7280" />
            <Text style={styles.revealButtonText}>
              {currentExercise.exerciseType === 'fill-blanks' ? 'Reveal All' : 'Show Answers'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Action Button */}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={[styles.actionButton, !allWordsCompleted() && styles.actionButtonDisabled]}
          onPress={handleNextExercise}
          disabled={!allWordsCompleted()}
        >
          <Text style={styles.actionButtonText}>
            {currentExerciseIndex < exercises.length - 1 ? 'Next Exercise' : 'Complete'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E3FF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6B7280',
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
  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  referenceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 16,
    gap: 8,
  },
  referenceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#991B1B',
  },
  verseContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  wordsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  wordButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#F3F4F6',
  },
  wordButtonHidden: {
    backgroundColor: '#FEE2E2',
    borderWidth: 2,
    borderColor: '#FECACA',
    borderStyle: 'dashed',
  },
  wordButtonRevealed: {
    backgroundColor: '#D1FAE5',
    borderWidth: 2,
    borderColor: '#6EE7B7',
  },
  wordButtonCorrect: {
    backgroundColor: '#D1FAE5',
    borderWidth: 2,
    borderColor: '#10B981',
  },
  wordButtonIncorrect: {
    backgroundColor: '#FEE2E2',
    borderWidth: 2,
    borderColor: '#EF4444',
  },
  wordText: {
    fontSize: 16,
    color: '#1F2937',
  },
  wordTextHidden: {
    color: '#EF4444',
    fontWeight: '600',
  },
  wordTextRevealed: {
    color: '#059669',
    fontWeight: '600',
  },
  wordTextCorrect: {
    color: '#059669',
    fontWeight: '600',
  },
  wordTextIncorrect: {
    color: '#DC2626',
    fontWeight: '600',
  },
  wordBankContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  wordBankTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  wordBank: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  wordBankButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#3B82F6',
  },
  wordBankButtonSelected: {
    backgroundColor: '#F59E0B',
    borderWidth: 2,
    borderColor: '#D97706',
  },
  wordBankText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  wordBankTextSelected: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  hintsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  hintsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  hintsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  hintsText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  revealButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#F3F4F6',
    paddingVertical: 8,
    borderRadius: 8,
  },
  revealButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  actionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
  verseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  verseReference: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EF4444',
    marginBottom: 12,
  },
  verseTextFull: {
    fontSize: 16,
    color: '#1F2937',
    lineHeight: 24,
    marginBottom: 12,
  },
  verseTranslation: {
    fontSize: 12,
    color: '#6B7280',
    fontStyle: 'italic',
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
