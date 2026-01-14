import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, CheckCircle, Book } from 'lucide-react';
import { useStore } from '../../store/useStore';

// Complete lesson data with all 8 lessons per category
const lessonData: Record<string, any[]> = {
  prophets: [
    { id: 'names-prophets-1', title: 'Moses: The Deliverer', character: '👨‍⚖️', difficulty: 1, questions: 10, description: 'The great lawgiver and prophet' },
    { id: 'names-prophets-2', title: 'Elijah: Fire from Heaven', character: '🔥', difficulty: 1, questions: 10, description: 'Prophet of power and miracles' },
    { id: 'names-prophets-3', title: 'Samuel: Voice of God', character: '🎺', difficulty: 2, questions: 10, description: 'The last judge and first prophet' },
    { id: 'names-prophets-4', title: 'Elisha: Double Portion', character: '⚡', difficulty: 2, questions: 10, description: 'Successor with twice the miracles' },
    { id: 'names-prophets-5', title: 'Isaiah: Messenger of Hope', character: '📖', difficulty: 2, questions: 10, description: 'Prophecies of the Messiah' },
    { id: 'names-prophets-6', title: 'Jeremiah: The Weeping Prophet', character: '😢', difficulty: 3, questions: 10, description: 'Prophet of judgment and hope' },
    { id: 'names-prophets-7', title: 'Ezekiel: Visions of Glory', character: '👁️', difficulty: 3, questions: 10, description: 'Visions of wheels and dry bones' },
    { id: 'names-prophets-8', title: 'Daniel: The Faithful', character: '🦁', difficulty: 3, questions: 10, description: 'Lion\'s den and dreams' }
  ],
  kings: [
    { id: 'names-kings-1', title: 'Saul: The First King', character: '⚔️', difficulty: 1, questions: 10, description: 'Israel\'s first monarch' },
    { id: 'names-kings-2', title: 'David: Man After God\'s Heart', character: '👑', difficulty: 1, questions: 10, description: 'The shepherd king' },
    { id: 'names-kings-3', title: 'Solomon: The Wise King', character: '🧠', difficulty: 2, questions: 10, description: 'Wisdom and the Temple' },
    { id: 'names-kings-4', title: 'Rehoboam: Kingdom Divided', character: '💔', difficulty: 2, questions: 10, description: 'When Israel split' },
    { id: 'names-kings-5', title: 'Ahab: The Wicked King', character: '😈', difficulty: 2, questions: 10, description: 'Jezebel\'s husband' },
    { id: 'names-kings-6', title: 'Josiah: The Boy King', character: '👶', difficulty: 3, questions: 10, description: 'Reform at age 8' },
    { id: 'names-kings-7', title: 'Hezekiah: The Faithful', character: '🛡️', difficulty: 3, questions: 10, description: 'Trust in God\'s deliverance' },
    { id: 'names-kings-8', title: 'Nebuchadnezzar: Babylon\'s Ruler', character: '🏛️', difficulty: 3, questions: 10, description: 'From pride to praise' }
  ],
  apostles: [
    { id: 'names-disciples-1', title: 'Peter: The Rock', character: '🪨', difficulty: 1, questions: 10, description: 'From fisherman to fisher of men' },
    { id: 'names-disciples-2', title: 'John: The Beloved', character: '❤️', difficulty: 1, questions: 10, description: 'Disciple of love' },
    { id: 'names-disciples-3', title: 'James: Son of Thunder', character: '⚡', difficulty: 2, questions: 10, description: 'Brother of John' },
    { id: 'names-disciples-4', title: 'Andrew: The Introducer', character: '🤝', difficulty: 2, questions: 10, description: 'First to follow Jesus' },
    { id: 'names-disciples-5', title: 'Matthew: The Tax Collector', character: '📊', difficulty: 2, questions: 10, description: 'Called from the tax booth' },
    { id: 'names-disciples-6', title: 'Thomas: Doubter to Believer', character: '🤔', difficulty: 3, questions: 10, description: 'My Lord and my God' },
    { id: 'names-disciples-7', title: 'Paul: Apostle to Gentiles', character: '✍️', difficulty: 3, questions: 10, description: 'From persecutor to preacher' },
    { id: 'names-disciples-8', title: 'The Twelve: United Mission', character: '👥', difficulty: 3, questions: 10, description: 'Jesus\' chosen twelve' }
  ],
  women: [
    { id: 'names-women-1', title: 'Mary: Mother of Jesus', character: '🤱', difficulty: 1, questions: 10, description: 'Blessed among women' },
    { id: 'names-women-2', title: 'Ruth: Loyal and Faithful', character: '🌾', difficulty: 1, questions: 10, description: 'Your God, my God' },
    { id: 'names-women-3', title: 'Esther: For Such a Time', character: '👸', difficulty: 2, questions: 10, description: 'Queen who saved her people' },
    { id: 'names-women-4', title: 'Hannah: Woman of Prayer', character: '🙏', difficulty: 2, questions: 10, description: 'Mother of Samuel' },
    { id: 'names-women-5', title: 'Sarah: Mother of Nations', character: '👵', difficulty: 2, questions: 10, description: 'Faith in God\'s promise' },
    { id: 'names-women-6', title: 'Deborah: Judge and Warrior', character: '⚖️', difficulty: 3, questions: 10, description: 'Only female judge' },
    { id: 'names-women-7', title: 'Mary Magdalene: First Witness', character: '✨', difficulty: 3, questions: 10, description: 'First to see risen Christ' },
    { id: 'names-women-8', title: 'Priscilla: Teacher of Apollos', character: '📚', difficulty: 3, questions: 10, description: 'Tentmaker and teacher' }
  ],
  patriarchs: [
    { id: 'names-patriarchs-1', title: 'Adam: The First Man', character: '👤', difficulty: 1, questions: 10, description: 'Created in God\'s image' },
    { id: 'names-patriarchs-2', title: 'Noah: Builder of the Ark', character: '🚢', difficulty: 1, questions: 10, description: 'Saved from the flood' },
    { id: 'names-patriarchs-3', title: 'Abraham: Father of Faith', character: '🧓', difficulty: 2, questions: 10, description: 'Called to a new land' },
    { id: 'names-patriarchs-4', title: 'Isaac: Son of Promise', character: '👦', difficulty: 2, questions: 10, description: 'Child of miracle' },
    { id: 'names-patriarchs-5', title: 'Jacob: Wrestler with God', character: '🤼', difficulty: 2, questions: 10, description: 'Became Israel' },
    { id: 'names-patriarchs-6', title: 'Joseph: Dreamer and Ruler', character: '🌈', difficulty: 3, questions: 10, description: 'From pit to palace' },
    { id: 'names-patriarchs-7', title: 'Job: Man of Patience', character: '😌', difficulty: 3, questions: 10, description: 'Tested but faithful' },
    { id: 'names-patriarchs-8', title: 'Enoch: Walked with God', character: '🚶', difficulty: 3, questions: 10, description: 'Taken without death' }
  ],
  judges: [
    { id: 'names-judges-1', title: 'Othniel: First Judge', character: '🦁', difficulty: 1, questions: 10, description: 'Spirit of the Lord' },
    { id: 'names-judges-2', title: 'Ehud: Left-Handed Deliverer', character: '🗡️', difficulty: 1, questions: 10, description: 'Defeated King Eglon' },
    { id: 'names-judges-3', title: 'Deborah: Prophetess Judge', character: '⚖️', difficulty: 2, questions: 10, description: 'Mother in Israel' },
    { id: 'names-judges-4', title: 'Gideon: Mighty Warrior', character: '🏺', difficulty: 2, questions: 10, description: 'Victory with 300' },
    { id: 'names-judges-5', title: 'Jephthah: The Outcast', character: '💪', difficulty: 2, questions: 10, description: 'Tragic vow' },
    { id: 'names-judges-6', title: 'Samson: Strongest Man', character: '💪', difficulty: 3, questions: 10, description: 'Hair of strength' },
    { id: 'names-judges-7', title: 'Samuel: Prophet Judge', character: '📯', difficulty: 3, questions: 10, description: 'Last of the judges' },
    { id: 'names-judges-8', title: 'Barak & Others: Teams', character: '👥', difficulty: 3, questions: 10, description: 'Lesser-known judges' }
  ]
};

const categoryInfo: Record<string, any> = {
  prophets: { title: 'Prophets', color: 'from-blue-500 to-cyan-500', bgColor: '#3B82F6' },
  kings: { title: 'Kings & Queens', color: 'from-purple-500 to-pink-500', bgColor: '#A855F7' },
  apostles: { title: 'Apostles & Disciples', color: 'from-green-500 to-emerald-500', bgColor: '#10B981' },
  women: { title: 'Women of Faith', color: 'from-pink-500 to-rose-500', bgColor: '#EC4899' },
  patriarchs: { title: 'Patriarchs', color: 'from-amber-500 to-orange-500', bgColor: '#F59E0B' },
  judges: { title: 'Judges', color: 'from-red-500 to-rose-500', bgColor: '#EF4444' }
};

export default function NamesLessons() {
  const { subcategory } = useParams<{ subcategory: string }>();
  const { userProgress } = useStore();

  if (!subcategory || !lessonData[subcategory]) {
    return <div>Category not found</div>;
  }

  const lessons = lessonData[subcategory];
  const info = categoryInfo[subcategory];

  return (
    <div className="space-y-6 pb-8">
      {/* Back Button */}
      <Link
        to="/learn/names"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Names & People
      </Link>

      {/* Header */}
      <div className={`bg-gradient-to-r ${info.color} text-white rounded-3xl p-6 sm:p-8 shadow-xl`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">{info.title}</h1>
            <p className="text-lg sm:text-xl opacity-90 mt-2">
              {lessons.length} lessons • Choose any to begin!
            </p>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-4 sm:p-6 border-2 border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-3">
          <span className="text-4xl">🐑</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Woolly Says: All Lessons Are Open!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Pick any character you want to learn about! Lessons include beginner basics, intermediate details, and advanced theological insights with Greek, Hebrew, and Aramaic word meanings. Start wherever you feel comfortable!
            </p>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson, index) => {
          const isCompleted = userProgress.completedLessons.includes(lesson.id);

          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all relative"
            >
              {isCompleted && (
                <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2">
                  <CheckCircle size={20} />
                </div>
              )}

              {/* Character Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md text-3xl"
                style={{ backgroundColor: info.bgColor }}
              >
                {lesson.character}
              </div>

              {/* Difficulty indicator */}
              <div className="flex gap-1 mb-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-2 rounded-full ${
                      i < lesson.difficulty
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-400'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                ))}
              </div>

              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                Lesson {index + 1}
              </h3>

              <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {lesson.title}
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {lesson.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                <span className="flex items-center space-x-1">
                  <Book size={14} />
                  <span>{lesson.questions} questions</span>
                </span>
                <span>
                  {lesson.difficulty === 1 && 'Beginner'}
                  {lesson.difficulty === 2 && 'Intermediate'}
                  {lesson.difficulty === 3 && 'Advanced'}
                </span>
              </div>

              <Link
                to={`/lesson/names/${subcategory}/${lesson.id}`}
                className={`w-full ${
                  isCompleted
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gradient-to-r ' + info.color + ' hover:opacity-90'
                } text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 shadow-md`}
              >
                <Play size={20} />
                <span>{isCompleted ? 'Study Again' : 'Begin Lesson'}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
