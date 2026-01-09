import { Question } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string;
  isAnswered: boolean;
  isCorrect: boolean;
  onAnswerSelect: (answer: string) => void;
  shuffledOptions?: string[]; // New prop for shuffled options
}

export default function QuestionCard({
  question,
  selectedAnswer,
  isAnswered,
  isCorrect,
  onAnswerSelect,
  shuffledOptions
}: QuestionCardProps) {
  // Use shuffled options if provided, otherwise use original
  const optionsToDisplay = shuffledOptions || question.options || [];

  const renderMultipleChoice = () => (
    <div className="space-y-3">
      {optionsToDisplay.map((option, index) => {
        const isSelected = selectedAnswer === option;
        const isCorrectAnswer = question.correctAnswer === option;
        const showCorrect = isAnswered && isCorrectAnswer;
        const showIncorrect = isAnswered && isSelected && !isCorrect;

        return (
          <button
            key={index}
            onClick={() => onAnswerSelect(option)}
            disabled={isAnswered}
            className={`w-full p-4 rounded-xl text-left font-medium transition-all transform hover:scale-102 ${
              showCorrect
                ? 'bg-green-100 dark:bg-green-900 border-2 border-green-500 text-green-800 dark:text-green-200'
                : showIncorrect
                ? 'bg-red-100 dark:bg-red-900 border-2 border-red-500 text-red-800 dark:text-red-200'
                : isSelected
                ? 'bg-primary-100 dark:bg-primary-900 border-2 border-primary-500 text-primary-800 dark:text-primary-200'
                : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
            } ${isAnswered ? 'cursor-default' : 'cursor-pointer'}`}
          >
            <div className="flex items-center justify-between">
              <span className="flex-1">{option}</span>
              {showCorrect && <CheckCircle className="text-green-600 ml-2" size={24} />}
              {showIncorrect && <XCircle className="text-red-600 ml-2" size={24} />}
            </div>
          </button>
        );
      })}
    </div>
  );

  const renderTrueFalse = () => (
    <div className="space-y-3">
      {['true', 'false'].map(option => {
        const isSelected = selectedAnswer === option;
        const isCorrectAnswer = question.correctAnswer === option;
        const showCorrect = isAnswered && isCorrectAnswer;
        const showIncorrect = isAnswered && isSelected && !isCorrect;

        return (
          <button
            key={option}
            onClick={() => onAnswerSelect(option)}
            disabled={isAnswered}
            className={`w-full p-6 rounded-xl text-left font-bold text-xl transition-all transform hover:scale-102 ${
              showCorrect
                ? 'bg-green-100 dark:bg-green-900 border-2 border-green-500 text-green-800 dark:text-green-200'
                : showIncorrect
                ? 'bg-red-100 dark:bg-red-900 border-2 border-red-500 text-red-800 dark:text-red-200'
                : isSelected
                ? 'bg-primary-100 dark:bg-primary-900 border-2 border-primary-500 text-primary-800 dark:text-primary-200'
                : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
            } ${isAnswered ? 'cursor-default' : 'cursor-pointer'}`}
          >
            <div className="flex items-center justify-between">
              <span className="capitalize">{option}</span>
              {showCorrect && <CheckCircle className="text-green-600 ml-2" size={28} />}
              {showIncorrect && <XCircle className="text-red-600 ml-2" size={28} />}
            </div>
          </button>
        );
      })}
    </div>
  );

  const renderFillBlank = () => (
    <div className="space-y-4">
      <input
        type="text"
        value={selectedAnswer}
        onChange={(e) => onAnswerSelect(e.target.value)}
        disabled={isAnswered}
        placeholder="Type your answer here..."
        className={`w-full p-4 rounded-xl border-2 text-lg font-medium transition-all ${
          isAnswered
            ? isCorrect
              ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
              : 'bg-red-50 dark:bg-red-900/20 border-red-500'
            : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:outline-none'
        }`}
      />
      {isAnswered && !isCorrect && (
        <p className="text-gray-700 dark:text-gray-300">
          Correct answer: <span className="font-bold text-green-600">{question.correctAnswer}</span>
        </p>
      )}
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
      {/* Difficulty Badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-6 rounded-full ${
                i < question.difficulty
                  ? 'bg-gradient-to-t from-orange-500 to-yellow-400'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
          {question.type.replace('-', ' ')}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        {question.question}
      </h2>

      {/* Answer Options */}
      {question.type === 'multiple-choice' && renderMultipleChoice()}
      {question.type === 'true-false' && renderTrueFalse()}
      {question.type === 'fill-blank' && renderFillBlank()}

      {/* Verse Reference */}
      {question.verse && !isAnswered && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <span className="font-semibold">Reference:</span> {question.verse}
          </p>
        </div>
      )}
    </div>
  );
}
