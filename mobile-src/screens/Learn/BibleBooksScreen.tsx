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
  {
    id: 'genesis',
    name: 'Genesis',
    testament: 'Old',
    author: 'Moses',
    lessonCount: 5,
    description: 'In the beginning - Creation, Fall, and Patriarchs',
  },
  {
    id: 'exodus',
    name: 'Exodus',
    testament: 'Old',
    author: 'Moses',
    lessonCount: 5,
    description: 'Deliverance from Egypt and the Law',
  },
  {
    id: 'matthew',
    name: 'Matthew',
    testament: 'New',
    author: 'Matthew',
    lessonCount: 5,
    description: 'Jesus the Messiah and King',
  },
  {
    id: 'john',
    name: 'John',
    testament: 'New',
    author: 'John',
    lessonCount: 5,
    description: 'Jesus the Son of God',
  },
  {
    id: 'romans',
    name: 'Romans',
    testament: 'New',
    author: 'Paul',
    lessonCount: 5,
    description: 'The Gospel and righteousness by faith',
  },
];

export default function BibleBooksScreen() {
  const navigation = useNavigation<NavigationProp>();
  const userProgress = useStore((state) => state.userProgress);
  const [selectedTestament, setSelectedTestament] = React.useState<'All' | 'Old' | 'New'>('All');

  const handleBookPress = (book: Book) => {
    // Navigate to book study screen (to be implemented)
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
          {filteredBooks.map((book, index) => {
            const isOldTestament = book.testament === 'Old';
            const color = isOldTestament ? '#10B981' : '#3B82F6';

            return (
              <TouchableOpacity
                key={book.id}
                style={styles.bookCard}
                onPress={() => handleBookPress(book)}
                activeOpacity={0.7}
              >
                <View style={styles.bookHeader}>
                  <View
                    style={[
                      styles.bookIcon,
                      { backgroundColor: `${color}20` },
                    ]}
                  >
                    <Icon name="book" size={28} color={color} />
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
                    <View style={styles.bookMeta}>
                      <Icon name="layers" size={14} color="#6B7280" />
                      <Text style={styles.metaText}>
                        {book.lessonCount} lessons available
                      </Text>
                    </View>
                  </View>
                  <Icon name="chevron-right" size={20} color={color} />
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
    paddingTop: 60,
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
