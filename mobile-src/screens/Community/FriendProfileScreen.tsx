import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import { useRoute, useNavigation, type RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../types';
import Icon from 'react-native-vector-icons/Feather';
import { getUserProfile, removeFriend, type FriendProfile } from '../../services/friendsService';
import { useStore } from '../../store/useStore';
import Wooly from '../../components/Wooly';

type FriendProfileRouteProp = RouteProp<RootStackParamList, 'FriendProfile'>;

export default function FriendProfileScreen() {
  const route = useRoute<FriendProfileRouteProp>();
  const navigation = useNavigation();
  const currentUser = useStore(state => state.user);

  const { friendId } = route.params;
  const [profile, setProfile] = useState<FriendProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, [friendId]);

  const loadProfile = async () => {
    try {
      const friendProfile = await getUserProfile(friendId);
      setProfile(friendProfile);
    } catch (error) {
      console.error('Error loading profile:', error);
      Alert.alert('Error', 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFriend = () => {
    if (!currentUser || !profile) return;

    Alert.alert(
      'Remove Friend',
      `Remove ${profile.displayName} from your friends?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            try {
              await removeFriend(currentUser.uid, friendId);
              Alert.alert('Removed', `${profile.displayName} has been removed from your friends`);
              navigation.goBack();
            } catch (error) {
              console.error('Error removing friend:', error);
              Alert.alert('Error', 'Failed to remove friend');
            }
          }
        }
      ]
    );
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Icon name="user-x" size={48} color="#D1D5DB" />
        <Text style={styles.errorText}>Profile not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.avatarLarge}>
          <Icon name="user" size={48} color="#FFF" />
        </View>
        <Text style={styles.displayName}>{profile.displayName}</Text>
        <Text style={styles.username}>@{profile.username}</Text>

        {/* Level Badge */}
        <View style={styles.levelBadge}>
          <Icon name="award" size={20} color="#8B5CF6" />
          <Text style={styles.levelText}>Level {profile.level}</Text>
        </View>
      </View>

      {/* Wooly Message */}
      <Wooly
        message={`${profile.displayName} is doing great! Keep encouraging each other in your faith journey!`}
        mood="happy"
        size="small"
      />

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        <View style={[styles.statCard, { backgroundColor: '#EFF6FF' }]}>
          <Icon name="zap" size={32} color="#3B82F6" />
          <Text style={styles.statValue}>{profile.totalXP.toLocaleString()}</Text>
          <Text style={styles.statLabel}>Total XP</Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: '#F3F4F6' }]}>
          <Icon name="check-circle" size={32} color="#10B981" />
          <Text style={styles.statValue}>{profile.completedLessons}</Text>
          <Text style={styles.statLabel}>Lessons</Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: '#FEF2F2' }]}>
          <Icon name="flame" size={32} color="#EF4444" />
          <Text style={styles.statValue}>{profile.currentStreak}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: '#F5F3FF' }]}>
          <Icon name="award" size={32} color="#8B5CF6" />
          <Text style={styles.statValue}>{profile.level}</Text>
          <Text style={styles.statLabel}>Level</Text>
        </View>
      </View>

      {/* Achievements Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementsList}>
          {profile.totalXP >= 1000 && (
            <View style={styles.achievementCard}>
              <View style={[styles.achievementIcon, { backgroundColor: '#DBEAFE' }]}>
                <Icon name="star" size={24} color="#3B82F6" />
              </View>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementName}>XP Master</Text>
                <Text style={styles.achievementDesc}>Earned 1,000+ XP</Text>
              </View>
            </View>
          )}

          {profile.completedLessons >= 10 && (
            <View style={styles.achievementCard}>
              <View style={[styles.achievementIcon, { backgroundColor: '#D1FAE5' }]}>
                <Icon name="book-open" size={24} color="#10B981" />
              </View>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementName}>Dedicated Learner</Text>
                <Text style={styles.achievementDesc}>Completed 10+ lessons</Text>
              </View>
            </View>
          )}

          {profile.currentStreak >= 7 && (
            <View style={styles.achievementCard}>
              <View style={[styles.achievementIcon, { backgroundColor: '#FEE2E2' }]}>
                <Icon name="flame" size={24} color="#EF4444" />
              </View>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementName}>Week Warrior</Text>
                <Text style={styles.achievementDesc}>7+ day streak</Text>
              </View>
            </View>
          )}

          {profile.level >= 5 && (
            <View style={styles.achievementCard}>
              <View style={[styles.achievementIcon, { backgroundColor: '#EDE9FE' }]}>
                <Icon name="trending-up" size={24} color="#8B5CF6" />
              </View>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementName}>Rising Star</Text>
                <Text style={styles.achievementDesc}>Reached level 5</Text>
              </View>
            </View>
          )}

          {profile.totalXP < 1000 && profile.completedLessons < 10 && profile.currentStreak < 7 && profile.level < 5 && (
            <View style={styles.emptyAchievements}>
              <Icon name="award" size={32} color="#D1D5DB" />
              <Text style={styles.emptyAchievementsText}>
                {profile.displayName} is just getting started!
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Compare Progress Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Progress vs {profile.displayName}</Text>
        <ComparisonCard
          label="Total XP"
          yourValue={useStore.getState().userProgress.totalXP}
          theirValue={profile.totalXP}
          icon="zap"
          color="#3B82F6"
        />
        <ComparisonCard
          label="Completed Lessons"
          yourValue={useStore.getState().userProgress.completedLessons.length}
          theirValue={profile.completedLessons}
          icon="check-circle"
          color="#10B981"
        />
        <ComparisonCard
          label="Current Streak"
          yourValue={useStore.getState().userProgress.currentStreak}
          theirValue={profile.currentStreak}
          icon="flame"
          color="#EF4444"
        />
        <ComparisonCard
          label="Level"
          yourValue={useStore.getState().userProgress.level}
          theirValue={profile.level}
          icon="award"
          color="#8B5CF6"
        />
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.removeButton} onPress={handleRemoveFriend}>
          <Icon name="user-minus" size={18} color="#EF4444" />
          <Text style={styles.removeButtonText}>Remove Friend</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

interface ComparisonCardProps {
  label: string;
  yourValue: number;
  theirValue: number;
  icon: string;
  color: string;
}

function ComparisonCard({ label, yourValue, theirValue, icon, color }: ComparisonCardProps) {
  const yourPercentage = Math.max(yourValue, theirValue) > 0
    ? (yourValue / Math.max(yourValue, theirValue)) * 100
    : 50;
  const theirPercentage = Math.max(yourValue, theirValue) > 0
    ? (theirValue / Math.max(yourValue, theirValue)) * 100
    : 50;

  return (
    <View style={styles.comparisonCard}>
      <View style={styles.comparisonHeader}>
        <Icon name={icon as any} size={18} color={color} />
        <Text style={styles.comparisonLabel}>{label}</Text>
      </View>
      <View style={styles.comparisonBars}>
        <View style={styles.comparisonRow}>
          <Text style={styles.comparisonYouLabel}>You</Text>
          <View style={styles.comparisonBarTrack}>
            <View style={[styles.comparisonBarFill, { width: `${yourPercentage}%`, backgroundColor: color }]} />
          </View>
          <Text style={styles.comparisonValue}>{yourValue}</Text>
        </View>
        <View style={styles.comparisonRow}>
          <Text style={styles.comparisonThemLabel}>Them</Text>
          <View style={styles.comparisonBarTrack}>
            <View style={[styles.comparisonBarFill, { width: `${theirPercentage}%`, backgroundColor: '#D1D5DB' }]} />
          </View>
          <Text style={styles.comparisonValue}>{theirValue}</Text>
        </View>
      </View>
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
  errorText: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 12
  },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#FFF'
  },
  avatarLarge: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  displayName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4
  },
  username: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 12
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6
  },
  levelText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B5CF6'
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 12
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 8,
    marginBottom: 4
  },
  statLabel: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500'
  },
  section: {
    padding: 16,
    paddingTop: 8
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16
  },
  achievementsList: {
    gap: 12
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  achievementInfo: {
    flex: 1
  },
  achievementName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2
  },
  achievementDesc: {
    fontSize: 13,
    color: '#6B7280'
  },
  emptyAchievements: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#FFF',
    borderRadius: 12
  },
  emptyAchievementsText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 12
  },
  comparisonCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2
  },
  comparisonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12
  },
  comparisonLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827'
  },
  comparisonBars: {
    gap: 8
  },
  comparisonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  comparisonYouLabel: {
    width: 40,
    fontSize: 13,
    color: '#111827',
    fontWeight: '600'
  },
  comparisonThemLabel: {
    width: 40,
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500'
  },
  comparisonBarTrack: {
    flex: 1,
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    overflow: 'hidden'
  },
  comparisonBarFill: {
    height: '100%',
    borderRadius: 4
  },
  comparisonValue: {
    width: 50,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827'
  },
  actions: {
    padding: 16,
    paddingBottom: 32
  },
  removeButton: {
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
  removeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EF4444'
  }
});
