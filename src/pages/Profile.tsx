import { Award, TrendingUp, Target, Calendar, RotateCcw } from 'lucide-react';
import { useStore } from '../store/useStore';
import { lessons } from '../data/lessons';

export default function Profile() {
  const { userProgress, achievements, resetProgress } = useStore();

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      resetProgress();
    }
  };

  const totalLessons = lessons.length;
  const completedLessons = userProgress.completedLessons.length;
  const completionPercentage = Math.round((completedLessons / totalLessons) * 100);

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const lockedAchievements = achievements.filter(a => !a.unlocked);

  const xpToNextLevel = ((userProgress.level) * 100) - userProgress.totalXP;

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-6xl">
            👤
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Your Profile</h1>
            <p className="text-xl opacity-90">Level {userProgress.level} Bible Scholar</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-400">Total XP</span>
            <TrendingUp className="text-primary-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-primary-600">{userProgress.totalXP}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {xpToNextLevel} XP to level {userProgress.level + 1}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-400">Lessons</span>
            <Target className="text-green-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-green-600">
            {completedLessons}/{totalLessons}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {completionPercentage}% complete
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-400">Streak</span>
            <Calendar className="text-orange-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-orange-600">{userProgress.streak}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {userProgress.streak === 0 ? 'Start today!' : 'days in a row'}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-400">Achievements</span>
            <Award className="text-purple-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-purple-600">
            {unlockedAchievements.length}/{achievements.length}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">unlocked</p>
        </div>
      </div>

      {/* Category Progress */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
          <Target className="mr-2 text-primary-600" />
          Category Progress
        </h2>
        <div className="space-y-4">
          {Object.entries(userProgress.categoryProgress).map(([category, progress]) => {
            const percentage = Math.round((progress.completedLessons / progress.totalLessons) * 100);
            const categoryNames: Record<string, string> = {
              names: 'Names & People',
              themes: 'Themes',
              books: 'Books',
              timeline: 'Timeline',
              verses: 'Memory Verses',
              parables: 'Parables & Stories'
            };

            return (
              <div key={category}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {categoryNames[category]}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {progress.completedLessons} / {progress.totalLessons} lessons
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-purple-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
          <Award className="mr-2 text-purple-600" />
          Achievements
        </h2>

        {unlockedAchievements.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Unlocked ({unlockedAchievements.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {unlockedAchievements.map(achievement => (
                <div
                  key={achievement.id}
                  className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-amber-300 dark:border-amber-700 p-4 rounded-xl"
                >
                  <div className="text-5xl mb-2 text-center">{achievement.icon}</div>
                  <h4 className="font-bold text-center text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {lockedAchievements.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Locked ({lockedAchievements.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lockedAchievements.map(achievement => (
                <div
                  key={achievement.id}
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl opacity-60"
                >
                  <div className="text-5xl mb-2 text-center grayscale">{achievement.icon}</div>
                  <h4 className="font-bold text-center text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reset Progress */}
      <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-2 flex items-center">
          <RotateCcw className="mr-2" size={24} />
          Reset Progress
        </h3>
        <p className="text-red-700 dark:text-red-300 mb-4">
          This will delete all your progress, achievements, and statistics. This action cannot be undone.
        </p>
        <button
          onClick={handleReset}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          Reset All Progress
        </button>
      </div>
    </div>
  );
}
