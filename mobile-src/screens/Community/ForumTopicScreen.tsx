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
  SafeAreaView,
} from 'react-native';
import { useRoute, useNavigation, type RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../types';
import { Feather as Icon } from '@expo/vector-icons';
import {
  getTopicsByCategory,
  getTopicReplies,
  addReply,
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
      // Load replies
      const topicReplies = await getTopicReplies(topicId);
      setReplies(topicReplies);

      // Note: We would need to add getTopic function or load from category
      // For now, we'll just show replies
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
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
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
  container: { flex: 1, backgroundColor: '#F9FAFB' },
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
    backgroundColor: '#F9FAFB',
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
