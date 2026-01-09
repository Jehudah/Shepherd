# 🐑 Shepherd - iPhone-Optimized Bible Learning App

**Version 2.0** - A gamified Bible learning app inspired by Duolingo, optimized for iPhone with character-driven UI and deep Bible study features.

## 🎯 What's New in Version 2.0

### iPhone Optimization
- ✅ Fully responsive design optimized for iPhone screens
- ✅ Touch-optimized navigation with haptic feedback
- ✅ PWA support - Add to Home Screen for app-like experience
- ✅ Prevents iOS pull-to-refresh bouncing
- ✅ Safe area support for notch/Dynamic Island
- ✅ Smooth animations with Framer Motion

### Character-Driven Experience
- 🐑 **Jesus as Your Shepherd** - Guides you through your learning journey
- 🐏 **Woolly the Sheep** - Your funny study buddy with helpful tips
- 👑 **Biblical Characters** - Cartoon prophets, kings, and apostles in book studies
- 💬 Context-aware character messages (encouragement, corrections, celebrations)

### Expanded Content
- **20+ Themes** - Comprehensive thematic Bible study (Love, Faith, Hope, Courage, etc.)
  - Themes are NOT locked - choose what YOU want to grow in!
  - Favorite themes for quick access
  - 6+ verses per theme with full text
- **10 Bible Books** - Deep-dive book studies with:
  - Full overview and description
  - Author, date, and historical context
  - Key verses with explanations
  - Chapter-by-chapter outline
  - Fun facts and learning tips
  - Testament filtering (OT/NT)
- **100+ Questions** - Coming soon across all categories

### New Features
- 📖 **Bible Books Section** - Study books deeply with outlines and context
- ❤️ **Theme Favorites** - Mark and track themes you're focusing on
- 🎨 **Enhanced UI** - Gradient backgrounds, smooth animations, better spacing
- 📱 **Better Navigation** - 5-tab bottom nav (Home, Learn, Themes, Books, Profile)

## 📱 Perfect for iPhone

### Quick Setup for iPhone Testing
1. Follow the setup guide below
2. Run `npm run dev`
3. On your iPhone (same WiFi):
   - Open Safari
   - Go to the Network URL shown in terminal (e.g., `http://192.168.1.5:5173`)
   - Tap Share → "Add to Home Screen"
   - Name it "Shepherd"
4. The app now works like a native app!

## 🚀 Complete Setup Guide

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed beginner-friendly instructions.

### Quick Start (For Experienced Developers)

```bash
# Install dependencies
npm install

# Start development server (accessible on network)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Features

### Learning Modes

1. **Lessons** (6 Categories)
   - Names & People - Biblical characters
   - Themes - Topic-based studies
   - Books - Scripture structure
   - Timeline - Historical chronology
   - Memory Verses - Scripture memorization
   - Parables & Stories - Interactive narratives

2. **Themes** (20+ Topics)
   - Unlocked from the start - study what matters to YOU
   - Love, Faith, Hope, Peace, Wisdom, Forgiveness
   - Courage, Joy, Patience, Humility, Service
   - Grace, Mercy, Strength, Prayer, and more!
   - Favorite your focus areas

3. **Bible Books** (Growing Collection)
   - Old Testament: Genesis, Exodus, Psalms, Proverbs
   - New Testament: Matthew, John, Acts, Romans, Ephesians, Revelation
   - Full context, outlines, and study aids
   - Filter by Testament

### Gamification

- **XP System** - Earn points for every correct answer
- **Levels** - Progress through levels (100 XP per level)
- **Streaks** - Daily study tracking with fire emoji
- **Achievements** - Unlock badges for milestones
- **Progress Tracking** - Per-category completion stats

### Character Guidance

- **Jesus the Shepherd** - Provides encouragement and biblical wisdom
- **Woolly the Sheep** - Offers study tips with humor
- Context-aware messages for:
  - Welcome and onboarding
  - Correct/incorrect answers
  - Milestones and achievements
  - Encouragement during challenges

## 🎨 iPhone-Specific Features

### Safe Areas
- Respects iPhone notch/Dynamic Island
- Bottom navigation with safe area padding
- No content hidden behind system UI

### Touch Optimization
- Large touch targets (minimum 44x44pt)
- Tap animations with scale feedback
- Swipe-friendly cards
- No accidental taps

### Performance
- Lazy loading for images
- Optimized animations (60fps)
- Local storage for offline progress
- Fast initial load with loading screen

## 📱 PWA Features

- **Installable** - Add to Home Screen
- **Offline Support** - Works without internet (after first load)
- **App-like Experience** - Full screen, no browser UI
- **Push Notifications** - Coming soon

## 🗂 Project Structure

```
shphrd/
├── src/
│   ├── components/
│   │   ├── Layout.tsx              # iPhone-optimized navigation
│   │   ├── QuestionCard.tsx        # Interactive quiz component
│   │   └── CharacterGuide.tsx      # Jesus/sheep character system
│   │
│   ├── data/
│   │   ├── questions.ts            # Quiz questions
│   │   ├── lessons.ts              # Lesson collections
│   │   ├── expandedThemes.ts       # 20+ themes with full verses
│   │   └── bibleBooks.ts           # 10 books with full details
│   │
│   ├── pages/
│   │   ├── Home.tsx                # Dashboard
│   │   ├── Learn.tsx               # Lesson browser
│   │   ├── Lesson.tsx              # Quiz interface
│   │   ├── Themes.tsx              # Theme explorer (favorites!)
│   │   ├── BibleBooks.tsx          # Book deep-dive
│   │   └── Profile.tsx             # Stats & achievements
│   │
│   ├── store/
│   │   └── useStore.ts             # Zustand state (with persistence)
│   │
│   ├── types/
│   │   └── index.ts                # TypeScript definitions
│   │
│   ├── App.tsx                     # Router configuration
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles + iPhone fixes
│
├── public/
│   ├── manifest.json               # PWA manifest
│   └── shepherd-icon.svg           # App icon
│
├── index.html                      # Optimized for iPhone
├── package.json                    # Dependencies (includes framer-motion)
├── tailwind.config.js              # Theme configuration
├── vite.config.ts                  # Build configuration
├── SETUP_GUIDE.md                  # Beginner-friendly setup
└── README.md                       # This file
```

## 🛠 Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 📝 Adding Content

### Adding a New Theme

Edit `src/data/expandedThemes.ts`:

```typescript
{
  id: 'theme-kindness',
  name: 'Kindness',
  description: 'Show kindness to others as God has shown to you',
  color: '#10B981', // Green
  verses: [
    {
      book: 'Ephesians',
      chapter: 4,
      verse: '32',
      text: 'Be kind and compassionate to one another...'
    },
    // Add 5-6 more verses
  ]
}
```

### Adding a Bible Book

Edit `src/data/bibleBooks.ts`:

```typescript
{
  id: 'james',
  name: 'James',
  testament: 'New Testament',
  category: 'General Epistles',
  author: 'James',
  writtenDate: '45-49 AD',
  chapters: 5,
  keyTheme: 'Faith in Action',
  description: 'Practical Christian living and faith that works',
  keyVerses: [/* ... */],
  outline: [/* ... */],
  funFacts: [/* ... */],
  characterIcon: '⚡',
  color: '#F59E0B'
}
```

### Adding Questions

Edit `src/data/questions.ts`:

```typescript
{
  id: 'unique-id-123',
  type: 'multiple-choice', // or 'true-false', 'fill-blank'
  category: 'names',
  subcategory: 'New Testament',
  question: 'Who wrote the most books in the New Testament?',
  options: ['Paul', 'Peter', 'John', 'Luke'],
  correctAnswer: 'Paul',
  explanation: 'Paul wrote 13 epistles in the New Testament.',
  verse: 'Romans 1:1',
  difficulty: 2, // 1-5
  xpReward: 10
}
```

## 🎮 How to Play

1. **Start on Home** - View your stats and choose a category
2. **Pick a Theme** - Browse unlocked themes, favorite the ones you want to focus on
3. **Study Bible Books** - Deep dive into any book's context and structure
4. **Take Lessons** - Answer questions to earn XP and level up
5. **Track Progress** - View achievements and stats in your profile
6. **Build Streaks** - Study daily to maintain your streak

## 🐛 Troubleshooting

### App won't load on iPhone
- Make sure both devices are on the same WiFi
- Check that `npm run dev` is running
- Try the IP address shown under "Network" in the terminal
- Restart the dev server with `Ctrl+C` then `npm run dev`

### Changes not showing
- Hard refresh: Clear Safari cache
- Restart the dev server
- Delete the app from Home Screen and re-add it

### Bottom navigation hidden
- The layout includes safe-area CSS
- Make sure you're using the latest code
- Check that viewport meta tag includes `viewport-fit=cover`

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for more detailed troubleshooting.

## 🚢 Deployment

### Netlify (Easiest)
1. `npm run build`
2. Drag `dist` folder to netlify.com
3. Done! Get a URL like `shepherd-bible.netlify.app`

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Enable
3. Use GitHub Actions for auto-deployment

## 🎯 Roadmap

- [ ] 200+ total questions
- [ ] All 66 Bible books
- [ ] 30+ themes
- [ ] Audio verse playback
- [ ] Multiplayer challenges
- [ ] Social sharing
- [ ] Backend API for cloud sync
- [ ] Dutch, Spanish, French translations
- [ ] Native iOS app (React Native)
- [ ] Widgets for iOS home screen

## 📖 Learning Resources

- [React Docs](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [PWA Guide](https://web.dev/progressive-web-apps/)

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch
3. Add your changes (more questions, themes, books)
4. Test on your iPhone
5. Submit a Pull Request

## 📄 License

MIT License - Free to use and modify

## 💝 Acknowledgments

- Bible verses from public domain translations
- Inspired by Duolingo's learning approach
- Icons from Lucide React
- Community feedback and contributions

## 📧 Support

- **Issues**: Open an issue on GitHub
- **Questions**: Check [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- **Feedback**: We'd love to hear from you!

---

**Made with ❤️ for Bible learners on iPhone and beyond**

🐑 *"The Lord is my shepherd; I shall not want."* - Psalm 23:1
