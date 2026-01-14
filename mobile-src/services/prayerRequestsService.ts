import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';

export interface PrayerRequest {
  id: string;
  userId: string;
  username: string;
  title: string;
  description: string;
  category: string;
  isActive: boolean;
  isAnswered: boolean;
  prayerCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PrayerResponse {
  id: string;
  requestId: string;
  userId: string;
  username: string;
  createdAt: Date;
}

/**
 * Create a new prayer request
 */
export async function createPrayerRequest(
  userId: string,
  username: string,
  title: string,
  description: string,
  category: string
): Promise<string> {
  try {
    const requestsRef = collection(db, 'prayerRequests');
    const requestDoc = await addDoc(requestsRef, {
      userId,
      username,
      title,
      description,
      category,
      isActive: true,
      isAnswered: false,
      prayerCount: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    return requestDoc.id;
  } catch (error) {
    console.error('Error creating prayer request:', error);
    throw error;
  }
}

/**
 * Get all active prayer requests
 */
export async function getActivePrayerRequests(): Promise<PrayerRequest[]> {
  try {
    const requestsRef = collection(db, 'prayerRequests');
    const q = query(
      requestsRef,
      where('isActive', '==', true),
      orderBy('createdAt', 'desc'),
      limit(50)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date()
    })) as PrayerRequest[];
  } catch (error) {
    console.error('Error getting prayer requests:', error);
    return [];
  }
}

/**
 * Get user's prayer requests
 */
export async function getUserPrayerRequests(userId: string): Promise<PrayerRequest[]> {
  try {
    const requestsRef = collection(db, 'prayerRequests');
    const q = query(
      requestsRef,
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date()
    })) as PrayerRequest[];
  } catch (error) {
    console.error('Error getting user prayer requests:', error);
    return [];
  }
}

/**
 * Get prayers user is praying for
 */
export async function getPrayersUserIsPrayingFor(userId: string): Promise<PrayerRequest[]> {
  try {
    // Get all prayer requests
    const requestsRef = collection(db, 'prayerRequests');
    const requestsSnapshot = await getDocs(requestsRef);

    const prayingFor: PrayerRequest[] = [];

    // Check each prayer for user's response
    for (const requestDoc of requestsSnapshot.docs) {
      const responsesRef = collection(db, 'prayerRequests', requestDoc.id, 'responses');
      const responseQuery = query(responsesRef, where('userId', '==', userId));
      const responseSnapshot = await getDocs(responseQuery);

      if (!responseSnapshot.empty) {
        prayingFor.push({
          id: requestDoc.id,
          ...requestDoc.data(),
          createdAt: requestDoc.data().createdAt?.toDate() || new Date(),
          updatedAt: requestDoc.data().updatedAt?.toDate() || new Date()
        } as PrayerRequest);
      }
    }

    return prayingFor.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  } catch (error) {
    console.error('Error getting prayers user is praying for:', error);
    return [];
  }
}

/**
 * Add prayer response ("I'm praying")
 */
export async function addPrayerResponse(
  requestId: string,
  userId: string,
  username: string
): Promise<void> {
  try {
    // Check if already praying
    const responsesRef = collection(db, 'prayerRequests', requestId, 'responses');
    const existingQuery = query(responsesRef, where('userId', '==', userId));
    const existing = await getDocs(existingQuery);

    if (!existing.empty) {
      throw new Error('Already praying for this request');
    }

    // Add response
    await addDoc(responsesRef, {
      requestId,
      userId,
      username,
      createdAt: serverTimestamp()
    });

    // Update prayer count
    const requestRef = doc(db, 'prayerRequests', requestId);
    const requestDoc = await getDoc(requestRef);
    const currentCount = requestDoc.data()?.prayerCount || 0;

    await updateDoc(requestRef, {
      prayerCount: currentCount + 1,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error adding prayer response:', error);
    throw error;
  }
}

/**
 * Remove prayer response (stop praying)
 */
export async function removePrayerResponse(requestId: string, userId: string): Promise<void> {
  try {
    const responsesRef = collection(db, 'prayerRequests', requestId, 'responses');
    const responseQuery = query(responsesRef, where('userId', '==', userId));
    const responseSnapshot = await getDocs(responseQuery);

    if (responseSnapshot.empty) {
      throw new Error('Not praying for this request');
    }

    // Delete response
    await deleteDoc(responseSnapshot.docs[0].ref);

    // Update prayer count
    const requestRef = doc(db, 'prayerRequests', requestId);
    const requestDoc = await getDoc(requestRef);
    const currentCount = requestDoc.data()?.prayerCount || 0;

    await updateDoc(requestRef, {
      prayerCount: Math.max(0, currentCount - 1),
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error removing prayer response:', error);
    throw error;
  }
}

/**
 * Mark prayer as answered
 */
export async function markPrayerAsAnswered(requestId: string, userId: string): Promise<void> {
  try {
    const requestRef = doc(db, 'prayerRequests', requestId);
    const requestDoc = await getDoc(requestRef);

    if (!requestDoc.exists()) {
      throw new Error('Prayer request not found');
    }

    if (requestDoc.data().userId !== userId) {
      throw new Error('Only the creator can mark prayer as answered');
    }

    await updateDoc(requestRef, {
      isAnswered: true,
      isActive: false,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error marking prayer as answered:', error);
    throw error;
  }
}

/**
 * Delete prayer request
 */
export async function deletePrayerRequest(requestId: string, userId: string): Promise<void> {
  try {
    const requestRef = doc(db, 'prayerRequests', requestId);
    const requestDoc = await getDoc(requestRef);

    if (!requestDoc.exists()) {
      throw new Error('Prayer request not found');
    }

    if (requestDoc.data().userId !== userId) {
      throw new Error('Only the creator can delete prayer');
    }

    // Delete all responses
    const responsesRef = collection(db, 'prayerRequests', requestId, 'responses');
    const responsesSnapshot = await getDocs(responsesRef);
    for (const responseDoc of responsesSnapshot.docs) {
      await deleteDoc(responseDoc.ref);
    }

    // Delete prayer request
    await deleteDoc(requestRef);
  } catch (error) {
    console.error('Error deleting prayer request:', error);
    throw error;
  }
}

/**
 * Get prayer responses
 */
export async function getPrayerResponses(requestId: string): Promise<PrayerResponse[]> {
  try {
    const responsesRef = collection(db, 'prayerRequests', requestId, 'responses');
    const q = query(responsesRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    })) as PrayerResponse[];
  } catch (error) {
    console.error('Error getting prayer responses:', error);
    return [];
  }
}

/**
 * Check if user is praying for request
 */
export async function isUserPraying(requestId: string, userId: string): Promise<boolean> {
  try {
    const responsesRef = collection(db, 'prayerRequests', requestId, 'responses');
    const responseQuery = query(responsesRef, where('userId', '==', userId));
    const responseSnapshot = await getDocs(responseQuery);

    return !responseSnapshot.empty;
  } catch (error) {
    console.error('Error checking if user is praying:', error);
    return false;
  }
}
