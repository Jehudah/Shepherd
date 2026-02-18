# 🐑 Shepherd iOS App - Quick Start Guide

Get your Shepherd Bible Learning app running on iOS in under 30 minutes!

## Prerequisites Checklist

Before you begin, make sure you have:

- [ ] **macOS** (required for iOS development)
- [ ] **Xcode** installed (latest version from Mac App Store)
- [ ] **Node.js** v18+ (`node --version`)
- [ ] **CocoaPods** (`sudo gem install cocoapods`)
- [ ] **Watchman** (`brew install watchman`)
- [ ] **Firebase account** (free tier is fine)

## Step-by-Step Setup

### 1. Run the Automated Setup (5 minutes)

```bash
cd /path/to/shepherd/project
chmod +x setup-react-native.sh
./setup-react-native.sh
```

This script will:
- Initialize React Native project
- Install all dependencies
- Set up iOS pods
- Create project structure

### 2. Set Up Firebase (10 minutes)

#### A. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name it: **Shepherd Bible App**
4. Disable Google Analytics (optional)
5. Click "Create project"

#### B. Add iOS App to Firebase

1. In Firebase Console, click the iOS icon
2. Enter Bundle ID: `com.shepherd.bibleapp`
3. Enter app nickname: **Shepherd iOS**
4. Click "Register app"
5. Download `GoogleService-Info.plist`
6. **IMPORTANT**: Move the file to:
   ```
   ShepherdApp/ios/ShepherdApp/GoogleService-Info.plist
   ```

#### C. Enable Authentication

1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Click "Sign-in method" tab
4. Enable "Email/Password"
5. Click "Save"

#### D. Enable Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode"
4. Select a location (choose closest to your users)
5. Click "Enable"

#### E. Set Up Security Rules

1. In Firestore, click "Rules" tab
2. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // User progress
    match /userProgress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Click "Publish"

### 3. Copy Source Files (2 minutes)

```bash
cd ShepherdApp
cp -r ../mobile-src/* src/
```

If on Windows:
```cmd
xcopy /E /I ..\mobile-src src
```

### 4. Configure iOS Project (3 minutes)

#### A. Update Info.plist

Open `ios/ShepherdApp/Info.plist` and add before `</dict>`:

```xml
<key>UIAppFonts</key>
<array>
  <string>Feather.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>FontAwesome.ttf</string>
</array>
```

#### B. Update Bundle Identifier

1. Open `ios/ShepherdApp.xcworkspace` in Xcode (NOT .xcodeproj!)
2. Click on "ShepherdApp" in the left sidebar
3. Under "General" tab, find "Bundle Identifier"
4. Set to: `com.shepherd.bibleapp`

### 5. Run the App (5 minutes)

```bash
# Make sure you're in ShepherdApp directory
npm run ios
```

This will:
- Start Metro bundler
- Build the iOS app
- Launch iOS Simulator
- Open the app

**First time?** Building may take 5-10 minutes.

## Testing Your Setup

### Test Authentication Flow

1. App should open to Login screen
2. Click "Sign Up"
3. Create account with:
   - Username: `testuser`
   - Email: `test@example.com`
   - Password: `test123`
4. Should redirect to main app with 5 tabs

### Test Lesson Playing

1. Tap "Learn" tab
2. Tap "Names & People"
3. Tap "Prophets"
4. Tap first lesson: "Moses: The Deliverer"
5. Answer questions
6. Complete lesson
7. Check that XP increases
8. Check that lesson is marked complete

### Test Data Syncing

1. Complete a lesson
2. Check Firebase Console → Firestore Database
3. Navigate to `userProgress` → [your user ID]
4. Should see:
   - `totalXP` increased
   - `completedLessons` array updated
   - `syncedAt` timestamp

## Troubleshooting

### Problem: "Could not find GoogleService-Info.plist"

**Solution:**
```bash
# Verify file location
ls -la ios/ShepherdApp/GoogleService-Info.plist

# If not there, copy it:
cp ~/Downloads/GoogleService-Info.plist ios/ShepherdApp/
```

### Problem: "No bundle URL present"

**Solution:**
```bash
# Clear Metro cache
npm start -- --reset-cache

# In another terminal
npm run ios
```

### Problem: "Pod install failed"

**Solution:**
```bash
cd ios
pod deintegrate
pod install
cd ..
npm run ios
```

### Problem: Build fails in Xcode

**Solution:**
1. Open Xcode
2. Product → Clean Build Folder (Cmd+Shift+K)
3. Close Xcode
4. ```bash
   cd ios
   rm -rf build
   rm -rf Pods
   pod install
   cd ..
   npm run ios
   ```

### Problem: "Firebase Auth not working"

**Solution:**
1. Verify `GoogleService-Info.plist` is in correct location
2. Check Firebase Console → Authentication is enabled
3. Rebuild app: `npm run ios`

## Next Steps

### Add Your Data

Your existing question data is ready to use! Located in:
- `src/data/namesQuestions.ts`
- `src/data/themesQuestions.ts`
- `src/data/timelineQuestions.ts`
- `src/data/versesQuestions.ts`
- `src/data/parablesQuestions.ts`

### Customize the App

1. **App Name**: Edit `ios/ShepherdApp/Info.plist`
   ```xml
   <key>CFBundleDisplayName</key>
   <string>Shepherd</string>
   ```

2. **App Icon**: Use [AppIcon.co](https://appicon.co/) to generate icons
   - Upload 1024x1024 icon
   - Download iOS icons
   - Replace in `ios/ShepherdApp/Images.xcassets/AppIcon.appiconset/`

3. **Colors**: Edit `src/theme.ts` (create if needed)

### Build for Testing

#### TestFlight Distribution

1. Open Xcode
2. Select "Any iOS Device (arm64)"
3. Product → Archive
4. Click "Distribute App"
5. Choose "App Store Connect"
6. Upload to TestFlight
7. Invite beta testers via email

### Prepare for App Store

1. **Privacy Policy**: Required for apps with accounts
2. **App Store Screenshots**:
   - 6.5" Display (iPhone 14 Pro Max)
   - 5.5" Display (iPhone 8 Plus)
3. **App Description**: Prepare marketing copy
4. **Keywords**: Bible, Learn, Study, Quiz, Christian
5. **Category**: Education → Reference

## Development Workflow

### Daily Development

```bash
# Start development server
npm start

# Run on iOS simulator
npm run ios

# Run on specific device
npm run ios -- --device "My iPhone"

# View logs
npx react-native log-ios
```

### Testing on Real Device

1. Connect iPhone via USB
2. Open Xcode
3. Select your device from device menu
4. Click Run (or Cmd+R)
5. Trust developer certificate on iPhone (Settings → General → Device Management)

### Debugging

- **React DevTools**: Shake device → Enable Debug
- **Logs**: `npx react-native log-ios`
- **Network**: Install Reactotron for network debugging
- **Redux**: Use Flipper for state debugging

## Success Checklist

After setup, you should have:

- [ ] App runs on simulator
- [ ] Can register new account
- [ ] Can login with credentials
- [ ] All 5 tabs navigate correctly
- [ ] Can play lessons
- [ ] Questions display correctly
- [ ] Progress saves and syncs
- [ ] XP increases after completing lessons
- [ ] Firestore shows data in console

## Performance Tips

1. **Bundle Size**: Use Hermes engine (enabled by default)
2. **Images**: Optimize all images before adding
3. **Caching**: AsyncStorage caches user data
4. **Offline**: App works offline, syncs when online

## Support & Resources

- **React Native Docs**: https://reactnative.dev/docs/getting-started
- **Firebase Docs**: https://firebase.google.com/docs
- **React Navigation**: https://reactnavigation.org/docs/getting-started
- **Stack Overflow**: Tag questions with `react-native`

## What You've Built

Congratulations! You now have:

- ✅ Native iOS app
- ✅ User authentication with Firebase
- ✅ Cloud data syncing
- ✅ 780+ Bible learning questions
- ✅ Progress tracking with XP and levels
- ✅ Streak system
- ✅ 5-tab navigation
- ✅ Beautiful native UI
- ✅ Offline support
- ✅ Real-time sync
- ✅ Ready for App Store submission

---

**Time to completion**: ~30 minutes
**Ready for TestFlight**: ~1 hour (with testing)
**Ready for App Store**: ~1 day (with assets and review)

🎉 **Welcome to iOS development!**
