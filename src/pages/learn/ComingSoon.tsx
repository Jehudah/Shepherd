import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Star, BookText } from 'lucide-react';

interface ComingSoonProps {
  category: 'timeline' | 'verses' | 'parables';
}

const categoryInfo = {
  timeline: {
    title: 'Timeline',
    description: 'Study biblical events in chronological order',
    icon: Clock,
    color: 'from-orange-500 to-red-500',
    features: [
      'Creation to Patriarchs',
      'Exodus and Wilderness',
      'Judges and Kings',
      'Exile and Return',
      'Life of Jesus',
      'Early Church'
    ]
  },
  verses: {
    title: 'Memorize Verses',
    description: 'Build your memory of Scripture verse by verse',
    icon: Star,
    color: 'from-yellow-500 to-amber-500',
    features: [
      'Fill-in-the-blank exercises',
      'Multiple choice verse completion',
      'Voice recitation (coming soon)',
      'Organized by book and chapter',
      'Track memorization progress',
      'Daily verse challenges'
    ]
  },
  parables: {
    title: 'Parables & Stories',
    description: 'Understand the parables Jesus taught',
    icon: BookText,
    color: 'from-indigo-500 to-blue-500',
    features: [
      'Parables of the Kingdom',
      'Parables about God\'s Love',
      'Parables about Prayer',
      'Old Testament Stories',
      'Miracles of Jesus',
      'Stories of Faith'
    ]
  }
};

export default function ComingSoon({ category }: ComingSoonProps) {
  const info = categoryInfo[category];
  const Icon = info.icon;

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
      <div className={`bg-gradient-to-r ${info.color} text-white rounded-3xl p-6 sm:p-8 shadow-xl`}>
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
            <Icon size={48} />
          </motion.div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">{info.title}</h1>
            <p className="text-lg sm:text-xl opacity-90 mt-2">
              {info.description}
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
          🚧
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Coming Soon!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          We're working hard to bring you this amazing learning experience. Check back soon!
        </p>
      </div>

      {/* Feature Preview */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          What's Coming:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {info.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
            >
              <span className="text-green-500">✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sheep Message */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800">
        <div className="flex items-start space-x-3">
          <span className="text-4xl">🐑</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Woolly's Encouragement
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              While we're building this section, why not explore our other categories? There's so much to learn in Names & People, Themes, and Books!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
