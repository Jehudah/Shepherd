import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import { WoolyTip } from '../../components/Wooly';
import { useStore } from '../../store/useStore';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, 'ThemesLessons'>;

interface Lesson {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  xpReward: number;
}

const lessonsByTheme: Record<string, Lesson[]> = {
  love: [
    { id: 'love-1', title: 'God\'s Love for Us', description: 'Understanding the depth of God\'s love', questionCount: 12, xpReward: 120 },
    { id: 'love-2', title: 'Loving God', description: 'How to love God with all our heart', questionCount: 12, xpReward: 120 },
    { id: 'love-3', title: 'Loving Others', description: 'The command to love our neighbors', questionCount: 12, xpReward: 120 },
    { id: 'love-4', title: 'Love in Action', description: 'Demonstrating love through deeds', questionCount: 12, xpReward: 120 },
    { id: 'love-5', title: 'Perfect Love', description: 'How love casts out fear', questionCount: 12, xpReward: 120 },
  ],
  faith: [
    { id: 'faith-1', title: 'What is Faith?', description: 'The foundation of our belief', questionCount: 12, xpReward: 120 },
    { id: 'faith-2', title: 'Faith Heroes', description: 'Examples from Hebrews 11', questionCount: 12, xpReward: 120 },
    { id: 'faith-3', title: 'Growing in Faith', description: 'How faith develops and strengthens', questionCount: 12, xpReward: 120 },
    { id: 'faith-4', title: 'Faith and Works', description: 'Faith demonstrated through action', questionCount: 12, xpReward: 120 },
    { id: 'faith-5', title: 'Faith in Trials', description: 'Trusting God in difficult times', questionCount: 12, xpReward: 120 },
  ],
  hope: [
    { id: 'hope-1', title: 'Hope in Christ', description: 'Our living hope through resurrection', questionCount: 12, xpReward: 120 },
    { id: 'hope-2', title: 'Eternal Perspective', description: 'Looking beyond this world', questionCount: 12, xpReward: 120 },
    { id: 'hope-3', title: 'Hope in Suffering', description: 'Finding hope in hardship', questionCount: 12, xpReward: 120 },
    { id: 'hope-4', title: 'The Blessed Hope', description: 'Awaiting Christ\'s return', questionCount: 12, xpReward: 120 },
    { id: 'hope-5', title: 'Sharing Hope', description: 'Giving an answer for our hope', questionCount: 12, xpReward: 120 },
  ],
  peace: [
    { id: 'peace-1', title: 'Peace with God', description: 'Reconciliation through Christ', questionCount: 12, xpReward: 120 },
    { id: 'peace-2', title: 'The Peace of God', description: 'Peace that surpasses understanding', questionCount: 12, xpReward: 120 },
    { id: 'peace-3', title: 'Living in Peace', description: 'Peace in daily life', questionCount: 12, xpReward: 120 },
    { id: 'peace-4', title: 'Peacemakers', description: 'Blessed are the peacemakers', questionCount: 12, xpReward: 120 },
    { id: 'peace-5', title: 'Perfect Peace', description: 'Trusting in the Prince of Peace', questionCount: 12, xpReward: 120 },
  ],
  wisdom: [
    { id: 'wisdom-1', title: 'Fear of the Lord', description: 'The beginning of wisdom', questionCount: 12, xpReward: 120 },
    { id: 'wisdom-2', title: 'Asking for Wisdom', description: 'God\'s promise to give wisdom', questionCount: 12, xpReward: 120 },
    { id: 'wisdom-3', title: 'Wisdom from Above', description: 'Heavenly vs earthly wisdom', questionCount: 12, xpReward: 120 },
    { id: 'wisdom-4', title: 'Wise Living', description: 'Applying wisdom daily', questionCount: 12, xpReward: 120 },
    { id: 'wisdom-5', title: 'Christ Our Wisdom', description: 'Jesus as the wisdom of God', questionCount: 12, xpReward: 120 },
  ],
};

const themeNames: Record<string, string> = {
  love: 'Love',
  faith: 'Faith',
  hope: 'Hope',
  peace: 'Peace',
  wisdom: 'Wisdom',
};

const themeColors: Record<string, string> = {
  love: '#EF4444',
  faith: '#3B82F6',
  hope: '#F59E0B',
  peace: '#06B6D4',
  wisdom: '#8B5CF6',
};

export default function ThemesLessons() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const { themeId } = route.params;
  const userProgress = useStore((state) => state.userProgress);

  const lessons = lessonsByTheme[themeId] || [];
  const themeName = themeNames[themeId] || 'Theme';
  const themeColor = themeColors[themeId] || '#3B82F6';

  const handleLessonPress = (lesson: Lesson) => {
    navigation.navigate('LessonPlayer', {
      category: 'themes',
      subcategory: themeId,
      lessonId: lesson.id,
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const isLessonCompleted = (lessonId: string) => {
    const fullLessonId = `themes-${themeId}-${lessonId}`;
    return userProgress.completedLessons.includes(fullLessonId);
  };

  const completedCount = lessons.filter(l => isLessonCompleted(l.id)).length;
  const progressPercentage = (completedCount / lessons.length) * 100;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: themeColor }]}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{themeName}</Text>
          <Text style={styles.headerSubtitle}>
            {completedCount} of {lessons.length} lessons completed
          </Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarBg}>
          <View
            style={[
              styles.progressBar,
              { width: `${progressPercentage}%`, backgroundColor: themeColor },
            ]}
          />
        </View>
        <Text style={styles.progressText}>{Math.round(progressPercentage)}%</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Wooly's Tip */}
        <WoolyTip message="Complete these lessons in order to build a strong foundation in this theme!" />

        {/* Lessons List */}
        <View style={styles.lessonsList}>
          {lessons.map((lesson, index) => {
            const completed = isLessonCompleted(lesson.id);
            return (
              <TouchableOpacity
                key={lesson.id}
                style={styles.lessonCard}
                onPress={() => handleLessonPress(lesson)}
                activeOpacity={0.7}
              >
                <View style={styles.lessonHeader}>
                  <View
                    style={[
                      styles.lessonNumber,
                      completed && { backgroundColor: `${themeColor}20` },
                    ]}
                  >
                    {completed ? (
                      <Icon name="check-circle" size={28} color={themeColor} />
                    ) : (
                      <Text style={styles.lessonNumberText}>{index + 1}</Text>
                    )}
                  </View>
                  <View style={styles.lessonContent}>
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
                  </View>
                  <Icon
                    name="chevron-right"
                    size={20}
                    color={completed ? themeColor : '#9CA3AF'}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Completion Reward */}
        {completedCount === lessons.length && (
          <View style={[styles.completionCard, { borderColor: themeColor }]}>
            <Text style={styles.completionEmoji}>🎉</Text>
            <Text style={styles.completionTitle}>Theme Mastered!</Text>
            <Text style={styles.completionText}>
              You've completed all {themeName} lessons. Amazing work!
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
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
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 12,
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
    minWidth: 40,
    textAlign: 'right',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  lessonsList: {
    marginTop: 16,
    gap: 12,
  },
  lessonCard: {
    backgroundColor: '#FFFFFF',
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
    alignItems: 'center',
  },
  lessonNumber: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  lessonNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  lessonContent: {
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
    marginBottom: 8,
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
  completionCard: {
    backgroundColor: '#F0FDF4',
    borderRadius: 16,
    padding: 24,
    marginTop: 24,
    alignItems: 'center',
    borderWidth: 2,
  },
  completionEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  completionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: 8,
  },
  completionText: {
    fontSize: 14,
    color: '#16A34A',
    textAlign: 'center',
  },
});
