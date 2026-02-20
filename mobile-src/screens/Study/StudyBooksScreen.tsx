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
import { bookOverviewArticles } from '../../data/studyContent';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function StudyBooksScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleArticlePress = (articleId: string) => {
    navigation.navigate('StudyArticle', {
      category: 'books',
      articleId: articleId,
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const getReadTime = (article: typeof bookOverviewArticles[0]): number => {
    const totalWords = article.sections.reduce((total, section) => {
      const sectionWords = section.paragraphs.join(' ').split(' ').length;
      return total + sectionWords;
    }, 0);
    return Math.max(5, Math.ceil(totalWords / 200));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Icon name="bookmark" size={32} color="#FFFFFF" />
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>Book Overviews</Text>
            <Text style={styles.headerSubtitle}>
              Comprehensive guides to each Bible book
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <WoolyTip message="Each overview covers the background, key themes, and theological significance of a Bible book. Great for context before diving into a study!" />

        <View style={styles.articlesList}>
          {bookOverviewArticles.map((article) => (
            <TouchableOpacity
              key={article.id}
              style={styles.articleCard}
              onPress={() => handleArticlePress(article.id)}
              activeOpacity={0.7}
            >
              <View style={styles.articleIcon}>
                <Icon name="book" size={24} color="#10B981" />
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
              <Icon name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.statsEmoji}>📖</Text>
          <View style={styles.statsContent}>
            <Text style={styles.statsTitle}>
              {bookOverviewArticles.length} Bible Book Overviews
            </Text>
            <Text style={styles.statsText}>
              Explore the structure, themes, and purpose of key books from Genesis to Revelation.
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
    backgroundColor: '#10B981',
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
    backgroundColor: '#D1FAE5',
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
    backgroundColor: '#D1FAE5',
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    borderWidth: 2,
    borderColor: '#10B981',
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
    color: '#065F46',
    marginBottom: 6,
  },
  statsText: {
    fontSize: 14,
    color: '#047857',
    lineHeight: 20,
  },
});
