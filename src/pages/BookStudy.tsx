import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, BookOpen, CheckCircle } from 'lucide-react';
import { bibleBooks } from '../data/bibleBooks';
import { getBookQuestions, hasBookQuestions } from '../data/bookQuestions';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';

export default function BookStudy() {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const { userProgress } = useStore();

  const book = bibleBooks.find(b => b.id === bookId);

  if (!book) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Book not found
        </h2>
        <Link to="/bible-books" className="text-primary-600 hover:underline">
          Back to Bible Books
        </Link>
      </div>
    );
  }

  const bookQuestions = getBookQuestions(book.id);
  const hasQuestions = hasBookQuestions(book.id);

  // Create lessons from questions (group by 5 questions)
  const lessonsFromQuestions = [];
  if (hasQuestions) {
    for (let i = 0; i < bookQuestions.length; i += 5) {
      const chunk = bookQuestions.slice(i, i + 5);
      const lessonNumber = Math.floor(i / 5) + 1;
      const lessonId = `${book.id}-lesson-${lessonNumber}`;
      const isCompleted = userProgress.completedLessons.includes(lessonId);

      lessonsFromQuestions.push({
        id: lessonId,
        number: lessonNumber,
        title: `${book.name} - Lesson ${lessonNumber}`,
        description: `Study ${book.name} chapter ${lessonNumber} with ${chunk.length} questions`,
        questionsCount: chunk.length,
        isCompleted
      });
    }
  }

  return (
    <div className="space-y-6 pb-8">
      {/* Back Button */}
      <Link
        to="/bible-books"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to all books
      </Link>

      {/* Book Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl"
        style={{ background: `linear-gradient(135deg, ${book.color} 0%, ${book.color}dd 100%)` }}
      >
        <div className="flex items-start space-x-4">
          <div className="text-6xl">{book.characterIcon}</div>
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{book.name}</h1>
            <p className="text-lg opacity-90 mb-4">{book.keyTheme}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {book.testament}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {book.chapters} chapters
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                By {book.author}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
          <BookOpen className="mr-2" style={{ color: book.color }} />
          Overview
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {book.description}
        </p>
      </motion.div>

      {/* Key Verses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
          <span className="text-2xl mr-2">⭐</span>
          Key Verses to Memorize
        </h2>
        <div className="space-y-3">
          {book.keyVerses.map((verse, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-xl border-l-4"
              style={{ borderColor: book.color }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: book.color }}>
                {book.name} {verse.chapter}:{verse.verse}
              </p>
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "{verse.text}"
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lessons */}
      {hasQuestions && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <span className="text-2xl mr-2">📝</span>
            Study Lessons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lessonsFromQuestions.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="relative"
              >
                <Link
                  to={`/book-lesson/${book.id}/${lesson.number}`}
                  className="block bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-5 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
                >
                  {lesson.isCompleted && (
                    <div className="absolute top-3 right-3">
                      <CheckCircle className="text-green-500" size={24} />
                    </div>
                  )}
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                      style={{ backgroundColor: book.color }}
                    >
                      {lesson.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        Lesson {lesson.number}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {lesson.questionsCount} questions
                      </p>
                      <div className="flex items-center space-x-2">
                        <Play size={16} style={{ color: book.color }} />
                        <span className="text-sm font-semibold" style={{ color: book.color }}>
                          {lesson.isCompleted ? 'Practice Again' : 'Start Lesson'}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {!hasQuestions && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800"
        >
          <div className="flex items-start space-x-3">
            <span className="text-4xl">🐑</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Lessons Coming Soon!
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Interactive lessons for {book.name} are being prepared. In the meantime, study the overview, key verses, and outline above!
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Book Outline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
          <span className="text-2xl mr-2">📋</span>
          Book Outline
        </h2>
        <div className="space-y-2">
          {book.outline.map((section, idx) => (
            <div key={idx} className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5"
                style={{ backgroundColor: book.color }}
              >
                {idx + 1}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{section}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fun Facts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Fun Facts
        </h2>
        <div className="space-y-2">
          {book.funFacts.map((fact, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <span className="text-lg flex-shrink-0">✨</span>
              <p className="text-gray-700 dark:text-gray-300">{fact}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
