import { Theme } from '../types';

export const expandedThemes: Theme[] = [
  {
    id: 'theme-love',
    name: 'Love',
    description: 'Explore God\'s love and how we should love others',
    color: '#FF6B6B',
    verses: [
      { book: 'John', chapter: 3, verse: '16', text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' },
      { book: '1 Corinthians', chapter: 13, verse: '4-7', text: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud...' },
      { book: '1 John', chapter: 4, verse: '8', text: 'Whoever does not love does not know God, because God is love.' },
      { book: 'Romans', chapter: 8, verse: '38-39', text: 'Nothing can separate us from the love of God that is in Christ Jesus our Lord.' },
      { book: '1 John', chapter: 4, verse: '19', text: 'We love because he first loved us.' },
      { book: 'Matthew', chapter: 22, verse: '37-39', text: 'Love the Lord your God with all your heart... Love your neighbor as yourself.' }
    ]
  },
  {
    id: 'theme-faith',
    name: 'Faith',
    description: 'Learn about trusting God and walking by faith',
    color: '#4ECDC4',
    verses: [
      { book: 'Hebrews', chapter: 11, verse: '1', text: 'Now faith is confidence in what we hope for and assurance about what we do not see.' },
      { book: 'Proverbs', chapter: 3, verse: '5-6', text: 'Trust in the Lord with all your heart and lean not on your own understanding.' },
      { book: 'Romans', chapter: 10, verse: '17', text: 'Faith comes from hearing the message, and the message is heard through the word about Christ.' },
      { book: 'James', chapter: 2, verse: '17', text: 'Faith by itself, if it is not accompanied by action, is dead.' },
      { book: 'Mark', chapter: 11, verse: '22', text: 'Have faith in God.' },
      { book: '2 Corinthians', chapter: 5, verse: '7', text: 'For we live by faith, not by sight.' }
    ]
  },
  {
    id: 'theme-hope',
    name: 'Hope',
    description: 'Find hope and encouragement in God\'s promises',
    color: '#95E1D3',
    verses: [
      { book: 'Jeremiah', chapter: 29, verse: '11', text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.' },
      { book: 'Romans', chapter: 15, verse: '13', text: 'May the God of hope fill you with all joy and peace as you trust in him.' },
      { book: 'Psalm', chapter: 42, verse: '11', text: 'Put your hope in God, for I will yet praise him, my Savior and my God.' },
      { book: 'Lamentations', chapter: 3, verse: '22-23', text: 'His compassions never fail. They are new every morning; great is your faithfulness.' },
      { book: 'Romans', chapter: 5, verse: '5', text: 'And hope does not put us to shame, because God\'s love has been poured out into our hearts.' },
      { book: '1 Peter', chapter: 1, verse: '3', text: 'Praise be to God! In his great mercy he has given us new birth into a living hope through the resurrection of Jesus Christ.' }
    ]
  },
  {
    id: 'theme-peace',
    name: 'Peace',
    description: 'Discover God\'s peace that surpasses understanding',
    color: '#A8E6CF',
    verses: [
      { book: 'John', chapter: 14, verse: '27', text: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives.' },
      { book: 'Philippians', chapter: 4, verse: '6-7', text: 'Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God.' },
      { book: 'Isaiah', chapter: 26, verse: '3', text: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.' },
      { book: 'Romans', chapter: 5, verse: '1', text: 'Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ.' },
      { book: 'Colossians', chapter: 3, verse: '15', text: 'Let the peace of Christ rule in your hearts.' },
      { book: 'Numbers', chapter: 6, verse: '24-26', text: 'The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.' }
    ]
  },
  {
    id: 'theme-wisdom',
    name: 'Wisdom',
    description: 'Seek godly wisdom and understanding',
    color: '#FFD93D',
    verses: [
      { book: 'James', chapter: 1, verse: '5', text: 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault.' },
      { book: 'Proverbs', chapter: 9, verse: '10', text: 'The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.' },
      { book: 'Proverbs', chapter: 2, verse: '6', text: 'For the Lord gives wisdom; from his mouth come knowledge and understanding.' },
      { book: 'Colossians', chapter: 3, verse: '16', text: 'Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom.' },
      { book: 'Proverbs', chapter: 3, verse: '13', text: 'Blessed are those who find wisdom, those who gain understanding.' },
      { book: 'Ecclesiastes', chapter: 7, verse: '12', text: 'Wisdom is a shelter as money is a shelter, but the advantage of knowledge is this: Wisdom preserves those who have it.' }
    ]
  },
  {
    id: 'theme-forgiveness',
    name: 'Forgiveness',
    description: 'Understand God\'s forgiveness and forgiving others',
    color: '#F38181',
    verses: [
      { book: '1 John', chapter: 1, verse: '9', text: 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.' },
      { book: 'Ephesians', chapter: 4, verse: '32', text: 'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.' },
      { book: 'Matthew', chapter: 6, verse: '14-15', text: 'For if you forgive other people when they sin against you, your heavenly Father will also forgive you.' },
      { book: 'Colossians', chapter: 3, verse: '13', text: 'Bear with each other and forgive one another. Forgive as the Lord forgave you.' },
      { book: 'Psalm', chapter: 103, verse: '12', text: 'As far as the east is from the west, so far has he removed our transgressions from us.' },
      { book: 'Isaiah', chapter: 43, verse: '25', text: 'I, even I, am he who blots out your transgressions, for my own sake, and remembers your sins no more.' }
    ]
  },
  {
    id: 'theme-strength',
    name: 'Strength',
    description: 'Find strength in the Lord during difficult times',
    color: '#6C5CE7',
    verses: [
      { book: 'Philippians', chapter: 4, verse: '13', text: 'I can do all this through him who gives me strength.' },
      { book: 'Isaiah', chapter: 40, verse: '31', text: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles.' },
      { book: 'Psalm', chapter: 46, verse: '1', text: 'God is our refuge and strength, an ever-present help in trouble.' },
      { book: '2 Corinthians', chapter: 12, verse: '9', text: 'My grace is sufficient for you, for my power is made perfect in weakness.' },
      { book: 'Nehemiah', chapter: 8, verse: '10', text: 'The joy of the Lord is your strength.' },
      { book: 'Exodus', chapter: 15, verse: '2', text: 'The Lord is my strength and my defense; he has become my salvation.' }
    ]
  },
  {
    id: 'theme-prayer',
    name: 'Prayer',
    description: 'Learn how to communicate with God through prayer',
    color: '#A29BFE',
    verses: [
      { book: 'Matthew', chapter: 6, verse: '9-13', text: 'This, then, is how you should pray: Our Father in heaven, hallowed be your name...' },
      { book: '1 Thessalonians', chapter: 5, verse: '17', text: 'Pray continually.' },
      { book: 'Philippians', chapter: 4, verse: '6', text: 'In every situation, by prayer and petition, with thanksgiving, present your requests to God.' },
      { book: 'James', chapter: 5, verse: '16', text: 'The prayer of a righteous person is powerful and effective.' },
      { book: 'Matthew', chapter: 7, verse: '7', text: 'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.' },
      { book: 'Psalm', chapter: 145, verse: '18', text: 'The Lord is near to all who call on him, to all who call on him in truth.' }
    ]
  },
  {
    id: 'theme-grace',
    name: 'Grace',
    description: 'Understanding God\'s unmerited favor and gift',
    color: '#FF9FF3',
    verses: [
      { book: 'Ephesians', chapter: 2, verse: '8-9', text: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.' },
      { book: '2 Corinthians', chapter: 12, verse: '9', text: 'My grace is sufficient for you, for my power is made perfect in weakness.' },
      { book: 'Romans', chapter: 5, verse: '20', text: 'Where sin increased, grace increased all the more.' },
      { book: 'Titus', chapter: 2, verse: '11', text: 'For the grace of God has appeared that offers salvation to all people.' },
      { book: 'Hebrews', chapter: 4, verse: '16', text: 'Let us then approach God\'s throne of grace with confidence.' },
      { book: 'Romans', chapter: 3, verse: '24', text: 'All are justified freely by his grace through the redemption that came by Christ Jesus.' }
    ]
  },
  {
    id: 'theme-joy',
    name: 'Joy',
    description: 'Experience true joy that comes from the Lord',
    color: '#FECA57',
    verses: [
      { book: 'Philippians', chapter: 4, verse: '4', text: 'Rejoice in the Lord always. I will say it again: Rejoice!' },
      { book: 'Nehemiah', chapter: 8, verse: '10', text: 'Do not grieve, for the joy of the Lord is your strength.' },
      { book: 'Psalm', chapter: 16, verse: '11', text: 'You make known to me the path of life; you will fill me with joy in your presence.' },
      { book: 'John', chapter: 15, verse: '11', text: 'I have told you this so that my joy may be in you and that your joy may be complete.' },
      { book: 'Romans', chapter: 15, verse: '13', text: 'May the God of hope fill you with all joy and peace as you trust in him.' },
      { book: 'Galatians', chapter: 5, verse: '22', text: 'But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness...' }
    ]
  },
  {
    id: 'theme-patience',
    name: 'Patience',
    description: 'Develop patience and endurance in faith',
    color: '#48C9B0',
    verses: [
      { book: 'Galatians', chapter: 5, verse: '22', text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness...' },
      { book: 'Colossians', chapter: 3, verse: '12', text: 'Clothe yourselves with compassion, kindness, humility, gentleness and patience.' },
      { book: 'James', chapter: 5, verse: '7-8', text: 'Be patient, then, brothers and sisters, until the Lord\'s coming.' },
      { book: 'Romans', chapter: 12, verse: '12', text: 'Be joyful in hope, patient in affliction, faithful in prayer.' },
      { book: 'Ecclesiastes', chapter: 7, verse: '8', text: 'The end of a matter is better than its beginning, and patience is better than pride.' },
      { book: 'Proverbs', chapter: 14, verse: '29', text: 'Whoever is patient has great understanding, but one who is quick-tempered displays folly.' }
    ]
  },
  {
    id: 'theme-courage',
    name: 'Courage',
    description: 'Be strong and courageous in the Lord',
    color: '#E74C3C',
    verses: [
      { book: 'Joshua', chapter: 1, verse: '9', text: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.' },
      { book: 'Deuteronomy', chapter: 31, verse: '6', text: 'Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you.' },
      { book: 'Psalm', chapter: 27, verse: '1', text: 'The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?' },
      { book: '1 Corinthians', chapter: 16, verse: '13', text: 'Be on your guard; stand firm in the faith; be courageous; be strong.' },
      { book: 'Proverbs', chapter: 28, verse: '1', text: 'The wicked flee though no one pursues, but the righteous are as bold as a lion.' },
      { book: '2 Timothy', chapter: 1, verse: '7', text: 'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.' }
    ]
  },
  {
    id: 'theme-thanksgiving',
    name: 'Thanksgiving',
    description: 'Give thanks in all circumstances',
    color: '#F39C12',
    verses: [
      { book: '1 Thessalonians', chapter: 5, verse: '18', text: 'Give thanks in all circumstances; for this is God\'s will for you in Christ Jesus.' },
      { book: 'Psalm', chapter: 100, verse: '4', text: 'Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.' },
      { book: 'Colossians', chapter: 3, verse: '17', text: 'And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.' },
      { book: 'Philippians', chapter: 4, verse: '6', text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.' },
      { book: 'Psalm', chapter: 107, verse: '1', text: 'Give thanks to the Lord, for he is good; his love endures forever.' },
      { book: 'Ephesians', chapter: 5, verse: '20', text: 'Always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ.' }
    ]
  },
  {
    id: 'theme-humility',
    name: 'Humility',
    description: 'Walk humbly before God and others',
    color: '#9B59B6',
    verses: [
      { book: 'Philippians', chapter: 2, verse: '3-4', text: 'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves.' },
      { book: 'James', chapter: 4, verse: '10', text: 'Humble yourselves before the Lord, and he will lift you up.' },
      { book: 'Micah', chapter: 6, verse: '8', text: 'He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.' },
      { book: '1 Peter', chapter: 5, verse: '5', text: 'God opposes the proud but shows favor to the humble.' },
      { book: 'Proverbs', chapter: 11, verse: '2', text: 'When pride comes, then comes disgrace, but with humility comes wisdom.' },
      { book: 'Matthew', chapter: 23, verse: '12', text: 'For those who exalt themselves will be humbled, and those who humble themselves will be exalted.' }
    ]
  },
  {
    id: 'theme-obedience',
    name: 'Obedience',
    description: 'Following God\'s commands with a willing heart',
    color: '#3498DB',
    verses: [
      { book: 'John', chapter: 14, verse: '15', text: 'If you love me, keep my commands.' },
      { book: '1 Samuel', chapter: 15, verse: '22', text: 'To obey is better than sacrifice, and to heed is better than the fat of rams.' },
      { book: 'James', chapter: 1, verse: '22', text: 'Do not merely listen to the word, and so deceive yourselves. Do what it says.' },
      { book: 'Deuteronomy', chapter: 11, verse: '27', text: 'The blessing if you obey the commands of the Lord your God that I am giving you today.' },
      { book: 'Acts', chapter: 5, verse: '29', text: 'We must obey God rather than human beings!' },
      { book: 'Luke', chapter: 11, verse: '28', text: 'Blessed rather are those who hear the word of God and obey it.' }
    ]
  },
  {
    id: 'theme-service',
    name: 'Service',
    description: 'Serving God by serving others',
    color: '#16A085',
    verses: [
      { book: 'Mark', chapter: 10, verse: '45', text: 'For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.' },
      { book: 'Galatians', chapter: 5, verse: '13', text: 'Serve one another humbly in love.' },
      { book: '1 Peter', chapter: 4, verse: '10', text: 'Each of you should use whatever gift you have received to serve others.' },
      { book: 'Colossians', chapter: 3, verse: '23-24', text: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.' },
      { book: 'Matthew', chapter: 20, verse: '28', text: 'Whoever wants to become great among you must be your servant.' },
      { book: 'Romans', chapter: 12, verse: '11', text: 'Never be lacking in zeal, but keep your spiritual fervor, serving the Lord.' }
    ]
  },
  {
    id: 'theme-faithfulness',
    name: 'Faithfulness',
    description: 'God\'s faithfulness and being faithful to Him',
    color: '#E67E22',
    verses: [
      { book: 'Lamentations', chapter: 3, verse: '22-23', text: 'Because of the Lord\'s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.' },
      { book: '1 Corinthians', chapter: 1, verse: '9', text: 'God is faithful, who has called you into fellowship with his Son, Jesus Christ our Lord.' },
      { book: 'Psalm', chapter: 89, verse: '8', text: 'Who is like you, Lord God Almighty? You, Lord, are mighty, and your faithfulness surrounds you.' },
      { book: 'Deuteronomy', chapter: 7, verse: '9', text: 'Know therefore that the Lord your God is God; he is the faithful God, keeping his covenant of love.' },
      { book: 'Matthew', chapter: 25, verse: '21', text: 'Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things.' },
      { book: 'Revelation', chapter: 2, verse: '10', text: 'Be faithful, even to the point of death, and I will give you life as your victor\'s crown.' }
    ]
  },
  {
    id: 'theme-provision',
    name: 'God\'s Provision',
    description: 'Trusting God to meet all your needs',
    color: '#27AE60',
    verses: [
      { book: 'Philippians', chapter: 4, verse: '19', text: 'And my God will meet all your needs according to the riches of his glory in Christ Jesus.' },
      { book: 'Matthew', chapter: 6, verse: '31-33', text: 'Do not worry, saying, "What shall we eat?" or "What shall we drink?"... But seek first his kingdom and his righteousness, and all these things will be given to you as well.' },
      { book: 'Psalm', chapter: 23, verse: '1', text: 'The Lord is my shepherd, I lack nothing.' },
      { book: 'Genesis', chapter: 22, verse: '14', text: 'Abraham called that place The Lord Will Provide.' },
      { book: 'Luke', chapter: 12, verse: '24', text: 'Consider the ravens: They do not sow or reap, yet God feeds them. And how much more valuable you are than birds!' },
      { book: '2 Corinthians', chapter: 9, verse: '8', text: 'And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.' }
    ]
  },
  {
    id: 'theme-guidance',
    name: 'Divine Guidance',
    description: 'Following God\'s direction for your life',
    color: '#8E44AD',
    verses: [
      { book: 'Proverbs', chapter: 3, verse: '5-6', text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.' },
      { book: 'Psalm', chapter: 32, verse: '8', text: 'I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.' },
      { book: 'Isaiah', chapter: 30, verse: '21', text: 'Whether you turn to the right or to the left, your ears will hear a voice behind you, saying, "This is the way; walk in it."' },
      { book: 'Psalm', chapter: 25, verse: '9', text: 'He guides the humble in what is right and teaches them his way.' },
      { book: 'John', chapter: 16, verse: '13', text: 'But when he, the Spirit of truth, comes, he will guide you into all the truth.' },
      { book: 'Psalm', chapter: 119, verse: '105', text: 'Your word is a lamp for my feet, a light on my path.' }
    ]
  },
  {
    id: 'theme-mercy',
    name: 'Mercy',
    description: 'Experiencing and extending God\'s mercy',
    color: '#1ABC9C',
    verses: [
      { book: 'Lamentations', chapter: 3, verse: '22-23', text: 'Because of the Lord\'s great love we are not consumed, for his compassions never fail.' },
      { book: 'Ephesians', chapter: 2, verse: '4-5', text: 'But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions.' },
      { book: 'Matthew', chapter: 5, verse: '7', text: 'Blessed are the merciful, for they will be shown mercy.' },
      { book: 'Micah', chapter: 6, verse: '8', text: 'He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.' },
      { book: 'Psalm', chapter: 103, verse: '8', text: 'The Lord is compassionate and gracious, slow to anger, abounding in love.' },
      { book: 'James', chapter: 2, verse: '13', text: 'Mercy triumphs over judgment.' }
    ]
  }
];
