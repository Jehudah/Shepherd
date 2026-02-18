/**
 * Shepherd Bible Learning App
 * React Native iOS App
 */

import React, { useEffect, useState } from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { onAuthStateChanged } from 'firebase/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Store
import { useStore } from './store/useStore';

// UI Components
import { ToastProvider } from './components/ui';

// Firebase (centralized config)
import { auth } from './config/firebase-config';

// Auth Screens
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';

// Main Tab Screens
import LearnScreen from './screens/Learn/LearnScreen';
import ChallengeScreen from './screens/Challenge/ChallengeScreen';
import CommunityScreen from './screens/Community/CommunityScreen';
import StudyScreen from './screens/Study/StudyScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';

// Learn Screens
import LessonPlayerScreen from './screens/Learn/LessonPlayerScreen';
import NamesCategories from './screens/Learn/NamesCategories';
import NamesLessons from './screens/Learn/NamesLessons';
import ThemesSelection from './screens/Learn/ThemesSelection';
import ThemesLessons from './screens/Learn/ThemesLessons';
import TimelineScreen from './screens/Learn/TimelineScreen';
import TimelineDragScreen from './screens/Learn/TimelineDragScreen';
import MemorizeVersesScreen from './screens/Learn/MemorizeVersesScreen';
import VerseLessonsScreen from './screens/Learn/VerseLessonsScreen';
import ProgressiveVerseScreen from './screens/Learn/ProgressiveVerseScreen';
import ParablesScreen from './screens/Learn/ParablesScreen';
import BibleBooksScreen from './screens/Learn/BibleBooksScreen';

// Study Screens
import StudyNamesScreen from './screens/Study/StudyNamesScreen';
import StudyThemesScreen from './screens/Study/StudyThemesScreen';
import StudyArticleScreen from './screens/Study/StudyArticleScreen';

// Community Screens
import FriendsScreen from './screens/Community/FriendsScreen';
import FriendProfileScreen from './screens/Community/FriendProfileScreen';
import LeaderboardScreen from './screens/Community/LeaderboardScreen';
import StudyGroupsScreen from './screens/Community/StudyGroupsScreen';
import GroupDetailScreen from './screens/Community/GroupDetailScreen';
import PrayerRequestsScreen from './screens/Community/PrayerRequestsScreen';
import ForumsScreen from './screens/Community/ForumsScreen';
import ForumTopicScreen from './screens/Community/ForumTopicScreen';

// Types
import { RootStackParamList, MainTabParamList } from './types';

// Ignore specific warnings
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();
const AuthStack = createNativeStackNavigator();

/**
 * Auth Stack Navigator
 */
function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}

/**
 * Main Tab Navigator
 */
function MainTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = 'home';

          if (route.name === 'Learn') iconName = 'book-open';
          else if (route.name === 'Challenge') iconName = 'target';
          else if (route.name === 'Community') iconName = 'users';
          else if (route.name === 'Study') iconName = 'bookmark';
          else if (route.name === 'Profile') iconName = 'user';

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3B82F6',
        tabBarInactiveTintColor: '#9CA3AF',
        headerShown: false,
        tabBarStyle: {
          paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
          paddingTop: 8,
          height: 60 + (insets.bottom > 0 ? insets.bottom : 0),
        },
      })}
    >
      <Tab.Screen
        name="Learn"
        component={LearnScreen}
        options={{ tabBarLabel: 'Learn' }}
      />
      <Tab.Screen
        name="Challenge"
        component={ChallengeScreen}
        options={{ tabBarLabel: 'Challenge' }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{ tabBarLabel: 'Community' }}
      />
      <Tab.Screen
        name="Study"
        component={StudyScreen}
        options={{ tabBarLabel: 'Study' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

/**
 * Main App Component
 */
export default function App() {
  const [initializing, setInitializing] = useState(true);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const setUserProgress = useStore((state) => state.setUserProgress);

  // Handle Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in - create a basic user profile
        const userProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
        };
        setUser(userProfile);
      } else {
        // User is signed out
        setUser(null);
      }

      if (initializing) setInitializing(false);
    });

    return unsubscribe;
  }, []);

  if (initializing) {
    // You can add a loading screen here
    return null;
  }

  return (
    <ToastProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <>
              <Stack.Screen name="Main" component={MainTabs} />
              <Stack.Screen
                name="LessonPlayer"
                component={LessonPlayerScreen}
                options={{
                  animation: 'slide_from_right',
                  presentation: 'card',
                }}
              />
              {/* Learn Stack Screens */}
              <Stack.Screen
                name="NamesCategories"
                component={NamesCategories}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="NamesLessons"
                component={NamesLessons}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="ThemesSelection"
                component={ThemesSelection}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="ThemesLessons"
                component={ThemesLessons}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="Timeline"
                component={TimelineScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="TimelineDrag"
                component={TimelineDragScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="MemorizeVerses"
                component={MemorizeVersesScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="VerseLessons"
                component={VerseLessonsScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="ProgressiveVerse"
                component={ProgressiveVerseScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="Parables"
                component={ParablesScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="BibleBooks"
                component={BibleBooksScreen}
                options={{ animation: 'slide_from_right' }}
              />
              {/* Study Stack Screens */}
              <Stack.Screen
                name="StudyNames"
                component={StudyNamesScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="StudyThemes"
                component={StudyThemesScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="StudyArticle"
                component={StudyArticleScreen}
                options={{ animation: 'slide_from_right' }}
              />
              {/* Community Stack Screens */}
              <Stack.Screen
                name="Friends"
                component={FriendsScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="FriendProfile"
                component={FriendProfileScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="Leaderboard"
                component={LeaderboardScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="StudyGroups"
                component={StudyGroupsScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="GroupDetail"
                component={GroupDetailScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="PrayerRequests"
                component={PrayerRequestsScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="Forums"
                component={ForumsScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <Stack.Screen
                name="ForumTopic"
                component={ForumTopicScreen}
                options={{ animation: 'slide_from_right' }}
              />
            </>
          ) : (
            <Stack.Screen name="Auth" component={AuthNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
}
