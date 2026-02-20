import { Question } from '../types';

// EXTENDED NAMES & PEOPLE QUESTIONS
// More lessons per subcategory with different difficulty levels

// PROPHETS - 8 lessons (was 4)
export const prophetsQuestionsExtended: Record<string, Question[]> = {
  // Beginner lessons (1-3)
  'names-prophets-1': [
    // Existing questions remain here
  ],
  'names-prophets-2': [
    // Existing questions remain here
  ],
  'names-prophets-3': [
    // Existing questions remain here
  ],

  // New Intermediate lessons (4-6)
  'names-prophets-4': [
    {
      id: 'names-prophets-4-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'prophets',
      question: 'Which prophet was taken up to heaven in a whirlwind?',
      options: ['Elijah', 'Elisha', 'Enoch', 'Moses'],
      correctAnswer: 'Elijah',
      verse: '2 Kings 2:11',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-4-q2',
      type: 'multiple-choice',
      question: 'Who asked for a double portion of Elijah\'s spirit?',
      options: ['Elisha', 'Isaiah', 'Jeremiah', 'Ezekiel'],
      correctAnswer: 'Elisha',
      verse: '2 Kings 2:9',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-4-q3',
      type: 'true-false',
      question: 'Elisha performed twice as many miracles as Elijah',
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Elisha performed 16 miracles compared to Elijah\'s 8',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-4-q4',
      type: 'multiple-choice',
      question: 'Which prophet raised a boy from the dead by lying on him?',
      options: ['Elisha', 'Elijah', 'Peter', 'Paul'],
      correctAnswer: 'Elisha',
      verse: '2 Kings 4:34-35',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-4-q5',
      type: 'multiple-choice',
      question: 'Who healed Naaman of leprosy?',
      options: ['Elisha', 'Moses', 'Jesus', 'Elijah'],
      correctAnswer: 'Elisha',
      verse: '2 Kings 5:14',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-4-q6',
      type: 'multiple-choice',
      question: 'Which prophet made an axe head float?',
      options: ['Elisha', 'Elijah', 'Moses', 'Joshua'],
      correctAnswer: 'Elisha',
      verse: '2 Kings 6:6',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-4-q7',
      type: 'multiple-choice',
      question: 'How many times did Naaman have to wash in the Jordan River?',
      options: ['7', '3', '12', '40'],
      correctAnswer: '7',
      verse: '2 Kings 5:10',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-4-q8',
      type: 'true-false',
      question: 'Elisha\'s servant Gehazi was struck with leprosy for his greed',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '2 Kings 5:27',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-4-q9',
      type: 'multiple-choice',
      question: 'What did Elisha use to purify poisoned stew?',
      options: ['Flour', 'Salt', 'Oil', 'Honey'],
      correctAnswer: 'Flour',
      verse: '2 Kings 4:41',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-4-q10',
      type: 'multiple-choice',
      question: 'Even after death, Elisha\'s bones did what?',
      options: ['Brought a man back to life', 'Turned to dust', 'Disappeared', 'Became relics'],
      correctAnswer: 'Brought a man back to life',
      verse: '2 Kings 13:21',
      difficulty: 3,
      xpReward: 20
    }
  ],

  'names-prophets-5': [
    {
      id: 'names-prophets-5-q1',
      type: 'multiple-choice',
      question: 'Which prophet saw a vision of God\'s throne with seraphim?',
      options: ['Isaiah', 'Ezekiel', 'Daniel', 'Jeremiah'],
      correctAnswer: 'Isaiah',
      verse: 'Isaiah 6:1-2',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-5-q2',
      type: 'multiple-choice',
      question: 'What did the seraphim use to touch Isaiah\'s lips?',
      options: ['A live coal', 'A golden scepter', 'Holy water', 'Oil'],
      correctAnswer: 'A live coal',
      verse: 'Isaiah 6:6-7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-5-q3',
      type: 'multiple-choice',
      question: 'Isaiah prophesied about a virgin giving birth. What name would be given?',
      options: ['Immanuel', 'Jesus', 'Messiah', 'Christ'],
      correctAnswer: 'Immanuel',
      verse: 'Isaiah 7:14',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-5-q4',
      type: 'true-false',
      question: 'Isaiah prophesied for about 60 years',
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Isaiah prophesied during the reigns of 4 kings',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-5-q5',
      type: 'multiple-choice',
      question: 'Which king did Isaiah advise to trust God when Jerusalem was besieged?',
      options: ['Hezekiah', 'David', 'Solomon', 'Josiah'],
      correctAnswer: 'Hezekiah',
      verse: 'Isaiah 37:1-7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-5-q6',
      type: 'multiple-choice',
      question: 'Isaiah 53 describes whom as "a man of sorrows"?',
      options: ['The Messiah (Jesus)', 'Isaiah', 'Moses', 'Jeremiah'],
      correctAnswer: 'The Messiah (Jesus)',
      verse: 'Isaiah 53:3',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-5-q7',
      type: 'multiple-choice',
      question: 'How many years were added to King Hezekiah\'s life?',
      options: ['15', '10', '20', '5'],
      correctAnswer: '15',
      verse: 'Isaiah 38:5',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-5-q8',
      type: 'true-false',
      question: 'Isaiah walked naked and barefoot for 3 years as a sign',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Isaiah 20:3',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-prophets-5-q9',
      type: 'multiple-choice',
      question: 'Isaiah prophesied that the Messiah would be called:',
      options: ['Wonderful Counselor, Mighty God', 'King of Kings', 'Alpha and Omega', 'Prince of Peace only'],
      correctAnswer: 'Wonderful Counselor, Mighty God',
      verse: 'Isaiah 9:6',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-5-q10',
      type: 'multiple-choice',
      question: 'According to tradition, how did Isaiah die?',
      options: ['Sawn in two', 'Stoned', 'Beheaded', 'Old age'],
      correctAnswer: 'Sawn in two',
      explanation: 'Jewish tradition says Isaiah was martyred during Manasseh\'s reign',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-prophets-5-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Yesha\'yahu" (יְשַׁעְיָהוּ - Isaiah) means:',
      options: ['YHWH is salvation', 'YHWH speaks', 'YHWH sees', 'YHWH provides'],
      correctAnswer: 'YHWH is salvation',
      explanation: 'From "yesha" (יֶשַׁע = salvation) and "Yahu" (יָהוּ = YHWH). His name embodies his prophetic message of salvation.',
      verse: 'Isaiah 12:2',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-prophets-5-q12',
      type: 'multiple-choice',
      question: 'The Hebrew name "Immanuel" (עִמָּנוּ אֵל) prophesied by Isaiah means:',
      options: ['God with us', 'God saves us', 'God loves us', 'God sees us'],
      correctAnswer: 'God with us',
      explanation: 'From "immanu" (עִמָּנוּ = with us) and "El" (אֵל = God). This prophecy pointed to Jesus\' incarnation.',
      verse: 'Isaiah 7:14',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-prophets-5-q13',
      type: 'multiple-choice',
      question: 'Isaiah\'s "Kadosh, Kadosh, Kadosh" (קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ - Holy, Holy, Holy) emphasizes:',
      options: ['The absolute holiness of God (superlative)', 'God\'s threefold nature', 'Three angels', 'Three levels of heaven'],
      correctAnswer: 'The absolute holiness of God (superlative)',
      explanation: 'Hebrew uses repetition for emphasis. Triple repetition is the ultimate superlative showing God\'s perfect holiness.',
      verse: 'Isaiah 6:3',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-prophets-5-q14',
      type: 'multiple-choice',
      question: 'The Hebrew word "eved" (עֶבֶד) in Isaiah\'s "Suffering Servant" passages means:',
      options: ['Servant/slave', 'Prophet', 'Priest', 'King'],
      correctAnswer: 'Servant/slave',
      explanation: 'Eved means servant or slave. Isaiah 53 describes the Messiah as God\'s suffering servant who bears our sins.',
      verse: 'Isaiah 53:11',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-prophets-6': [
    {
      id: 'names-prophets-6-q1',
      type: 'multiple-choice',
      question: 'Which prophet is known as "the weeping prophet"?',
      options: ['Jeremiah', 'Isaiah', 'Ezekiel', 'Daniel'],
      correctAnswer: 'Jeremiah',
      explanation: 'Called this because of his deep grief over Judah\'s sin',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-6-q2',
      type: 'multiple-choice',
      question: 'At what age was Jeremiah called to be a prophet?',
      options: ['Youth/teenager', '30 years old', '40 years old', 'Childhood'],
      correctAnswer: 'Youth/teenager',
      verse: 'Jeremiah 1:6-7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-6-q3',
      type: 'true-false',
      question: 'Jeremiah was thrown into a muddy cistern and left to die',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Jeremiah 38:6',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-6-q4',
      type: 'multiple-choice',
      question: 'Who rescued Jeremiah from the cistern?',
      options: ['Ebed-Melech the Ethiopian', 'Baruch', 'King Zedekiah', 'An angel'],
      correctAnswer: 'Ebed-Melech the Ethiopian',
      verse: 'Jeremiah 38:7-13',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-6-q5',
      type: 'multiple-choice',
      question: 'What did King Jehoiakim do with Jeremiah\'s scroll?',
      options: ['Cut it up and burned it', 'Read it and repented', 'Hid it', 'Threw it in water'],
      correctAnswer: 'Cut it up and burned it',
      verse: 'Jeremiah 36:23',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-6-q6',
      type: 'multiple-choice',
      question: 'Who was Jeremiah\'s faithful scribe?',
      options: ['Baruch', 'Ezra', 'Nehemiah', 'Daniel'],
      correctAnswer: 'Baruch',
      verse: 'Jeremiah 36:4',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-6-q7',
      type: 'multiple-choice',
      question: 'How many years did Jeremiah prophesy Judah would be in captivity?',
      options: ['70', '40', '50', '100'],
      correctAnswer: '70',
      verse: 'Jeremiah 25:11',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-6-q8',
      type: 'true-false',
      question: 'Jeremiah was forbidden by God to marry',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Jeremiah 16:2',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-6-q9',
      type: 'multiple-choice',
      question: 'Jeremiah bought a field as a sign of what?',
      options: ['Future restoration', 'God\'s judgment', 'Personal wealth', 'Family inheritance'],
      correctAnswer: 'Future restoration',
      verse: 'Jeremiah 32:15',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-6-q10',
      type: 'multiple-choice',
      question: 'Where did Jeremiah end up after Jerusalem fell?',
      options: ['Egypt', 'Babylon', 'Persia', 'Rome'],
      correctAnswer: 'Egypt',
      verse: 'Jeremiah 43:6-7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-6-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Yirmeyahu" (יִרְמְיָהוּ - Jeremiah) means:',
      options: ['YHWH exalts/lifts up', 'YHWH weeps', 'YHWH speaks', 'YHWH establishes'],
      correctAnswer: 'YHWH exalts/lifts up',
      explanation: 'From "rum" (רוּם = to exalt/lift) and "Yahu" (יָהוּ = YHWH). Despite judgment messages, God would ultimately exalt His people.',
      verse: 'Jeremiah 1:5',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-prophets-6-q12',
      type: 'multiple-choice',
      question: 'Jeremiah\'s "new covenant" prophecy uses "brit chadashah" (בְּרִית חֲדָשָׁה) meaning:',
      options: ['New/renewed covenant', 'Better covenant', 'Final covenant', 'Eternal covenant'],
      correctAnswer: 'New/renewed covenant',
      explanation: 'Brit = covenant, chadashah = new/renewed. This prophecy (Jer 31:31) pointed to Jesus\' new covenant in His blood.',
      verse: 'Jeremiah 31:31',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-prophets-6-q13',
      type: 'multiple-choice',
      question: 'The Hebrew "lev chadash" (לֵב חָדָשׁ - new heart) in Jeremiah\'s prophecy means:',
      options: ['Transformed inner nature', 'New emotions', 'Clean heart', 'Strong heart'],
      correctAnswer: 'Transformed inner nature',
      explanation: 'Lev (heart) in Hebrew means the whole inner person. God promised to write His law on transformed hearts.',
      verse: 'Jeremiah 31:33',
      difficulty: 3,
      xpReward: 25
    }
  ],

  // Advanced lessons (7-8)
  'names-prophets-7': [
    {
      id: 'names-prophets-7-q1',
      type: 'multiple-choice',
      question: 'The Hebrew name "Yechezkel" (יְחֶזְקֵאל - Ezekiel) means:',
      options: ['God strengthens', 'God sees', 'God provides', 'God judges'],
      correctAnswer: 'God strengthens',
      explanation: 'From "chazaq" (חָזַק = to strengthen) and "El" (אֵל = God). His name reflects God\'s power to restore Israel.',
      verse: 'Ezekiel 1:3',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-prophets-7-q1b',
      type: 'multiple-choice',
      question: 'Which prophet saw a vision of wheels within wheels?',
      options: ['Ezekiel', 'Daniel', 'Isaiah', 'Jeremiah'],
      correctAnswer: 'Ezekiel',
      verse: 'Ezekiel 1:16',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-prophets-7-q2',
      type: 'multiple-choice',
      question: 'What was Ezekiel told to eat to symbolize consuming God\'s word?',
      options: ['A scroll', 'Honey', 'Bread', 'Manna'],
      correctAnswer: 'A scroll',
      verse: 'Ezekiel 3:1-3',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-prophets-7-q3',
      type: 'true-false',
      question: 'The scroll Ezekiel ate tasted like honey',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Ezekiel 3:3',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-7-q4',
      type: 'multiple-choice',
      question: 'Ezekiel had a vision of a valley full of what?',
      options: ['Dry bones', 'Gold', 'Locusts', 'Angels'],
      correctAnswer: 'Dry bones',
      verse: 'Ezekiel 37:1-2',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-7-q5',
      type: 'multiple-choice',
      question: 'What did the dry bones represent?',
      options: ['The house of Israel', 'Dead prophets', 'Gentile nations', 'Angels'],
      correctAnswer: 'The house of Israel',
      verse: 'Ezekiel 37:11',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-prophets-7-q6',
      type: 'true-false',
      question: 'Ezekiel was a priest as well as a prophet',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Ezekiel 1:3',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-prophets-7-q7',
      type: 'multiple-choice',
      question: 'How long did Ezekiel lie on his left side as a sign?',
      options: ['390 days', '40 days', '70 days', '365 days'],
      correctAnswer: '390 days',
      verse: 'Ezekiel 4:5',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-prophets-7-q8',
      type: 'multiple-choice',
      question: 'What happened to Ezekiel\'s wife?',
      options: ['She died suddenly', 'She left him', 'She became ill', 'Nothing unusual'],
      correctAnswer: 'She died suddenly',
      verse: 'Ezekiel 24:18',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-prophets-7-q9',
      type: 'true-false',
      question: 'God told Ezekiel not to mourn for his wife as a sign to Israel',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Ezekiel 24:16-17',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-prophets-7-q10',
      type: 'multiple-choice',
      question: 'Ezekiel\'s visions included a detailed description of:',
      options: ['A future temple', 'Heaven', 'Hell', 'The flood'],
      correctAnswer: 'A future temple',
      verse: 'Ezekiel 40-48',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-prophets-7-q11',
      type: 'multiple-choice',
      question: 'The Hebrew word "ruach" (רוּחַ) appears in Ezekiel\'s vision of dry bones. It means:',
      options: ['Spirit/breath/wind', 'Bone', 'Life', 'Death'],
      correctAnswer: 'Spirit/breath/wind',
      explanation: 'Ruach has three meanings: breath, wind, and spirit, showing God\'s life-giving power in Ezekiel 37.',
      verse: 'Ezekiel 37:5',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-prophets-7-q12',
      type: 'multiple-choice',
      question: 'The "Kavod YHWH" (כְּבוֹד יהוה - Glory of the LORD) that Ezekiel saw means:',
      options: ['The weighty, radiant presence of God', 'God\'s judgment', 'God\'s temple', 'God\'s throne'],
      correctAnswer: 'The weighty, radiant presence of God',
      explanation: 'Kavod means "weight/heaviness" and signifies God\'s substantial, glorious presence that filled the temple.',
      verse: 'Ezekiel 1:28',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-prophets-8': [
    {
      id: 'names-prophets-8-q1',
      type: 'multiple-choice',
      question: 'Which prophet interpreted King Nebuchadnezzar\'s dreams?',
      options: ['Daniel', 'Joseph', 'Ezekiel', 'Isaiah'],
      correctAnswer: 'Daniel',
      verse: 'Daniel 2:19',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-8-q2',
      type: 'multiple-choice',
      question: 'What were Daniel and his friends given to eat instead of the king\'s food?',
      options: ['Vegetables and water', 'Bread and fish', 'Fruit and milk', 'Grain and wine'],
      correctAnswer: 'Vegetables and water',
      verse: 'Daniel 1:12',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-8-q3',
      type: 'multiple-choice',
      question: 'How many of Daniel\'s friends were thrown into the fiery furnace?',
      options: ['3', '4', '2', '7'],
      correctAnswer: '3',
      verse: 'Daniel 3:23',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-prophets-8-q4',
      type: 'multiple-choice',
      question: 'What were the Babylonian names of Daniel\'s three friends?',
      options: ['Shadrach, Meshach, Abednego', 'Hananiah, Mishael, Azariah', 'Belteshazzar, Daniel, Joseph', 'Michael, Gabriel, Raphael'],
      correctAnswer: 'Shadrach, Meshach, Abednego',
      verse: 'Daniel 1:7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-8-q5',
      type: 'true-false',
      question: 'A fourth person appeared in the furnace with Daniel\'s friends',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Daniel 3:25',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-8-q6',
      type: 'multiple-choice',
      question: 'Why was Daniel thrown into the lions\' den?',
      options: ['He prayed to God despite a decree', 'He refused to bow to an idol', 'He interpreted a dream', 'He criticized the king'],
      correctAnswer: 'He prayed to God despite a decree',
      verse: 'Daniel 6:10',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-8-q7',
      type: 'multiple-choice',
      question: 'How many times a day did Daniel pray?',
      options: ['3', '1', '7', '5'],
      correctAnswer: '3',
      verse: 'Daniel 6:10',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-prophets-8-q8',
      type: 'true-false',
      question: 'The lions harmed Daniel in the den',
      options: ['True', 'False'],
      correctAnswer: 'False',
      verse: 'Daniel 6:22',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-prophets-8-q9',
      type: 'multiple-choice',
      question: 'Daniel served under how many different kings?',
      options: ['At least 4', '2', '1', '7'],
      correctAnswer: 'At least 4',
      explanation: 'Nebuchadnezzar, Belshazzar, Darius, Cyrus',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-prophets-8-q10',
      type: 'multiple-choice',
      question: 'What was the "writing on the wall" at Belshazzar\'s feast?',
      options: ['MENE, MENE, TEKEL, PARSIN', 'HOLY, HOLY, HOLY', 'KING OF KINGS', 'THE END IS NEAR'],
      correctAnswer: 'MENE, MENE, TEKEL, PARSIN',
      verse: 'Daniel 5:25',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-prophets-8-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Daniyyel" (דָּנִיֵּאל - Daniel) means:',
      options: ['God is my judge', 'God is my strength', 'God is faithful', 'God provides'],
      correctAnswer: 'God is my judge',
      explanation: 'From "dan" (דָּן = judge) and "El" (אֵל = God). His name reflects divine justice and wisdom.',
      verse: 'Daniel 1:6',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-prophets-8-q12',
      type: 'multiple-choice',
      question: 'The Aramaic word "MENE" (מְנֵא) in the writing on the wall means:',
      options: ['Numbered/counted', 'Weighed', 'Divided', 'Judged'],
      correctAnswer: 'Numbered/counted',
      explanation: 'MENE: God has numbered your kingdom and finished it. TEKEL: weighed and found wanting. PARSIN: divided.',
      verse: 'Daniel 5:26',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-prophets-8-q13',
      type: 'multiple-choice',
      question: 'What does the Aramaic phrase "bar enash" (בַּר אֱנָשׁ) mean in Daniel 7:13?',
      options: ['Son of Man', 'Son of God', 'King of Kings', 'Ancient of Days'],
      correctAnswer: 'Son of Man',
      explanation: 'This Aramaic title (bar = son, enash = man/human) appears in Daniel\'s vision and Jesus used it for Himself.',
      verse: 'Daniel 7:13',
      difficulty: 3,
      xpReward: 25
    }
  ]
};

// KINGS - 8 lessons (was 4)
export const kingsQuestionsExtended: Record<string, Question[]> = {
  'names-kings-5': [
    {
      id: 'names-kings-5-q1',
      type: 'multiple-choice',
      question: 'Which king asked God for wisdom instead of riches?',
      options: ['Solomon', 'David', 'Hezekiah', 'Josiah'],
      correctAnswer: 'Solomon',
      verse: '1 Kings 3:9',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-kings-5-q2',
      type: 'multiple-choice',
      question: 'How many wives did Solomon have?',
      options: ['700', '100', '300', '1000'],
      correctAnswer: '700',
      verse: '1 Kings 11:3',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-5-q3',
      type: 'true-false',
      question: 'Solomon built the first temple in Jerusalem',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '1 Kings 6:1',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-kings-5-q4',
      type: 'multiple-choice',
      question: 'The Queen of Sheba visited Solomon to test him with:',
      options: ['Hard questions', 'Riddles', 'Math problems', 'Battle challenges'],
      correctAnswer: 'Hard questions',
      verse: '1 Kings 10:1',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-5-q5',
      type: 'multiple-choice',
      question: 'Solomon wrote which books of the Bible?',
      options: ['Proverbs, Ecclesiastes, Song of Songs', 'Psalms, Proverbs', 'Job, Ecclesiastes', 'Only Proverbs'],
      correctAnswer: 'Proverbs, Ecclesiastes, Song of Songs',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-5-q6',
      type: 'true-false',
      question: 'Solomon\'s foreign wives led him to worship other gods',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '1 Kings 11:4',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-5-q7',
      type: 'multiple-choice',
      question: 'How many proverbs did Solomon speak?',
      options: ['3000', '1000', '5000', '500'],
      correctAnswer: '3000',
      verse: '1 Kings 4:32',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-kings-5-q8',
      type: 'multiple-choice',
      question: 'What did Solomon use to settle the dispute between two mothers?',
      options: ['Threatened to cut the baby in half', 'Flipped a coin', 'Asked the baby', 'Consulted a prophet'],
      correctAnswer: 'Threatened to cut the baby in half',
      verse: '1 Kings 3:25',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-5-q9',
      type: 'multiple-choice',
      question: 'How long did it take to build Solomon\'s temple?',
      options: ['7 years', '3 years', '10 years', '20 years'],
      correctAnswer: '7 years',
      verse: '1 Kings 6:38',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-5-q10',
      type: 'true-false',
      question: 'Solomon was the wisest man who ever lived',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '1 Kings 3:12',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-kings-5-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Shlomo" (שְׁלֹמֹה - Solomon) comes from "shalom" meaning:',
      options: ['Peace/completeness/wholeness', 'Wisdom', 'Temple', 'King'],
      correctAnswer: 'Peace/completeness/wholeness',
      explanation: 'From "shalom" (שָׁלוֹם = peace/wholeness). God gave Israel peace during Solomon\'s reign, unlike David\'s wars.',
      verse: '1 Chronicles 22:9',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-kings-5-q12',
      type: 'multiple-choice',
      question: 'Solomon\'s prayer uses "Shem" (שֵׁם - Name) for God\'s presence. This means:',
      options: ['God\'s character/reputation/presence', 'God\'s title only', 'God\'s power', 'God\'s word'],
      correctAnswer: 'God\'s character/reputation/presence',
      explanation: 'In Hebrew thought, a name represents the person\'s character. God\'s Name dwelling in the temple meant His presence.',
      verse: '1 Kings 8:29',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-kings-5-q13',
      type: 'multiple-choice',
      question: 'The Hebrew "chokmah" (חָכְמָה - wisdom) given to Solomon means:',
      options: ['Practical skill and godly insight', 'Book knowledge', 'Intelligence', 'Experience'],
      correctAnswer: 'Practical skill and godly insight',
      explanation: 'Chokmah is more than IQ - it\'s the skill to live righteously and make godly decisions in daily life.',
      verse: '1 Kings 3:12',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-kings-6': [
    {
      id: 'names-kings-6-q1',
      type: 'multiple-choice',
      question: 'Which king cleansed the temple and rediscovered the Book of the Law?',
      options: ['Josiah', 'Hezekiah', 'David', 'Solomon'],
      correctAnswer: 'Josiah',
      verse: '2 Kings 22:8',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-6-q2',
      type: 'multiple-choice',
      question: 'How old was Josiah when he became king?',
      options: ['8', '16', '12', '21'],
      correctAnswer: '8',
      verse: '2 Kings 22:1',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-6-q3',
      type: 'true-false',
      question: 'Josiah was killed in battle against Egypt',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '2 Kings 23:29',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-6-q4',
      type: 'multiple-choice',
      question: 'Josiah held a massive celebration of which feast?',
      options: ['Passover', 'Pentecost', 'Tabernacles', 'Purim'],
      correctAnswer: 'Passover',
      verse: '2 Kings 23:21-23',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-6-q5',
      type: 'multiple-choice',
      question: 'What did Josiah do to the pagan altars and idols?',
      options: ['Destroyed them completely', 'Moved them outside Jerusalem', 'Left them alone', 'Converted them'],
      correctAnswer: 'Destroyed them completely',
      verse: '2 Kings 23:4-14',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-6-q6',
      type: 'true-false',
      question: 'Josiah was the last good king of Judah',
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'After Josiah, Judah declined into idolatry',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-6-q7',
      type: 'multiple-choice',
      question: 'Which prophetess gave a message to Josiah?',
      options: ['Huldah', 'Deborah', 'Miriam', 'Anna'],
      correctAnswer: 'Huldah',
      verse: '2 Kings 22:14',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-kings-6-q8',
      type: 'multiple-choice',
      question: 'What did Josiah do when he heard the Book of the Law?',
      options: ['Tore his clothes in grief', 'Celebrated', 'Ignored it', 'Questioned it'],
      correctAnswer: 'Tore his clothes in grief',
      verse: '2 Kings 22:11',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-6-q9',
      type: 'multiple-choice',
      question: 'How many years did Josiah reign?',
      options: ['31', '20', '40', '25'],
      correctAnswer: '31',
      verse: '2 Kings 22:1',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-kings-6-q10',
      type: 'true-false',
      question: 'Josiah made a covenant to follow the Lord with all his heart',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '2 Kings 23:3',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-6-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Yoshiyahu" (יֹאשִׁיָּהוּ - Josiah) means:',
      options: ['YHWH supports/heals', 'YHWH is king', 'YHWH provides', 'YHWH judges'],
      correctAnswer: 'YHWH supports/heals',
      explanation: 'From "yasha" (יָשַׁע = to save/support) and "Yahu" (יָהוּ = YHWH). God supported Josiah\'s righteous reforms.',
      verse: '2 Kings 22:1',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-kings-6-q12',
      type: 'multiple-choice',
      question: 'When Josiah heard the Torah, he "qara begedav" (קָרַע בְּגָדָיו). This means:',
      options: ['Tore his clothes (sign of grief)', 'Changed his clothes', 'Washed his clothes', 'Folded his clothes'],
      correctAnswer: 'Tore his clothes (sign of grief)',
      explanation: 'Tearing garments was an ancient sign of deep grief and repentance over sin. Josiah grieved over Judah\'s disobedience.',
      verse: '2 Kings 22:11',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-kings-6-q13',
      type: 'multiple-choice',
      question: 'The "Sefer haTorah" (סֵפֶר הַתּוֹרָה - Book of the Law) found in the temple was likely:',
      options: ['Deuteronomy', 'Genesis', 'Psalms', 'Proverbs'],
      correctAnswer: 'Deuteronomy',
      explanation: 'Most scholars believe it was Deuteronomy, which details covenant blessings and curses that moved Josiah to reform.',
      verse: '2 Kings 22:8',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-kings-7': [
    {
      id: 'names-kings-7-q1',
      type: 'multiple-choice',
      question: 'Which king trusted God when 185,000 Assyrian soldiers surrounded Jerusalem?',
      options: ['Hezekiah', 'David', 'Solomon', 'Josiah'],
      correctAnswer: 'Hezekiah',
      verse: '2 Kings 19:35',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-7-q2',
      type: 'multiple-choice',
      question: 'What happened to the Assyrian army besieging Jerusalem?',
      options: ['An angel killed them overnight', 'They retreated', 'They surrendered', 'Disease killed them'],
      correctAnswer: 'An angel killed them overnight',
      verse: '2 Kings 19:35',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-7-q3',
      type: 'true-false',
      question: 'Hezekiah was near death but God healed him',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '2 Kings 20:5',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-7-q4',
      type: 'multiple-choice',
      question: 'What sign did God give Hezekiah of his healing?',
      options: ['The sun\'s shadow went backward', 'A rainbow appeared', 'Fire from heaven', 'Thunder and lightning'],
      correctAnswer: 'The sun\'s shadow went backward',
      verse: '2 Kings 20:11',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-7-q5',
      type: 'multiple-choice',
      question: 'Hezekiah built a tunnel to bring what into Jerusalem?',
      options: ['Water', 'Food', 'Gold', 'Weapons'],
      correctAnswer: 'Water',
      verse: '2 Kings 20:20',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-7-q6',
      type: 'true-false',
      question: 'Hezekiah showed Babylonian envoys all his treasures',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '2 Kings 20:13',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-7-q7',
      type: 'multiple-choice',
      question: 'Which prophet warned Hezekiah about showing his treasures to Babylon?',
      options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'],
      correctAnswer: 'Isaiah',
      verse: '2 Kings 20:16-18',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-7-q8',
      type: 'multiple-choice',
      question: 'Hezekiah celebrated what feast that hadn\'t been observed for many years?',
      options: ['Passover', 'Pentecost', 'Tabernacles', 'Day of Atonement'],
      correctAnswer: 'Passover',
      verse: '2 Chronicles 30:26',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-7-q9',
      type: 'true-false',
      question: 'Hezekiah destroyed the bronze serpent Moses made because people worshiped it',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '2 Kings 18:4',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-kings-7-q10',
      type: 'multiple-choice',
      question: 'How is Hezekiah described in relation to other kings of Judah?',
      options: ['Trusted in the Lord more than any other', 'The richest', 'The strongest warrior', 'The longest reigning'],
      correctAnswer: 'Trusted in the Lord more than any other',
      verse: '2 Kings 18:5',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-7-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Chizkiyahu" (חִזְקִיָּהוּ - Hezekiah) means:',
      options: ['YHWH strengthens', 'YHWH provides', 'YHWH saves', 'YHWH heals'],
      correctAnswer: 'YHWH strengthens',
      explanation: 'From "chazaq" (חָזַק = to strengthen) and "Yah" (יָהּ = shortened form of YHWH). His name reflects God\'s strengthening power.',
      verse: '2 Kings 18:1',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-kings-7-q12',
      type: 'multiple-choice',
      question: 'The Hebrew word "batach" (בָּטַח) describes Hezekiah\'s relationship with God. It means:',
      options: ['To trust/rely upon securely', 'To fear', 'To worship', 'To obey'],
      correctAnswer: 'To trust/rely upon securely',
      explanation: 'Batach means complete, secure trust. "He batach in the LORD God of Israel" (2 Kings 18:5) shows unwavering confidence.',
      verse: '2 Kings 18:5',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-kings-8': [
    {
      id: 'names-kings-8-q1',
      type: 'multiple-choice',
      question: 'Which king defeated the Philistines and the giant Goliath?',
      options: ['David', 'Saul', 'Solomon', 'Hezekiah'],
      correctAnswer: 'David',
      verse: '1 Samuel 17:50',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-kings-8-q2',
      type: 'multiple-choice',
      question: 'What did David use to defeat Goliath?',
      options: ['A sling and stone', 'A sword', 'A spear', 'A bow and arrow'],
      correctAnswer: 'A sling and stone',
      verse: '1 Samuel 17:49',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-kings-8-q3',
      type: 'true-false',
      question: 'David was anointed king while Saul was still alive',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '1 Samuel 16:13',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-8-q4',
      type: 'multiple-choice',
      question: 'What was David\'s job before becoming king?',
      options: ['Shepherd', 'Soldier', 'Priest', 'Tax collector'],
      correctAnswer: 'Shepherd',
      verse: '1 Samuel 16:11',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-kings-8-q5',
      type: 'multiple-choice',
      question: 'David is called "a man after God\'s own":',
      options: ['Heart', 'Mind', 'Will', 'Purpose'],
      correctAnswer: 'Heart',
      verse: '1 Samuel 13:14',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-8-q6',
      type: 'true-false',
      question: 'David wrote many of the Psalms',
      options: ['True', 'False'],
      correctAnswer: 'True',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-kings-8-q7',
      type: 'multiple-choice',
      question: 'Who was David\'s best friend?',
      options: ['Jonathan', 'Solomon', 'Nathan', 'Joab'],
      correctAnswer: 'Jonathan',
      verse: '1 Samuel 18:1',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-8-q8',
      type: 'multiple-choice',
      question: 'David committed adultery with whom?',
      options: ['Bathsheba', 'Abigail', 'Michal', 'Tamar'],
      correctAnswer: 'Bathsheba',
      verse: '2 Samuel 11:4',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-8-q9',
      type: 'true-false',
      question: 'David was not allowed to build God\'s temple because he was a man of war',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '1 Chronicles 28:3',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-8-q10',
      type: 'multiple-choice',
      question: 'David made which city the capital of Israel?',
      options: ['Jerusalem', 'Bethlehem', 'Hebron', 'Jericho'],
      correctAnswer: 'Jerusalem',
      verse: '2 Samuel 5:7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-kings-8-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "David" (דָּוִד) means:',
      options: ['Beloved', 'King', 'Shepherd', 'Warrior'],
      correctAnswer: 'Beloved',
      explanation: 'David comes from "dod" (דּוֹד = beloved/uncle). God called him "my beloved" reflecting his special relationship with God.',
      verse: 'Psalm 89:20',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-kings-8-q12',
      type: 'multiple-choice',
      question: 'The Hebrew word "levav" (לֵבָב) in "man after God\'s own heart" refers to:',
      options: ['Heart/mind/will/inner being', 'Physical heart', 'Emotions only', 'Soul'],
      correctAnswer: 'Heart/mind/will/inner being',
      explanation: 'Levav encompasses the whole inner person: thoughts, will, emotions, and character - not just feelings.',
      verse: '1 Samuel 13:14',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-kings-8-q13',
      type: 'multiple-choice',
      question: 'The Hebrew word "mashiach" (מָשִׁיחַ - Messiah/Anointed) first applied to David means:',
      options: ['Anointed one (smeared with oil)', 'Chosen king', 'Holy person', 'Prophet'],
      correctAnswer: 'Anointed one (smeared with oil)',
      explanation: 'Mashiach means "anointed" - one consecrated with oil. David was God\'s anointed king, prefiguring Jesus the Messiah.',
      verse: '1 Samuel 16:13',
      difficulty: 3,
      xpReward: 25
    }
  ]
};

// APOSTLES/DISCIPLES - 8 lessons (was 4)
export const disciplesQuestionsExtended: Record<string, Question[]> = {
  'names-disciples-5': [
    {
      id: 'names-disciples-5-q1',
      type: 'multiple-choice',
      question: 'Which disciple was a tax collector before following Jesus?',
      options: ['Matthew', 'Peter', 'John', 'James'],
      correctAnswer: 'Matthew',
      verse: 'Matthew 9:9',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-disciples-5-q2',
      type: 'multiple-choice',
      question: 'What was Matthew also called?',
      options: ['Levi', 'Simon', 'Thomas', 'Thaddeus'],
      correctAnswer: 'Levi',
      verse: 'Mark 2:14',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-5-q3',
      type: 'true-false',
      question: 'Matthew wrote one of the four Gospels',
      options: ['True', 'False'],
      correctAnswer: 'True',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-disciples-5-q4',
      type: 'multiple-choice',
      question: 'Matthew\'s Gospel emphasizes Jesus as:',
      options: ['The King/Messiah', 'The Servant', 'The Son of Man', 'The Word'],
      correctAnswer: 'The King/Messiah',
      explanation: 'Matthew wrote primarily for Jewish audience',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-5-q5',
      type: 'multiple-choice',
      question: 'Tax collectors were hated because they:',
      options: ['Worked for Rome and often cheated', 'Were poor', 'Were foreigners', 'Were Pharisees'],
      correctAnswer: 'Worked for Rome and often cheated',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-5-q6',
      type: 'true-false',
      question: 'Matthew hosted a great feast for Jesus with many tax collectors',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Luke 5:29',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-5-q7',
      type: 'multiple-choice',
      question: 'How many times does Matthew quote the Old Testament?',
      options: ['Over 60 times', '10 times', '100 times', '5 times'],
      correctAnswer: 'Over 60 times',
      explanation: 'More than any other Gospel',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-disciples-5-q8',
      type: 'multiple-choice',
      question: 'Matthew includes Jesus\' teaching known as:',
      options: ['The Sermon on the Mount', 'The Olivet Discourse only', 'The Upper Room Discourse', 'The Parable of the Sower only'],
      correctAnswer: 'The Sermon on the Mount',
      verse: 'Matthew 5-7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-5-q9',
      type: 'true-false',
      question: 'Matthew immediately left everything to follow Jesus',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Matthew 9:9',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-5-q10',
      type: 'multiple-choice',
      question: 'Matthew\'s Gospel begins with:',
      options: ['Jesus\' genealogy', 'John the Baptist', 'Jesus\' birth', 'Creation'],
      correctAnswer: 'Jesus\' genealogy',
      verse: 'Matthew 1:1',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-5-q11',
      type: 'multiple-choice',
      question: 'The Greek name "Matthaios" (Ματθαῖος - Matthew) comes from Hebrew "Mattityahu" meaning:',
      options: ['Gift of YHWH', 'Tax collector', 'Follower', 'Apostle'],
      correctAnswer: 'Gift of YHWH',
      explanation: 'From "mattan" (מַתָּן = gift) and "Yahu" (יָהוּ = YHWH). Despite being a tax collector, he was God\'s gift to the church.',
      verse: 'Matthew 9:9',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-disciples-5-q12',
      type: 'multiple-choice',
      question: 'The Greek word "telones" (τελώνης) describes Matthew\'s job as:',
      options: ['Tax collector (often despised)', 'Fisherman', 'Scribe', 'Priest'],
      correctAnswer: 'Tax collector (often despised)',
      explanation: 'Telones were tax collectors for Rome, often viewed as traitors and sinners by fellow Jews. Jesus called Matthew anyway.',
      verse: 'Matthew 9:9',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-disciples-5-q13',
      type: 'multiple-choice',
      question: 'Matthew\'s Gospel emphasizes Jesus as "Christos" (Χριστός) meaning:',
      options: ['Anointed One/Messiah', 'Savior', 'Teacher', 'Lord'],
      correctAnswer: 'Anointed One/Messiah',
      explanation: 'Christos is Greek for Hebrew "Mashiach" (Messiah). Matthew wrote to Jews, proving Jesus is the promised Messiah.',
      verse: 'Matthew 1:16',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-disciples-6': [
    {
      id: 'names-disciples-6-q1',
      type: 'multiple-choice',
      question: 'Which two disciples were brothers who were fishermen?',
      options: ['Peter and Andrew', 'James and John', 'Peter and John', 'Matthew and Thomas'],
      correctAnswer: 'Peter and Andrew',
      verse: 'Matthew 4:18',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-disciples-6-q2',
      type: 'multiple-choice',
      question: 'What was Peter\'s original name?',
      options: ['Simon', 'Saul', 'Simeon', 'Samuel'],
      correctAnswer: 'Simon',
      verse: 'Matthew 4:18',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-disciples-6-q3',
      type: 'true-false',
      question: 'Peter walked on water with Jesus',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Matthew 14:29',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-6-q4',
      type: 'multiple-choice',
      question: 'What did Peter say when Jesus asked "Who do you say I am?"',
      options: ['You are the Christ, the Son of God', 'You are a prophet', 'You are Elijah', 'You are the Messiah only'],
      correctAnswer: 'You are the Christ, the Son of God',
      verse: 'Matthew 16:16',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-6-q5',
      type: 'multiple-choice',
      question: 'How many times did Peter deny Jesus?',
      options: ['3', '2', '4', '7'],
      correctAnswer: '3',
      verse: 'Matthew 26:34',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-disciples-6-q6',
      type: 'true-false',
      question: 'Peter preached the first sermon on Pentecost',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Acts 2:14',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-6-q7',
      type: 'multiple-choice',
      question: 'How many people were saved after Peter\'s Pentecost sermon?',
      options: ['About 3,000', '5,000', '1,000', '500'],
      correctAnswer: 'About 3,000',
      verse: 'Acts 2:41',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-6-q8',
      type: 'multiple-choice',
      question: 'What did Jesus tell Peter to do three times after the resurrection?',
      options: ['Feed my sheep', 'Follow me', 'Go and preach', 'Baptize believers'],
      correctAnswer: 'Feed my sheep',
      verse: 'John 21:17',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-6-q9',
      type: 'true-false',
      question: 'Peter wrote two books in the New Testament',
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: '1 Peter and 2 Peter',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-6-q10',
      type: 'multiple-choice',
      question: 'Peter raised which woman from the dead?',
      options: ['Tabitha/Dorcas', 'Mary', 'Martha', 'Elizabeth'],
      correctAnswer: 'Tabitha/Dorcas',
      verse: 'Acts 9:40',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-disciples-6-q11',
      type: 'multiple-choice',
      question: 'Jesus renamed Simon to "Petros" (Πέτρος - Peter/Cephas) meaning:',
      options: ['Rock/stone', 'Foundation', 'Leader', 'Fisherman'],
      correctAnswer: 'Rock/stone',
      explanation: 'Petros (Greek) and Cephas (Aramaic כֵּיפָא) both mean "rock." Jesus built His church on Peter\'s confession of faith.',
      verse: 'Matthew 16:18',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-disciples-6-q12',
      type: 'multiple-choice',
      question: 'Peter\'s confession "ho Christos ho huios tou Theou" (ὁ Χριστὸς ὁ υἱὸς τοῦ Θεοῦ) means:',
      options: ['The Christ, the Son of God', 'The Messiah only', 'A prophet of God', 'The Lord'],
      correctAnswer: 'The Christ, the Son of God',
      explanation: 'This profound confession declares both Jesus\' messianic role (Christos) and divine nature (Son of God).',
      verse: 'Matthew 16:16',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-disciples-6-q13',
      type: 'multiple-choice',
      question: 'Jesus told Peter "boske ta probata mou" (βόσκε τὰ πρόβατά μου) meaning:',
      options: ['Feed/shepherd my sheep', 'Follow me', 'Lead the disciples', 'Preach the gospel'],
      correctAnswer: 'Feed/shepherd my sheep',
      explanation: 'Boske means to feed/tend/shepherd. Jesus commissioned Peter to care for and lead the church as a shepherd.',
      verse: 'John 21:17',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-disciples-7': [
    {
      id: 'names-disciples-7-q1',
      type: 'multiple-choice',
      question: 'Which disciple is known as "the beloved disciple"?',
      options: ['John', 'Peter', 'James', 'Andrew'],
      correctAnswer: 'John',
      verse: 'John 13:23',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-7-q2',
      type: 'multiple-choice',
      question: 'Who was John\'s brother?',
      options: ['James', 'Peter', 'Andrew', 'Philip'],
      correctAnswer: 'James',
      verse: 'Matthew 4:21',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-disciples-7-q3',
      type: 'true-false',
      question: 'John wrote five books of the New Testament',
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Gospel of John, 1-3 John, Revelation',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-7-q4',
      type: 'multiple-choice',
      question: 'What nickname did Jesus give James and John?',
      options: ['Sons of Thunder', 'Rock', 'The Twins', 'Beloved'],
      correctAnswer: 'Sons of Thunder',
      verse: 'Mark 3:17',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-7-q5',
      type: 'multiple-choice',
      question: 'John wrote the book of Revelation while exiled on which island?',
      options: ['Patmos', 'Cyprus', 'Crete', 'Malta'],
      correctAnswer: 'Patmos',
      verse: 'Revelation 1:9',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-7-q6',
      type: 'true-false',
      question: 'John was present at Jesus\' transfiguration',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Matthew 17:1',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-7-q7',
      type: 'multiple-choice',
      question: 'John\'s Gospel begins with which famous words?',
      options: ['In the beginning was the Word', 'The book of the genealogy', 'In those days Caesar Augustus', 'The beginning of the gospel'],
      correctAnswer: 'In the beginning was the Word',
      verse: 'John 1:1',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-7-q8',
      type: 'multiple-choice',
      question: 'Which disciple did Jesus entrust his mother Mary to?',
      options: ['John', 'Peter', 'James', 'Andrew'],
      correctAnswer: 'John',
      verse: 'John 19:26-27',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-7-q9',
      type: 'true-false',
      question: 'John was one of the three disciples in Jesus\' inner circle',
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Peter, James, and John',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-7-q10',
      type: 'multiple-choice',
      question: 'John lived longer than all the other apostles and died of:',
      options: ['Old age (natural causes)', 'Martyrdom', 'Crucifixion', 'Stoning'],
      correctAnswer: 'Old age (natural causes)',
      explanation: 'John was the only apostle not martyred',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-disciples-7-q11',
      type: 'multiple-choice',
      question: 'The Greek word "agape" (ἀγάπη) used to describe John as the "beloved disciple" means:',
      options: ['Sacrificial, unconditional love', 'Friendship love', 'Romantic love', 'Family love'],
      correctAnswer: 'Sacrificial, unconditional love',
      explanation: 'Agape is the highest form of love - God\'s selfless, unconditional love that John both received and taught.',
      verse: 'John 13:23',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-disciples-7-q12',
      type: 'multiple-choice',
      question: 'John\'s Gospel uses "logos" (λόγος - Word) for Jesus. This term means:',
      options: ['Word/Reason/Divine expression', 'Prophet', 'Teacher', 'Messenger'],
      correctAnswer: 'Word/Reason/Divine expression',
      explanation: 'Logos means word, reason, and divine communication - Jesus is God\'s ultimate self-expression and revelation.',
      verse: 'John 1:1',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-disciples-8': [
    {
      id: 'names-disciples-8-q1',
      type: 'multiple-choice',
      question: 'Which disciple doubted Jesus\' resurrection until he saw Him?',
      options: ['Thomas', 'Peter', 'Philip', 'Bartholomew'],
      correctAnswer: 'Thomas',
      verse: 'John 20:25',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-disciples-8-q2',
      type: 'multiple-choice',
      question: 'What did Thomas say he needed to see to believe?',
      options: ['The nail marks and spear wound', 'Jesus\' face', 'An angel', 'A miracle'],
      correctAnswer: 'The nail marks and spear wound',
      verse: 'John 20:25',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-8-q3',
      type: 'true-false',
      question: 'Thomas is also called Didymus',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'John 20:24',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-8-q4',
      type: 'multiple-choice',
      question: 'What did Thomas say when Jesus appeared to him?',
      options: ['My Lord and my God', 'I believe', 'Forgive me', 'You are alive'],
      correctAnswer: 'My Lord and my God',
      verse: 'John 20:28',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-8-q5',
      type: 'multiple-choice',
      question: 'Jesus said, "Blessed are those who have not seen and yet have:',
      options: ['Believed', 'Followed', 'Obeyed', 'Loved'],
      correctAnswer: 'Believed',
      verse: 'John 20:29',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-8-q6',
      type: 'true-false',
      question: 'Thomas was willing to die with Jesus when going to Lazarus',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'John 11:16',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-disciples-8-q7',
      type: 'multiple-choice',
      question: 'Who was the disciple that betrayed Jesus?',
      options: ['Judas Iscariot', 'Thomas', 'Peter', 'Matthew'],
      correctAnswer: 'Judas Iscariot',
      verse: 'Matthew 26:14-16',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-disciples-8-q8',
      type: 'multiple-choice',
      question: 'For how much money did Judas betray Jesus?',
      options: ['30 pieces of silver', '20 pieces of gold', '40 pieces of silver', '50 pieces of gold'],
      correctAnswer: '30 pieces of silver',
      verse: 'Matthew 26:15',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-8-q9',
      type: 'true-false',
      question: 'Judas later regretted betraying Jesus',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Matthew 27:3',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-disciples-8-q10',
      type: 'multiple-choice',
      question: 'Who replaced Judas as the twelfth apostle?',
      options: ['Matthias', 'Mark', 'Luke', 'Barnabas'],
      correctAnswer: 'Matthias',
      verse: 'Acts 1:26',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-disciples-8-q11',
      type: 'multiple-choice',
      question: 'Thomas\'s Aramaic name "Tau\'ma" (תאומא) and Greek "Didymus" (Δίδυμος) both mean:',
      options: ['Twin', 'Doubter', 'Believer', 'Faithful'],
      correctAnswer: 'Twin',
      explanation: 'Both Tau\'ma (Aramaic) and Didymus (Greek) mean "twin" - not related to his doubt but his given name.',
      verse: 'John 20:24',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-disciples-8-q12',
      type: 'multiple-choice',
      question: 'When Thomas said "My Lord and my God" (ὁ Κύριός μου καὶ ὁ Θεός μου), he used "Kyrios" meaning:',
      options: ['Lord/Master/YHWH', 'Teacher', 'Friend', 'King'],
      correctAnswer: 'Lord/Master/YHWH',
      explanation: 'Kyrios (κύριος) is the Greek word for LORD - the name of God (YHWH). Thomas declared Jesus\' full divinity.',
      verse: 'John 20:28',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-disciples-8-q13',
      type: 'multiple-choice',
      question: 'The Greek word "pistis" (πίστις) in "blessed are those who believe" means:',
      options: ['Faith/trust/conviction', 'Sight', 'Knowledge', 'Hope'],
      correctAnswer: 'Faith/trust/conviction',
      explanation: 'Pistis is more than mental belief - it\'s confident trust and commitment to Christ without requiring physical proof.',
      verse: 'John 20:29',
      difficulty: 3,
      xpReward: 25
    }
  ]
};

// WOMEN - 8 lessons (was 4)
export const womenQuestionsExtended: Record<string, Question[]> = {
  'names-women-5': [
    {
      id: 'names-women-5-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'women',
      question: 'Who was the first woman in the Bible?',
      options: ['Eve', 'Sarah', 'Mary', 'Ruth'],
      correctAnswer: 'Eve',
      verse: 'Genesis 3:20',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-women-5-q2',
      type: 'multiple-choice',
      question: 'What did God make Eve from?',
      options: ['Adam\'s rib', 'Dust', 'Clay', 'Nothing'],
      correctAnswer: 'Adam\'s rib',
      verse: 'Genesis 2:22',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-women-5-q3',
      type: 'true-false',
      question: 'Eve was deceived by the serpent',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 3:13',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-women-5-q4',
      type: 'multiple-choice',
      question: 'Who were Eve\'s first two sons?',
      options: ['Cain and Abel', 'Seth and Enosh', 'Jacob and Esau', 'Isaac and Ishmael'],
      correctAnswer: 'Cain and Abel',
      verse: 'Genesis 4:1-2',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-women-5-q5',
      type: 'multiple-choice',
      question: 'What does "Eve" mean?',
      options: ['Mother of all living', 'First woman', 'Helper', 'Beautiful'],
      correctAnswer: 'Mother of all living',
      verse: 'Genesis 3:20',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-5-q6',
      type: 'true-false',
      question: 'Sarah laughed when told she would have a baby in old age',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 18:12',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-5-q7',
      type: 'multiple-choice',
      question: 'How old was Sarah when Isaac was born?',
      options: ['90', '80', '70', '100'],
      correctAnswer: '90',
      verse: 'Genesis 17:17',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-5-q8',
      type: 'multiple-choice',
      question: 'What was Sarah\'s original name?',
      options: ['Sarai', 'Salome', 'Susanna', 'Sapphira'],
      correctAnswer: 'Sarai',
      verse: 'Genesis 17:15',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-5-q9',
      type: 'true-false',
      question: 'Sarah was buried in the cave of Machpelah',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 23:19',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-5-q10',
      type: 'multiple-choice',
      question: 'Sarah is praised in the New Testament as an example of:',
      options: ['Faith and submission', 'Beauty', 'Wealth', 'Wisdom'],
      correctAnswer: 'Faith and submission',
      verse: '1 Peter 3:5-6',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-5-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Sarah" (שָׂרָה) means:',
      options: ['Princess/noblewoman', 'Mother', 'Beautiful', 'Faithful'],
      correctAnswer: 'Princess/noblewoman',
      explanation: 'God changed her name from Sarai to Sarah (princess), signifying she would be mother of nations and kings.',
      verse: 'Genesis 17:15',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-women-5-q12',
      type: 'multiple-choice',
      question: 'Sarah\'s laughter ("tzachaq" צָחַק) when hearing she\'d have a son led to naming him:',
      options: ['Isaac (Yitzchak - he laughs)', 'Abraham', 'Ishmael', 'Jacob'],
      correctAnswer: 'Isaac (Yitzchak - he laughs)',
      explanation: 'Yitzchak (יִצְחָק) means "he will laugh." Sarah\'s doubt turned to joy - God had the last laugh!',
      verse: 'Genesis 21:6',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-women-5-q13',
      type: 'multiple-choice',
      question: 'The Hebrew "em kol chai" (אֵם כָּל־חָי) describes Eve as:',
      options: ['Mother of all living', 'First woman', 'Adam\'s helper', 'Garden keeper'],
      correctAnswer: 'Mother of all living',
      explanation: 'Em = mother, kol = all, chai = living. Eve is the mother of all humanity, showing God\'s plan for life.',
      verse: 'Genesis 3:20',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-women-6': [
    {
      id: 'names-women-6-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'women',
      question: 'Which woman was a prophetess and judge of Israel?',
      options: ['Deborah', 'Ruth', 'Esther', 'Hannah'],
      correctAnswer: 'Deborah',
      verse: 'Judges 4:4',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-6-q2',
      type: 'multiple-choice',
      question: 'Deborah called which man to lead Israel\'s army?',
      options: ['Barak', 'Gideon', 'Samson', 'Joshua'],
      correctAnswer: 'Barak',
      verse: 'Judges 4:6',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-6-q3',
      type: 'true-false',
      question: 'Deborah went into battle with Barak',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Judges 4:9',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-6-q4',
      type: 'multiple-choice',
      question: 'Which woman killed Sisera with a tent peg?',
      options: ['Jael', 'Deborah', 'Ruth', 'Rahab'],
      correctAnswer: 'Jael',
      verse: 'Judges 4:21',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-6-q5',
      type: 'multiple-choice',
      question: 'Where did Deborah hold court?',
      options: ['Under a palm tree', 'In the temple', 'At the city gate', 'In her house'],
      correctAnswer: 'Under a palm tree',
      verse: 'Judges 4:5',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-6-q6',
      type: 'true-false',
      question: 'Deborah sang a victory song after the battle',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Judges 5:1',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-6-q7',
      type: 'multiple-choice',
      question: 'After Deborah\'s victory, Israel had peace for how many years?',
      options: ['40', '20', '30', '50'],
      correctAnswer: '40',
      verse: 'Judges 5:31',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-women-6-q8',
      type: 'multiple-choice',
      question: 'Deborah was married to whom?',
      options: ['Lappidoth', 'Barak', 'Heber', 'Boaz'],
      correctAnswer: 'Lappidoth',
      verse: 'Judges 4:4',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-women-6-q9',
      type: 'true-false',
      question: 'Deborah is the only female judge mentioned in the Bible',
      options: ['True', 'False'],
      correctAnswer: 'True',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-6-q10',
      type: 'multiple-choice',
      question: 'Deborah described herself as a:',
      options: ['Mother in Israel', 'Prophetess only', 'Judge only', 'Warrior'],
      correctAnswer: 'Mother in Israel',
      verse: 'Judges 5:7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-6-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Devorah" (דְּבוֹרָה - Deborah) means:',
      options: ['Bee/honeybee', 'Prophetess', 'Judge', 'Leader'],
      correctAnswer: 'Bee/honeybee',
      explanation: 'Devorah means "bee" - symbolizing industriousness and leadership. Like bees, she worked diligently for Israel.',
      verse: 'Judges 4:4',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-women-6-q12',
      type: 'multiple-choice',
      question: 'Deborah called herself "em b\'Yisrael" (אֵם בְּיִשְׂרָאֵל) meaning:',
      options: ['Mother in Israel', 'Leader of Israel', 'Judge of Israel', 'Prophet of Israel'],
      correctAnswer: 'Mother in Israel',
      explanation: 'Em = mother. She cared for Israel with maternal wisdom and strength, combining leadership with nurturing care.',
      verse: 'Judges 5:7',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-women-6-q13',
      type: 'multiple-choice',
      question: 'The Hebrew word "neviah" (נְבִיאָה) describes Deborah as:',
      options: ['Prophetess (female prophet)', 'Queen', 'Warrior', 'Priest'],
      correctAnswer: 'Prophetess (female prophet)',
      explanation: 'Neviah is the feminine form of "navi" (prophet). Deborah spoke God\'s word with divine authority.',
      verse: 'Judges 4:4',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-women-7': [
    {
      id: 'names-women-7-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'women',
      question: 'Which woman became queen and saved the Jewish people?',
      options: ['Esther', 'Ruth', 'Mary', 'Deborah'],
      correctAnswer: 'Esther',
      verse: 'Esther 2:17',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-women-7-q2',
      type: 'multiple-choice',
      question: 'What was Esther\'s Hebrew name?',
      options: ['Hadassah', 'Hannah', 'Sarah', 'Rebecca'],
      correctAnswer: 'Hadassah',
      verse: 'Esther 2:7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-7-q3',
      type: 'true-false',
      question: 'Esther risked her life by approaching the king uninvited',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Esther 4:16',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-7-q4',
      type: 'multiple-choice',
      question: 'Who raised Esther?',
      options: ['Mordecai', 'King Xerxes', 'Haman', 'Her parents'],
      correctAnswer: 'Mordecai',
      verse: 'Esther 2:7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-7-q5',
      type: 'multiple-choice',
      question: 'Who plotted to destroy all the Jews?',
      options: ['Haman', 'The king', 'Mordecai', 'Vashti'],
      correctAnswer: 'Haman',
      verse: 'Esther 3:6',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-7-q6',
      type: 'true-false',
      question: 'Esther held two banquets for the king and Haman',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Esther 5:4-8',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-7-q7',
      type: 'multiple-choice',
      question: 'Mordecai told Esther she came to the kingdom for:',
      options: ['Such a time as this', 'Her beauty', 'God\'s glory', 'The king\'s pleasure'],
      correctAnswer: 'Such a time as this',
      verse: 'Esther 4:14',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-7-q8',
      type: 'multiple-choice',
      question: 'How many days did Esther ask the Jews to fast?',
      options: ['3', '7', '1', '40'],
      correctAnswer: '3',
      verse: 'Esther 4:16',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-7-q9',
      type: 'true-false',
      question: 'The book of Esther never mentions God\'s name',
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Despite this, God\'s providence is clear throughout',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-women-7-q10',
      type: 'multiple-choice',
      question: 'The Jewish feast of Purim celebrates:',
      options: ['Esther\'s deliverance of the Jews', 'Passover', 'Pentecost', 'Tabernacles'],
      correctAnswer: 'Esther\'s deliverance of the Jews',
      verse: 'Esther 9:26',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-7-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Hadassah" (הֲדַסָּה - Esther\'s Hebrew name) means:',
      options: ['Myrtle tree', 'Star', 'Beautiful', 'Queen'],
      correctAnswer: 'Myrtle tree',
      explanation: 'Hadassah means "myrtle" while Esther (Persian name) means "star". She had both Hebrew and Persian identities.',
      verse: 'Esther 2:7',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-women-7-q12',
      type: 'multiple-choice',
      question: 'The phrase "for such a time as this" in Hebrew uses "ka\'et kazot" (כָּעֵת כָּזֹאת) meaning:',
      options: ['At a time like this/for this very moment', 'Forever', 'In the future', 'Yesterday'],
      correctAnswer: 'At a time like this/for this very moment',
      explanation: 'This phrase emphasizes divine timing and purpose - Esther was positioned by God for this exact moment in history.',
      verse: 'Esther 4:14',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-women-8': [
    {
      id: 'names-women-8-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'women',
      question: 'Which prophetess recognized baby Jesus at the temple?',
      options: ['Anna', 'Mary', 'Elizabeth', 'Mary Magdalene'],
      correctAnswer: 'Anna',
      verse: 'Luke 2:36-38',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-8-q2',
      type: 'multiple-choice',
      question: 'How old was Anna when she saw baby Jesus?',
      options: ['84', '60', '90', '100'],
      correctAnswer: '84',
      verse: 'Luke 2:37',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-8-q3',
      type: 'true-false',
      question: 'Anna was a widow who served in the temple with prayer and fasting',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Luke 2:37',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-8-q4',
      type: 'multiple-choice',
      question: 'Which woman was healed from seven demons?',
      options: ['Mary Magdalene', 'Mary mother of Jesus', 'Martha', 'Joanna'],
      correctAnswer: 'Mary Magdalene',
      verse: 'Mark 16:9',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-8-q5',
      type: 'multiple-choice',
      question: 'Who was the first person to see the risen Jesus?',
      options: ['Mary Magdalene', 'Peter', 'John', 'Mary mother of Jesus'],
      correctAnswer: 'Mary Magdalene',
      verse: 'John 20:14-16',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-8-q6',
      type: 'true-false',
      question: 'Mary Magdalene was present at Jesus\' crucifixion',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'John 19:25',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-8-q7',
      type: 'multiple-choice',
      question: 'Which woman broke an alabaster jar of perfume on Jesus?',
      options: ['An unnamed sinful woman', 'Mary Magdalene', 'Martha', 'Mary mother of Jesus'],
      correctAnswer: 'An unnamed sinful woman',
      verse: 'Luke 7:37-38',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-8-q8',
      type: 'multiple-choice',
      question: 'Who were the two sisters that Jesus visited in Bethany?',
      options: ['Mary and Martha', 'Ruth and Naomi', 'Rachel and Leah', 'Lois and Eunice'],
      correctAnswer: 'Mary and Martha',
      verse: 'Luke 10:38-39',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-women-8-q9',
      type: 'true-false',
      question: 'Martha complained that Mary wasn\'t helping with serving',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Luke 10:40',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-8-q10',
      type: 'multiple-choice',
      question: 'Jesus said Mary had chosen:',
      options: ['The good portion', 'The better way', 'To follow Him', 'Wisdom'],
      correctAnswer: 'The good portion',
      verse: 'Luke 10:42',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-women-8-q11',
      type: 'multiple-choice',
      question: 'The Greek name "Magdalene" (Μαγδαληνή) means she was from:',
      options: ['Magdala (tower)', 'Bethany', 'Jerusalem', 'Nazareth'],
      correctAnswer: 'Magdala (tower)',
      explanation: 'Magdalene identifies her hometown of Magdala (meaning "tower"), a fishing village on the Sea of Galilee.',
      verse: 'Luke 8:2',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-women-8-q12',
      type: 'multiple-choice',
      question: 'When Jesus said "Rabbouni" (ῥαββουνί) to Mary, this Aramaic term means:',
      options: ['My great master/teacher', 'Friend', 'Follower', 'Prophet'],
      correctAnswer: 'My great master/teacher',
      explanation: 'Rabbouni is an intensified, more intimate form of "Rabbi" - showing Mary\'s deep reverence and personal relationship with Jesus.',
      verse: 'John 20:16',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-women-8-q13',
      type: 'multiple-choice',
      question: 'The Greek word "apostolos" (ἀπόστολος) meaning "sent one" applies to Mary Magdalene as:',
      options: ['Apostle to the apostles', 'Disciple', 'Prophet', 'Witness only'],
      correctAnswer: 'Apostle to the apostles',
      explanation: 'Early church fathers called Mary "apostle to the apostles" because she was sent by Jesus to announce His resurrection.',
      verse: 'John 20:17-18',
      difficulty: 3,
      xpReward: 25
    }
  ]
};

// PATRIARCHS - 8 lessons (was 4)
export const patriarchsQuestionsExtended: Record<string, Question[]> = {
  'names-patriarchs-5': [
    {
      id: 'names-patriarchs-5-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'patriarchs',
      question: 'Who built an ark to save his family from the flood?',
      options: ['Noah', 'Abraham', 'Moses', 'Adam'],
      correctAnswer: 'Noah',
      verse: 'Genesis 6:14',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-5-q2',
      type: 'multiple-choice',
      question: 'How many days did it rain during the flood?',
      options: ['40', '7', '100', '30'],
      correctAnswer: '40',
      verse: 'Genesis 7:12',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-5-q3',
      type: 'true-false',
      question: 'Noah sent out a dove to see if the water had receded',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 8:8',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-5-q4',
      type: 'multiple-choice',
      question: 'What sign did God give Noah that He would never flood the earth again?',
      options: ['A rainbow', 'A star', 'Thunder', 'An angel'],
      correctAnswer: 'A rainbow',
      verse: 'Genesis 9:13',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-5-q5',
      type: 'multiple-choice',
      question: 'How many sons did Noah have?',
      options: ['3', '2', '4', '12'],
      correctAnswer: '3',
      verse: 'Genesis 6:10',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-5-q6',
      type: 'true-false',
      question: 'Noah was 600 years old when the flood came',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 7:6',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-5-q7',
      type: 'multiple-choice',
      question: 'What were the names of Noah\'s three sons?',
      options: ['Shem, Ham, Japheth', 'Cain, Abel, Seth', 'Isaac, Jacob, Esau', 'Abraham, Isaac, Jacob'],
      correctAnswer: 'Shem, Ham, Japheth',
      verse: 'Genesis 6:10',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-5-q8',
      type: 'multiple-choice',
      question: 'Noah is described as:',
      options: ['Righteous and blameless', 'The strongest man', 'A prophet', 'A king'],
      correctAnswer: 'Righteous and blameless',
      verse: 'Genesis 6:9',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-5-q9',
      type: 'true-false',
      question: 'Noah planted a vineyard after the flood',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 9:20',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-5-q10',
      type: 'multiple-choice',
      question: 'Noah is listed in the "Hall of Faith" in:',
      options: ['Hebrews 11', 'Romans 8', 'James 2', 'Revelation 21'],
      correctAnswer: 'Hebrews 11',
      verse: 'Hebrews 11:7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-5-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Noach" (נֹחַ - Noah) means:',
      options: ['Rest/comfort', 'Righteous', 'Builder', 'Faithful'],
      correctAnswer: 'Rest/comfort',
      explanation: 'From "nuach" (נוּחַ = to rest). His father said "He will comfort us" (Gen 5:29) from the curse on the ground.',
      verse: 'Genesis 5:29',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-patriarchs-5-q12',
      type: 'multiple-choice',
      question: 'The Hebrew "tzaddik" (צַדִּיק - righteous) describes Noah as:',
      options: ['Righteous/just man', 'Perfect man', 'Holy man', 'Good man'],
      correctAnswer: 'Righteous/just man',
      explanation: 'Tzaddik means one who lives righteously before God. Noah "walked with God" in a wicked generation.',
      verse: 'Genesis 6:9',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-patriarchs-5-q13',
      type: 'multiple-choice',
      question: 'God made a "brit" (בְּרִית - covenant) with Noah, symbolized by:',
      options: ['Rainbow', 'Dove', 'Olive branch', 'Ark'],
      correctAnswer: 'Rainbow',
      explanation: 'Brit means covenant/agreement. The rainbow is God\'s sign He will never again flood the whole earth.',
      verse: 'Genesis 9:13',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-patriarchs-6': [
    {
      id: 'names-patriarchs-6-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'patriarchs',
      question: 'Isaac was to be sacrificed on which mountain?',
      options: ['Mount Moriah', 'Mount Sinai', 'Mount Nebo', 'Mount Carmel'],
      correctAnswer: 'Mount Moriah',
      verse: 'Genesis 22:2',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-6-q2',
      type: 'multiple-choice',
      question: 'What did God provide instead of Isaac as a sacrifice?',
      options: ['A ram', 'A lamb', 'A dove', 'A goat'],
      correctAnswer: 'A ram',
      verse: 'Genesis 22:13',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-6-q3',
      type: 'true-false',
      question: 'Isaac married Rebekah',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 24:67',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-6-q4',
      type: 'multiple-choice',
      question: 'Who were Isaac\'s twin sons?',
      options: ['Jacob and Esau', 'Cain and Abel', 'Joseph and Benjamin', 'Moses and Aaron'],
      correctAnswer: 'Jacob and Esau',
      verse: 'Genesis 25:25-26',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-6-q5',
      type: 'multiple-choice',
      question: 'What does "Isaac" mean?',
      options: ['Laughter', 'God protects', 'Gift', 'Promised one'],
      correctAnswer: 'Laughter',
      verse: 'Genesis 21:6',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-6-q6',
      type: 'true-false',
      question: 'Isaac dug many wells',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 26:18-22',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-6-q7',
      type: 'multiple-choice',
      question: 'Isaac lived to be how old?',
      options: ['180', '120', '150', '200'],
      correctAnswer: '180',
      verse: 'Genesis 35:28',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-patriarchs-6-q8',
      type: 'multiple-choice',
      question: 'How did Rebekah become Isaac\'s wife?',
      options: ['Abraham\'s servant found her', 'Isaac found her himself', 'God sent an angel', 'His mother chose her'],
      correctAnswer: 'Abraham\'s servant found her',
      verse: 'Genesis 24:1-4',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-6-q9',
      type: 'true-false',
      question: 'Isaac was the child of promise to Abraham',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 21:12',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-6-q10',
      type: 'multiple-choice',
      question: 'Isaac showed great faith by:',
      options: ['Trusting his father even unto death', 'Building an altar', 'Leading worship', 'Preaching'],
      correctAnswer: 'Trusting his father even unto death',
      verse: 'Genesis 22:9',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-6-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Yitzchak" (יִצְחָק - Isaac) means:',
      options: ['He will laugh/he laughs', 'God provides', 'Promised one', 'Beloved'],
      correctAnswer: 'He will laugh/he laughs',
      explanation: 'From "tzachaq" (צָחַק = to laugh). Both Abraham and Sarah laughed at God\'s promise, then laughed with joy!',
      verse: 'Genesis 21:6',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-patriarchs-6-q12',
      type: 'multiple-choice',
      question: 'The "Akedah" (עֲקֵדָה - binding of Isaac) refers to:',
      options: ['Abraham binding Isaac for sacrifice', 'Isaac\'s birth', 'Isaac\'s marriage', 'Isaac\'s blessing'],
      correctAnswer: 'Abraham binding Isaac for sacrifice',
      explanation: 'Akedah means "binding." This tests Abraham\'s faith and prefigures God\'s sacrifice of His Son Jesus.',
      verse: 'Genesis 22:9',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-patriarchs-6-q13',
      type: 'multiple-choice',
      question: 'God provided a ram, and Abraham named the place "YHWH Yireh" (יְהוָה יִרְאֶה) meaning:',
      options: ['The LORD will provide', 'The LORD is here', 'The LORD saves', 'The LORD sees'],
      correctAnswer: 'The LORD will provide',
      explanation: 'From "ra\'ah" (רָאָה = to see/provide). "On the mountain of the LORD it will be provided" (Gen 22:14).',
      verse: 'Genesis 22:14',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-patriarchs-7': [
    {
      id: 'names-patriarchs-7-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'patriarchs',
      question: 'Jacob tricked his father to get whose blessing?',
      options: ['Esau\'s', 'Isaac\'s', 'Abraham\'s', 'Joseph\'s'],
      correctAnswer: 'Esau\'s',
      verse: 'Genesis 27:36',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-7-q2',
      type: 'multiple-choice',
      question: 'What did Jacob see in his dream at Bethel?',
      options: ['A ladder to heaven', 'An angel', 'A burning bush', 'The promised land'],
      correctAnswer: 'A ladder to heaven',
      verse: 'Genesis 28:12',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-7-q3',
      type: 'true-false',
      question: 'Jacob wrestled with God and was renamed Israel',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 32:28',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-7-q4',
      type: 'multiple-choice',
      question: 'How many sons did Jacob have?',
      options: ['12', '10', '7', '13'],
      correctAnswer: '12',
      verse: 'Genesis 35:22',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-7-q5',
      type: 'multiple-choice',
      question: 'Who was Jacob\'s favorite son?',
      options: ['Joseph', 'Benjamin', 'Judah', 'Reuben'],
      correctAnswer: 'Joseph',
      verse: 'Genesis 37:3',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-7-q6',
      type: 'true-false',
      question: 'Jacob worked 14 years to marry Rachel',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 29:27-30',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-7-q7',
      type: 'multiple-choice',
      question: 'What does "Israel" mean?',
      options: ['He struggles with God', 'Prince of peace', 'Father of nations', 'God\'s chosen'],
      correctAnswer: 'He struggles with God',
      verse: 'Genesis 32:28',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-7-q8',
      type: 'multiple-choice',
      question: 'Where did Jacob die?',
      options: ['Egypt', 'Canaan', 'Bethel', 'Haran'],
      correctAnswer: 'Egypt',
      verse: 'Genesis 49:33',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-7-q9',
      type: 'true-false',
      question: 'Jacob was buried in the promised land',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 50:13',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-7-q10',
      type: 'multiple-choice',
      question: 'Jacob\'s twelve sons became:',
      options: ['The twelve tribes of Israel', 'The twelve apostles', 'The twelve judges', 'The twelve prophets'],
      correctAnswer: 'The twelve tribes of Israel',
      verse: 'Genesis 49:28',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-7-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Ya\'akov" (יַעֲקֹב - Jacob) comes from "akev" meaning:',
      options: ['Heel/to supplant', 'Wrestler', 'Deceiver', 'Chosen'],
      correctAnswer: 'Heel/to supplant',
      explanation: 'Jacob held Esau\'s heel at birth. The name relates to "heel" and "to supplant" - foreshadowing his life story.',
      verse: 'Genesis 25:26',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-patriarchs-7-q12',
      type: 'multiple-choice',
      question: 'God renamed Jacob "Yisrael" (יִשְׂרָאֵל - Israel) meaning:',
      options: ['He who struggles/wrestles with God', 'God\'s chosen', 'God\'s prince', 'God\'s servant'],
      correctAnswer: 'He who struggles/wrestles with God',
      explanation: 'From "sarah" (שָׂרָה = to struggle/contend) and "El" (אֵל = God). Israel means "one who strives with God."',
      verse: 'Genesis 32:28',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-patriarchs-8': [
    {
      id: 'names-patriarchs-8-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'patriarchs',
      question: 'Who was sold into slavery by his brothers?',
      options: ['Joseph', 'Benjamin', 'Jacob', 'Moses'],
      correctAnswer: 'Joseph',
      verse: 'Genesis 37:28',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-8-q2',
      type: 'multiple-choice',
      question: 'What special gift did Jacob give Joseph?',
      options: ['A colorful coat', 'A ring', 'Land', 'Sheep'],
      correctAnswer: 'A colorful coat',
      verse: 'Genesis 37:3',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-8-q3',
      type: 'true-false',
      question: 'Joseph could interpret dreams',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 40:8',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-8-q4',
      type: 'multiple-choice',
      question: 'Joseph became second in command in which country?',
      options: ['Egypt', 'Babylon', 'Assyria', 'Persia'],
      correctAnswer: 'Egypt',
      verse: 'Genesis 41:41',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-patriarchs-8-q5',
      type: 'multiple-choice',
      question: 'Pharaoh\'s dream predicted how many years of famine?',
      options: ['7', '3', '10', '40'],
      correctAnswer: '7',
      verse: 'Genesis 41:27',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-8-q6',
      type: 'true-false',
      question: 'Joseph forgave his brothers for selling him',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 50:17-21',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-8-q7',
      type: 'multiple-choice',
      question: 'Joseph said to his brothers: "You meant evil, but God meant it for:',
      options: ['Good', 'Testing', 'Glory', 'Judgment'],
      correctAnswer: 'Good',
      verse: 'Genesis 50:20',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-8-q8',
      type: 'multiple-choice',
      question: 'Who did Joseph marry in Egypt?',
      options: ['Asenath', 'Zipporah', 'Rachel', 'Miriam'],
      correctAnswer: 'Asenath',
      verse: 'Genesis 41:45',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-patriarchs-8-q9',
      type: 'true-false',
      question: 'Joseph lived to be 110 years old',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Genesis 50:26',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-8-q10',
      type: 'multiple-choice',
      question: 'Joseph had two sons named:',
      options: ['Manasseh and Ephraim', 'Reuben and Simeon', 'Dan and Naphtali', 'Gad and Asher'],
      correctAnswer: 'Manasseh and Ephraim',
      verse: 'Genesis 41:51-52',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-patriarchs-8-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Yosef" (יוֹסֵף - Joseph) means:',
      options: ['He will add/increase', 'Dreamer', 'Beloved', 'Faithful'],
      correctAnswer: 'He will add/increase',
      explanation: 'From "yasaf" (יָסַף = to add/increase). Rachel named him this, hoping God would add another son (Benjamin).',
      verse: 'Genesis 30:24',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-patriarchs-8-q12',
      type: 'multiple-choice',
      question: 'Joseph\'s Egyptian name "Zaphenath-Paneah" (צָפְנַת פַּעְנֵחַ) likely means:',
      options: ['God speaks and he lives', 'Interpreter of dreams', 'Second to Pharaoh', 'Wise ruler'],
      correctAnswer: 'God speaks and he lives',
      explanation: 'Though debated, this Egyptian name probably means "the god speaks and he lives" - recognizing divine wisdom.',
      verse: 'Genesis 41:45',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-patriarchs-8-q13',
      type: 'multiple-choice',
      question: 'The Hebrew phrase "atem chashavtem ra\'ah" (אַתֶּם חֲשַׁבְתֶּם רָעָה) in Joseph\'s words means:',
      options: ['You intended evil', 'You betrayed me', 'You sinned', 'You forgot me'],
      correctAnswer: 'You intended evil',
      explanation: '"But as for you, you intended evil against me, but God intended it for good" (Gen 50:20) - showing divine sovereignty.',
      verse: 'Genesis 50:20',
      difficulty: 3,
      xpReward: 25
    }
  ]
};

// JUDGES - 8 lessons (was 4)
export const judgesQuestionsExtended: Record<string, Question[]> = {
  'names-judges-5': [
    {
      id: 'names-judges-5-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'judges',
      question: 'Which judge defeated an army with only 300 men?',
      options: ['Gideon', 'Samson', 'Deborah', 'Joshua'],
      correctAnswer: 'Gideon',
      verse: 'Judges 7:7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-5-q2',
      type: 'multiple-choice',
      question: 'What weapons did Gideon\'s 300 men use?',
      options: ['Trumpets, jars, and torches', 'Swords and shields', 'Bows and arrows', 'Slings and stones'],
      correctAnswer: 'Trumpets, jars, and torches',
      verse: 'Judges 7:16',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-5-q3',
      type: 'true-false',
      question: 'Gideon asked God for a sign using a fleece',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Judges 6:36-40',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-5-q4',
      type: 'multiple-choice',
      question: 'What was Gideon doing when the angel appeared to him?',
      options: ['Threshing wheat', 'Tending sheep', 'Praying', 'Fighting'],
      correctAnswer: 'Threshing wheat',
      verse: 'Judges 6:11',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-5-q5',
      type: 'multiple-choice',
      question: 'Gideon tore down the altar of which false god?',
      options: ['Baal', 'Dagon', 'Molech', 'Asherah only'],
      correctAnswer: 'Baal',
      verse: 'Judges 6:25',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-5-q6',
      type: 'true-false',
      question: 'The people wanted to make Gideon their king',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Judges 8:22',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-5-q7',
      type: 'multiple-choice',
      question: 'How did God reduce Gideon\'s army from 32,000 to 300?',
      options: ['By how they drank water', 'By their age', 'By their strength', 'By lot'],
      correctAnswer: 'By how they drank water',
      verse: 'Judges 7:5-7',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-5-q8',
      type: 'multiple-choice',
      question: 'What other name was Gideon called?',
      options: ['Jerubbaal', 'Jephthah', 'Joel', 'Jesse'],
      correctAnswer: 'Jerubbaal',
      verse: 'Judges 6:32',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-judges-5-q9',
      type: 'true-false',
      question: 'Gideon refused to be king because God was their king',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Judges 8:23',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-5-q10',
      type: 'multiple-choice',
      question: 'Which enemy nation did Gideon defeat?',
      options: ['Midianites', 'Philistines', 'Moabites', 'Ammonites'],
      correctAnswer: 'Midianites',
      verse: 'Judges 7:25',
      difficulty: 2,
      xpReward: 15
    }
  ],

  'names-judges-6': [
    {
      id: 'names-judges-6-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'judges',
      question: 'Which judge had supernatural strength?',
      options: ['Samson', 'Gideon', 'Jephthah', 'Othniel'],
      correctAnswer: 'Samson',
      verse: 'Judges 16:17',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-judges-6-q2',
      type: 'multiple-choice',
      question: 'What was the source of Samson\'s strength?',
      options: ['His uncut hair', 'His muscles', 'His prayer', 'His diet'],
      correctAnswer: 'His uncut hair',
      verse: 'Judges 16:17',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-judges-6-q3',
      type: 'true-false',
      question: 'Samson killed a lion with his bare hands',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Judges 14:6',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-6-q4',
      type: 'multiple-choice',
      question: 'Who betrayed Samson?',
      options: ['Delilah', 'Deborah', 'Ruth', 'Rachel'],
      correctAnswer: 'Delilah',
      verse: 'Judges 16:18',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-judges-6-q5',
      type: 'multiple-choice',
      question: 'What did Samson use to kill 1,000 Philistines?',
      options: ['A donkey\'s jawbone', 'A sword', 'His fists', 'A spear'],
      correctAnswer: 'A donkey\'s jawbone',
      verse: 'Judges 15:15',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-6-q6',
      type: 'true-false',
      question: 'Samson was a Nazirite from birth',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Judges 13:5',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-6-q7',
      type: 'multiple-choice',
      question: 'What did the Philistines do to Samson when they captured him?',
      options: ['Gouged out his eyes', 'Cut off his hands', 'Broke his legs', 'Imprisoned him only'],
      correctAnswer: 'Gouged out his eyes',
      verse: 'Judges 16:21',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-6-q8',
      type: 'multiple-choice',
      question: 'How did Samson die?',
      options: ['Pushing down temple pillars', 'In battle', 'Old age', 'Execution'],
      correctAnswer: 'Pushing down temple pillars',
      verse: 'Judges 16:30',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-6-q9',
      type: 'true-false',
      question: 'Samson killed more Philistines at his death than during his life',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Judges 16:30',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-6-q10',
      type: 'multiple-choice',
      question: 'Samson judged Israel for how many years?',
      options: ['20', '40', '10', '30'],
      correctAnswer: '20',
      verse: 'Judges 16:31',
      difficulty: 2,
      xpReward: 15
    }
  ],

  'names-judges-7': [
    {
      id: 'names-judges-7-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'judges',
      question: 'Which judge made a rash vow that cost his daughter?',
      options: ['Jephthah', 'Gideon', 'Samson', 'Eli'],
      correctAnswer: 'Jephthah',
      verse: 'Judges 11:30-31',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-7-q2',
      type: 'multiple-choice',
      question: 'Jephthah defeated which enemy of Israel?',
      options: ['Ammonites', 'Philistines', 'Midianites', 'Moabites'],
      correctAnswer: 'Ammonites',
      verse: 'Judges 11:32-33',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-7-q3',
      type: 'true-false',
      question: 'Jephthah was initially rejected by his family',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Judges 11:2',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-7-q4',
      type: 'multiple-choice',
      question: 'Which judge served only 6 years?',
      options: ['Jephthah', 'Samson', 'Gideon', 'Othniel'],
      correctAnswer: 'Jephthah',
      verse: 'Judges 12:7',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-judges-7-q5',
      type: 'multiple-choice',
      question: 'Who was the first judge of Israel mentioned?',
      options: ['Othniel', 'Ehud', 'Deborah', 'Gideon'],
      correctAnswer: 'Othniel',
      verse: 'Judges 3:9',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-7-q6',
      type: 'true-false',
      question: 'Ehud was left-handed',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Judges 3:15',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-7-q7',
      type: 'multiple-choice',
      question: 'Which judge killed King Eglon?',
      options: ['Ehud', 'Shamgar', 'Othniel', 'Barak'],
      correctAnswer: 'Ehud',
      verse: 'Judges 3:21',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-judges-7-q8',
      type: 'multiple-choice',
      question: 'Shamgar killed 600 Philistines with what weapon?',
      options: ['An ox goad', 'A sword', 'A slingshot', 'A spear'],
      correctAnswer: 'An ox goad',
      verse: 'Judges 3:31',
      difficulty: 3,
      xpReward: 20
    },
    {
      id: 'names-judges-7-q9',
      type: 'true-false',
      question: 'The period of judges was marked by repeated cycles of sin and deliverance',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: 'Judges 2:16-19',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-7-q10',
      type: 'multiple-choice',
      question: 'The book of Judges ends with the phrase:',
      options: ['Everyone did what was right in his own eyes', 'God was with them', 'They served the Lord', 'Peace was in the land'],
      correctAnswer: 'Everyone did what was right in his own eyes',
      verse: 'Judges 21:25',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-7-q11',
      type: 'multiple-choice',
      question: 'The Hebrew word "gib\'or chayil" (גִּבּוֹר חַיִל) used for Gideon means:',
      options: ['Mighty warrior/man of valor', 'Humble farmer', 'Faithful servant', 'Brave leader'],
      correctAnswer: 'Mighty warrior/man of valor',
      explanation: 'From "gibbor" (גִּבּוֹר = mighty/warrior) and "chayil" (חַיִל = strength/valor). God saw Gideon\'s potential.',
      verse: 'Judges 6:12',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-judges-7-q12',
      type: 'multiple-choice',
      question: 'The name "Samson" (שִׁמְשׁוֹן - Shimshon) is related to "shemesh" meaning:',
      options: ['Sun', 'Strength', 'Lion', 'Judge'],
      correctAnswer: 'Sun',
      explanation: 'Shimshon comes from "shemesh" (שֶׁמֶשׁ = sun), possibly meaning "little sun" or "sun-like" - reflecting his bright strength.',
      verse: 'Judges 13:24',
      difficulty: 3,
      xpReward: 25
    }
  ],

  'names-judges-8': [
    {
      id: 'names-judges-8-q1',
      type: 'multiple-choice',
      category: 'names',
      subcategory: 'judges',
      question: 'Which man was both a judge and a priest?',
      options: ['Samuel', 'Eli', 'Aaron', 'Ezra'],
      correctAnswer: 'Samuel',
      verse: '1 Samuel 7:15-17',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-8-q2',
      type: 'multiple-choice',
      question: 'Who was Samuel\'s mother?',
      options: ['Hannah', 'Sarah', 'Ruth', 'Deborah'],
      correctAnswer: 'Hannah',
      verse: '1 Samuel 1:20',
      difficulty: 1,
      xpReward: 10
    },
    {
      id: 'names-judges-8-q3',
      type: 'true-false',
      question: 'Hannah dedicated Samuel to serve in the temple',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '1 Samuel 1:28',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-8-q4',
      type: 'multiple-choice',
      question: 'God spoke to young Samuel in the night. Who did Samuel think was calling?',
      options: ['Eli', 'His mother', 'An angel', 'God'],
      correctAnswer: 'Eli',
      verse: '1 Samuel 3:5',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-8-q5',
      type: 'multiple-choice',
      question: 'Samuel anointed which two kings?',
      options: ['Saul and David', 'David and Solomon', 'Saul and Jonathan', 'David and Absalom'],
      correctAnswer: 'Saul and David',
      verse: '1 Samuel 10:1, 16:13',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-8-q6',
      type: 'true-false',
      question: 'Samuel was considered a prophet as well as a judge',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '1 Samuel 3:20',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-8-q7',
      type: 'multiple-choice',
      question: 'Where did Samuel set up a stone memorial called "Ebenezer"?',
      options: ['After victory over Philistines', 'At his birth', 'When anointing Saul', 'When he died'],
      correctAnswer: 'After victory over Philistines',
      verse: '1 Samuel 7:12',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-8-q8',
      type: 'multiple-choice',
      question: 'What does "Ebenezer" mean?',
      options: ['Stone of help', 'God is with us', 'Victory stone', 'Memorial'],
      correctAnswer: 'Stone of help',
      verse: '1 Samuel 7:12',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-8-q9',
      type: 'true-false',
      question: 'Samuel\'s sons did not follow his righteous example',
      options: ['True', 'False'],
      correctAnswer: 'True',
      verse: '1 Samuel 8:3',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-8-q10',
      type: 'multiple-choice',
      question: 'How is Samuel described in Scripture?',
      options: ['All Israel knew he was a prophet', 'The greatest judge', 'The last priest', 'The first king'],
      correctAnswer: 'All Israel knew he was a prophet',
      verse: '1 Samuel 3:20',
      difficulty: 2,
      xpReward: 15
    },
    {
      id: 'names-judges-8-q11',
      type: 'multiple-choice',
      question: 'The Hebrew name "Shemuel" (שְׁמוּאֵל - Samuel) means:',
      options: ['Heard by God/Name of God', 'Prophet', 'Judge', 'Priest'],
      correctAnswer: 'Heard by God/Name of God',
      explanation: 'From "shama" (שָׁמַע = to hear) and "El" (אֵל = God). Hannah named him this because God heard her prayer.',
      verse: '1 Samuel 1:20',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-judges-8-q12',
      type: 'multiple-choice',
      question: 'The Hebrew "Even-Ezer" (אֶבֶן הָעֵזֶר - Ebenezer) literally means:',
      options: ['Stone of help', 'Stone of remembrance', 'Victory stone', 'God\'s stone'],
      correctAnswer: 'Stone of help',
      explanation: 'From "even" (אֶבֶן = stone) and "ezer" (עֵזֶר = help). "Thus far the LORD has helped us" (1 Sam 7:12).',
      verse: '1 Samuel 7:12',
      difficulty: 3,
      xpReward: 25
    },
    {
      id: 'names-judges-8-q13',
      type: 'multiple-choice',
      question: 'The Hebrew word "shophet" (שֹׁפֵט - judge) in the book of Judges means:',
      options: ['Ruler/deliverer/vindicator', 'Legal judge only', 'King', 'Priest'],
      correctAnswer: 'Ruler/deliverer/vindicator',
      explanation: 'Shophet means more than legal judge - it includes delivering, governing, and vindicating God\'s people from oppression.',
      verse: 'Judges 2:16',
      difficulty: 3,
      xpReward: 25
    }
  ]
};

export const abrahamQuestions: Record<string, Question[]> = {
  'names-abraham-1': [
    {
      id: 'abraham-1-q1',
      type: 'multiple-choice',
      question: 'Where did Abraham live when God called him?',
      options: ['Ur', 'Haran', 'Canaan', 'Egypt'],
      correctAnswer: 'Ur'
    },
    {
      id: 'abraham-1-q2',
      type: 'multiple-choice',
      question: 'What did God promise Abraham?',
      options: ['A great nation', 'A great army', 'A great city', 'A great temple'],
      correctAnswer: 'A great nation'
    },
    {
      id: 'abraham-1-q3',
      type: 'multiple-choice',
      question: 'What was credited to Abraham because of his faith?',
      options: ['Righteousness', 'Wisdom', 'Strength', 'Riches'],
      correctAnswer: 'Righteousness'
    },
    {
      id: 'abraham-1-q4',
      type: 'multiple-choice',
      question: 'Who was the son of the promise?',
      options: ['Isaac', 'Ishmael', 'Jacob', 'Joseph'],
      correctAnswer: 'Isaac'
    },
    {
      id: 'abraham-1-q5',
      type: 'multiple-choice',
      question: 'What did God ask Abraham to sacrifice?',
      options: ['His son Isaac', 'His livestock', 'His house', 'His land'],
      correctAnswer: 'His son Isaac'
    },
    {
      id: 'abraham-1-q6',
      type: 'multiple-choice',
      question: 'How did Abraham respond to God\'s command?',
      options: ['He obeyed', 'He fled', 'He refused', 'He asked for a sign'],
      correctAnswer: 'He obeyed'
    },
    {
      id: 'abraham-1-q7',
      type: 'multiple-choice',
      question: 'What did God provide on Mount Moriah?',
      options: ['A ram', 'An angel', 'An altar', 'A prophet'],
      correctAnswer: 'A ram'
    },
    {
      id: 'abraham-1-q8',
      type: 'multiple-choice',
      question: 'What does the name Abraham mean?',
      options: ['Father of many nations', 'Father of one nation', 'Blessed man', 'Friend of God'],
      correctAnswer: 'Father of many nations'
    },
    {
      id: 'abraham-1-q9',
      type: 'multiple-choice',
      question: 'Which city did Abraham leave at God\'s command?',
      options: ['Ur', 'Sodom', 'Jericho', 'Nineveh'],
      correctAnswer: 'Ur'
    },
    {
      id: 'abraham-1-q10',
      type: 'multiple-choice',
      question: 'What was Abraham\'s response to God\'s promises?',
      options: ['He believed God', 'He constantly doubted', 'He ignored them', 'He set conditions'],
      correctAnswer: 'He believed God'
    },
    {
      id: 'abraham-1-q11',
      type: 'multiple-choice',
      question: 'What covenant sign did God give to Abraham?',
      options: ['Circumcision', 'Sabbath', 'Sacrifice', 'Fasting'],
      correctAnswer: 'Circumcision'
    },
    {
      id: 'abraham-1-q12',
      type: 'multiple-choice',
      question: 'Which promise applied to all nations?',
      options: ['In you all nations will be blessed', 'You will never suffer', 'You will always be rich', 'You will never die'],
      correctAnswer: 'In you all nations will be blessed'
    }
  ]
};

export const josephQuestions: Record<string, Question[]> = {
  'names-joseph-1': [
    {
      id: 'joseph-1-q1',
      type: 'multiple-choice',
      question: 'What did Joseph\'s brothers do to him?',
      options: ['They sold him as a slave', 'They sent him away', 'They hid him', 'They killed him'],
      correctAnswer: 'They sold him as a slave'
    },
    {
      id: 'joseph-1-q2',
      type: 'multiple-choice',
      question: 'Where did Joseph end up after being sold?',
      options: ['Egypt', 'Canaan', 'Babylon', 'Assyria'],
      correctAnswer: 'Egypt'
    },
    {
      id: 'joseph-1-q3',
      type: 'multiple-choice',
      question: 'Why did Joseph end up in prison?',
      options: ['A false accusation', 'Theft', 'Rebellion', 'Laziness'],
      correctAnswer: 'A false accusation'
    },
    {
      id: 'joseph-1-q4',
      type: 'multiple-choice',
      question: 'What was Joseph able to do through God?',
      options: ['Interpret dreams', 'Perform magic', 'Heal people', 'Prophesy'],
      correctAnswer: 'Interpret dreams'
    },
    {
      id: 'joseph-1-q5',
      type: 'multiple-choice',
      question: 'Who had a dream that Joseph interpreted?',
      options: ['Pharaoh', 'Nebuchadnezzar', 'Aaron', 'David'],
      correctAnswer: 'Pharaoh'
    },
    {
      id: 'joseph-1-q6',
      type: 'multiple-choice',
      question: 'What position did Joseph hold in Egypt?',
      options: ['Second-in-command', 'Priest', 'General', 'Slave'],
      correctAnswer: 'Second-in-command'
    },
    {
      id: 'joseph-1-q7',
      type: 'multiple-choice',
      question: 'What did Joseph say to his brothers about their evil?',
      options: ['God turned it for good', 'I will punish you', 'I will never forget this', 'You are lost'],
      correctAnswer: 'God turned it for good'
    },
    {
      id: 'joseph-1-q8',
      type: 'multiple-choice',
      question: 'What did Joseph save through his wisdom?',
      options: ['Many lives', 'Only his family', 'Only Egypt', 'No one'],
      correctAnswer: 'Many lives'
    },
    {
      id: 'joseph-1-q9',
      type: 'multiple-choice',
      question: 'How did Joseph respond when he saw his brothers?',
      options: ['He forgave them', 'He punished them', 'He ignored them', 'He fled'],
      correctAnswer: 'He forgave them'
    },
    {
      id: 'joseph-1-q10',
      type: 'multiple-choice',
      question: 'What did Joseph\'s dreams as a boy symbolize?',
      options: ['His future leadership', 'His downfall', 'His death', 'His weakness'],
      correctAnswer: 'His future leadership'
    },
    {
      id: 'joseph-1-q11',
      type: 'multiple-choice',
      question: 'Who was Joseph\'s father?',
      options: ['Jacob', 'Isaac', 'Abraham', 'Esau'],
      correctAnswer: 'Jacob'
    },
    {
      id: 'joseph-1-q12',
      type: 'multiple-choice',
      question: 'What does Joseph\'s story mainly show?',
      options: ['God\'s providence', 'Human strength', 'Luck', 'Coincidence'],
      correctAnswer: 'God\'s providence'
    }
  ]
};

export const joshuaQuestions: Record<string, Question[]> = {
  'names-joshua-1': [
    {
      id: 'joshua-1-q1',
      type: 'multiple-choice',
      question: 'Who was the successor of Moses?',
      options: ['Joshua', 'Aaron', 'Caleb', 'Samuel'],
      correctAnswer: 'Joshua'
    },
    {
      id: 'joshua-1-q2',
      type: 'multiple-choice',
      question: 'What did God repeatedly say to Joshua?',
      options: ['Be strong and courageous', 'Be careful', 'Be silent', 'Be afraid'],
      correctAnswer: 'Be strong and courageous'
    },
    {
      id: 'joshua-1-q3',
      type: 'multiple-choice',
      question: 'What miracle happened at the Jordan River?',
      options: ['The water stopped flowing', 'The water boiled', 'The water turned to blood', 'The water disappeared'],
      correctAnswer: 'The water stopped flowing'
    },
    {
      id: 'joshua-1-q4',
      type: 'multiple-choice',
      question: 'Which city fell by God\'s power?',
      options: ['Jericho', 'Nineveh', 'Babylon', 'Tyre'],
      correctAnswer: 'Jericho'
    },
    {
      id: 'joshua-1-q5',
      type: 'multiple-choice',
      question: 'How did Jericho fall?',
      options: ['Through obedience', 'Through warfare', 'Through fire', 'Through famine'],
      correctAnswer: 'Through obedience'
    },
    {
      id: 'joshua-1-q6',
      type: 'multiple-choice',
      question: 'Who deceived Israel at Ai?',
      options: ['Achan', 'Caleb', 'Gideon', 'Saul'],
      correctAnswer: 'Achan'
    },
    {
      id: 'joshua-1-q7',
      type: 'multiple-choice',
      question: 'What did God promise Joshua?',
      options: ['I will be with you', 'You will never fail', 'You will become rich', 'You will never have war'],
      correctAnswer: 'I will be with you'
    },
    {
      id: 'joshua-1-q8',
      type: 'multiple-choice',
      question: 'What was Joshua to meditate on day and night?',
      options: ['The law of God', 'His strategy', 'His feelings', 'His past'],
      correctAnswer: 'The law of God'
    },
    {
      id: 'joshua-1-q9',
      type: 'multiple-choice',
      question: 'What did Joshua say at the end of his life?',
      options: ['As for me and my house, we will serve the LORD', 'I am tired', 'I have failed', 'I want to go back to Egypt'],
      correctAnswer: 'As for me and my house, we will serve the LORD'
    },
    {
      id: 'joshua-1-q10',
      type: 'multiple-choice',
      question: 'What was Joshua\'s role?',
      options: ['Leader and conqueror', 'Priest', 'Prophet', 'Judge'],
      correctAnswer: 'Leader and conqueror'
    },
    {
      id: 'joshua-1-q11',
      type: 'multiple-choice',
      question: 'Who helped the spies in Jericho?',
      options: ['Rahab', 'Deborah', 'Ruth', 'Esther'],
      correctAnswer: 'Rahab'
    },
    {
      id: 'joshua-1-q12',
      type: 'multiple-choice',
      question: 'What does Joshua\'s life mainly show?',
      options: ['God\'s faithfulness to His promises', 'Human strength', 'Coincidence', 'Luck'],
      correctAnswer: 'God\'s faithfulness to His promises'
    }
  ]
};

export const elijahQuestions: Record<string, Question[]> = {
  'names-elijah-1': [
    {
      id: 'elijah-1-q1',
      type: 'multiple-choice',
      question: 'Which king did Elijah confront?',
      options: ['Ahab', 'Saul', 'David', 'Hezekiah'],
      correctAnswer: 'Ahab'
    },
    {
      id: 'elijah-1-q2',
      type: 'multiple-choice',
      question: 'What did Elijah\'s prayer cause?',
      options: ['A drought lasting years', 'A flood', 'An earthquake', 'A plague'],
      correctAnswer: 'A drought lasting years'
    },
    {
      id: 'elijah-1-q3',
      type: 'multiple-choice',
      question: 'Where did the confrontation with the prophets of Baal take place?',
      options: ['Carmel', 'Zion', 'Moriah', 'Horeb'],
      correctAnswer: 'Carmel'
    },
    {
      id: 'elijah-1-q4',
      type: 'multiple-choice',
      question: 'How did God answer Elijah\'s prayer on the mountain?',
      options: ['With fire from heaven', 'With rain', 'With wind', 'With silence'],
      correctAnswer: 'With fire from heaven'
    },
    {
      id: 'elijah-1-q5',
      type: 'multiple-choice',
      question: 'Who threatened Elijah after the victory?',
      options: ['Jezebel', 'Rahab', 'Deborah', 'Miriam'],
      correctAnswer: 'Jezebel'
    },
    {
      id: 'elijah-1-q6',
      type: 'multiple-choice',
      question: 'How did God speak to Elijah at Horeb?',
      options: ['In a gentle whisper', 'In fire', 'In an earthquake', 'In a storm'],
      correctAnswer: 'In a gentle whisper'
    },
    {
      id: 'elijah-1-q7',
      type: 'multiple-choice',
      question: 'Who became Elijah\'s successor?',
      options: ['Elisha', 'Samuel', 'Isaiah', 'Jeremiah'],
      correctAnswer: 'Elisha'
    },
    {
      id: 'elijah-1-q8',
      type: 'multiple-choice',
      question: 'How was Elijah taken up to heaven?',
      options: ['In a fiery chariot', 'Carried by angels', 'He died', 'He disappeared'],
      correctAnswer: 'In a fiery chariot'
    },
    {
      id: 'elijah-1-q9',
      type: 'multiple-choice',
      question: 'What did Elijah\'s life mainly demonstrate?',
      options: ['God\'s power over false gods', 'Human strength', 'Coincidence', 'Political power'],
      correctAnswer: 'God\'s power over false gods'
    },
    {
      id: 'elijah-1-q10',
      type: 'multiple-choice',
      question: 'Who fed Elijah at the brook Cherith?',
      options: ['Ravens', 'Angels', 'Fish', 'Priests'],
      correctAnswer: 'Ravens'
    },
    {
      id: 'elijah-1-q11',
      type: 'multiple-choice',
      question: 'What did Elijah do for the widow of Zarephath?',
      options: ['Raised her son from the dead', 'Made her rich', 'Healed her', 'Relocated her'],
      correctAnswer: 'Raised her son from the dead'
    },
    {
      id: 'elijah-1-q12',
      type: 'multiple-choice',
      question: 'What does Elijah\'s story teach us?',
      options: ['God answers faith', 'God is silent', 'God is weak', 'God does not change'],
      correctAnswer: 'God answers faith'
    }
  ]
};

export const elishaQuestions: Record<string, Question[]> = {
  'names-elisha-1': [
    {
      id: 'elisha-1-q1',
      type: 'multiple-choice',
      question: 'Who was Elisha\'s mentor?',
      options: ['Elijah', 'Samuel', 'Isaiah', 'Jeremiah'],
      correctAnswer: 'Elijah'
    },
    {
      id: 'elisha-1-q2',
      type: 'multiple-choice',
      question: 'What did Elisha ask of Elijah?',
      options: ['A double portion of his spirit', 'Riches', 'Honor', 'Strength'],
      correctAnswer: 'A double portion of his spirit'
    },
    {
      id: 'elisha-1-q3',
      type: 'multiple-choice',
      question: 'What did Elisha do to the water at Jericho?',
      options: ['He healed it', 'He made it disappear', 'He made it salty', 'He froze it'],
      correctAnswer: 'He healed it'
    },
    {
      id: 'elisha-1-q4',
      type: 'multiple-choice',
      question: 'Who was healed of leprosy by Elisha?',
      options: ['Naaman', 'Goliath', 'Saul', 'Haman'],
      correctAnswer: 'Naaman'
    },
    {
      id: 'elisha-1-q5',
      type: 'multiple-choice',
      question: 'What did Elisha do for the Shunammite woman?',
      options: ['Raised her son from the dead', 'Made her rich', 'Healed her', 'Relocated her'],
      correctAnswer: 'Raised her son from the dead'
    },
    {
      id: 'elisha-1-q6',
      type: 'multiple-choice',
      question: 'What did God show Elisha\'s servant in 2 Kings 6?',
      options: ['Heavenly armies', 'A storm', 'A pillar of fire', 'A rainbow'],
      correctAnswer: 'Heavenly armies'
    },
    {
      id: 'elisha-1-q7',
      type: 'multiple-choice',
      question: 'What happened to the axe head that fell in the water?',
      options: ['It floated to the surface', 'It disappeared', 'It turned to gold', 'It broke'],
      correctAnswer: 'It floated to the surface'
    },
    {
      id: 'elisha-1-q8',
      type: 'multiple-choice',
      question: 'What did Elisha do for the widow with little oil?',
      options: ['He multiplied the oil', 'He gave her money', 'He sent her away', 'He gave her bread'],
      correctAnswer: 'He multiplied the oil'
    },
    {
      id: 'elisha-1-q9',
      type: 'multiple-choice',
      question: 'What happened when Naaman washed seven times?',
      options: ['He was healed', 'He became ill', 'He became angry', 'He went blind'],
      correctAnswer: 'He was healed'
    },
    {
      id: 'elisha-1-q10',
      type: 'multiple-choice',
      question: 'Who was punished with leprosy for lying?',
      options: ['Gehazi', 'Achan', 'Saul', 'Haman'],
      correctAnswer: 'Gehazi'
    },
    {
      id: 'elisha-1-q11',
      type: 'multiple-choice',
      question: 'What does Elisha\'s ministry mainly show?',
      options: ['God\'s compassion and power', 'Human wisdom', 'Political power', 'Coincidence'],
      correctAnswer: 'God\'s compassion and power'
    },
    {
      id: 'elisha-1-q12',
      type: 'multiple-choice',
      question: 'What was the sign that Elisha was Elijah\'s successor?',
      options: ['He received Elijah\'s cloak', 'He received a crown', 'He received a staff', 'He received a scroll'],
      correctAnswer: 'He received Elijah\'s cloak'
    }
  ]
};

export const ruthQuestions: Record<string, Question[]> = {
  'names-ruth-1': [
    {
      id: 'ruth-1-q1',
      type: 'multiple-choice',
      question: 'What country did Ruth originally come from?',
      options: ['Moab', 'Canaan', 'Egypt', 'Assyria'],
      correctAnswer: 'Moab'
    },
    {
      id: 'ruth-1-q2',
      type: 'multiple-choice',
      question: 'Who was Ruth\'s mother-in-law?',
      options: ['Naomi', 'Orpah', 'Hannah', 'Deborah'],
      correctAnswer: 'Naomi'
    },
    {
      id: 'ruth-1-q3',
      type: 'multiple-choice',
      question: 'What did Ruth say to Naomi?',
      options: ['Your people shall be my people', 'I am going back to Moab', 'I will stay here', 'I will follow my own way'],
      correctAnswer: 'Your people shall be my people'
    },
    {
      id: 'ruth-1-q4',
      type: 'multiple-choice',
      question: 'What did Ruth do to get food?',
      options: ['Glean grain', 'Fish', 'Trade', 'Beg'],
      correctAnswer: 'Glean grain'
    },
    {
      id: 'ruth-1-q5',
      type: 'multiple-choice',
      question: 'In whose field did Ruth work?',
      options: ['Boaz', 'Elimelech', 'Obed', 'Salmon'],
      correctAnswer: 'Boaz'
    },
    {
      id: 'ruth-1-q6',
      type: 'multiple-choice',
      question: 'What was Boaz to Naomi\'s family?',
      options: ['Kinsman-redeemer', 'Enemy', 'Stranger', 'Priest'],
      correctAnswer: 'Kinsman-redeemer'
    },
    {
      id: 'ruth-1-q7',
      type: 'multiple-choice',
      question: 'Who married Ruth?',
      options: ['Boaz', 'Caleb', 'David', 'Saul'],
      correctAnswer: 'Boaz'
    },
    {
      id: 'ruth-1-q8',
      type: 'multiple-choice',
      question: 'Who was Ruth\'s son?',
      options: ['Obed', 'Jesse', 'David', 'Solomon'],
      correctAnswer: 'Obed'
    },
    {
      id: 'ruth-1-q9',
      type: 'multiple-choice',
      question: 'Who was Ruth\'s grandson?',
      options: ['David', 'Saul', 'Samuel', 'Elijah'],
      correctAnswer: 'David'
    },
    {
      id: 'ruth-1-q10',
      type: 'multiple-choice',
      question: 'What does Ruth\'s story mainly show?',
      options: ['Loyalty and God\'s providence', 'War', 'Rebellion', 'Wealth'],
      correctAnswer: 'Loyalty and God\'s providence'
    },
    {
      id: 'ruth-1-q11',
      type: 'multiple-choice',
      question: 'What does the word "kinsman-redeemer" mean?',
      options: ['Family rescuer/redeemer', 'Judge', 'Priest', 'King'],
      correctAnswer: 'Family rescuer/redeemer'
    },
    {
      id: 'ruth-1-q12',
      type: 'multiple-choice',
      question: 'What does Ruth teach us about God?',
      options: ['He welcomes foreigners', 'He rejects foreigners', 'He only helps the rich', 'He does not change'],
      correctAnswer: 'He welcomes foreigners'
    }
  ]
};

export const estherQuestions: Record<string, Question[]> = {
  'names-esther-1': [
    {
      id: 'esther-1-q1',
      type: 'multiple-choice',
      question: 'What was Esther before she became queen?',
      options: ['A Jewish orphan', 'A priestess', 'A wealthy woman', 'A servant'],
      correctAnswer: 'A Jewish orphan'
    },
    {
      id: 'esther-1-q2',
      type: 'multiple-choice',
      question: 'Who was Esther\'s foster father?',
      options: ['Mordecai', 'Haman', 'Ezra', 'Nehemiah'],
      correctAnswer: 'Mordecai'
    },
    {
      id: 'esther-1-q3',
      type: 'multiple-choice',
      question: 'Who wanted to destroy all the Jews?',
      options: ['Haman', 'Pharaoh', 'Sanballat', 'Herod'],
      correctAnswer: 'Haman'
    },
    {
      id: 'esther-1-q4',
      type: 'multiple-choice',
      question: 'What did Esther have to do to save her people?',
      options: ['Go to the king', 'Flee', 'Hide', 'Confront Haman in public'],
      correctAnswer: 'Go to the king'
    },
    {
      id: 'esther-1-q5',
      type: 'multiple-choice',
      question: 'What was the risk for Esther?',
      options: ['Death penalty', 'Exile', 'Imprisonment', 'Poverty'],
      correctAnswer: 'Death penalty'
    },
    {
      id: 'esther-1-q6',
      type: 'multiple-choice',
      question: 'What did Mordecai say to Esther?',
      options: ['You have come to the kingdom for such a time as this', 'You must flee', 'You can do nothing', 'God has abandoned you'],
      correctAnswer: 'You have come to the kingdom for such a time as this'
    },
    {
      id: 'esther-1-q7',
      type: 'multiple-choice',
      question: 'What did Esther do before going to the king?',
      options: ['Fast', 'Feast', 'Travel', 'Sleep'],
      correctAnswer: 'Fast'
    },
    {
      id: 'esther-1-q8',
      type: 'multiple-choice',
      question: 'How did the king respond to Esther?',
      options: ['He showed her favor', 'He became angry', 'He ignored her', 'He punished her'],
      correctAnswer: 'He showed her favor'
    },
    {
      id: 'esther-1-q9',
      type: 'multiple-choice',
      question: 'What happened to Haman?',
      options: ['He was hanged', 'He fled', 'He became king', 'He became a priest'],
      correctAnswer: 'He was hanged'
    },
    {
      id: 'esther-1-q10',
      type: 'multiple-choice',
      question: 'Which feast commemorates Esther\'s story?',
      options: ['Purim', 'Passover', 'Feast of Tabernacles', 'Pentecost'],
      correctAnswer: 'Purim'
    },
    {
      id: 'esther-1-q11',
      type: 'multiple-choice',
      question: 'What does Esther\'s story mainly show?',
      options: ['God\'s hidden guidance', 'Human strength', 'Coincidence', 'Political power'],
      correctAnswer: 'God\'s hidden guidance'
    },
    {
      id: 'esther-1-q12',
      type: 'multiple-choice',
      question: 'What does Esther teach us?',
      options: ['Courage and trust in God', 'Revenge', 'Fear', 'Selfishness'],
      correctAnswer: 'Courage and trust in God'
    }
  ]
};

export const paulQuestions: Record<string, Question[]> = {
  'names-paul-1': [
    {
      id: 'paul-1-q1',
      type: 'multiple-choice',
      question: 'What was Paul before he became a Christian?',
      options: ['A persecutor of the church', 'A priest', 'A Roman soldier', 'A king'],
      correctAnswer: 'A persecutor of the church'
    },
    {
      id: 'paul-1-q2',
      type: 'multiple-choice',
      question: 'Where did Paul encounter Jesus?',
      options: ['On the road to Damascus', 'In Jerusalem', 'In Rome', 'In Antioch'],
      correctAnswer: 'On the road to Damascus'
    },
    {
      id: 'paul-1-q3',
      type: 'multiple-choice',
      question: 'What happened to Paul during his conversion?',
      options: ['He became blind', 'He became ill', 'He fell down', 'He became deaf'],
      correctAnswer: 'He became blind'
    },
    {
      id: 'paul-1-q4',
      type: 'multiple-choice',
      question: 'Who prayed for Paul so that he could see again?',
      options: ['Ananias', 'Barnabas', 'Peter', 'James'],
      correctAnswer: 'Ananias'
    },
    {
      id: 'paul-1-q5',
      type: 'multiple-choice',
      question: 'What was Paul\'s calling?',
      options: ['Apostle to the Gentiles', 'Priest for Israel', 'King of Judea', 'Prophet for Egypt'],
      correctAnswer: 'Apostle to the Gentiles'
    },
    {
      id: 'paul-1-q6',
      type: 'multiple-choice',
      question: 'How many missionary journeys did Paul make?',
      options: ['Three', 'One', 'Two', 'Four'],
      correctAnswer: 'Three'
    },
    {
      id: 'paul-1-q7',
      type: 'multiple-choice',
      question: 'Which letters did Paul write?',
      options: ['Romans, Corinthians, Galatians, etc.', 'Genesis', 'Psalms', 'Revelation'],
      correctAnswer: 'Romans, Corinthians, Galatians, etc.'
    },
    {
      id: 'paul-1-q8',
      type: 'multiple-choice',
      question: 'Where was Paul imprisoned when he wrote his letters?',
      options: ['Rome', 'Babylon', 'Corinth', 'Athens'],
      correctAnswer: 'Rome'
    },
    {
      id: 'paul-1-q9',
      type: 'multiple-choice',
      question: 'Who often traveled with Paul?',
      options: ['Barnabas', 'Moses', 'David', 'Elijah'],
      correctAnswer: 'Barnabas'
    },
    {
      id: 'paul-1-q10',
      type: 'multiple-choice',
      question: 'What happened to Paul in Philippi?',
      options: ['He was imprisoned', 'He became king', 'He became rich', 'He became a priest'],
      correctAnswer: 'He was imprisoned'
    },
    {
      id: 'paul-1-q11',
      type: 'multiple-choice',
      question: 'What did Paul do in prison?',
      options: ['Pray and sing', 'Complain', 'Sleep', 'Flee'],
      correctAnswer: 'Pray and sing'
    },
    {
      id: 'paul-1-q12',
      type: 'multiple-choice',
      question: 'What does Paul\'s life mainly show?',
      options: ['The power of God\'s grace', 'Human strength', 'Coincidence', 'Political talent'],
      correctAnswer: 'The power of God\'s grace'
    }
  ]
};

export const peterQuestions: Record<string, Question[]> = {
  'names-peter-1': [
    {
      id: 'peter-1-q1',
      type: 'multiple-choice',
      question: 'What was Peter\'s occupation before he followed Jesus?',
      options: ['Fisherman', 'Carpenter', 'Shepherd', 'Soldier'],
      correctAnswer: 'Fisherman'
    },
    {
      id: 'peter-1-q2',
      type: 'multiple-choice',
      question: 'What did Peter do when Jesus called him?',
      options: ['He left everything behind', 'He hesitated', 'He fled', 'He asked for time'],
      correctAnswer: 'He left everything behind'
    },
    {
      id: 'peter-1-q3',
      type: 'multiple-choice',
      question: 'What did Peter do on the water?',
      options: ['He walked on the water', 'He sank immediately', 'He swam', 'He stayed in the boat'],
      correctAnswer: 'He walked on the water'
    },
    {
      id: 'peter-1-q4',
      type: 'multiple-choice',
      question: 'Why did Peter begin to sink?',
      options: ['He looked at the wind', 'He could not swim', 'He was tired', 'He was sick'],
      correctAnswer: 'He looked at the wind'
    },
    {
      id: 'peter-1-q5',
      type: 'multiple-choice',
      question: 'How many times did Peter deny Jesus?',
      options: ['Three times', 'Once', 'Twice', 'Four times'],
      correctAnswer: 'Three times'
    },
    {
      id: 'peter-1-q6',
      type: 'multiple-choice',
      question: 'What did Jesus do for Peter after His resurrection?',
      options: ['He restored him', 'He punished him', 'He ignored him', 'He cursed him'],
      correctAnswer: 'He restored him'
    },
    {
      id: 'peter-1-q7',
      type: 'multiple-choice',
      question: 'What did Jesus say to Peter after his restoration?',
      options: ['Feed my sheep', 'Go away', 'You have failed', 'You are not worthy'],
      correctAnswer: 'Feed my sheep'
    },
    {
      id: 'peter-1-q8',
      type: 'multiple-choice',
      question: 'Who preached on the day of Pentecost?',
      options: ['Peter', 'Paul', 'John', 'James'],
      correctAnswer: 'Peter'
    },
    {
      id: 'peter-1-q9',
      type: 'multiple-choice',
      question: 'How many people came to faith on the day of Pentecost?',
      options: ['About 3,000', '100', '500', '10,000'],
      correctAnswer: 'About 3,000'
    },
    {
      id: 'peter-1-q10',
      type: 'multiple-choice',
      question: 'What did Peter see in his vision in Acts 10?',
      options: ['Unclean animals', 'Angels', 'Fire', 'A ladder'],
      correctAnswer: 'Unclean animals'
    },
    {
      id: 'peter-1-q11',
      type: 'multiple-choice',
      question: 'What did Peter learn from that vision?',
      options: ['The gospel is also for the Gentiles', 'Only Jews are saved', 'He needed to travel', 'He needed to stop'],
      correctAnswer: 'The gospel is also for the Gentiles'
    },
    {
      id: 'peter-1-q12',
      type: 'multiple-choice',
      question: 'What does Peter\'s life mainly show?',
      options: ['God\'s grace and restoration', 'Human perfection', 'Political power', 'Coincidence'],
      correctAnswer: 'God\'s grace and restoration'
    }
  ]
};



// Export all extended questions
export const allExtendedNamesQuestions = {
  ...prophetsQuestionsExtended,
  ...kingsQuestionsExtended,
  ...disciplesQuestionsExtended,
  ...womenQuestionsExtended,
  ...patriarchsQuestionsExtended,
  ...judgesQuestionsExtended
};
