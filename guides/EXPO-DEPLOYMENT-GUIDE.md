# 📱 Complete Expo & EAS Build Guide for Shepherd App

**For First-Time App Developers** - Step-by-step deployment with Expo

---

## 📋 What You'll Learn

1. **Expo Account Setup** - Create your developer account
2. **EAS CLI Installation** - Command line tools
3. **Project Configuration** - Set up app.json and eas.json
4. **Development Builds** - Test on real devices
5. **Production Builds** - Create App Store/Play Store versions
6. **TestFlight & Internal Testing** - Beta testing

**Time needed**: 1-2 hours for initial setup
**Prerequisites**: Firebase setup complete (see FIREBASE-SETUP-COMPLETE.md)

---

## Part 1: Create Expo Account

### Step 1: Sign Up for Expo

1. Go to: https://expo.dev
2. Click **"Sign Up"** in top right
3. Choose signup method:
   - **GitHub** (recommended - fastest)
   - **Google**
   - **Email** (you'll need to verify)
4. Complete signup process
5. Verify your email if using email signup

### Step 2: Note Your Username

After signup, you'll see your username (e.g., `yourname` or `your-github-username`)

**IMPORTANT**: You'll need this username for all builds!

---

## Part 2: Install EAS CLI

### Step 1: Install Node.js (if not already)

1. Check if Node.js is installed:
```bash
node --version
```

2. If you see a version number (v18+), you're good!
3. If not, download from: https://nodejs.org (choose LTS version)

### Step 2: Install EAS CLI Globally

```bash
npm install -g eas-cli
```

**What this does**: Installs Expo Application Services command line tool globally on your computer.

### Step 3: Login to EAS

```bash
eas login
```

Enter your Expo credentials when prompted.

### Step 4: Verify Installation

```bash
eas whoami
```

Should show your Expo username.

---

## Part 3: Configure Your Project

### Step 1: Navigate to Project Directory

```bash
cd c:\Users\JehudahOorebeekDenof\Documents\app\shphrd
```

### Step 2: Create app.json Configuration

Create or update `app.json` in your project root:

```json
{
  "expo": {
    "name": "Shepherd Bible Learning",
    "slug": "shepherd-bible-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#3B82F6"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.shepherd",
      "buildNumber": "1",
      "infoPlist": {
        "NSUserTrackingUsageDescription": "This allows us to provide personalized Bible learning experiences.",
        "NSPhotoLibraryUsageDescription": "This allows you to upload a profile picture."
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#3B82F6"
      },
      "package": "com.yourcompany.shepherd",
      "versionCode": 1,
      "permissions": [
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE"
      ]
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      "@react-native-firebase/firestore"
    ],
    "extra": {
      "eas": {
        "projectId": "YOUR_PROJECT_ID_HERE"
      }
    }
  }
}
```

**IMPORTANT Changes to Make**:
1. **bundleIdentifier** (iOS): Replace `com.yourcompany.shepherd` with your actual bundle ID
2. **package** (Android): Replace `com.yourcompany.shepherd` with your actual package name
3. **icon.png**: Path to your app icon (1024x1024px)
4. **splash.png**: Path to your splash screen

**Must match Firebase**: Your bundle ID and package name MUST match what you set up in Firebase (Part 5 & 6 of FIREBASE-SETUP-COMPLETE.md).

### Step 3: Initialize EAS

```bash
eas build:configure
```

**What happens**:
- Creates `eas.json` configuration file
- Asks which platforms (choose: iOS and Android)
- Links project to your Expo account

### Step 4: Review eas.json

The command creates `eas.json`:

```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "distribution": "internal",
      "ios": {
        "simulator": false
      },
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "ios": {
        "simulator": false
      },
      "android": {
        "buildType": "aab"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

**Build Profiles Explained**:
- **development**: For testing with Expo Go or development client
- **preview**: For internal testing (TestFlight or APK)
- **production**: For App Store and Play Store submission

---

## Part 4: Add Firebase Configuration Files

### Step 1: iOS Configuration

1. **Find your GoogleService-Info.plist** (downloaded in Firebase setup)
2. Create `ios` folder in project root if it doesn't exist
3. Copy `GoogleService-Info.plist` to project root or `ios/` folder

### Step 2: Android Configuration

1. **Find your google-services.json** (downloaded in Firebase setup)
2. Create `android/app` folder path if it doesn't exist
3. Copy `google-services.json` to `android/app/` folder

### Step 3: Update app.json with Firebase

Add Firebase config to `app.json`:

```json
{
  "expo": {
    // ... existing config
    "ios": {
      "googleServicesFile": "./GoogleService-Info.plist"
      // ... rest of iOS config
    },
    "android": {
      "googleServicesFile": "./google-services.json"
      // ... rest of Android config
    }
  }
}
```

---

## Part 5: Install Required Dependencies

### Step 1: Install Firebase for React Native

```bash
npm install @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore @react-native-firebase/storage
```

### Step 2: Install React Native Core

```bash
npm install react-native@0.76.5
```

### Step 3: Install Expo Modules

```bash
npx expo install expo expo-dev-client
```

### Step 4: Verify package.json

Your `package.json` should now include:

```json
{
  "dependencies": {
    "expo": "^53.0.25",
    "react": "^19.0.0",
    "react-native": "^0.76.5",
    "@react-native-firebase/app": "^latest",
    "@react-native-firebase/auth": "^latest",
    "@react-native-firebase/firestore": "^latest",
    "@react-native-firebase/storage": "^latest"
  }
}
```

---

## Part 6: Create Development Build

Development builds let you test your app on real devices with all native code.

### Step 1: Build for iOS (Mac only)

```bash
eas build --profile development --platform ios
```

**What happens**:
1. Code is uploaded to Expo servers
2. Native iOS build is created (takes 10-20 minutes)
3. You'll get a download link when done

**If you don't have Apple Developer account yet**:
- Command will ask you to create one
- Or use Expo's temporary credentials for testing

### Step 2: Build for Android

```bash
eas build --profile development --platform android
```

**What happens**:
1. Code is uploaded to Expo servers
2. Native Android APK is created (takes 10-20 minutes)
3. You'll get download link when done

### Step 3: Install on Your Device

**iOS**:
1. Open download link on your iPhone
2. Tap "Install"
3. Go to Settings > General > Device Management
4. Trust the developer certificate
5. Open app from home screen

**Android**:
1. Download APK from link
2. Open downloaded file
3. Enable "Install from unknown sources" if prompted
4. Install and open

---

## Part 7: Test Your App

### Step 1: Run Development Build

1. Open the installed app on your device
2. It will show Expo dev menu
3. Scan QR code or enter URL to load your app

### Step 2: Start Development Server

In your project directory:

```bash
npx expo start --dev-client
```

**What happens**:
- Development server starts
- QR code appears in terminal
- Scan with your device to load app

### Step 3: Test All Features

Test checklist:
- [ ] User registration works
- [ ] Login works
- [ ] Firebase connection successful
- [ ] All screens navigate properly
- [ ] Questions load correctly
- [ ] XP and progress save
- [ ] Cloud sync works
- [ ] Images load (profile pictures)
- [ ] Offline mode works

---

## Part 8: Create Preview Build (Internal Testing)

Preview builds are for sharing with beta testers.

### Step 1: Build iOS Preview

```bash
eas build --profile preview --platform ios
```

**What you get**: IPA file that can be installed via TestFlight or direct install.

### Step 2: Build Android Preview

```bash
eas build --profile preview --platform android
```

**What you get**: APK file that can be installed directly on Android devices.

### Step 3: Share with Testers

**iOS TestFlight** (recommended):
1. Go to https://appstoreconnect.apple.com
2. Create app in App Store Connect
3. Upload IPA using Transporter app
4. Add beta testers
5. They install via TestFlight app

**Android Direct Install**:
1. Send APK download link to testers
2. They download and install directly
3. Need to enable "Unknown sources"

---

## Part 9: Create Production Build

Production builds are for App Store and Play Store submission.

### Step 1: Build for iOS Production

```bash
eas build --profile production --platform ios
```

**Requirements**:
- Apple Developer account ($99/year)
- App created in App Store Connect
- All app info and screenshots ready

**What you get**: IPA file ready for App Store submission.

### Step 2: Build for Android Production

```bash
eas build --profile production --platform android
```

**What you get**: AAB (Android App Bundle) file ready for Play Store.

### Step 3: Download Build Artifacts

After build completes:
1. Download link will appear in terminal
2. Or go to: https://expo.dev/accounts/YOUR_USERNAME/projects/shepherd-bible-app/builds
3. Download IPA (iOS) or AAB (Android)

---

## Part 10: Submit to App Stores

### iOS App Store Submission

**See**: IOS-APPSTORE-GUIDE.md (next guide in series)

Quick overview:
1. Create app in App Store Connect
2. Upload IPA using Transporter
3. Fill in app information
4. Submit for review
5. Wait 1-7 days for approval

### Android Play Store Submission

**See**: ANDROID-PLAYSTORE-GUIDE.md (coming next)

Quick overview:
1. Create app in Play Console
2. Upload AAB file
3. Fill in app information
4. Submit for review
5. Wait 1-3 days for approval

---

## Common Commands Reference

### Build Commands

```bash
# Development builds
eas build --profile development --platform ios
eas build --profile development --platform android
eas build --profile development --platform all

# Preview builds (testing)
eas build --profile preview --platform ios
eas build --profile preview --platform android

# Production builds (App Store/Play Store)
eas build --profile production --platform ios
eas build --profile production --platform android
eas build --profile production --platform all
```

### Check Build Status

```bash
# View all builds
eas build:list

# View specific build
eas build:view BUILD_ID
```

### Submit to Stores

```bash
# iOS App Store
eas submit --platform ios

# Android Play Store
eas submit --platform android
```

### Update App

```bash
# Over-the-air update (small changes, no native code)
eas update

# New build (native code changes)
eas build --profile production --platform all --auto-submit
```

---

## Troubleshooting

### Build Failed

**Error**: "Duplicate module name"
**Fix**: Clear cache and rebuild
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
eas build --profile development --platform ios --clear-cache
```

**Error**: "Bundle identifier not found"
**Fix**: Make sure `bundleIdentifier` in `app.json` matches Firebase config

### Can't Install on Device

**iOS**: "Untrusted Developer"
**Fix**: Settings > General > Device Management > Trust developer

**Android**: "Install blocked"
**Fix**: Settings > Security > Enable "Unknown sources" or "Install from this source"

### Firebase Not Connecting

**Error**: "Firebase app not initialized"
**Fix**:
1. Check GoogleService-Info.plist is in project root
2. Check google-services.json is in android/app/
3. Verify paths in app.json are correct
4. Rebuild app

### Build Takes Too Long

Builds typically take:
- iOS: 15-25 minutes
- Android: 10-20 minutes

If over 30 minutes:
1. Check build status: `eas build:list`
2. Cancel and retry: `eas build:cancel BUILD_ID`
3. Check Expo status: https://status.expo.dev

---

## EAS Pricing

**Free Tier**:
- 30 builds per month (shared across iOS and Android)
- Good for personal projects and testing

**Production Plan** ($29/month):
- Unlimited builds
- Priority build queue
- Faster build times

For first app, free tier is usually sufficient!

---

## Next Steps

1. **Complete this Expo setup** ✅
2. **Test development build** on your device
3. **Create preview build** for beta testing
4. **Follow iOS guide**: IOS-APPSTORE-GUIDE.md (coming next)
5. **Follow Android guide**: ANDROID-PLAYSTORE-GUIDE.md (coming next)

---

## Verification Checklist

Before moving to App Store submission:

- [ ] Expo account created and verified
- [ ] EAS CLI installed and logged in
- [ ] app.json configured with correct bundle IDs
- [ ] Firebase config files added (GoogleService-Info.plist, google-services.json)
- [ ] Development build created and tested on device
- [ ] All app features working (auth, database, storage)
- [ ] Preview build created successfully
- [ ] Beta testers can install and use app
- [ ] Production build created and downloaded
- [ ] App icon and splash screen added
- [ ] Ready for App Store submission

---

## 📚 Additional Resources

**Expo Documentation**:
- https://docs.expo.dev/build/introduction/
- https://docs.expo.dev/submit/introduction/

**EAS Build**:
- https://docs.expo.dev/build/setup/

**React Native Firebase**:
- https://rnfirebase.io/

**Community Support**:
- Expo Discord: https://chat.expo.dev
- Stack Overflow: Tag `expo` or `eas`

---

## 🎉 You Did It!

You've now:
- ✅ Set up Expo account
- ✅ Configured EAS builds
- ✅ Created development, preview, and production builds
- ✅ Tested on real devices
- ✅ Ready for App Store submission

**Next**: Follow the iOS App Store guide (IOS-APPSTORE-GUIDE.md) to submit your app to Apple!

---

**Guide Created**: January 2026
**For**: First-Time App Developers
**App**: Shepherd Bible Learning
**Status**: Complete and Ready to Use

🐑 **Great work! You're one step closer to launching Shepherd!**
