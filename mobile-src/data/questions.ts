import { Question } from '../types';

export const questions: Question[] = [
  // Names & People Questions
  {
    id: 'names-001',
    type: 'multiple-choice',
    category: 'names',
    subcategory: 'Old Testament',
    question: "Who were Daniel's three friends in Babylon?",
    options: [
      'Shadrach, Meshach, and Abednego',
      'Peter, James, and John',
      'Aaron, Hur, and Joshua',
      'Cain, Abel, and Seth'
    ],
    correctAnswer: 'Shadrach, Meshach, and Abednego',
    explanation: 'Daniel had three friends who refused to bow to the golden statue: Shadrach, Meshach, and Abednego.',
    verse: 'Daniel 3:12',
    difficulty: 2,
    xpReward: 10
  },
  {
    id: 'names-002',
    type: 'multiple-choice',
    category: 'names',
    subcategory: 'Old Testament',
    question: 'Who was the father of Moses?',
    options: ['Amram', 'Aaron', 'Levi', 'Joseph'],
    correctAnswer: 'Amram',
    explanation: 'Moses\' father was Amram, and his mother was Jochebed, both from the tribe of Levi.',
    verse: 'Exodus 6:20',
    difficulty: 3,
    xpReward: 15
  },
  {
    id: 'names-003',
    type: 'multiple-choice',
    category: 'names',
    subcategory: 'New Testament',
    question: 'Who were the first disciples Jesus called?',
    options: [
      'Peter and Andrew',
      'James and John',
      'Matthew and Thomas',
      'Philip and Bartholomew'
    ],
    correctAnswer: 'Peter and Andrew',
    explanation: 'Jesus first called Simon Peter and his brother Andrew, who were fishermen.',
    verse: 'Matthew 4:18-19',
    difficulty: 2,
    xpReward: 10
  },
  {
    id: 'names-004',
    type: 'multiple-choice',
    category: 'names',
    subcategory: 'Old Testament',
    question: 'Who was the mother of Samuel?',
    options: ['Hannah', 'Rachel', 'Sarah', 'Rebekah'],
    correctAnswer: 'Hannah',
    explanation: 'Hannah prayed earnestly for a son and dedicated Samuel to the Lord\'s service.',
    verse: '1 Samuel 1:20',
    difficulty: 2,
    xpReward: 10
  },
  {
    id: 'names-005',
    type: 'multiple-choice',
    category: 'names',
    subcategory: 'Old Testament',
    question: 'Who was King David\'s best friend?',
    options: ['Jonathan', 'Absalom', 'Solomon', 'Nathan'],
    correctAnswer: 'Jonathan',
    explanation: 'Jonathan, King Saul\'s son, made a covenant of friendship with David.',
    verse: '1 Samuel 18:1-3',
    difficulty: 2,
    xpReward: 10
  },
  {
    id: 'names-006',
    type: 'multiple-choice',
    category: 'names',
    subcategory: 'Old Testament',
    question: 'Who were the sons of Adam and Eve?',
    options: [
      'Cain, Abel, and Seth',
      'Jacob and Esau',
      'Isaac and Ishmael',
      'Ephraim and Manasseh'
    ],
    correctAnswer: 'Cain, Abel, and Seth',
    explanation: 'Adam and Eve had three sons mentioned by name: Cain, Abel, and Seth.',
    verse: 'Genesis 4:1-2, 25',
    difficulty: 1,
    xpReward: 5
  },

  // Themes Questions
  {
    id: 'themes-001',
    type: 'multiple-choice',
    category: 'themes',
    subcategory: 'Love',
    question: 'Which verse is known as the "Love Chapter"?',
    options: [
      '1 Corinthians 13',
      'John 3:16',
      'Romans 8',
      'Psalm 23'
    ],
    correctAnswer: '1 Corinthians 13',
    explanation: '1 Corinthians 13 is famous for its beautiful description of love.',
    verse: '1 Corinthians 13:4-7',
    difficulty: 2,
    xpReward: 10
  },
  {
    id: 'themes-002',
    type: 'true-false',
    category: 'themes',
    subcategory: 'Faith',
    question: 'Faith is described as "the substance of things hoped for, the evidence of things not seen" in Hebrews 11:1.',
    correctAnswer: 'true',
    explanation: 'This is the famous definition of faith found in Hebrews 11:1.',
    verse: 'Hebrews 11:1',
    difficulty: 2,
    xpReward: 10
  },
  {
    id: 'themes-003',
    type: 'multiple-choice',
    category: 'themes',
    subcategory: 'Salvation',
    question: 'According to John 3:16, God loved the world so much that He gave what?',
    options: [
      'His only begotten Son',
      'The Ten Commandments',
      'The Promised Land',
      'Eternal wisdom'
    ],
    correctAnswer: 'His only begotten Son',
    explanation: 'John 3:16 is perhaps the most famous verse about God\'s love and salvation.',
    verse: 'John 3:16',
    difficulty: 1,
    xpReward: 5
  },
  {
    id: 'themes-004',
    type: 'multiple-choice',
    category: 'themes',
    subcategory: 'Prayer',
    question: 'What did Jesus teach His disciples when they asked Him to teach them to pray?',
    options: [
      'The Lord\'s Prayer',
      'The Twenty-Third Psalm',
      'The Beatitudes',
      'The Great Commission'
    ],
    correctAnswer: 'The Lord\'s Prayer',
    explanation: 'Jesus taught the disciples the Lord\'s Prayer as a model for how to pray.',
    verse: 'Matthew 6:9-13',
    difficulty: 1,
    xpReward: 5
  },

  // Books of the Bible Questions
  {
    id: 'books-001',
    type: 'multiple-choice',
    category: 'books',
    subcategory: 'Old Testament',
    question: 'Which is the longest book in the Bible by number of chapters?',
    options: ['Psalms', 'Genesis', 'Isaiah', 'Jeremiah'],
    correctAnswer: 'Psalms',
    explanation: 'Psalms has 150 chapters, making it the longest book in the Bible.',
    difficulty: 2,
    xpReward: 10
  },
  {
    id: 'books-002',
    type: 'multiple-choice',
    category: 'books',
    subcategory: 'New Testament',
    question: 'Which Gospel was written by a doctor?',
    options: ['Luke', 'Matthew', 'Mark', 'John'],
    correctAnswer: 'Luke',
    explanation: 'Luke, "the beloved physician," wrote the Gospel of Luke and the Book of Acts.',
    verse: 'Colossians 4:14',
    difficulty: 3,
    xpReward: 15
  },
  {
    id: 'books-003',
    type: 'multiple-choice',
    category: 'books',
    subcategory: 'Old Testament',
    question: 'Which book comes after Exodus?',
    options: ['Leviticus', 'Numbers', 'Deuteronomy', 'Genesis'],
    correctAnswer: 'Leviticus',
    explanation: 'The order is Genesis, Exodus, Leviticus, Numbers, Deuteronomy.',
    difficulty: 2,
    xpReward: 10
  },
  {
    id: 'books-004',
    type: 'multiple-choice',
    category: 'books',
    subcategory: 'New Testament',
    question: 'How many books did Paul write in the New Testament?',
    options: ['13', '10', '14', '12'],
    correctAnswer: '13',
    explanation: 'Paul wrote 13 letters: Romans through Philemon (Hebrews\' authorship is debated).',
    difficulty: 3,
    xpReward: 15
  },

  // Timeline Questions
  {
    id: 'timeline-001',
    type: 'multiple-choice',
    category: 'timeline',
    subcategory: 'Creation',
    question: 'On which day did God create humans?',
    options: ['Day 6', 'Day 5', 'Day 7', 'Day 1'],
    correctAnswer: 'Day 6',
    explanation: 'God created humans on the sixth day of creation.',
    verse: 'Genesis 1:26-31',
    difficulty: 1,
    xpReward: 5
  },
  {
    id: 'timeline-002',
    type: 'order',
    category: 'timeline',
    subcategory: 'Patriarchs',
    question: 'Put these patriarchs in chronological order:',
    options: ['Abraham', 'Isaac', 'Jacob', 'Joseph'],
    correctAnswer: ['Abraham', 'Isaac', 'Jacob', 'Joseph'],
    explanation: 'Abraham was the father of Isaac, Isaac was the father of Jacob, and Jacob was the father of Joseph.',
    difficulty: 2,
    xpReward: 10
  },
  {
    id: 'timeline-003',
    type: 'multiple-choice',
    category: 'timeline',
    subcategory: 'Exodus',
    question: 'Who led the Israelites out of Egypt?',
    options: ['Moses', 'Joshua', 'Aaron', 'Abraham'],
    correctAnswer: 'Moses',
    explanation: 'God called Moses to lead the Israelites out of slavery in Egypt.',
    verse: 'Exodus 3:10',
    difficulty: 1,
    xpReward: 5
  },
  {
    id: 'timeline-004',
    type: 'multiple-choice',
    category: 'timeline',
    subcategory: 'Kings',
    question: 'Who was the first king of Israel?',
    options: ['Saul', 'David', 'Solomon', 'Samuel'],
    correctAnswer: 'Saul',
    explanation: 'Saul was anointed as the first king of Israel by the prophet Samuel.',
    verse: '1 Samuel 10:1',
    difficulty: 2,
    xpReward: 10
  },

  // Memory Verses Questions
  {
    id: 'verses-001',
    type: 'fill-blank',
    category: 'verses',
    subcategory: 'Famous Verses',
    question: 'Fill in the blank: "For God so loved the _____, that he gave his only begotten Son..."',
    correctAnswer: 'world',
    verse: 'John 3:16',
    difficulty: 1,
    xpReward: 5
  },
  {
    id: 'verses-002',
    type: 'fill-blank',
    category: 'verses',
    subcategory: 'Famous Verses',
    question: 'Fill in the blank: "I can do all things through _____ who strengthens me."',
    correctAnswer: 'Christ',
    verse: 'Philippians 4:13',
    difficulty: 1,
    xpReward: 5
  },
  {
    id: 'verses-003',
    type: 'multiple-choice',
    category: 'verses',
    subcategory: 'Psalms',
    question: 'Complete: "The Lord is my shepherd; I shall not..."',
    options: ['want', 'fear', 'worry', 'stumble'],
    correctAnswer: 'want',
    verse: 'Psalm 23:1',
    difficulty: 1,
    xpReward: 5
  },

  // Parables & Stories Questions
  {
    id: 'parables-001',
    type: 'multiple-choice',
    category: 'parables',
    subcategory: 'Jesus\' Parables',
    question: 'In the Parable of the Prodigal Son, what did the father do when his son returned?',
    options: [
      'Threw a celebration feast',
      'Punished him severely',
      'Made him work as a servant',
      'Ignored him'
    ],
    correctAnswer: 'Threw a celebration feast',
    explanation: 'The father celebrated with joy when his lost son returned home.',
    verse: 'Luke 15:22-24',
    difficulty: 2,
    xpReward: 10
  },
  {
    id: 'parables-002',
    type: 'multiple-choice',
    category: 'parables',
    subcategory: 'Jesus\' Parables',
    question: 'In the Parable of the Good Samaritan, who stopped to help the injured man?',
    options: [
      'A Samaritan',
      'A priest',
      'A Levite',
      'A Roman soldier'
    ],
    correctAnswer: 'A Samaritan',
    explanation: 'The Samaritan showed compassion and helped the injured man when others passed by.',
    verse: 'Luke 10:33-34',
    difficulty: 2,
    xpReward: 10
  },
  {
    id: 'parables-003',
    type: 'multiple-choice',
    category: 'parables',
    subcategory: 'Old Testament Stories',
    question: 'What did David use to defeat Goliath?',
    options: [
      'A sling and a stone',
      'A sword',
      'A spear',
      'A bow and arrow'
    ],
    correctAnswer: 'A sling and a stone',
    explanation: 'David trusted in God and defeated the giant Goliath with just a sling and a stone.',
    verse: '1 Samuel 17:49-50',
    difficulty: 1,
    xpReward: 5
  },
  {
    id: 'parables-004',
    type: 'multiple-choice',
    category: 'parables',
    subcategory: 'Old Testament Stories',
    question: 'How many days and nights was Jonah in the belly of the great fish?',
    options: ['3', '7', '40', '1'],
    correctAnswer: '3',
    explanation: 'Jonah spent three days and three nights inside the great fish.',
    verse: 'Jonah 1:17',
    difficulty: 2,
    xpReward: 10
  },
  {
    id: 'parables-005',
    type: 'multiple-choice',
    category: 'parables',
    subcategory: 'Jesus\' Parables',
    question: 'In the Parable of the Sower, what happened to the seed that fell on good soil?',
    options: [
      'It produced a crop 100, 60, or 30 times what was sown',
      'It was eaten by birds',
      'It withered in the sun',
      'It was choked by thorns'
    ],
    correctAnswer: 'It produced a crop 100, 60, or 30 times what was sown',
    explanation: 'The seed on good soil represents those who hear and understand God\'s word.',
    verse: 'Matthew 13:23',
    difficulty: 2,
    xpReward: 10
  }
];
