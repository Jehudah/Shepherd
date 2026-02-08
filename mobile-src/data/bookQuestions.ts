import { Question } from '../types';

// Questions organized by Bible book
export const bookQuestions: Record<string, Question[]> = {
  // Daniel Book Questions
  daniel: [
    {
      id: 'daniel-001',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Daniel',
      question: 'What were the names of Daniel\'s three friends?',
      options: ['Shadrach, Meshach, and Abednego', 'Peter, James, and John', 'Aaron, Hur, and Joshua', 'Cain, Abel, and Seth'],
      correctAnswer: 'Shadrach, Meshach, and Abednego',
      explanation: 'Daniel had three friends who refused to bow to the golden statue.',
      verse: 'Daniel 3:12',
      difficulty: 2,
      xpReward: 10
    },
    {
      id: 'daniel-002',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Daniel',
      question: 'What did King Nebuchadnezzar dream about in Daniel 2?',
      options: ['A great statue made of different metals', 'Seven fat and seven lean cows', 'A tree reaching to heaven', 'Four beasts'],
      correctAnswer: 'A great statue made of different metals',
      explanation: 'The statue represented different kingdoms, with feet of iron and clay.',
      verse: 'Daniel 2:31-35',
      difficulty: 3,
      xpReward: 15
    },
    {
      id: 'daniel-003',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Daniel',
      question: 'What happened when Daniel\'s friends refused to bow to the golden image?',
      options: ['They were thrown into a fiery furnace', 'They were thrown into a lion\'s den', 'They were imprisoned', 'They were exiled'],
      correctAnswer: 'They were thrown into a fiery furnace',
      explanation: 'God protected them, and they were not harmed by the fire.',
      verse: 'Daniel 3:20-27',
      difficulty: 2,
      xpReward: 10
    },
    {
      id: 'daniel-004',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Daniel',
      question: 'Why was Daniel thrown into the lion\'s den?',
      options: ['He prayed to God despite a decree forbidding it', 'He interpreted a dream incorrectly', 'He refused to eat the king\'s food', 'He criticized the king'],
      correctAnswer: 'He prayed to God despite a decree forbidding it',
      explanation: 'Daniel continued to pray three times a day as was his custom.',
      verse: 'Daniel 6:10-13',
      difficulty: 2,
      xpReward: 10
    },
    {
      id: 'daniel-005',
      type: 'true-false',
      category: 'books',
      subcategory: 'Daniel',
      question: 'Daniel was able to interpret King Nebuchadnezzar\'s dreams because of his own wisdom.',
      correctAnswer: 'false',
      explanation: 'Daniel gave credit to God for revealing the interpretation of dreams.',
      verse: 'Daniel 2:27-28',
      difficulty: 2,
      xpReward: 10
    },
    {
      id: 'daniel-006',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Daniel',
      question: 'What did Daniel and his friends eat instead of the king\'s food?',
      options: ['Vegetables and water', 'Bread and wine', 'Meat and milk', 'Fruits and honey'],
      correctAnswer: 'Vegetables and water',
      explanation: 'They ate vegetables and drank water to avoid defiling themselves.',
      verse: 'Daniel 1:12',
      difficulty: 2,
      xpReward: 10
    }
  ],

  // Genesis Book Questions
  genesis: [
    {
      id: 'genesis-001',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Genesis',
      question: 'On which day did God create humans?',
      options: ['Day 6', 'Day 5', 'Day 7', 'Day 1'],
      correctAnswer: 'Day 6',
      explanation: 'God created humans on the sixth day of creation.',
      verse: 'Genesis 1:26-31',
      difficulty: 1,
      xpReward: 5
    },
    {
      id: 'genesis-002',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Genesis',
      question: 'Who were the first two sons of Adam and Eve?',
      options: ['Cain and Abel', 'Jacob and Esau', 'Isaac and Ishmael', 'Ephraim and Manasseh'],
      correctAnswer: 'Cain and Abel',
      explanation: 'Cain and Abel were the first two sons mentioned in Genesis.',
      verse: 'Genesis 4:1-2',
      difficulty: 1,
      xpReward: 5
    },
    {
      id: 'genesis-003',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Genesis',
      question: 'How many days and nights did it rain during Noah\'s flood?',
      options: ['40', '7', '100', '150'],
      correctAnswer: '40',
      explanation: 'It rained for 40 days and 40 nights during the great flood.',
      verse: 'Genesis 7:12',
      difficulty: 2,
      xpReward: 10
    },
    {
      id: 'genesis-004',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Genesis',
      question: 'What was the sign of God\'s covenant with Noah?',
      options: ['A rainbow', 'A dove', 'An altar', 'A flood'],
      correctAnswer: 'A rainbow',
      explanation: 'God set the rainbow in the clouds as a sign of His covenant.',
      verse: 'Genesis 9:13-17',
      difficulty: 1,
      xpReward: 5
    },
    {
      id: 'genesis-005',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Genesis',
      question: 'Who was Abraham\'s wife?',
      options: ['Sarah', 'Rachel', 'Rebekah', 'Leah'],
      correctAnswer: 'Sarah',
      explanation: 'Sarah was Abraham\'s wife, and she gave birth to Isaac in her old age.',
      verse: 'Genesis 17:15',
      difficulty: 1,
      xpReward: 5
    },
    {
      id: 'genesis-006',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Genesis',
      question: 'What did Joseph\'s brothers do to him?',
      options: ['Sold him into slavery', 'Killed him', 'Made him a ruler', 'Sent him away to study'],
      correctAnswer: 'Sold him into slavery',
      explanation: 'Joseph\'s jealous brothers sold him to traders going to Egypt.',
      verse: 'Genesis 37:28',
      difficulty: 2,
      xpReward: 10
    }
  ],

  // Matthew Book Questions
  matthew: [
    {
      id: 'matthew-001',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Matthew',
      question: 'What is the first teaching in the Sermon on the Mount?',
      options: ['Blessed are the poor in spirit', 'Love your enemies', 'Ask and it will be given', 'Do not judge'],
      correctAnswer: 'Blessed are the poor in spirit',
      explanation: 'The Beatitudes begin with "Blessed are the poor in spirit, for theirs is the kingdom of heaven."',
      verse: 'Matthew 5:3',
      difficulty: 2,
      xpReward: 10
    },
    {
      id: 'matthew-002',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Matthew',
      question: 'What did Jesus teach His disciples to pray?',
      options: ['The Lord\'s Prayer', 'The Twenty-Third Psalm', 'The Beatitudes', 'The Great Commission'],
      correctAnswer: 'The Lord\'s Prayer',
      explanation: 'Jesus taught the disciples the Lord\'s Prayer as a model for how to pray.',
      verse: 'Matthew 6:9-13',
      difficulty: 1,
      xpReward: 5
    },
    {
      id: 'matthew-003',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Matthew',
      question: 'How many wise men visited Jesus?',
      options: ['The Bible doesn\'t say', 'Three', 'Twelve', 'Seven'],
      correctAnswer: 'The Bible doesn\'t say',
      explanation: 'The Bible mentions three gifts but doesn\'t specify the number of wise men.',
      verse: 'Matthew 2:11',
      difficulty: 3,
      xpReward: 15
    },
    {
      id: 'matthew-004',
      type: 'multiple-choice',
      category: 'books',
      subcategory: 'Matthew',
      question: 'What were Jesus\' final words in the Gospel of Matthew?',
      options: ['Go and make disciples of all nations', 'It is finished', 'Father, into your hands I commit my spirit', 'Feed my sheep'],
      correctAnswer: 'Go and make disciples of all nations',
      explanation: 'Matthew ends with the Great Commission to make disciples of all nations.',
      verse: 'Matthew 28:19-20',
      difficulty: 2,
      xpReward: 10
    }
  ],

  // Add more books here...
  john: [],
  psalms: [],
  proverbs: [],
  romans: [],
  exodus: []
};

// Helper function to get all questions for a book
export function getBookQuestions(bookId: string): Question[] {
  return bookQuestions[bookId] || [];
}

// Helper to check if a book has questions
export function hasBookQuestions(bookId: string): boolean {
  return bookQuestions[bookId] && bookQuestions[bookId].length > 0;
}
