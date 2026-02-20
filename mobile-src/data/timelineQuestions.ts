import { Question } from '../types';

// CREATION & EARLY HISTORY - Focus on chronological ordering
export const creationQuestions: Record<string, Question[]> = {
  'timeline-creation-1': [
    {
      id: 'timeline-creation-1-q1',
      type: 'order',
      question: 'Put these creation days in the correct order:',
      options: ['God created light', 'God created the sky', 'God created land and plants', 'God created sun, moon, and stars', 'God created sea creatures and birds', 'God created land animals and humans'],
      correctAnswer: ['God created light', 'God created the sky', 'God created land and plants', 'God created sun, moon, and stars', 'God created sea creatures and birds', 'God created land animals and humans']
    },
    {
      id: 'timeline-creation-1-q2',
      type: 'multiple-choice',
      question: 'What happened FIRST in the Garden of Eden?',
      options: ['God placed Adam in the garden', 'God gave Adam the command not to eat the forbidden fruit', 'Eve was created from Adam\'s rib', 'Adam named all the animals'],
      correctAnswer: 'God placed Adam in the garden'
    },
    {
      id: 'timeline-creation-1-q3',
      type: 'order',
      question: 'Order these events from the Fall:',
      options: ['The serpent spoke to Eve', 'Eve ate the fruit', 'Eve gave fruit to Adam', 'They heard God walking in the garden', 'They hid from God'],
      correctAnswer: ['The serpent spoke to Eve', 'Eve ate the fruit', 'Eve gave fruit to Adam', 'They heard God walking in the garden', 'They hid from God']
    },
    {
      id: 'timeline-creation-1-q4',
      type: 'multiple-choice',
      question: 'Which event happened BEFORE Cain killed Abel?',
      options: ['God accepted Abel\'s offering but rejected Cain\'s', 'Cain and Abel both brought their offerings to the LORD', 'God warned Cain that sin was crouching at the door', 'Adam and Eve mourned the loss of the garden'],
      correctAnswer: 'God accepted Abel\'s offering but rejected Cain\'s'
    },
    {
      id: 'timeline-creation-1-q5',
      type: 'multiple-choice',
      question: 'What happened AFTER Cain killed Abel?',
      options: ['God marked Cain and sent him away', 'Cain went before the elders and confessed his sin', 'Adam interceded for Cain before God', 'Cain offered a sacrifice to atone for Abel\'s blood'],
      correctAnswer: 'God marked Cain and sent him away'
    },
    {
      id: 'timeline-creation-1-q6',
      type: 'order',
      question: 'Put Adam and Eve\'s descendants in generational order:',
      options: ['Adam', 'Seth', 'Enosh', 'Enoch', 'Methuselah', 'Noah'],
      correctAnswer: ['Adam', 'Seth', 'Enosh', 'Enoch', 'Methuselah', 'Noah']
    },
    {
      id: 'timeline-creation-1-q7',
      type: 'multiple-choice',
      question: 'Who lived LONGER according to the Bible?',
      options: ['Methuselah (969 years)', 'Jared (962 years)', 'Noah (950 years)', 'Adam (930 years)'],
      correctAnswer: 'Methuselah (969 years)'
    },
    {
      id: 'timeline-creation-1-q8',
      type: 'multiple-choice',
      question: 'What came FIRST chronologically?',
      options: ['Creation of light', 'The creation of the sky and waters', 'The creation of Adam in the garden', 'God resting on the seventh day'],
      correctAnswer: 'Creation of light'
    },
    {
      id: 'timeline-creation-1-q9',
      type: 'multiple-choice',
      question: 'Which generation was Enoch, who walked with God and didn\'t die?',
      options: ['7th from Adam', '5th from Adam', '9th from Adam', '6th from Adam'],
      correctAnswer: '7th from Adam'
    },
    {
      id: 'timeline-creation-1-q10',
      type: 'order',
      question: 'Order these key early events:',
      options: ['Creation of Adam and Eve', 'The Fall and expulsion from Eden', 'Birth of Cain and Abel', 'Cain kills Abel', 'Birth of Seth'],
      correctAnswer: ['Creation of Adam and Eve', 'The Fall and expulsion from Eden', 'Birth of Cain and Abel', 'Cain kills Abel', 'Birth of Seth']
    },
    {
      id: 'timeline-creation-1-q11',
      type: 'multiple-choice',
      question: 'During whose lifetime was "the name of the LORD first called upon"?',
      options: ['Enosh (Seth\'s son)', 'Seth himself, after Adam died', 'Enoch, who walked with God', 'Lamech, who spoke of the LORD\'s vengeance'],
      correctAnswer: 'Enosh (Seth\'s son)'
    },
    {
      id: 'timeline-creation-1-q12',
      type: 'multiple-choice',
      question: 'How many generations passed between Adam and Noah?',
      options: ['10 generations', '7 generations', '12 generations', '14 generations'],
      correctAnswer: '10 generations'
    }
  ],

  'timeline-creation-2': [
    {
      id: 'timeline-creation-2-q1',
      type: 'order',
      question: 'Order the events leading to the flood:',
      options: ['Humanity became increasingly wicked', 'God decided to destroy the earth', 'God found Noah righteous', 'God told Noah to build an ark', 'Noah built the ark'],
      correctAnswer: ['Humanity became increasingly wicked', 'God decided to destroy the earth', 'God found Noah righteous', 'God told Noah to build an ark', 'Noah built the ark']
    },
    {
      id: 'timeline-creation-2-q2',
      type: 'multiple-choice',
      question: 'How long did Noah have to build the ark before the flood came?',
      options: ['120 years', '100 years', '40 years', '70 years'],
      correctAnswer: '120 years'
    },
    {
      id: 'timeline-creation-2-q3',
      type: 'order',
      question: 'Put these flood events in order:',
      options: ['Animals entered the ark', 'God shut the door', 'Rain began to fall', 'Water covered the mountains', 'The ark rested on Ararat'],
      correctAnswer: ['Animals entered the ark', 'God shut the door', 'Rain began to fall', 'Water covered the mountains', 'The ark rested on Ararat']
    },
    {
      id: 'timeline-creation-2-q4',
      type: 'multiple-choice',
      question: 'How long did it rain during the flood?',
      options: ['40 days and 40 nights', '20 days and 20 nights', '7 days and 7 nights', '100 days and nights'],
      correctAnswer: '40 days and 40 nights'
    },
    {
      id: 'timeline-creation-2-q5',
      type: 'order',
      question: 'Order Noah\'s bird releases:',
      options: ['Sent out a raven', 'First dove returned with nothing', 'Second dove returned with olive leaf', 'Third dove didn\'t return'],
      correctAnswer: ['Sent out a raven', 'First dove returned with nothing', 'Second dove returned with olive leaf', 'Third dove didn\'t return']
    },
    {
      id: 'timeline-creation-2-q6',
      type: 'multiple-choice',
      question: 'What did Noah do FIRST after leaving the ark?',
      options: ['Built an altar and offered sacrifices', 'Gave thanks to God and blessed his sons', 'Planted a vineyard and gave its firstfruits to the LORD', 'Gathered his family and renewed the covenant with God'],
      correctAnswer: 'Built an altar and offered sacrifices'
    },
    {
      id: 'timeline-creation-2-q7',
      type: 'multiple-choice',
      question: 'What sign did God give AFTER the flood as a covenant promise?',
      options: ['The rainbow', 'The dove returning with an olive branch', 'The mountain of Ararat where the ark rested', 'A pillar of cloud over the renewed earth'],
      correctAnswer: 'The rainbow'
    },
    {
      id: 'timeline-creation-2-q8',
      type: 'order',
      question: 'Order these post-flood events:',
      options: ['Noah left the ark', 'God made a covenant with Noah', 'Noah planted a vineyard', 'Noah became drunk', 'Ham saw Noah\'s nakedness'],
      correctAnswer: ['Noah left the ark', 'God made a covenant with Noah', 'Noah planted a vineyard', 'Noah became drunk', 'Ham saw Noah\'s nakedness']
    },
    {
      id: 'timeline-creation-2-q9',
      type: 'multiple-choice',
      question: 'How long was Noah on the ark in total?',
      options: ['About 1 year (370 days)', 'About 6 months (180 days)', 'About 8 months (240 days)', '150 days exactly'],
      correctAnswer: 'About 1 year (370 days)'
    },
    {
      id: 'timeline-creation-2-q10',
      type: 'multiple-choice',
      question: 'Which of Noah\'s sons was cursed through his son Canaan?',
      options: ['Ham', 'Canaan directly (Ham\'s son)', 'Shem, for he was the eldest', 'Japheth, who spread to the distant coastlands'],
      correctAnswer: 'Ham'
    },
    {
      id: 'timeline-creation-2-q11',
      type: 'multiple-choice',
      question: 'How old was Noah when the flood came?',
      options: ['600 years old', '480 years old', '500 years old', '550 years old'],
      correctAnswer: '600 years old'
    },
    {
      id: 'timeline-creation-2-q12',
      type: 'multiple-choice',
      question: 'From which son of Noah did Abraham descend?',
      options: ['Shem', 'Ham', 'Japheth', 'Eber, the ancestor of the Hebrews'],
      correctAnswer: 'Shem'
    }
  ],

  'timeline-creation-3': [
    {
      id: 'timeline-creation-3-q1',
      type: 'order',
      question: 'Order Abraham\'s life events:',
      options: ['Called by God from Ur', 'Traveled to Canaan', 'Went to Egypt due to famine', 'Separated from Lot', 'Rescued Lot from kings'],
      correctAnswer: ['Called by God from Ur', 'Traveled to Canaan', 'Went to Egypt due to famine', 'Separated from Lot', 'Rescued Lot from kings']
    },
    {
      id: 'timeline-creation-3-q2',
      type: 'multiple-choice',
      question: 'How old was Abraham when God first called him?',
      options: ['75 years old', '60 years old', '80 years old', '70 years old'],
      correctAnswer: '75 years old'
    },
    {
      id: 'timeline-creation-3-q3',
      type: 'order',
      question: 'Put these events in Abraham and Sarah\'s life in order:',
      options: ['God promised Abraham a son', 'Sarah gave Hagar to Abraham', 'Ishmael was born', 'God appeared and reaffirmed His promise', 'Isaac was born'],
      correctAnswer: ['God promised Abraham a son', 'Sarah gave Hagar to Abraham', 'Ishmael was born', 'God appeared and reaffirmed His promise', 'Isaac was born']
    },
    {
      id: 'timeline-creation-3-q4',
      type: 'multiple-choice',
      question: 'How old was Abraham when Isaac was born?',
      options: ['100 years old', '99 years old', '86 years old', '90 years old'],
      correctAnswer: '100 years old'
    },
    {
      id: 'timeline-creation-3-q5',
      type: 'multiple-choice',
      question: 'Which son was born FIRST?',
      options: ['Ishmael (to Hagar)', 'Isaac (to Sarah)', 'Zimran (to Keturah)', 'Medan (to Keturah)'],
      correctAnswer: 'Ishmael (to Hagar)'
    },
    {
      id: 'timeline-creation-3-q6',
      type: 'order',
      question: 'Order these events regarding Lot:',
      options: ['Lot traveled with Abraham', 'Abraham and Lot separated', 'Lot chose the Jordan valley', 'Lot moved to Sodom', 'Sodom was destroyed and Lot escaped'],
      correctAnswer: ['Lot traveled with Abraham', 'Abraham and Lot separated', 'Lot chose the Jordan valley', 'Lot moved to Sodom', 'Sodom was destroyed and Lot escaped']
    },
    {
      id: 'timeline-creation-3-q7',
      type: 'multiple-choice',
      question: 'What happened BEFORE the destruction of Sodom and Gomorrah?',
      options: ['Three visitors came to Abraham', 'Abraham interceded for Sodom before God', 'The angels arrived at Sodom\'s gate in the evening', 'Lot offered hospitality to the two strangers'],
      correctAnswer: 'Three visitors came to Abraham'
    },
    {
      id: 'timeline-creation-3-q8',
      type: 'order',
      question: 'Order the covenant signs God gave Abraham:',
      options: ['God made a covenant promise', 'Covenant of circumcision', 'Three visitors announced Isaac\'s birth', 'Isaac was born', 'God tested Abraham with Isaac'],
      correctAnswer: ['God made a covenant promise', 'Covenant of circumcision', 'Three visitors announced Isaac\'s birth', 'Isaac was born', 'God tested Abraham with Isaac']
    },
    {
      id: 'timeline-creation-3-q9',
      type: 'multiple-choice',
      question: 'When did God test Abraham by asking him to sacrifice Isaac?',
      options: ['After Isaac had grown to be a young man', 'When Isaac was three years old, at his weaning feast', 'Immediately after God confirmed the covenant of circumcision', 'After Ishmael and Hagar had been sent away from the camp'],
      correctAnswer: 'After Isaac had grown to be a young man'
    },
    {
      id: 'timeline-creation-3-q10',
      type: 'multiple-choice',
      question: 'What did Abraham do AFTER God provided the ram instead of Isaac?',
      options: ['Named the place "The LORD Will Provide"', 'Returned home immediately', 'Made a new altar', 'Sent Isaac away'],
      correctAnswer: 'Named the place "The LORD Will Provide"'
    },
    {
      id: 'timeline-creation-3-q11',
      type: 'order',
      question: 'Order these events in Sarah\'s life:',
      options: ['Left Ur with Abraham', 'Went to Egypt', 'Gave Hagar to Abraham', 'Laughed when told she\'d have a son', 'Isaac was born', 'Sarah died'],
      correctAnswer: ['Left Ur with Abraham', 'Went to Egypt', 'Gave Hagar to Abraham', 'Laughed when told she\'d have a son', 'Isaac was born', 'Sarah died']
    },
    {
      id: 'timeline-creation-3-q12',
      type: 'multiple-choice',
      question: 'How many years passed between God\'s first promise to Abraham and Isaac\'s birth?',
      options: ['25 years', '10 years', '40 years', '13 years'],
      correctAnswer: '25 years'
    }
  ],

  'timeline-creation-4': [
    {
      id: 'timeline-creation-4-q1',
      type: 'order',
      question: 'Order Isaac\'s early life:',
      options: ['Isaac was born', 'Isaac was weaned', 'Ishmael mocked Isaac', 'Hagar and Ishmael were sent away', 'Abraham took Isaac to be sacrificed'],
      correctAnswer: ['Isaac was born', 'Isaac was weaned', 'Ishmael mocked Isaac', 'Hagar and Ishmael were sent away', 'Abraham took Isaac to be sacrificed']
    },
    {
      id: 'timeline-creation-4-q2',
      type: 'multiple-choice',
      question: 'How old was Isaac when Abraham tried to sacrifice him?',
      options: ['The Bible doesn\'t specify, but likely a young man', '12 years old', '5 years old', '40 years old'],
      correctAnswer: 'The Bible doesn\'t specify, but likely a young man'
    },
    {
      id: 'timeline-creation-4-q3',
      type: 'order',
      question: 'Order the events of Isaac finding a wife:',
      options: ['Sarah died', 'Abraham sent his servant to find a wife', 'The servant prayed at the well', 'Rebekah gave water to the camels', 'Rebekah agreed to go', 'Isaac married Rebekah'],
      correctAnswer: ['Sarah died', 'Abraham sent his servant to find a wife', 'The servant prayed at the well', 'Rebekah gave water to the camels', 'Rebekah agreed to go', 'Isaac married Rebekah']
    },
    {
      id: 'timeline-creation-4-q4',
      type: 'multiple-choice',
      question: 'How old was Isaac when he married Rebekah?',
      options: ['40 years old', '25 years old', '60 years old', '37 years old'],
      correctAnswer: '40 years old'
    },
    {
      id: 'timeline-creation-4-q5',
      type: 'multiple-choice',
      question: 'Which twin was born FIRST?',
      options: ['Esau', 'Jacob', 'They were born simultaneously', 'The Bible doesn\'t say'],
      correctAnswer: 'Esau'
    },
    {
      id: 'timeline-creation-4-q6',
      type: 'order',
      question: 'Order the story of Esau selling his birthright:',
      options: ['Esau came in from hunting, famished', 'Jacob was cooking stew', 'Esau asked for food', 'Jacob offered to trade for the birthright', 'Esau agreed and ate'],
      correctAnswer: ['Esau came in from hunting, famished', 'Jacob was cooking stew', 'Esau asked for food', 'Jacob offered to trade for the birthright', 'Esau agreed and ate']
    },
    {
      id: 'timeline-creation-4-q7',
      type: 'multiple-choice',
      question: 'How long was Rebekah barren before having children?',
      options: ['20 years', '10 years', '7 years', '40 years'],
      correctAnswer: '20 years'
    },
    {
      id: 'timeline-creation-4-q8',
      type: 'order',
      question: 'Order Jacob stealing Esau\'s blessing:',
      options: ['Isaac grew old and blind', 'Isaac asked Esau to hunt game', 'Rebekah overheard', 'Rebekah prepared goat meat', 'Jacob disguised himself', 'Isaac blessed Jacob thinking he was Esau'],
      correctAnswer: ['Isaac grew old and blind', 'Isaac asked Esau to hunt game', 'Rebekah overheard', 'Rebekah prepared goat meat', 'Jacob disguised himself', 'Isaac blessed Jacob thinking he was Esau']
    },
    {
      id: 'timeline-creation-4-q9',
      type: 'multiple-choice',
      question: 'What happened AFTER Jacob received Isaac\'s blessing?',
      options: ['Esau returned and discovered the deception', 'Jacob left for Haran', 'Isaac died', 'Jacob married Rachel'],
      correctAnswer: 'Esau returned and discovered the deception'
    },
    {
      id: 'timeline-creation-4-q10',
      type: 'multiple-choice',
      question: 'Why did Rebekah send Jacob away to Haran?',
      options: ['She feared Esau would kill Jacob', 'To find him a wife', 'To escape a famine', 'To learn from Laban'],
      correctAnswer: 'She feared Esau would kill Jacob'
    },
    {
      id: 'timeline-creation-4-q11',
      type: 'multiple-choice',
      question: 'How old were Jacob and Esau when they were born?',
      options: ['Isaac was 60 when they were born', 'Isaac was 40', 'Isaac was 100', 'Isaac was 75'],
      correctAnswer: 'Isaac was 60 when they were born'
    },
    {
      id: 'timeline-creation-4-q12',
      type: 'order',
      question: 'Order the patriarchs by generation:',
      options: ['Abraham', 'Isaac', 'Jacob', 'Joseph'],
      correctAnswer: ['Abraham', 'Isaac', 'Jacob', 'Joseph']
    }
  ],

  'timeline-creation-5': [
    {
      id: 'timeline-creation-5-q1',
      type: 'order',
      question: 'Order Jacob\'s journey to Haran:',
      options: ['Jacob left Beer-sheba', 'Jacob dreamed of the ladder to heaven', 'Jacob set up a stone pillar at Bethel', 'Jacob arrived at the well near Haran', 'Jacob met Rachel'],
      correctAnswer: ['Jacob left Beer-sheba', 'Jacob dreamed of the ladder to heaven', 'Jacob set up a stone pillar at Bethel', 'Jacob arrived at the well near Haran', 'Jacob met Rachel']
    },
    {
      id: 'timeline-creation-5-q2',
      type: 'multiple-choice',
      question: 'Whom did Jacob meet FIRST at the well?',
      options: ['Rachel with sheep', 'Laban', 'Leah', 'Other shepherds'],
      correctAnswer: 'Rachel with sheep'
    },
    {
      id: 'timeline-creation-5-q3',
      type: 'order',
      question: 'Order the events of Jacob\'s marriages:',
      options: ['Jacob worked 7 years for Rachel', 'Jacob married Leah (thinking she was Rachel)', 'Jacob discovered the deception', 'Jacob married Rachel a week later', 'Jacob worked another 7 years'],
      correctAnswer: ['Jacob worked 7 years for Rachel', 'Jacob married Leah (thinking she was Rachel)', 'Jacob discovered the deception', 'Jacob married Rachel a week later', 'Jacob worked another 7 years']
    },
    {
      id: 'timeline-creation-5-q4',
      type: 'multiple-choice',
      question: 'Which son was born FIRST to Jacob?',
      options: ['Reuben (to Leah)', 'Joseph (to Rachel)', 'Dan (to Bilhah)', 'Gad (to Zilpah)'],
      correctAnswer: 'Reuben (to Leah)'
    },
    {
      id: 'timeline-creation-5-q5',
      type: 'order',
      question: 'Order Rachel\'s children by birth:',
      options: ['Joseph', 'Benjamin'],
      correctAnswer: ['Joseph', 'Benjamin']
    },
    {
      id: 'timeline-creation-5-q6',
      type: 'multiple-choice',
      question: 'How many years total did Jacob work for Laban?',
      options: ['20 years', '14 years', '7 years', '40 years'],
      correctAnswer: '20 years'
    },
    {
      id: 'timeline-creation-5-q7',
      type: 'order',
      question: 'Order Jacob\'s return to Canaan:',
      options: ['Jacob secretly left Laban', 'Laban pursued Jacob', 'They made a covenant', 'Jacob sent messengers to Esau', 'Jacob wrestled with God'],
      correctAnswer: ['Jacob secretly left Laban', 'Laban pursued Jacob', 'They made a covenant', 'Jacob sent messengers to Esau', 'Jacob wrestled with God']
    },
    {
      id: 'timeline-creation-5-q8',
      type: 'multiple-choice',
      question: 'When did God change Jacob\'s name to Israel?',
      options: ['After wrestling with Him at Peniel', 'At Bethel on the way to Haran', 'When Joseph was born', 'After Rachel died'],
      correctAnswer: 'After wrestling with Him at Peniel'
    },
    {
      id: 'timeline-creation-5-q9',
      type: 'order',
      question: 'Order Jacob and Esau\'s reunion:',
      options: ['Jacob divided his family into groups', 'Jacob bowed seven times', 'Esau ran to meet Jacob', 'They embraced and wept', 'Esau returned to Seir'],
      correctAnswer: ['Jacob divided his family into groups', 'Jacob bowed seven times', 'Esau ran to meet Jacob', 'They embraced and wept', 'Esau returned to Seir']
    },
    {
      id: 'timeline-creation-5-q10',
      type: 'multiple-choice',
      question: 'What tragic event happened AFTER Jacob returned to Canaan?',
      options: ['Rachel died giving birth to Benjamin', 'Isaac died', 'Joseph was sold to Egypt', 'All of these eventually happened'],
      correctAnswer: 'Rachel died giving birth to Benjamin'
    },
    {
      id: 'timeline-creation-5-q11',
      type: 'multiple-choice',
      question: 'How old was Joseph when his brothers sold him into Egypt?',
      options: ['17 years old', '12 years old', '20 years old', '30 years old'],
      correctAnswer: '17 years old'
    },
    {
      id: 'timeline-creation-5-q12',
      type: 'order',
      question: 'Order the key events in Joseph\'s early life:',
      options: ['Joseph was born', 'Jacob gave Joseph a special coat', 'Joseph dreamed his family would bow to him', 'Brothers hated Joseph', 'Brothers sold Joseph to Egypt'],
      correctAnswer: ['Joseph was born', 'Jacob gave Joseph a special coat', 'Joseph dreamed his family would bow to him', 'Brothers hated Joseph', 'Brothers sold Joseph to Egypt']
    }
  ]
};

export const allTimelineQuestions = {
  creation: creationQuestions
};
