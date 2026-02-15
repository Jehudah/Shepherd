import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather as Icon } from '@expo/vector-icons';
import Wooly from '../../components/Wooly';
import { useStore } from '../../store/useStore';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface TimelineLesson {
  id: string;
  title: string;
  description: string;
  period: string;
  questionCount: number;
  xpReward: number;
}

const timelineLessons: TimelineLesson[] = [
  {
    id: 'timeline-creation-1',
    title: 'Creation & Early History',
    description: 'From the beginning to the first humans',
    period: 'Genesis 1-11',
    questionCount: 10,
    xpReward: 100,
  },
  {
    id: 'timeline-creation-2',
    title: 'The Patriarchs',
    description: 'Abraham, Isaac, and Jacob',
    period: 'Genesis 12-50',
    questionCount: 10,
    xpReward: 100,
  },
  {
    id: 'timeline-creation-3',
    title: 'Exodus & Wilderness',
    description: 'Freedom from Egypt and journey to Canaan',
    period: 'Exodus - Deuteronomy',
    questionCount: 10,
    xpReward: 100,
  },
  {
    id: 'timeline-creation-4',
    title: 'Judges & Kings',
    description: 'From chaos to monarchy',
    period: 'Joshua - 2 Chronicles',
    questionCount: 10,
    xpReward: 100,
  },
  {
    id: 'timeline-creation-5',
    title: 'Exile & Return',
    description: 'Babylon and rebuilding',
    period: 'Ezra - Nehemiah',
    questionCount: 10,
    xpReward: 100,
  },
];

export default function TimelineScreen() {
  const navigation = useNavigation<NavigationProp>();
  const userProgress = useStore((state) => state.userProgress);

  const handleLessonPress = (lesson: TimelineLesson) => {
    navigation.navigate('LessonPlayer', {
      category: 'timeline',
      subcategory: 'creation',
      lessonId: lesson.id,
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const isLessonCompleted = (lessonId: string) => {
    const fullLessonId = `timeline-creation-${lessonId}`;
    return userProgress.completedLessons.includes(fullLessonId);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Biblical Timeline</Text>
          <Text style={styles.headerSubtitle}>Journey through biblical history</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Wooly's Welcome */}
        <Wooly
          message="Let's walk through history together! These lessons will help you understand when and how God's plan unfolded. It's quite a journey!"
          mood="excited"
        />

        {/* Timeline Visualization */}
        <View style={styles.timelineContainer}>
          {timelineLessons.map((lesson, index) => {
            const completed = isLessonCompleted(lesson.id);
            const isLast = index === timelineLessons.length - 1;

            return (
              <View key={lesson.id} style={styles.timelineItem}>
                {/* Timeline Dot and Line */}
                <View style={styles.timelineMarker}>
                  <View
                    style={[
                      styles.timelineDot,
                      completed && styles.timelineDotCompleted,
                    ]}
                  >
                    {completed ? (
                      <Icon name="check" size={16} color="#FFFFFF" />
                    ) : (
                      <Text style={styles.timelineDotText}>{index + 1}</Text>
                    )}
                  </View>
                  {!isLast && <View style={styles.timelineLine} />}
                </View>

                {/* Lesson Card */}
                <TouchableOpacity
                  style={styles.lessonCard}
                  onPress={() => handleLessonPress(lesson)}
                  activeOpacity={0.7}
                >
                  <View style={styles.periodBadge}>
                    <Icon name="book" size={12} color="#F59E0B" />
                    <Text style={styles.periodText}>{lesson.period}</Text>
                  </View>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  <Text style={styles.lessonDescription}>
                    {lesson.description}
                  </Text>
                  <View style={styles.lessonMeta}>
                    <View style={styles.metaItem}>
                      <Icon name="help-circle" size={14} color="#6B7280" />
                      <Text style={styles.metaText}>
                        {lesson.questionCount} questions
                      </Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Icon name="zap" size={14} color="#F59E0B" />
                      <Text style={styles.metaText}>+{lesson.xpReward} XP</Text>
                    </View>
                  </View>
                  {completed && (
                    <View style={styles.completedBadge}>
                      <Icon name="check-circle" size={16} color="#10B981" />
                      <Text style={styles.completedText}>Completed</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoEmoji}>📖</Text>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Historical Journey</Text>
            <Text style={styles.infoText}>
              These lessons follow the chronological order of events in Genesis. Complete them in sequence to understand how God's story unfolds!
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
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#F59E0B',
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
  timelineContainer: {
    marginTop: 16,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  timelineMarker: {
    alignItems: 'center',
    marginRight: 16,
    paddingTop: 8,
  },
  timelineDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  timelineDotCompleted: {
    backgroundColor: '#10B981',
  },
  timelineDotText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6B7280',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#E5E7EB',
    marginTop: 4,
  },
  lessonCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  periodBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
    marginBottom: 8,
  },
  periodText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#92400E',
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  lessonDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
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
  completedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  completedText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10B981',
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF7ED',
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    borderWidth: 2,
    borderColor: '#FED7AA',
  },
  infoEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9A3412',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#9A3412',
    lineHeight: 20,
  },
});
