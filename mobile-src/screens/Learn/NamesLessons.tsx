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
import Icon from 'react-native-vector-icons/Feather';
import { WoolyTip } from '../../components/Wooly';
import { useStore } from '../../store/useStore';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, 'NamesLessons'>;

interface Lesson {
  id: string;
  title: string;
  description: string;
  difficulty: 1 | 2 | 3;
  questionCount: number;
  xpReward: number;
}

const lessonsByCategory: Record<string, Lesson[]> = {
  prophets: [
    {
      id: 'prophets-1',
      title: 'Moses & The Prophets',
      description: 'Learn about God\'s messengers',
      difficulty: 1,
      questionCount: 10,
      xpReward: 100,
    },
  ],
  kings: [
    {
      id: 'kings-1',
      title: 'Kings of Israel',
      description: 'Leaders after God\'s heart',
      difficulty: 1,
      questionCount: 10,
      xpReward: 100,
    },
  ],
  apostles: [
    {
      id: 'apostles-1',
      title: 'The Twelve Apostles',
      description: 'Followers of Jesus',
      difficulty: 1,
      questionCount: 10,
      xpReward: 100,
    },
  ],
  women: [
    {
      id: 'women-1',
      title: 'Women of Faith',
      description: 'Courageous women in the Bible',
      difficulty: 1,
      questionCount: 10,
      xpReward: 100,
    },
  ],
};

const categoryNames: Record<string, string> = {
  prophets: 'Prophets',
  kings: 'Kings & Leaders',
  apostles: 'Apostles',
  women: 'Women of Faith',
};

export default function NamesLessons() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const { subcategory } = route.params;
  const userProgress = useStore((state) => state.userProgress);

  const lessons = lessonsByCategory[subcategory] || [];
  const categoryName = categoryNames[subcategory] || 'Lessons';

  const handleLessonPress = (lesson: Lesson) => {
    navigation.navigate('LessonPlayer', {
      category: 'names',
      subcategory,
      lessonId: lesson.id,
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const isLessonCompleted = (lessonId: string) => {
    const fullLessonId = `names-${subcategory}-${lessonId}`;
    return userProgress.completedLessons.includes(fullLessonId);
  };

  const getDifficultyColor = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return '#10B981';
      case 2:
        return '#F59E0B';
      case 3:
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const getDifficultyLabel = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return 'Beginner';
      case 2:
        return 'Intermediate';
      case 3:
        return 'Advanced';
      default:
        return 'Unknown';
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#1F2937" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{categoryName}</Text>
          <Text style={styles.headerSubtitle}>{lessons.length} lessons available</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Wooly's Tip */}
        <WoolyTip message="Start with beginner lessons if you're new, or jump to advanced for a challenge!" />

        {/* Lessons List */}
        <View style={styles.lessonsList}>
          {lessons.map((lesson, index) => {
            const completed = isLessonCompleted(lesson.id);
            return (
              <TouchableOpacity
                key={lesson.id}
                style={styles.lessonCard}
                onPress={() => handleLessonPress(lesson)}
                activeOpacity={0.7}
              >
                <View style={styles.lessonHeader}>
                  <View style={styles.lessonNumber}>
                    {completed ? (
                      <Icon name="check-circle" size={24} color="#10B981" />
                    ) : (
                      <Text style={styles.lessonNumberText}>{index + 1}</Text>
                    )}
                  </View>
                  <View style={styles.lessonContent}>
                    <Text style={styles.lessonTitle}>{lesson.title}</Text>
                    <Text style={styles.lessonDescription}>
                      {lesson.description}
                    </Text>
                    <View style={styles.lessonMeta}>
                      <View
                        style={[
                          styles.difficultyBadge,
                          { backgroundColor: `${getDifficultyColor(lesson.difficulty)}20` },
                        ]}
                      >
                        <Text
                          style={[
                            styles.difficultyText,
                            { color: getDifficultyColor(lesson.difficulty) },
                          ]}
                        >
                          {getDifficultyLabel(lesson.difficulty)}
                        </Text>
                      </View>
                      <View style={styles.metaItem}>
                        <Icon name="help-circle" size={14} color="#6B7280" />
                        <Text style={styles.metaText}>{lesson.questionCount} questions</Text>
                      </View>
                      <View style={styles.metaItem}>
                        <Icon name="zap" size={14} color="#F59E0B" />
                        <Text style={styles.metaText}>+{lesson.xpReward} XP</Text>
                      </View>
                    </View>
                  </View>
                  <Icon name="chevron-right" size={20} color="#9CA3AF" />
                </View>
              </TouchableOpacity>
            );
          })}
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
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
    gap: 12,
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
  },
  lessonNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  lessonNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  lessonDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  lessonMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '600',
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
});
