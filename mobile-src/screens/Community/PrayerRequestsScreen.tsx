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
  Alert
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import {
  getActivePrayerRequests,
  getUserPrayerRequests,
  getPrayersUserIsPrayingFor,
  createPrayerRequest,
  addPrayerResponse,
  removePrayerResponse,
  markPrayerAsAnswered,
  deletePrayerRequest,
  isUserPraying,
  type PrayerRequest
} from '../../services/prayerRequestsService';
import { useStore } from '../../store/useStore';
import Wooly from '../../components/Wooly';

export default function PrayerRequestsScreen() {
  const currentUser = useStore(state => state.user);

  const [activeTab, setActiveTab] = useState<'all' | 'my-prayers' | 'praying'>('all');
  const [allPrayers, setAllPrayers] = useState<PrayerRequest[]>([]);
  const [myPrayers, setMyPrayers] = useState<PrayerRequest[]>([]);
  const [prayingFor, setPrayingFor] = useState<PrayerRequest[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCategory, setNewCategory] = useState('Personal');
  const [creating, setCreating] = useState(false);

  const categories = ['Personal', 'Family', 'Health', 'Ministry', 'Other'];

  useEffect(() => {
    loadPrayers();
  }, []);

  const loadPrayers = async () => {
    if (!currentUser) return;

    try {
      const [active, user, praying] = await Promise.all([
        getActivePrayerRequests(),
        getUserPrayerRequests(currentUser.uid),
        getPrayersUserIsPrayingFor(currentUser.uid)
      ]);

      setAllPrayers(active);
      setMyPrayers(user);
      setPrayingFor(praying);
    } catch (error) {
      console.error('Error loading prayers:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadPrayers();
    setRefreshing(false);
  };

  const handleCreate = async () => {
    if (!currentUser) return;

    if (newTitle.trim().length < 5) {
      Alert.alert('Error', 'Title must be at least 5 characters');
      return;
    }

    setCreating(true);
    try {
      await createPrayerRequest(
        currentUser.uid,
        currentUser.username || currentUser.displayName || 'User',
        newTitle.trim(),
        newDescription.trim(),
        newCategory
      );

      Alert.alert('Success', 'Prayer request created!');
      setShowCreateModal(false);
      setNewTitle('');
      setNewDescription('');
      setNewCategory('Personal');
      await loadPrayers();
    } catch (error) {
      console.error('Error creating prayer:', error);
      Alert.alert('Error', 'Failed to create prayer request');
    } finally {
      setCreating(false);
    }
  };

  const handlePray = async (prayer: PrayerRequest) => {
    if (!currentUser) return;

    try {
      const isPraying = await isUserPraying(prayer.id, currentUser.uid);

      if (isPraying) {
        await removePrayerResponse(prayer.id, currentUser.uid);
      } else {
        await addPrayerResponse(
          prayer.id,
          currentUser.uid,
          currentUser.username || currentUser.displayName || 'User'
        );
      }

      await loadPrayers();
    } catch (error: any) {
      console.error('Error toggling prayer:', error);
      Alert.alert('Error', error.message || 'Failed to update prayer status');
    }
  };

  const handleMarkAnswered = (prayer: PrayerRequest) => {
    Alert.alert(
      'Mark as Answered',
      'Has God answered this prayer?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Yes, Answered!',
          onPress: async () => {
            if (!currentUser) return;
            try {
              await markPrayerAsAnswered(prayer.id, currentUser.uid);
              Alert.alert('Praise God!', 'Prayer marked as answered 🙏');
              await loadPrayers();
            } catch (error: any) {
              Alert.alert('Error', error.message || 'Failed to update prayer');
            }
          }
        }
      ]
    );
  };

  const renderPrayerCard = (prayer: PrayerRequest) => (
    <View key={prayer.id} style={styles.prayerCard}>
      <View style={styles.prayerHeader}>
        <View style={styles.prayerInfo}>
          <Text style={styles.prayerTitle}>{prayer.title}</Text>
          <Text style={styles.prayerMeta}>
            by {prayer.username} • {prayer.category}
          </Text>
        </View>
        {prayer.isAnswered && (
          <View style={styles.answeredBadge}>
            <Icon name="check-circle" size={16} color="#10B981" />
            <Text style={styles.answeredText}>Answered</Text>
          </View>
        )}
      </View>

      {prayer.description && (
        <Text style={styles.prayerDescription} numberOfLines={3}>
          {prayer.description}
        </Text>
      )}

      <View style={styles.prayerFooter}>
        <View style={styles.prayerStat}>
          <Icon name="heart" size={14} color="#EC4899" />
          <Text style={styles.prayerStatText}>
            {prayer.prayerCount} praying
          </Text>
        </View>

        {prayer.userId === currentUser?.uid && !prayer.isAnswered && (
          <TouchableOpacity
            style={styles.answeredButton}
            onPress={() => handleMarkAnswered(prayer)}
          >
            <Text style={styles.answeredButtonText}>Mark Answered</Text>
          </TouchableOpacity>
        )}

        {prayer.userId !== currentUser?.uid && (
          <TouchableOpacity
            style={styles.prayButton}
            onPress={() => handlePray(prayer)}
          >
            <Icon name="heart" size={16} color="#EC4899" />
            <Text style={styles.prayButtonText}>I'm Praying</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Prayer Requests</Text>
          <Text style={styles.subtitle}>Pray for one another</Text>
        </View>

        <Wooly
          message="Prayer is powerful! Share your needs and lift others up in prayer. God hears every prayer! 🙏"
          mood="encouraging"
          size="small"
        />

        <TouchableOpacity
          style={styles.createButton}
          onPress={() => setShowCreateModal(true)}
        >
          <Icon name="plus-circle" size={20} color="#FFF" />
          <Text style={styles.createButtonText}>Share Prayer Request</Text>
        </TouchableOpacity>

        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'all' && styles.tabActive]}
            onPress={() => setActiveTab('all')}
          >
            <Text style={[styles.tabText, activeTab === 'all' && styles.tabTextActive]}>
              All ({allPrayers.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'my-prayers' && styles.tabActive]}
            onPress={() => setActiveTab('my-prayers')}
          >
            <Text style={[styles.tabText, activeTab === 'my-prayers' && styles.tabTextActive]}>
              Mine ({myPrayers.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'praying' && styles.tabActive]}
            onPress={() => setActiveTab('praying')}
          >
            <Text style={[styles.tabText, activeTab === 'praying' && styles.tabTextActive]}>
              Praying ({prayingFor.length})
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {activeTab === 'all' &&
            (allPrayers.length > 0 ? (
              allPrayers.map(renderPrayerCard)
            ) : (
              <View style={styles.emptyState}>
                <Icon name="heart" size={48} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>No prayer requests</Text>
                <Text style={styles.emptyText}>Be the first to share a prayer need!</Text>
              </View>
            ))}

          {activeTab === 'my-prayers' &&
            (myPrayers.length > 0 ? (
              myPrayers.map(renderPrayerCard)
            ) : (
              <View style={styles.emptyState}>
                <Icon name="heart" size={48} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>No prayers shared</Text>
                <Text style={styles.emptyText}>Share your first prayer request</Text>
              </View>
            ))}

          {activeTab === 'praying' &&
            (prayingFor.length > 0 ? (
              prayingFor.map(renderPrayerCard)
            ) : (
              <View style={styles.emptyState}>
                <Icon name="heart" size={48} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>Not praying for anyone yet</Text>
                <Text style={styles.emptyText}>Browse prayers and commit to praying!</Text>
              </View>
            ))}
        </View>
      </ScrollView>

      {/* Create Modal - Similar to Study Groups */}
      <Modal
        visible={showCreateModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowCreateModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Share Prayer Request</Text>
              <TouchableOpacity onPress={() => setShowCreateModal(false)}>
                <Icon name="x" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalBody}>
              <Text style={styles.label}>Title *</Text>
              <TextInput
                style={styles.input}
                placeholder="What would you like prayer for?"
                value={newTitle}
                onChangeText={setNewTitle}
                maxLength={100}
              />

              <Text style={styles.label}>Details (optional)</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Share more details if comfortable..."
                value={newDescription}
                onChangeText={setNewDescription}
                multiline
                numberOfLines={4}
                maxLength={500}
              />

              <Text style={styles.label}>Category</Text>
              <View style={styles.categoryButtons}>
                {categories.map(cat => (
                  <TouchableOpacity
                    key={cat}
                    style={[
                      styles.categoryButton,
                      newCategory === cat && styles.categoryButtonActive
                    ]}
                    onPress={() => setNewCategory(cat)}
                  >
                    <Text style={styles.categoryButtonText}>{cat}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity
                style={[styles.modalButton, creating && styles.modalButtonDisabled]}
                onPress={handleCreate}
                disabled={creating}
              >
                <Text style={styles.modalButtonText}>
                  {creating ? 'Sharing...' : 'Share Prayer'}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Styles similar to StudyGroupsScreen
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: { padding: 20, paddingTop: 10 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#111827', marginBottom: 4 },
  subtitle: { fontSize: 16, color: '#6B7280' },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6366F1',
    marginHorizontal: 20,
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8
  },
  createButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  tabs: { flexDirection: 'row', paddingHorizontal: 16, marginTop: 20, gap: 8 },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB'
  },
  tabActive: { backgroundColor: '#6366F1', borderColor: '#6366F1' },
  tabText: { fontSize: 14, fontWeight: '600', color: '#6B7280' },
  tabTextActive: { color: '#FFF' },
  content: { padding: 16, paddingTop: 20 },
  prayerCard: {
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
  prayerHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  prayerInfo: { flex: 1 },
  prayerTitle: { fontSize: 16, fontWeight: 'bold', color: '#111827', marginBottom: 4 },
  prayerMeta: { fontSize: 12, color: '#6B7280' },
  answeredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4
  },
  answeredText: { fontSize: 11, fontWeight: '600', color: '#10B981' },
  prayerDescription: { fontSize: 14, color: '#6B7280', lineHeight: 20, marginBottom: 12 },
  prayerFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  prayerStat: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  prayerStatText: { fontSize: 13, color: '#6B7280', fontWeight: '500' },
  prayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCE7F3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 4
  },
  prayButtonText: { fontSize: 13, fontWeight: '600', color: '#EC4899' },
  answeredButton: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16
  },
  answeredButtonText: { fontSize: 13, fontWeight: '600', color: '#10B981' },
  emptyState: { alignItems: 'center', paddingVertical: 60 },
  emptyTitle: { fontSize: 20, fontWeight: 'bold', color: '#111827', marginTop: 16, marginBottom: 8 },
  emptyText: { fontSize: 14, color: '#6B7280', textAlign: 'center' },
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
  textArea: { height: 100, textAlignVertical: 'top' },
  categoryButtons: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 20 },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E5E7EB'
  },
  categoryButtonActive: { backgroundColor: '#E0E7FF', borderColor: '#6366F1' },
  categoryButtonText: { fontSize: 14, fontWeight: '600', color: '#6B7280' },
  modalButton: {
    backgroundColor: '#6366F1',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40
  },
  modalButtonDisabled: { backgroundColor: '#9CA3AF' },
  modalButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});
