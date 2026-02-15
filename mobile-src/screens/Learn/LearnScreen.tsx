import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather as Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useStore } from '../../store/useStore';
import { RootStackParamList } from '../../types';
import { theme } from '../../theme';
import { Card, Badge, GradientCard } from '../../components/ui';
import Wooly from '../../components/Wooly';

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back!</Text>
            <Text style={styles.username}>{userProgress.username}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Badge variant="warning" icon="zap" size="md">
              {userProgress.totalXP} XP
            </Badge>
            <Badge variant="primary" icon="award" size="md">
              Lvl {userProgress.level}
            </Badge>
          </View>
        </View>

        {/* Wooly Welcome */}
        <Wooly
          message={`Hi ${userProgress.username}! Ready to learn today? Choose a topic below to get started!`}
          mood="happy"
          size="medium"
        />

        {/* Streak Card */}
        {userProgress.streak > 0 && (
          <GradientCard
            gradient={theme.colors.fire}
            style={styles.streakCard}
          >
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
          </GradientCard>
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
            <Card
              key={category.id}
              variant="elevated"
              shadowLevel="md"
              onPress={() => handleCategoryPress(category)}
              style={styles.categoryCard}
            >
              <LinearGradient
                colors={category.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.categoryIconContainer}
              >
                <Icon name={category.icon} size={32} color="#FFFFFF" />
              </LinearGradient>
              <View style={styles.categoryContent}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryDescription}>
                  {category.description}
                </Text>
                {category.comingSoon && (
                  <Badge variant="warning" size="sm" style={styles.comingSoonBadge}>
                    Coming Soon
                  </Badge>
                )}
              </View>
              <Icon name="chevron-right" size={20} color={theme.colors.text.tertiary} />
            </Card>
          ))}
        </View>

        {/* Progress Summary */}
        <Card variant="elevated" shadowLevel="md" style={styles.progressCard}>
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
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: theme.spacing[4],
    paddingBottom: theme.spacing[8],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing[6],
  },
  greeting: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text.secondary,
  },
  username: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: theme.spacing[2],
  },
  streakCard: {
    marginBottom: theme.spacing[6],
  },
  streakContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[3],
  },
  streakEmoji: {
    fontSize: 40,
  },
  streakTextContainer: {
    flex: 1,
  },
  streakTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.inverse,
  },
  streakSubtitle: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.inverse,
    marginTop: 2,
    opacity: 0.9,
  },
  sectionHeader: {
    marginBottom: theme.spacing[4],
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },
  grid: {
    gap: theme.spacing[3],
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[3],
    padding: 0, // Override Card's default padding
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[4],
  },
  categoryIconContainer: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryContent: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },
  comingSoonBadge: {
    marginTop: theme.spacing[2],
  },
  progressCard: {
    marginTop: theme.spacing[6],
    padding: theme.spacing[5],
  },
  progressTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[4],
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
    fontSize: theme.typography.fontSize['4xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary[500],
    marginBottom: 4,
  },
  progressLabel: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
    textAlign: 'center',
  },
  progressDivider: {
    width: 1,
    height: 60,
    backgroundColor: theme.colors.border.light,
  },
});
