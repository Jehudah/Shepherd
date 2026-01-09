import { Link } from 'react-router-dom';
import { BookOpen, Users, Clock, Award, TrendingUp, Sparkles } from 'lucide-react';
import { useStore } from '../store/useStore';
import { lessons } from '../data/lessons';
import { LearningCategory } from '../types';

const categories = [
  {
    id: 'names' as LearningCategory,
    title: 'Names & People',
    description: 'Learn about biblical characters',
    icon: '👥',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'themes' as LearningCategory,
    title: 'Themes',
    description: 'Study passages by topic',
    icon: '🎯',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'books' as LearningCategory,
    title: 'Books',
    description: 'Navigate scripture structure',
    icon: '📖',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'timeline' as LearningCategory,
    title: 'Timeline',
    description: 'Historical events & chronology',
    icon: '⏳',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'verses' as LearningCategory,
    title: 'Memory Verses',
    description: 'Memorize key scriptures',
    icon: '⭐',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    id: 'parables' as LearningCategory,
    title: 'Parables & Stories',
    description: 'Interactive story learning',
    icon: '📚',
    color: 'from-indigo-500 to-blue-500'
  }
];

export default function Home() {
  const { userProgress, achievements } = useStore();

  const recentlyUnlockedAchievements = achievements
    .filter(a => a.unlocked)
    .sort((a, b) => (b.unlockedDate || '').localeCompare(a.unlockedDate || ''))
    .slice(0, 3);

  const completedLessonsCount = userProgress.completedLessons.length;
  const totalLessons = lessons.length;
  const progressPercentage = Math.round((completedLessonsCount / totalLessons) * 100);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-3xl p-8 shadow-xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 flex items-center">
            <span className="text-5xl mr-3">🐑</span>
            Welcome to Shepherd
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Your journey to deeper Bible knowledge starts here. Learn at your own pace with interactive lessons, quizzes, and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/learn"
              className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              to="/themes"
              className="bg-primary-700 bg-opacity-50 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-70 transition-all"
            >
              Explore Themes
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Total XP</p>
              <p className="text-3xl font-bold text-primary-600">{userProgress.totalXP}</p>
            </div>
            <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
              <Sparkles className="text-primary-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Current Level</p>
              <p className="text-3xl font-bold text-green-600">{userProgress.level}</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
              <TrendingUp className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Day Streak</p>
              <p className="text-3xl font-bold text-orange-600">{userProgress.streak}</p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full">
              <Clock className="text-orange-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Lessons Done</p>
              <p className="text-3xl font-bold text-purple-600">{completedLessonsCount}</p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
              <BookOpen className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Award className="mr-2 text-primary-600" />
          Your Progress
        </h2>
        <div className="space-y-2">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400">Overall Completion</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {completedLessonsCount} / {totalLessons} lessons
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: `${progressPercentage}%` }}
            >
              {progressPercentage > 15 && (
                <span className="text-xs font-bold text-white">{progressPercentage}%</span>
              )}
            </div>
          </div>
        </div>

        {recentlyUnlockedAchievements.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Recent Achievements
            </h3>
            <div className="flex gap-3">
              {recentlyUnlockedAchievements.map(achievement => (
                <div
                  key={achievement.id}
                  className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900 dark:to-yellow-900 p-4 rounded-xl flex-1 text-center"
                >
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">
                    {achievement.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Learning Categories */}
      <div>
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <Users className="mr-3 text-primary-600" />
          Learning Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => {
            const categoryProgress = userProgress.categoryProgress[category.id];
            const progress = categoryProgress
              ? Math.round((categoryProgress.completedLessons / categoryProgress.totalLessons) * 100)
              : 0;

            return (
              <Link
                key={category.id}
                to={`/learn/${category.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${category.color} text-white w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {category.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                    <span>Progress</span>
                    <span>{categoryProgress?.completedLessons || 0} / {categoryProgress?.totalLessons || 0}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${category.color} h-full rounded-full transition-all`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
