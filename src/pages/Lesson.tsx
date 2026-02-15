import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Trophy, Star } from 'lucide-react';
import { useStore } from '../store/useStore';
import { lessons } from '../data/lessons';
import QuestionCard from '../components/QuestionCard';

export default function Lesson() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { updateXP, completeLesson, updateStreak, startSession, endSession } = useStore();

  const lesson = lessons.find(l => l.id === lessonId);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (lesson) {
      startSession(lesson.id);
      updateStreak();
    }
  }, [lesson, startSession, updateStreak]);

  if (!lesson) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Lesson not found
        </h2>
        <button
          onClick={() => navigate('/learn')}
          className="text-primary-600 hover:underline"
        >
          Return to lessons
        </button>
      </div>
    );
  }

  const currentQuestion = lesson.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / lesson.questions.length) * 100;

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
      setCorrectAnswers(prev => prev + 1);
      updateXP(currentQuestion.xpReward || 10);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < lesson.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      const totalXP = lesson.questions.reduce((sum, q) => {
        return sum + (correctAnswers >= lesson.questions.indexOf(q) ? (q.xpReward || 10) : 0);
      }, 0);

      endSession(lesson.questions.length, correctAnswers, totalXP);

      if (correctAnswers >= lesson.questions.length * 0.7) {
        completeLesson(lesson.id, lesson.category);
      }

      setShowResults(true);
    }
  };

  if (showResults) {
    const percentage = Math.round((correctAnswers / lesson.questions.length) * 100);
    const passed = percentage >= 70;
    const totalXP = lesson.questions.reduce((sum, q, index) => {
      return sum + (index < correctAnswers ? (q.xpReward || 10) : 0);
    }, 0);

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl text-center">
          <div className={`w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center ${
            passed ? 'bg-green-100 dark:bg-green-900' : 'bg-orange-100 dark:bg-orange-900'
          }`}>
            {passed ? (
              <Trophy className="text-green-600 dark:text-green-400" size={64} />
            ) : (
              <Star className="text-orange-600 dark:text-orange-400" size={64} />
            )}
          </div>

          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            {passed ? 'Lesson Complete!' : 'Good Try!'}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {passed
              ? 'You\'ve mastered this lesson!'
              : 'You need 70% to complete this lesson. Keep practicing!'}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-4 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Score</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {percentage}%
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-4 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Correct</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {correctAnswers}/{lesson.questions.length}
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
              onClick={() => {
                setCurrentQuestionIndex(0);
                setCorrectAnswers(0);
                setShowResults(false);
                setSelectedAnswer('');
                setIsAnswered(false);
              }}
              className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate(`/learn/${lesson.category}`)}
              className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Back to Lessons
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
          onClick={() => navigate(`/learn/${lesson.category}`)}
          className="flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-4"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to lessons
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="text-3xl mr-3">{lesson.icon}</span>
              {lesson.title}
            </h1>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {currentQuestionIndex + 1} / {lesson.questions.length}
            </span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        isAnswered={isAnswered}
        isCorrect={isCorrect}
        onAnswerSelect={handleAnswerSelect}
      />

      {/* Answer Feedback */}
      {isAnswered && (
        <div
          className={`mt-6 p-6 rounded-xl ${
            isCorrect
              ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
              : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
          } animate-slide-up`}
        >
          <div className="flex items-start space-x-4">
            {isCorrect ? (
              <CheckCircle className="text-green-600 flex-shrink-0" size={32} />
            ) : (
              <XCircle className="text-red-600 flex-shrink-0" size={32} />
            )}
            <div className="flex-1">
              <h3
                className={`text-xl font-bold mb-2 ${
                  isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
                }`}
              >
                {isCorrect ? 'Correct!' : 'Not quite right'}
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
            {currentQuestionIndex < lesson.questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}
      </div>
    </div>
  );
}
