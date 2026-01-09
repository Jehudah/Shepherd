import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, BookOpen, ChevronRight } from 'lucide-react';
import { bibleBooks } from '../data/bibleBooks';
import { hasBookQuestions } from '../data/bookQuestions';
import { motion } from 'framer-motion';

export default function BibleBooks() {
  const [selectedTestament, setSelectedTestament] = useState<'all' | 'Old Testament' | 'New Testament'>('all');

  const filteredBooks = selectedTestament === 'all'
    ? bibleBooks
    : bibleBooks.filter(book => book.testament === selectedTestament);

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center space-x-4">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
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
            <h1 className="text-3xl sm:text-4xl font-bold">Bible Books</h1>
            <p className="text-lg sm:text-xl opacity-90 mt-2">
              Deep dive into each book of the Bible
            </p>
          </div>
        </div>

        {/* Testament Filter */}
        <div className="flex gap-2 mt-6 flex-wrap">
          {['all', 'Old Testament', 'New Testament'].map((testament) => (
            <button
              key={testament}
              onClick={() => setSelectedTestament(testament as any)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedTestament === testament
                  ? 'bg-white text-purple-600 shadow-lg scale-105'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              {testament === 'all' ? 'All Books' : testament}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid - Simple Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book, index) => {
          const hasLessons = hasBookQuestions(book.id);

          return (
            <Link
              key={book.id}
              to={`/book-study/${book.id}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden h-full"
              >
                {/* Book Card */}
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl flex-shrink-0 shadow-md"
                      style={{ backgroundColor: book.color }}
                    >
                      {book.characterIcon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {book.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {book.chapters} chapters
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {book.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BookOpen size={16} style={{ color: book.color }} />
                      <span className="text-sm font-semibold" style={{ color: book.color }}>
                        {hasLessons ? 'Study Now' : 'Read Overview'}
                      </span>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                  </div>

                  {hasLessons && (
                    <div className="mt-3 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-lg">
                      <p className="text-xs text-green-700 dark:text-green-300 font-semibold">
                        ✅ Lessons Available
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Study Tip */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
          <span className="text-2xl mr-2">🐑</span>
          Study Tips from Woolly
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <span className="mr-2">📖</span>
            <span>Start with the Gospels (Matthew, Mark, Luke, John) to learn about Jesus</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✍️</span>
            <span>Read the key verses multiple times to memorize them</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">🔍</span>
            <span>Use the outline to understand the book's structure</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">🙏</span>
            <span>Pray before reading and ask God to help you understand</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
