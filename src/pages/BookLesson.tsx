import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Star } from 'lucide-react';
import { useStore } from '../store/useStore';
import { bibleBooks } from '../data/bibleBooks';
import { getBookQuestions } from '../data/bookQuestions';
import { Question } from '../types';
import { shuffleArray, shuffleOptions } from '../utils/shuffle';
import QuestionCard from '../components/QuestionCard';

export default function BookLesson() {
  const { bookId, lessonNumber } = useParams<{ bookId: string; lessonNumber: string }>();
  const navigate = useNavigate();
  const { updateXP, completeLesson, updateStreak } = useStore();

  const book = bibleBooks.find(b => b.id === bookId);
  const allBookQuestions = getBookQuestions(bookId || '');

  // Calculate which questions belong to this lesson (5 per lesson)
  const lessonNum = parseInt(lessonNumber || '1');
  const startIdx = (lessonNum - 1) * 5;
  const endIdx = startIdx + 5;
  const originalLessonQuestions = allBookQuestions.slice(startIdx, endIdx);

  // Shuffle questions once when component mounts
  const shuffledQuestions = useMemo(() => {
    return shuffleArray(originalLessonQuestions);
  }, [bookId, lessonNumber]); // Re-shuffle if lesson changes

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
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (book) {
      updateStreak();
    }
  }, [book, updateStreak]);

  if (!book || !originalLessonQuestions.length) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Lesson not found
        </h2>
        <button
          onClick={() => navigate('/bible-books')}
          className="text-primary-600 hover:underline"
        >
          Return to Bible Books
        </button>
      </div>
    );
  }

  const currentQuestion = questionsWithShuffledOptions[currentQuestionIndex];
  const totalQuestions = questionsWithShuffledOptions.length + wrongQuestions.length;
  const answeredCount = completedQuestions.size;
  const progress = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    const correct = Array.isArray(currentQuestion.correctAnswer)
      ? currentQuestion.correctAnswer.includes(selectedAnswer)
      : selectedAnswer === currentQuestion.correctAnswer;

    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      setTotalCorrect(prev => prev + 1);
      setCompletedQuestions(prev => new Set([...prev, currentQuestion.id]));
      updateXP(currentQuestion.xpReward || 10);
    } else {
      // Add to wrong questions if not already there
      if (!wrongQuestions.find(q => q.id === currentQuestion.id) && !completedQuestions.has(currentQuestion.id)) {
        setWrongQuestions(prev => [...prev, currentQuestion]);
      }
    }
  };

  const handleNext = () => {
    // Move to next question
    if (currentQuestionIndex < questionsWithShuffledOptions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      // Check if we have wrong questions to retry
      if (wrongQuestions.length > 0 && !completedQuestions.has(wrongQuestions[0].id)) {
        // Move wrong questions to main queue with shuffled options
        const retryQuestions = wrongQuestions.map(q => {
          if (q.type === 'multiple-choice' && q.options) {
            return {
              ...q,
              shuffledOptions: shuffleOptions(q.options)
            };
          }
          return q;
        });

        // Add retry questions to the pool and reset
        questionsWithShuffledOptions.push(...retryQuestions);
        setWrongQuestions([]);
        setCurrentQuestionIndex(questionsWithShuffledOptions.length - retryQuestions.length);
        setSelectedAnswer('');
        setIsAnswered(false);
        setIsCorrect(false);
      } else {
        // All questions answered correctly
        const lessonId = `${bookId}-lesson-${lessonNumber}`;
        completeLesson(lessonId, 'books');
        setShowResults(true);
      }
    }
  };

  if (showResults) {
    const totalXP = totalCorrect * 10; // Simplified XP calculation

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900">
            <Trophy className="text-green-600 dark:text-green-400" size={64} />
          </div>

          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Lesson Complete!
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            You've mastered all questions in this lesson!
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-4 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Questions</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {originalLessonQuestions.length}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-4 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">XP Earned</p>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                +{totalXP}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate(`/book-study/${bookId}`)}
              className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Back to {book.name}
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Practice Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => navigate(`/book-study/${bookId}`)}
          className="flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-4"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to {book.name}
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="text-3xl mr-3">{book.characterIcon}</span>
              {book.name} - Lesson {lessonNumber}
            </h1>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {answeredCount} / {totalQuestions} answered
            </span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {wrongQuestions.length > 0 && (
            <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
              {wrongQuestions.length} question{wrongQuestions.length !== 1 ? 's' : ''} to retry
            </p>
          )}
        </div>
      </div>

      {/* Question Card */}
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        isAnswered={isAnswered}
        isCorrect={isCorrect}
        onAnswerSelect={handleAnswerSelect}
        shuffledOptions={'shuffledOptions' in currentQuestion ? currentQuestion.shuffledOptions : undefined}
      />

      {/* Answer Feedback */}
      {isAnswered && (
        <div
          className={`mt-6 p-6 rounded-xl ${
            isCorrect
              ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
              : 'bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-500'
          } animate-slide-up`}
        >
          <div className="flex items-start space-x-4">
            {isCorrect ? (
              <Star className="text-green-600 flex-shrink-0" size={32} />
            ) : (
              <Star className="text-orange-600 flex-shrink-0" size={32} />
            )}
            <div className="flex-1">
              <h3
                className={`text-xl font-bold mb-2 ${
                  isCorrect ? 'text-green-800 dark:text-green-200' : 'text-orange-800 dark:text-orange-200'
                }`}
              >
                {isCorrect ? 'Correct!' : 'Not quite - Let\'s try again later!'}
              </h3>
              {currentQuestion.explanation && (
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {currentQuestion.explanation}
                </p>
              )}
              {currentQuestion.verse && (
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: {currentQuestion.verse}
                </p>
              )}
              {isCorrect && (
                <p className="text-green-700 dark:text-green-300 font-semibold mt-2">
                  +{currentQuestion.xpReward} XP
                </p>
              )}
              {!isCorrect && (
                <p className="text-orange-700 dark:text-orange-300 font-semibold mt-2">
                  Don't worry! This question will come back later so you can master it.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        {!isAnswered ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${
              selectedAnswer
                ? 'bg-primary-600 text-white hover:bg-primary-700 transform hover:scale-105'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
