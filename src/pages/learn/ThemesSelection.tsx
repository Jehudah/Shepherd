import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { expandedThemes } from '../../data/expandedThemes';

export default function ThemesSelection() {
  return (
    <div className="space-y-6 pb-8">
      {/* Back Button */}
      <Link
        to="/learn"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Learn
      </Link>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center space-x-4">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <BookOpen size={48} />
          </motion.div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Biblical Themes</h1>
            <p className="text-lg sm:text-xl opacity-90 mt-2">
              Choose a theme to explore • {expandedThemes.length} available
            </p>
          </div>
        </div>
      </div>

      {/* Sheep Guide */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-4 sm:p-6 border-2 border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-3">
          <span className="text-4xl">🐑</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Choose Your Growth Areas!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Pick any theme that interests you. Each has lessons that get progressively more challenging!
            </p>
          </div>
        </div>
      </div>

      {/* Themes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expandedThemes.map((theme, index) => (
          <Link
            key={theme.id}
            to={`/learn/themes/${theme.id}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden h-full"
            >
              <div className="p-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-md"
                  style={{ backgroundColor: theme.color }}
                >
                  {theme.name.charAt(0)}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {theme.name}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {theme.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    5 lessons
                  </span>
                  <div
                    className="px-4 py-2 rounded-lg text-white font-semibold text-sm"
                    style={{ backgroundColor: theme.color }}
                  >
                    Start →
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
