import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation, type RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../types';
import { Feather as Icon } from '@expo/vector-icons';
import {
  getTopic,
  getTopicReplies,
  addReply,
  deleteTopic,
  deleteReply,
  type ForumTopic,
  type ForumReply
} from '../../services/forumsService';
import { useStore } from '../../store/useStore';

type ForumTopicRouteProp = RouteProp<RootStackParamList, 'ForumTopic'>;

export default function ForumTopicScreen() {
  const route = useRoute<ForumTopicRouteProp>();
  const navigation = useNavigation();
  const currentUser = useStore(state => state.user);

  const { topicId } = route.params;
  const [topic, setTopic] = useState<ForumTopic | null>(null);
  const [replies, setReplies] = useState<ForumReply[]>([]);
  const [newReply, setNewReply] = useState('');
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    loadTopic();
  }, [topicId]);

  const loadTopic = async () => {
    try {
      // Load topic
      const topicData = await getTopic(topicId);
      setTopic(topicData);

      // Load replies
      const topicReplies = await getTopicReplies(topicId);
      setReplies(topicReplies);
    } catch (error) {
      console.error('Error loading topic:', error);
    }
  };

  const handlePostReply = async () => {
    if (!currentUser || newReply.trim().length === 0) return;

    setPosting(true);
    try {
      await addReply(
        topicId,
        currentUser.uid,
        currentUser.username || currentUser.displayName || 'User',
        newReply.trim()
      );

      setNewReply('');
      await loadTopic();
    } catch (error) {
      console.error('Error posting reply:', error);
      Alert.alert('Error', 'Failed to post reply');
    } finally {
      setPosting(false);
    }
  };

  const handleDeleteTopic = () => {
    if (!currentUser || !topic) return;

    Alert.alert(
      'Delete Topic',
      'Are you sure you want to delete this topic? This will also delete all replies.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteTopic(topicId, currentUser.uid);
              Alert.alert('Deleted', 'Topic has been deleted');
              navigation.goBack();
            } catch (error: any) {
              console.error('Error deleting topic:', error);
              Alert.alert('Error', error.message || 'Failed to delete topic');
            }
          }
        }
      ]
    );
  };

  const handleDeleteReply = (reply: ForumReply) => {
    if (!currentUser) return;

    Alert.alert(
      'Delete Reply',
      'Are you sure you want to delete this reply?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteReply(topicId, reply.id, currentUser.uid);
              Alert.alert('Deleted', 'Reply has been deleted');
              await loadTopic();
            } catch (error: any) {
              console.error('Error deleting reply:', error);
              Alert.alert('Error', error.message || 'Failed to delete reply');
            }
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
      >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Discussion</Text>
        {topic && topic.userId === currentUser?.uid && (
          <TouchableOpacity onPress={handleDeleteTopic}>
            <Icon name="trash-2" size={20} color="#EF4444" />
          </TouchableOpacity>
        )}
        {(!topic || topic.userId !== currentUser?.uid) && (
          <View style={{ width: 24 }} />
        )}
      </View>

      <ScrollView style={styles.content}>
        {topic && (
          <View style={styles.topicCard}>
            <View style={styles.topicHeader}>
              <View style={styles.replyAvatar}>
                <Icon name="user" size={16} color="#FFF" />
              </View>
              <View style={styles.replyInfo}>
                <Text style={styles.replyUsername}>{topic.username}</Text>
                <Text style={styles.replyTime}>
                  {topic.createdAt.toLocaleDateString()}
                </Text>
              </View>
            </View>
            <Text style={styles.topicTitle}>{topic.title}</Text>
            <Text style={styles.replyContent}>{topic.content}</Text>
            <View style={styles.topicStats}>
              <View style={styles.statItem}>
                <Icon name="message-circle" size={14} color="#6B7280" />
                <Text style={styles.statText}>{topic.replyCount} replies</Text>
              </View>
              <View style={styles.statItem}>
                <Icon name="eye" size={14} color="#6B7280" />
                <Text style={styles.statText}>{topic.viewCount} views</Text>
              </View>
            </View>
          </View>
        )}

        {replies.map((reply) => (
          <View key={reply.id} style={styles.replyCard}>
            <View style={styles.replyHeader}>
              <View style={styles.replyAvatar}>
                <Icon name="user" size={16} color="#FFF" />
              </View>
              <View style={styles.replyInfo}>
                <Text style={styles.replyUsername}>{reply.username}</Text>
                <Text style={styles.replyTime}>
                  {reply.createdAt.toLocaleDateString()}
                </Text>
              </View>
              {reply.userId === currentUser?.uid && (
                <TouchableOpacity
                  onPress={() => handleDeleteReply(reply)}
                  style={styles.deleteButton}
                >
                  <Icon name="trash-2" size={16} color="#EF4444" />
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.replyContent}>{reply.content}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a reply..."
          value={newReply}
          onChangeText={setNewReply}
          multiline
          maxLength={1000}
        />
        <TouchableOpacity
          style={[styles.sendButton, (newReply.trim().length === 0 || posting) && styles.sendButtonDisabled]}
          onPress={handlePostReply}
          disabled={newReply.trim().length === 0 || posting}
        >
          <Icon name="send" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8E3FF' },
  keyboardView: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB'
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  content: { flex: 1, padding: 16 },
  replyCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1
  },
  topicCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#EF4444',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  topicHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  topicTitle: { fontSize: 18, fontWeight: 'bold', color: '#111827', marginBottom: 8 },
  topicStats: { flexDirection: 'row', gap: 16, marginTop: 12 },
  statItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  statText: { fontSize: 12, color: '#6B7280' },
  replyHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  replyAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  replyInfo: { flex: 1 },
  replyUsername: { fontSize: 14, fontWeight: '600', color: '#111827', marginBottom: 2 },
  replyTime: { fontSize: 12, color: '#9CA3AF' },
  replyContent: { fontSize: 15, color: '#374151', lineHeight: 22 },
  deleteButton: {
    backgroundColor: '#FEE2E2',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    alignItems: 'flex-end',
    gap: 8
  },
  input: {
    flex: 1,
    backgroundColor: '#E8E3FF', // Light lilac
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendButtonDisabled: { backgroundColor: '#D1D5DB' }
});
