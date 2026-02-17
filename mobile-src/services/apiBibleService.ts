/**
 * API.Bible Service
 * Official Bible API with 1600+ translations
 * Free tier: 500 requests/day
 * Get API key at: https://scripture.api.bible/signup
 */

const API_BASE_URL = 'https://api.scripture.api.bible/v1';
const API_KEY = process.env.EXPO_PUBLIC_BIBLE_API_KEY || '';

if (!API_KEY) {
  console.warn('EXPO_PUBLIC_BIBLE_API_KEY not configured. Bible verses will not load.');
}

export interface BibleTranslation {
  id: string;
  name: string;
  nameLocal: string;
  abbreviation: string;
  abbreviationLocal: string;
  description: string;
  language: {
    id: string;
    name: string;
    nameLocal: string;
    script: string;
    scriptDirection: 'LTR' | 'RTL';
  };
}

export interface BibleVerse {
  id: string;
  bibleId: string;
  bookId: string;
  chapterNumber: number;
  verseNumber: number;
  content: string; // HTML content
  reference: string;
  verseCount: number;
  copyright: string;
}

export interface BiblePassage {
  id: string;
  bibleId: string;
  bookId: string;
  chapterNumber: number;
  content: string; // HTML content
  reference: string;
  verseCount: number;
  copyright: string;
  verses: BibleVerse[];
}

/**
 * Popular English translations available on API.Bible
 */
export const POPULAR_TRANSLATIONS: BibleTranslation[] = [
  {
    id: 'de4e12af7f28f599-02', // KJV
    name: 'King James Version',
    nameLocal: 'King James Version',
    abbreviation: 'KJV',
    abbreviationLocal: 'KJV',
    description: 'Classic English translation from 1611',
    language: {
      id: 'eng',
      name: 'English',
      nameLocal: 'English',
      script: 'Latin',
      scriptDirection: 'LTR',
    },
  },
  {
    id: '592420522e16049f-01', // ASV (American Standard Version, similar to NKJV)
    name: 'American Standard Version',
    nameLocal: 'American Standard Version',
    abbreviation: 'ASV',
    abbreviationLocal: 'ASV',
    description: 'Modern English translation based on King James',
    language: {
      id: 'eng',
      name: 'English',
      nameLocal: 'English',
      script: 'Latin',
      scriptDirection: 'LTR',
    },
  },
  {
    id: '9879dbb7cfe39e4d-01', // WEB (World English Bible)
    name: 'World English Bible',
    nameLocal: 'World English Bible',
    abbreviation: 'WEB',
    abbreviationLocal: 'WEB',
    description: 'Modern English public domain translation',
    language: {
      id: 'eng',
      name: 'English',
      nameLocal: 'English',
      script: 'Latin',
      scriptDirection: 'LTR',
    },
  },
];

/**
 * Default translation (KJV)
 */
export const DEFAULT_TRANSLATION_ID = 'de4e12af7f28f599-02'; // KJV

/**
 * Fetch available Bible translations
 * Results are cached for performance
 */
let translationsCache: BibleTranslation[] | null = null;

export async function fetchTranslations(): Promise<BibleTranslation[]> {
  if (translationsCache) {
    return translationsCache;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/bibles`, {
      headers: {
        'api-key': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch translations: ${response.statusText}`);
    }

    const data = await response.json();
    translationsCache = data.data || [];
    return translationsCache;
  } catch (error) {
    console.error('Error fetching translations:', error);
    // Return popular translations as fallback
    return POPULAR_TRANSLATIONS;
  }
}

/**
 * Parse verse reference to API.Bible format
 * Input: "John 3:16" or "Romans 8:28-30"
 * Output: { bookId: "JHN", chapter: "3", verses: "16" }
 */
export function parseVerseReference(reference: string): {
  bookId: string;
  chapter: string;
  verses: string;
} {
  // Book abbreviations mapping
  const bookMap: Record<string, string> = {
    genesis: 'GEN',
    exodus: 'EXO',
    leviticus: 'LEV',
    numbers: 'NUM',
    deuteronomy: 'DEU',
    joshua: 'JOS',
    judges: 'JDG',
    ruth: 'RUT',
    '1 samuel': '1SA',
    '2 samuel': '2SA',
    '1 kings': '1KI',
    '2 kings': '2KI',
    '1 chronicles': '1CH',
    '2 chronicles': '2CH',
    ezra: 'EZR',
    nehemiah: 'NEH',
    esther: 'EST',
    job: 'JOB',
    psalm: 'PSA',
    psalms: 'PSA',
    proverbs: 'PRO',
    ecclesiastes: 'ECC',
    'song of solomon': 'SNG',
    isaiah: 'ISA',
    jeremiah: 'JER',
    lamentations: 'LAM',
    ezekiel: 'EZK',
    daniel: 'DAN',
    hosea: 'HOS',
    joel: 'JOL',
    amos: 'AMO',
    obadiah: 'OBA',
    jonah: 'JON',
    micah: 'MIC',
    nahum: 'NAM',
    habakkuk: 'HAB',
    zephaniah: 'ZEP',
    haggai: 'HAG',
    zechariah: 'ZEC',
    malachi: 'MAL',
    matthew: 'MAT',
    mark: 'MRK',
    luke: 'LUK',
    john: 'JHN',
    acts: 'ACT',
    romans: 'ROM',
    '1 corinthians': '1CO',
    '2 corinthians': '2CO',
    galatians: 'GAL',
    ephesians: 'EPH',
    philippians: 'PHP',
    colossians: 'COL',
    '1 thessalonians': '1TH',
    '2 thessalonians': '2TH',
    '1 timothy': '1TI',
    '2 timothy': '2TI',
    titus: 'TIT',
    philemon: 'PHM',
    hebrews: 'HEB',
    james: 'JAS',
    '1 peter': '1PE',
    '2 peter': '2PE',
    '1 john': '1JN',
    '2 john': '2JN',
    '3 john': '3JN',
    jude: 'JUD',
    revelation: 'REV',
  };

  // Parse reference like "John 3:16" or "Romans 8:28-30"
  const match = reference.match(/^([\d\s]*[a-z\s]+)\s+(\d+):(\d+(?:-\d+)?)$/i);

  if (!match) {
    throw new Error(`Invalid verse reference format: ${reference}`);
  }

  const bookName = match[1].trim().toLowerCase();
  const chapter = match[2];
  const verses = match[3];

  const bookId = bookMap[bookName];

  if (!bookId) {
    throw new Error(`Unknown book: ${bookName}`);
  }

  return { bookId, chapter, verses };
}

/**
 * Fetch a Bible verse or passage
 * @param reference - e.g., "John 3:16" or "Romans 8:28-30"
 * @param bibleId - Bible translation ID (default: KJV)
 */
export async function fetchVerse(
  reference: string,
  bibleId: string = DEFAULT_TRANSLATION_ID
): Promise<BiblePassage> {
  try {
    const { bookId, chapter, verses } = parseVerseReference(reference);
    const verseId = `${bookId}.${chapter}.${verses}`;

    const response = await fetch(
      `${API_BASE_URL}/bibles/${bibleId}/verses/${verseId}?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=false&include-verse-spans=false`,
      {
        headers: {
          'api-key': API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch verse: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching verse:', error);
    throw error;
  }
}

/**
 * Strip HTML tags from API.Bible content
 */
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

/**
 * Parse verse content into words for memorization
 */
export function parseVerseIntoWords(verseContent: string): string[] {
  const cleanText = stripHtml(verseContent);
  // Split into words, preserving punctuation
  return cleanText.split(/(\s+)/).filter((word) => word.trim().length > 0);
}

/**
 * Generate enhanced progressive levels for verse memorization
 * More gradual progression: 10 levels instead of 5
 * Levels 1-3: 10-30% hidden
 * Levels 4-6: 40-60% hidden
 * Levels 7-9: 70-90% hidden
 * Level 10: 100% hidden
 */
export function generateEnhancedProgressiveLevels(
  words: string[],
  levelCount: number = 10
): Array<{
  level: number;
  hiddenIndices: number[];
  hidePercentage: number;
  description: string;
  exerciseType: 'fill-blanks' | 'word-placement' | 'full-recall';
}> {
  const totalWords = words.length;
  const levels: Array<{
    level: number;
    hiddenIndices: number[];
    hidePercentage: number;
    description: string;
    exerciseType: 'fill-blanks' | 'word-placement' | 'full-recall';
  }> = [];

  for (let level = 1; level <= levelCount; level++) {
    // Calculate percentage of words to hide (more gradual)
    const hidePercentage = (level / levelCount);
    const wordsToHide = Math.floor(totalWords * hidePercentage);

    // Generate evenly distributed indices to hide
    const hiddenIndices: number[] = [];
    const step = totalWords / wordsToHide;

    for (let i = 0; i < wordsToHide; i++) {
      const index = Math.floor(i * step + Math.random() * (step / 2));
      if (index < totalWords && !hiddenIndices.includes(index)) {
        hiddenIndices.push(index);
      }
    }

    hiddenIndices.sort((a, b) => a - b);

    // Determine exercise type based on level
    let exerciseType: 'fill-blanks' | 'word-placement' | 'full-recall';
    if (level <= 6) {
      exerciseType = 'fill-blanks'; // Tap to reveal
    } else if (level <= 9) {
      exerciseType = 'word-placement'; // Drag words to correct position
    } else {
      exerciseType = 'full-recall'; // Type the entire verse
    }

    // Level descriptions
    const descriptions = [
      'Just getting started!',
      'Building memory...',
      'Making progress!',
      'You\'re doing great!',
      'Halfway there!',
      'Keep going strong!',
      'Almost memorized!',
      'Place the words!',
      'Final challenge!',
      'Recall it all!',
    ];

    levels.push({
      level,
      hiddenIndices,
      hidePercentage: Math.round(hidePercentage * 100),
      description: descriptions[level - 1] || `Level ${level}`,
      exerciseType,
    });
  }

  return levels;
}
