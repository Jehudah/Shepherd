import React, { useState, useEffect, useRef } from 'react';
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
  getStudyGroup,
  getGroupMembers,
  leaveStudyGroup,
  deleteStudyGroup,
  sendGroupMessage,
  subscribeToGroupMessages,
  type StudyGroup,
  type GroupMember,
  type GroupMessage
} from '../../services/studyGroupsService';
import { useStore } from '../../store/useStore';

type GroupDetailRouteProp = RouteProp<RootStackParamList, 'GroupDetail'>;

export default function GroupDetailScreen() {
  const route = useRoute<GroupDetailRouteProp>();
  const navigation = useNavigation();
  const currentUser = useStore(state => state.user);

  const { groupId } = route.params;
  const [group, setGroup] = useState<StudyGroup | null>(null);
  const [members, setMembers] = useState<GroupMember[]>([]);
  const [messages, setMessages] = useState<GroupMessage[]>([]);
  const [activeTab, setActiveTab] = useState<'chat' | 'members'>('chat');
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    loadGroupData();

    // Subscribe to messages
    const unsubscribe = subscribeToGroupMessages(groupId, (newMessages) => {
      setMessages(newMessages);
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    });

    return () => unsubscribe();
  }, [groupId]);

  const loadGroupData = async () => {
    try {
      const [groupData, groupMembers] = await Promise.all([
        getStudyGroup(groupId),
        getGroupMembers(groupId)
      ]);

      setGroup(groupData);
      setMembers(groupMembers);
    } catch (error) {
      console.error('Error loading group data:', error);
      Alert.alert('Error', 'Failed to load group details');
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!currentUser || !group || newMessage.trim().length === 0) return;

    const messageText = newMessage.trim();
    setNewMessage('');

    try {
      await sendGroupMessage(
        groupId,
        currentUser.uid,
        currentUser.username || currentUser.displayName || 'User',
        messageText
      );
    } catch (error) {
      console.error('Error sending message:', error);
      Alert.alert('Error', 'Failed to send message');
      setNewMessage(messageText);
    }
  };

  const handleLeaveGroup = () => {
    if (!currentUser || !group) return;

    Alert.alert(
      'Leave Group',
      `Leave "${group.name}"? You can rejoin later.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Leave',
          style: 'destructive',
          onPress: async () => {
            try {
              await leaveStudyGroup(groupId, currentUser.uid);
              Alert.alert('Left Group', `You left "${group.name}"`);
              navigation.goBack();
            } catch (error: any) {
              console.error('Error leaving group:', error);
              Alert.alert('Error', error.message || 'Failed to leave group');
            }
          }
        }
      ]
    );
  };

  const handleDeleteGroup = () => {
    if (!currentUser || !group) return;

    Alert.alert(
      'Delete Group',
      `Permanently delete "${group.name}"? This cannot be undone.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteStudyGroup(groupId, currentUser.uid);
              Alert.alert('Deleted', `"${group.name}" has been deleted`);
              navigation.goBack();
            } catch (error: any) {
              console.error('Error deleting group:', error);
              Alert.alert('Error', error.message || 'Failed to delete group');
            }
          }
        }
      ]
    );
  };

  const formatMessageTime = (date: Date): string => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  const isOwner = currentUser && group && group.ownerId === currentUser.uid;

  if (loading || !group) {
    return (
      <SafeAreaView style={[styles.container, styles.centerContent]}>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
      >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="#111827" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Group Options', 'Coming soon')}>
            <Icon name="more-vertical" size={24} color="#111827" />
          </TouchableOpacity>
        </View>

        <Text style={styles.groupName}>{group.name}</Text>
        <Text style={styles.groupInfo}>
          {group.category} • {group.memberCount} members
        </Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'chat' && styles.tabActive]}
          onPress={() => setActiveTab('chat')}
        >
          <Icon name="message-circle" size={18} color={activeTab === 'chat' ? '#EC4899' : '#6B7280'} />
          <Text style={[styles.tabText, activeTab === 'chat' && styles.tabTextActive]}>
            Chat
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'members' && styles.tabActive]}
          onPress={() => setActiveTab('members')}
        >
          <Icon name="users" size={18} color={activeTab === 'members' ? '#EC4899' : '#6B7280'} />
          <Text style={[styles.tabText, activeTab === 'members' && styles.tabTextActive]}>
            Members ({members.length})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {activeTab === 'chat' ? (
        <>
          <ScrollView
            ref={scrollViewRef}
            style={styles.chatContainer}
            contentContainerStyle={styles.chatContent}
            onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          >
            {messages.length === 0 ? (
              <View style={styles.emptyChat}>
                <Icon name="message-circle" size={48} color="#D1D5DB" />
                <Text style={styles.emptyChatText}>No messages yet</Text>
                <Text style={styles.emptyChatSubtext}>Be the first to say something!</Text>
              </View>
            ) : (
              messages.map((message) => (
                <View
                  key={message.id}
                  style={[
                    styles.messageBubble,
                    message.userId === currentUser?.uid && styles.messageBubbleOwn
                  ]}
                >
                  {message.userId !== currentUser?.uid && (
                    <Text style={styles.messageUsername}>{message.username}</Text>
                  )}
                  <Text style={styles.messageText}>{message.message}</Text>
                  <Text style={styles.messageTime}>
                    {formatMessageTime(message.createdAt)}
                  </Text>
                </View>
              ))
            )}
          </ScrollView>

          {/* Message Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              value={newMessage}
              onChangeText={setNewMessage}
              multiline
              maxLength={500}
            />
            <TouchableOpacity
              style={[styles.sendButton, newMessage.trim().length === 0 && styles.sendButtonDisabled]}
              onPress={handleSendMessage}
              disabled={newMessage.trim().length === 0}
            >
              <Icon name="send" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <ScrollView style={styles.membersContainer}>
          <View style={styles.membersContent}>
            {/* Group Description */}
            <View style={styles.descriptionCard}>
              <Text style={styles.descriptionTitle}>About</Text>
              <Text style={styles.descriptionText}>{group.description}</Text>
            </View>

            {/* Members List */}
            <Text style={styles.sectionTitle}>Members ({members.length})</Text>
            {members.map((member) => (
              <View key={member.userId} style={styles.memberCard}>
                <View style={styles.memberAvatar}>
                  <Icon name="user" size={20} color="#FFF" />
                </View>
                <View style={styles.memberInfo}>
                  <Text style={styles.memberName}>
                    {member.displayName}
                    {member.role === 'owner' && ' 👑'}
                  </Text>
                  <Text style={styles.memberRole}>
                    {member.role === 'owner' ? 'Group Owner' : 'Member'}
                  </Text>
                </View>
              </View>
            ))}

            {/* Group Actions */}
            <View style={styles.actionsSection}>
              {isOwner ? (
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={handleDeleteGroup}
                >
                  <Icon name="trash-2" size={18} color="#EF4444" />
                  <Text style={styles.deleteButtonText}>Delete Group</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.leaveButton}
                  onPress={handleLeaveGroup}
                >
                  <Icon name="log-out" size={18} color="#F59E0B" />
                  <Text style={styles.leaveButtonText}>Leave Group</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>
      )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E3FF' // Light lilac
  },
  keyboardView: {
    flex: 1,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    fontSize: 16,
    color: '#6B7280'
  },
  header: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB'
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  groupName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4
  },
  groupInfo: {
    fontSize: 14,
    color: '#6B7280'
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB'
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#EC4899'
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280'
  },
  tabTextActive: {
    color: '#EC4899'
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#E8E3FF' // Light lilac
  },
  chatContent: {
    padding: 16,
    paddingBottom: 8
  },
  emptyChat: {
    alignItems: 'center',
    paddingVertical: 60
  },
  emptyChatText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 16
  },
  emptyChatSubtext: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4
  },
  messageBubble: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
    maxWidth: '75%',
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1
  },
  messageBubbleOwn: {
    backgroundColor: '#EC4899',
    alignSelf: 'flex-end'
  },
  messageUsername: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 4
  },
  messageText: {
    fontSize: 15,
    color: '#111827',
    lineHeight: 20
  },
  messageBubbleOwn__messageText: {
    color: '#FFF'
  },
  messageTime: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 4,
    textAlign: 'right'
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
    backgroundColor: '#EC4899',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendButtonDisabled: {
    backgroundColor: '#D1D5DB'
  },
  membersContainer: {
    flex: 1
  },
  membersContent: {
    padding: 16
  },
  descriptionCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8
  },
  descriptionText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12
  },
  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8
  },
  memberAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EC4899',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  memberInfo: {
    flex: 1
  },
  memberName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2
  },
  memberRole: {
    fontSize: 13,
    color: '#6B7280'
  },
  actionsSection: {
    marginTop: 24,
    marginBottom: 40
  },
  leaveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#F59E0B',
    borderRadius: 12,
    paddingVertical: 14,
    gap: 8
  },
  leaveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F59E0B'
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#EF4444',
    borderRadius: 12,
    paddingVertical: 14,
    gap: 8
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EF4444'
  }
});
