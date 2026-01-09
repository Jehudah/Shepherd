import { Theme } from '../types';

export const themes: Theme[] = [
  {
    id: 'theme-love',
    name: 'Love',
    description: 'Explore God\'s love and how we should love others',
    color: '#FF6B6B',
    verses: [
      { book: 'John', chapter: 3, verse: '16', text: 'For God so loved the world that he gave his one and only Son...' },
      { book: '1 Corinthians', chapter: 13, verse: '4-7', text: 'Love is patient, love is kind...' },
      { book: '1 John', chapter: 4, verse: '8', text: 'God is love.' },
      { book: 'Romans', chapter: 8, verse: '38-39', text: 'Nothing can separate us from God\'s love...' }
    ]
  },
  {
    id: 'theme-faith',
    name: 'Faith',
    description: 'Learn about trusting God and walking by faith',
    color: '#4ECDC4',
    verses: [
      { book: 'Hebrews', chapter: 11, verse: '1', text: 'Faith is confidence in what we hope for...' },
      { book: 'Proverbs', chapter: 3, verse: '5-6', text: 'Trust in the Lord with all your heart...' },
      { book: 'Romans', chapter: 10, verse: '17', text: 'Faith comes by hearing the word of God.' },
      { book: 'James', chapter: 2, verse: '17', text: 'Faith without works is dead.' }
    ]
  },
  {
    id: 'theme-hope',
    name: 'Hope',
    description: 'Find hope and encouragement in God\'s promises',
    color: '#95E1D3',
    verses: [
      { book: 'Jeremiah', chapter: 29, verse: '11', text: 'For I know the plans I have for you...' },
      { book: 'Romans', chapter: 15, verse: '13', text: 'May the God of hope fill you with joy...' },
      { book: 'Psalm', chapter: 42, verse: '11', text: 'Put your hope in God.' },
      { book: 'Lamentations', chapter: 3, verse: '22-23', text: 'His mercies are new every morning.' }
    ]
  },
  {
    id: 'theme-peace',
    name: 'Peace',
    description: 'Discover God\'s peace that surpasses understanding',
    color: '#A8E6CF',
    verses: [
      { book: 'John', chapter: 14, verse: '27', text: 'Peace I leave with you; my peace I give you...' },
      { book: 'Philippians', chapter: 4, verse: '6-7', text: 'Do not be anxious about anything...' },
      { book: 'Isaiah', chapter: 26, verse: '3', text: 'You will keep in perfect peace those whose minds are steadfast...' },
      { book: 'Romans', chapter: 5, verse: '1', text: 'We have peace with God through our Lord Jesus Christ.' }
    ]
  },
  {
    id: 'theme-wisdom',
    name: 'Wisdom',
    description: 'Seek godly wisdom and understanding',
    color: '#FFD93D',
    verses: [
      { book: 'James', chapter: 1, verse: '5', text: 'If any of you lacks wisdom, ask God...' },
      { book: 'Proverbs', chapter: 9, verse: '10', text: 'The fear of the Lord is the beginning of wisdom.' },
      { book: 'Proverbs', chapter: 2, verse: '6', text: 'The Lord gives wisdom.' },
      { book: 'Colossians', chapter: 3, verse: '16', text: 'Let the word of Christ dwell in you richly in all wisdom.' }
    ]
  },
  {
    id: 'theme-forgiveness',
    name: 'Forgiveness',
    description: 'Understand God\'s forgiveness and forgiving others',
    color: '#F38181',
    verses: [
      { book: '1 John', chapter: 1, verse: '9', text: 'If we confess our sins, he is faithful and just...' },
      { book: 'Ephesians', chapter: 4, verse: '32', text: 'Be kind and forgiving to one another...' },
      { book: 'Matthew', chapter: 6, verse: '14-15', text: 'If you forgive others, your Father will forgive you.' },
      { book: 'Colossians', chapter: 3, verse: '13', text: 'Forgive as the Lord forgave you.' }
    ]
  },
  {
    id: 'theme-strength',
    name: 'Strength',
    description: 'Find strength in the Lord during difficult times',
    color: '#6C5CE7',
    verses: [
      { book: 'Philippians', chapter: 4, verse: '13', text: 'I can do all things through Christ who strengthens me.' },
      { book: 'Isaiah', chapter: 40, verse: '31', text: 'Those who hope in the Lord will renew their strength...' },
      { book: 'Psalm', chapter: 46, verse: '1', text: 'God is our refuge and strength.' },
      { book: '2 Corinthians', chapter: 12, verse: '9', text: 'My grace is sufficient for you.' }
    ]
  },
  {
    id: 'theme-prayer',
    name: 'Prayer',
    description: 'Learn how to communicate with God through prayer',
    color: '#A29BFE',
    verses: [
      { book: 'Matthew', chapter: 6, verse: '9-13', text: 'This is how you should pray: Our Father...' },
      { book: '1 Thessalonians', chapter: 5, verse: '17', text: 'Pray continually.' },
      { book: 'Philippians', chapter: 4, verse: '6', text: 'In everything, by prayer and petition, present your requests to God.' },
      { book: 'James', chapter: 5, verse: '16', text: 'The prayer of a righteous person is powerful and effective.' }
    ]
  }
];
