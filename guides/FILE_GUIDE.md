# 📁 Complete File Guide - What Each File Does

This guide explains EVERY file in the project and what you can do with it.

## 🎯 Files YOU Will Edit Most

### `src/data/questions.ts` ⭐⭐⭐
**What it does:** Contains all quiz questions
**Edit this to:** Add more Bible questions
**Example:**
```typescript
{
  id: 'names-050',
  question: 'Who was swallowed by a great fish?',
  options: ['Jonah', 'Job', 'Jeremiah', 'Joshua'],
  correctAnswer: 'Jonah',
  // ... more fields
}
```

### `src/data/expandedThemes.ts` ⭐⭐⭐
**What it does:** Contains all 20+ themes with verses
**Edit this to:** Add new themes or more verses to existing themes
**Example:**
```typescript
{
  id: 'theme-kindness',
  name: 'Kindness',
  description: 'Show kindness to others',
  color: '#10B981',
  verses: [/* array of verses */]
}
```

### `src/data/bibleBooks.ts` ⭐⭐
**What it does:** Contains detailed info about Bible books
**Edit this to:** Add more books (currently has 10, Bible has 66!)
**Example:**
```typescript
{
  id: 'james',
  name: 'James',
  testament: 'New Testament',
  author: 'James',
  // ... more detailed info
}
```

### `src/data/lessons.ts` ⭐
**What it does:** Groups questions into lessons
**Edit this to:** Create new lesson collections
**Don't edit unless:** You're comfortable with the structure

## 🎨 Configuration Files

### `package.json`
**What it does:** Lists all the libraries the app needs
**Edit this to:** Add new npm packages
**Don't touch:** Version numbers unless you know what you're doing
**Run after editing:** `npm install`

### `tailwind.config.js`
**What it does:** Defines colors and design system
**Edit this to:** Change app colors, add custom styles
**Example change:**
```javascript
colors: {
  primary: {
    600: '#YOUR_COLOR_HERE', // Change main app color
  }
}
```

### `vite.config.ts`
**What it does:** Build tool configuration
**Edit this:** Rarely (it's already optimized)

### `tsconfig.json`
**What it does:** TypeScript compiler settings
**Edit this:** Almost never (working perfectly)

## 📱 App Pages (What Users See)

### `src/pages/Home.tsx`
**What it does:** Dashboard with stats and category cards
**Edit this to:** Change home page layout or stats display
**Contains:** Welcome message, stats grid, category overview

### `src/pages/Learn.tsx`
**What it does:** Browse and select lessons
**Edit this to:** Customize lesson cards or filtering
**Contains:** Lesson grid, category filter, progress bars

### `src/pages/Lesson.tsx`
**What it does:** The actual quiz interface
**Edit this to:** Change quiz behavior or scoring
**Contains:** Question display, answer checking, results screen

### `src/pages/Themes.tsx`
**What it does:** Browse and explore thematic studies
**Edit this to:** Add more theme features
**Contains:** Theme cards, favorite system, verse display

### `src/pages/BibleBooks.tsx`
**What it does:** Deep dive into Bible books
**Edit this to:** Customize book study interface
**Contains:** Book cards, outlines, key verses, fun facts

### `src/pages/Profile.tsx`
**What it does:** User stats and achievements
**Edit this to:** Add new stats or achievements
**Contains:** Progress bars, achievement badges, reset button

## 🧩 Components (Reusable Pieces)

### `src/components/Layout.tsx`
**What it does:** Navigation bar and app shell
**Edit this to:** Change navigation items or header
**Contains:** Top header, bottom nav bar, routing

### `src/components/QuestionCard.tsx`
**What it does:** Displays individual quiz questions
**Edit this to:** Change question display style
**Contains:** Multiple choice, true/false, fill-in-blank logic

### `src/components/CharacterGuide.tsx`
**What it does:** Jesus and Woolly character messages
**Edit this to:** Add more character dialogue
**Contains:** Speech bubbles, character emojis, animations

## 🔧 Core App Files

### `src/App.tsx`
**What it does:** Sets up all routes (URLs)
**Edit this to:** Add new pages/routes
**Example:** Adding a new page requires adding a Route here

### `src/main.tsx`
**What it does:** App entry point
**Edit this:** Almost never (it's tiny and critical)

### `src/index.css`
**What it does:** Global styles and Tailwind setup
**Edit this to:** Add custom CSS animations
**Contains:** Tailwind imports, global styles, iPhone fixes

### `src/types/index.ts`
**What it does:** TypeScript type definitions
**Edit this to:** Define new data structures
**Example:** Adding new question types requires updating types here

## 💾 State Management

### `src/store/useStore.ts`
**What it does:** Manages app state (XP, progress, achievements)
**Edit this to:** Add new state or actions
**Contains:** User progress, XP tracking, achievement system
**Uses:** Zustand with localStorage persistence

## 📄 Public Files

### `public/manifest.json`
**What it does:** PWA configuration for installability
**Edit this to:** Change app name, colors, icons

### `public/shepherd-icon.svg`
**What it does:** App icon
**Edit this to:** Replace with custom icon

## 📖 Documentation Files

### `START_HERE.md` ⭐⭐⭐
**What it does:** Absolute beginner guide
**Read this:** If you're new to all of this

### `SETUP_GUIDE.md` ⭐⭐
**What it does:** Detailed setup instructions
**Read this:** For troubleshooting and understanding

### `README_v2.md` ⭐
**What it does:** Complete feature documentation
**Read this:** To understand all features

### `QUICK_START.txt`
**What it does:** Command reference
**Read this:** For quick command lookup

### `FILE_GUIDE.md`
**What it does:** This file! Explains all files
**Read this:** To understand project structure

## 🌐 HTML Files

### `index.html`
**What it does:** Main HTML file, iPhone optimized
**Edit this to:** Change meta tags, add analytics
**Contains:** PWA setup, loading screen, iOS fixes

## 🚫 Files to NEVER Edit

### `node_modules/` folder
**What it does:** Contains all downloaded packages
**NEVER EDIT:** Will be regenerated by npm install
**Can delete:** If you need to free space (reinstall with npm install)

### `.gitignore`
**What it does:** Tells git what to ignore
**Edit this:** Only if you know git

### `package-lock.json`
**What it does:** Locks exact package versions
**Auto-generated:** By npm
**Don't edit manually:** Let npm manage it

## 🎯 Quick Edit Guide by Task

### Task: Add 10 New Questions
**Edit:** `src/data/questions.ts`
**Difficulty:** Easy ⭐
**Time:** 30 minutes

### Task: Add a New Theme (e.g., "Faithfulness")
**Edit:** `src/data/expandedThemes.ts`
**Difficulty:** Easy ⭐
**Time:** 15 minutes

### Task: Add Bible Book (e.g., "1 Peter")
**Edit:** `src/data/bibleBooks.ts`
**Difficulty:** Medium ⭐⭐
**Time:** 45 minutes (research + writing)

### Task: Change App Colors
**Edit:** `tailwind.config.js`
**Difficulty:** Easy ⭐
**Time:** 10 minutes

### Task: Add New Page
**Edit:** `src/App.tsx`, create new file in `src/pages/`
**Difficulty:** Hard ⭐⭐⭐
**Time:** 2+ hours (requires React knowledge)

### Task: Customize Character Messages
**Edit:** `src/components/CharacterGuide.tsx`
**Difficulty:** Medium ⭐⭐
**Time:** 30 minutes

## 📊 File Priority for Beginners

**Start with these (easiest impact):**
1. `src/data/questions.ts` - Add questions
2. `src/data/expandedThemes.ts` - Add themes
3. `src/data/bibleBooks.ts` - Add books

**Then explore these:**
4. `tailwind.config.js` - Customize colors
5. `src/pages/Home.tsx` - Modify homepage
6. `src/components/CharacterGuide.tsx` - Add character dialogue

**Leave these for later:**
7. `src/store/useStore.ts` - State management
8. `src/types/index.ts` - Type definitions
9. Component files - UI logic

## 🔍 Finding Things

**Want to change colors?**
→ Search for `bg-gradient-to-r` in any file

**Want to edit text?**
→ Search for the exact text in VS Code (Ctrl+Shift+F)

**Want to add a feature?**
→ Look at similar features first, copy pattern

**Don't know where something is?**
→ Use VS Code's file search (Ctrl+P) and type filename

## 💡 Pro Tips

1. **Use VS Code** - Has auto-complete for TypeScript
2. **Search before editing** - Find similar code first
3. **Test after every change** - Don't make 10 changes at once
4. **Save often** - Ctrl+S is your friend
5. **Read error messages** - They point to the problem

## 🎓 Learning Path

**Week 1:** Add questions and themes (data files)
**Week 2:** Customize colors and styles
**Week 3:** Modify pages and components
**Week 4:** Understand state management
**Week 5+:** Build new features!

---

**Remember:** You don't need to understand EVERYTHING to be productive. Start with data files and gradually explore more! 🚀
