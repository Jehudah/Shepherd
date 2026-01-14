import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Users } from 'lucide-react';
import { namesStudyArticles } from '../data/studyContent';

export default function StudyNames() {
  return (
    <div className="space-y-6 pb-8">
      <Link
        to="/study"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Study
      </Link>

      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center space-x-4">
          <Users size={48} />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Names & People</h1>
            <p className="text-lg sm:text-xl opacity-90 mt-2">
              Explore backgrounds, histories, and significance of biblical figures
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-4 sm:p-6 border-2 border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-3">
          <span className="text-4xl">📖</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Deep Dive Study
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              These articles provide comprehensive background information, historical context, and spiritual insights about key biblical figures. Read to deepen your understanding before or after taking the quizzes!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {namesStudyArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={`/study/names/${article.id}`}
              className="block bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {article.subtitle}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
                    {article.introduction}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 font-semibold text-sm">
                    Read Article
                    <ArrowLeft size={16} className="ml-2 rotate-180" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Message for More Articles */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800">
        <div className="flex items-start space-x-3">
          <span className="text-4xl">🐑</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              More Coming Soon!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              We're working on adding more in-depth study articles for all the biblical figures featured in the Learn section. Check back regularly for new content!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
