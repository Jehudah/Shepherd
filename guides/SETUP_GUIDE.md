# 📱 Complete Setup Guide for Shepherd iPhone App

This guide will walk you through setting up the Shepherd app from scratch, even with no prior experience.

## 📋 Prerequisites (What You Need)

### 1. Install Node.js
Node.js lets you run JavaScript code on your computer and includes npm (a package manager).

**For Windows:**
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the "LTS" version (recommended for most users)
3. Run the installer
4. Keep clicking "Next" with default settings
5. Click "Finish"

**To verify installation:**
1. Open Command Prompt (search "cmd" in Windows)
2. Type: `node --version` and press Enter
3. You should see something like `v20.x.x`
4. Type: `npm --version` and press Enter
5. You should see something like `10.x.x`

### 2. Install a Code Editor (Optional but Recommended)
**Visual Studio Code** is the easiest editor for beginners:
1. Go to [code.visualstudio.com](https://code.visualstudio.com/)
2. Download and install
3. Open VS Code
4. Install helpful extensions:
   - "ES7+ React/Redux/React-Native snippets"
   - "Tailwind CSS IntelliSense"
   - "Prettier - Code formatter"

## 🚀 Step-by-Step Setup

### Step 1: Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter

**Or in VS Code:**
- Open VS Code
- Press `` Ctrl + ` `` (backtick key)
- This opens the integrated terminal

### Step 2: Navigate to Your Project

```bash
cd C:\Users\JehudahOorebeekDenof\Documents\app\shphrd
```

**Tip:** You can also:
1. Open the folder in VS Code (File > Open Folder)
2. The terminal will automatically be in the right location

### Step 3: Install Dependencies

This downloads all the libraries the app needs:

```bash
npm install
```

**What's happening:**
- npm reads the `package.json` file
- Downloads all listed packages
- Creates a `node_modules` folder (this can take 2-5 minutes)

**If you see errors:**
- Make sure you're in the correct folder
- Try: `npm cache clean --force` then `npm install` again

### Step 4: Start the Development Server

```bash
npm run dev
```

**What you'll see:**
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.x:5173/
```

### Step 5: Open the App

**On your computer:**
1. Open your web browser (Chrome, Edge, Safari)
2. Go to: `http://localhost:5173`

**On your iPhone (same WiFi network):**
1. Look at the terminal for the "Network" URL
2. On your iPhone, open Safari
3. Type in the Network URL (e.g., `http://192.168.1.5:5173`)
4. Bookmark it for easy access!

## 📱 Testing on iPhone

### Option 1: Local Network (Easiest)
1. Make sure your iPhone and computer are on the same WiFi
2. Use the Network URL from the terminal
3. Add to Home Screen for an app-like experience:
   - Tap the Share button in Safari
   - Scroll down and tap "Add to Home Screen"
   - Name it "Shepherd"
   - Tap "Add"

### Option 2: Using ngrok (Access from anywhere)
1. Sign up at [ngrok.com](https://ngrok.com/) (free)
2. Download ngrok
3. In a new terminal: `ngrok http 5173`
4. Use the https URL on your iPhone

## 🛠 Common Commands

### Starting the app
```bash
npm run dev
```
Run this every time you want to work on the app

### Stopping the app
Press `Ctrl + C` in the terminal

### Building for production
```bash
npm run build
```
Creates optimized files in the `dist` folder

### Checking for errors
```bash
npm run lint
```

## 📁 Understanding the Project Structure

```
shphrd/
├── src/                          # Your code lives here
│   ├── components/               # Reusable UI pieces
│   │   ├── Layout.tsx           # Navigation & header
│   │   ├── QuestionCard.tsx     # Quiz question display
│   │   └── CharacterGuide.tsx   # Jesus & sheep characters
│   │
│   ├── data/                    # Bible content
│   │   ├── questions.ts         # All quiz questions
│   │   ├── lessons.ts           # Lesson collections
│   │   ├── themes.ts            # Thematic verse groups
│   │   └── bibleBooks.ts        # Book-by-book content
│   │
│   ├── pages/                   # Main screens
│   │   ├── Home.tsx            # Dashboard
│   │   ├── Learn.tsx           # Lesson browser
│   │   ├── Lesson.tsx          # Quiz screen
│   │   ├── Themes.tsx          # Theme explorer
│   │   ├── BibleBooks.tsx      # Book study
│   │   └── Profile.tsx         # User stats
│   │
│   ├── store/                   # App state
│   │   └── useStore.ts         # Progress tracking
│   │
│   ├── types/                   # TypeScript definitions
│   │   └── index.ts            # Data structures
│   │
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
│
├── public/                       # Static files (images, icons)
├── node_modules/                 # Downloaded packages (don't edit)
├── package.json                  # Project configuration
└── vite.config.ts               # Build tool config
```

## 🎨 Making Changes

### Adding New Questions

1. Open `src/data/questions.ts`
2. Add a new question object:

```typescript
{
  id: 'names-050',  // Must be unique
  type: 'multiple-choice',
  category: 'names',
  subcategory: 'New Testament',
  question: 'Who was the first Christian martyr?',
  options: ['Stephen', 'James', 'Peter', 'Paul'],
  correctAnswer: 'Stephen',
  explanation: 'Stephen was stoned for his faith in Acts 7.',
  verse: 'Acts 7:59-60',
  difficulty: 2,
  xpReward: 10
}
```

3. Save the file
4. The app will automatically reload!

### Adding New Themes

1. Open `src/data/themes.ts`
2. Add a new theme:

```typescript
{
  id: 'theme-joy',
  name: 'Joy',
  description: 'Find joy in all circumstances',
  color: '#FFD700',
  verses: [
    {
      book: 'Philippians',
      chapter: 4,
      verse: '4',
      text: 'Rejoice in the Lord always...'
    }
  ]
}
```

### Changing Colors or Styles

1. Open `tailwind.config.js`
2. Modify the color scheme
3. Or edit `src/index.css` for global styles

## 🐛 Troubleshooting

### "npm is not recognized"
- Node.js isn't installed or not in PATH
- Reinstall Node.js

### "Cannot find module"
- Run `npm install` again
- Delete `node_modules` folder and run `npm install`

### Page is blank
- Check browser console (F12)
- Look for error messages in terminal
- Make sure `npm run dev` is running

### Changes not showing
- Hard refresh: `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac)
- Clear browser cache
- Restart the dev server

### Port already in use
- Something else is using port 5173
- Kill that process or change the port in `vite.config.ts`

## 📱 Making it Feel Like a Native App

### Add to iPhone Home Screen
1. Open in Safari on iPhone
2. Tap Share button
3. "Add to Home Screen"
4. Choose an icon and name
5. Now it opens like a real app!

### Enable Offline Mode
The app includes PWA (Progressive Web App) support:
- Once loaded, it works offline
- Updates automatically when online

## 🚢 Deploying (Making it Public)

### Option 1: Netlify (Easiest, Free)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder (after running `npm run build`)
3. Get a free URL like `shepherd-bible.netlify.app`

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Option 3: GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repo settings
3. Use GitHub Actions for automatic deployment

## 📚 Learning Resources

### If you want to understand the code:
- **React Tutorial:** [react.dev/learn](https://react.dev/learn)
- **TypeScript Basics:** [typescriptlang.org/docs/handbook/intro.html](https://typescriptlang.org/docs/handbook/intro.html)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)

### Video Tutorials:
- Search YouTube for "React tutorial for beginners"
- "Tailwind CSS crash course"

## 🆘 Getting Help

### Where to look:
1. Check the error message carefully
2. Google the exact error message
3. Check [stackoverflow.com](https://stackoverflow.com)
4. Ask in React or web dev Discord communities

### Common Issues Document:
Keep a file `ISSUES.md` with problems you solve, so you remember!

## ✅ Quick Start Checklist

- [ ] Node.js installed
- [ ] VS Code installed (optional)
- [ ] Opened terminal in project folder
- [ ] Ran `npm install`
- [ ] Ran `npm run dev`
- [ ] Opened `http://localhost:5173` in browser
- [ ] Tested on iPhone via network URL
- [ ] Added to iPhone home screen

## 🎉 You're Ready!

The app should now be running. Any changes you make to files in `src/` will automatically update in your browser.

**Next steps:**
1. Familiarize yourself with the app
2. Try adding a question
3. Customize the theme colors
4. Share with friends!

Need help? Create an issue in the GitHub repository or reach out to the community!
