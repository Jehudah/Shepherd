import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather as Icon } from '@expo/vector-icons';
import Wooly from '../../components/Wooly';
import { useStore } from '../../store/useStore';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface VerseLesson {
  id: string;
  title: string;
  description: string;
  verseReference: string;
  difficulty: 1 | 2 | 3;
  levels: number;
  xpPerLevel: number;
}

const verseLessons: VerseLesson[] = [
  {
    id: 'verses-salvation-1',
    title: 'John 3:16',
    description: 'For God so loved the world...',
    verseReference: 'John 3:16',
    difficulty: 1,
    levels: 5,
    xpPerLevel: 20,
  },
  {
    id: 'verses-salvation-2',
    title: 'Romans 3:23',
    description: 'For all have sinned...',
    verseReference: 'Romans 3:23',
    difficulty: 1,
    levels: 5,
    xpPerLevel: 20,
  },
  {
    id: 'verses-salvation-3',
    title: 'Romans 6:23',
    description: 'The wages of sin is death...',
    verseReference: 'Romans 6:23',
    difficulty: 2,
    levels: 5,
    xpPerLevel: 20,
  },
  {
    id: 'verses-salvation-4',
    title: 'Ephesians 2:8-9',
    description: 'By grace you have been saved...',
    verseReference: 'Ephesians 2:8-9',
    difficulty: 2,
    levels: 5,
    xpPerLevel: 20,
  },
  {
    id: 'verses-salvation-5',
    title: 'Romans 10:9',
    description: 'If you confess with your mouth...',
    verseReference: 'Romans 10:9',
    difficulty: 2,
    levels: 5,
    xpPerLevel: 20,
  },
];

export default function MemorizeVersesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const userProgress = useStore((state) => state.userProgress);

  const handleLessonPress = (lesson: VerseLesson) => {
    navigation.navigate('VerseLessons', {
      verseReference: lesson.verseReference,
      category: 'salvation',
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const isLessonCompleted = (lessonId: string) => {
    const fullLessonId = `verses-salvation-${lessonId}`;
    return userProgress.completedLessons.includes(fullLessonId);
  };

  const getDifficultyColor = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return '#10B981';
      case 2:
        return '#F59E0B';
      case 3:
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const getDifficultyLabel = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return 'Beginner';
      case 2:
        return 'Intermediate';
      case 3:
        return 'Advanced';
      default:
        return 'Unknown';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Memorize Verses</Text>
          <Text style={styles.headerSubtitle}>Hide God's word in your heart</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Wooly's Welcome */}
        <Wooly
          message="Let's memorize Scripture by placing words in the right order! Each verse has 5 levels (20%, 40%, 60%, 80%, 100% hidden). Start easy and work your way up!"
          mood="encouraging"
        />

        {/* Topic Badge */}
        <View style={styles.topicBadge}>
          <Icon name="heart" size={20} color="#EF4444" />
          <Text style={styles.topicText}>Salvation Series</Text>
        </View>

        {/* Lessons List */}
        <View style={styles.lessonsList}>
          {verseLessons.map((lesson, index) => {
            const completed = isLessonCompleted(lesson.id);
            return (
              <TouchableOpacity
                key={lesson.id}
                style={styles.lessonCard}
                onPress={() => handleLessonPress(lesson)}
                activeOpacity={0.7}
              >
                <View style={styles.lessonHeader}>
                  <View style={styles.lessonNumber}>
                    {completed ? (
                      <Icon name="check-circle" size={28} color="#EF4444" />
                    ) : (
                      <Text style={styles.lessonNumberText}>{index + 1}</Text>
                    )}
                  </View>
                  <View style={styles.lessonContent}>
                    <View style={styles.titleRow}>
                      <Text style={styles.lessonTitle}>{lesson.title}</Text>
                      <View
                        style={[
                          styles.difficultyBadge,
                          { backgroundColor: `${getDifficultyColor(lesson.difficulty)}20` },
                        ]}
                      >
                        <Text
                          style={[
                            styles.difficultyText,
                            { color: getDifficultyColor(lesson.difficulty) },
                          ]}
                        >
                          {getDifficultyLabel(lesson.difficulty)}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.lessonDescription}>
                      {lesson.description}
                    </Text>

                    {/* Level Badges */}
                    <View style={styles.versesPreview}>
                      {[20, 40, 60, 80, 100].map((percentage, i) => (
                        <View key={i} style={styles.verseBadge}>
                          <Icon name="layers" size={12} color="#EF4444" />
                          <Text style={styles.verseText}>{percentage}%</Text>
                        </View>
                      ))}
                    </View>

                    <View style={styles.lessonMeta}>
                      <View style={styles.metaItem}>
                        <Icon name="target" size={14} color="#6B7280" />
                        <Text style={styles.metaText}>
                          {lesson.levels} levels
                        </Text>
                      </View>
                      <View style={styles.metaItem}>
                        <Icon name="zap" size={14} color="#F59E0B" />
                        <Text style={styles.metaText}>+{lesson.xpPerLevel} XP/level</Text>
                      </View>
                    </View>
                  </View>
                  <Icon name="chevron-right" size={20} color="#9CA3AF" />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Tips Card */}
        <View style={styles.tipsCard}>
          <View style={styles.tipsHeader}>
            <Icon name="zap" size={20} color="#8B5CF6" />
            <Text style={styles.tipsTitle}>How it Works</Text>
          </View>
          <View style={styles.tipsList}>
            <Text style={styles.tipItem}>• Tap to reveal words or drag them to the right place</Text>
            <Text style={styles.tipItem}>• Start with Level 1 (20% hidden)</Text>
            <Text style={styles.tipItem}>• Each level has 4 exercises</Text>
            <Text style={styles.tipItem}>• Complete all 5 levels for maximum XP!</Text>
          </View>
        </View>
      </ScrollView>
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
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: '#EF4444',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 2,
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  topicBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 16,
    gap: 8,
  },
  topicText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#991B1B',
  },
  lessonsList: {
    marginTop: 16,
    gap: 12,
  },
  lessonCard: {
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  lessonHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  lessonNumber: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  lessonNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EF4444',
  },
  lessonContent: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    flex: 1,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginLeft: 8,
  },
  difficultyText: {
    fontSize: 11,
    fontWeight: '600',
  },
  lessonDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  versesPreview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 12,
  },
  verseBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
  },
  verseText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#991B1B',
  },
  lessonMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
  },
  tipsCard: {
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    borderWidth: 2,
    borderColor: '#DDD6FE',
  },
  tipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5B21B6',
  },
  tipsList: {
    gap: 6,
  },
  tipItem: {
    fontSize: 14,
    color: '#5B21B6',
    lineHeight: 20,
  },
});
