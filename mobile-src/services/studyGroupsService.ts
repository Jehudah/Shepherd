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
  serverTimestamp,
  Timestamp,
  onSnapshot
} from 'firebase/firestore';
import { db } from './firebase';

export interface StudyGroup {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  ownerName: string;
  memberCount: number;
  isPublic: boolean;
  category: string;
  createdAt: Date;
  lastActivityAt: Date;
}

export interface GroupMember {
  userId: string;
  username: string;
  displayName: string;
  joinedAt: Date;
  role: 'owner' | 'admin' | 'member';
}

export interface GroupMessage {
  id: string;
  groupId: string;
  userId: string;
  username: string;
  message: string;
  createdAt: Date;
}

/**
 * Create a new study group
 */
export async function createStudyGroup(
  ownerId: string,
  ownerName: string,
  name: string,
  description: string,
  category: string,
  isPublic: boolean = true
): Promise<string> {
  try {
    const groupsRef = collection(db, 'studyGroups');
    const groupDoc = await addDoc(groupsRef, {
      name,
      description,
      ownerId,
      ownerName,
      memberCount: 1,
      isPublic,
      category,
      createdAt: serverTimestamp(),
      lastActivityAt: serverTimestamp()
    });

    // Add owner as first member
    const membersRef = collection(db, 'studyGroups', groupDoc.id, 'members');
    await addDoc(membersRef, {
      userId: ownerId,
      username: ownerName,
      displayName: ownerName,
      joinedAt: serverTimestamp(),
      role: 'owner'
    });

    return groupDoc.id;
  } catch (error) {
    console.error('Error creating study group:', error);
    throw error;
  }
}

/**
 * Get all public study groups
 */
export async function getPublicStudyGroups(): Promise<StudyGroup[]> {
  try {
    const groupsRef = collection(db, 'studyGroups');
    const q = query(
      groupsRef,
      where('isPublic', '==', true),
      orderBy('lastActivityAt', 'desc'),
      limit(50)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      lastActivityAt: doc.data().lastActivityAt?.toDate() || new Date()
    })) as StudyGroup[];
  } catch (error) {
    console.error('Error getting public study groups:', error);
    return [];
  }
}

/**
 * Get user's study groups
 */
export async function getUserStudyGroups(userId: string): Promise<StudyGroup[]> {
  try {
    const groupsRef = collection(db, 'studyGroups');
    const snapshot = await getDocs(groupsRef);

    const userGroups: StudyGroup[] = [];

    // Check each group to see if user is a member
    for (const groupDoc of snapshot.docs) {
      const membersRef = collection(db, 'studyGroups', groupDoc.id, 'members');
      const memberQuery = query(membersRef, where('userId', '==', userId));
      const memberSnapshot = await getDocs(memberQuery);

      if (!memberSnapshot.empty) {
        userGroups.push({
          id: groupDoc.id,
          ...groupDoc.data(),
          createdAt: groupDoc.data().createdAt?.toDate() || new Date(),
          lastActivityAt: groupDoc.data().lastActivityAt?.toDate() || new Date()
        } as StudyGroup);
      }
    }

    return userGroups.sort((a, b) => b.lastActivityAt.getTime() - a.lastActivityAt.getTime());
  } catch (error) {
    console.error('Error getting user study groups:', error);
    return [];
  }
}

/**
 * Get study group details
 */
export async function getStudyGroup(groupId: string): Promise<StudyGroup | null> {
  try {
    const groupDoc = await getDoc(doc(db, 'studyGroups', groupId));
    if (!groupDoc.exists()) return null;

    return {
      id: groupDoc.id,
      ...groupDoc.data(),
      createdAt: groupDoc.data().createdAt?.toDate() || new Date(),
      lastActivityAt: groupDoc.data().lastActivityAt?.toDate() || new Date()
    } as StudyGroup;
  } catch (error) {
    console.error('Error getting study group:', error);
    return null;
  }
}

/**
 * Join a study group
 */
export async function joinStudyGroup(
  groupId: string,
  userId: string,
  username: string,
  displayName: string
): Promise<void> {
  try {
    // Check if already a member
    const membersRef = collection(db, 'studyGroups', groupId, 'members');
    const memberQuery = query(membersRef, where('userId', '==', userId));
    const existingMember = await getDocs(memberQuery);

    if (!existingMember.empty) {
      throw new Error('Already a member of this group');
    }

    // Add member
    await addDoc(membersRef, {
      userId,
      username,
      displayName,
      joinedAt: serverTimestamp(),
      role: 'member'
    });

    // Update member count
    const groupRef = doc(db, 'studyGroups', groupId);
    const groupDoc = await getDoc(groupRef);
    const currentCount = groupDoc.data()?.memberCount || 0;

    await updateDoc(groupRef, {
      memberCount: currentCount + 1,
      lastActivityAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error joining study group:', error);
    throw error;
  }
}

/**
 * Leave a study group
 */
export async function leaveStudyGroup(groupId: string, userId: string): Promise<void> {
  try {
    // Find member document
    const membersRef = collection(db, 'studyGroups', groupId, 'members');
    const memberQuery = query(membersRef, where('userId', '==', userId));
    const memberSnapshot = await getDocs(memberQuery);

    if (memberSnapshot.empty) {
      throw new Error('Not a member of this group');
    }

    const memberDoc = memberSnapshot.docs[0];

    // Don't allow owner to leave
    if (memberDoc.data().role === 'owner') {
      throw new Error('Group owner cannot leave. Please delete the group instead.');
    }

    // Delete member
    await deleteDoc(memberDoc.ref);

    // Update member count
    const groupRef = doc(db, 'studyGroups', groupId);
    const groupDoc = await getDoc(groupRef);
    const currentCount = groupDoc.data()?.memberCount || 1;

    await updateDoc(groupRef, {
      memberCount: Math.max(0, currentCount - 1),
      lastActivityAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error leaving study group:', error);
    throw error;
  }
}

/**
 * Delete a study group (owner only)
 */
export async function deleteStudyGroup(groupId: string, userId: string): Promise<void> {
  try {
    // Check if user is owner
    const groupDoc = await getDoc(doc(db, 'studyGroups', groupId));
    if (!groupDoc.exists()) {
      throw new Error('Group not found');
    }

    if (groupDoc.data().ownerId !== userId) {
      throw new Error('Only the group owner can delete the group');
    }

    // Delete all members
    const membersRef = collection(db, 'studyGroups', groupId, 'members');
    const membersSnapshot = await getDocs(membersRef);
    for (const memberDoc of membersSnapshot.docs) {
      await deleteDoc(memberDoc.ref);
    }

    // Delete all messages
    const messagesRef = collection(db, 'studyGroups', groupId, 'messages');
    const messagesSnapshot = await getDocs(messagesRef);
    for (const messageDoc of messagesSnapshot.docs) {
      await deleteDoc(messageDoc.ref);
    }

    // Delete group
    await deleteDoc(doc(db, 'studyGroups', groupId));
  } catch (error) {
    console.error('Error deleting study group:', error);
    throw error;
  }
}

/**
 * Get group members
 */
export async function getGroupMembers(groupId: string): Promise<GroupMember[]> {
  try {
    const membersRef = collection(db, 'studyGroups', groupId, 'members');
    const q = query(membersRef, orderBy('joinedAt', 'asc'));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      ...doc.data(),
      joinedAt: doc.data().joinedAt?.toDate() || new Date()
    })) as GroupMember[];
  } catch (error) {
    console.error('Error getting group members:', error);
    return [];
  }
}

/**
 * Send a message to group
 */
export async function sendGroupMessage(
  groupId: string,
  userId: string,
  username: string,
  message: string
): Promise<void> {
  try {
    const messagesRef = collection(db, 'studyGroups', groupId, 'messages');
    await addDoc(messagesRef, {
      groupId,
      userId,
      username,
      message,
      createdAt: serverTimestamp()
    });

    // Update last activity
    await updateDoc(doc(db, 'studyGroups', groupId), {
      lastActivityAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error sending group message:', error);
    throw error;
  }
}

/**
 * Get group messages
 */
export async function getGroupMessages(groupId: string, limitCount: number = 50): Promise<GroupMessage[]> {
  try {
    const messagesRef = collection(db, 'studyGroups', groupId, 'messages');
    const q = query(messagesRef, orderBy('createdAt', 'desc'), limit(limitCount));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    })) as GroupMessage[];
  } catch (error) {
    console.error('Error getting group messages:', error);
    return [];
  }
}

/**
 * Listen to group messages in real-time
 */
export function subscribeToGroupMessages(
  groupId: string,
  callback: (messages: GroupMessage[]) => void
): () => void {
  const messagesRef = collection(db, 'studyGroups', groupId, 'messages');
  const q = query(messagesRef, orderBy('createdAt', 'asc'), limit(100));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    })) as GroupMessage[];

    callback(messages);
  });

  return unsubscribe;
}

/**
 * Check if user is member of group
 */
export async function isGroupMember(groupId: string, userId: string): Promise<boolean> {
  try {
    const membersRef = collection(db, 'studyGroups', groupId, 'members');
    const memberQuery = query(membersRef, where('userId', '==', userId));
    const memberSnapshot = await getDocs(memberQuery);

    return !memberSnapshot.empty;
  } catch (error) {
    console.error('Error checking group membership:', error);
    return false;
  }
}
