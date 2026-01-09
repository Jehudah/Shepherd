import { Link, useParams } from 'react-router-dom';
import { CheckCircle, Lock, Play, ArrowLeft } from 'lucide-react';
import { useStore } from '../store/useStore';
import { lessons } from '../data/lessons';
import { LearningCategory } from '../types';

export default function Learn() {
  const { category } = useParams<{ category?: LearningCategory }>();
  const { userProgress } = useStore();

  const filteredLessons = category
    ? lessons.filter(lesson => lesson.category === category).sort((a, b) => a.order - b.order)
    : lessons.sort((a, b) => a.order - b.order);

  const getCategoryInfo = (cat: LearningCategory) => {
    const categories = {
      names: { title: 'Names & People', icon: '👥', color: 'from-blue-500 to-cyan-500' },
      themes: { title: 'Themes', icon: '🎯', color: 'from-purple-500 to-pink-500' },
      books: { title: 'Books', icon: '📖', color: 'from-green-500 to-emerald-500' },
      timeline: { title: 'Timeline', icon: '⏳', color: 'from-orange-500 to-red-500' },
      verses: { title: 'Memory Verses', icon: '⭐', color: 'from-yellow-500 to-amber-500' },
      parables: { title: 'Parables & Stories', icon: '📚', color: 'from-indigo-500 to-blue-500' }
    };
    return categories[cat];
  };

  return (
    <div className="space-y-6">
      {category && (
        <div>
          <Link
            to="/learn"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to all categories
          </Link>
          <div className={`bg-gradient-to-r ${getCategoryInfo(category).color} text-white rounded-2xl p-8 shadow-xl`}>
            <div className="flex items-center space-x-4">
              <span className="text-6xl">{getCategoryInfo(category).icon}</span>
              <div>
                <h1 className="text-4xl font-bold">{getCategoryInfo(category).title}</h1>
                <p className="text-xl opacity-90 mt-2">
                  {filteredLessons.length} lessons available
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!category && (
        <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-2">Choose Your Path</h1>
          <p className="text-xl opacity-90">
            Select a category to start your learning journey
          </p>
        </div>
      )}

      {!category ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from(new Set(lessons.map(l => l.category))).map(cat => {
            const categoryLessons = lessons.filter(l => l.category === cat);
            const completed = categoryLessons.filter(l =>
              userProgress.completedLessons.includes(l.id)
            ).length;
            const progress = Math.round((completed / categoryLessons.length) * 100);
            const info = getCategoryInfo(cat);

            return (
              <Link
                key={cat}
                to={`/learn/${cat}`}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${info.color} text-white w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {categoryLessons.length} lessons
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                    <span>Progress</span>
                    <span>{completed} / {categoryLessons.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${info.color} h-full rounded-full transition-all`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson, index) => {
            const isCompleted = userProgress.completedLessons.includes(lesson.id);
            const isLocked = lesson.requiredXP && userProgress.totalXP < lesson.requiredXP;
            const previousLesson = index > 0 ? filteredLessons[index - 1] : null;
            const isPreviousCompleted = previousLesson
              ? userProgress.completedLessons.includes(previousLesson.id)
              : true;

            const canAccess = !isLocked && isPreviousCompleted;

            return (
              <div
                key={lesson.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg ${
                  canAccess ? 'hover:shadow-xl transform hover:scale-105' : 'opacity-60'
                } transition-all relative`}
              >
                {isCompleted && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2">
                    <CheckCircle size={24} />
                  </div>
                )}

                {isLocked && (
                  <div className="absolute top-4 right-4 bg-gray-400 text-white rounded-full p-2">
                    <Lock size={24} />
                  </div>
                )}

                <div className="text-5xl mb-4">{lesson.icon}</div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {lesson.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {lesson.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span>{lesson.questions.length} questions</span>
                  {lesson.requiredXP && (
                    <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-1 rounded">
                      {lesson.requiredXP} XP required
                    </span>
                  )}
                </div>

                {canAccess ? (
                  <Link
                    to={`/lesson/${lesson.id}`}
                    className={`w-full ${
                      isCompleted
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-primary-600 hover:bg-primary-700'
                    } text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2`}
                  >
                    <Play size={20} />
                    <span>{isCompleted ? 'Practice Again' : 'Start Lesson'}</span>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-3 rounded-xl font-semibold cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <Lock size={20} />
                    <span>Locked</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
