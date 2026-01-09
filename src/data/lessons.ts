import { Lesson } from '../types';
import { questions } from './questions';

export const lessons: Lesson[] = [
  // Names & People Lessons
  {
    id: 'lesson-names-01',
    title: 'Daniel & Friends',
    description: 'Learn about Daniel and his three friends in Babylon',
    category: 'names',
    subcategory: 'Old Testament',
    icon: '👥',
    questions: questions.filter(q =>
      q.category === 'names' && (q.id === 'names-001' || q.subcategory === 'Old Testament')
    ).slice(0, 5),
    requiredXP: 0,
    isLocked: false,
    order: 1
  },
  {
    id: 'lesson-names-02',
    title: 'The Disciples',
    description: 'Discover the twelve disciples of Jesus',
    category: 'names',
    subcategory: 'New Testament',
    icon: '🎣',
    questions: questions.filter(q =>
      q.category === 'names' && q.subcategory === 'New Testament'
    ),
    requiredXP: 50,
    isLocked: false,
    order: 2
  },
  {
    id: 'lesson-names-03',
    title: 'Women of Faith',
    description: 'Study the faithful women in the Bible',
    category: 'names',
    subcategory: 'Women',
    icon: '👩',
    questions: questions.filter(q =>
      q.category === 'names' && (q.id === 'names-004')
    ),
    requiredXP: 100,
    isLocked: false,
    order: 3
  },

  // Themes Lessons
  {
    id: 'lesson-themes-01',
    title: 'Love & Compassion',
    description: 'Explore Bible verses about God\'s love',
    category: 'themes',
    subcategory: 'Love',
    icon: '❤️',
    questions: questions.filter(q =>
      q.category === 'themes' && (q.subcategory === 'Love' || q.subcategory === 'Salvation')
    ),
    requiredXP: 0,
    isLocked: false,
    order: 1
  },
  {
    id: 'lesson-themes-02',
    title: 'Faith & Trust',
    description: 'Learn about walking by faith',
    category: 'themes',
    subcategory: 'Faith',
    icon: '🙏',
    questions: questions.filter(q =>
      q.category === 'themes' && q.subcategory === 'Faith'
    ),
    requiredXP: 50,
    isLocked: false,
    order: 2
  },
  {
    id: 'lesson-themes-03',
    title: 'Prayer & Communication',
    description: 'Understand how to pray effectively',
    category: 'themes',
    subcategory: 'Prayer',
    icon: '🕊️',
    questions: questions.filter(q =>
      q.category === 'themes' && q.subcategory === 'Prayer'
    ),
    requiredXP: 100,
    isLocked: false,
    order: 3
  },

  // Books of the Bible Lessons
  {
    id: 'lesson-books-01',
    title: 'The Gospels',
    description: 'Explore Matthew, Mark, Luke, and John',
    category: 'books',
    subcategory: 'New Testament',
    icon: '📖',
    questions: questions.filter(q =>
      q.category === 'books' && q.subcategory === 'New Testament'
    ),
    requiredXP: 0,
    isLocked: false,
    order: 1
  },
  {
    id: 'lesson-books-02',
    title: 'The Pentateuch',
    description: 'Study the first five books of Moses',
    category: 'books',
    subcategory: 'Old Testament',
    icon: '📜',
    questions: questions.filter(q =>
      q.category === 'books' && q.subcategory === 'Old Testament'
    ),
    requiredXP: 50,
    isLocked: false,
    order: 2
  },

  // Timeline Lessons
  {
    id: 'lesson-timeline-01',
    title: 'Creation to Abraham',
    description: 'Journey through early biblical history',
    category: 'timeline',
    subcategory: 'Early History',
    icon: '🌍',
    questions: questions.filter(q =>
      q.category === 'timeline' && (q.subcategory === 'Creation' || q.subcategory === 'Patriarchs')
    ),
    requiredXP: 0,
    isLocked: false,
    order: 1
  },
  {
    id: 'lesson-timeline-02',
    title: 'Exodus & Wilderness',
    description: 'Follow Israel\'s journey from Egypt',
    category: 'timeline',
    subcategory: 'Exodus',
    icon: '⛰️',
    questions: questions.filter(q =>
      q.category === 'timeline' && q.subcategory === 'Exodus'
    ),
    requiredXP: 50,
    isLocked: false,
    order: 2
  },
  {
    id: 'lesson-timeline-03',
    title: 'The Kings of Israel',
    description: 'Learn about Israel\'s monarchy',
    category: 'timeline',
    subcategory: 'Kings',
    icon: '👑',
    questions: questions.filter(q =>
      q.category === 'timeline' && q.subcategory === 'Kings'
    ),
    requiredXP: 100,
    isLocked: false,
    order: 3
  },

  // Memory Verses Lessons
  {
    id: 'lesson-verses-01',
    title: 'Famous Verses',
    description: 'Memorize the most well-known Bible verses',
    category: 'verses',
    subcategory: 'Famous Verses',
    icon: '⭐',
    questions: questions.filter(q =>
      q.category === 'verses' && q.subcategory === 'Famous Verses'
    ),
    requiredXP: 0,
    isLocked: false,
    order: 1
  },
  {
    id: 'lesson-verses-02',
    title: 'Psalms of Comfort',
    description: 'Learn comforting verses from Psalms',
    category: 'verses',
    subcategory: 'Psalms',
    icon: '🎵',
    questions: questions.filter(q =>
      q.category === 'verses' && q.subcategory === 'Psalms'
    ),
    requiredXP: 50,
    isLocked: false,
    order: 2
  },

  // Parables & Stories Lessons
  {
    id: 'lesson-parables-01',
    title: 'Jesus\' Parables',
    description: 'Understand the parables Jesus taught',
    category: 'parables',
    subcategory: 'Jesus\' Parables',
    icon: '🌾',
    questions: questions.filter(q =>
      q.category === 'parables' && q.subcategory === 'Jesus\' Parables'
    ),
    requiredXP: 0,
    isLocked: false,
    order: 1
  },
  {
    id: 'lesson-parables-02',
    title: 'Old Testament Stories',
    description: 'Explore famous Old Testament narratives',
    category: 'parables',
    subcategory: 'Old Testament Stories',
    icon: '📚',
    questions: questions.filter(q =>
      q.category === 'parables' && q.subcategory === 'Old Testament Stories'
    ),
    requiredXP: 50,
    isLocked: false,
    order: 2
  }
];
