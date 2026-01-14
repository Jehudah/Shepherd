import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '../../types';
import Icon from 'react-native-vector-icons/Feather';
import { getFriendsLeaderboard, type FriendProfile } from '../../services/friendsService';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useStore } from '../../store/useStore';
import Wooly from '../../components/Wooly';

interface LeaderboardEntry {
  uid: string;
  username: string;
  displayName: string;
  totalXP: number;
  level: number;
  rank: number;
  isCurrentUser: boolean;
}

export default function LeaderboardScreen() {
  const navigation = useNavigation<NavigationProp>();
  const currentUser = useStore(state => state.user);
  const userProgress = useStore(state => state.userProgress);

  const [activeTab, setActiveTab] = useState<'global' | 'friends'>('friends');
  const [friendsLeaderboard, setFriendsLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [globalLeaderboard, setGlobalLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadLeaderboards();
  }, []);

  const loadLeaderboards = async () => {
    if (!currentUser) return;

    try {
      // Load friends leaderboard
      const friends = await getFriendsLeaderboard(currentUser.uid);

      // Add current user to friends leaderboard
      const friendsWithUser: FriendProfile[] = [
        {
          uid: currentUser.uid,
          username: currentUser.username,
          displayName: currentUser.displayName || currentUser.username,
          totalXP: userProgress.totalXP,
          level: userProgress.level,
          completedLessons: userProgress.completedLessons.length,
          currentStreak: userProgress.currentStreak
        },
        ...friends
      ];

      // Sort and rank friends
      friendsWithUser.sort((a, b) => b.totalXP - a.totalXP);
      const friendsData: LeaderboardEntry[] = friendsWithUser.map((friend, index) => ({
        uid: friend.uid,
        username: friend.username,
        displayName: friend.displayName,
        totalXP: friend.totalXP,
        level: friend.level,
        rank: index + 1,
        isCurrentUser: friend.uid === currentUser.uid
      }));

      setFriendsLeaderboard(friendsData);

      // Load global leaderboard (top 100)
      const progressRef = collection(db, 'userProgress');
      const globalQuery = query(progressRef, orderBy('totalXP', 'desc'), limit(100));
      const globalSnapshot = await getDocs(globalQuery);

      const globalData: LeaderboardEntry[] = [];
      let currentUserRank = -1;

      globalSnapshot.forEach((doc, index) => {
        const data = doc.data();
        const isCurrentUser = doc.id === currentUser.uid;

        if (isCurrentUser) {
          currentUserRank = index + 1;
        }

        globalData.push({
          uid: doc.id,
          username: data.username || 'User',
          displayName: data.username || 'User',
          totalXP: data.totalXP || 0,
          level: data.level || 1,
          rank: index + 1,
          isCurrentUser
        });
      });

      // If current user not in top 100, add them at the end
      if (currentUserRank === -1 && globalData.length > 0) {
        globalData.push({
          uid: currentUser.uid,
          username: currentUser.username,
          displayName: currentUser.displayName || currentUser.username,
          totalXP: userProgress.totalXP,
          level: userProgress.level,
          rank: -1, // We don't know exact rank
          isCurrentUser: true
        });
      }

      setGlobalLeaderboard(globalData);
    } catch (error) {
      console.error('Error loading leaderboards:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadLeaderboards();
    setRefreshing(false);
  };

  const getMedalColor = (rank: number): string => {
    switch (rank) {
      case 1: return '#FFD700'; // Gold
      case 2: return '#C0C0C0'; // Silver
      case 3: return '#CD7F32'; // Bronze
      default: return '#6B7280';
    }
  };

  const getMedalIcon = (rank: number): string => {
    if (rank <= 3) return 'award';
    return 'user';
  };

  const renderLeaderboardEntry = (entry: LeaderboardEntry) => (
    <TouchableOpacity
      key={entry.uid}
      style={[
        styles.entryCard,
        entry.isCurrentUser && styles.entryCardCurrent
      ]}
      onPress={() => {
        if (!entry.isCurrentUser) {
          navigation.navigate('FriendProfile', { friendId: entry.uid });
        }
      }}
    >
      {/* Rank */}
      <View style={[styles.rankBadge, entry.rank <= 3 && styles.rankBadgeMedal]}>
        {entry.rank <= 3 ? (
          <Icon name={getMedalIcon(entry.rank)} size={20} color={getMedalColor(entry.rank)} />
        ) : entry.rank === -1 ? (
          <Text style={styles.rankText}>?</Text>
        ) : (
          <Text style={styles.rankText}>{entry.rank}</Text>
        )}
      </View>

      {/* User Info */}
      <View style={styles.entryInfo}>
        <Text style={[styles.entryName, entry.isCurrentUser && styles.entryNameCurrent]}>
          {entry.displayName} {entry.isCurrentUser && '(You)'}
        </Text>
        <View style={styles.entryStats}>
          <View style={styles.entryStat}>
            <Icon name="zap" size={12} color="#F59E0B" />
            <Text style={styles.entryStatText}>{entry.totalXP.toLocaleString()} XP</Text>
          </View>
          <View style={styles.entryStat}>
            <Icon name="award" size={12} color="#8B5CF6" />
            <Text style={styles.entryStatText}>Lvl {entry.level}</Text>
          </View>
        </View>
      </View>

      {/* Chevron */}
      {!entry.isCurrentUser && (
        <Icon name="chevron-right" size={20} color="#9CA3AF" />
      )}
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Leaderboard</Text>
          <Text style={styles.subtitle}>See how you rank!</Text>
        </View>

        {/* Wooly Message */}
        <Wooly
          message="Competition makes us better! But remember, the real victory is growing in your faith journey!"
          mood="encouraging"
          size="small"
        />

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'friends' && styles.tabButtonActive]}
            onPress={() => setActiveTab('friends')}
          >
            <Icon
              name="users"
              size={18}
              color={activeTab === 'friends' ? '#FFF' : '#6B7280'}
            />
            <Text style={[styles.tabButtonText, activeTab === 'friends' && styles.tabButtonTextActive]}>
              Friends
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'global' && styles.tabButtonActive]}
            onPress={() => setActiveTab('global')}
          >
            <Icon
              name="globe"
              size={18}
              color={activeTab === 'global' ? '#FFF' : '#6B7280'}
            />
            <Text style={[styles.tabButtonText, activeTab === 'global' && styles.tabButtonTextActive]}>
              Global
            </Text>
          </TouchableOpacity>
        </View>

        {/* Leaderboard Content */}
        <View style={styles.content}>
          {activeTab === 'friends' ? (
            friendsLeaderboard.length > 0 ? (
              <>
                <Text style={styles.leaderboardTitle}>Friends Leaderboard</Text>
                {friendsLeaderboard.map(renderLeaderboardEntry)}
              </>
            ) : (
              <View style={styles.emptyState}>
                <Icon name="users" size={48} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>No friends yet</Text>
                <Text style={styles.emptyText}>
                  Add friends to compete on the leaderboard!
                </Text>
                <TouchableOpacity
                  style={styles.emptyButton}
                  onPress={() => navigation.navigate('Friends')}
                >
                  <Icon name="user-plus" size={18} color="#FFF" />
                  <Text style={styles.emptyButtonText}>Find Friends</Text>
                </TouchableOpacity>
              </View>
            )
          ) : (
            <>
              <Text style={styles.leaderboardTitle}>Top 100 Users</Text>
              {globalLeaderboard.map(renderLeaderboardEntry)}
            </>
          )}
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB'
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center'
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
    gap: 12
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
    gap: 8
  },
  tabButtonActive: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6'
  },
  tabButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#6B7280'
  },
  tabButtonTextActive: {
    color: '#FFF'
  },
  content: {
    padding: 16,
    paddingTop: 20
  },
  leaderboardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16
  },
  entryCard: {
    flexDirection: 'row',
    alignItems: 'center',
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
  entryCardCurrent: {
    backgroundColor: '#EFF6FF',
    borderWidth: 2,
    borderColor: '#3B82F6'
  },
  rankBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  rankBadgeMedal: {
    backgroundColor: '#FEF3C7'
  },
  rankText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151'
  },
  entryInfo: {
    flex: 1
  },
  entryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4
  },
  entryNameCurrent: {
    color: '#3B82F6'
  },
  entryStats: {
    flexDirection: 'row',
    gap: 12
  },
  entryStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  entryStatText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500'
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
    paddingHorizontal: 20,
    marginBottom: 24
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
  },
  bottomSpacing: {
    height: 40
  }
});
