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

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface StudyArticle {
  id: string;
  title: string;
  subtitle: string;
  introduction: string;
  readTime: number;
}

const namesArticles: StudyArticle[] = [
  {
    id: 'moses',
    title: 'Moses: The Deliverer',
    subtitle: 'From prince to prophet',
    introduction: 'Explore the life and leadership of Moses, from his miraculous preservation as a baby to leading Israel out of Egypt and receiving the Ten Commandments.',
    readTime: 8,
  },
  {
    id: 'david',
    title: 'David: Man After God\'s Heart',
    subtitle: 'From shepherd to king',
    introduction: 'Discover why David was called a man after God\'s own heart, from his victory over Goliath to his reign as Israel\'s greatest king.',
    readTime: 10,
  },
  {
    id: 'abraham',
    title: 'Abraham: Father of Faith',
    subtitle: 'Journey of trust and promise',
    introduction: 'Learn about Abraham\'s incredible journey of faith, from leaving Ur to becoming the father of many nations through God\'s promise.',
    readTime: 9,
  },
  {
    id: 'peter',
    title: 'Peter: The Rock',
    subtitle: 'From fisherman to foundation',
    introduction: 'Follow Peter\'s transformation from impulsive fisherman to bold apostle, leading the early church with courage and conviction.',
    readTime: 9,
  },
  {
    id: 'paul',
    title: 'Paul: Apostle to the Gentiles',
    subtitle: 'From persecutor to preacher',
    introduction: 'Witness Paul\'s dramatic conversion and his tireless mission to spread the gospel throughout the Roman world.',
    readTime: 11,
  },
  {
    id: 'joseph',
    title: 'Joseph: Dreamer and Deliverer',
    subtitle: 'From pit to palace',
    introduction: 'See how God used Joseph\'s trials—betrayal, slavery, imprisonment—to position him to save nations.',
    readTime: 10,
  },
  {
    id: 'esther',
    title: 'Esther: For Such a Time',
    subtitle: 'Courage in the palace',
    introduction: 'Discover how Queen Esther risked her life to save her people, demonstrating that God places us exactly where we need to be.',
    readTime: 8,
  },
  {
    id: 'daniel',
    title: 'Daniel: Faithful in Exile',
    subtitle: 'Integrity in Babylon',
    introduction: 'Learn from Daniel\'s unwavering faith in a foreign land, from the lion\'s den to interpreting dreams for kings.',
    readTime: 9,
  },
  {
    id: 'ruth',
    title: 'Ruth: Loyal Love',
    subtitle: 'From Moab to Messiah\'s lineage',
    introduction: 'Experience Ruth\'s beautiful story of loyalty, redemption, and how a foreign widow became part of Jesus\' family tree.',
    readTime: 7,
  },
  {
    id: 'elijah',
    title: 'Elijah: Prophet of Fire',
    subtitle: 'Standing against idolatry',
    introduction: 'Walk with Elijah through miracles, confrontation with false prophets, and his dramatic departure in a chariot of fire.',
    readTime: 10,
  },
];

export default function StudyNamesScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleArticlePress = (article: StudyArticle) => {
    navigation.navigate('StudyArticle', {
      category: 'names',
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
          <Icon name="users" size={32} color="#FFFFFF" />
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>Names & People</Text>
            <Text style={styles.headerSubtitle}>
              Explore biblical figures in depth
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
        <WoolyTip message="These articles provide comprehensive background information and spiritual insights about key biblical figures. Read them to deepen your understanding!" />

        {/* Articles List */}
        <View style={styles.articlesList}>
          {namesArticles.map((article, index) => (
            <TouchableOpacity
              key={article.id}
              style={styles.articleCard}
              onPress={() => handleArticlePress(article)}
              activeOpacity={0.7}
            >
              <View style={styles.articleIcon}>
                <Icon name="book-open" size={24} color="#3B82F6" />
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
              <Icon name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Coming Soon */}
        <View style={styles.comingSoonCard}>
          <Text style={styles.comingSoonEmoji}>🐑</Text>
          <View style={styles.comingSoonContent}>
            <Text style={styles.comingSoonTitle}>More Coming Soon!</Text>
            <Text style={styles.comingSoonText}>
              We're working on adding more in-depth study articles for all the biblical figures featured in the Learn section. Check back regularly for new content!
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
    backgroundColor: '#E8E3FF', // Light lilac
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#3B82F6',
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
    backgroundColor: '#FFFFFF', // White background
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
    backgroundColor: '#DBEAFE',
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
