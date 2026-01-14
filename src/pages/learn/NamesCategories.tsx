import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, ArrowLeft, Crown, Scroll, Shield, Heart } from 'lucide-react';

export default function NamesCategories() {
  const subcategories = [
    {
      id: 'prophets',
      title: 'Prophets',
      description: 'Learn about God\'s messengers and their prophecies',
      icon: Scroll,
      characterIcon: '📜',
      color: 'from-blue-500 to-cyan-500',
      bgColor: '#3B82F6',
      lessonCount: 8
    },
    {
      id: 'kings',
      title: 'Kings & Queens',
      description: 'Study the rulers of Israel and Judah',
      icon: Crown,
      characterIcon: '👑',
      color: 'from-purple-500 to-pink-500',
      bgColor: '#A855F7',
      lessonCount: 8
    },
    {
      id: 'apostles',
      title: 'Apostles & Disciples',
      description: 'Discover the disciples of Jesus',
      icon: Shield,
      characterIcon: '🛡️',
      color: 'from-green-500 to-emerald-500',
      bgColor: '#10B981',
      lessonCount: 8
    },
    {
      id: 'women',
      title: 'Women of Faith',
      description: 'Powerful women in biblical history',
      icon: Heart,
      characterIcon: '👸',
      color: 'from-pink-500 to-rose-500',
      bgColor: '#EC4899',
      lessonCount: 8
    },
    {
      id: 'patriarchs',
      title: 'Patriarchs',
      description: 'The founding fathers of faith: Abraham, Isaac, Jacob',
      icon: Users,
      characterIcon: '🧙',
      color: 'from-amber-500 to-orange-500',
      bgColor: '#F59E0B',
      lessonCount: 8
    },
    {
      id: 'judges',
      title: 'Judges',
      description: 'Leaders and deliverers of ancient Israel',
      icon: Shield,
      characterIcon: '⚔️',
      color: 'from-red-500 to-rose-500',
      bgColor: '#EF4444',
      lessonCount: 8
    }
  ];

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
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
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
            <Users size={48} />
          </motion.div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Names & People</h1>
            <p className="text-lg sm:text-xl opacity-90 mt-2">
              Choose a category to begin your study
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
              Woolly's Tip: Choose Any Character!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              All lessons are now open! Pick any biblical character or category you want to learn about. Start with your favorites or explore something new. Each lesson has questions from beginner to advanced theological levels!
            </p>
          </div>
        </div>
      </div>

      {/* Subcategories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((subcategory, index) => {
          return (
            <Link
              key={subcategory.id}
              to={`/learn/names/${subcategory.id}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden"
              >
                <div className="p-6">
                  {/* Large Character Icon */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-lg text-5xl"
                    style={{ backgroundColor: subcategory.bgColor }}
                  >
                    {subcategory.characterIcon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {subcategory.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {subcategory.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                      {subcategory.lessonCount} lessons
                    </span>
                    <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${subcategory.color} text-white font-semibold text-sm`}>
                      Explore →
                    </div>
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
