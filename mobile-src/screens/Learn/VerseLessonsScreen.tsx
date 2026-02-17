import React from 'react';
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
import { RootStackParamList } from '../../types';
import Wooly from '../../components/Wooly';

type VerseLessonsScreenRouteProp = RouteProp<RootStackParamList, 'VerseLessons'>;
type VerseLessonsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VerseLessons'
>;

interface Props {
  route: VerseLessonsScreenRouteProp;
  navigation: VerseLessonsScreenNavigationProp;
}

interface Lesson {
  level: number;
  percentage: number;
  title: string;
  description: string;
  color: string;
  icon: string;
}

const LESSONS: Lesson[] = [
  {
    level: 1,
    percentage: 20,
    title: 'Level 1 - Getting Started',
    description: 'Just getting started - 20% of words hidden',
    color: '#10B981',
    icon: 'play-circle',
  },
  {
    level: 2,
    percentage: 40,
    title: 'Level 2 - Building Memory',
    description: 'Building memory - 40% of words hidden',
    color: '#3B82F6',
    icon: 'trending-up',
  },
  {
    level: 3,
    percentage: 60,
    title: 'Level 3 - Good Progress',
    description: 'Making good progress - 60% of words hidden',
    color: '#F59E0B',
    icon: 'star',
  },
  {
    level: 4,
    percentage: 80,
    title: 'Level 4 - Almost There',
    description: "You're doing great - 80% of words hidden",
    color: '#EF4444',
    icon: 'award',
  },
  {
    level: 5,
    percentage: 100,
    title: 'Level 5 - Final Challenge',
    description: 'Final challenge - 100% of words hidden',
    color: '#8B5CF6',
    icon: 'zap',
  },
];

export default function VerseLessonsScreen({ route, navigation }: Props) {
  const { verseReference, category } = route.params;

  const handleLessonPress = (lessonLevel: number) => {
    navigation.navigate('ProgressiveVerse', {
      verseReference,
      category,
      lessonLevel,
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#3B82F6" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Verse Reference */}
        <View style={styles.verseCard}>
          <Icon name="bookmark" size={24} color="#EF4444" />
          <Text style={styles.verseReference}>{verseReference}</Text>
        </View>

        {/* Wooly Instructions */}
        <Wooly
          message="Choose a difficulty level to practice this verse. Each level has 4 exercises. Start with Level 1 and work your way up!"
          mood="encouraging"
          size="small"
        />

        {/* Lessons List */}
        <View style={styles.lessonsContainer}>
          <Text style={styles.sectionTitle}>Select Lesson Level</Text>
          {LESSONS.map((lesson) => (
            <TouchableOpacity
              key={lesson.level}
              style={[styles.lessonCard, { borderLeftColor: lesson.color }]}
              onPress={() => handleLessonPress(lesson.level)}
            >
              <View style={[styles.iconContainer, { backgroundColor: lesson.color }]}>
                <Icon name={lesson.icon as any} size={24} color="#FFFFFF" />
              </View>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.lessonDescription}>{lesson.description}</Text>
                <View style={styles.exerciseInfo}>
                  <Icon name="layers" size={14} color="#6B7280" />
                  <Text style={styles.exerciseText}>4 exercises</Text>
                </View>
              </View>
              <Icon name="chevron-right" size={24} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Icon name="info" size={20} color="#3B82F6" />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>How it works</Text>
            <Text style={styles.infoText}>
              • Each level has 4 exercises{'\n'}
              • Exercises alternate between revealing and placing words{'\n'}
              • Complete all exercises to earn 20 XP per level{'\n'}
              • Higher levels hide more words for extra challenge
            </Text>
          </View>
        </View>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  verseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 16,
    gap: 12,
  },
  verseReference: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#991B1B',
  },
  lessonsContainer: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  lessonDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 6,
  },
  exerciseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  exerciseText: {
    fontSize: 12,
    color: '#6B7280',
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    gap: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 13,
    color: '#1E40AF',
    lineHeight: 20,
  },
});
