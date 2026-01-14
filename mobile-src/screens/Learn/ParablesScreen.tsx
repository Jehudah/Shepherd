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
import Icon from 'react-native-vector-icons/Feather';
import Wooly from '../../components/Wooly';
import { useStore } from '../../store/useStore';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface ParableLesson {
  id: string;
  title: string;
  description: string;
  parables: string[];
  questionCount: number;
  xpReward: number;
}

const parableLessons: ParableLesson[] = [
  {
    id: 'kingdom-1',
    title: 'Kingdom Parables Foundations',
    description: 'Understanding the Kingdom of God',
    parables: ['The Sower', 'The Mustard Seed', 'The Yeast'],
    questionCount: 12,
    xpReward: 120,
  },
  {
    id: 'kingdom-2',
    title: 'Readiness & Faithfulness',
    description: 'Being prepared for Christ\'s return',
    parables: ['Ten Virgins', 'The Talents', 'Faithful Servant'],
    questionCount: 12,
    xpReward: 150,
  },
  {
    id: 'kingdom-3',
    title: 'Grace & Obedience',
    description: 'God\'s grace and our response',
    parables: ['Workers in Vineyard', 'Two Sons', 'Wedding Feast'],
    questionCount: 12,
    xpReward: 150,
  },
  {
    id: 'kingdom-4',
    title: 'Judgment & Mercy',
    description: 'Divine justice and compassion',
    parables: ['Unmerciful Servant', 'Rich Man & Lazarus', 'Pharisee & Tax Collector'],
    questionCount: 12,
    xpReward: 200,
  },
  {
    id: 'kingdom-5',
    title: 'Lost & Found',
    description: 'God\'s love for the lost',
    parables: ['Lost Sheep', 'Lost Coin', 'Prodigal Son'],
    questionCount: 12,
    xpReward: 200,
  },
];

export default function ParablesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const userProgress = useStore((state) => state.userProgress);

  const handleLessonPress = (lesson: ParableLesson) => {
    navigation.navigate('LessonPlayer', {
      category: 'parables',
      subcategory: 'kingdom',
      lessonId: lesson.id,
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const isLessonCompleted = (lessonId: string) => {
    const fullLessonId = `parables-kingdom-${lessonId}`;
    return userProgress.completedLessons.includes(fullLessonId);
  };

  const getCardColor = (index: number) => {
    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#EC4899', '#F59E0B'];
    return colors[index % colors.length];
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Parables & Stories</Text>
          <Text style={styles.headerSubtitle}>Learn from Jesus' teachings</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Wooly's Welcome */}
        <Wooly
          message="Jesus loved to teach through stories! These parables are full of wisdom and life lessons. Let's discover what they mean together!"
          mood="celebrating"
        />

        {/* Lessons List */}
        <View style={styles.lessonsList}>
          {parableLessons.map((lesson, index) => {
            const completed = isLessonCompleted(lesson.id);
            const cardColor = getCardColor(index);

            return (
              <TouchableOpacity
                key={lesson.id}
                style={[
                  styles.lessonCard,
                  { borderTopColor: cardColor, borderTopWidth: 4 },
                ]}
                onPress={() => handleLessonPress(lesson)}
                activeOpacity={0.7}
              >
                <View style={styles.lessonHeader}>
                  <View
                    style={[
                      styles.lessonIcon,
                      { backgroundColor: `${cardColor}20` },
                    ]}
                  >
                    {completed ? (
                      <Icon name="check-circle" size={28} color={cardColor} />
                    ) : (
                      <Icon name="message-circle" size={28} color={cardColor} />
                    )}
                  </View>
                  <View style={styles.lessonContent}>
                    <Text style={styles.lessonTitle}>{lesson.title}</Text>
                    <Text style={styles.lessonDescription}>
                      {lesson.description}
                    </Text>
                  </View>
                </View>

                {/* Parables List */}
                <View style={styles.parablesContainer}>
                  <Text style={styles.parablesLabel}>Parables Covered:</Text>
                  <View style={styles.parablesList}>
                    {lesson.parables.map((parable, i) => (
                      <View key={i} style={styles.parableBadge}>
                        <Icon name="book" size={12} color={cardColor} />
                        <Text
                          style={[styles.parableText, { color: cardColor }]}
                        >
                          {parable}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>

                <View style={styles.lessonFooter}>
                  <View style={styles.lessonMeta}>
                    <View style={styles.metaItem}>
                      <Icon name="help-circle" size={14} color="#6B7280" />
                      <Text style={styles.metaText}>
                        {lesson.questionCount} questions
                      </Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Icon name="zap" size={14} color="#F59E0B" />
                      <Text style={styles.metaText}>+{lesson.xpReward} XP</Text>
                    </View>
                  </View>
                  {completed && (
                    <View style={styles.completedBadge}>
                      <Text style={styles.completedText}>✓ Completed</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoEmoji}>💡</Text>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>What Are Parables?</Text>
            <Text style={styles.infoText}>
              Parables are simple stories Jesus used to teach deep spiritual truths. They use everyday situations to reveal profound lessons about God's kingdom, faith, and how we should live.
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
    backgroundColor: '#06B6D4',
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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  lessonsList: {
    marginTop: 16,
    gap: 16,
  },
  lessonCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  lessonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  lessonIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  lessonDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  parablesContainer: {
    marginBottom: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  parablesLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  parablesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  parableBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  parableText: {
    fontSize: 12,
    fontWeight: '600',
  },
  lessonFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lessonMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
  },
  completedBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  completedText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#065F46',
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    borderWidth: 2,
    borderColor: '#BFDBFE',
  },
  infoEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#1E40AF',
    lineHeight: 20,
  },
});
