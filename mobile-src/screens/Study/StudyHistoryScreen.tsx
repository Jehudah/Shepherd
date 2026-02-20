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
import { WoolyTip } from '../../components/Wooly';
import { RootStackParamList } from '../../types';
import { historicalContextArticles } from '../../data/studyContent';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function StudyHistoryScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleArticlePress = (articleId: string) => {
    navigation.navigate('StudyArticle', {
      category: 'history',
      articleId: articleId,
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const getReadTime = (article: typeof historicalContextArticles[0]): number => {
    const totalWords = article.sections.reduce((total, section) => {
      const sectionWords = section.paragraphs.join(' ').split(' ').length;
      return total + sectionWords;
    }, 0);
    return Math.max(5, Math.ceil(totalWords / 200));
  };

  const colors = ['#F59E0B', '#EF4444', '#8B5CF6', '#10B981', '#3B82F6', '#06B6D4'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Icon name="globe" size={32} color="#FFFFFF" />
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>Historical Context</Text>
            <Text style={styles.headerSubtitle}>
              Understanding the world of the Bible
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <WoolyTip message="Understanding the historical background makes Scripture come alive! Learn about the cultures, empires, and events that shaped the biblical world." />

        <View style={styles.articlesList}>
          {historicalContextArticles.map((article, index) => {
            const color = colors[index % colors.length];
            return (
              <TouchableOpacity
                key={article.id}
                style={[styles.articleCard, { borderLeftColor: color, borderLeftWidth: 4 }]}
                onPress={() => handleArticlePress(article.id)}
                activeOpacity={0.7}
              >
                <View style={[styles.articleIcon, { backgroundColor: `${color}20` }]}>
                  <Icon name="map" size={24} color={color} />
                </View>
                <View style={styles.articleContent}>
                  <Text style={styles.articleTitle}>{article.title}</Text>
                  <Text style={styles.articleSubtitle}>{article.subtitle}</Text>
                  <Text style={styles.articleIntro} numberOfLines={2}>
                    {article.introduction}
                  </Text>
                  <View style={styles.articleMeta}>
                    <Icon name="clock" size={14} color="#6B7280" />
                    <Text style={styles.metaText}>{getReadTime(article)} min read</Text>
                  </View>
                </View>
                <Icon name="chevron-right" size={20} color={color} />
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.statsEmoji}>🏛️</Text>
          <View style={styles.statsContent}>
            <Text style={styles.statsTitle}>
              {historicalContextArticles.length} Historical Studies
            </Text>
            <Text style={styles.statsText}>
              Explore empires, cultures, and events that shaped the world of the Old and New Testaments.
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
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: '#F59E0B',
  },
  backButton: {
    padding: 8,
    marginRight: 12,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerText: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  articlesList: {
    marginTop: 16,
    gap: 12,
  },
  articleCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  articleIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  articleContent: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  articleSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  articleIntro: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 8,
  },
  articleMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
  },
  statsCard: {
    flexDirection: 'row',
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    borderWidth: 2,
    borderColor: '#F59E0B',
  },
  statsEmoji: {
    fontSize: 40,
    marginRight: 12,
  },
  statsContent: {
    flex: 1,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#78350F',
    marginBottom: 6,
  },
  statsText: {
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20,
  },
});
