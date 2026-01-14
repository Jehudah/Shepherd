# Shepherd iOS App - React Native

This is the React Native iOS version of the Shepherd Bible learning app.

## Prerequisites

Before you begin, ensure you have:

1. **Node.js** (v18 or higher)
2. **Xcode** (latest version) - Required for iOS development
3. **CocoaPods** - Run: `sudo gem install cocoapods`
4. **Watchman** - Run: `brew install watchman`

## Initial Setup

### 1. Install React Native CLI
```bash
npm install -g react-native-cli
```

### 2. Initialize React Native Project
```bash
# From the project root
npx react-native init ShepherdApp --template react-native-template-typescript
```

### 3. Install Dependencies
```bash
cd ShepherdApp
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
npm install firebase @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore
npm install @react-native-async-storage/async-storage
npm install zustand
npm install react-native-vector-icons
```

### 4. Install iOS Dependencies
```bash
cd ios
pod install
cd ..
```

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project called "Shepherd Bible App"
3. Add an iOS app with bundle ID: `com.shepherd.bibleapp`
4. Download `GoogleService-Info.plist`
5. Place it in `ShepherdApp/ios/ShepherdApp/`

## Running the App

### iOS (Simulator)
```bash
npm run ios
```

### iOS (Physical Device)
1. Open `ios/ShepherdApp.xcworkspace` in Xcode
2. Select your device
3. Click Run

## Project Structure

```
ShepherdApp/
├── src/
│   ├── components/        # Reusable components
│   ├── screens/          # App screens
│   ├── navigation/       # Navigation setup
│   ├── services/         # Firebase and API services
│   ├── store/            # Zustand store
│   ├── data/             # Question data
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
├── ios/                  # iOS native code
└── android/              # Android native code (future)
```

## Authentication Flow

1. **Login/Register Screen** - Email/username + password
2. **Main App** - Tab navigator with 5 tabs
3. **Profile** - Account settings and sync status

## Data Syncing

- User progress syncs to Firestore in real-time
- Offline support with local AsyncStorage
- Conflict resolution on sync

## Building for App Store

1. Update version in `ios/ShepherdApp/Info.plist`
2. Archive in Xcode
3. Submit to App Store Connect

## Next Steps

After setup, copy the converted components from the migration guide.
