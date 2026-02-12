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
import { Feather as Icon } from '@expo/vector-icons';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface StudyCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  articlesCount: number;
  available: boolean;
}

const studyCategories: StudyCategory[] = [
  {
    id: 'names',
    title: 'Names & People',
    description: 'In-depth studies of biblical characters',
    icon: 'users',
    color: '#3B82F6',
    articlesCount: 3,
    available: true,
  },
  {
    id: 'themes',
    title: 'Biblical Themes',
    description: 'Explore key theological concepts',
    icon: 'book-open',
    color: '#8B5CF6',
    articlesCount: 1,
    available: true,
  },
  {
    id: 'books',
    title: 'Book Overviews',
    description: 'Comprehensive guides to each book',
    icon: 'bookmark',
    color: '#10B981',
    articlesCount: 0,
    available: false,
  },
  {
    id: 'history',
    title: 'Historical Context',
    description: 'Understanding the biblical world',
    icon: 'globe',
    color: '#F59E0B',
    articlesCount: 0,
    available: false,
  },
  {
    id: 'prophecy',
    title: 'Prophecy & Fulfillment',
    description: 'From Old Testament to New',
    icon: 'star',
    color: '#EF4444',
    articlesCount: 0,
    available: false,
  },
  {
    id: 'doctrine',
    title: 'Christian Doctrine',
    description: 'Core beliefs explained',
    icon: 'shield',
    color: '#06B6D4',
    articlesCount: 0,
    available: false,
  },
];

export default function StudyScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCategoryPress = (category: StudyCategory) => {
    if (!category.available) {
      return;
    }
    // Navigate to category-specific study list
    if (category.id === 'names') {
      navigation.navigate('StudyNames');
    } else if (category.id === 'themes') {
      navigation.navigate('StudyThemes');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Study</Text>
        <Text style={styles.headerSubtitle}>
          Deep dive into Scripture with detailed articles
        </Text>
      </View>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <Text style={styles.infoEmoji}>📖</Text>
        <View style={styles.infoContent}>
          <Text style={styles.infoTitle}>Study to Show Yourself Approved</Text>
          <Text style={styles.infoText}>
            These articles provide comprehensive background, historical context,
            and spiritual insights to complement your learning journey.
          </Text>
        </View>
      </View>

      {/* Study Categories */}
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Study Topics</Text>
        {studyCategories.map((category, index) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryCard,
              !category.available && styles.categoryCardDisabled,
            ]}
            onPress={() => handleCategoryPress(category)}
            activeOpacity={category.available ? 0.7 : 1}
          >
            <View
              style={[
                styles.categoryIconContainer,
                { backgroundColor: category.available ? category.color : '#9CA3AF' },
              ]}
            >
              <Icon name={category.icon} size={28} color="#FFFFFF" />
            </View>
            <View style={styles.categoryContent}>
              <Text style={styles.categoryTitle}>{category.title}</Text>
              <Text style={styles.categoryDescription}>
                {category.description}
              </Text>
              {category.available ? (
                <View style={styles.articlesCountBadge}>
                  <Icon name="file-text" size={14} color="#3B82F6" />
                  <Text style={styles.articlesCountText}>
                    {category.articlesCount} article{category.articlesCount !== 1 ? 's' : ''}
                  </Text>
                </View>
              ) : (
                <View style={styles.comingSoonBadge}>
                  <Text style={styles.comingSoonText}>Coming Soon</Text>
                </View>
              )}
            </View>
            {category.available && (
              <Icon name="chevron-right" size={20} color="#9CA3AF" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Study Tips */}
      <View style={styles.tipsCard}>
        <View style={styles.tipsHeader}>
          <Icon name="lightbulb" size={24} color="#F59E0B" />
          <Text style={styles.tipsTitle}>Study Tips</Text>
        </View>
        <View style={styles.tipsList}>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>
              Read articles before taking related quizzes for better context
            </Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>
              Take notes on key points and cross-references
            </Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>
              Look up the Bible passages mentioned for deeper understanding
            </Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>
              Discuss what you learn with friends or study groups
            </Text>
          </View>
        </View>
      </View>

      {/* Recent Articles Preview (Placeholder) */}
      <View style={styles.recentSection}>
        <Text style={styles.sectionTitle}>Featured Articles</Text>

        <View style={styles.articlePreview}>
          <View style={styles.articleHeader}>
            <View style={[styles.articleIcon, { backgroundColor: '#DBEAFE' }]}>
              <Icon name="users" size={20} color="#3B82F6" />
            </View>
            <View style={styles.articleInfo}>
              <Text style={styles.articleTitle}>Moses: The Deliverer</Text>
              <Text style={styles.articleMeta}>Names & People • 8 min read</Text>
            </View>
          </View>
          <Text style={styles.articleExcerpt}>
            Explore the life and leadership of Moses, from his miraculous
            preservation as a baby to leading Israel out of Egypt...
          </Text>
        </View>

        <View style={styles.articlePreview}>
          <View style={styles.articleHeader}>
            <View style={[styles.articleIcon, { backgroundColor: '#DBEAFE' }]}>
              <Icon name="users" size={20} color="#3B82F6" />
            </View>
            <View style={styles.articleInfo}>
              <Text style={styles.articleTitle}>David: Man After God's Heart</Text>
              <Text style={styles.articleMeta}>Names & People • 10 min read</Text>
            </View>
          </View>
          <Text style={styles.articleExcerpt}>
            From shepherd boy to mighty king, discover why David was called a
            man after God's own heart...
          </Text>
        </View>

        <View style={styles.articlePreview}>
          <View style={styles.articleHeader}>
            <View style={[styles.articleIcon, { backgroundColor: '#EDE9FE' }]}>
              <Icon name="heart" size={20} color="#8B5CF6" />
            </View>
            <View style={styles.articleInfo}>
              <Text style={styles.articleTitle}>Love in Scripture</Text>
              <Text style={styles.articleMeta}>Biblical Themes • 7 min read</Text>
            </View>
          </View>
          <Text style={styles.articleExcerpt}>
            Understanding God's love and how we're called to love others through
            biblical examples and teachings...
          </Text>
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
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#DBEAFE',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#93C5FD',
  },
  infoEmoji: {
    fontSize: 40,
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 14,
    color: '#1E40AF',
    lineHeight: 20,
  },
  categoriesSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  categoryCardDisabled: {
    opacity: 0.6,
  },
  categoryIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  categoryContent: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  articlesCountBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  articlesCountText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E40AF',
  },
  comingSoonBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  comingSoonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#92400E',
  },
  tipsCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#FDE68A',
  },
  tipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#78350F',
  },
  tipsList: {
    gap: 8,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipBullet: {
    fontSize: 16,
    color: '#92400E',
    marginRight: 8,
    marginTop: 2,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20,
  },
  recentSection: {
    marginBottom: 16,
  },
  articlePreview: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  articleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  articleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  articleInfo: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  articleMeta: {
    fontSize: 12,
    color: '#6B7280',
  },
  articleExcerpt: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
});
