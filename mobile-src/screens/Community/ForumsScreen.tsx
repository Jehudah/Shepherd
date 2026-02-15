import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Modal,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '../../types';
import { Feather as Icon } from '@expo/vector-icons';
import {
  getForumCategories,
  getTopicsByCategory,
  createTopic,
  type ForumTopic
} from '../../services/forumsService';
import { useStore } from '../../store/useStore';
import Wooly from '../../components/Wooly';

export default function ForumsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const currentUser = useStore(state => state.user);

  const categories = getForumCategories();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [topics, setTopics] = useState<ForumTopic[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadTopics();
  }, [selectedCategory]);

  const loadTopics = async () => {
    try {
      const categoryTopics = await getTopicsByCategory(selectedCategory);
      setTopics(categoryTopics);
    } catch (error) {
      console.error('Error loading topics:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadTopics();
    setRefreshing(false);
  };

  const handleCreateTopic = async () => {
    if (!currentUser) return;

    if (newTitle.trim().length < 5) {
      Alert.alert('Error', 'Title must be at least 5 characters');
      return;
    }

    setCreating(true);
    try {
      const topicId = await createTopic(
        currentUser.uid,
        currentUser.username || currentUser.displayName || 'User',
        selectedCategory,
        newTitle.trim(),
        newContent.trim()
      );

      Alert.alert('Success', 'Topic created!');
      setShowCreateModal(false);
      setNewTitle('');
      setNewContent('');

      navigation.navigate('ForumTopic', { topicId });
      await loadTopics();
    } catch (error) {
      console.error('Error creating topic:', error);
      Alert.alert('Error', 'Failed to create topic');
    } finally {
      setCreating(false);
    }
  };

  const getCategoryInfo = (catId: string) => {
    return categories.find(c => c.id === catId) || categories[0];
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={styles.header}>
          <Text style={styles.title}>Discussion Forums</Text>
          <Text style={styles.subtitle}>Share insights and ask questions</Text>
        </View>

        <Wooly
          message="Great questions lead to great discussions! Share your thoughts and learn from others!"
          mood="thinking"
          size="small"
        />

        <TouchableOpacity
          style={styles.createButton}
          onPress={() => setShowCreateModal(true)}
        >
          <Icon name="plus-circle" size={20} color="#FFF" />
          <Text style={styles.createButtonText}>New Discussion</Text>
        </TouchableOpacity>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          {categories.map(cat => (
            <TouchableOpacity
              key={cat.id}
              style={[
                styles.categoryChip,
                selectedCategory === cat.id && { backgroundColor: cat.color }
              ]}
              onPress={() => setSelectedCategory(cat.id)}
            >
              <Icon
                name={cat.icon as any}
                size={16}
                color={selectedCategory === cat.id ? '#FFF' : cat.color}
              />
              <Text
                style={[
                  styles.categoryChipText,
                  selectedCategory === cat.id && { color: '#FFF' }
                ]}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Topics */}
        <View style={styles.content}>
          {topics.length > 0 ? (
            topics.map(topic => (
              <TouchableOpacity
                key={topic.id}
                style={styles.topicCard}
                onPress={() => navigation.navigate('ForumTopic', { topicId: topic.id })}
              >
                <Text style={styles.topicTitle}>{topic.title}</Text>
                <Text style={styles.topicContent} numberOfLines={2}>
                  {topic.content}
                </Text>
                <View style={styles.topicFooter}>
                  <Text style={styles.topicMeta}>by {topic.username}</Text>
                  <View style={styles.topicStats}>
                    <Icon name="message-circle" size={14} color="#6B7280" />
                    <Text style={styles.topicStatText}>{topic.replyCount}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.emptyState}>
              <Icon name="message-circle" size={48} color="#D1D5DB" />
              <Text style={styles.emptyTitle}>No discussions yet</Text>
              <Text style={styles.emptyText}>Be the first to start a discussion!</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Create Modal */}
      <Modal
        visible={showCreateModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowCreateModal(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>New Discussion</Text>
              <TouchableOpacity onPress={() => setShowCreateModal(false)}>
                <Icon name="x" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalBody}>
              <Text style={styles.label}>Title *</Text>
              <TextInput
                style={styles.input}
                placeholder="What's your question or topic?"
                value={newTitle}
                onChangeText={setNewTitle}
                maxLength={100}
              />

              <Text style={styles.label}>Content *</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Share your thoughts or question..."
                value={newContent}
                onChangeText={setNewContent}
                multiline
                numberOfLines={6}
                maxLength={1000}
              />

              <TouchableOpacity
                style={[styles.modalButton, creating && styles.modalButtonDisabled]}
                onPress={handleCreateTopic}
                disabled={creating}
              >
                <Text style={styles.modalButtonText}>
                  {creating ? 'Creating...' : 'Create Topic'}
                </Text>
              </TouchableOpacity>
            </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: { padding: 20, paddingTop: 10 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#111827', marginBottom: 4 },
  subtitle: { fontSize: 16, color: '#6B7280' },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EF4444',
    marginHorizontal: 20,
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8
  },
  createButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  categories: { paddingHorizontal: 20, marginTop: 20, marginBottom: 10 },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 8,
    gap: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  categoryChipText: { fontSize: 14, fontWeight: '600', color: '#6B7280' },
  content: { padding: 16, paddingTop: 10 },
  topicCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2
  },
  topicTitle: { fontSize: 16, fontWeight: 'bold', color: '#111827', marginBottom: 8 },
  topicContent: { fontSize: 14, color: '#6B7280', lineHeight: 20, marginBottom: 12 },
  topicFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  topicMeta: { fontSize: 12, color: '#9CA3AF' },
  topicStats: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  topicStatText: { fontSize: 12, color: '#6B7280', fontWeight: '500' },
  emptyState: { alignItems: 'center', paddingVertical: 60 },
  emptyTitle: { fontSize: 20, fontWeight: 'bold', color: '#111827', marginTop: 16, marginBottom: 8 },
  emptyText: { fontSize: 14, color: '#6B7280' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#FFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, maxHeight: '90%' },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB'
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#111827' },
  modalBody: { padding: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 8, marginTop: 12 },
  input: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  textArea: { height: 150, textAlignVertical: 'top' },
  modalButton: {
    backgroundColor: '#EF4444',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40
  },
  modalButtonDisabled: { backgroundColor: '#9CA3AF' },
  modalButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});
