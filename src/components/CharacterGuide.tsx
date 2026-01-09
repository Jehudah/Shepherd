import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

interface CharacterGuideProps {
  character: 'jesus' | 'sheep';
  message: string;
  position?: 'top' | 'bottom' | 'middle';
  mood?: 'encouraging' | 'celebrating' | 'teaching' | 'questioning';
}

const characterEmojis = {
  jesus: {
    encouraging: '✝️',
    celebrating: '🙌',
    teaching: '📖',
    questioning: '🤔'
  },
  sheep: {
    encouraging: '🐑',
    celebrating: '🎉',
    teaching: '📚',
    questioning: '🐏'
  }
};

const characterNames = {
  jesus: 'Jesus, Your Shepherd',
  sheep: 'Woolly, Your Study Buddy'
};

export default function CharacterGuide({
  character,
  message,
  position = 'bottom',
  mood = 'encouraging'
}: CharacterGuideProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const positionClasses = {
    top: 'top-4',
    middle: 'top-1/2 -translate-y-1/2',
    bottom: 'bottom-20'
  };

  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    },
    exit: { scale: 0, opacity: 0 }
  };

  return (
    <motion.div
      className={`fixed left-4 right-4 z-40 ${positionClasses[position]}`}
      {...animations}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-primary-300 dark:border-primary-700 p-4 max-w-md mx-auto">
        <div className="flex items-start space-x-3">
          {/* Character Avatar */}
          <motion.div
            className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-3xl shadow-lg"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {characterEmojis[character][mood]}
          </motion.div>

          {/* Message */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-primary-700 dark:text-primary-300 text-sm">
                {characterNames[character]}
              </span>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {message}
            </p>
          </div>
        </div>

        {/* Speech bubble arrow */}
        <div className="absolute -bottom-2 left-20 w-4 h-4 bg-white dark:bg-gray-800 border-r-2 border-b-2 border-primary-300 dark:border-primary-700 transform rotate-45" />
      </div>
    </motion.div>
  );
}

// Preset messages for different contexts
export const guidanceMessages = {
  welcome: {
    jesus: "Welcome, my child! I'm here to guide you on your journey through Scripture. Let's learn together!",
    sheep: "Baa-ha! Welcome to the flock! Ready to learn some amazing Bible truths together?"
  },
  newLesson: {
    jesus: "You're about to start a new lesson. Remember, I am with you always, even as you study my Word.",
    sheep: "Time for a new adventure! Don't worry, we'll tackle this lesson one question at a time!"
  },
  correct: {
    jesus: "Well done, good and faithful servant! You're growing in knowledge and wisdom.",
    sheep: "Yay! You got it right! Your Bible knowledge is growing woolderfully!"
  },
  incorrect: {
    jesus: "That's okay - even my disciples needed time to learn. Let's understand this better together.",
    sheep: "Oops! Don't feel baaa-d! Even the best shepherds had to learn. Let's try again!"
  },
  encouragement: {
    jesus: "I know the plans I have for you - plans to prosper you and give you hope. Keep studying!",
    sheep: "You're doing great! Remember, every expert was once a beginner. Keep going!"
  },
  streakMilestone: {
    jesus: "Your faithfulness honors me! A 7-day streak shows true dedication to knowing my Word.",
    sheep: "Wow! Your streak is un-baa-lievable! You're really committed to learning!"
  },
  levelUp: {
    jesus: "You've grown so much! Your knowledge of Scripture is blossoming beautifully.",
    sheep: "Level up! You're becoming a real Bible scholar! Time to celebrate!"
  }
};

// Component for floating animated sheep
export function FloatingSheep() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 text-6xl z-30 pointer-events-none"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0, -5, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      🐑
    </motion.div>
  );
}
