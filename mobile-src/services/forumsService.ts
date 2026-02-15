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

export interface ForumTopic {
  id: string;
  userId: string;
  username: string;
  categoryId: string;
  title: string;
  content: string;
  replyCount: number;
  viewCount: number;
  lastActivityAt: Date;
  createdAt: Date;
}

export interface ForumReply {
  id: string;
  topicId: string;
  userId: string;
  username: string;
  content: string;
  createdAt: Date;
}

const CATEGORIES = [
  { id: 'study-questions', name: 'Study Questions', icon: 'book-open', color: '#3B82F6' },
  { id: 'testimonies', name: 'Testimonies', icon: 'heart', color: '#10B981' },
  { id: 'general', name: 'General Discussion', icon: 'message-circle', color: '#6B7280' }
];

export function getForumCategories() {
  return CATEGORIES;
}

export async function getTopicsByCategory(categoryId: string): Promise<ForumTopic[]> {
  try {
    const topicsRef = collection(db, 'forumTopics');
    const q = query(
      topicsRef,
      where('categoryId', '==', categoryId),
      orderBy('lastActivityAt', 'desc'),
      limit(50)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      lastActivityAt: doc.data().lastActivityAt?.toDate() || new Date(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    })) as ForumTopic[];
  } catch (error) {
    console.error('Error getting topics:', error);
    return [];
  }
}

export async function createTopic(
  userId: string,
  username: string,
  categoryId: string,
  title: string,
  content: string
): Promise<string> {
  try {
    const topicsRef = collection(db, 'forumTopics');
    const topicDoc = await addDoc(topicsRef, {
      userId,
      username,
      categoryId,
      title,
      content,
      replyCount: 0,
      viewCount: 0,
      lastActivityAt: serverTimestamp(),
      createdAt: serverTimestamp()
    });

    return topicDoc.id;
  } catch (error) {
    console.error('Error creating topic:', error);
    throw error;
  }
}

export async function addReply(
  topicId: string,
  userId: string,
  username: string,
  content: string
): Promise<void> {
  try {
    const repliesRef = collection(db, 'forumTopics', topicId, 'replies');
    await addDoc(repliesRef, {
      topicId,
      userId,
      username,
      content,
      createdAt: serverTimestamp()
    });

    // Update topic
    const topicRef = doc(db, 'forumTopics', topicId);
    const topicDoc = await getDoc(topicRef);
    const currentCount = topicDoc.data()?.replyCount || 0;

    await updateDoc(topicRef, {
      replyCount: currentCount + 1,
      lastActivityAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error adding reply:', error);
    throw error;
  }
}

export async function getTopicReplies(topicId: string): Promise<ForumReply[]> {
  try {
    const repliesRef = collection(db, 'forumTopics', topicId, 'replies');
    const q = query(repliesRef, orderBy('createdAt', 'asc'));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    })) as ForumReply[];
  } catch (error) {
    console.error('Error getting replies:', error);
    return [];
  }
}

export async function getTopic(topicId: string): Promise<ForumTopic | null> {
  try {
    const topicDoc = await getDoc(doc(db, 'forumTopics', topicId));
    if (!topicDoc.exists()) return null;

    return {
      id: topicDoc.id,
      ...topicDoc.data(),
      lastActivityAt: topicDoc.data().lastActivityAt?.toDate() || new Date(),
      createdAt: topicDoc.data().createdAt?.toDate() || new Date()
    } as ForumTopic;
  } catch (error) {
    console.error('Error getting topic:', error);
    return null;
  }
}

export async function deleteTopic(topicId: string, userId: string): Promise<void> {
  try {
    const topicRef = doc(db, 'forumTopics', topicId);
    const topicDoc = await getDoc(topicRef);

    if (!topicDoc.exists()) {
      throw new Error('Topic not found');
    }

    if (topicDoc.data().userId !== userId) {
      throw new Error('Only the topic creator can delete this topic');
    }

    // Delete all replies
    const repliesRef = collection(db, 'forumTopics', topicId, 'replies');
    const repliesSnapshot = await getDocs(repliesRef);
    for (const replyDoc of repliesSnapshot.docs) {
      await deleteDoc(replyDoc.ref);
    }

    // Delete topic
    await deleteDoc(topicRef);
  } catch (error) {
    console.error('Error deleting topic:', error);
    throw error;
  }
}

export async function deleteReply(topicId: string, replyId: string, userId: string): Promise<void> {
  try {
    const replyRef = doc(db, 'forumTopics', topicId, 'replies', replyId);
    const replyDoc = await getDoc(replyRef);

    if (!replyDoc.exists()) {
      throw new Error('Reply not found');
    }

    if (replyDoc.data().userId !== userId) {
      throw new Error('Only the reply author can delete this reply');
    }

    // Delete reply
    await deleteDoc(replyRef);

    // Update topic reply count
    const topicRef = doc(db, 'forumTopics', topicId);
    const topicDoc = await getDoc(topicRef);
    const currentCount = topicDoc.data()?.replyCount || 0;

    await updateDoc(topicRef, {
      replyCount: Math.max(0, currentCount - 1),
      lastActivityAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error deleting reply:', error);
    throw error;
  }
}
