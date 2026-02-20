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
import Wooly from '../../components/Wooly';
import { useStore } from '../../store/useStore';
import { RootStackParamList } from '../../types';
import { hasBookQuestions } from '../../data/bookQuestions';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Book {
  id: string;
  name: string;
  testament: 'Old' | 'New';
  author: string;
  lessonCount: number;
  description: string;
}

const books: Book[] = [
  // Old Testament
  { id: 'genesis', name: 'Genesis', testament: 'Old', author: 'Moses', lessonCount: 6, description: 'In the beginning — Creation, Fall, and the Patriarchs' },
  { id: 'exodus', name: 'Exodus', testament: 'Old', author: 'Moses', lessonCount: 6, description: 'Deliverance from Egypt and the Ten Commandments' },
  { id: 'job', name: 'Job', testament: 'Old', author: 'Unknown', lessonCount: 6, description: 'Suffering, faith, and the greatness of God' },
  { id: 'psalms', name: 'Psalms', testament: 'Old', author: 'David & others', lessonCount: 6, description: 'Songs of praise, lament, and trust in God' },
  { id: 'proverbs', name: 'Proverbs', testament: 'Old', author: 'Solomon', lessonCount: 6, description: 'Practical wisdom for everyday life' },
  { id: 'isaiah', name: 'Isaiah', testament: 'Old', author: 'Isaiah', lessonCount: 6, description: 'Messianic prophecies and God\'s salvation' },
  { id: 'jonah', name: 'Jonah', testament: 'Old', author: 'Jonah', lessonCount: 6, description: "God's mercy extends to all nations" },
  { id: 'daniel', name: 'Daniel', testament: 'Old', author: 'Daniel', lessonCount: 6, description: 'Faithfulness in exile and prophetic visions' },
  // New Testament
  { id: 'matthew', name: 'Matthew', testament: 'New', author: 'Matthew', lessonCount: 4, description: 'Jesus the Messiah and King of Israel' },
  { id: 'mark', name: 'Mark', testament: 'New', author: 'John Mark', lessonCount: 6, description: 'The servant King — action-packed ministry of Jesus' },
  { id: 'luke', name: 'Luke', testament: 'New', author: 'Luke', lessonCount: 6, description: 'Jesus the Savior of all people' },
  { id: 'john', name: 'John', testament: 'New', author: 'John', lessonCount: 6, description: 'Jesus the Son of God — believe and have life' },
  { id: 'acts', name: 'Acts', testament: 'New', author: 'Luke', lessonCount: 6, description: 'The Holy Spirit and the birth of the church' },
  { id: '1corinthians', name: '1 Corinthians', testament: 'New', author: 'Paul', lessonCount: 6, description: 'Love, unity, and gifts in the church' },
  { id: 'galatians', name: 'Galatians', testament: 'New', author: 'Paul', lessonCount: 6, description: 'Freedom in Christ — saved by faith alone' },
  { id: 'ephesians', name: 'Ephesians', testament: 'New', author: 'Paul', lessonCount: 6, description: 'Riches in Christ and the armor of God' },
  { id: 'philippians', name: 'Philippians', testament: 'New', author: 'Paul', lessonCount: 6, description: 'Joy in Christ in every circumstance' },
  { id: 'romans', name: 'Romans', testament: 'New', author: 'Paul', lessonCount: 6, description: 'The Gospel and righteousness by faith' },
  { id: 'hebrews', name: 'Hebrews', testament: 'New', author: 'Unknown', lessonCount: 6, description: 'Jesus our Great High Priest and the Hall of Faith' },
  { id: 'revelation', name: 'Revelation', testament: 'New', author: 'John', lessonCount: 6, description: 'The victory of Christ and the end of all things' },
];

export default function BibleBooksScreen() {
  const navigation = useNavigation<NavigationProp>();
  useStore((state) => state.userProgress);
  const [selectedTestament, setSelectedTestament] = React.useState<'All' | 'Old' | 'New'>('All');

  const handleBookPress = (book: Book) => {
    if (!hasBookQuestions(book.id)) return;
    navigation.navigate('LessonPlayer', {
      category: 'books',
      subcategory: book.id,
      lessonId: 'lesson-1',
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const filteredBooks = books.filter(
    book => selectedTestament === 'All' || book.testament === selectedTestament
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Bible Books</Text>
          <Text style={styles.headerSubtitle}>Study Scripture book by book</Text>
        </View>
      </View>

      {/* Testament Filter */}
      <View style={styles.filterContainer}>
        {(['All', 'Old', 'New'] as const).map((testament) => (
          <TouchableOpacity
            key={testament}
            style={[
              styles.filterButton,
              selectedTestament === testament && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedTestament(testament)}
          >
            <Text
              style={[
                styles.filterText,
                selectedTestament === testament && styles.filterTextActive,
              ]}
            >
              {testament === 'All' ? 'All Books' : `${testament} Testament`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Wooly's Welcome */}
        <Wooly
          message="Each book of the Bible tells part of God's amazing story! Let's explore them together and discover the treasures within."
          mood="thinking"
        />

        {/* Books List */}
        <View style={styles.booksList}>
          {filteredBooks.map((book) => {
            const isOldTestament = book.testament === 'Old';
            const color = isOldTestament ? '#10B981' : '#3B82F6';
            const available = hasBookQuestions(book.id);

            return (
              <TouchableOpacity
                key={book.id}
                style={[styles.bookCard, !available && styles.bookCardDisabled]}
                onPress={() => handleBookPress(book)}
                activeOpacity={available ? 0.7 : 1}
              >
                <View style={styles.bookHeader}>
                  <View
                    style={[
                      styles.bookIcon,
                      { backgroundColor: available ? `${color}20` : '#F3F4F6' },
                    ]}
                  >
                    <Icon name="book" size={28} color={available ? color : '#9CA3AF'} />
                  </View>
                  <View style={styles.bookContent}>
                    <View style={styles.bookTitleRow}>
                      <Text style={styles.bookName}>{book.name}</Text>
                      <View
                        style={[
                          styles.testamentBadge,
                          { backgroundColor: `${color}20` },
                        ]}
                      >
                        <Text style={[styles.testamentText, { color }]}>
                          {book.testament === 'Old' ? 'OT' : 'NT'}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.bookAuthor}>By {book.author}</Text>
                    <Text style={styles.bookDescription}>
                      {book.description}
                    </Text>
                    {available ? (
                      <View style={styles.bookMeta}>
                        <Icon name="layers" size={14} color="#6B7280" />
                        <Text style={styles.metaText}>
                          {book.lessonCount} questions available
                        </Text>
                      </View>
                    ) : (
                      <View style={styles.comingSoonBadge}>
                        <Text style={styles.comingSoonBadgeText}>Coming Soon</Text>
                      </View>
                    )}
                  </View>
                  {available && <Icon name="chevron-right" size={20} color={color} />}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Coming Soon */}
        <View style={styles.comingSoonCard}>
          <Text style={styles.comingSoonEmoji}>🐑</Text>
          <Text style={styles.comingSoonTitle}>More Books Coming Soon!</Text>
          <Text style={styles.comingSoonText}>
            We're working on adding study lessons for all 66 books of the Bible. Check back regularly for updates!
          </Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: '#10B981',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 2,
    opacity: 0.9,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#E8E3FF', // Light lilac
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    gap: 8,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#10B981',
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  booksList: {
    marginTop: 16,
    gap: 12,
  },
  bookCard: {
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  bookCardDisabled: {
    opacity: 0.6,
  },
  comingSoonBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  comingSoonBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#92400E',
  },
  bookHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bookIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  bookContent: {
    flex: 1,
  },
  bookTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  bookName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    flex: 1,
  },
  testamentBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginLeft: 8,
  },
  testamentText: {
    fontSize: 12,
    fontWeight: '700',
  },
  bookAuthor: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#6B7280',
    marginBottom: 6,
  },
  bookDescription: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 8,
  },
  bookMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
  },
  comingSoonCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
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
