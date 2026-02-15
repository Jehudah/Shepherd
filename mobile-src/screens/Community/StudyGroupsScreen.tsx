import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Alert,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '../../types';
import { Feather as Icon } from '@expo/vector-icons';
import {
  getPublicStudyGroups,
  getUserStudyGroups,
  createStudyGroup,
  joinStudyGroup,
  type StudyGroup
} from '../../services/studyGroupsService';
import { useStore } from '../../store/useStore';
import Wooly from '../../components/Wooly';

export default function StudyGroupsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const currentUser = useStore(state => state.user);

  const [activeTab, setActiveTab] = useState<'my-groups' | 'browse'>('my-groups');
  const [myGroups, setMyGroups] = useState<StudyGroup[]>([]);
  const [publicGroups, setPublicGroups] = useState<StudyGroup[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Create group form state
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');
  const [newGroupCategory, setNewGroupCategory] = useState('General');
  const [creating, setCreating] = useState(false);

  const categories = ['General', 'Bible Study', 'Prayer', 'Youth', 'Worship', 'Theology'];

  useEffect(() => {
    loadGroups();
  }, []);

  const loadGroups = async () => {
    if (!currentUser) return;

    try {
      const [userGroups, allPublicGroups] = await Promise.all([
        getUserStudyGroups(currentUser.uid),
        getPublicStudyGroups()
      ]);

      setMyGroups(userGroups);
      setPublicGroups(allPublicGroups);
    } catch (error) {
      console.error('Error loading groups:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadGroups();
    setRefreshing(false);
  };

  const handleCreateGroup = async () => {
    if (!currentUser) return;

    if (newGroupName.trim().length < 3) {
      Alert.alert('Error', 'Group name must be at least 3 characters');
      return;
    }

    if (newGroupDescription.trim().length < 10) {
      Alert.alert('Error', 'Description must be at least 10 characters');
      return;
    }

    setCreating(true);
    try {
      const groupId = await createStudyGroup(
        currentUser.uid,
        currentUser.username || currentUser.displayName || 'User',
        newGroupName.trim(),
        newGroupDescription.trim(),
        newGroupCategory,
        true
      );

      Alert.alert('Success', 'Study group created!');
      setShowCreateModal(false);
      setNewGroupName('');
      setNewGroupDescription('');
      setNewGroupCategory('General');

      // Navigate to the new group
      navigation.navigate('GroupDetail', { groupId });
      await loadGroups();
    } catch (error) {
      console.error('Error creating group:', error);
      Alert.alert('Error', 'Failed to create study group');
    } finally {
      setCreating(false);
    }
  };

  const handleJoinGroup = async (group: StudyGroup) => {
    if (!currentUser) return;

    // Check if already a member
    if (myGroups.some(g => g.id === group.id)) {
      navigation.navigate('GroupDetail', { groupId: group.id });
      return;
    }

    Alert.alert(
      'Join Group',
      `Join "${group.name}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Join',
          onPress: async () => {
            try {
              await joinStudyGroup(
                group.id,
                currentUser.uid,
                currentUser.username || currentUser.displayName || 'User',
                currentUser.displayName || currentUser.username || 'User'
              );

              Alert.alert('Success', `You joined "${group.name}"!`);
              navigation.navigate('GroupDetail', { groupId: group.id });
              await loadGroups();
            } catch (error: any) {
              console.error('Error joining group:', error);
              Alert.alert('Error', error.message || 'Failed to join group');
            }
          }
        }
      ]
    );
  };

  const renderGroupCard = (group: StudyGroup, isMember: boolean = false) => (
    <TouchableOpacity
      key={group.id}
      style={styles.groupCard}
      onPress={() =>
        isMember
          ? navigation.navigate('GroupDetail', { groupId: group.id })
          : handleJoinGroup(group)
      }
    >
      <View style={styles.groupHeader}>
        <View style={[styles.groupIcon, { backgroundColor: getCategoryColor(group.category) }]}>
          <Icon name="users" size={24} color="#FFF" />
        </View>
        <View style={styles.groupInfo}>
          <Text style={styles.groupName}>{group.name}</Text>
          <Text style={styles.groupCategory}>{group.category}</Text>
        </View>
        {isMember ? (
          <Icon name="chevron-right" size={20} color="#9CA3AF" />
        ) : (
          <TouchableOpacity
            style={styles.joinButton}
            onPress={() => handleJoinGroup(group)}
          >
            <Icon name="user-plus" size={16} color="#FFF" />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.groupDescription} numberOfLines={2}>
        {group.description}
      </Text>

      <View style={styles.groupFooter}>
        <View style={styles.groupStat}>
          <Icon name="users" size={14} color="#6B7280" />
          <Text style={styles.groupStatText}>{group.memberCount} members</Text>
        </View>
        <View style={styles.groupStat}>
          <Icon name="user" size={14} color="#6B7280" />
          <Text style={styles.groupStatText}>by {group.ownerName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'General': '#6B7280',
      'Bible Study': '#3B82F6',
      'Prayer': '#8B5CF6',
      'Youth': '#10B981',
      'Worship': '#F59E0B',
      'Theology': '#EF4444'
    };
    return colors[category] || '#6B7280';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Study Groups</Text>
          <Text style={styles.subtitle}>Learn together with others</Text>
        </View>

        {/* Wooly Message */}
        <Wooly
          message="Study groups help you stay accountable and learn from others. Together we grow stronger in faith!"
          mood="happy"
          size="small"
        />

        {/* Create Group Button */}
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => setShowCreateModal(true)}
        >
          <Icon name="plus-circle" size={20} color="#FFF" />
          <Text style={styles.createButtonText}>Create New Group</Text>
        </TouchableOpacity>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'my-groups' && styles.tabActive]}
            onPress={() => setActiveTab('my-groups')}
          >
            <Text style={[styles.tabText, activeTab === 'my-groups' && styles.tabTextActive]}>
              My Groups ({myGroups.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'browse' && styles.tabActive]}
            onPress={() => setActiveTab('browse')}
          >
            <Text style={[styles.tabText, activeTab === 'browse' && styles.tabTextActive]}>
              Browse Groups
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {activeTab === 'my-groups' ? (
            myGroups.length > 0 ? (
              myGroups.map(group => renderGroupCard(group, true))
            ) : (
              <View style={styles.emptyState}>
                <Icon name="users" size={48} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>No groups yet</Text>
                <Text style={styles.emptyText}>
                  Create or join a study group to start learning together!
                </Text>
                <TouchableOpacity
                  style={styles.emptyButton}
                  onPress={() => setActiveTab('browse')}
                >
                  <Icon name="search" size={18} color="#FFF" />
                  <Text style={styles.emptyButtonText}>Browse Groups</Text>
                </TouchableOpacity>
              </View>
            )
          ) : (
            publicGroups.length > 0 ? (
              publicGroups.map(group => renderGroupCard(group, false))
            ) : (
              <View style={styles.emptyState}>
                <Icon name="inbox" size={48} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>No public groups</Text>
                <Text style={styles.emptyText}>
                  Be the first to create a study group!
                </Text>
              </View>
            )
          )}
        </View>
      </ScrollView>

      {/* Create Group Modal */}
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
                <Text style={styles.modalTitle}>Create Study Group</Text>
                <TouchableOpacity onPress={() => setShowCreateModal(false)}>
                  <Icon name="x" size={24} color="#6B7280" />
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.modalBody}>
              <Text style={styles.label}>Group Name *</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., Evening Bible Study"
                value={newGroupName}
                onChangeText={setNewGroupName}
                maxLength={50}
              />

              <Text style={styles.label}>Description *</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Tell others what this group is about..."
                value={newGroupDescription}
                onChangeText={setNewGroupDescription}
                multiline
                numberOfLines={4}
                maxLength={200}
              />

              <Text style={styles.label}>Category</Text>
              <View style={styles.categoryButtons}>
                {categories.map(category => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.categoryButton,
                      newGroupCategory === category && styles.categoryButtonActive,
                      { borderColor: getCategoryColor(category) }
                    ]}
                    onPress={() => setNewGroupCategory(category)}
                  >
                    <Text
                      style={[
                        styles.categoryButtonText,
                        newGroupCategory === category && { color: getCategoryColor(category) }
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity
                style={[styles.modalButton, creating && styles.modalButtonDisabled]}
                onPress={handleCreateGroup}
                disabled={creating}
              >
                <Text style={styles.modalButtonText}>
                  {creating ? 'Creating...' : 'Create Group'}
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
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB'
  },
  scrollView: {
    flex: 1
  },
  header: {
    padding: 20,
    paddingTop: 10
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280'
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EC4899',
    marginHorizontal: 20,
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8
  },
  createButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 20,
    gap: 8
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB'
  },
  tabActive: {
    backgroundColor: '#EC4899',
    borderColor: '#EC4899'
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280'
  },
  tabTextActive: {
    color: '#FFF'
  },
  content: {
    padding: 16,
    paddingTop: 20
  },
  groupCard: {
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
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  groupIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  groupInfo: {
    flex: 1
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2
  },
  groupCategory: {
    fontSize: 13,
    color: '#6B7280'
  },
  joinButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EC4899',
    alignItems: 'center',
    justifyContent: 'center'
  },
  groupDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12
  },
  groupFooter: {
    flexDirection: 'row',
    gap: 16
  },
  groupStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  groupStatText: {
    fontSize: 12,
    color: '#6B7280'
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8
  },
  emptyText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 40,
    marginBottom: 24
  },
  emptyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EC4899',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    gap: 8
  },
  emptyButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end'
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%'
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB'
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827'
  },
  modalBody: {
    padding: 20
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    marginTop: 12
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111827',
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  categoryButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFF'
  },
  categoryButtonActive: {
    borderWidth: 2
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280'
  },
  modalButton: {
    backgroundColor: '#EC4899',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40
  },
  modalButtonDisabled: {
    backgroundColor: '#9CA3AF'
  },
  modalButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
