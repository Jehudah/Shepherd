import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Trophy, Star } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { Question, LearningCategory } from '../../types';
import QuestionCard from '../../components/QuestionCard';
import { shuffleArray, shuffleOptions } from '../../utils/shuffle';
import { prophetsQuestions, kingsQuestions, apostlesQuestions, womenQuestions } from '../../data/namesQuestions';
import { loveThemeQuestions, faithThemeQuestions, hopeThemeQuestions, peaceThemeQuestions, wisdomThemeQuestions } from '../../data/themesQuestions';
import { bookQuestions } from '../../data/bookQuestions';
import { creationQuestions } from '../../data/timelineQuestions';
import { salvationVersesQuestions } from '../../data/versesQuestions';
import { parablesQuestions } from '../../data/parablesQuestions';

export default function LessonPlayer() {
  const { category, subcategory, lessonId } = useParams<{ category: string; subcategory?: string; lessonId: string }>();
  const navigate = useNavigate();
  const { updateXP, completeLesson, updateStreak, startSession } = useStore();

  // Load questions based on category
  const getQuestions = (): Question[] => {
    if (category === 'names' && subcategory && lessonId) {
      if (subcategory === 'prophets' && prophetsQuestions[lessonId]) {
        return prophetsQuestions[lessonId];
      }
      if (subcategory === 'kings' && kingsQuestions[lessonId]) {
        return kingsQuestions[lessonId];
      }
      if (subcategory === 'apostles' && apostlesQuestions[lessonId]) {
        return apostlesQuestions[lessonId];
      }
      if (subcategory === 'women' && womenQuestions[lessonId]) {
        return womenQuestions[lessonId];
      }
    }

    if (category === 'themes' && subcategory && lessonId) {
      if (subcategory === 'love' && loveThemeQuestions[lessonId]) {
        return loveThemeQuestions[lessonId];
      }
      if (subcategory === 'faith' && faithThemeQuestions[lessonId]) {
        return faithThemeQuestions[lessonId];
      }
      if (subcategory === 'hope' && hopeThemeQuestions[lessonId]) {
        return hopeThemeQuestions[lessonId];
      }
      if (subcategory === 'peace' && peaceThemeQuestions[lessonId]) {
        return peaceThemeQuestions[lessonId];
      }
      if (subcategory === 'wisdom' && wisdomThemeQuestions[lessonId]) {
        return wisdomThemeQuestions[lessonId];
      }
    }

    if (category === 'books' && lessonId) {
      if (bookQuestions[lessonId]) {
        return bookQuestions[lessonId];
      }
    }

    if (category === 'timeline' && subcategory && lessonId) {
      if (subcategory === 'creation' && creationQuestions[lessonId]) {
        return creationQuestions[lessonId];
      }
    }

    if (category === 'verses' && subcategory && lessonId) {
      if (subcategory === 'salvation' && salvationVersesQuestions[lessonId]) {
        return salvationVersesQuestions[lessonId];
      }
    }

    if (category === 'parables' && subcategory && lessonId) {
      if (subcategory === 'kingdom' && parablesQuestions[lessonId]) {
        return parablesQuestions[lessonId];
      }
    }

    return [];
  };

  const originalQuestions = getQuestions();

  // Shuffle questions once when component mounts
  const shuffledQuestions = useMemo(() => {
    return shuffleArray(originalQuestions);
  }, [category, subcategory, lessonId]);

  // Shuffle options for each question
  const questionsWithShuffledOptions = useMemo(() => {
    return shuffledQuestions.map(q => {
      if (q.type === 'multiple-choice' && q.options) {
        return {
          ...q,
          shuffledOptions: shuffleOptions(q.options)
        };
      }
      return q;
    });
  }, [shuffledQuestions]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [wrongQuestions, setWrongQuestions] = useState<(Question & { shuffledOptions?: string[] })[]>([]);
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (questionsWithShuffledOptions.length > 0) {
      const fullLessonId = `${category}-${subcategory}-${lessonId}`;
      startSession(fullLessonId);
      updateStreak();
    }
  }, [questionsWithShuffledOptions, startSession, updateStreak]);

  if (questionsWithShuffledOptions.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Lesson not found
        </h2>
        <button
          onClick={() => navigate(`/learn/${category}${subcategory ? `/${subcategory}` : ''}`)}
          className="text-primary-600 hover:underline"
        >
          Return to lessons
        </button>
      </div>
    );
  }

  const currentQuestion = questionsWithShuffledOptions[currentQuestionIndex];
  const totalQuestions = questionsWithShuffledOptions.length + wrongQuestions.length;
  const answeredCount = completedQuestions.size;
  const progress = (answeredCount / totalQuestions) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || isAnswered) return;

    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      setCompletedQuestions(prev => new Set([...prev, currentQuestion.id]));
    } else {
      // Only add to wrong questions if not already completed
      if (!completedQuestions.has(currentQuestion.id)) {
        setWrongQuestions(prev => [...prev, currentQuestion]);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questionsWithShuffledOptions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      // Check if we have wrong questions to retry
      if (wrongQuestions.length > 0 && !completedQuestions.has(wrongQuestions[0].id)) {
        // Re-shuffle options for retry questions
        const retryQuestions = wrongQuestions.map(q => {
          if (q.type === 'multiple-choice' && q.options) {
            return {
              ...q,
              shuffledOptions: shuffleOptions(q.options)
            };
          }
          return q;
        });
        questionsWithShuffledOptions.push(...retryQuestions);
        setWrongQuestions([]);
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer('');
        setIsAnswered(false);
        setIsCorrect(false);
      } else {
        // All questions answered correctly
        const fullLessonId = `${category}-${subcategory}-${lessonId}`;
        const xpEarned = questionsWithShuffledOptions.length * 10;
        updateXP(xpEarned);
        completeLesson(fullLessonId, category as LearningCategory);
        setShowResults(true);
      }
    }
  };

  if (showResults) {
    const accuracy = Math.round((correctAnswers / answeredCount) * 100);

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl text-center">
          <div className="text-6xl mb-6">🎉</div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Lesson Complete!
          </h2>

          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-xl p-6 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Trophy size={32} />
              <span className="text-4xl font-bold">+{questionsWithShuffledOptions.length * 10} XP</span>
            </div>
            <p className="text-lg">Great job!</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
              <CheckCircle className="mx-auto mb-2 text-green-600" size={32} />
              <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Correct</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
              <Star className="mx-auto mb-2 text-gray-600" size={32} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{accuracy}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors"
            >
              Practice Again
            </button>
            <button
              onClick={() => navigate(`/learn/${category}${subcategory ? `/${subcategory}` : ''}`)}
              className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-3 px-6 rounded-xl font-semibold transition-colors"
            >
              Back to Lessons
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(`/learn/${category}${subcategory ? `/${subcategory}` : ''}`)}
          className="flex items-center text-primary-600 dark:text-primary-400 hover:underline"
        >
          <ArrowLeft size={20} className="mr-2" />
          Exit Lesson
        </button>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Question {answeredCount + 1} of {totalQuestions}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question Card */}
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        isAnswered={isAnswered}
        isCorrect={isCorrect}
        onAnswerSelect={handleAnswerSelect}
        shuffledOptions={(currentQuestion as any).shuffledOptions}
      />

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        {!isAnswered ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className={`px-8 py-3 rounded-xl font-semibold transition-colors ${
              selectedAnswer
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
          >
            {currentQuestionIndex < questionsWithShuffledOptions.length - 1 ||
            (wrongQuestions.length > 0 && !completedQuestions.has(wrongQuestions[0].id))
              ? 'Next Question'
              : 'Finish'}
          </button>
        )}
      </div>

      {/* Feedback */}
      {isAnswered && (
        <div
          className={`p-6 rounded-xl ${
            isCorrect
              ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
              : 'bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-500'
          }`}
        >
          <div className="flex items-center space-x-3">
            {isCorrect ? (
              <>
                <CheckCircle className="text-green-600" size={24} />
                <span className="text-green-800 dark:text-green-200 font-semibold">
                  Correct! Great job! 🎉
                </span>
              </>
            ) : (
              <>
                <XCircle className="text-orange-600" size={24} />
                <div>
                  <p className="text-orange-800 dark:text-orange-200 font-semibold">
                    Not quite! Let's try again later.
                  </p>
                  <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                    The correct answer is: {currentQuestion.correctAnswer}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
