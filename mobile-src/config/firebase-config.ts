/**
 * Firebase Configuration
 * Centralized Firebase initialization for the entire app
 *
 * SECURITY: API keys are stored in .env file (not committed to git)
 * See .env.template for required environment variables
 */

import { initializeApp, getApp, FirebaseApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration from environment variables
// All keys are prefixed with EXPO_PUBLIC_ to be accessible in the app
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Validate that all required config values are present
const requiredKeys = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
const missingKeys = requiredKeys.filter(key => !firebaseConfig[key as keyof typeof firebaseConfig]);

if (missingKeys.length > 0) {
  throw new Error(
    `Missing Firebase configuration keys: ${missingKeys.join(', ')}\n` +
    'Please ensure all required environment variables are set in .env file.\n' +
    'See .env.template for required variables.'
  );
}

// Initialize Firebase App (singleton pattern)
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

try {
  // Try to get existing app first
  app = getApp();
  // If app exists, get existing auth (already configured with persistence)
  auth = getAuth(app);
} catch (error) {
  // If no app exists, initialize it
  app = initializeApp(firebaseConfig);
  // Initialize Auth with AsyncStorage persistence for React Native (first time only)
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
}

// Initialize Firestore with the app instance
db = getFirestore(app);

export { app, auth, db, firebaseConfig };
