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
import { Feather as Icon } from '@expo/vector-icons';
import { WoolyTip } from '../../components/Wooly';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, 'StudyArticle'>;

interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: number;
  introduction: string;
  sections: {
    title: string;
    content: string;
  }[];
  keyTakeaways: string[];
  verses: string[];
}

// Sample articles - in production, this would come from data files
const articles: Record<string, Article> = {
  'names-moses': {
    id: 'moses',
    title: 'Moses: The Deliverer',
    subtitle: 'From prince to prophet',
    category: 'Names & People',
    readTime: 8,
    introduction:
      'Moses stands as one of the most significant figures in biblical history. His life story spans 120 years and takes us from the palace of Egypt to the wilderness of Sinai, from murderer to friend of God, from stuttering shepherd to powerful deliverer of God\'s people.',
    sections: [
      {
        title: 'Early Life in Egypt',
        content:
          'Born during a time when Pharaoh ordered all Hebrew baby boys to be killed, Moses was hidden by his mother for three months. When she could hide him no longer, she placed him in a basket among the reeds of the Nile River. Pharaoh\'s daughter found him and raised him as her own son in the royal palace. Moses received the finest education Egypt could offer, yet he never forgot his Hebrew heritage.',
      },
      {
        title: 'Flight to Midian',
        content:
          'At age 40, Moses witnessed an Egyptian beating a Hebrew slave. In a moment of anger, he killed the Egyptian and buried him in the sand. When this became known, Moses fled to Midian where he lived as a shepherd for 40 years. This period of obscurity was God\'s training ground, preparing Moses for the greatest task of his life.',
      },
      {
        title: 'The Burning Bush',
        content:
          'God appeared to Moses in a burning bush that was not consumed by the flames. This extraordinary encounter marked the beginning of Moses\' ministry. Despite his protests about his speaking ability, God commissioned Moses to return to Egypt and demand that Pharaoh release the Israelites from slavery.',
      },
      {
        title: 'Exodus and the Law',
        content:
          'Through ten devastating plagues, God demonstrated His power over Egypt and its gods. The final plague - the death of the firstborn - led to the first Passover and Israel\'s hasty departure. God parted the Red Sea, allowing Israel to escape while destroying Pharaoh\'s army. At Mount Sinai, Moses received the Ten Commandments and the Law that would govern Israel.',
      },
      {
        title: 'Wilderness Leadership',
        content:
          'For 40 years, Moses led a complaining, rebellious people through the wilderness. He interceded for them repeatedly when God\'s anger burned against their sin. Though Moses himself sinned and was forbidden from entering the Promised Land, he remained faithful to the end, preparing Joshua to lead the next generation.',
      },
    ],
    keyTakeaways: [
      'God can use anyone, regardless of their past or perceived limitations',
      'True leadership requires patience, humility, and intercession',
      'God\'s timing and preparation are perfect, even when they seem long',
      'Obedience to God sometimes requires great personal sacrifice',
      'God desires an intimate relationship with His people',
    ],
    verses: [
      'Exodus 3:14',
      'Numbers 12:3',
      'Deuteronomy 34:10',
      'Hebrews 11:24-27',
    ],
  },
  // Add more articles as needed
};

export default function StudyArticleScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const { category, articleId } = route.params;

  // Get article - construct key from category and articleId
  const articleKey = `${category}-${articleId}`;
  const article = articles[articleKey];

  const handleBackPress = () => {
    navigation.goBack();
  };

  if (!article) {
    return (
      <View style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Article not found</Text>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButtonError}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#1F2937" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.categoryLabel}>{article.category}</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Article Header */}
        <View style={styles.articleHeader}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.subtitle}>{article.subtitle}</Text>
          <View style={styles.meta}>
            <Icon name="clock" size={16} color="#6B7280" />
            <Text style={styles.metaText}>{article.readTime} min read</Text>
          </View>
        </View>

        {/* Wooly's Tip */}
        <WoolyTip message="Take your time reading this! It's full of valuable insights that will enrich your understanding." />

        {/* Introduction */}
        <View style={styles.section}>
          <Text style={styles.introduction}>{article.introduction}</Text>
        </View>

        {/* Sections */}
        {article.sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionContent}>{section.content}</Text>
          </View>
        ))}

        {/* Key Takeaways */}
        <View style={styles.takeawaysCard}>
          <View style={styles.takeawaysHeader}>
            <Icon name="bookmark" size={20} color="#8B5CF6" />
            <Text style={styles.takeawaysTitle}>Key Takeaways</Text>
          </View>
          {article.keyTakeaways.map((takeaway, index) => (
            <View key={index} style={styles.takeawayItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.takeawayText}>{takeaway}</Text>
            </View>
          ))}
        </View>

        {/* Related Verses */}
        <View style={styles.versesCard}>
          <View style={styles.versesHeader}>
            <Icon name="book-open" size={20} color="#3B82F6" />
            <Text style={styles.versesTitle}>Related Scriptures</Text>
          </View>
          <View style={styles.versesList}>
            {article.verses.map((verse, index) => (
              <View key={index} style={styles.verseBadge}>
                <Icon name="bookmark" size={12} color="#3B82F6" />
                <Text style={styles.verseText}>{verse}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Footer CTA */}
        <View style={styles.ctaCard}>
          <Text style={styles.ctaEmoji}>🐑</Text>
          <View style={styles.ctaContent}>
            <Text style={styles.ctaTitle}>Ready to Test Your Knowledge?</Text>
            <Text style={styles.ctaText}>
              Head to the Learn tab to take quizzes about {article.title.split(':')[0]} and other biblical figures!
            </Text>
          </View>
        </View>
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
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerContent: {
    flex: 1,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  articleHeader: {
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 18,
    color: '#6B7280',
    fontStyle: 'italic',
    marginBottom: 12,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontSize: 14,
    color: '#6B7280',
  },
  section: {
    marginBottom: 24,
  },
  introduction: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 26,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  sectionContent: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 26,
  },
  takeawaysCard: {
    backgroundColor: '#F5F3FF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#DDD6FE',
  },
  takeawaysHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  takeawaysTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5B21B6',
  },
  takeawayItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bullet: {
    fontSize: 18,
    color: '#8B5CF6',
    marginRight: 10,
    marginTop: 2,
  },
  takeawayText: {
    flex: 1,
    fontSize: 15,
    color: '#5B21B6',
    lineHeight: 22,
  },
  versesCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#BFDBFE',
  },
  versesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  versesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E40AF',
  },
  versesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  verseBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  verseText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },
  ctaCard: {
    flexDirection: 'row',
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: '#FCD34D',
    alignItems: 'center',
  },
  ctaEmoji: {
    fontSize: 48,
    marginRight: 16,
  },
  ctaContent: {
    flex: 1,
  },
  ctaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#78350F',
    marginBottom: 6,
  },
  ctaText: {
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  errorText: {
    fontSize: 18,
    color: '#6B7280',
    marginBottom: 16,
  },
  backButtonError: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
