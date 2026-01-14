import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Zap, Users, BookMarked, User } from 'lucide-react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

export default function Layout() {
  const location = useLocation();
  const { userProgress } = useStore();

  const navItems = [
    { path: '/learn', icon: BookOpen, label: 'Learn' },
    { path: '/challenge', icon: Zap, label: 'Challenge' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/study', icon: BookMarked, label: 'Study' },
    { path: '/profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header - iPhone optimized */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link to="/learn" className="flex items-center space-x-2">
            <motion.span
              className="text-3xl"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              🐑
            </motion.span>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Shepherd
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <motion.div
              className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold shadow-lg text-sm sm:text-base"
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base sm:text-lg">🔥</span>
              <span className="hidden sm:inline">{userProgress.streak} day streak</span>
              <span className="sm:hidden">{userProgress.streak}</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold shadow-lg text-sm sm:text-base"
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base sm:text-lg">⭐</span>
              <span>{userProgress.totalXP}</span>
              <span className="hidden sm:inline">XP</span>
            </motion.div>
            <motion.div
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-green-400 to-cyan-400 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">📊</span>
              <span>Level {userProgress.level}</span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content - iPhone safe area */}
      <main className="max-w-7xl mx-auto px-4 py-4 sm:py-8 pb-24">
        <Outlet />
      </main>

      {/* Bottom Navigation - iPhone optimized */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-around items-center h-16 sm:h-18">
            {navItems.map(({ path, icon: Icon, label }) => {
              const isActive = location.pathname === path ||
                (path === '/learn' && location.pathname.startsWith('/learn'));

              return (
                <Link
                  key={path}
                  to={path}
                  className="flex-1"
                >
                  <motion.div
                    className={`flex flex-col items-center space-y-1 px-2 sm:px-4 py-2 rounded-xl transition-colors mx-auto max-w-[80px] ${
                      isActive
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                    <span className="text-[10px] sm:text-xs font-medium">{label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
