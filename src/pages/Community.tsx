import { motion } from 'framer-motion';
import { Users, MessageCircle, TrendingUp, Heart } from 'lucide-react';

export default function Community() {
  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center space-x-4">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
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
            <h1 className="text-3xl sm:text-4xl font-bold">Community</h1>
            <p className="text-lg sm:text-xl opacity-90 mt-2">
              Connect, discuss, and grow together
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Message */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="text-8xl mb-6"
        >
          👥
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Coming Soon!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Join a vibrant community of believers learning together. Share progress, discuss topics, and encourage one another!
        </p>
      </div>

      {/* Feature Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800">
          <div className="bg-blue-500 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Friends' Progress
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            See what your friends are learning and celebrate their achievements together
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800">
          <div className="bg-purple-500 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <MessageCircle size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Discussion Forums
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Engage in meaningful conversations about biblical topics and themes
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-2xl p-6 border-2 border-pink-200 dark:border-pink-800">
          <div className="bg-pink-500 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Heart size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Prayer Requests
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Share prayer requests and pray for others in the community
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800">
          <div className="bg-green-500 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Users size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Study Groups
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Join or create study groups to learn together with like-minded believers
          </p>
        </div>
      </div>

      {/* Sheep Message */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800">
        <div className="flex items-start space-x-3">
          <span className="text-4xl">🐑</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Woolly's Community Wisdom
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              "As iron sharpens iron, so one person sharpens another." (Proverbs 27:17) - Learning together makes us all stronger!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
