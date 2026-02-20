# Shepherd App - Web to React Native Migration Guide

This guide explains how to convert your Shepherd Bible Learning app from a React web app to a native iOS app using React Native.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Key Differences](#key-differences)
3. [Component Conversion](#component-conversion)
4. [Navigation](#navigation)
5. [Styling](#styling)
6. [Data Migration](#data-migration)
7. [Building for iOS](#building-for-ios)

---

## Project Setup

### Step 1: Initialize React Native Project

```bash
chmod +x setup-react-native.sh
./setup-react-native.sh
```

This will create a new `ShepherdApp` folder with React Native initialized.

### Step 2: Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project: "Shepherd Bible App"
3. Add an iOS app:
   - Bundle ID: `com.shepherd.bibleapp`
   - Download `GoogleService-Info.plist`
   - Place in `ShepherdApp/ios/ShepherdApp/`

4. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable "Email/Password"

5. Enable Firestore:
   - Go to Firestore Database
   - Create database in production mode
   - Set up security rules (see below)

#### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Users can read/write their own progress
    match /userProgress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Everyone can read public content (questions, articles)
    match /content/{document=**} {
      allow read: if true;
      allow write: if false; // Only admins
    }
  }
}
```

### Step 3: Copy Source Files

```bash
cd ShepherdApp
cp -r ../mobile-src/* src/
```

### Step 4: Update iOS Configuration

Edit `ios/ShepherdApp/Info.plist` to add:

```xml
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
```

---

## Key Differences

### Web React vs React Native

| Web (React) | React Native | Notes |
|-------------|--------------|-------|
| `<div>` | `<View>` | Container element |
| `<span>`, `<p>` | `<Text>` | Text must be in `<Text>` |
| `<button>` | `<TouchableOpacity>` | Pressable element |
| `<input>` | `<TextInput>` | Text input |
| `<img>` | `<Image>` | Images |
| `onClick` | `onPress` | Press handler |
| CSS classes | StyleSheet | Styling |
| `className` | `style` | Apply styles |
| Routing (`react-router`) | Navigation (`react-navigation`) | |

### Styling Differences

**Web (CSS-in-JS/Tailwind):**
```jsx
<div className="flex flex-col p-4 bg-blue-500 rounded-lg">
  <h1 className="text-2xl font-bold">Title</h1>
</div>
```

**React Native (StyleSheet):**
```jsx
<View style={styles.container}>
  <Text style={styles.title}>Title</Text>
</View>

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 16,
    backgroundColor: '#3B82F6',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
```

---

## Component Conversion

### Example: Converting a Lesson Card

**Web Version:**
```tsx
// Web
<Link to={`/lesson/${lesson.id}`}>
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl">
    <h3 className="text-xl font-bold">{lesson.title}</h3>
    <p className="text-gray-600">{lesson.description}</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Start Lesson
    </button>
  </div>
</Link>
```

**React Native Version:**
```tsx
// React Native
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LessonCard({ lesson }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('LessonPlayer', { lessonId: lesson.id })}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.description}>{lesson.description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Lesson</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  content: {
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
```

### Icons

**Web (lucide-react):**
```tsx
import { Play, CheckCircle } from 'lucide-react';
<Play size={24} color="#3B82F6" />
```

**React Native (react-native-vector-icons):**
```tsx
import Icon from 'react-native-vector-icons/Feather';
<Icon name="play" size={24} color="#3B82F6" />
```

---

## Navigation

### Setting Up React Navigation

Create `src/navigation/AppNavigator.tsx`:

```tsx
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { useStore } from '../store/useStore';

// Import screens
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import LearnScreen from '../screens/Learn/LearnScreen';
import ChallengeScreen from '../screens/Challenge/ChallengeScreen';
import CommunityScreen from '../screens/Community/CommunityScreen';
import StudyScreen from '../screens/Study/StudyScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import LessonPlayerScreen from '../screens/Learn/LessonPlayerScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Learn') iconName = 'book-open';
          else if (route.name === 'Challenge') iconName = 'target';
          else if (route.name === 'Community') iconName = 'users';
          else if (route.name === 'Study') iconName = 'bookmark';
          else if (route.name === 'Profile') iconName = 'user';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3B82F6',
        tabBarInactiveTintColor: '#9CA3AF',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Learn" component={LearnScreen} />
      <Tab.Screen name="Challenge" component={ChallengeScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Study" component={StudyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const user = useStore((state) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen name="LessonPlayer" component={LessonPlayerScreen} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

## Data Migration

Your existing data files (`src/data/*.ts`) can be used as-is with minor modifications:

1. **Question Data**: Already compatible
2. **Study Content**: Already compatible
3. **User Progress**: Now synced to Firestore

### Migrating Existing Users (if needed)

If you have existing web users:

```typescript
// Migration script (run once)
async function migrateWebUsers() {
  // Export from web localStorage
  const webProgress = localStorage.getItem('shepherd-storage');
  const parsed = JSON.parse(webProgress);

  // Import to Firestore
  const user = auth().currentUser;
  if (user) {
    await ProgressService.syncProgress({
      ...parsed.state.userProgress,
      userId: user.uid,
    });
  }
}
```

---

## Building for iOS

### Development Build

```bash
npm run ios
```

### Production Build

1. Open Xcode:
```bash
cd ios
open ShepherdApp.xcworkspace
```

2. Select "Any iOS Device" as target

3. Product → Archive

4. Distribute App → App Store Connect

### App Store Preparation

1. **App Icon**: Create icons at required sizes
   - 1024x1024 (App Store)
   - Various sizes for app (handled by Xcode)

2. **Screenshots**: Required for App Store
   - 6.5" iPhone (1284 x 2778)
   - 5.5" iPhone (1242 x 2208)

3. **Privacy Policy**: Required for apps with accounts
   - Create at https://www.freeprivacypolicy.com/

4. **App Store Connect**:
   - Create app listing
   - Add description, keywords, categories
   - Set pricing (Free)
   - Submit for review

---

## Testing Checklist

- [ ] User registration works
- [ ] User login works
- [ ] Password reset works
- [ ] All 5 tabs navigate correctly
- [ ] Lessons load and play
- [ ] Progress saves locally
- [ ] Progress syncs to cloud
- [ ] Offline mode works
- [ ] Streak tracking works
- [ ] XP and levels update
- [ ] Study articles display correctly
- [ ] Dark mode works (if implemented)

---

## Next Steps After Migration

1. Run the setup script
2. Copy all component files
3. Test authentication flow
4. Test each screen/feature
5. Build for TestFlight
6. Invite beta testers
7. Submit to App Store

---

## Need Help?

Common issues and solutions:

**Issue**: Firebase not initializing
**Solution**: Ensure `GoogleService-Info.plist` is in correct location and pod install was run

**Issue**: Navigation not working
**Solution**: Check that screen names match exactly in navigator and navigation calls

**Issue**: Styles not applying
**Solution**: Remember React Native uses StyleSheet, not CSS classes

**Issue**: Icons not showing
**Solution**: Run `pod install` after installing react-native-vector-icons

---

## File Structure Reference

```
ShepherdApp/
├── src/
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── screens/
│   │   ├── Auth/
│   │   │   ├── LoginScreen.tsx
│   │   │   └── RegisterScreen.tsx
│   │   ├── Learn/
│   │   │   ├── LearnScreen.tsx
│   │   │   ├── LessonPlayerScreen.tsx
│   │   │   └── ...
│   │   ├── Study/
│   │   ├── Challenge/
│   │   ├── Community/
│   │   └── Profile/
│   ├── components/
│   │   ├── QuestionCard.tsx
│   │   ├── ProgressBar.tsx
│   │   └── ...
│   ├── services/
│   │   └── firebase.ts
│   ├── store/
│   │   └── useStore.ts
│   ├── data/
│   │   ├── namesQuestions.ts
│   │   ├── themesQuestions.ts
│   │   └── ...
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── shuffle.ts
├── ios/
├── android/
└── App.tsx
```

This structure keeps your code organized and maintainable!
