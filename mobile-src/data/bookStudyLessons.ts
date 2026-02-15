export interface StudyLesson {
  id: string;
  bookId: string;
  lessonNumber: number;
  title: string;
  summary: string;
  sections: StudySection[];
  keyPoints: string[];
  reflection: string;
  prayer: string;
}

export interface StudySection {
  heading: string;
  content: string;
  verses?: string[];
  illustration?: string;
}

// GENESIS STUDY LESSONS
export const genesisLessons: StudyLesson[] = [
  {
    id: 'genesis-lesson-1',
    bookId: 'genesis',
    lessonNumber: 1,
    title: 'In the Beginning: Creation',
    summary: 'Discover how God created the universe in six days and rested on the seventh, establishing the foundation for all of Scripture.',
    sections: [
      {
        heading: 'The Creator God',
        content: 'Genesis opens with the most profound statement ever written: "In the beginning God created the heavens and the earth." This declaration establishes God as the eternal, all-powerful Creator who existed before all things. Unlike the creation myths of other ancient cultures, Genesis presents a systematic, orderly creation by a sovereign God who speaks things into existence.',
        verses: ['Genesis 1:1'],
        illustration: 'Imagine an artist beginning with a blank canvas. God began with nothing and created everything through the power of His word.'
      },
      {
        heading: 'The Six Days of Creation',
        content: 'God created the universe in six days, each day building upon the last:\n\n• Day 1: Light and darkness\n• Day 2: Sky and water\n• Day 3: Land, seas, and vegetation\n• Day 4: Sun, moon, and stars\n• Day 5: Fish and birds\n• Day 6: Animals and humans\n\nEach day concluded with God declaring His work "good." This shows God\'s intentional design and pleasure in His creation.',
        verses: ['Genesis 1:3-31']
      },
      {
        heading: 'Humans: Made in God\'s Image',
        content: 'On the sixth day, God created humans differently from all other creatures. He made them "in His own image" (Genesis 1:27). This means humans have:\n\n• The ability to think and reason\n• Moral awareness (knowing right from wrong)\n• Capacity for relationship with God\n• Creative abilities\n• Dominion over creation\n\nGod created humans male and female, equal in value but with complementary roles. He blessed them and gave them the mandate to "be fruitful and multiply" and to care for His creation.',
        verses: ['Genesis 1:26-28']
      },
      {
        heading: 'The Sabbath Rest',
        content: 'God rested on the seventh day, not because He was tired, but to establish a pattern for humanity. The Sabbath teaches us:\n\n• God\'s work was complete and perfect\n• Rest is a gift from God\n• One day in seven should be set apart\n• Trust in God\'s provision, not our own labor\n\nThis principle of Sabbath rest later became one of the Ten Commandments and points forward to the ultimate rest we find in Christ.',
        verses: ['Genesis 2:2-3']
      }
    ],
    keyPoints: [
      'God is eternal and existed before all creation',
      'Everything was created by God\'s powerful word',
      'Humans are uniquely made in God\'s image',
      'Creation was orderly, purposeful, and "very good"',
      'God established the pattern of work and rest'
    ],
    reflection: 'As you look at the world around you, can you see evidence of God\'s creative design? How does knowing you are made in God\'s image affect how you view yourself and others?',
    prayer: 'Creator God, thank You for designing this beautiful world and for creating me in Your image. Help me to appreciate Your creation and to use the gifts You\'ve given me to bring You glory. Amen.'
  },
  {
    id: 'genesis-lesson-2',
    bookId: 'genesis',
    lessonNumber: 2,
    title: 'The Fall: Sin Enters the World',
    summary: 'Learn how Adam and Eve\'s disobedience brought sin and death into God\'s perfect creation, and discover God\'s first promise of redemption.',
    sections: [
      {
        heading: 'Life in the Garden',
        content: 'God placed Adam and Eve in the Garden of Eden, a perfect paradise where they enjoyed:\n\n• Direct fellowship with God\n• Abundant provision\n• Meaningful work (tending the garden)\n• Perfect harmony with creation\n• Freedom with one boundary\n\nGod gave them one command: not to eat from the tree of the knowledge of good and evil. This command wasn\'t restrictive but protective, allowing them to show love to God through obedience.',
        verses: ['Genesis 2:15-17'],
        illustration: 'A loving parent sets boundaries not to restrict a child\'s joy but to protect them from harm.'
      },
      {
        heading: 'The Temptation',
        content: 'Satan, appearing as a serpent, tempted Eve with a subtle strategy:\n\n1. He questioned God\'s word: "Did God really say...?"\n2. He denied God\'s warning: "You will not certainly die"\n3. He appealed to pride: "You will be like God"\n\nEve saw that the fruit was:\n• Good for food (physical appeal)\n• Pleasing to the eye (aesthetic appeal)\n• Desirable for gaining wisdom (intellectual appeal)\n\nShe ate and gave some to Adam, who was with her. Both chose to disobey God.',
        verses: ['Genesis 3:1-6']
      },
      {
        heading: 'The Consequences',
        content: 'Sin immediately brought devastating consequences:\n\n• Spiritual death: Broken fellowship with God\n• Shame and fear: They hid from God\n• Blame-shifting: Neither took responsibility\n• Cursed ground: Work became toilsome\n• Pain in childbirth: Suffering entered human experience\n• Physical death: Mortality became reality\n• Expulsion from Eden: Loss of paradise\n\nThese consequences affect all humanity. Romans 5:12 tells us that "sin entered the world through one man, and death through sin, and in this way death came to all people."',
        verses: ['Genesis 3:7-24', 'Romans 5:12']
      },
      {
        heading: 'The First Gospel Promise',
        content: 'Even in judgment, God showed mercy. He promised that the offspring of the woman would crush the serpent\'s head (Genesis 3:15). This is the first prophecy of Jesus Christ, who would come to defeat Satan and reverse the curse of sin.\n\nGod also made garments of skin for Adam and Eve, requiring the death of an animal. This foreshadowed the sacrificial system and ultimately pointed to Jesus, the Lamb of God who takes away the sin of the world.',
        verses: ['Genesis 3:15, 21'],
        illustration: 'Though sin broke our relationship with God, He immediately began working out His plan to restore us through Jesus.'
      }
    ],
    keyPoints: [
      'Temptation often begins by questioning God\'s word',
      'Sin brings separation from God and consequences',
      'We cannot hide our sin from God',
      'God judged sin but also provided hope',
      'Genesis 3:15 is the first promise of a Savior'
    ],
    reflection: 'In what ways are you tempted to question God\'s word today? How does the promise of Genesis 3:15 give you hope?',
    prayer: 'Heavenly Father, forgive me for the times I have doubted Your word and chosen my own way. Thank You for not abandoning humanity in our sin but providing a way back to You through Jesus. Help me to trust and obey You. Amen.'
  },
  {
    id: 'genesis-lesson-3',
    bookId: 'genesis',
    lessonNumber: 3,
    title: 'Noah and the Flood: God\'s Judgment and Mercy',
    summary: 'Explore the account of Noah, the flood, and God\'s covenant promise to never again destroy the earth with water.',
    sections: [
      {
        heading: 'The World Grows Wicked',
        content: 'As humanity multiplied, sin also increased. By Noah\'s time, "The Lord saw how great the wickedness of the human race had become on the earth, and that every inclination of the thoughts of the human heart was only evil all the time" (Genesis 6:5).\n\nGod\'s heart was deeply troubled by human sin. His decision to send a flood was an act of judgment against persistent evil, but also mercy—preventing sin from completely corrupting all humanity.',
        verses: ['Genesis 6:5-7']
      },
      {
        heading: 'Noah Found Favor',
        content: 'In the midst of widespread wickedness, "Noah found favor in the eyes of the Lord" (Genesis 6:8). What made Noah different?\n\n• He was righteous in his generation\n• He was blameless among the people\n• He walked faithfully with God\n\nGod gave Noah specific instructions to build an ark—a massive boat to save his family and representatives of all animal kinds. Building the ark required:\n• Faith in God\'s warning\n• Obedience despite mockery\n• Perseverance over many years (possibly 100+ years)\n\nNoah did everything exactly as God commanded.',
        verses: ['Genesis 6:8-9, 22']
      },
      {
        heading: 'The Flood',
        content: 'When Noah, his family, and the animals were safely in the ark, God closed the door. Then:\n\n• Rain fell for 40 days and 40 nights\n• Floodwaters covered the earth for 150 days\n• Every living thing on dry land perished\n• Only those in the ark survived\n\nThe flood demonstrates:\n• God\'s holiness—He cannot tolerate persistent sin\n• God\'s justice—Sin must be judged\n• God\'s mercy—He provided a way of salvation\n• God\'s faithfulness—He protected Noah\'s family',
        verses: ['Genesis 7:11-24']
      },
      {
        heading: 'The Rainbow Covenant',
        content: 'After the flood, God made a covenant with Noah:\n\n• "Never again will I curse the ground because of humans"\n• "Never again will all life be destroyed by the waters of a flood"\n• "Never again will there be a flood to destroy the earth"\n\nGod set the rainbow in the clouds as a sign of this covenant. Every time we see a rainbow, it reminds us of God\'s mercy and faithfulness. This covenant is still in effect today—despite humanity\'s continued sin, God has kept His promise.',
        verses: ['Genesis 9:8-17'],
        illustration: 'Just as the ark saved Noah\'s family from judgment, Jesus is our ark of salvation, protecting us from the judgment our sins deserve.'
      }
    ],
    keyPoints: [
      'Sin always has consequences, including judgment',
      'God provides a way of salvation for those who trust Him',
      'Obedience to God requires faith, even when we don\'t understand',
      'God keeps His promises faithfully',
      'The rainbow is a permanent reminder of God\'s mercy'
    ],
    reflection: 'Noah had to trust God for many years while building the ark. What is God calling you to do that requires patient obedience?',
    prayer: 'Lord, thank You for Your mercy that saved Noah and his family, and for Your greater mercy in sending Jesus to save us from sin. Help me to walk faithfully with You as Noah did, trusting Your promises even when I don\'t see the fulfillment yet. Amen.'
  }
];

// MATTHEW STUDY LESSONS
export const matthewLessons: StudyLesson[] = [
  {
    id: 'matthew-lesson-1',
    bookId: 'matthew',
    lessonNumber: 1,
    title: 'The King is Born',
    summary: 'Discover the miraculous birth of Jesus Christ, the promised King from the line of David, and how God orchestrated events to fulfill ancient prophecies.',
    sections: [
      {
        heading: 'The Genealogy of the King',
        content: 'Matthew begins his Gospel with a genealogy tracing Jesus\' legal lineage through Joseph back to Abraham. This genealogy proves Jesus\' rightful claim to be:\n\n• The Son of David—the promised King\n• The Son of Abraham—the heir of God\'s covenant\n\nThe genealogy includes unexpected people:\n• Women (unusual for ancient genealogies)\n• Gentiles (like Rahab and Ruth)\n• Sinners (like Judah and David)\n\nThis shows that Jesus came for all people—men and women, Jews and Gentiles, sinners in need of grace.',
        verses: ['Matthew 1:1-17']
      },
      {
        heading: 'The Virgin Birth',
        content: 'Mary, a virgin engaged to Joseph, was found to be pregnant through the Holy Spirit. This scandalous situation could have resulted in Mary being stoned. However:\n\n• Joseph, being righteous, planned to divorce her quietly\n• An angel appeared to Joseph in a dream\n• The angel explained this was God\'s miraculous work\n• The child would save His people from their sins\n• His name would be Immanuel—"God with us"\n\nJoseph obeyed God and took Mary as his wife, showing faith and courage. The virgin birth is essential because:\n• It fulfilled prophecy (Isaiah 7:14)\n• It demonstrated Jesus\' unique identity as God and man\n• It meant Jesus was born without inheriting Adam\'s sin nature',
        verses: ['Matthew 1:18-25', 'Isaiah 7:14']
      },
      {
        heading: 'The Visit of the Wise Men',
        content: 'Wise men (magi) from the East saw a star and traveled to worship the newborn King. When they arrived in Jerusalem:\n\n• King Herod was disturbed by news of a rival king\n• The chief priests knew Messiah would be born in Bethlehem\n• Herod pretended to want to worship but planned to kill Jesus\n• The magi found Jesus and worshiped Him\n• They gave gifts of gold, frankincense, and myrrh\n• God warned them in a dream not to return to Herod\n\nThe wise men\'s gifts were significant:\n• Gold—for a king\n• Frankincense—for a priest/deity\n• Myrrh—for burial/suffering\n\nThese gifts foreshadowed Jesus\' roles as King, Priest, and Suffering Servant.',
        verses: ['Matthew 2:1-12']
      },
      {
        heading: 'Escape to Egypt',
        content: 'After the wise men left, an angel warned Joseph to flee to Egypt because Herod would seek to kill Jesus. Joseph immediately obeyed, taking Mary and Jesus to Egypt by night.\n\nHerod, furious that the wise men didn\'t return, ordered all boys two years and under in Bethlehem to be killed. This horrific massacre fulfilled Jeremiah\'s prophecy.\n\nAfter Herod died, an angel told Joseph it was safe to return. They settled in Nazareth, fulfilling another prophecy that Messiah would be called a Nazarene.\n\nGod\'s protection of Jesus shows:\n• His sovereign control over human affairs\n• His faithfulness to fulfill His promises\n• His care for His Son and for us',
        verses: ['Matthew 2:13-23'],
        illustration: 'From before His birth, Satan sought to destroy Jesus. Yet God\'s plan cannot be thwarted. Nothing can stop God\'s purposes!'
      }
    ],
    keyPoints: [
      'Jesus is the legal heir to David\'s throne',
      'The virgin birth fulfilled prophecy and proved Jesus\' unique identity',
      'Wise men from afar recognized Jesus as King while local leaders rejected Him',
      'God protected Jesus from Herod\'s massacre',
      'Jesus\' early life fulfilled multiple Old Testament prophecies'
    ],
    reflection: 'The wise men traveled far and gave costly gifts to worship Jesus. What have you given to honor the King?',
    prayer: 'Lord Jesus, thank You for coming to earth as Immanuel—God with us. Like Joseph, help me to obey You quickly. Like the wise men, help me to seek You diligently and worship You wholeheartedly. You are the King of kings! Amen.'
  },
  {
    id: 'matthew-lesson-2',
    bookId: 'matthew',
    lessonNumber: 2,
    title: 'The Sermon on the Mount: The Beatitudes',
    summary: 'Learn the revolutionary teachings of Jesus about true blessedness and the character of kingdom citizens.',
    sections: [
      {
        heading: 'Introduction to the Sermon',
        content: 'The Sermon on the Mount (Matthew 5-7) is Jesus\' most famous teaching. It contains the ethics and values of God\'s kingdom, showing what it means to truly follow Christ.\n\nJesus taught from a mountainside, echoing Moses receiving the Law on Mount Sinai. But while Moses brought God\'s law written on stone, Jesus—the new Moses—brings God\'s law written on hearts.\n\nThe sermon begins with the Beatitudes—eight declarations of blessing that turn worldly values upside down.',
        verses: ['Matthew 5:1-2']
      },
      {
        heading: 'The First Four Beatitudes',
        content: '1. "Blessed are the poor in spirit, for theirs is the kingdom of heaven"\n   - Recognizing spiritual bankruptcy before God\n   - Opposite of pride and self-sufficiency\n   - Required for entering God\'s kingdom\n\n2. "Blessed are those who mourn, for they will be comforted"\n   - Grieving over sin (personal and world\'s)\n   - Deep sorrow that leads to repentance\n   - God promises comfort and healing\n\n3. "Blessed are the meek, for they will inherit the earth"\n   - Meekness is strength under control\n   - Not weakness but humble submission to God\n   - The meek trust God for vindication\n\n4. "Blessed are those who hunger and thirst for righteousness"\n   - Intense desire for right standing with God\n   - Longing for God Himself\n   - Promise: They will be filled/satisfied',
        verses: ['Matthew 5:3-6']
      },
      {
        heading: 'The Last Four Beatitudes',
        content: '5. "Blessed are the merciful, for they will be shown mercy"\n   - Showing compassion to others\n   - Forgiving those who wrong us\n   - We receive the mercy we extend\n\n6. "Blessed are the pure in heart, for they will see God"\n   - Inner moral purity, not just outward behavior\n   - Undivided devotion to God\n   - Promise: We will see God (now spiritually, later literally)\n\n7. "Blessed are the peacemakers, for they will be called children of God"\n   - Actively working to reconcile people to God and each other\n   - Not just peace-lovers but peace-makers\n   - Reflects God\'s character as the ultimate Peacemaker\n\n8. "Blessed are those who are persecuted because of righteousness"\n   - Suffering for doing what\'s right\n   - Opposition is evidence of authentic faith\n   - Great reward awaits in heaven',
        verses: ['Matthew 5:7-12']
      },
      {
        heading: 'The Revolutionary Nature of Blessing',
        content: 'Each Beatitude contradicts worldly wisdom:\n\n• The world says be proud; Jesus says be poor in spirit\n• The world says be happy; Jesus says mourn over sin\n• The world says be strong and aggressive; Jesus says be meek\n• The world says pursue pleasure; Jesus says hunger for righteousness\n• The world says demand justice; Jesus says show mercy\n• The world says image matters; Jesus says be pure in heart\n• The world says look out for yourself; Jesus says make peace\n• The world says avoid suffering; Jesus says expect persecution\n\nThese attitudes are not natural—they come from the Holy Spirit transforming our hearts to be like Christ.',
        illustration: 'The Beatitudes describe the character of Jesus Himself—He perfectly embodied every one of these qualities.'
      }
    ],
    keyPoints: [
      'True blessedness comes from spiritual attitudes, not earthly circumstances',
      'The Beatitudes describe the character of kingdom citizens',
      'These attitudes are opposite to worldly values',
      'Each Beatitude has a promise attached to it',
      'We cannot live these out in our own strength—we need God\'s grace'
    ],
    reflection: 'Which Beatitude challenges you most? Ask God to develop that quality in your heart.',
    prayer: 'Lord Jesus, Your teachings turn my values upside down. Make me poor in spirit, help me mourn over sin, grant me meekness, create in me a hunger for righteousness, teach me mercy, purify my heart, use me as a peacemaker, and give me courage to endure persecution. Transform me to be like You. Amen.'
  }
];

// PSALMS STUDY LESSONS
export const psalmsLessons: StudyLesson[] = [
  {
    id: 'psalms-lesson-1',
    bookId: 'psalms',
    lessonNumber: 1,
    title: 'The Shepherd\'s Psalm: Psalm 23',
    summary: 'Explore the beloved Psalm 23, where David describes God as the caring Shepherd who provides, guides, protects, and comforts His people.',
    sections: [
      {
        heading: 'The LORD is My Shepherd',
        content: 'Psalm 23 begins with the most comforting declaration: "The LORD is my shepherd." This intimate picture of God reveals:\n\n• Personal relationship—"my" shepherd (not just a shepherd)\n• Caring provision—shepherds were devoted to their sheep\n• Protective leadership—shepherds defended their flocks\n• Intimate knowledge—shepherds knew each sheep by name\n\nDavid wrote this from experience—he was a shepherd boy who protected his father\'s sheep from lions and bears. He knew that just as he cared for his sheep, God cared for him even more perfectly.\n\nBecause God is our Shepherd, David concludes: "I lack nothing." Not that we have everything we want, but we have everything we need. God is enough.',
        verses: ['Psalm 23:1']
      },
      {
        heading: 'Green Pastures and Still Waters',
        content: '"He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul."\n\nThe Good Shepherd provides:\n• Green pastures—abundant provision and nourishment\n• Quiet waters—peace and refreshment (sheep fear rushing water)\n• Soul restoration—spiritual renewal and healing\n\nSheep will not lie down unless four conditions are met:\n1. They are free from fear\n2. They are free from friction with other sheep\n3. They are free from flies and pests\n4. They are free from hunger\n\nOur Shepherd creates these conditions for us. He gives us peace, reconciliation, protection from spiritual enemies, and satisfaction in Him.',
        verses: ['Psalm 23:2-3a'],
        illustration: 'Just as sheep trust their shepherd to find water and grass, we can trust God to lead us to what we need.'
      },
      {
        heading: 'Right Paths and Dark Valleys',
        content: '"He guides me along the right paths for his name\'s sake. Even though I walk through the darkest valley, I will fear no evil, for you are with me."\n\nGod guides us in righteousness—not just for our benefit, but for His glory ("for his name\'s sake"). When we follow Him, our lives display His character.\n\nThe "darkest valley" (traditionally "valley of the shadow of death") represents:\n• Times of deep suffering or loss\n• Fear and uncertainty\n• Facing death itself\n\nYet even here, we need not fear because:\n• God is WITH us (His presence)\n• He has a rod (to defend us)\n• He has a staff (to guide and rescue us)\n\nDavid shifts from talking about God ("He") to talking to God ("You"). In the darkest moments, we experience God\'s presence most personally.',
        verses: ['Psalm 23:3b-4']
      },
      {
        heading: 'Table, Cup, and Forever Home',
        content: '"You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows. Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the LORD forever."\n\nGod not only protects us from enemies but honors us in their sight:\n• The table represents a feast, celebration, provision\n• The anointing oil signifies honor, healing, and the Holy Spirit\n• The overflowing cup shows God\'s abundant blessings\n\nGod\'s goodness and unfailing love (chesed—covenant love) pursue us every day. And our final destination is not wandering in a wilderness, but dwelling in God\'s house forever.\n\nFor Christians, this points to eternal life with God in the new heaven and new earth, where we will feast at the marriage supper of the Lamb and dwell with God forever.',
        verses: ['Psalm 23:5-6'],
        illustration: 'From birth to death and beyond, our Good Shepherd walks with us, provides for us, and prepares an eternal home for us.'
      }
    ],
    keyPoints: [
      'God is our personal, caring Shepherd',
      'He provides everything we truly need',
      'He is with us even in the darkest valleys',
      'His goodness and love pursue us all our days',
      'We have the hope of dwelling with Him forever'
    ],
    reflection: 'In what area of your life do you need to trust the Good Shepherd right now? What valley are you walking through?',
    prayer: 'LORD, You are my Shepherd. Thank You that I lack nothing because I have You. Lead me beside still waters, restore my soul, and guide me in paths of righteousness. Even when I walk through dark valleys, help me to fear no evil because You are with me. Prepare me for the eternal feast in Your presence. Amen.'
  }
];

export const allStudyLessons: Record<string, StudyLesson[]> = {
  genesis: genesisLessons,
  matthew: matthewLessons,
  psalms: psalmsLessons
};

export function getStudyLessons(bookId: string): StudyLesson[] {
  return allStudyLessons[bookId] || [];
}

export function getStudyLesson(bookId: string, lessonNumber: number): StudyLesson | undefined {
  const lessons = getStudyLessons(bookId);
  return lessons.find(lesson => lesson.lessonNumber === lessonNumber);
}
