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
      options: ['Shadrach, Meshach, and Abednego', 'Hananiah, Azariah, and Mishael', 'Aaron, Hur, and Joshua', 'Ezra, Nehemiah, and Zerubbabel'],
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
      options: ['Day 6', 'Day 5', 'Day 7', 'Day 4'],
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
      options: ['A rainbow', 'A dove', 'An altar', 'A pillar of fire'],
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
      options: ['Sold him into slavery', 'Cast him into a pit and left him for dead', 'Stripped him of his robe and sent him to Egypt', 'Sent him to live with their uncle Laban'],
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

  exodus: [
    { id: 'exodus-001', type: 'multiple-choice', category: 'books', subcategory: 'Exodus', question: 'How did God appear to Moses at the burning bush?', options: ['As a flame in a burning bush that was not consumed', 'As an angel in the form of a man', 'As a still small voice without visible form', 'As a vision in the night'], correctAnswer: 'As a flame in a burning bush that was not consumed', verse: 'Exodus 3:2', difficulty: 1, xpReward: 10 },
    { id: 'exodus-002', type: 'multiple-choice', category: 'books', subcategory: 'Exodus', question: 'How many plagues did God send on Egypt?', options: ['10', '7', '12', '9'], correctAnswer: '10', verse: 'Exodus 7-12', difficulty: 1, xpReward: 10 },
    { id: 'exodus-003', type: 'multiple-choice', category: 'books', subcategory: 'Exodus', question: 'What did Moses stretch out over the Red Sea?', options: ['His staff', 'His hand', 'His cloak', 'A branch'], correctAnswer: 'His staff', verse: 'Exodus 14:16', difficulty: 2, xpReward: 10 },
    { id: 'exodus-004', type: 'multiple-choice', category: 'books', subcategory: 'Exodus', question: 'On which mountain did God give Moses the Ten Commandments?', options: ['Mount Sinai', 'Mount Zion', 'Mount Carmel', 'Mount Nebo'], correctAnswer: 'Mount Sinai', verse: 'Exodus 19:20', difficulty: 1, xpReward: 10 },
    { id: 'exodus-005', type: 'multiple-choice', category: 'books', subcategory: 'Exodus', question: 'What was the first commandment God gave Israel?', options: ['You shall have no other gods before Me', 'Do not kill', 'Honor your father and mother', 'Do not steal'], correctAnswer: 'You shall have no other gods before Me', verse: 'Exodus 20:3', difficulty: 1, xpReward: 10 },
    { id: 'exodus-006', type: 'multiple-choice', category: 'books', subcategory: 'Exodus', question: 'What was the final plague that led Pharaoh to release Israel?', options: ['Death of the firstborn', 'Darkness for three days', 'Locusts', 'Hail and fire'], correctAnswer: 'Death of the firstborn', verse: 'Exodus 12:29', difficulty: 2, xpReward: 10 }
  ],

  john: [
    { id: 'john-001', type: 'multiple-choice', category: 'books', subcategory: 'John', question: 'How does the Gospel of John begin?', options: ['"In the beginning was the Word"', '"The beginning of the good news about Jesus"', '"A record of the genealogy of Jesus"', '"Many have undertaken to draw up an account"'], correctAnswer: '"In the beginning was the Word"', verse: 'John 1:1', difficulty: 1, xpReward: 10 },
    { id: 'john-002', type: 'multiple-choice', category: 'books', subcategory: 'John', question: 'What is the famous verse John 3:16 about?', options: ["God's love in giving His Son so whoever believes has eternal life", "The resurrection of Jesus", "The baptism of Jesus", "Jesus calling His disciples"], correctAnswer: "God's love in giving His Son so whoever believes has eternal life", verse: 'John 3:16', difficulty: 1, xpReward: 10 },
    { id: 'john-003', type: 'multiple-choice', category: 'books', subcategory: 'John', question: 'What does Jesus call Himself in John 11:25?', options: ['The resurrection and the life', 'The light of the world', 'The good shepherd', 'The bread of life'], correctAnswer: 'The resurrection and the life', verse: 'John 11:25', difficulty: 2, xpReward: 10 },
    { id: 'john-004', type: 'multiple-choice', category: 'books', subcategory: 'John', question: 'What was the first miracle Jesus performed in John?', options: ['Turning water into wine at Cana', 'Healing a blind man', 'Feeding 5000', 'Walking on water'], correctAnswer: 'Turning water into wine at Cana', verse: 'John 2:1-11', difficulty: 2, xpReward: 10 },
    { id: 'john-005', type: 'multiple-choice', category: 'books', subcategory: 'John', question: 'Jesus said "I am the way, the truth, and the life" in John 14:6. What else did He add?', options: ['No one comes to the Father except through Me', 'Whoever believes will live forever', 'The truth will set you free', 'I am the door'], correctAnswer: 'No one comes to the Father except through Me', verse: 'John 14:6', difficulty: 2, xpReward: 10 },
    { id: 'john-006', type: 'multiple-choice', category: 'books', subcategory: 'John', question: 'Who was the first person to see the risen Jesus in John 20?', options: ['Mary Magdalene', 'Peter', 'John', 'Thomas'], correctAnswer: 'Mary Magdalene', verse: 'John 20:14-16', difficulty: 2, xpReward: 10 }
  ],

  psalms: [
    { id: 'psalms-001', type: 'multiple-choice', category: 'books', subcategory: 'Psalms', question: 'Psalm 23 begins "The Lord is my..." what?', options: ['Shepherd', 'King', 'Rock', 'Light'], correctAnswer: 'Shepherd', verse: 'Psalm 23:1', difficulty: 1, xpReward: 10 },
    { id: 'psalms-002', type: 'multiple-choice', category: 'books', subcategory: 'Psalms', question: 'How many psalms are in the book of Psalms?', options: ['150', '144', '120', '66'], correctAnswer: '150', difficulty: 1, xpReward: 10 },
    { id: 'psalms-003', type: 'multiple-choice', category: 'books', subcategory: 'Psalms', question: 'Psalm 119 is the longest chapter in the Bible. What is it entirely about?', options: ["God's law/Word", 'Creation', 'Worship only', 'The Messiah only'], correctAnswer: "God's law/Word", verse: 'Psalm 119', difficulty: 2, xpReward: 10 },
    { id: 'psalms-004', type: 'multiple-choice', category: 'books', subcategory: 'Psalms', question: 'Psalm 22 begins with "My God, my God, why have you forsaken me?" Jesus quoted this from the cross. In whose voice was it originally written?', options: ["David's voice, foreshadowing the Messiah", 'Isaiah the prophet', 'Moses', 'Solomon'], correctAnswer: "David's voice, foreshadowing the Messiah", verse: 'Psalm 22:1', difficulty: 3, xpReward: 15 },
    { id: 'psalms-005', type: 'multiple-choice', category: 'books', subcategory: 'Psalms', question: 'What does Psalm 100:4 say to enter God\'s gates with?', options: ['Thanksgiving and praise', 'Silence and reverence', 'Offerings and prayers', 'Fear and trembling'], correctAnswer: 'Thanksgiving and praise', verse: 'Psalm 100:4', difficulty: 1, xpReward: 10 },
    { id: 'psalms-006', type: 'multiple-choice', category: 'books', subcategory: 'Psalms', question: 'According to Psalm 1, the blessed person does NOT walk in the counsel of whom?', options: ['The wicked', 'The foolish', 'The proud', 'The rich'], correctAnswer: 'The wicked', verse: 'Psalm 1:1', difficulty: 2, xpReward: 10 }
  ],

  proverbs: [
    { id: 'proverbs-001', type: 'multiple-choice', category: 'books', subcategory: 'Proverbs', question: 'Proverbs 1:7 says the fear of the Lord is the beginning of what?', options: ['Wisdom', 'Knowledge', 'Understanding', 'Life'], correctAnswer: 'Knowledge', verse: 'Proverbs 1:7', difficulty: 1, xpReward: 10 },
    { id: 'proverbs-002', type: 'multiple-choice', category: 'books', subcategory: 'Proverbs', question: 'Proverbs 3:5 says to trust in the Lord with all your heart and not lean on your own what?', options: ['Understanding', 'Strength', 'Wisdom', 'Plans'], correctAnswer: 'Understanding', verse: 'Proverbs 3:5', difficulty: 1, xpReward: 10 },
    { id: 'proverbs-003', type: 'multiple-choice', category: 'books', subcategory: 'Proverbs', question: 'Who is the primary author of the book of Proverbs?', options: ['Solomon', 'David', 'Moses', 'Agur'], correctAnswer: 'Solomon', difficulty: 1, xpReward: 10 },
    { id: 'proverbs-004', type: 'multiple-choice', category: 'books', subcategory: 'Proverbs', question: 'Proverbs 31 describes a "wife of noble character." What does it say she is worth?', options: ['More than rubies', 'More than gold', 'More than silver', 'More than the finest pearls'], correctAnswer: 'More than rubies', verse: 'Proverbs 31:10', difficulty: 2, xpReward: 10 },
    { id: 'proverbs-005', type: 'multiple-choice', category: 'books', subcategory: 'Proverbs', question: 'Proverbs 22:6 says to train up a child in the way he should go and when he is old he will not do what?', options: ['Depart from it', 'Forget it', 'Regret it', 'Return to sin'], correctAnswer: 'Depart from it', verse: 'Proverbs 22:6', difficulty: 2, xpReward: 10 },
    { id: 'proverbs-006', type: 'multiple-choice', category: 'books', subcategory: 'Proverbs', question: 'What does Proverbs 16:18 say comes before a fall?', options: ['Pride', 'Anger', 'Laziness', 'Foolishness'], correctAnswer: 'Pride', verse: 'Proverbs 16:18', difficulty: 1, xpReward: 10 }
  ],

  romans: [
    { id: 'romans-001', type: 'multiple-choice', category: 'books', subcategory: 'Romans', question: 'Romans 1:16 says the gospel is the power of God for salvation to everyone who what?', options: ['Believes', 'Obeys the law', 'Is baptized', 'Is righteous'], correctAnswer: 'Believes', verse: 'Romans 1:16', difficulty: 1, xpReward: 10 },
    { id: 'romans-002', type: 'multiple-choice', category: 'books', subcategory: 'Romans', question: 'Romans 3:23 says all have sinned and fall short of what?', options: ["The glory of God", 'The law', 'Perfection', 'Heaven'], correctAnswer: 'The glory of God', verse: 'Romans 3:23', difficulty: 1, xpReward: 10 },
    { id: 'romans-003', type: 'multiple-choice', category: 'books', subcategory: 'Romans', question: 'Romans 6:23 says the wages of sin is death but what is the gift of God?', options: ['Eternal life in Christ Jesus', 'Forgiveness of sins', 'Peace and joy', 'A new heart'], correctAnswer: 'Eternal life in Christ Jesus', verse: 'Romans 6:23', difficulty: 1, xpReward: 10 },
    { id: 'romans-004', type: 'multiple-choice', category: 'books', subcategory: 'Romans', question: 'Romans 8:28 says God works all things together for good for those who love Him and are called according to what?', options: ['His purpose', 'Their faith', 'Their deeds', 'His law'], correctAnswer: 'His purpose', verse: 'Romans 8:28', difficulty: 2, xpReward: 10 },
    { id: 'romans-005', type: 'multiple-choice', category: 'books', subcategory: 'Romans', question: 'Romans 10:9 says if you confess Jesus is Lord and believe God raised Him from the dead you will be what?', options: ['Saved', 'Righteous', 'Forgiven only', 'Baptized'], correctAnswer: 'Saved', verse: 'Romans 10:9', difficulty: 1, xpReward: 10 },
    { id: 'romans-006', type: 'multiple-choice', category: 'books', subcategory: 'Romans', question: 'Romans 12:2 says do not conform to the pattern of this world but be transformed by the renewing of your what?', options: ['Mind', 'Heart', 'Spirit', 'Soul'], correctAnswer: 'Mind', verse: 'Romans 12:2', difficulty: 2, xpReward: 10 }
  ],

  isaiah: [
    { id: 'isaiah-001', type: 'multiple-choice', category: 'books', subcategory: 'Isaiah', question: 'Isaiah 9:6 prophesies a son who will be called by four names. Which is NOT one of them?', options: ['Mighty Warrior', 'Wonderful Counselor', 'Mighty God', 'Everlasting Father'], correctAnswer: 'Mighty Warrior', verse: 'Isaiah 9:6', difficulty: 2, xpReward: 10 },
    { id: 'isaiah-002', type: 'multiple-choice', category: 'books', subcategory: 'Isaiah', question: 'Isaiah 53 describes the suffering servant. It says He was wounded for what?', options: ['Our transgressions', 'His own sin', 'The sins of Israel only', 'Our iniquities'], correctAnswer: 'Our transgressions', verse: 'Isaiah 53:5', difficulty: 1, xpReward: 10 },
    { id: 'isaiah-003', type: 'multiple-choice', category: 'books', subcategory: 'Isaiah', question: 'Isaiah 40:31 says those who hope in the Lord will renew their strength and soar on wings like what?', options: ['Eagles', 'Doves', 'Hawks', 'Ravens'], correctAnswer: 'Eagles', verse: 'Isaiah 40:31', difficulty: 1, xpReward: 10 },
    { id: 'isaiah-004', type: 'multiple-choice', category: 'books', subcategory: 'Isaiah', question: 'In Isaiah 6, what did Isaiah see in his vision of the Lord?', options: ['God seated on a throne, high and exalted, with seraphim', 'A burning bush', 'A valley of dry bones', 'Four living creatures'], correctAnswer: 'God seated on a throne, high and exalted, with seraphim', verse: 'Isaiah 6:1-2', difficulty: 2, xpReward: 10 },
    { id: 'isaiah-005', type: 'multiple-choice', category: 'books', subcategory: 'Isaiah', question: 'What did the seraphim in Isaiah\'s vision cry to each other?', options: ['Holy, holy, holy is the Lord Almighty', 'Worthy, worthy, worthy is the Lamb who was slain', 'Glory to God in the highest, and on earth peace', 'Blessed is He who comes in the name of the Lord'], correctAnswer: 'Holy, holy, holy is the Lord Almighty', verse: 'Isaiah 6:3', difficulty: 2, xpReward: 10 },
    { id: 'isaiah-006', type: 'multiple-choice', category: 'books', subcategory: 'Isaiah', question: 'Isaiah 7:14 is a famous Messianic prophecy: a virgin will conceive and give birth to a son named what?', options: ['Immanuel', 'Jesus', 'Wonderful', 'Savior'], correctAnswer: 'Immanuel', verse: 'Isaiah 7:14', difficulty: 2, xpReward: 10 }
  ],

  jonah: [
    { id: 'jonah-001', type: 'multiple-choice', category: 'books', subcategory: 'Jonah', question: 'Where did God tell Jonah to go preach?', options: ['Nineveh', 'Babylon', 'Tarshish', 'Egypt'], correctAnswer: 'Nineveh', verse: 'Jonah 1:2', difficulty: 1, xpReward: 10 },
    { id: 'jonah-002', type: 'multiple-choice', category: 'books', subcategory: 'Jonah', question: 'Where was Jonah going instead of Nineveh?', options: ['Tarshish', 'Joppa', 'Babylon', 'Tyre'], correctAnswer: 'Tarshish', verse: 'Jonah 1:3', difficulty: 2, xpReward: 10 },
    { id: 'jonah-003', type: 'multiple-choice', category: 'books', subcategory: 'Jonah', question: 'How many days and nights was Jonah inside the great fish?', options: ['Three', 'One', 'Seven', 'Forty'], correctAnswer: 'Three', verse: 'Jonah 1:17', difficulty: 1, xpReward: 10 },
    { id: 'jonah-004', type: 'multiple-choice', category: 'books', subcategory: 'Jonah', question: 'What happened when Jonah preached in Nineveh?', options: ['The whole city repented from the king down to the commoners', 'They rejected his message', 'Half the city believed', 'Only the poor repented'], correctAnswer: 'The whole city repented from the king down to the commoners', verse: 'Jonah 3:5-6', difficulty: 1, xpReward: 10 },
    { id: 'jonah-005', type: 'multiple-choice', category: 'books', subcategory: 'Jonah', question: 'Why was Jonah angry at the end of the book?', options: ["God spared Nineveh and Jonah wanted them destroyed", 'The Ninevites returned to their sin after repenting', 'God did not answer his prayer', 'The plant that shaded him died'], correctAnswer: 'God spared Nineveh and Jonah wanted them destroyed', verse: 'Jonah 4:1', difficulty: 2, xpReward: 10 },
    { id: 'jonah-006', type: 'multiple-choice', category: 'books', subcategory: 'Jonah', question: 'Jesus referred to Jonah in the fish as a sign of His own burial and resurrection. How many days was Jonah in the fish (paralleling Jesus in the tomb)?', options: ['Three', 'Two', 'One', 'Four'], correctAnswer: 'Three', verse: 'Matthew 12:40', difficulty: 2, xpReward: 10 }
  ],

  job: [
    { id: 'job-001', type: 'multiple-choice', category: 'books', subcategory: 'Job', question: 'How does the book of Job describe Job\'s character?', options: ['Blameless and upright, fearing God and shunning evil', 'A great prophet of Israel', 'A king of Judah', 'A priest and judge'], correctAnswer: 'Blameless and upright, fearing God and shunning evil', verse: 'Job 1:1', difficulty: 1, xpReward: 10 },
    { id: 'job-002', type: 'multiple-choice', category: 'books', subcategory: 'Job', question: 'Who challenged God that Job only served Him because of blessings?', options: ['Satan', 'Eliphaz', 'Bildad', 'Zophar'], correctAnswer: 'Satan', verse: 'Job 1:9-11', difficulty: 2, xpReward: 10 },
    { id: 'job-003', type: 'multiple-choice', category: 'books', subcategory: 'Job', question: 'After losing everything, what did Job say in Job 1:21?', options: ['The Lord gave and the Lord has taken away; blessed be the name of the Lord', 'Why has God abandoned me?', 'I will curse the day I was born', 'Let me die and end my suffering'], correctAnswer: 'The Lord gave and the Lord has taken away; blessed be the name of the Lord', verse: 'Job 1:21', difficulty: 1, xpReward: 10 },
    { id: 'job-004', type: 'multiple-choice', category: 'books', subcategory: 'Job', question: 'What does Job 19:25 famously declare?', options: ['I know that my Redeemer lives', 'The Lord is my shepherd', 'Though He slay me, yet I will trust Him', 'My God, why have you forsaken me?'], correctAnswer: 'I know that my Redeemer lives', verse: 'Job 19:25', difficulty: 2, xpReward: 10 },
    { id: 'job-005', type: 'multiple-choice', category: 'books', subcategory: 'Job', question: 'When God spoke to Job out of the storm, what did He do?', options: ["Revealed His greatness through creation to show Job's limited understanding", 'Explained exactly why Job suffered', 'Restored Job\'s health before speaking to him', 'Condemned Job for questioning'], correctAnswer: "Revealed His greatness through creation to show Job's limited understanding", verse: 'Job 38-39', difficulty: 2, xpReward: 10 },
    { id: 'job-006', type: 'multiple-choice', category: 'books', subcategory: 'Job', question: 'How did God restore Job at the end of the book?', options: ['He gave him twice as much as he had before', 'He gave him exactly what he lost', 'He explained all the reasons for suffering', 'He made him a prophet'], correctAnswer: 'He gave him twice as much as he had before', verse: 'Job 42:10', difficulty: 2, xpReward: 10 }
  ],

  mark: [
    { id: 'mark-001', type: 'multiple-choice', category: 'books', subcategory: 'Mark', question: 'Mark is the shortest Gospel. What word does it frequently use to show Jesus\' urgency?', options: ['Immediately', 'Quickly', 'Suddenly', 'Then'], correctAnswer: 'Immediately', difficulty: 2, xpReward: 10 },
    { id: 'mark-002', type: 'multiple-choice', category: 'books', subcategory: 'Mark', question: 'Who is traditionally considered the author of the Gospel of Mark?', options: ['John Mark, a companion of Peter', 'Mark the apostle', 'Paul\'s secretary', 'Barnabas'], correctAnswer: 'John Mark, a companion of Peter', difficulty: 2, xpReward: 10 },
    { id: 'mark-003', type: 'multiple-choice', category: 'books', subcategory: 'Mark', question: 'Mark 1:15 records Jesus\' first public message. What did He say?', options: ['The kingdom of God has come near. Repent and believe the good news!', 'Blessed are the poor in spirit', 'Follow Me and I will make you fishers of men', 'Love the Lord your God with all your heart'], correctAnswer: 'The kingdom of God has come near. Repent and believe the good news!', verse: 'Mark 1:15', difficulty: 1, xpReward: 10 },
    { id: 'mark-004', type: 'multiple-choice', category: 'books', subcategory: 'Mark', question: 'In Mark 5, Jesus healed a demon-possessed man called what?', options: ['Legion (because many demons were in him)', 'Bartimaeus', 'The Syrophoenician', 'Abaddon (the destroyer)'], correctAnswer: 'Legion (because many demons were in him)', verse: 'Mark 5:9', difficulty: 2, xpReward: 10 },
    { id: 'mark-005', type: 'multiple-choice', category: 'books', subcategory: 'Mark', question: 'Mark 10:45 says the Son of Man came not to be served but to serve and to do what?', options: ['Give His life as a ransom for many', 'Teach the kingdom of God', 'Heal the sick and raise the dead', 'Fulfill the law and prophets'], correctAnswer: 'Give His life as a ransom for many', verse: 'Mark 10:45', difficulty: 1, xpReward: 10 },
    { id: 'mark-006', type: 'multiple-choice', category: 'books', subcategory: 'Mark', question: 'At Jesus\' baptism in Mark 1, what did the voice from heaven say?', options: ['You are my Son, whom I love; with you I am well pleased', 'This is my Son — listen to Him', 'Behold the Lamb of God', 'Holy, holy, holy is the Lord'], correctAnswer: 'You are my Son, whom I love; with you I am well pleased', verse: 'Mark 1:11', difficulty: 2, xpReward: 10 }
  ],

  luke: [
    { id: 'luke-001', type: 'multiple-choice', category: 'books', subcategory: 'Luke', question: 'Who wrote the Gospel of Luke?', options: ['Luke, a physician and companion of Paul', 'Matthew the apostle', 'John the apostle', 'Peter\'s secretary'], correctAnswer: 'Luke, a physician and companion of Paul', difficulty: 1, xpReward: 10 },
    { id: 'luke-002', type: 'multiple-choice', category: 'books', subcategory: 'Luke', question: 'Luke records the famous Christmas story. Where was Jesus born?', options: ['Bethlehem', 'Nazareth', 'Jerusalem', 'Capernaum'], correctAnswer: 'Bethlehem', verse: 'Luke 2:4-7', difficulty: 1, xpReward: 10 },
    { id: 'luke-003', type: 'multiple-choice', category: 'books', subcategory: 'Luke', question: 'The parable of the Good Samaritan is found only in Luke. Who helped the injured man?', options: ['A Samaritan', 'A Levite', 'A priest', 'A Roman soldier'], correctAnswer: 'A Samaritan', verse: 'Luke 10:33', difficulty: 1, xpReward: 10 },
    { id: 'luke-004', type: 'multiple-choice', category: 'books', subcategory: 'Luke', question: 'Luke 19 records Jesus visiting the house of which short man who climbed a tree to see Him?', options: ['Zacchaeus', 'Bartimaeus', 'Lazarus', 'Simon'], correctAnswer: 'Zacchaeus', verse: 'Luke 19:1-5', difficulty: 1, xpReward: 10 },
    { id: 'luke-005', type: 'multiple-choice', category: 'books', subcategory: 'Luke', question: 'Luke 2:52 says Jesus grew in wisdom and stature and in favor with God and whom?', options: ['Man (people)', 'His disciples', 'The priests', 'Israel'], correctAnswer: 'Man (people)', verse: 'Luke 2:52', difficulty: 2, xpReward: 10 },
    { id: 'luke-006', type: 'multiple-choice', category: 'books', subcategory: 'Luke', question: 'Jesus\' last words on the cross in Luke 23:46 were: "Father, into your hands I commit my..."?', options: ['Spirit', 'Life', 'Soul', 'Body'], correctAnswer: 'Spirit', verse: 'Luke 23:46', difficulty: 2, xpReward: 10 }
  ],

  acts: [
    { id: 'acts-001', type: 'multiple-choice', category: 'books', subcategory: 'Acts', question: 'What happened on the Day of Pentecost in Acts 2?', options: ['The Holy Spirit came with tongues of fire and the disciples spoke in other languages', 'Jesus appeared to 500 disciples', 'Peter healed a blind man', 'The temple curtain was torn'], correctAnswer: 'The Holy Spirit came with tongues of fire and the disciples spoke in other languages', verse: 'Acts 2:1-4', difficulty: 1, xpReward: 10 },
    { id: 'acts-002', type: 'multiple-choice', category: 'books', subcategory: 'Acts', question: 'How many people were baptized after Peter\'s sermon at Pentecost?', options: ['About 3000', 'About 500', 'About 120', 'About 5000'], correctAnswer: 'About 3000', verse: 'Acts 2:41', difficulty: 2, xpReward: 10 },
    { id: 'acts-003', type: 'multiple-choice', category: 'books', subcategory: 'Acts', question: 'Saul (Paul) was on the road to where when he met Jesus in a blinding light?', options: ['Damascus', 'Jerusalem', 'Antioch', 'Rome'], correctAnswer: 'Damascus', verse: 'Acts 9:3', difficulty: 1, xpReward: 10 },
    { id: 'acts-004', type: 'multiple-choice', category: 'books', subcategory: 'Acts', question: 'Acts 1:8 says believers will receive power from the Holy Spirit and be witnesses to the ends of the what?', options: ['Earth', 'World', 'Nations', 'Lands'], correctAnswer: 'Earth', verse: 'Acts 1:8', difficulty: 1, xpReward: 10 },
    { id: 'acts-005', type: 'multiple-choice', category: 'books', subcategory: 'Acts', question: 'Who was the first Christian martyr, stoned to death in Acts 7?', options: ['Stephen', 'James', 'Philip', 'Barnabas'], correctAnswer: 'Stephen', verse: 'Acts 7:58-60', difficulty: 2, xpReward: 10 },
    { id: 'acts-006', type: 'multiple-choice', category: 'books', subcategory: 'Acts', question: 'In Acts 16, what caused the prison doors to open while Paul and Silas were imprisoned?', options: ['A great earthquake while they were praying and singing hymns', 'An angel appeared', 'The magistrates released them', 'They escaped through a window'], correctAnswer: 'A great earthquake while they were praying and singing hymns', verse: 'Acts 16:25-26', difficulty: 2, xpReward: 10 }
  ],

  '1corinthians': [
    { id: '1cor-001', type: 'multiple-choice', category: 'books', subcategory: '1 Corinthians', question: '1 Corinthians 13 is known as the "love chapter." What does it say love never does?', options: ['Fails', 'Grows', 'Changes', 'Judges'], correctAnswer: 'Fails', verse: '1 Corinthians 13:8', difficulty: 1, xpReward: 10 },
    { id: '1cor-002', type: 'multiple-choice', category: 'books', subcategory: '1 Corinthians', question: 'What does 1 Corinthians 10:13 promise about temptation?', options: ['God provides a way out so you can endure it', 'Temptation disappears when you pray', 'Only weak believers are tempted', 'Temptation always leads to sin'], correctAnswer: 'God provides a way out so you can endure it', verse: '1 Corinthians 10:13', difficulty: 2, xpReward: 10 },
    { id: '1cor-003', type: 'multiple-choice', category: 'books', subcategory: '1 Corinthians', question: '1 Corinthians 15:3-4 summarizes the gospel. What does it emphasize?', options: ["Christ died for our sins, was buried, and rose on the third day", 'Jesus was a great teacher', 'The new covenant replaces the old', 'Baptism brings salvation'], correctAnswer: 'Christ died for our sins, was buried, and rose on the third day', verse: '1 Corinthians 15:3-4', difficulty: 1, xpReward: 10 },
    { id: '1cor-004', type: 'multiple-choice', category: 'books', subcategory: '1 Corinthians', question: '1 Corinthians 12 describes spiritual gifts. The church is compared to what?', options: ['A body with many parts', 'A temple', 'A vine and branches', 'An army'], correctAnswer: 'A body with many parts', verse: '1 Corinthians 12:12', difficulty: 2, xpReward: 10 },
    { id: '1cor-005', type: 'multiple-choice', category: 'books', subcategory: '1 Corinthians', question: 'What does 1 Corinthians 6:19 say your body is?', options: ['A temple of the Holy Spirit', 'A vessel for God\'s glory', 'A sacrifice to God', 'A living stone'], correctAnswer: 'A temple of the Holy Spirit', verse: '1 Corinthians 6:19', difficulty: 1, xpReward: 10 },
    { id: '1cor-006', type: 'multiple-choice', category: 'books', subcategory: '1 Corinthians', question: '1 Corinthians 1:18 says the message of the cross is foolishness to those who are perishing but to those being saved it is what?', options: ["The power of God", 'Wisdom of God', 'The glory of God', 'The grace of God'], correctAnswer: 'The power of God', verse: '1 Corinthians 1:18', difficulty: 2, xpReward: 10 }
  ],

  galatians: [
    { id: 'galatians-001', type: 'multiple-choice', category: 'books', subcategory: 'Galatians', question: 'Galatians 2:20 says Paul has been crucified with Christ and it is no longer him who lives but who?', options: ['Christ who lives in him', 'The Spirit who lives in him', 'God the Father who lives in him', 'The new man who lives in him'], correctAnswer: 'Christ who lives in him', verse: 'Galatians 2:20', difficulty: 1, xpReward: 10 },
    { id: 'galatians-002', type: 'multiple-choice', category: 'books', subcategory: 'Galatians', question: 'Galatians 5:22-23 lists the fruit of the Spirit. Which is NOT in the list?', options: ['Courage', 'Love', 'Joy', 'Faithfulness'], correctAnswer: 'Courage', verse: 'Galatians 5:22-23', difficulty: 2, xpReward: 10 },
    { id: 'galatians-003', type: 'multiple-choice', category: 'books', subcategory: 'Galatians', question: 'Galatians 3:28 says in Christ there is neither Jew nor Gentile, slave nor free, male nor what?', options: ['Female', 'Child', 'Elder', 'Foreigner'], correctAnswer: 'Female', verse: 'Galatians 3:28', difficulty: 2, xpReward: 10 },
    { id: 'galatians-004', type: 'multiple-choice', category: 'books', subcategory: 'Galatians', question: 'Galatians 6:7 says do not be deceived: God cannot be mocked. A man reaps what he what?', options: ['Sows', 'Gives', 'Believes', 'Speaks'], correctAnswer: 'Sows', verse: 'Galatians 6:7', difficulty: 1, xpReward: 10 },
    { id: 'galatians-005', type: 'multiple-choice', category: 'books', subcategory: 'Galatians', question: 'What is the main theme of Galatians?', options: ['Justification by faith alone, not by works of the law', 'Church unity and love', 'The return of Christ', 'Spiritual gifts'], correctAnswer: 'Justification by faith alone, not by works of the law', difficulty: 2, xpReward: 10 },
    { id: 'galatians-006', type: 'multiple-choice', category: 'books', subcategory: 'Galatians', question: 'Galatians 5:1 says it is for what that Christ has set us free?', options: ['Freedom', 'Service', 'Holiness', 'Knowledge'], correctAnswer: 'Freedom', verse: 'Galatians 5:1', difficulty: 1, xpReward: 10 }
  ],

  ephesians: [
    { id: 'ephesians-001', type: 'multiple-choice', category: 'books', subcategory: 'Ephesians', question: 'Ephesians 2:8-9 says we are saved by grace through faith — it is a gift of God, not of what?', options: ['Works', 'Prayer', 'Baptism', 'Knowledge'], correctAnswer: 'Works', verse: 'Ephesians 2:8-9', difficulty: 1, xpReward: 10 },
    { id: 'ephesians-002', type: 'multiple-choice', category: 'books', subcategory: 'Ephesians', question: 'Ephesians 6:10-18 describes the full armor of God. How many pieces are listed?', options: ['6', '5', '7', '4'], correctAnswer: '6', verse: 'Ephesians 6:14-17', difficulty: 2, xpReward: 10 },
    { id: 'ephesians-003', type: 'multiple-choice', category: 'books', subcategory: 'Ephesians', question: 'Ephesians 4:32 says to be kind, compassionate, and forgive each other just as God in Christ has done what?', options: ['Forgiven you', 'Loved you', 'Created you', 'Blessed you'], correctAnswer: 'Forgiven you', verse: 'Ephesians 4:32', difficulty: 1, xpReward: 10 },
    { id: 'ephesians-004', type: 'multiple-choice', category: 'books', subcategory: 'Ephesians', question: 'Ephesians 5:25 says husbands should love their wives just as Christ loved whom?', options: ['The church', 'His disciples', 'Israel', 'All people'], correctAnswer: 'The church', verse: 'Ephesians 5:25', difficulty: 2, xpReward: 10 },
    { id: 'ephesians-005', type: 'multiple-choice', category: 'books', subcategory: 'Ephesians', question: 'Ephesians 2:10 says we are God\'s handiwork created in Christ Jesus to do what?', options: ['Good works God prepared in advance for us', 'Spread the gospel to all nations', 'Worship God in spirit and truth', 'Build the church'], correctAnswer: 'Good works God prepared in advance for us', verse: 'Ephesians 2:10', difficulty: 2, xpReward: 10 },
    { id: 'ephesians-006', type: 'multiple-choice', category: 'books', subcategory: 'Ephesians', question: 'Ephesians 3:20 says God is able to do immeasurably more than all we ask or imagine. How?', options: ['According to His power that is at work within us', 'Through prayer alone', 'Through our faith', 'According to His law'], correctAnswer: 'According to His power that is at work within us', verse: 'Ephesians 3:20', difficulty: 2, xpReward: 10 }
  ],

  philippians: [
    { id: 'philippians-001', type: 'multiple-choice', category: 'books', subcategory: 'Philippians', question: 'Philippians 4:13 says: "I can do all things through Christ who..." what?', options: ['Strengthens me', 'Guides me', 'Loves me', 'Saves me'], correctAnswer: 'Strengthens me', verse: 'Philippians 4:13', difficulty: 1, xpReward: 10 },
    { id: 'philippians-002', type: 'multiple-choice', category: 'books', subcategory: 'Philippians', question: 'Philippians 4:6-7 says do not be anxious but present your requests to God. What will guard your heart?', options: ["The peace of God which surpasses understanding", 'The joy of the Lord', 'God\'s presence', 'His love'], correctAnswer: 'The peace of God which surpasses understanding', verse: 'Philippians 4:7', difficulty: 1, xpReward: 10 },
    { id: 'philippians-003', type: 'multiple-choice', category: 'books', subcategory: 'Philippians', question: 'Philippians 2:5-8 describes Jesus humbling Himself. He took on what?', options: ['The nature of a servant, being made in human likeness', 'The form of an angel', 'The body of a prophet', 'The power of a king'], correctAnswer: 'The nature of a servant, being made in human likeness', verse: 'Philippians 2:7', difficulty: 2, xpReward: 10 },
    { id: 'philippians-004', type: 'multiple-choice', category: 'books', subcategory: 'Philippians', question: 'Philippians 1:21 says for Paul, "to live is Christ and to die is..."?', options: ['Gain', 'Freedom', 'Rest', 'Victory'], correctAnswer: 'Gain', verse: 'Philippians 1:21', difficulty: 1, xpReward: 10 },
    { id: 'philippians-005', type: 'multiple-choice', category: 'books', subcategory: 'Philippians', question: 'Philippians 4:4 says "Rejoice in the Lord always." How many times does Paul say this?', options: ['Twice', 'Once', 'Three times', 'Four times'], correctAnswer: 'Twice', verse: 'Philippians 4:4', difficulty: 2, xpReward: 10 },
    { id: 'philippians-006', type: 'multiple-choice', category: 'books', subcategory: 'Philippians', question: 'Philippians 4:8 says to think about things that are true, noble, right, pure, lovely, and admirable — what else?', options: ['Excellent or praiseworthy', 'Holy and just', 'Eternal and good', 'Faithful and kind'], correctAnswer: 'Excellent or praiseworthy', verse: 'Philippians 4:8', difficulty: 2, xpReward: 10 }
  ],

  hebrews: [
    { id: 'hebrews-001', type: 'multiple-choice', category: 'books', subcategory: 'Hebrews', question: 'Hebrews 11:1 defines faith as the substance of things hoped for and the evidence of things not what?', options: ['Seen', 'Known', 'Proven', 'Experienced'], correctAnswer: 'Seen', verse: 'Hebrews 11:1', difficulty: 1, xpReward: 10 },
    { id: 'hebrews-002', type: 'multiple-choice', category: 'books', subcategory: 'Hebrews', question: 'Hebrews 4:12 says the word of God is living and active and sharper than any two-edged what?', options: ['Sword', 'Arrow', 'Knife', 'Spear'], correctAnswer: 'Sword', verse: 'Hebrews 4:12', difficulty: 1, xpReward: 10 },
    { id: 'hebrews-003', type: 'multiple-choice', category: 'books', subcategory: 'Hebrews', question: 'Hebrews 12:1-2 talks about a great cloud of witnesses and running a race. What should we fix our eyes on?', options: ['Jesus, the pioneer and perfecter of our faith', 'The finish line ahead', 'Our fellow believers', 'The reward waiting for us'], correctAnswer: 'Jesus, the pioneer and perfecter of our faith', verse: 'Hebrews 12:2', difficulty: 1, xpReward: 10 },
    { id: 'hebrews-004', type: 'multiple-choice', category: 'books', subcategory: 'Hebrews', question: 'Hebrews 9:22 says without the shedding of blood there is no what?', options: ['Forgiveness', 'Salvation', 'Atonement', 'Cleansing'], correctAnswer: 'Forgiveness', verse: 'Hebrews 9:22', difficulty: 2, xpReward: 10 },
    { id: 'hebrews-005', type: 'multiple-choice', category: 'books', subcategory: 'Hebrews', question: 'What does Hebrews 13:8 say about Jesus Christ?', options: ['He is the same yesterday, today, and forever', 'He is coming soon', 'He sits at the right hand of God', 'He is the High Priest forever'], correctAnswer: 'He is the same yesterday, today, and forever', verse: 'Hebrews 13:8', difficulty: 1, xpReward: 10 },
    { id: 'hebrews-006', type: 'multiple-choice', category: 'books', subcategory: 'Hebrews', question: 'Hebrews 11 is called the "Hall of Faith." Which person is mentioned first?', options: ['Abel', 'Enoch', 'Noah', 'Abraham'], correctAnswer: 'Abel', verse: 'Hebrews 11:4', difficulty: 3, xpReward: 15 }
  ],

  revelation: [
    { id: 'revelation-001', type: 'multiple-choice', category: 'books', subcategory: 'Revelation', question: 'Who wrote the book of Revelation?', options: ['John the Apostle on the island of Patmos', 'Paul in Rome', 'Peter in Jerusalem', 'Luke during his travels'], correctAnswer: 'John the Apostle on the island of Patmos', verse: 'Revelation 1:9', difficulty: 1, xpReward: 10 },
    { id: 'revelation-002', type: 'multiple-choice', category: 'books', subcategory: 'Revelation', question: 'Revelation 1:8 says God is the Alpha and the Omega. What does this mean?', options: ['He is the beginning and the end', 'He is all-knowing', 'He is all-powerful', 'He is always present'], correctAnswer: 'He is the beginning and the end', verse: 'Revelation 1:8', difficulty: 1, xpReward: 10 },
    { id: 'revelation-003', type: 'multiple-choice', category: 'books', subcategory: 'Revelation', question: 'Revelation 21:4 promises God will wipe away every tear and there will be no more death, mourning, crying, or what?', options: ['Pain', 'Fear', 'Sin', 'Darkness'], correctAnswer: 'Pain', verse: 'Revelation 21:4', difficulty: 1, xpReward: 10 },
    { id: 'revelation-004', type: 'multiple-choice', category: 'books', subcategory: 'Revelation', question: 'Revelation 3:20 says Jesus stands at the door and knocks. If anyone hears His voice and opens the door He will do what?', options: ['Come in and eat with them', 'Give them the crown of life', 'Write their name in the Book of Life', 'Fill them with the Spirit'], correctAnswer: 'Come in and eat with them', verse: 'Revelation 3:20', difficulty: 2, xpReward: 10 },
    { id: 'revelation-005', type: 'multiple-choice', category: 'books', subcategory: 'Revelation', question: 'What is the "lake of fire" in Revelation called?', options: ['The second death', 'The outer darkness', 'The eternal pit', 'The final judgment'], correctAnswer: 'The second death', verse: 'Revelation 20:14', difficulty: 2, xpReward: 10 },
    { id: 'revelation-006', type: 'multiple-choice', category: 'books', subcategory: 'Revelation', question: 'Revelation 22:20 records Jesus\' final promise. What does He say?', options: ['Yes, I am coming soon', 'Behold, I make all things new', 'I am with you always', 'I have overcome the world'], correctAnswer: 'Yes, I am coming soon', verse: 'Revelation 22:20', difficulty: 2, xpReward: 10 }
  ]
};

// Helper function to get all questions for a book
export function getBookQuestions(bookId: string): Question[] {
  return bookQuestions[bookId] || [];
}

// Helper to check if a book has questions
export function hasBookQuestions(bookId: string): boolean {
  return bookQuestions[bookId] && bookQuestions[bookId].length > 0;
}
