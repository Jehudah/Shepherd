import { useState } from 'react';
import { Book, ChevronDown, Heart } from 'lucide-react';
import { expandedThemes } from '../data/expandedThemes';
import { motion } from 'framer-motion';

export default function Themes() {
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleTheme = (themeId: string) => {
    setExpandedTheme(expandedTheme === themeId ? null : themeId);
  };

  const toggleFavorite = (themeId: string) => {
    setFavorites(prev =>
      prev.includes(themeId)
        ? prev.filter(id => id !== themeId)
        : [...prev, themeId]
    );
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
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
            <Book size={48} />
          </motion.div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Biblical Themes</h1>
            <p className="text-lg sm:text-xl opacity-90 mt-2">
              Choose themes YOU want to grow in - {expandedThemes.length} available
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
              Woolly's Tip: Choose Your Growth Areas!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Unlike lessons, themes are NOT locked! Tap any theme to explore verses on topics that matter to YOU. Favorite themes you want to study regularly by tapping the heart ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Theme Grid */}
      <div className="space-y-4">
        {expandedThemes.map((theme, index) => {
          const isExpanded = expandedTheme === theme.id;
          const isFavorite = favorites.includes(theme.id);

          return (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-4 sm:p-6 flex items-center justify-between">
                <button
                  onClick={() => toggleTheme(theme.id)}
                  className="flex items-center space-x-3 sm:space-x-4 text-left flex-1"
                >
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0 shadow-md"
                    style={{ backgroundColor: theme.color }}
                  >
                    {theme.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {theme.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {theme.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {theme.verses.length} verses
                    </p>
                  </div>
                </button>
                <div className="flex items-center space-x-2 ml-2">
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(theme.id);
                    }}
                    whileTap={{ scale: 0.8 }}
                    className="p-2"
                  >
                    <Heart
                      size={24}
                      className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                    />
                  </motion.button>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-400" size={24} />
                  </motion.div>
                </div>
              </div>

              {isExpanded && (
                <div className="px-6 pb-6 space-y-4 animate-slide-up">
                  <div className="h-1 w-full rounded-full" style={{ backgroundColor: theme.color }} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {theme.verses.map((verse, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-5 rounded-xl"
                      >
                        <div className="flex items-start space-x-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                            style={{ backgroundColor: theme.color }}
                          >
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                              {verse.book} {verse.chapter}:{verse.verse}
                            </p>
                            {verse.text && (
                              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                                "{verse.text}"
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <span className="font-semibold">Study Tip:</span> Read these verses in context
                      and meditate on how they relate to the theme of {theme.name.toLowerCase()}.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          How to Use Themes
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Click on any theme to expand and view related Bible verses</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Read each verse in its full context for deeper understanding</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Use these themes for personal study, devotions, or group discussions</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Practice what you learn by completing related lessons</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
