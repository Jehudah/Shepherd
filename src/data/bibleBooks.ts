export interface BibleBook {
  id: string;
  name: string;
  testament: 'Old Testament' | 'New Testament';
  category: string;
  author: string;
  writtenDate: string;
  chapters: number;
  keyTheme: string;
  description: string;
  keyVerses: Array<{
    chapter: number;
    verse: string;
    text: string;
  }>;
  outline: string[];
  funFacts: string[];
  characterIcon: string;
  color: string;
}

export const bibleBooks: BibleBook[] = [
  {
    id: 'genesis',
    name: 'Genesis',
    testament: 'Old Testament',
    category: 'Law (Torah)',
    author: 'Moses',
    writtenDate: '1445-1405 BC',
    chapters: 50,
    keyTheme: 'Beginnings',
    description: 'Genesis means "beginning" and covers creation, the fall, the flood, and the patriarchs (Abraham, Isaac, Jacob, Joseph).',
    keyVerses: [
      { chapter: 1, verse: '1', text: 'In the beginning God created the heavens and the earth.' },
      { chapter: 1, verse: '27', text: 'So God created mankind in his own image.' },
      { chapter: 12, verse: '2-3', text: 'I will make you into a great nation... and all peoples on earth will be blessed through you.' }
    ],
    outline: [
      'Creation (1-2)',
      'The Fall and Its Consequences (3-5)',
      'The Flood (6-9)',
      'Tower of Babel (10-11)',
      'Abraham (12-25)',
      'Isaac and Jacob (26-36)',
      'Joseph in Egypt (37-50)'
    ],
    funFacts: [
      'Genesis covers more time than any other book - about 2,300 years!',
      'The name appears 32 times in the New Testament',
      'Contains the first promise of Jesus (Genesis 3:15)',
      'Joseph\'s story takes up almost 1/4 of the book'
    ],
    characterIcon: '📜',
    color: '#3498DB'
  },
  {
    id: 'exodus',
    name: 'Exodus',
    testament: 'Old Testament',
    category: 'Law (Torah)',
    author: 'Moses',
    writtenDate: '1445-1405 BC',
    chapters: 40,
    keyTheme: 'Deliverance and Law',
    description: 'The story of Israel\'s escape from Egypt, receiving the Ten Commandments, and building the Tabernacle.',
    keyVerses: [
      { chapter: 3, verse: '14', text: 'God said to Moses, "I AM WHO I AM."' },
      { chapter: 20, verse: '2-3', text: 'I am the Lord your God... You shall have no other gods before me.' },
      { chapter: 33, verse: '14', text: 'My Presence will go with you, and I will give you rest.' }
    ],
    outline: [
      'Israel in Egypt (1-12)',
      'The Exodus and Red Sea Crossing (13-15)',
      'Journey to Sinai (16-18)',
      'The Law Given (19-24)',
      'Tabernacle Instructions (25-40)'
    ],
    funFacts: [
      'Contains the Ten Commandments',
      'Ten plagues demonstrated God\'s power over Egyptian gods',
      'The tabernacle design is described in detail',
      'Moses encounters the burning bush'
    ],
    characterIcon: '🔥',
    color: '#E74C3C'
  },
  {
    id: 'psalms',
    name: 'Psalms',
    testament: 'Old Testament',
    category: 'Poetry & Wisdom',
    author: 'David, Asaph, Moses, Solomon, and others',
    writtenDate: '1440-586 BC',
    chapters: 150,
    keyTheme: 'Worship and Prayer',
    description: 'A collection of songs and prayers expressing worship, lament, thanksgiving, and praise to God.',
    keyVerses: [
      { chapter: 23, verse: '1', text: 'The Lord is my shepherd, I lack nothing.' },
      { chapter: 119, verse: '105', text: 'Your word is a lamp for my feet, a light on my path.' },
      { chapter: 46, verse: '1', text: 'God is our refuge and strength, an ever-present help in trouble.' }
    ],
    outline: [
      'Book I: Psalms 1-41 (Mostly David)',
      'Book II: Psalms 42-72 (David and Korah)',
      'Book III: Psalms 73-89 (Asaph)',
      'Book IV: Psalms 90-106 (Anonymous)',
      'Book V: Psalms 107-150 (Praise Psalms)'
    ],
    funFacts: [
      'Longest book in the Bible',
      'Psalm 117 is the shortest chapter in the Bible',
      'David wrote about 73 psalms',
      'Jesus quoted Psalms more than any other OT book'
    ],
    characterIcon: '🎵',
    color: '#9B59B6'
  },
  {
    id: 'matthew',
    name: 'Matthew',
    testament: 'New Testament',
    category: 'Gospels',
    author: 'Matthew (Levi)',
    writtenDate: '50-70 AD',
    chapters: 28,
    keyTheme: 'Jesus as King',
    description: 'Written to Jews, Matthew presents Jesus as the promised Messiah and King of the Jews.',
    keyVerses: [
      { chapter: 5, verse: '3-10', text: 'The Beatitudes - Blessed are the poor in spirit...' },
      { chapter: 28, verse: '19-20', text: 'Therefore go and make disciples of all nations...' },
      { chapter: 6, verse: '33', text: 'But seek first his kingdom and his righteousness...' }
    ],
    outline: [
      'Birth and Early Life (1-2)',
      'Beginning of Ministry (3-4)',
      'Sermon on the Mount (5-7)',
      'Miracles and Teaching (8-20)',
      'Final Week and Crucifixion (21-27)',
      'Resurrection (28)'
    ],
    funFacts: [
      'Contains the most quotes from the Old Testament',
      'Includes five major teaching sections',
      'Written by a former tax collector',
      'The word "kingdom" appears 50+ times'
    ],
    characterIcon: '👑',
    color: '#F39C12'
  },
  {
    id: 'john',
    name: 'John',
    testament: 'New Testament',
    category: 'Gospels',
    author: 'John (the beloved disciple)',
    writtenDate: '85-90 AD',
    chapters: 21,
    keyTheme: 'Jesus as Son of God',
    description: 'Written so readers may believe Jesus is the Christ and have eternal life.',
    keyVerses: [
      { chapter: 3, verse: '16', text: 'For God so loved the world that he gave his one and only Son...' },
      { chapter: 14, verse: '6', text: 'I am the way and the truth and the life.' },
      { chapter: 1, verse: '14', text: 'The Word became flesh and made his dwelling among us.' }
    ],
    outline: [
      'Prologue: The Word (1:1-18)',
      'Signs and Teachings (1:19-12:50)',
      'Upper Room Discourse (13-17)',
      'Passion Week (18-19)',
      'Resurrection (20-21)'
    ],
    funFacts: [
      'Contains seven "I AM" statements of Jesus',
      'John was Jesus\' closest friend',
      'Written last of the four Gospels',
      'Only Gospel to record the wedding at Cana'
    ],
    characterIcon: '❤️',
    color: '#E91E63'
  },
  {
    id: 'acts',
    name: 'Acts',
    testament: 'New Testament',
    category: 'History',
    author: 'Luke',
    writtenDate: '62-70 AD',
    chapters: 28,
    keyTheme: 'The Holy Spirit and the Church',
    description: 'The birth and growth of the early church through the power of the Holy Spirit.',
    keyVerses: [
      { chapter: 1, verse: '8', text: 'But you will receive power when the Holy Spirit comes on you...' },
      { chapter: 2, verse: '38', text: 'Repent and be baptized, every one of you, in the name of Jesus Christ...' },
      { chapter: 4, verse: '12', text: 'Salvation is found in no one else, for there is no other name...' }
    ],
    outline: [
      'Church in Jerusalem (1-7)',
      'Church in Judea and Samaria (8-12)',
      'Paul\'s First Journey (13-14)',
      'Jerusalem Council (15)',
      'Paul\'s Second Journey (16-18)',
      'Paul\'s Third Journey (19-21)',
      'Paul\'s Arrest and Trials (22-28)'
    ],
    funFacts: [
      'Often called "Acts of the Apostles"',
      'Sequel to the Gospel of Luke',
      'Covers about 30 years of church history',
      'Peter and Paul are the main characters'
    ],
    characterIcon: '🕊️',
    color: '#00BCD4'
  },
  {
    id: 'romans',
    name: 'Romans',
    testament: 'New Testament',
    category: 'Paul\'s Letters',
    author: 'Paul',
    writtenDate: '57 AD',
    chapters: 16,
    keyTheme: 'Righteousness by Faith',
    description: 'Paul\'s systematic presentation of the gospel and Christian doctrine.',
    keyVerses: [
      { chapter: 1, verse: '16', text: 'For I am not ashamed of the gospel, because it is the power of God...' },
      { chapter: 3, verse: '23', text: 'For all have sinned and fall short of the glory of God.' },
      { chapter: 8, verse: '28', text: 'And we know that in all things God works for the good...' }
    ],
    outline: [
      'Introduction (1:1-17)',
      'Sin and Judgment (1:18-3:20)',
      'Justification by Faith (3:21-5:21)',
      'Sanctification (6-8)',
      'God\'s Plan for Israel (9-11)',
      'Practical Christian Living (12-16)'
    ],
    funFacts: [
      'Most theological of Paul\'s letters',
      'Martin Luther called it "the most important piece in the NT"',
      'Written to a church Paul hadn\'t visited yet',
      'Contains the "Romans Road" to salvation'
    ],
    characterIcon: '⚖️',
    color: '#8E44AD'
  },
  {
    id: 'proverbs',
    name: 'Proverbs',
    testament: 'Old Testament',
    category: 'Poetry & Wisdom',
    author: 'Solomon, Agur, Lemuel',
    writtenDate: '970-686 BC',
    chapters: 31,
    keyTheme: 'Practical Wisdom',
    description: 'Wise sayings for daily living, covering work, relationships, money, speech, and character.',
    keyVerses: [
      { chapter: 3, verse: '5-6', text: 'Trust in the Lord with all your heart...' },
      { chapter: 9, verse: '10', text: 'The fear of the Lord is the beginning of wisdom...' },
      { chapter: 22, verse: '6', text: 'Start children off on the way they should go...' }
    ],
    outline: [
      'Proverbs of Solomon (1-9)',
      'More Proverbs of Solomon (10-22)',
      'Sayings of the Wise (22-24)',
      'More Proverbs of Solomon (25-29)',
      'Sayings of Agur (30)',
      'Sayings of King Lemuel (31)'
    ],
    funFacts: [
      'Solomon wrote over 3,000 proverbs',
      '31 chapters - one for each day of the month',
      'Wisdom is personified as a woman',
      'Covers topics like work, money, and relationships'
    ],
    characterIcon: '💎',
    color: '#FFD700'
  },
  {
    id: 'ephesians',
    name: 'Ephesians',
    testament: 'New Testament',
    category: 'Paul\'s Letters',
    author: 'Paul',
    writtenDate: '60-62 AD',
    chapters: 6,
    keyTheme: 'The Church as Christ\'s Body',
    description: 'The believer\'s position in Christ and practical Christian living.',
    keyVerses: [
      { chapter: 2, verse: '8-9', text: 'For it is by grace you have been saved, through faith...' },
      { chapter: 6, verse: '12', text: 'For our struggle is not against flesh and blood...' },
      { chapter: 4, verse: '32', text: 'Be kind and compassionate to one another...' }
    ],
    outline: [
      'Our Position in Christ (1-3)',
      'Our Walk in Christ (4-6:9)',
      'Spiritual Warfare (6:10-24)'
    ],
    funFacts: [
      'Written from prison',
      'Contains the Armor of God passage',
      'Emphasizes unity in the church',
      'Only 6 chapters but packed with doctrine'
    ],
    characterIcon: '🛡️',
    color: '#4CAF50'
  },
  {
    id: 'revelation',
    name: 'Revelation',
    testament: 'New Testament',
    category: 'Prophecy',
    author: 'John',
    writtenDate: '95 AD',
    chapters: 22,
    keyTheme: 'Jesus\' Return and Final Victory',
    description: 'Apocalyptic visions of the end times, Christ\'s return, and the new heaven and earth.',
    keyVerses: [
      { chapter: 1, verse: '8', text: 'I am the Alpha and the Omega, says the Lord God...' },
      { chapter: 21, verse: '4', text: 'He will wipe every tear from their eyes...' },
      { chapter: 3, verse: '20', text: 'Here I am! I stand at the door and knock...' }
    ],
    outline: [
      'Letters to Seven Churches (1-3)',
      'Throne Room Vision (4-5)',
      'Seven Seals, Trumpets, Bowls (6-16)',
      'Babylon\'s Fall (17-18)',
      'Christ\'s Return (19)',
      'Final Judgment (20)',
      'New Heaven and Earth (21-22)'
    ],
    funFacts: [
      'Only prophetic book in NT',
      'Written on the island of Patmos',
      'Number 7 appears over 50 times',
      'Highly symbolic and apocalyptic'
    ],
    characterIcon: '🌟',
    color: '#FF5722'
  }
];

// Additional books can be added following this pattern
// This starter set includes key books from each Testament category
