import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Users, Book, Clock, Star, BookText } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Learn() {
  const { userProgress } = useStore();

  const categories = [
    {
      id: 'names',
      title: 'Names & People',
      description: 'Learn about prophets, kings, and key biblical figures',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      path: '/learn/names'
    },
    {
      id: 'themes',
      title: 'Themes',
      description: 'Explore biblical themes like love, faith, and hope',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      path: '/learn/themes'
    },
    {
      id: 'books',
      title: 'Books',
      description: 'Deep dive into individual books of the Bible',
      icon: Book,
      color: 'from-green-500 to-emerald-500',
      path: '/learn/books'
    },
    {
      id: 'timeline',
      title: 'Timeline',
      description: 'Study biblical events in chronological order',
      icon: Clock,
      color: 'from-orange-500 to-red-500',
      path: '/learn/timeline'
    },
    {
      id: 'verses',
      title: 'Memorize Verses',
      description: 'Build your memory of Scripture verse by verse',
      icon: Star,
      color: 'from-yellow-500 to-amber-500',
      path: '/learn/verses'
    },
    {
      id: 'parables',
      title: 'Parables & Stories',
      description: 'Understand the parables Jesus taught',
      icon: BookText,
      color: 'from-indigo-500 to-blue-500',
      path: '/learn/parables'
    }
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
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
            <h1 className="text-3xl sm:text-4xl font-bold">Learn</h1>
            <p className="text-lg sm:text-xl opacity-90 mt-2">
              Choose your path to grow in biblical knowledge
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
              Woolly's Learning Tip!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Each category has lessons that get progressively more challenging. Complete lessons to unlock the next one, or skip ahead if you're ready for advanced content!
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.id}
              to={category.path}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden h-full"
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

                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white font-semibold text-sm`}>
                    <span>Start Learning</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
