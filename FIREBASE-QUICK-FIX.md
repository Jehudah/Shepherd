# 🔥 Firebase Quick Fix Guide

## The Problem
Your app has Firebase placeholder values and won't work until you configure it properly.

## Important: You Need BOTH iOS and Web Apps

Your app needs two Firebase configurations:
1. **iOS app** → Provides `GoogleService-Info.plist` for native iOS features
2. **Web app** → Provides JavaScript config for the Firebase SDK used in your code

Both are required! Follow all steps below.

## Quick Fix (30 minutes)

### Step 1: Create Firebase Project (5 min)

1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Enter name: **Shepherd Bible App**
4. Click Continue
5. Disable Google Analytics (optional)
6. Click "Create project"

### Step 2: Add iOS App (5 min)

1. In your new Firebase project, click the **iOS** icon (⊕)
2. Register app:
   - **iOS bundle ID**: `com.anonymous.shepherd`
   - **App nickname**: Shepherd iOS
   - **App Store ID**: (leave blank for now)
3. Click "Register app"
4. **Download GoogleService-Info.plist**
5. **IMPORTANT**: Save it to your Downloads folder
6. Click "Continue" until you reach the Firebase Console home

### Step 3: Place iOS Config File (1 min)

```bash
# Run this command in your terminal:
cp ~/Downloads/GoogleService-Info.plist /Users/jehudahx/Shepherd/ios/shepherd/GoogleService-Info.plist
```

Verify it's there:
```bash
ls -la /Users/jehudahx/Shepherd/ios/shepherd/GoogleService-Info.plist
```

You should see the file listed.

### Step 3b: Add Web App (3 min) ⭐ IMPORTANT

**Why?** Your app uses the web Firebase SDK in JavaScript, so you need web credentials too.

1. Go back to Firebase Console → Project Overview
2. Click the **Web** icon `</>` to add a web app
3. Register web app:
   - **App nickname**: Shepherd Web
   - **Do NOT** check "Firebase Hosting" (leave unchecked)
4. Click "Register app"
5. **Copy the firebaseConfig object** that appears - you'll need this in Step 7
6. It looks like this:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc..."
   };
   ```
7. **Keep this window open** or copy these values somewhere - you'll need them in Step 7

### Step 4: Enable Authentication (3 min)

1. In Firebase Console, go to **Build** → **Authentication**
2. Click "Get started"
3. Click "Sign-in method" tab
4. Click on "Email/Password"
5. Enable the toggle
6. Click "Save"

### Step 5: Enable Firestore (5 min)

1. In Firebase Console, go to **Build** → **Firestore Database**
2. Click "Create database"
3. Select **"Start in production mode"**
4. Click "Next"
5. Choose a location (select one close to your users)
6. Click "Enable"

### Step 6: Set Security Rules (2 min)

1. In Firestore, click the **"Rules"** tab
2. Replace everything with this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow users to read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    match /userProgress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Click "Publish"

### Step 7: Update App Config (5 min)

**Use the Web app config from Step 3b!**

1. Use the `firebaseConfig` you copied in **Step 3b** (when you added the Web app)
2. If you lost it, go to: Firebase Console → **gear icon** ⚙️ → **Project settings**
3. Scroll down to "Your apps" section
4. Find the **Web app** (NOT the iOS app)
5. Click on "Shepherd Web" to see the config:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc..."  // ← Note: "web" not "ios"
};
```

6. Open the file: `/Users/jehudahx/Shepherd/mobile-src/App.tsx`
7. Find lines 19-26 (the firebaseConfig)
8. Replace with YOUR **web app** values from Firebase Console
9. **Important**: Make sure the `appId` ends with `:web:`, NOT `:ios:`
10. Save the file

### Step 8: Run the App (5 min)

```bash
# Navigate to your project
cd /Users/jehudahx/Shepherd

# Run on iOS
npx expo run:ios
```

**First build takes 5-10 minutes.**

### Step 9: Test (3 min)

1. App should open in iOS Simulator
2. You should see the Login/Register screen
3. Click "Sign Up"
4. Create a test account:
   - Username: `testuser`
   - Email: `test@example.com`
   - Password: `test123456`
5. Click Register
6. You should be logged in and see the main app with 5 tabs

### Step 10: Verify Data (2 min)

1. Go back to Firebase Console
2. Go to **Firestore Database**
3. You should see:
   - Collection: `users` with your user document
   - Collection: `userProgress` with your progress data

---

## ✅ Success Checklist

After completing these steps, verify:

- [ ] GoogleService-Info.plist is in `ios/shepherd/` folder
- [ ] Firebase Authentication is enabled
- [ ] Firestore Database is created
- [ ] Security rules are set
- [ ] App config is updated in mobile-src/App.tsx
- [ ] App builds successfully
- [ ] Can register a new user
- [ ] Can login with credentials
- [ ] Data appears in Firebase Console

---

## 🐛 Common Issues

### "Could not find GoogleService-Info.plist"

**Fix**: Make sure you copied the file to the correct location:
```bash
cp ~/Downloads/GoogleService-Info.plist /Users/jehudahx/Shepherd/ios/shepherd/GoogleService-Info.plist
```

### "Firebase: Error (auth/configuration-not-found)"

**Fix**:
1. Check that `GoogleService-Info.plist` is in the right place
2. Clean and rebuild:
```bash
cd /Users/jehudahx/Shepherd
cd ios && rm -rf build && cd ..
npx expo run:ios
```

### "Build failed" or "Pod install failed"

**Fix**:
```bash
cd /Users/jehudahx/Shepherd/ios
rm -rf build Pods Podfile.lock
pod install
cd ..
npx expo run:ios
```

### "Metro bundler not starting"

**Fix**:
```bash
npx expo start --clear
```

---

## 🎯 Quick Command Reference

```bash
# Run on iOS
npx expo run:ios

# Run on iOS with specific simulator
npx expo run:ios --simulator "iPhone 15 Pro"

# Clear Metro cache and restart
npx expo start --clear

# Clean build
cd ios && rm -rf build Pods && pod install && cd ..

# Check if config file exists
ls -la ios/shepherd/GoogleService-Info.plist
```

---

## 📝 After Firebase Setup

Once Firebase is working, you can:

1. **Customize the app**
   - Change app name
   - Change bundle identifier
   - Add app icon

2. **Add your content**
   - Bible questions
   - Study materials
   - Lessons

3. **Test on real device**
   - Connect iPhone
   - Build in Xcode
   - Test on your phone

4. **Deploy to TestFlight**
   - Archive in Xcode
   - Upload to App Store Connect
   - Invite beta testers

---

## 🚀 That's It!

After following these steps, your app should be running with:
- ✅ User authentication
- ✅ Cloud data sync
- ✅ All 5 tabs working
- ✅ Ready for development

**Time to complete**: About 30 minutes
**Result**: Working iOS app! 🎉
