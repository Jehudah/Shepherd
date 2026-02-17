/**
 * Bible API Service
 * Uses bible-api.com for fetching verse text in English
 */

export interface BibleVerse {
  reference: string;
  verses: Array<{
    book_id: string;
    book_name: string;
    chapter: number;
    verse: number;
    text: string;
  }>;
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
}

/**
 * Fetch a Bible verse or passage
 * @param reference - e.g., "John 3:16" or "Romans 8:1-4"
 * @param translation - Bible translation (default: "kjv" - King James Version)
 * API: https://github.com/wldeh/bible-api
 * Supports: kjv, web, oeb-us, clementine
 */
export async function fetchBibleVerse(
  reference: string,
  translation: string = 'kjv'
): Promise<BibleVerse> {
  try {
    // Format the reference for the API (replace spaces with %20)
    const formattedRef = encodeURIComponent(reference);
    const url = `https://bible-api.com/${formattedRef}?translation=${translation}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch verse: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Bible verse:', error);
    throw error;
  }
}

/**
 * Parse verse text into words
 */
export function parseVerseIntoWords(verseText: string): string[] {
  // Remove verse numbers like [1], [2], etc.
  const cleanText = verseText.replace(/\[\d+\]/g, '').trim();

  // Split into words, preserving punctuation
  return cleanText.split(/(\s+)/).filter(word => word.trim().length > 0);
}

/**
 * Generate progressive lessons for verse memorization
 * Each lesson has multiple exercises with varied word selection
 * @param words - Array of words from the verse
 * @param lessonCount - Number of difficulty lessons (default: 5)
 * @param exercisesPerLesson - Number of exercises per lesson (default: 4)
 */
export function generateProgressiveLevels(
  words: string[],
  lessonCount: number = 5,
  exercisesPerLesson: number = 4
): Array<{
  lesson: number;
  exercise: number;
  exerciseType: 'fill-blanks' | 'word-placement';
  hiddenIndices: number[];
  hidePercentage: number;
  description: string;
}> {
  const totalWords = words.length;
  const allExercises: Array<{
    lesson: number;
    exercise: number;
    exerciseType: 'fill-blanks' | 'word-placement';
    hiddenIndices: number[];
    hidePercentage: number;
    description: string;
  }> = [];

  const lessonDescriptions = [
    'Just getting started',
    'Building memory',
    'Making good progress',
    'You\'re doing great',
    'Final challenge'
  ];

  for (let lesson = 1; lesson <= lessonCount; lesson++) {
    // Calculate percentage of words to hide
    // Lesson 1: 20%, Lesson 2: 40%, Lesson 3: 60%, Lesson 4: 80%, Lesson 5: 100%
    const hidePercentage = (lesson / lessonCount);
    const wordsToHide = Math.floor(totalWords * hidePercentage);

    const baseDescription = lessonDescriptions[lesson - 1] || `Lesson ${lesson}`;

    // Generate multiple exercises for this lesson
    for (let exercise = 1; exercise <= exercisesPerLesson; exercise++) {
      // Randomly select different words for each exercise
      const hiddenIndices: number[] = [];
      const availableIndices = Array.from({ length: totalWords }, (_, i) => i);

      // Shuffle and pick random indices
      for (let i = 0; i < wordsToHide; i++) {
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        hiddenIndices.push(availableIndices[randomIndex]);
        availableIndices.splice(randomIndex, 1);
      }

      hiddenIndices.sort((a, b) => a - b);

      // Alternate between fill-blanks and word-placement
      const exerciseType: 'fill-blanks' | 'word-placement' =
        exercise % 2 === 1 ? 'fill-blanks' : 'word-placement';

      const exerciseDescription = exerciseType === 'fill-blanks'
        ? `${baseDescription} - Reveal words`
        : `${baseDescription} - Drag words`;

      allExercises.push({
        lesson,
        exercise,
        exerciseType,
        hiddenIndices,
        hidePercentage: Math.round(hidePercentage * 100),
        description: exerciseDescription
      });
    }
  }

  return allExercises;
}

/**
 * Available Bible translations
 * API: https://github.com/wldeh/bible-api
 * Only supports: kjv, web, oeb-us, clementine
 */
export const BIBLE_TRANSLATIONS = [
  { id: 'kjv', name: 'King James Version', language: 'English' },
  { id: 'web', name: 'World English Bible', language: 'English' },
  { id: 'oeb-us', name: 'Open English Bible (US)', language: 'English' },
  { id: 'clementine', name: 'Clementine Vulgate', language: 'Latin' },
] as const;

/**
 * Popular memory verses organized by category
 */
export const MEMORY_VERSE_CATEGORIES = [
  {
    id: 'salvation',
    name: 'Salvation',
    description: 'Verses about being saved',
    icon: 'heart',
    color: '#EF4444',
    verses: [
      'John 3:16',
      'Romans 3:23',
      'Romans 6:23',
      'Ephesians 2:8-9',
      'Romans 5:8',
      'Romans 10:9-10',
      '2 Corinthians 5:17',
      'John 1:12',
      'Acts 16:31',
      'Titus 3:5'
    ]
  },
  {
    id: 'love',
    name: 'Love',
    description: 'God\'s love and our love',
    icon: 'heart',
    color: '#F59E0B',
    verses: [
      '1 Corinthians 13:4-7',
      '1 John 4:7-8',
      'John 13:34-35',
      'Romans 8:38-39',
      'Matthew 22:37-39',
      '1 John 3:16',
      'Jeremiah 31:3',
      'Psalm 136:1'
    ]
  },
  {
    id: 'faith',
    name: 'Faith',
    description: 'Trust and believe',
    icon: 'anchor',
    color: '#3B82F6',
    verses: [
      'Hebrews 11:1',
      'Hebrews 11:6',
      'Mark 11:22-24',
      'James 1:6',
      'Romans 10:17',
      '2 Corinthians 5:7',
      'Ephesians 2:8',
      'Proverbs 3:5-6'
    ]
  },
  {
    id: 'peace',
    name: 'Peace',
    description: 'Rest in God\'s peace',
    icon: 'sun',
    color: '#10B981',
    verses: [
      'Philippians 4:6-7',
      'John 14:27',
      'Romans 5:1',
      'Isaiah 26:3',
      'Colossians 3:15',
      'Matthew 11:28-30',
      'Psalm 4:8',
      'John 16:33'
    ]
  },
  {
    id: 'strength',
    name: 'Strength',
    description: 'Power in weakness',
    icon: 'shield',
    color: '#8B5CF6',
    verses: [
      'Philippians 4:13',
      'Isaiah 40:31',
      '2 Corinthians 12:9',
      'Psalm 46:1',
      'Joshua 1:9',
      'Proverbs 18:10',
      'Ephesians 6:10',
      'Psalm 27:1'
    ]
  }
];
