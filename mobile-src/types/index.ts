// React Native Types for Shepherd App
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type QuestionType =
  | 'multiple-choice'
  | 'true-false'
  | 'fill-blank'
  | 'matching'
  | 'order';

export type LearningCategory =
  | 'names'
  | 'themes'
  | 'books'
  | 'timeline'
  | 'verses'
  | 'parables';

export interface Question {
  id: string;
  type: QuestionType;
  category?: LearningCategory;
  subcategory?: string;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  verse?: string;
  difficulty?: 1 | 2 | 3 | 4 | 5;
  xpReward?: number;
}

export interface UserProfile {
  uid: string;
  email: string;
  username: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
  lastLoginAt: Date;
}

export interface UserProgress {
  userId: string;
  username: string;
  email: string;
  totalXP: number;
  level: number;
  streak: number;
  lastStudyDate: string;
  completedLessons: string[];
  categoryProgress: Record<LearningCategory, {
    completedLessons: number;
    totalLessons: number;
    xp: number;
  }>;
  syncedAt?: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: number;
  unlocked: boolean;
  unlockedDate?: string;
}

export interface StudySession {
  lessonId: string;
  startTime: string;
  endTime?: string;
  questionsAnswered: number;
  correctAnswers: number;
  xpEarned: number;
}

// Navigation Types
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  LessonPlayer: {
    category: LearningCategory;
    subcategory?: string;
    lessonId: string;
  };
  NamesCategories: undefined;
  NamesLessons: { subcategory: string };
  ThemesSelection: undefined;
  ThemesLessons: { themeId: string };
  Timeline: undefined;
  MemorizeVerses: undefined;
  Parables: undefined;
  BibleBooks: undefined;
  StudyNames: undefined;
  StudyThemes: undefined;
  StudyArticle: {
    category: string;
    articleId: string;
  };
  Friends: undefined;
  FriendProfile: { friendId: string };
  Leaderboard: undefined;
  StudyGroups: undefined;
  GroupDetail: { groupId: string };
  PrayerRequests: undefined;
  Forums: undefined;
  ForumTopic: { topicId: string };
};

export type MainTabParamList = {
  Learn: undefined;
  Challenge: undefined;
  Community: undefined;
  Study: undefined;
  Profile: undefined;
};

// Navigation prop type for use in screens
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type LearnStackParamList = {
  LearnHome: undefined;
  NamesCategories: undefined;
  NamesLessons: { subcategory: string };
  ThemesSelection: undefined;
  ThemesLessons: { themeId: string };
  BibleBooks: undefined;
  Timeline: undefined;
  MemorizeVerses: undefined;
  Parables: undefined;
};

export type StudyStackParamList = {
  StudyHome: undefined;
  StudyNames: undefined;
  StudyThemes: undefined;
  StudyArticle: { category: string; articleId: string };
};

// Auth Types
export interface AuthCredentials {
  email: string;
  password: string;
  username?: string;
}

export interface AuthState {
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
}
