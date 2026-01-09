import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress, StudySession, Achievement, LearningCategory } from '../types';

interface AppState {
  userProgress: UserProgress;
  currentSession: StudySession | null;
  achievements: Achievement[];

  // Actions
  updateXP: (amount: number) => void;
  completeLesson: (lessonId: string, category: LearningCategory) => void;
  updateStreak: () => void;
  startSession: (lessonId: string) => void;
  endSession: (questionsAnswered: number, correctAnswers: number, xpEarned: number) => void;
  unlockAchievement: (achievementId: string) => void;
  resetProgress: () => void;
}

const initialProgress: UserProgress = {
  userId: 'user-1',
  totalXP: 0,
  level: 1,
  streak: 0,
  lastStudyDate: '',
  completedLessons: [],
  categoryProgress: {
    names: { completedLessons: 0, totalLessons: 3, xp: 0 },
    themes: { completedLessons: 0, totalLessons: 3, xp: 0 },
    books: { completedLessons: 0, totalLessons: 2, xp: 0 },
    timeline: { completedLessons: 0, totalLessons: 3, xp: 0 },
    verses: { completedLessons: 0, totalLessons: 2, xp: 0 },
    parables: { completedLessons: 0, totalLessons: 2, xp: 0 },
  }
};

const initialAchievements: Achievement[] = [
  {
    id: 'ach-001',
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎯',
    requirement: 1,
    unlocked: false
  },
  {
    id: 'ach-002',
    title: 'Dedicated Learner',
    description: 'Complete 5 lessons',
    icon: '📚',
    requirement: 5,
    unlocked: false
  },
  {
    id: 'ach-003',
    title: 'Bible Scholar',
    description: 'Complete 10 lessons',
    icon: '🎓',
    requirement: 10,
    unlocked: false
  },
  {
    id: 'ach-004',
    title: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
    requirement: 7,
    unlocked: false
  },
  {
    id: 'ach-005',
    title: 'Century Club',
    description: 'Earn 100 XP',
    icon: '💯',
    requirement: 100,
    unlocked: false
  },
  {
    id: 'ach-006',
    title: 'Master of Names',
    description: 'Complete all Names lessons',
    icon: '👥',
    requirement: 3,
    unlocked: false
  }
];

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      userProgress: initialProgress,
      currentSession: null,
      achievements: initialAchievements,

      updateXP: (amount: number) => {
        set((state) => {
          const newTotalXP = state.userProgress.totalXP + amount;
          const newLevel = Math.floor(newTotalXP / 100) + 1;

          return {
            userProgress: {
              ...state.userProgress,
              totalXP: newTotalXP,
              level: newLevel
            }
          };
        });

        // Check XP achievement
        const { userProgress, achievements, unlockAchievement } = get();
        const xpAchievement = achievements.find(a => a.id === 'ach-005');
        if (xpAchievement && !xpAchievement.unlocked && userProgress.totalXP >= 100) {
          unlockAchievement('ach-005');
        }
      },

      completeLesson: (lessonId: string, category: LearningCategory) => {
        set((state) => {
          const alreadyCompleted = state.userProgress.completedLessons.includes(lessonId);

          if (alreadyCompleted) {
            return state;
          }

          const categoryProgress = {
            ...state.userProgress.categoryProgress[category],
            completedLessons: state.userProgress.categoryProgress[category].completedLessons + 1
          };

          return {
            userProgress: {
              ...state.userProgress,
              completedLessons: [...state.userProgress.completedLessons, lessonId],
              categoryProgress: {
                ...state.userProgress.categoryProgress,
                [category]: categoryProgress
              }
            }
          };
        });

        // Check lesson achievements
        const { userProgress, achievements, unlockAchievement } = get();
        const completedCount = userProgress.completedLessons.length;

        if (completedCount >= 1 && !achievements.find(a => a.id === 'ach-001')?.unlocked) {
          unlockAchievement('ach-001');
        }
        if (completedCount >= 5 && !achievements.find(a => a.id === 'ach-002')?.unlocked) {
          unlockAchievement('ach-002');
        }
        if (completedCount >= 10 && !achievements.find(a => a.id === 'ach-003')?.unlocked) {
          unlockAchievement('ach-003');
        }

        // Check category-specific achievements
        const namesCompleted = userProgress.categoryProgress.names.completedLessons;
        if (namesCompleted >= 3 && !achievements.find(a => a.id === 'ach-006')?.unlocked) {
          unlockAchievement('ach-006');
        }
      },

      updateStreak: () => {
        set((state) => {
          const today = new Date().toDateString();
          const lastStudy = state.userProgress.lastStudyDate;

          if (lastStudy === today) {
            return state;
          }

          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toDateString();

          let newStreak = 1;
          if (lastStudy === yesterdayStr) {
            newStreak = state.userProgress.streak + 1;
          }

          return {
            userProgress: {
              ...state.userProgress,
              streak: newStreak,
              lastStudyDate: today
            }
          };
        });

        // Check streak achievement
        const { userProgress, achievements, unlockAchievement } = get();
        if (userProgress.streak >= 7 && !achievements.find(a => a.id === 'ach-004')?.unlocked) {
          unlockAchievement('ach-004');
        }
      },

      startSession: (lessonId: string) => {
        set({
          currentSession: {
            lessonId,
            startTime: new Date().toISOString(),
            questionsAnswered: 0,
            correctAnswers: 0,
            xpEarned: 0
          }
        });
      },

      endSession: (questionsAnswered: number, correctAnswers: number, xpEarned: number) => {
        set((state) => ({
          currentSession: state.currentSession ? {
            ...state.currentSession,
            endTime: new Date().toISOString(),
            questionsAnswered,
            correctAnswers,
            xpEarned
          } : null
        }));
      },

      unlockAchievement: (achievementId: string) => {
        set((state) => ({
          achievements: state.achievements.map(achievement =>
            achievement.id === achievementId
              ? { ...achievement, unlocked: true, unlockedDate: new Date().toISOString() }
              : achievement
          )
        }));
      },

      resetProgress: () => {
        set({
          userProgress: initialProgress,
          currentSession: null,
          achievements: initialAchievements
        });
      }
    }),
    {
      name: 'shepherd-storage'
    }
  )
);
