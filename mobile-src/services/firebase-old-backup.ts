// Firebase Configuration and Services for React Native

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { UserProfile, UserProgress, AuthCredentials } from '../types';

// Collections
const USERS_COLLECTION = 'users';
const PROGRESS_COLLECTION = 'userProgress';

/**
 * Authentication Service
 */
export class AuthService {
  /**
   * Register new user with email, password, and username
   */
  static async register(credentials: AuthCredentials): Promise<UserProfile> {
    const { email, password, username } = credentials;

    if (!username) {
      throw new Error('Username is required');
    }

    // Check if username is already taken
    const usernameExists = await this.checkUsernameExists(username);
    if (usernameExists) {
      throw new Error('Username already taken');
    }

    // Create Firebase auth user
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const { uid } = userCredential.user;

    // Create user profile
    const userProfile: UserProfile = {
      uid,
      email,
      username,
      displayName: username,
      createdAt: new Date(),
      lastLoginAt: new Date(),
    };

    // Save to Firestore
    await firestore().collection(USERS_COLLECTION).doc(uid).set(userProfile);

    // Initialize user progress
    await this.initializeUserProgress(uid, email, username);

    return userProfile;
  }

  /**
   * Login with email and password
   */
  static async login(email: string, password: string): Promise<UserProfile> {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const { uid } = userCredential.user;

    // Update last login
    await firestore().collection(USERS_COLLECTION).doc(uid).update({
      lastLoginAt: new Date(),
    });

    // Get user profile
    const userDoc = await firestore().collection(USERS_COLLECTION).doc(uid).get();
    return userDoc.data() as UserProfile;
  }

  /**
   * Logout current user
   */
  static async logout(): Promise<void> {
    await auth().signOut();
  }

  /**
   * Get current user profile
   */
  static async getCurrentUser(): Promise<UserProfile | null> {
    const currentUser = auth().currentUser;
    if (!currentUser) return null;

    const userDoc = await firestore().collection(USERS_COLLECTION).doc(currentUser.uid).get();
    return userDoc.data() as UserProfile;
  }

  /**
   * Check if username exists
   */
  static async checkUsernameExists(username: string): Promise<boolean> {
    const snapshot = await firestore()
      .collection(USERS_COLLECTION)
      .where('username', '==', username)
      .limit(1)
      .get();

    return !snapshot.empty;
  }

  /**
   * Initialize user progress document
   */
  private static async initializeUserProgress(
    uid: string,
    email: string,
    username: string
  ): Promise<void> {
    const initialProgress: UserProgress = {
      userId: uid,
      username,
      email,
      totalXP: 0,
      level: 1,
      streak: 0,
      lastStudyDate: '',
      completedLessons: [],
      categoryProgress: {
        names: { completedLessons: 0, totalLessons: 20, xp: 0 },
        themes: { completedLessons: 0, totalLessons: 25, xp: 0 },
        books: { completedLessons: 0, totalLessons: 10, xp: 0 },
        timeline: { completedLessons: 0, totalLessons: 5, xp: 0 },
        verses: { completedLessons: 0, totalLessons: 5, xp: 0 },
        parables: { completedLessons: 0, totalLessons: 5, xp: 0 },
      },
      syncedAt: new Date(),
    };

    await firestore().collection(PROGRESS_COLLECTION).doc(uid).set(initialProgress);
  }

  /**
   * Reset password via email
   */
  static async resetPassword(email: string): Promise<void> {
    await auth().sendPasswordResetEmail(email);
  }

  /**
   * Update user profile
   */
  static async updateProfile(uid: string, updates: Partial<UserProfile>): Promise<void> {
    await firestore().collection(USERS_COLLECTION).doc(uid).update(updates);
  }
}

/**
 * Progress Service
 */
export class ProgressService {
  /**
   * Get user progress
   */
  static async getUserProgress(uid: string): Promise<UserProgress | null> {
    const doc = await firestore().collection(PROGRESS_COLLECTION).doc(uid).get();
    return doc.exists ? (doc.data() as UserProgress) : null;
  }

  /**
   * Sync local progress to Firestore
   */
  static async syncProgress(progress: UserProgress): Promise<void> {
    const { userId } = progress;
    await firestore().collection(PROGRESS_COLLECTION).doc(userId).set({
      ...progress,
      syncedAt: new Date(),
    }, { merge: true });
  }

  /**
   * Update XP
   */
  static async updateXP(uid: string, xpToAdd: number): Promise<void> {
    const progressRef = firestore().collection(PROGRESS_COLLECTION).doc(uid);

    await firestore().runTransaction(async (transaction) => {
      const doc = await transaction.get(progressRef);
      const currentProgress = doc.data() as UserProgress;

      const newTotalXP = currentProgress.totalXP + xpToAdd;
      const newLevel = Math.floor(newTotalXP / 100) + 1;

      transaction.update(progressRef, {
        totalXP: newTotalXP,
        level: newLevel,
        syncedAt: new Date(),
      });
    });
  }

  /**
   * Complete a lesson
   */
  static async completeLesson(
    uid: string,
    lessonId: string,
    category: string
  ): Promise<void> {
    const progressRef = firestore().collection(PROGRESS_COLLECTION).doc(uid);

    await firestore().runTransaction(async (transaction) => {
      const doc = await transaction.get(progressRef);
      const currentProgress = doc.data() as UserProgress;

      // Add lesson to completed if not already there
      if (!currentProgress.completedLessons.includes(lessonId)) {
        const updatedLessons = [...currentProgress.completedLessons, lessonId];

        // Update category progress
        const categoryProgress = currentProgress.categoryProgress[category as keyof typeof currentProgress.categoryProgress];
        if (categoryProgress) {
          categoryProgress.completedLessons += 1;
        }

        transaction.update(progressRef, {
          completedLessons: updatedLessons,
          [`categoryProgress.${category}`]: categoryProgress,
          syncedAt: new Date(),
        });
      }
    });
  }

  /**
   * Update streak
   */
  static async updateStreak(uid: string): Promise<void> {
    const progressRef = firestore().collection(PROGRESS_COLLECTION).doc(uid);

    await firestore().runTransaction(async (transaction) => {
      const doc = await transaction.get(progressRef);
      const currentProgress = doc.data() as UserProgress;

      const today = new Date().toISOString().split('T')[0];
      const lastStudy = currentProgress.lastStudyDate;

      let newStreak = currentProgress.streak;

      if (!lastStudy) {
        // First study session
        newStreak = 1;
      } else {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        if (lastStudy === yesterday) {
          // Studied yesterday, increment streak
          newStreak += 1;
        } else if (lastStudy !== today) {
          // Streak broken
          newStreak = 1;
        }
      }

      transaction.update(progressRef, {
        streak: newStreak,
        lastStudyDate: today,
        syncedAt: new Date(),
      });
    });
  }
}

/**
 * Real-time progress listener
 */
export const subscribeToProgress = (
  uid: string,
  onUpdate: (progress: UserProgress) => void,
  onError?: (error: Error) => void
) => {
  return firestore()
    .collection(PROGRESS_COLLECTION)
    .doc(uid)
    .onSnapshot(
      (doc) => {
        if (doc.exists) {
          onUpdate(doc.data() as UserProgress);
        }
      },
      (error) => {
        if (onError) {
          onError(error);
        }
      }
    );
};
