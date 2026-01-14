import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProgress, UserProfile, Achievement, LearningCategory } from '../types';
import { ProgressService } from '../services/firebase';

interface AppState {
  // User
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;

  // Progress
  userProgress: UserProgress;
  setUserProgress: (progress: UserProgress) => void;

  // Achievements
  achievements: Achievement[];

  // Session
  currentSession: {
    lessonId: string;
    startTime: string;
  } | null;

  // Actions
  updateXP: (amount: number) => void;
  completeLesson: (lessonId: string, category: LearningCategory) => void;
  updateStreak: () => void;
  startSession: (lessonId: string) => void;
  endSession: (questionsAnswered: number, correctAnswers: number, xpEarned: number) => void;
  unlockAchievement: (achievementId: string) => void;
  resetProgress: () => void;
  syncToCloud: () => Promise<void>;
}

const initialProgress: UserProgress = {
  userId: '',
  username: '',
  email: '',
  totalXP: 0,
  level: 1,
  streak: 0,
  lastStudyDate: '',
  completedLessons: [],
  categoryProgress: {
    names: { completedLessons: 0, totalLessons: 20, xp: 0 },
    themes: { completedLessons: 0, totalLessons: 25, xp: 0 },
    books: { completedLessons: 0, totalLessons: 10, xp: 0 },
    timeline: { completedLessons: 0, totalLessons: 5, xp: 0 },
    verses: { completedLessons: 0, totalLessons: 5, xp: 0 },
    parables: { completedLessons: 0, totalLessons: 5, xp: 0 },
  },
};

const initialAchievements: Achievement[] = [
  {
    id: 'ach-001',
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎯',
    requirement: 1,
    unlocked: false,
  },
  {
    id: 'ach-002',
    title: 'Dedicated Learner',
    description: 'Complete 5 lessons',
    icon: '📚',
    requirement: 5,
    unlocked: false,
  },
  {
    id: 'ach-003',
    title: 'Bible Scholar',
    description: 'Complete 10 lessons',
    icon: '🎓',
    requirement: 10,
    unlocked: false,
  },
  {
    id: 'ach-004',
    title: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
    requirement: 7,
    unlocked: false,
  },
  {
    id: 'ach-005',
    title: 'Century Club',
    description: 'Earn 100 XP',
    icon: '💯',
    requirement: 100,
    unlocked: false,
  },
];

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: null,
      userProgress: initialProgress,
      achievements: initialAchievements,
      currentSession: null,

      setUser: (user) => set({ user }),

      setUserProgress: (progress) => set({ userProgress: progress }),

      updateXP: (amount) => {
        set((state) => {
          const newTotalXP = state.userProgress.totalXP + amount;
          const newLevel = Math.floor(newTotalXP / 100) + 1;

          return {
            userProgress: {
              ...state.userProgress,
              totalXP: newTotalXP,
              level: newLevel,
            },
          };
        });

        // Sync to cloud if user is logged in
        const { user } = get();
        if (user) {
          ProgressService.updateXP(user.uid, amount).catch(console.error);
        }
      },

      completeLesson: (lessonId, category) => {
        set((state) => {
          if (state.userProgress.completedLessons.includes(lessonId)) {
            return state;
          }

          const updatedLessons = [...state.userProgress.completedLessons, lessonId];
          const categoryProgress = { ...state.userProgress.categoryProgress };

          if (categoryProgress[category]) {
            categoryProgress[category] = {
              ...categoryProgress[category],
              completedLessons: categoryProgress[category].completedLessons + 1,
              xp: categoryProgress[category].xp + 10,
            };
          }

          return {
            userProgress: {
              ...state.userProgress,
              completedLessons: updatedLessons,
              categoryProgress,
            },
          };
        });

        // Sync to cloud
        const { user } = get();
        if (user) {
          ProgressService.completeLesson(user.uid, lessonId, category).catch(console.error);
        }

        // Check achievements
        const { userProgress, achievements } = get();
        achievements.forEach((achievement) => {
          if (!achievement.unlocked) {
            if (achievement.id === 'ach-001' && userProgress.completedLessons.length >= 1) {
              get().unlockAchievement(achievement.id);
            } else if (achievement.id === 'ach-002' && userProgress.completedLessons.length >= 5) {
              get().unlockAchievement(achievement.id);
            } else if (achievement.id === 'ach-003' && userProgress.completedLessons.length >= 10) {
              get().unlockAchievement(achievement.id);
            } else if (achievement.id === 'ach-005' && userProgress.totalXP >= 100) {
              get().unlockAchievement(achievement.id);
            }
          }
        });
      },

      updateStreak: () => {
        set((state) => {
          const today = new Date().toISOString().split('T')[0];
          const lastStudy = state.userProgress.lastStudyDate;

          let newStreak = state.userProgress.streak;

          if (!lastStudy) {
            newStreak = 1;
          } else {
            const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

            if (lastStudy === yesterday) {
              newStreak += 1;
            } else if (lastStudy !== today) {
              newStreak = 1;
            }
          }

          return {
            userProgress: {
              ...state.userProgress,
              streak: newStreak,
              lastStudyDate: today,
            },
          };
        });

        // Sync to cloud
        const { user } = get();
        if (user) {
          ProgressService.updateStreak(user.uid).catch(console.error);
        }

        // Check streak achievement
        const { userProgress, achievements } = get();
        const streakAch = achievements.find((a) => a.id === 'ach-004');
        if (streakAch && !streakAch.unlocked && userProgress.streak >= 7) {
          get().unlockAchievement('ach-004');
        }
      },

      startSession: (lessonId) => {
        set({
          currentSession: {
            lessonId,
            startTime: new Date().toISOString(),
          },
        });
      },

      endSession: (questionsAnswered, correctAnswers, xpEarned) => {
        set({ currentSession: null });
      },

      unlockAchievement: (achievementId) => {
        set((state) => ({
          achievements: state.achievements.map((ach) =>
            ach.id === achievementId
              ? { ...ach, unlocked: true, unlockedDate: new Date().toISOString() }
              : ach
          ),
        }));
      },

      resetProgress: () => {
        set({
          userProgress: initialProgress,
          achievements: initialAchievements,
          currentSession: null,
        });
      },

      syncToCloud: async () => {
        const { user, userProgress } = get();
        if (user) {
          await ProgressService.syncProgress(userProgress);
        }
      },
    }),
    {
      name: 'shepherd-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
