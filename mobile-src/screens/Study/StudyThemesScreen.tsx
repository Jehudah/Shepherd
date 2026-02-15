import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather as Icon } from '@expo/vector-icons';
import { WoolyTip } from '../../components/Wooly';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface StudyArticle {
  id: string;
  title: string;
  subtitle: string;
  introduction: string;
  readTime: number;
}

const themesArticles: StudyArticle[] = [
  {
    id: 'love',
    title: 'Love in Scripture',
    subtitle: 'The foundation of our faith',
    introduction: 'Understanding God\'s love and how we\'re called to love others through biblical examples and teachings. Explore agape love and its transformative power.',
    readTime: 7,
  },
  {
    id: 'faith',
    title: 'Biblical Faith',
    subtitle: 'Trust and belief in God',
    introduction: 'Discover what the Bible teaches about faith - from its definition in Hebrews 11 to practical applications in daily life and examples from Scripture.',
    readTime: 8,
  },
  {
    id: 'grace',
    title: 'Grace: God\'s Unmerited Favor',
    subtitle: 'The heart of the Gospel',
    introduction: 'Learn about the amazing grace of God, how it differs from works, and why it\'s central to the Christian message of salvation and sanctification.',
    readTime: 9,
  },
  {
    id: 'hope',
    title: 'Hope in Christ',
    subtitle: 'A living hope through resurrection',
    introduction: 'Explore the biblical concept of hope - not wishful thinking, but confident expectation based on God\'s promises and the resurrection of Jesus.',
    readTime: 7,
  },
  {
    id: 'peace',
    title: 'Peace of God',
    subtitle: 'Shalom in a broken world',
    introduction: 'Study the multi-faceted biblical concept of peace (shalom) - encompassing wholeness, harmony with God, and inner tranquility that surpasses understanding.',
    readTime: 8,
  },
  {
    id: 'wisdom',
    title: 'Biblical Wisdom',
    subtitle: 'The fear of the Lord',
    introduction: 'Understand what the Bible means by wisdom - not mere knowledge, but godly insight for living life well, rooted in reverence for God.',
    readTime: 8,
  },
  {
    id: 'redemption',
    title: 'Redemption Through Christ',
    subtitle: 'Bought back by His blood',
    introduction: 'Examine the powerful theme of redemption throughout Scripture - from the kinsman-redeemer to Christ\'s ultimate payment for our sins.',
    readTime: 9,
  },
  {
    id: 'covenant',
    title: 'God\'s Covenant Promises',
    subtitle: 'Faithful through the ages',
    introduction: 'Trace God\'s covenant relationships from Noah to the New Covenant in Christ\'s blood - discovering His unchanging faithfulness.',
    readTime: 10,
  },
  {
    id: 'holiness',
    title: 'The Holiness of God',
    subtitle: 'Set apart and calling us',
    introduction: 'Marvel at God\'s perfect holiness and what it means for us to be called to be holy as He is holy in daily life and worship.',
    readTime: 8,
  },
  {
    id: 'prayer',
    title: 'The Power of Prayer',
    subtitle: 'Conversation with the Almighty',
    introduction: 'Learn biblical principles of prayer from Jesus\' teachings and examples throughout Scripture - from the Lord\'s Prayer to persistent faith.',
    readTime: 7,
  },
];

export default function StudyThemesScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleArticlePress = (article: StudyArticle) => {
    navigation.navigate('StudyArticle', {
      category: 'themes',
      articleId: article.id,
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Icon name="book-open" size={32} color="#FFFFFF" />
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>Biblical Themes</Text>
            <Text style={styles.headerSubtitle}>
              Explore key theological concepts
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Wooly's Tip */}
        <WoolyTip message="These thematic studies help you understand key biblical concepts that appear throughout Scripture. They're wool-derful for deepening your theological knowledge!" />

        {/* Articles List */}
        <View style={styles.articlesList}>
          {themesArticles.map((article, index) => {
            const colors = ['#EF4444', '#3B82F6', '#8B5CF6'];
            const color = colors[index % colors.length];

            return (
              <TouchableOpacity
                key={article.id}
                style={[
                  styles.articleCard,
                  { borderLeftColor: color, borderLeftWidth: 4 },
                ]}
                onPress={() => handleArticlePress(article)}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.articleIcon,
                    { backgroundColor: `${color}20` },
                  ]}
                >
                  <Icon name="heart" size={24} color={color} />
                </View>
                <View style={styles.articleContent}>
                  <Text style={styles.articleTitle}>{article.title}</Text>
                  <Text style={styles.articleSubtitle}>{article.subtitle}</Text>
                  <Text style={styles.articleIntro} numberOfLines={2}>
                    {article.introduction}
                  </Text>
                  <View style={styles.articleMeta}>
                    <Icon name="clock" size={14} color="#6B7280" />
                    <Text style={styles.metaText}>{article.readTime} min read</Text>
                  </View>
                </View>
                <Icon name="chevron-right" size={20} color={color} />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Coming Soon */}
        <View style={styles.comingSoonCard}>
          <Text style={styles.comingSoonEmoji}>🐑</Text>
          <View style={styles.comingSoonContent}>
            <Text style={styles.comingSoonTitle}>More Themes Coming Soon!</Text>
            <Text style={styles.comingSoonText}>
              We're working on adding more theological studies covering hope, peace, wisdom, justice, and many other biblical themes. Stay tuned!
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
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#8B5CF6',
  },
  backButton: {
    padding: 8,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  headerContent: {
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
  comingSoonCard: {
    flexDirection: 'row',
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    borderWidth: 2,
    borderColor: '#FCD34D',
  },
  comingSoonEmoji: {
    fontSize: 40,
    marginRight: 12,
  },
  comingSoonContent: {
    flex: 1,
  },
  comingSoonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#78350F',
    marginBottom: 6,
  },
  comingSoonText: {
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20,
  },
});
