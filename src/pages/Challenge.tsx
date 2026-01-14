import { motion } from 'framer-motion';
import { Zap, Trophy, Users, Target } from 'lucide-react';

export default function Challenge() {
  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center space-x-4">
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <Zap size={48} />
          </motion.div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Challenge</h1>
            <p className="text-lg sm:text-xl opacity-90 mt-2">
              Compete with friends and test your knowledge
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Message */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
        <motion.div
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="text-8xl mb-6"
        >
          ⚡
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Coming Soon!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Get ready to challenge your friends and the community with exciting Bible quizzes. This feature is under development!
        </p>
      </div>

      {/* Feature Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800">
          <div className="bg-blue-500 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Users size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Friend Challenges
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Challenge your friends to head-to-head Bible quizzes
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800">
          <div className="bg-purple-500 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Trophy size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Leaderboards
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Compete for the top spot in weekly and monthly rankings
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-6 border-2 border-orange-200 dark:border-orange-800">
          <div className="bg-orange-500 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Target size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Daily Challenges
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Take on new challenges every day to earn bonus rewards
          </p>
        </div>
      </div>

      {/* Sheep Message */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800">
        <div className="flex items-start space-x-3">
          <span className="text-4xl">🐑</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Woolly Says: Keep Learning!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              While we work on challenges, keep building your knowledge in the Learn section. The more you learn now, the better you'll compete later!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
