import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import { useStore } from '../../store/useStore';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface CategoryCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: [string, string];
  route?: string;
  comingSoon?: boolean;
}

const categories: CategoryCard[] = [
  {
    id: 'names',
    title: 'Names & People',
    description: 'Learn about biblical characters and their stories',
    icon: 'users',
    color: '#3B82F6',
    gradient: ['#3B82F6', '#06B6D4'],
    route: 'NamesCategories',
  },
  {
    id: 'themes',
    title: 'Themes',
    description: 'Explore key biblical themes and concepts',
    icon: 'book-open',
    color: '#8B5CF6',
    gradient: ['#8B5CF6', '#EC4899'],
    route: 'ThemesSelection',
  },
  {
    id: 'books',
    title: 'Bible Books',
    description: 'Study through books of the Bible',
    icon: 'bookmark',
    color: '#10B981',
    gradient: ['#10B981', '#06B6D4'],
    route: 'BibleBooks',
  },
  {
    id: 'timeline',
    title: 'Timeline',
    description: 'Journey through biblical history',
    icon: 'clock',
    color: '#F59E0B',
    gradient: ['#F59E0B', '#EF4444'],
    route: 'Timeline',
  },
  {
    id: 'verses',
    title: 'Memorize Verses',
    description: 'Master key Scripture passages',
    icon: 'heart',
    color: '#EF4444',
    gradient: ['#EF4444', '#EC4899'],
    route: 'MemorizeVerses',
  },
  {
    id: 'parables',
    title: 'Parables & Stories',
    description: "Learn from Jesus' teachings",
    icon: 'message-circle',
    color: '#06B6D4',
    gradient: ['#06B6D4', '#3B82F6'],
    route: 'Parables',
  },
];

export default function LearnScreen() {
  const navigation = useNavigation<NavigationProp>();
  const userProgress = useStore((state) => state.userProgress);

  const handleCategoryPress = (category: CategoryCard) => {
    if (category.comingSoon) {
      return;
    }
    if (category.route) {
      navigation.navigate(category.route as any);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back!</Text>
          <Text style={styles.username}>{userProgress.username}</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statBadge}>
            <Icon name="zap" size={16} color="#F59E0B" />
            <Text style={styles.statText}>{userProgress.totalXP} XP</Text>
          </View>
          <View style={styles.statBadge}>
            <Icon name="award" size={16} color="#8B5CF6" />
            <Text style={styles.statText}>Lvl {userProgress.level}</Text>
          </View>
        </View>
      </View>

      {/* Streak Card */}
      {userProgress.streak > 0 && (
        <View style={styles.streakCard}>
          <View style={styles.streakContent}>
            <Text style={styles.streakEmoji}>🔥</Text>
            <View style={styles.streakTextContainer}>
              <Text style={styles.streakTitle}>
                {userProgress.streak} Day Streak!
              </Text>
              <Text style={styles.streakSubtitle}>
                Keep up the amazing work
              </Text>
            </View>
          </View>
        </View>
      )}

      {/* Categories Grid */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Choose Your Path</Text>
        <Text style={styles.sectionSubtitle}>
          Select a category to continue your learning journey
        </Text>
      </View>

      <View style={styles.grid}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            onPress={() => handleCategoryPress(category)}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.categoryIconContainer,
                { backgroundColor: category.color },
              ]}
            >
              <Icon name={category.icon} size={32} color="#FFFFFF" />
            </View>
            <View style={styles.categoryContent}>
              <Text style={styles.categoryTitle}>{category.title}</Text>
              <Text style={styles.categoryDescription}>
                {category.description}
              </Text>
              {category.comingSoon && (
                <View style={styles.comingSoonBadge}>
                  <Text style={styles.comingSoonText}>Coming Soon</Text>
                </View>
              )}
            </View>
            <Icon name="chevron-right" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Progress Summary */}
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Your Progress</Text>
        <View style={styles.progressStats}>
          <View style={styles.progressStat}>
            <Text style={styles.progressValue}>
              {userProgress.completedLessons.length}
            </Text>
            <Text style={styles.progressLabel}>Lessons Completed</Text>
          </View>
          <View style={styles.progressDivider} />
          <View style={styles.progressStat}>
            <Text style={styles.progressValue}>
              {Object.keys(userProgress.categoryProgress).length}
            </Text>
            <Text style={styles.progressLabel}>Categories Started</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 16,
    color: '#6B7280',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  statBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  streakCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#FCD34D',
  },
  streakContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  streakEmoji: {
    fontSize: 40,
  },
  streakTextContainer: {
    flex: 1,
  },
  streakTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#78350F',
  },
  streakSubtitle: {
    fontSize: 14,
    color: '#92400E',
    marginTop: 2,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  grid: {
    gap: 12,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  categoryIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryContent: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  comingSoonBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 8,
  },
  comingSoonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#92400E',
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  progressStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressStat: {
    flex: 1,
    alignItems: 'center',
  },
  progressValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: 4,
  },
  progressLabel: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  progressDivider: {
    width: 1,
    height: 60,
    backgroundColor: '#E5E7EB',
  },
});
