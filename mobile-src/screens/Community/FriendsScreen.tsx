import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '../../types';
import { Feather as Icon } from '@expo/vector-icons';
import {
  getFriends,
  getPendingRequests,
  getSentRequests,
  searchUsers,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  cancelFriendRequest,
  removeFriend,
  areFriends,
  hasPendingRequest,
  type FriendProfile,
  type FriendRequest
} from '../../services/friendsService';
import { useStore } from '../../store/useStore';
import Wooly from '../../components/Wooly';

export default function FriendsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const currentUser = useStore(state => state.user);

  const [activeTab, setActiveTab] = useState<'friends' | 'requests' | 'search'>('friends');
  const [friends, setFriends] = useState<FriendProfile[]>([]);
  const [pendingRequests, setPendingRequests] = useState<FriendRequest[]>([]);
  const [sentRequests, setSentRequests] = useState<FriendRequest[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FriendProfile[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    if (!currentUser) return;

    try {
      const [friendsList, requests, sent] = await Promise.all([
        getFriends(currentUser.uid),
        getPendingRequests(currentUser.uid),
        getSentRequests(currentUser.uid)
      ]);

      setFriends(friendsList);
      setPendingRequests(requests);
      setSentRequests(sent);
    } catch (error) {
      console.error('Error loading friends data:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const handleSearch = async () => {
    if (!currentUser || searchQuery.trim().length < 2) return;

    setIsSearching(true);
    try {
      const results = await searchUsers(searchQuery.trim(), currentUser.uid);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching users:', error);
      Alert.alert('Error', 'Failed to search users');
    } finally {
      setIsSearching(false);
    }
  };

  const handleSendRequest = async (toUser: FriendProfile) => {
    if (!currentUser) return;

    try {
      // Check if already friends or request sent
      const [alreadyFriends, requestPending] = await Promise.all([
        areFriends(currentUser.uid, toUser.uid),
        hasPendingRequest(currentUser.uid, toUser.uid)
      ]);

      if (alreadyFriends) {
        Alert.alert('Already Friends', 'You are already friends with this user');
        return;
      }

      if (requestPending) {
        Alert.alert('Request Sent', 'You already sent a friend request to this user');
        return;
      }

      await sendFriendRequest(
        currentUser.uid,
        currentUser.username || currentUser.displayName || 'User',
        toUser.uid,
        toUser.username
      );

      Alert.alert('Success', 'Friend request sent!');
      loadData();
    } catch (error: any) {
      console.error('Error sending friend request:', error);
      Alert.alert('Error', error.message || 'Failed to send friend request');
    }
  };

  const handleAcceptRequest = async (request: FriendRequest) => {
    try {
      await acceptFriendRequest(request.id, request);
      Alert.alert('Success', `You are now friends with ${request.fromUsername}!`);
      loadData();
    } catch (error) {
      console.error('Error accepting request:', error);
      Alert.alert('Error', 'Failed to accept friend request');
    }
  };

  const handleRejectRequest = async (requestId: string) => {
    try {
      await rejectFriendRequest(requestId);
      loadData();
    } catch (error) {
      console.error('Error rejecting request:', error);
      Alert.alert('Error', 'Failed to reject friend request');
    }
  };

  const handleCancelRequest = async (requestId: string) => {
    try {
      await cancelFriendRequest(requestId);
      loadData();
    } catch (error) {
      console.error('Error canceling request:', error);
      Alert.alert('Error', 'Failed to cancel friend request');
    }
  };

  const handleRemoveFriend = (friend: FriendProfile) => {
    Alert.alert(
      'Remove Friend',
      `Remove ${friend.displayName} from your friends?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            if (!currentUser) return;
            try {
              await removeFriend(currentUser.uid, friend.uid);
              Alert.alert('Removed', `${friend.displayName} has been removed from your friends`);
              loadData();
            } catch (error) {
              console.error('Error removing friend:', error);
              Alert.alert('Error', 'Failed to remove friend');
            }
          }
        }
      ]
    );
  };

  const handleViewProfile = (friend: FriendProfile) => {
    navigation.navigate('FriendProfile', { friendId: friend.uid });
  };

  const renderTabButton = (tab: 'friends' | 'requests' | 'search', label: string, badge?: number) => (
    <TouchableOpacity
      style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]}
      onPress={() => setActiveTab(tab)}
    >
      <Text style={[styles.tabButtonText, activeTab === tab && styles.tabButtonTextActive]}>
        {label}
      </Text>
      {badge !== undefined && badge > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const renderFriendCard = (friend: FriendProfile) => (
    <TouchableOpacity
      key={friend.uid}
      style={styles.card}
      onPress={() => handleViewProfile(friend)}
      onLongPress={() => handleRemoveFriend(friend)}
    >
      <View style={styles.cardLeft}>
        <View style={styles.avatar}>
          <Icon name="user" size={24} color="#FFF" />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{friend.displayName}</Text>
          <Text style={styles.cardUsername}>@{friend.username}</Text>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Icon name="award" size={12} color="#8B5CF6" />
              <Text style={styles.statText}>Lvl {friend.level}</Text>
            </View>
            <View style={styles.statItem}>
              <Icon name="zap" size={12} color="#F59E0B" />
              <Text style={styles.statText}>{friend.totalXP} XP</Text>
            </View>
            <View style={styles.statItem}>
              <Icon name="flame" size={12} color="#EF4444" />
              <Text style={styles.statText}>{friend.currentStreak} days</Text>
            </View>
          </View>
        </View>
      </View>
      <Icon name="chevron-right" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );

  const renderRequestCard = (request: FriendRequest) => (
    <View key={request.id} style={styles.card}>
      <View style={styles.cardLeft}>
        <View style={styles.avatar}>
          <Icon name="user" size={24} color="#FFF" />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{request.fromUsername}</Text>
          <Text style={styles.cardDetail}>Sent you a friend request</Text>
        </View>
      </View>
      <View style={styles.requestButtons}>
        <TouchableOpacity
          style={[styles.requestButton, styles.acceptButton]}
          onPress={() => handleAcceptRequest(request)}
        >
          <Icon name="check" size={18} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.requestButton, styles.rejectButton]}
          onPress={() => handleRejectRequest(request.id)}
        >
          <Icon name="x" size={18} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderSentRequestCard = (request: FriendRequest) => (
    <View key={request.id} style={styles.card}>
      <View style={styles.cardLeft}>
        <View style={styles.avatar}>
          <Icon name="user" size={24} color="#FFF" />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{request.toUsername}</Text>
          <Text style={styles.cardDetail}>Request pending...</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.requestButton, styles.cancelButton]}
        onPress={() => handleCancelRequest(request.id)}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSearchResult = (user: FriendProfile) => (
    <View key={user.uid} style={styles.card}>
      <View style={styles.cardLeft}>
        <View style={styles.avatar}>
          <Icon name="user" size={24} color="#FFF" />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{user.displayName}</Text>
          <Text style={styles.cardUsername}>@{user.username}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleSendRequest(user)}
      >
        <Icon name="user-plus" size={18} color="#FFF" />
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Friends</Text>
          <Text style={styles.subtitle}>Connect and learn together</Text>
        </View>

        {/* Wooly Welcome */}
        <Wooly
          message="Friends make learning more fun! Add friends to see their progress and encourage each other!"
          mood="happy"
          size="small"
        />

        {/* Tabs */}
        <View style={styles.tabs}>
          {renderTabButton('friends', 'My Friends', friends.length)}
          {renderTabButton('requests', 'Requests', pendingRequests.length)}
          {renderTabButton('search', 'Find Friends')}
        </View>

        {/* Content */}
        {activeTab === 'friends' && (
          <View style={styles.content}>
            {friends.length === 0 ? (
              <View style={styles.emptyState}>
                <Icon name="users" size={48} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>No friends yet</Text>
                <Text style={styles.emptyText}>
                  Search for users and send friend requests to start connecting!
                </Text>
                <TouchableOpacity
                  style={styles.emptyButton}
                  onPress={() => setActiveTab('search')}
                >
                  <Icon name="search" size={18} color="#FFF" />
                  <Text style={styles.emptyButtonText}>Find Friends</Text>
                </TouchableOpacity>
              </View>
            ) : (
              friends.map(renderFriendCard)
            )}
          </View>
        )}

        {activeTab === 'requests' && (
          <View style={styles.content}>
            {pendingRequests.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>Pending Requests</Text>
                {pendingRequests.map(renderRequestCard)}
              </>
            )}

            {sentRequests.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>Sent Requests</Text>
                {sentRequests.map(renderSentRequestCard)}
              </>
            )}

            {pendingRequests.length === 0 && sentRequests.length === 0 && (
              <View style={styles.emptyState}>
                <Icon name="inbox" size={48} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>No requests</Text>
                <Text style={styles.emptyText}>
                  You don't have any pending friend requests
                </Text>
              </View>
            )}
          </View>
        )}

        {activeTab === 'search' && (
          <View style={styles.content}>
            <View style={styles.searchBar}>
              <Icon name="search" size={20} color="#9CA3AF" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search by username..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
                autoCapitalize="none"
                autoCorrect={false}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setSearchQuery('')}>
                  <Icon name="x" size={20} color="#9CA3AF" />
                </TouchableOpacity>
              )}
            </View>

            <TouchableOpacity
              style={[styles.searchButton, isSearching && styles.searchButtonDisabled]}
              onPress={handleSearch}
              disabled={isSearching || searchQuery.trim().length < 2}
            >
              <Text style={styles.searchButtonText}>
                {isSearching ? 'Searching...' : 'Search'}
              </Text>
            </TouchableOpacity>

            {searchResults.length > 0 ? (
              <>
                <Text style={styles.sectionTitle}>Results ({searchResults.length})</Text>
                {searchResults.map(renderSearchResult)}
              </>
            ) : searchQuery.length > 0 && !isSearching ? (
              <View style={styles.emptyState}>
                <Icon name="user-x" size={48} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>No users found</Text>
                <Text style={styles.emptyText}>
                  Try searching with a different username
                </Text>
              </View>
            ) : null}
          </View>
        )}
      </ScrollView>
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
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 8
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    gap: 6
  },
  tabButtonActive: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6'
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280'
  },
  tabButtonTextActive: {
    color: '#FFF'
  },
  badge: {
    backgroundColor: '#EF4444',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center'
  },
  badgeText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: 'bold'
  },
  content: {
    padding: 16,
    paddingTop: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  cardInfo: {
    flex: 1
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2
  },
  cardUsername: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 6
  },
  cardDetail: {
    fontSize: 13,
    color: '#6B7280'
  },
  stats: {
    flexDirection: 'row',
    gap: 12
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  statText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500'
  },
  requestButtons: {
    flexDirection: 'row',
    gap: 8
  },
  requestButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  acceptButton: {
    backgroundColor: '#10B981'
  },
  rejectButton: {
    backgroundColor: '#EF4444'
  },
  cancelButton: {
    backgroundColor: '#6B7280',
    width: 'auto',
    paddingHorizontal: 12
  },
  cancelButtonText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600'
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600'
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 12
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827'
  },
  searchButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20
  },
  searchButtonDisabled: {
    backgroundColor: '#9CA3AF'
  },
  searchButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40
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
    paddingHorizontal: 20,
    marginBottom: 20
  },
  emptyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3B82F6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    gap: 8
  },
  emptyButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
