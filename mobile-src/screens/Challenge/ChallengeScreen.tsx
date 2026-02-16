import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather as Icon } from '@expo/vector-icons';
import { useStore } from '../../store/useStore';
import Wooly from '../../components/Wooly';

interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  xpReward: number;
  requirements: string[];
  completed: boolean;
}

export default function ChallengeScreen() {
  const userProgress = useStore((state) => state.userProgress);

  // Sample challenges - in full implementation, these would be dynamic
  const dailyChallenges: Challenge[] = [
    {
      id: 'daily-1',
      title: 'Complete 3 Lessons',
      description: 'Finish any 3 lessons today',
      icon: 'book-open',
      color: '#3B82F6',
      xpReward: 50,
      requirements: ['0/3 lessons completed'],
      completed: false,
    },
    {
      id: 'daily-2',
      title: 'Perfect Score',
      description: 'Get 100% on any lesson',
      icon: 'star',
      color: '#F59E0B',
      xpReward: 75,
      requirements: ['Get all questions correct'],
      completed: false,
    },
    {
      id: 'daily-3',
      title: 'Morning Study',
      description: 'Complete a lesson before noon',
      icon: 'sunrise',
      color: '#10B981',
      xpReward: 25,
      requirements: ['Study between 6 AM - 12 PM'],
      completed: false,
    },
  ];

  const weeklyChallenges: Challenge[] = [
    {
      id: 'weekly-1',
      title: '7 Day Streak',
      description: 'Study for 7 consecutive days',
      icon: 'flame',
      color: '#EF4444',
      xpReward: 200,
      requirements: [`${userProgress.streak}/7 days`],
      completed: userProgress.streak >= 7,
    },
    {
      id: 'weekly-2',
      title: 'Category Master',
      description: 'Complete 10 lessons in one category',
      icon: 'award',
      color: '#8B5CF6',
      xpReward: 150,
      requirements: ['0/10 lessons in any category'],
      completed: false,
    },
    {
      id: 'weekly-3',
      title: 'Well Rounded',
      description: 'Complete at least 1 lesson in each category',
      icon: 'grid',
      color: '#06B6D4',
      xpReward: 100,
      requirements: [
        `${Object.keys(userProgress.categoryProgress).length}/6 categories`,
      ],
      completed: Object.keys(userProgress.categoryProgress).length >= 6,
    },
  ];

  const specialChallenges: Challenge[] = [
    {
      id: 'special-1',
      title: 'Bible Scholar',
      description: 'Reach level 10',
      icon: 'award',
      color: '#8B5CF6',
      xpReward: 500,
      requirements: [`Level ${userProgress.level}/10`],
      completed: userProgress.level >= 10,
    },
    {
      id: 'special-2',
      title: 'Lesson Master',
      description: 'Complete 50 lessons',
      icon: 'book',
      color: '#3B82F6',
      xpReward: 300,
      requirements: [
        `${userProgress.completedLessons.length}/50 lessons`,
      ],
      completed: userProgress.completedLessons.length >= 50,
    },
    {
      id: 'special-3',
      title: 'XP Collector',
      description: 'Earn 1,000 total XP',
      icon: 'zap',
      color: '#F59E0B',
      xpReward: 250,
      requirements: [`${userProgress.totalXP}/1,000 XP`],
      completed: userProgress.totalXP >= 1000,
    },
  ];

  const renderChallengeCard = (challenge: Challenge) => (
    <View key={challenge.id} style={styles.challengeCard}>
      <View style={styles.challengeHeader}>
        <View
          style={[
            styles.challengeIcon,
            {
              backgroundColor: challenge.completed
                ? '#D1FAE5'
                : `${challenge.color}20`,
            },
          ]}
        >
          <Icon
            name={challenge.completed ? 'check-circle' : challenge.icon}
            size={24}
            color={challenge.completed ? '#10B981' : challenge.color}
          />
        </View>
        <View style={styles.challengeContent}>
          <Text style={styles.challengeTitle}>{challenge.title}</Text>
          <Text style={styles.challengeDescription}>
            {challenge.description}
          </Text>
          <View style={styles.requirementsContainer}>
            {challenge.requirements.map((req, index) => (
              <Text key={index} style={styles.requirementText}>
                • {req}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.challengeFooter}>
        <View style={styles.xpBadge}>
          <Icon name="zap" size={14} color="#F59E0B" />
          <Text style={styles.xpText}>+{challenge.xpReward} XP</Text>
        </View>
        {challenge.completed && (
          <View style={styles.completedBadge}>
            <Text style={styles.completedText}>Completed</Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Challenges</Text>
        <Text style={styles.headerSubtitle}>
          Complete challenges to earn bonus XP
        </Text>
      </View>

      {/* Wooly Encouragement */}
      <Wooly
        message="Challenges are a great way to earn extra XP! Go for the daily challenges for quick rewards! 🌟"
        mood="excited"
        size="medium"
      />

      {/* Daily Challenges */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Icon name="sunrise" size={24} color="#F59E0B" />
          <Text style={styles.sectionTitle}>Daily Challenges</Text>
        </View>
        <Text style={styles.sectionSubtitle}>
          Complete before midnight to earn rewards
        </Text>
        {dailyChallenges.map(renderChallengeCard)}
      </View>

      {/* Weekly Challenges */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Icon name="calendar" size={24} color="#3B82F6" />
          <Text style={styles.sectionTitle}>Weekly Challenges</Text>
        </View>
        <Text style={styles.sectionSubtitle}>
          Complete within this week for bonus XP
        </Text>
        {weeklyChallenges.map(renderChallengeCard)}
      </View>

      {/* Special Challenges */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Icon name="award" size={24} color="#8B5CF6" />
          <Text style={styles.sectionTitle}>Special Challenges</Text>
        </View>
        <Text style={styles.sectionSubtitle}>
          Long-term goals with epic rewards
        </Text>
        {specialChallenges.map(renderChallengeCard)}
      </View>

      {/* Coming Soon Message */}
      <Wooly
        message="More challenges coming soon! We're working on daily rotating challenges, leaderboards, and special events. Stay tuned!"
        mood="thinking"
        size="medium"
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E3FF', // Light lilac
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  challengeCard: {
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  challengeHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  challengeIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  challengeContent: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  challengeDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  requirementsContainer: {
    gap: 4,
  },
  requirementText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  challengeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  xpText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#92400E',
  },
  completedBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  completedText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#065F46',
  },
  comingSoonCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FCD34D',
  },
  comingSoonEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  comingSoonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#78350F',
    marginBottom: 8,
    textAlign: 'center',
  },
  comingSoonText: {
    fontSize: 14,
    color: '#92400E',
    textAlign: 'center',
    lineHeight: 20,
  },
});
