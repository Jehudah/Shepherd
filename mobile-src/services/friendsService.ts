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
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

export interface FriendRequest {
  id: string;
  fromUserId: string;
  fromUsername: string;
  toUserId: string;
  toUsername: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}

export interface Friend {
  id: string;
  user1Id: string;
  user2Id: string;
  createdAt: Date;
}

export interface FriendProfile {
  uid: string;
  username: string;
  displayName: string;
  photoURL?: string;
  level: number;
  totalXP: number;
  completedLessons: number;
  currentStreak: number;
}

/**
 * Search for users by username
 */
export async function searchUsers(searchQuery: string, currentUserId: string): Promise<FriendProfile[]> {
  try {
    const usersRef = collection(db, 'users');
    const usersSnapshot = await getDocs(usersRef);

    const users: FriendProfile[] = [];

    usersSnapshot.forEach((doc) => {
      const data = doc.data();
      const username = data.username?.toLowerCase() || '';
      const displayName = data.displayName?.toLowerCase() || '';
      const search = searchQuery.toLowerCase();

      // Exclude current user and search by username or display name
      if (doc.id !== currentUserId && (username.includes(search) || displayName.includes(search))) {
        users.push({
          uid: doc.id,
          username: data.username || '',
          displayName: data.displayName || data.username || 'User',
          photoURL: data.photoURL,
          level: 0, // Will be loaded separately if needed
          totalXP: 0,
          completedLessons: 0,
          currentStreak: 0
        });
      }
    });

    return users;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
}

/**
 * Get user's full profile including progress
 */
export async function getUserProfile(userId: string): Promise<FriendProfile | null> {
  try {
    // Get user info
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) return null;

    const userData = userDoc.data();

    // Get user progress
    const progressDoc = await getDoc(doc(db, 'userProgress', userId));
    const progressData = progressDoc.exists() ? progressDoc.data() : {};

    return {
      uid: userId,
      username: userData.username || '',
      displayName: userData.displayName || userData.username || 'User',
      photoURL: userData.photoURL,
      level: progressData.level || 1,
      totalXP: progressData.totalXP || 0,
      completedLessons: progressData.completedLessons?.length || 0,
      currentStreak: progressData.currentStreak || 0
    };
  } catch (error) {
    console.error('Error getting user profile:', error);
    return null;
  }
}

/**
 * Send a friend request
 */
export async function sendFriendRequest(
  fromUserId: string,
  fromUsername: string,
  toUserId: string,
  toUsername: string
): Promise<void> {
  try {
    // Check if request already exists
    const requestsRef = collection(db, 'friendRequests');
    const existingQuery = query(
      requestsRef,
      where('fromUserId', '==', fromUserId),
      where('toUserId', '==', toUserId),
      where('status', '==', 'pending')
    );
    const existing = await getDocs(existingQuery);

    if (!existing.empty) {
      throw new Error('Friend request already sent');
    }

    // Check if they're already friends
    const friends = await getFriends(fromUserId);
    if (friends.some(f => f.uid === toUserId)) {
      throw new Error('Already friends with this user');
    }

    // Create friend request
    await addDoc(requestsRef, {
      fromUserId,
      fromUsername,
      toUserId,
      toUsername,
      status: 'pending',
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error sending friend request:', error);
    throw error;
  }
}

/**
 * Get pending friend requests (received)
 */
export async function getPendingRequests(userId: string): Promise<FriendRequest[]> {
  try {
    const requestsRef = collection(db, 'friendRequests');
    const q = query(
      requestsRef,
      where('toUserId', '==', userId),
      where('status', '==', 'pending'),
      orderBy('createdAt', 'desc')
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    })) as FriendRequest[];
  } catch (error) {
    console.error('Error getting pending requests:', error);
    return [];
  }
}

/**
 * Get sent friend requests
 */
export async function getSentRequests(userId: string): Promise<FriendRequest[]> {
  try {
    const requestsRef = collection(db, 'friendRequests');
    const q = query(
      requestsRef,
      where('fromUserId', '==', userId),
      where('status', '==', 'pending'),
      orderBy('createdAt', 'desc')
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    })) as FriendRequest[];
  } catch (error) {
    console.error('Error getting sent requests:', error);
    return [];
  }
}

/**
 * Accept a friend request
 */
export async function acceptFriendRequest(requestId: string, request: FriendRequest): Promise<void> {
  try {
    // Update request status
    await updateDoc(doc(db, 'friendRequests', requestId), {
      status: 'accepted'
    });

    // Create friendship
    const friendsRef = collection(db, 'friends');
    await addDoc(friendsRef, {
      user1Id: request.fromUserId,
      user2Id: request.toUserId,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error accepting friend request:', error);
    throw error;
  }
}

/**
 * Reject a friend request
 */
export async function rejectFriendRequest(requestId: string): Promise<void> {
  try {
    await updateDoc(doc(db, 'friendRequests', requestId), {
      status: 'rejected'
    });
  } catch (error) {
    console.error('Error rejecting friend request:', error);
    throw error;
  }
}

/**
 * Cancel a sent friend request
 */
export async function cancelFriendRequest(requestId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, 'friendRequests', requestId));
  } catch (error) {
    console.error('Error canceling friend request:', error);
    throw error;
  }
}

/**
 * Get list of friends
 */
export async function getFriends(userId: string): Promise<FriendProfile[]> {
  try {
    const friendsRef = collection(db, 'friends');

    // Query where user is either user1 or user2
    const q1 = query(friendsRef, where('user1Id', '==', userId));
    const q2 = query(friendsRef, where('user2Id', '==', userId));

    const [snapshot1, snapshot2] = await Promise.all([
      getDocs(q1),
      getDocs(q2)
    ]);

    // Collect friend user IDs
    const friendIds: string[] = [];
    snapshot1.forEach(doc => friendIds.push(doc.data().user2Id));
    snapshot2.forEach(doc => friendIds.push(doc.data().user1Id));

    // Get profiles for all friends
    const profiles = await Promise.all(
      friendIds.map(id => getUserProfile(id))
    );

    return profiles.filter((p): p is FriendProfile => p !== null);
  } catch (error) {
    console.error('Error getting friends:', error);
    return [];
  }
}

/**
 * Remove a friend
 */
export async function removeFriend(currentUserId: string, friendUserId: string): Promise<void> {
  try {
    const friendsRef = collection(db, 'friends');

    // Find the friendship document
    const q1 = query(
      friendsRef,
      where('user1Id', '==', currentUserId),
      where('user2Id', '==', friendUserId)
    );
    const q2 = query(
      friendsRef,
      where('user1Id', '==', friendUserId),
      where('user2Id', '==', currentUserId)
    );

    const [snapshot1, snapshot2] = await Promise.all([
      getDocs(q1),
      getDocs(q2)
    ]);

    // Delete the friendship
    const friendshipDoc = snapshot1.docs[0] || snapshot2.docs[0];
    if (friendshipDoc) {
      await deleteDoc(friendshipDoc.ref);
    }
  } catch (error) {
    console.error('Error removing friend:', error);
    throw error;
  }
}

/**
 * Get friends leaderboard (sorted by XP)
 */
export async function getFriendsLeaderboard(userId: string): Promise<FriendProfile[]> {
  try {
    const friends = await getFriends(userId);

    // Sort by totalXP descending
    return friends.sort((a, b) => b.totalXP - a.totalXP);
  } catch (error) {
    console.error('Error getting friends leaderboard:', error);
    return [];
  }
}

/**
 * Check if users are friends
 */
export async function areFriends(userId1: string, userId2: string): Promise<boolean> {
  try {
    const friendsRef = collection(db, 'friends');

    const q1 = query(
      friendsRef,
      where('user1Id', '==', userId1),
      where('user2Id', '==', userId2)
    );
    const q2 = query(
      friendsRef,
      where('user1Id', '==', userId2),
      where('user2Id', '==', userId1)
    );

    const [snapshot1, snapshot2] = await Promise.all([
      getDocs(q1),
      getDocs(q2)
    ]);

    return !snapshot1.empty || !snapshot2.empty;
  } catch (error) {
    console.error('Error checking friendship:', error);
    return false;
  }
}

/**
 * Check if there's a pending request
 */
export async function hasPendingRequest(fromUserId: string, toUserId: string): Promise<boolean> {
  try {
    const requestsRef = collection(db, 'friendRequests');
    const q = query(
      requestsRef,
      where('fromUserId', '==', fromUserId),
      where('toUserId', '==', toUserId),
      where('status', '==', 'pending')
    );

    const snapshot = await getDocs(q);
    return !snapshot.empty;
  } catch (error) {
    console.error('Error checking pending request:', error);
    return false;
  }
}
