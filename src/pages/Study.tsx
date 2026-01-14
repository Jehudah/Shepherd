import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookMarked, Users, Book, Clock, Star, BookText } from 'lucide-react';

export default function Study() {
  const categories = [
    {
      id: 'names',
      title: 'Names & People',
      description: 'Explore backgrounds, histories, and significance of biblical figures',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      path: '/study/names'
    },
    {
      id: 'themes',
      title: 'Themes',
      description: 'Deep theological study of biblical themes with cross-references',
      icon: BookMarked,
      color: 'from-purple-500 to-pink-500',
      path: '/study/themes'
    },
    {
      id: 'books',
      title: 'Books',
      description: 'Comprehensive background, context, and verse-by-verse study',
      icon: Book,
      color: 'from-green-500 to-emerald-500',
      path: '/study/books'
    },
    {
      id: 'timeline',
      title: 'Timeline',
      description: 'Historical context and detailed background of biblical events',
      icon: Clock,
      color: 'from-orange-500 to-red-500',
      path: '/study/timeline'
    },
    {
      id: 'verses',
      title: 'Verse Study',
      description: 'Original language study, context, and application of verses',
      icon: Star,
      color: 'from-yellow-500 to-amber-500',
      path: '/study/verses'
    },
    {
      id: 'parables',
      title: 'Parables & Stories',
      description: 'Cultural context and deeper meaning behind Jesus\' parables',
      icon: BookText,
      color: 'from-indigo-500 to-blue-500',
      path: '/study/parables'
    }
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center space-x-4">
          <motion.div
            animate={{
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <BookMarked size={48} />
          </motion.div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Study</h1>
            <p className="text-lg sm:text-xl opacity-90 mt-2">
              Dive deeper into Scripture with background info and context
            </p>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-4 sm:p-6 border-2 border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-3">
          <span className="text-4xl">📖</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Study vs. Learn
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              While <strong>Learn</strong> focuses on quizzes and memorization, <strong>Study</strong> provides in-depth background information, historical context, cross-references, and detailed explanations to deepen your understanding.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const isAvailable = category.id === 'names' || category.id === 'themes';

          return (
            <div key={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-full ${!isAvailable ? 'opacity-60' : ''}`}
              >
                <div className="p-6">
                  <div className={`bg-gradient-to-r ${category.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                    <Icon size={32} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {category.description}
                  </p>

                  {isAvailable ? (
                    <Link
                      to={category.path}
                      className="block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-center font-semibold text-sm transition-colors"
                    >
                      Explore Articles
                    </Link>
                  ) : (
                    <div className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-lg text-center font-semibold text-sm">
                      Coming Soon
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Sheep Message */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800">
        <div className="flex items-start space-x-3">
          <span className="text-4xl">🐑</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Woolly's Study Tip
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              The Study section is being developed! For now, keep practicing in the Learn section. Deep understanding comes from both knowledge AND practice!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
