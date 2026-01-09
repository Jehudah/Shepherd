# 🐑 Shepherd - Bible Learning App

Shepherd is an interactive Bible learning application inspired by Duolingo's gamified learning approach. Master Bible knowledge through engaging lessons, quizzes, and thematic studies.

## ✨ Features

### Learning Categories
- **👥 Names & People** - Learn about biblical characters and their relationships
- **🎯 Themes** - Study scripture organized by key topics (Love, Faith, Hope, etc.)
- **📖 Books of the Bible** - Navigate and understand scripture structure
- **⏳ Timeline** - Historical events and chronological understanding
- **⭐ Memory Verses** - Memorize key scriptures
- **📚 Parables & Stories** - Interactive story-based learning

### Gamification Features
- **XP System** - Earn experience points for correct answers
- **Level Progression** - Advance through levels as you learn
- **Streak Tracking** - Maintain daily study streaks
- **Achievements** - Unlock badges and awards
- **Progress Tracking** - Monitor completion across all categories

### Question Types
- Multiple Choice
- True/False
- Fill in the Blank
- Ordering
- Matching (extensible)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shepherd.git
cd shepherd
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🎮 How to Use

1. **Start Learning** - Choose a category from the home page
2. **Select a Lesson** - Pick a lesson based on your interest and XP level
3. **Answer Questions** - Read each question carefully and select your answer
4. **Review Feedback** - Learn from explanations for both correct and incorrect answers
5. **Track Progress** - Monitor your XP, level, and achievements in your profile

## 📁 Project Structure

```
shphrd/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Layout.tsx
│   │   └── QuestionCard.tsx
│   ├── data/              # Bible content and questions
│   │   ├── questions.ts
│   │   ├── lessons.ts
│   │   └── themes.ts
│   ├── pages/             # Main application pages
│   │   ├── Home.tsx
│   │   ├── Learn.tsx
│   │   ├── Lesson.tsx
│   │   ├── Themes.tsx
│   │   └── Profile.tsx
│   ├── store/             # State management (Zustand)
│   │   └── useStore.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🛠 Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **React Router** - Navigation
- **Lucide React** - Icons

## 📝 Adding New Content

### Adding Questions

Edit `src/data/questions.ts`:

```typescript
{
  id: 'unique-id',
  type: 'multiple-choice',
  category: 'names',
  subcategory: 'Old Testament',
  question: 'Your question here?',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  correctAnswer: 'Option 1',
  explanation: 'Explanation text',
  verse: 'Book Chapter:Verse',
  difficulty: 2,
  xpReward: 10
}
```

### Adding Lessons

Edit `src/data/lessons.ts` to create new lesson collections.

### Adding Themes

Edit `src/data/themes.ts` to add new thematic verse collections.

## 🎯 Future Enhancements

- [ ] Multilingual support (Dutch, Spanish, etc.)
- [ ] Audio verse pronunciation
- [ ] Social features (compete with friends)
- [ ] Advanced matching and ordering questions
- [ ] Daily devotionals
- [ ] Study notes and bookmarks
- [ ] Dark mode toggle
- [ ] Mobile app (React Native)
- [ ] Backend API for user accounts
- [ ] Leaderboards

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Bible content sourced from public domain translations
- Inspired by Duolingo's gamified learning approach
- Icons from Lucide React

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ for Bible learners everywhere
