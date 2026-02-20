# 🚀 START HERE - Your First Steps with Shepherd

Welcome! This guide will help you get the Shepherd app running on your iPhone in about 10 minutes, even if you've never done this before.

## ✅ What You'll Need

- A Windows computer (which you have!)
- An iPhone
- Both devices on the same WiFi network
- About 10 minutes

## 📝 Step-by-Step Instructions

### Step 1: Install Node.js (5 minutes)

Node.js lets you run the app on your computer.

1. Open your web browser
2. Go to: https://nodejs.org/
3. Click the big green button that says "LTS" (recommended)
4. Download the file
5. Double-click the downloaded file
6. Click "Next" through the installer (accept all defaults)
7. Click "Finish"

**Verify it worked:**
1. Press `Windows Key + R` on your keyboard
2. Type `cmd` and press Enter
3. In the black window, type: `node --version`
4. You should see something like `v20.11.0`
5. Type: `npm --version`
6. You should see something like `10.2.4`

If you see version numbers, you're good to go! If not, restart your computer and try again.

### Step 2: Open the Project (1 minute)

1. Press `Windows Key + E` to open File Explorer
2. Navigate to: `C:\Users\JehudahOorebeekDenof\Documents\app\shphrd`
3. In the address bar at the top, click and type: `cmd`
4. Press Enter

A command prompt window should open in your project folder.

**Alternative method:**
1. Press `Windows Key + R`
2. Type: `cmd`
3. Press Enter
4. Type: `cd C:\Users\JehudahOorebeekDenof\Documents\app\shphrd`
5. Press Enter

### Step 3: Install Dependencies (3 minutes)

In the command prompt window:

1. Type: `npm install`
2. Press Enter
3. Wait (you'll see lots of text scrolling - this is normal!)
4. When it's done, you'll see the command prompt again

### Step 4: Start the App (1 minute)

1. In the same command prompt, type: `npm run dev`
2. Press Enter
3. You'll see something like:

```
VITE v5.0.8  ready in 432 ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.15:5173/
```

**IMPORTANT:** Write down the Network URL (the one that starts with `http://192.168...`)

### Step 5: Open on Your iPhone (2 minutes)

1. Grab your iPhone
2. Make sure it's on the same WiFi as your computer
3. Open Safari
4. Type in the Network URL you wrote down (e.g., `http://192.168.1.15:5173`)
5. The Shepherd app should load!

### Step 6: Add to Home Screen (Optional but Recommended)

1. In Safari, tap the Share button (square with arrow)
2. Scroll down and tap "Add to Home Screen"
3. Name it "Shepherd"
4. Tap "Add"
5. Now you have a Shepherd icon on your home screen!

## 🎉 You're Done!

The app is now running on your iPhone! Here's what you can do:

- **Explore Themes** - Tap any of the 20 themes to study verses
- **Study Bible Books** - Tap "Books" tab to dive deep into biblical books
- **Start Learning** - Tap "Learn" to answer questions and earn XP
- **Track Progress** - View your stats in the Profile tab

## 🛠 Making Changes

Want to add more content? Here's how:

### Adding a New Question

1. Open the `src\data\questions.ts` file in Notepad (or VS Code if you installed it)
2. Find the end of the list (look for `];`)
3. Add your question before the `];` like this:

```typescript
  {
    id: 'names-100',
    type: 'multiple-choice',
    category: 'names',
    subcategory: 'New Testament',
    question: 'Who baptized Jesus?',
    options: ['John the Baptist', 'Peter', 'James', 'Andrew'],
    correctAnswer: 'John the Baptist',
    explanation: 'John the Baptist baptized Jesus in the Jordan River.',
    verse: 'Matthew 3:13-17',
    difficulty: 1,
    xpReward: 5
  },
```

4. Save the file
5. The app will automatically reload with your new question!

### Adding a New Theme

1. Open `src\data\expandedThemes.ts`
2. Add a new theme at the end (before the final `];`):

```typescript
  {
    id: 'theme-your-theme',
    name: 'Your Theme Name',
    description: 'What this theme is about',
    color: '#3B82F6', // Any color in hex
    verses: [
      {
        book: 'John',
        chapter: 3,
        verse: '16',
        text: 'For God so loved the world...'
      },
      // Add more verses here
    ]
  },
```

3. Save and the app updates automatically!

## 🆘 Common Problems

### "npm is not recognized"
- Node.js didn't install correctly
- Restart your computer
- Try installing Node.js again

### App won't load on iPhone
- Make sure both devices are on the same WiFi
- Check that `npm run dev` is still running (don't close that window!)
- Try typing the IP address again

### Terminal/Command Prompt closed accidentally
- No problem! Just follow Step 2 again
- Then run `npm run dev` again

### Want to stop the app?
- In the command prompt window, press `Ctrl + C`
- Type `Y` if it asks
- To start again, just run `npm run dev`

## 📚 Next Steps

1. **Read SETUP_GUIDE.md** - More detailed explanations
2. **Read README_v2.md** - Full feature list and documentation
3. **Explore the code** - Files in `src/` folder
4. **Add more content** - Questions, themes, Bible books
5. **Customize colors** - Edit `tailwind.config.js`

## 💡 Pro Tips

1. **Keep the command prompt open** while using the app
2. **Use Chrome DevTools** to debug (F12 in browser)
3. **Save your work often** when editing files
4. **Read error messages** - they usually tell you what's wrong
5. **Google is your friend** - Search any error messages you see

## 🎓 Want to Learn More?

- **React basics**: https://react.dev/learn
- **TypeScript**: https://www.typescriptlang.org/docs/handbook/intro.html
- **Tailwind CSS**: https://tailwindcss.com/docs
- **YouTube**: Search "React tutorial for beginners"

## ✉️ Need Help?

If you get stuck:
1. Check the error message carefully
2. Google the exact error
3. Read SETUP_GUIDE.md for more help
4. Check GitHub issues
5. Ask in coding communities (Stack Overflow, Reddit r/react)

## 🎯 Quick Reference

**Start the app:**
```bash
npm run dev
```

**Stop the app:**
Press `Ctrl + C` in terminal

**Install dependencies (only needed once):**
```bash
npm install
```

**Build for production:**
```bash
npm run build
```

---

**You've got this! 🐑 Happy coding and God bless your Bible learning journey!**

*"I can do all things through Christ who strengthens me." - Philippians 4:13*
