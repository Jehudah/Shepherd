/**
 * Firebase Configuration
 * Centralized Firebase initialization for the entire app
 */

import { initializeApp, getApp, FirebaseApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration - Replace with your config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAVSoJHenSVDVVgz6_AQsrTrqXpATgv2Z4",
  authDomain: "shepherd-42536.firebaseapp.com",
  projectId: "shepherd-42536",
  storageBucket: "shepherd-42536.firebasestorage.app",
  messagingSenderId: "34678159656",
  appId: "1:34678159656:web:e0d19e4a82104199bdf81d",
  measurementId: "G-LB79HJLW6Q"
};

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
