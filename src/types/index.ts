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

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: LearningCategory;
  subcategory?: string;
  icon: string;
  questions: Question[];
  requiredXP?: number;
  isLocked: boolean;
  order: number;
}

export interface UserProgress {
  userId: string;
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

export interface Theme {
  id: string;
  name: string;
  description: string;
  verses: VerseReference[];
  color: string;
}

export interface VerseReference {
  book: string;
  chapter: number;
  verse: string;
  text?: string;
}

export interface BibleCharacter {
  name: string;
  description: string;
  keyVerses: VerseReference[];
  relationships: Record<string, string>;
  era: string;
}
