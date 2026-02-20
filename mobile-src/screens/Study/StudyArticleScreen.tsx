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
import { RootStackParamList } from '../../types';
import { getStudyArticle } from '../../data/studyContent';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, 'StudyArticle'>;

export default function StudyArticleScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();

  const { category, articleId } = route.params;
  const article = getStudyArticle(articleId);

  if (!article) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Icon name="alert-circle" size={48} color="#EF4444" />
          <Text style={styles.errorTitle}>Article Not Found</Text>
          <Text style={styles.errorText}>
            Sorry, we couldn't find this article. It may have been moved or removed.
          </Text>
          <TouchableOpacity
            style={styles.errorButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.errorButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Calculate estimated read time
  const getReadTime = (): number => {
    const totalWords = article.sections.reduce((total, section) => {
      const sectionWords = section.paragraphs.join(' ').split(' ').length;
      return total + sectionWords;
    }, 0);
    return Math.max(5, Math.ceil(totalWords / 200));
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const categoryColors: Record<string, string> = {
    names: '#3B82F6',
    themes: '#8B5CF6',
    books: '#10B981',
    history: '#F59E0B',
    prophecy: '#EF4444',
    doctrine: '#06B6D4',
  };

  const color = categoryColors[category] || '#6B7280';

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: color }]}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.category}>{article.category.toUpperCase()}</Text>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.subtitle}>{article.subtitle}</Text>
          <View style={styles.headerMeta}>
            <Icon name="clock" size={16} color="#FFFFFF" />
            <Text style={styles.metaText}>{getReadTime()} min read</Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Introduction */}
        <View style={styles.introCard}>
          <Text style={styles.introText}>{article.introduction}</Text>
        </View>

        {/* Sections */}
        {article.sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionIcon, { backgroundColor: `${color}20` }]}>
                <Icon name="book-open" size={20} color={color} />
              </View>
              <Text style={styles.sectionHeading}>{section.heading}</Text>
            </View>

            {section.paragraphs.map((paragraph, pIndex) => (
              <Text key={pIndex} style={styles.paragraph}>
                {paragraph}
              </Text>
            ))}

            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <View style={styles.bulletPointsContainer}>
                {section.bulletPoints.map((point, bIndex) => (
                  <View key={bIndex} style={styles.bulletPoint}>
                    <Icon name="check-circle" size={16} color={color} style={styles.bulletIcon} />
                    <Text style={styles.bulletText}>{point}</Text>
                  </View>
                ))}
              </View>
            )}

            {section.quote && (
              <View style={[styles.quoteCard, { borderLeftColor: color }]}>
                <Icon name="message-circle" size={24} color={color} style={styles.quoteIcon} />
                <Text style={styles.quoteText}>{section.quote.text}</Text>
                <Text style={styles.quoteReference}>— {section.quote.reference}</Text>
              </View>
            )}

            {section.illustration && (
              <View style={[styles.illustrationCard, { backgroundColor: `${color}10` }]}>
                <Icon name="zap" size={20} color={color} />
                <Text style={styles.illustrationText}>{section.illustration}</Text>
              </View>
            )}
          </View>
        ))}

        {/* Key Takeaways */}
        <View style={[styles.takeawaysCard, { borderColor: color }]}>
          <View style={styles.takeawaysHeader}>
            <Icon name="star" size={24} color={color} />
            <Text style={[styles.takeawaysTitle, { color }]}>Key Takeaways</Text>
          </View>
          {article.keyTakeaways.map((takeaway, index) => (
            <View key={index} style={styles.takeawayItem}>
              <Icon name="arrow-right" size={16} color={color} style={styles.takeawayIcon} />
              <Text style={styles.takeawayText}>{takeaway}</Text>
            </View>
          ))}
        </View>

        {/* Further Study */}
        {article.furtherStudy && article.furtherStudy.length > 0 && (
          <View style={styles.studyCard}>
            <View style={styles.studyHeader}>
              <Icon name="book" size={20} color="#6B7280" />
              <Text style={styles.studyTitle}>Further Study</Text>
            </View>
            {article.furtherStudy.map((study, index) => (
              <Text key={index} style={styles.studyText}>• {study}</Text>
            ))}
          </View>
        )}

        {/* Cross References */}
        {article.crossReferences && article.crossReferences.length > 0 && (
          <View style={styles.referencesCard}>
            <View style={styles.referencesHeader}>
              <Icon name="link" size={20} color="#6B7280" />
              <Text style={styles.referencesTitle}>Cross References</Text>
            </View>
            {article.crossReferences.map((reference, index) => (
              <Text key={index} style={styles.referenceText}>• {reference}</Text>
            ))}
          </View>
        )}

        {/* Back Button */}
        <TouchableOpacity
          style={[styles.backToListButton, { backgroundColor: color }]}
          onPress={handleBackPress}
        >
          <Icon name="arrow-left" size={20} color="#FFFFFF" />
          <Text style={styles.backToListText}>Back to {category === 'names' ? 'Names & People' : 'Themes'}</Text>
        </TouchableOpacity>
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
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
  },
  backButton: {
    padding: 8,
    marginRight: 12,
    marginTop: 4,
  },
  headerContent: {
    flex: 1,
    gap: 8,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.9,
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.95,
    fontStyle: 'italic',
  },
  headerMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  metaText: {
    fontSize: 14,
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
  introCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  introText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#374151',
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  sectionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeading: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
    color: '#374151',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
  },
  bulletPointsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    gap: 12,
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  bulletIcon: {
    marginTop: 2,
  },
  bulletText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
  },
  quoteCard: {
    backgroundColor: '#F9FAFB',
    borderLeftWidth: 4,
    borderRadius: 12,
    padding: 20,
    marginVertical: 16,
  },
  quoteIcon: {
    marginBottom: 8,
    opacity: 0.5,
  },
  quoteText: {
    fontSize: 17,
    lineHeight: 27,
    color: '#1F2937',
    fontStyle: 'italic',
    marginBottom: 12,
  },
  quoteReference: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
  },
  illustrationCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
  },
  illustrationText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
    fontStyle: 'italic',
  },
  takeawaysCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 2,
    padding: 20,
    marginTop: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  takeawaysHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  takeawaysTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  takeawayItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 12,
  },
  takeawayIcon: {
    marginTop: 2,
  },
  takeawayText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
  },
  studyCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  studyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  studyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#92400E',
  },
  studyText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#78350F',
    marginBottom: 6,
  },
  referencesCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  referencesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  referencesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E40AF',
  },
  referenceText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#1E3A8A',
    marginBottom: 6,
  },
  backToListButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  backToListText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 16,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  errorButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  errorButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
