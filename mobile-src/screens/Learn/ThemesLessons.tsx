import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather as Icon } from '@expo/vector-icons';
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
    { id: 'theme-love-1', title: 'God\'s Love for Us', description: 'Understanding the depth of God\'s love', questionCount: 10, xpReward: 100 },
    { id: 'theme-love-2', title: 'Love One Another', description: 'Jesus\' command to love', questionCount: 10, xpReward: 100 },
    { id: 'theme-love-3', title: 'Love Your Enemies', description: 'Radical love that transforms', questionCount: 10, xpReward: 100 },
    { id: 'theme-love-4', title: 'The Love Chapter', description: '1 Corinthians 13 explored', questionCount: 10, xpReward: 100 },
    { id: 'theme-love-5', title: 'Perfect Love Casts Out Fear', description: 'Living in God\'s love', questionCount: 10, xpReward: 100 },
  ],
  faith: [
    { id: 'theme-faith-1', title: 'What is Faith?', description: 'The foundation of our belief', questionCount: 10, xpReward: 100 },
    { id: 'theme-faith-2', title: 'Faith of Abraham', description: 'The father of faith', questionCount: 10, xpReward: 100 },
    { id: 'theme-faith-3', title: 'Faith Like a Mustard Seed', description: 'Small faith, big results', questionCount: 10, xpReward: 100 },
    { id: 'theme-faith-4', title: 'Heroes of Faith', description: 'Hebrews 11 hall of fame', questionCount: 10, xpReward: 100 },
    { id: 'theme-faith-5', title: 'Living by Faith', description: 'Walking in faith daily', questionCount: 10, xpReward: 100 },
  ],
  grace: [
    { id: 'theme-grace-1', title: 'Unmerited Favor', description: 'God\'s amazing grace revealed', questionCount: 10, xpReward: 100 },
    { id: 'theme-grace-2', title: 'Saved by Grace', description: 'Grace through faith in Ephesians 2', questionCount: 10, xpReward: 100 },
    { id: 'theme-grace-3', title: 'Grace in the Old Testament', description: 'God\'s hesed love throughout Scripture', questionCount: 10, xpReward: 100 },
    { id: 'theme-grace-4', title: 'Living Under Grace', description: 'Freedom from law, power for righteousness', questionCount: 10, xpReward: 100 },
    { id: 'theme-grace-5', title: 'Transformed by Grace', description: 'Grace that teaches us to live godly lives', questionCount: 10, xpReward: 100 },
  ],
  hope: [
    { id: 'theme-hope-1', title: 'Hope in Christ', description: 'Our living hope through resurrection', questionCount: 10, xpReward: 100 },
    { id: 'theme-hope-2', title: 'Hope as an Anchor', description: 'Steadfast and sure', questionCount: 10, xpReward: 100 },
    { id: 'theme-hope-3', title: 'Hope in Suffering', description: 'Joy through trials', questionCount: 10, xpReward: 100 },
    { id: 'theme-hope-4', title: 'Future Hope', description: 'Eternal promises', questionCount: 10, xpReward: 100 },
    { id: 'theme-hope-5', title: 'Hope Does Not Disappoint', description: 'God\'s faithful character', questionCount: 10, xpReward: 100 },
  ],
  forgiveness: [
    { id: 'theme-forgiveness-1', title: 'The Gift of Forgiveness', description: 'Receiving and extending forgiveness', questionCount: 10, xpReward: 100 },
    { id: 'theme-forgiveness-2', title: 'How Many Times to Forgive?', description: 'Jesus on seventy times seven', questionCount: 10, xpReward: 100 },
    { id: 'theme-forgiveness-3', title: 'Forgiveness in the Psalms', description: 'David\'s prayers for mercy and cleansing', questionCount: 10, xpReward: 100 },
    { id: 'theme-forgiveness-4', title: 'Forgiveness Through Christ', description: 'Redemption and the blood of Jesus', questionCount: 10, xpReward: 100 },
    { id: 'theme-forgiveness-5', title: 'Walking in Forgiveness', description: 'Releasing bitterness and living free', questionCount: 10, xpReward: 100 },
  ],
  holiness: [
    { id: 'theme-holiness-1', title: 'Called to Holiness', description: 'Set apart for God\'s purposes', questionCount: 10, xpReward: 100 },
    { id: 'theme-holiness-2', title: 'The Holy God', description: 'God\'s holiness in Isaiah and Revelation', questionCount: 10, xpReward: 100 },
    { id: 'theme-holiness-3', title: 'Sanctified by Truth', description: 'The Spirit\'s work of making us holy', questionCount: 10, xpReward: 100 },
    { id: 'theme-holiness-4', title: 'Holiness in Daily Life', description: 'Practical holiness in thoughts and actions', questionCount: 10, xpReward: 100 },
    { id: 'theme-holiness-5', title: 'The Pursuit of Holiness', description: 'Running after God with all our heart', questionCount: 10, xpReward: 100 },
  ],
  obedience: [
    { id: 'theme-obedience-1', title: 'Obedience from the Heart', description: 'Following God\'s commands', questionCount: 10, xpReward: 100 },
    { id: 'theme-obedience-2', title: 'Better Than Sacrifice', description: 'Obedience in the Old Testament', questionCount: 10, xpReward: 100 },
    { id: 'theme-obedience-3', title: 'If You Love Me, Keep My Commands', description: 'Jesus on love and obedience', questionCount: 10, xpReward: 100 },
    { id: 'theme-obedience-4', title: 'Obedience and Blessing', description: 'God\'s rewards for faithful following', questionCount: 10, xpReward: 100 },
    { id: 'theme-obedience-5', title: 'Obedience Through Faith', description: 'The obedience that comes from faith', questionCount: 10, xpReward: 100 },
  ],
  peace: [
    { id: 'theme-peace-1', title: 'Peace with God', description: 'Reconciliation through Christ', questionCount: 10, xpReward: 100 },
    { id: 'theme-peace-2', title: 'Peace of God', description: 'Guarding hearts and minds', questionCount: 10, xpReward: 100 },
    { id: 'theme-peace-3', title: 'Prince of Peace', description: 'Jesus our peacemaker', questionCount: 10, xpReward: 100 },
    { id: 'theme-peace-4', title: 'Peace in the Storm', description: 'Calm in chaos', questionCount: 10, xpReward: 100 },
    { id: 'theme-peace-5', title: 'Peacemakers', description: 'Blessed are those who make peace', questionCount: 10, xpReward: 100 },
  ],
  prayer: [
    { id: 'theme-prayer-1', title: 'The Power of Prayer', description: 'Communicating with God', questionCount: 10, xpReward: 100 },
    { id: 'theme-prayer-2', title: 'The Lord\'s Prayer', description: 'Jesus\' model for how to pray', questionCount: 10, xpReward: 100 },
    { id: 'theme-prayer-3', title: 'Persistent Prayer', description: 'Asking, seeking, knocking without giving up', questionCount: 10, xpReward: 100 },
    { id: 'theme-prayer-4', title: 'Prayer in the Psalms', description: 'Israel\'s prayers of praise and lament', questionCount: 10, xpReward: 100 },
    { id: 'theme-prayer-5', title: 'Praying in the Spirit', description: 'Intercession and spiritual prayer', questionCount: 10, xpReward: 100 },
  ],
  repentance: [
    { id: 'theme-repentance-1', title: 'True Repentance', description: 'Turning from sin to God', questionCount: 10, xpReward: 100 },
    { id: 'theme-repentance-2', title: 'Repentance in the Old Testament', description: 'Turning back to God in Israel\'s history', questionCount: 10, xpReward: 100 },
    { id: 'theme-repentance-3', title: 'John the Baptist\'s Call', description: 'Prepare the way of the Lord', questionCount: 10, xpReward: 100 },
    { id: 'theme-repentance-4', title: 'The Prodigal Son', description: 'Coming to our senses and coming home', questionCount: 10, xpReward: 100 },
    { id: 'theme-repentance-5', title: 'Repentance and the New Life', description: 'Bearing fruit worthy of repentance', questionCount: 10, xpReward: 100 },
  ],
  wisdom: [
    { id: 'theme-wisdom-1', title: 'Fear of the Lord', description: 'The beginning of wisdom', questionCount: 10, xpReward: 100 },
    { id: 'theme-wisdom-2', title: 'Solomon\'s Wisdom', description: 'The wisest man', questionCount: 10, xpReward: 100 },
    { id: 'theme-wisdom-3', title: 'Wisdom from Above', description: 'Pure, peaceful, gentle', questionCount: 10, xpReward: 100 },
    { id: 'theme-wisdom-4', title: 'Proverbs of Wisdom', description: 'Practical wisdom for life', questionCount: 10, xpReward: 100 },
    { id: 'theme-wisdom-5', title: 'Christ Our Wisdom', description: 'True wisdom in Jesus', questionCount: 10, xpReward: 100 },
  ],
  worship: [
    { id: 'theme-worship-1', title: 'Worship in Spirit and Truth', description: 'Honoring God wholeheartedly', questionCount: 10, xpReward: 100 },
    { id: 'theme-worship-2', title: 'Worship in the Psalms', description: 'Praising God through song and prayer', questionCount: 10, xpReward: 100 },
    { id: 'theme-worship-3', title: 'The Tabernacle & Temple', description: 'God\'s dwelling place and worship in Israel', questionCount: 10, xpReward: 100 },
    { id: 'theme-worship-4', title: 'Sacrifice of Praise', description: 'Offering worship in all circumstances', questionCount: 10, xpReward: 100 },
    { id: 'theme-worship-5', title: 'Worship in Revelation', description: 'Heavenly worship and the Lamb', questionCount: 10, xpReward: 100 },
  ],
  'spiritual-warfare': [
    { id: 'theme-warfare-1', title: 'The Armor of God', description: 'Standing firm against spiritual forces', questionCount: 10, xpReward: 100 },
    { id: 'theme-warfare-2', title: 'Know Your Enemy', description: 'Understanding the schemes of the devil', questionCount: 10, xpReward: 100 },
    { id: 'theme-warfare-3', title: 'Weapons of Warfare', description: 'Prayer, faith, and the Word as weapons', questionCount: 10, xpReward: 100 },
    { id: 'theme-warfare-4', title: 'Victory in Christ', description: 'More than conquerors through Him', questionCount: 10, xpReward: 100 },
    { id: 'theme-warfare-5', title: 'Standing Firm', description: 'Resisting the devil and overcoming', questionCount: 10, xpReward: 100 },
  ],
};

const themeNames: Record<string, string> = {
  love: 'Love',
  faith: 'Faith',
  grace: 'Grace',
  hope: 'Hope',
  forgiveness: 'Forgiveness',
  holiness: 'Holiness',
  obedience: 'Obedience',
  peace: 'Peace',
  prayer: 'Prayer',
  repentance: 'Repentance',
  wisdom: 'Wisdom',
  worship: 'Worship',
  'spiritual-warfare': 'Spiritual Warfare',
};

const themeColors: Record<string, string> = {
  love: '#EF4444',
  faith: '#3B82F6',
  grace: '#10B981',
  hope: '#F59E0B',
  forgiveness: '#06B6D4',
  holiness: '#8B5CF6',
  obedience: '#F59E0B',
  peace: '#06B6D4',
  prayer: '#3B82F6',
  repentance: '#EF4444',
  wisdom: '#8B5CF6',
  worship: '#10B981',
  'spiritual-warfare': '#EF4444',
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
    <SafeAreaView style={styles.container}>
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
    backgroundColor: '#E8E3FF', // Light lilac
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
