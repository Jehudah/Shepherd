import { CharacterName } from '../components/Character';

/**
 * Maps lesson topics/categories to relevant biblical characters
 */

// Direct lesson ID to character mapping
export const lessonIdToCharacter: Record<string, CharacterName> = {
  // Prophets lessons
  'prophets-1': 'moses',        // Moses & The Burning Bush
  'prophets-2': 'elijah',       // Elijah & The Prophets of Baal
  'prophets-3': 'isaiah',       // Isaiah's Vision
  'prophets-4': 'sheep',        // Jeremiah (no image yet)
  'prophets-5': 'sheep',        // Daniel (no image yet)

  // Kings lessons
  'kings-1': 'king-saul',       // King Saul
  'kings-2': 'david',           // King David
  'kings-3': 'king-solomon',    // King Solomon
  'kings-4': 'king-hezekiah',   // King Hezekiah
  'kings-5': 'sheep',           // King Josiah (no image yet)

  // Apostles lessons
  'apostles-1': 'peter',        // Peter - The Rock
  'apostles-2': 'john',         // John - The Beloved
  'apostles-3': 'paul',         // Paul - The Apostle
  'apostles-4': 'sheep',        // The Twelve (generic)
  'apostles-5': 'sheep',        // Stephen (no image yet)

  // Women lessons
  'women-1': 'sheep',           // Ruth (no image yet)
  'women-2': 'sheep',           // Esther (no image yet)
  'women-3': 'sheep',           // Mary mother of Jesus (no image yet)
  'women-4': 'sheep',           // Deborah (no image yet)
  'women-5': 'sheep',           // Priscilla (no image yet)
};

export const topicToCharacter: Record<string, CharacterName> = {
  // Specific character names (checked in title)
  'moses': 'moses',
  'david': 'david',
  'paul': 'paul',
  'peter': 'peter',
  'john': 'john',
  'elijah': 'elijah',
  'isaiah': 'isaiah',
  'thomas': 'thomas',
  'matthew': 'matthew',
  'luke': 'luke',
  'james': 'james',
  'mary magdalene': 'mary-magdalene',
  'mary-magdalene': 'mary-magdalene',
  'solomon': 'king-solomon',
  'king solomon': 'king-solomon',
  'king-solomon': 'king-solomon',
  'saul': 'king-saul',
  'king saul': 'king-saul',
  'king-saul': 'king-saul',
  'hezekiah': 'king-hezekiah',
  'king hezekiah': 'king-hezekiah',
  'king-hezekiah': 'king-hezekiah',

  // Specific topic associations
  'exodus': 'moses',
  'gospel': 'jesus',
  'miracles': 'jesus',
  'parables': 'jesus',
  'sermon': 'jesus',
  'teachings': 'jesus',

  // Default fallback
  'default': 'sheep',
};

/**
 * Get the appropriate character for a lesson based on its title/category/subcategory
 */
export function getCharacterForLesson(
  lessonTitle: string,
  category?: string,
  subcategory?: string
): CharacterName {
  // First, check if we have a direct lesson ID mapping (most specific)
  if (lessonIdToCharacter[lessonTitle]) {
    return lessonIdToCharacter[lessonTitle];
  }

  // Then check the combined search text for character names or topics
  const searchText = `${lessonTitle} ${category} ${subcategory}`.toLowerCase();

  // Check each topic keyword
  for (const [topic, character] of Object.entries(topicToCharacter)) {
    if (searchText.includes(topic)) {
      return character;
    }
  }

  // Default to Wooly the sheep
  return 'sheep';
}

/**
 * Get character based on question context
 */
export function getCharacterForQuestion(questionText: string): CharacterName {
  const text = questionText.toLowerCase();

  // Check for character names in the question
  for (const [topic, character] of Object.entries(topicToCharacter)) {
    if (text.includes(topic)) {
      return character;
    }
  }

  // Default to Wooly
  return 'sheep';
}

/**
 * Get encouraging message from character
 */
export function getCharacterMessage(
  character: CharacterName,
  context: 'intro' | 'correct' | 'incorrect' | 'complete'
): string {
  const messages: Record<CharacterName, Record<typeof context, string>> = {
    'sheep': {
      intro: "Hi! I'm Wooly! Let's learn together! 🐑",
      correct: "Amazing! You got it right! 🎉",
      incorrect: "Not quite, but don't give up! 💪",
      complete: "Great job! I'm proud of you! ⭐",
    },
    'jesus': {
      intro: "Welcome, my child. Let us study the Scripture together.",
      correct: "Well done! You understand.",
      incorrect: "Try again. I believe in you.",
      complete: "You have listened well. Keep growing in knowledge.",
    },
    'moses': {
      intro: "Learn from God's commandments and His deliverance.",
      correct: "Excellent! You know God's laws well.",
      incorrect: "Study the commandments carefully once more.",
      complete: "You understand God's plan of deliverance!",
    },
    'david': {
      intro: "From shepherd to king - learn from my journey.",
      correct: "Brave answer! Just like against Goliath!",
      incorrect: "Even I made mistakes. Keep learning!",
      complete: "You have a heart after God, well done!",
    },
    'paul': {
      intro: "Let us study the message of Christ.",
      correct: "Excellent! You understand the teaching.",
      incorrect: "Keep persevering in your study, brother/sister.",
      complete: "You have fought the good fight in this lesson!",
    },
    'peter': {
      intro: "Learn from my time with the Lord.",
      correct: "Good! You believe and understand!",
      incorrect: "I denied Him three times, you get another chance!",
      complete: "Your faith has grown strong!",
    },
    'john': {
      intro: "Learn about love and the Word that became flesh.",
      correct: "Yes! You understand the message of love!",
      incorrect: "Keep seeking the truth, beloved.",
      complete: "You have walked in the light of truth!",
    },
    'elijah': {
      intro: "Learn from the prophet who called down fire from heaven.",
      correct: "Powerful! Like fire from heaven!",
      incorrect: "Don't lose heart, keep your faith strong!",
      complete: "You have learned the power of faith!",
    },
    'isaiah': {
      intro: "Learn from the prophet who saw the Lord's glory.",
      correct: "Excellent! You see clearly!",
      incorrect: "Look deeper into the prophecy.",
      complete: "You have understood the vision!",
    },
    'matthew': {
      intro: "Learn about the Kingdom of Heaven.",
      correct: "Well done, faithful learner!",
      incorrect: "Study the teachings more carefully.",
      complete: "You have grasped the Kingdom message!",
    },
    'luke': {
      intro: "Learn the careful account of our Lord's life.",
      correct: "Accurate! You've studied well!",
      incorrect: "Review the account once more.",
      complete: "You know the story of salvation!",
    },
    'james': {
      intro: "Learn about faith and works together.",
      correct: "Right! Faith with action!",
      incorrect: "Try again, don't just hear—do!",
      complete: "You understand practical faith!",
    },
    'thomas': {
      intro: "Learn to believe even without seeing.",
      correct: "Blessed are you who believe!",
      incorrect: "Don't doubt, have faith!",
      complete: "Your faith has grown beyond doubt!",
    },
    'mary-magdalene': {
      intro: "Learn from the first witness of the Resurrection.",
      correct: "Yes! You've seen the truth!",
      incorrect: "Look more carefully at the testimony.",
      complete: "You believe in the risen Lord!",
    },
    'king-solomon': {
      intro: "Learn wisdom from the wisest king.",
      correct: "Wise answer! Like Solomon himself!",
      incorrect: "Seek wisdom, ask for understanding.",
      complete: "You have gained wisdom today!",
    },
    'king-saul': {
      intro: "Learn from Israel's first king.",
      correct: "Good! You understand the lesson!",
      incorrect: "Study the mistakes to avoid them.",
      complete: "You've learned from this king's story!",
    },
    'king-hezekiah': {
      intro: "Learn about faithfulness and reform.",
      correct: "Excellent! You understand the reforms!",
      incorrect: "Study the story more carefully.",
      complete: "You've learned about faithful leadership!",
    },
  };

  // Default messages for other characters
  const defaultMessages = {
    intro: "Let's study this lesson together.",
    correct: "Well done!",
    incorrect: "Try again!",
    complete: "Lesson complete! Well done!",
  };

  return messages[character]?.[context] || defaultMessages[context];
}
