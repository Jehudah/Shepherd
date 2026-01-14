import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, CheckCircle, Lock, SkipForward } from 'lucide-react';
import { useStore } from '../../store/useStore';

const lessons = [
  { id: 'timeline-creation-1', title: 'Creation & Early History', difficulty: 1, questions: 12 },
  { id: 'timeline-creation-2', title: 'Noah & the Flood', difficulty: 2, questions: 12 },
  { id: 'timeline-creation-3', title: 'Abraham & the Patriarchs', difficulty: 3, questions: 12 },
  { id: 'timeline-creation-4', title: 'Isaac & Jacob', difficulty: 4, questions: 12 },
  { id: 'timeline-creation-5', title: 'Joseph in Egypt', difficulty: 5, questions: 12 }
];

export default function Timeline() {
  const { userProgress } = useStore();

  return (
    <div className="space-y-6 pb-8">
      <Link
        to="/learn"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Learn
      </Link>

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Biblical Timeline</h1>
            <p className="text-lg sm:text-xl opacity-90 mt-2">
              {lessons.length} lessons • Progressive difficulty
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-4 sm:p-6 border-2 border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-3">
          <span className="text-4xl">📚</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              How It Works
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Complete each lesson to unlock the next one. Or use the <strong>Skip</strong> button if you're ready for harder challenges!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson, index) => {
          const isCompleted = userProgress.completedLessons.includes(lesson.id);
          const previousLesson = index > 0 ? lessons[index - 1] : null;
          const isPreviousCompleted = previousLesson
            ? userProgress.completedLessons.includes(previousLesson.id)
            : true;

          const canAccess = isPreviousCompleted || isCompleted;

          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg ${
                canAccess ? 'hover:shadow-xl transform hover:scale-105' : 'opacity-60'
              } transition-all relative`}
            >
              {isCompleted && (
                <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2">
                  <CheckCircle size={20} />
                </div>
              )}

              {!canAccess && (
                <div className="absolute top-4 right-4 bg-gray-400 text-white rounded-full p-2">
                  <Lock size={20} />
                </div>
              )}

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-6 rounded-full ${
                      i < lesson.difficulty
                        ? 'bg-gradient-to-t from-orange-500 to-yellow-400'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                ))}
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Lesson {index + 1}
              </h3>

              <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                {lesson.title}
              </h4>

              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span>{lesson.questions} questions</span>
                <span className="text-xs">
                  Difficulty: {lesson.difficulty}/5
                </span>
              </div>

              {canAccess ? (
                <div className="space-y-2">
                  <Link
                    to={`/lesson/timeline/creation/${lesson.id}`}
                    className={`w-full ${
                      isCompleted
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-primary-600 hover:bg-primary-700'
                    } text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2`}
                  >
                    <Play size={20} />
                    <span>{isCompleted ? 'Practice Again' : 'Start Lesson'}</span>
                  </Link>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    disabled
                    className="w-full bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-3 rounded-xl font-semibold cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <Lock size={20} />
                    <span>Complete Previous</span>
                  </button>
                  <Link
                    to={`/lesson/timeline/creation/${lesson.id}`}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 text-sm"
                  >
                    <SkipForward size={18} />
                    <span>Skip & Try Anyway</span>
                  </Link>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
