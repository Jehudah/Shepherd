import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather as Icon } from '@expo/vector-icons';
import { useStore } from '../../store/useStore';
import { AuthService } from '../../services/firebase';
import CharacterGuide from '../../components/CharacterGuide';
import Wooly from '../../components/Wooly';

export default function ProfileScreen() {
  const user = useStore((state) => state.user);
  const userProgress = useStore((state) => state.userProgress);
  const resetProgress = useStore((state) => state.resetProgress);
  const setUser = useStore((state) => state.setUser);
  const syncToCloud = useStore((state) => state.syncToCloud);
  const [showStreakCalendar, setShowStreakCalendar] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await AuthService.logout();
              setUser(null);
            } catch (error: any) {
              Alert.alert('Error', error.message);
            }
          },
        },
      ]
    );
  };

  const handleResetProgress = () => {
    Alert.alert(
      'Reset Progress',
      'Are you sure you want to reset all your progress? This cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            resetProgress();
            Alert.alert('Success', 'Your progress has been reset');
          },
        },
      ]
    );
  };

  const handleSyncToCloud = async () => {
    try {
      await syncToCloud();
      Alert.alert('Success', 'Your progress has been synced to the cloud');
    } catch (error: any) {
      Alert.alert('Error', 'Failed to sync progress: ' + error.message);
    }
  };

  const xpToNextLevel = userProgress.level * 100 - userProgress.totalXP;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Icon name="user" size={48} color="#FFFFFF" />
          </View>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>{userProgress.level}</Text>
          </View>
        </View>
        <Text style={styles.displayName}>{userProgress.username}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      {/* Main Stats Row */}
      <View style={styles.mainStatsRow}>
        <View style={styles.mainStatCard}>
          <View style={[styles.statIcon, { backgroundColor: '#FEF3C7' }]}>
            <Icon name="zap" size={24} color="#F59E0B" />
          </View>
          <Text style={styles.statValue}>{userProgress.totalXP}</Text>
          <Text style={styles.statLabel}>Total XP</Text>
        </View>

        <View style={styles.mainStatCard}>
          <View style={[styles.statIcon, { backgroundColor: '#DBEAFE' }]}>
            <Icon name="award" size={24} color="#3B82F6" />
          </View>
          <Text style={styles.statValue}>{userProgress.level}</Text>
          <Text style={styles.statLabel}>Level</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.mainStatCard,
            userProgress.streak > 0 && styles.streakActive
          ]}
          onPress={() => setShowStreakCalendar(true)}
        >
          <View style={[
            styles.statIcon,
            { backgroundColor: userProgress.streak > 0 ? '#FEE2E2' : '#F3F4F6' }
          ]}>
            <Icon
              name="flame"
              size={24}
              color={userProgress.streak > 0 ? '#EF4444' : '#9CA3AF'}
            />
          </View>
          <Text style={styles.statValue}>{userProgress.streak}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </TouchableOpacity>
      </View>

      {/* Secondary Stats */}
      <View style={styles.secondaryStatsRow}>
        <View style={styles.secondaryStatCard}>
          <View style={[styles.statIcon, { backgroundColor: '#FFEDD5' }]}>
            <Icon name="target" size={24} color="#F97316" />
          </View>
          <Text style={styles.statValue}>
            {userProgress.completedLessons.length}
          </Text>
          <Text style={styles.statLabel}>Completed Lessons</Text>
        </View>

        <View style={styles.secondaryStatCard}>
          <View style={[styles.statIcon, { backgroundColor: '#E0E7FF' }]}>
            <Icon name="star" size={24} color="#6366F1" />
          </View>
          <Text style={styles.statValue}>
            {xpToNextLevel}
          </Text>
          <Text style={styles.statLabel}>XP to Next Level</Text>
        </View>
      </View>

      {/* Streak Calendar Modal */}
      <Modal
        visible={showStreakCalendar}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowStreakCalendar(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Practice Calendar</Text>
              <TouchableOpacity onPress={() => setShowStreakCalendar(false)}>
                <Icon name="x" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>

            <View style={styles.streakInfo}>
              <Icon name="flame" size={48} color="#EF4444" />
              <Text style={styles.streakDays}>{userProgress.streak} Days</Text>
              <Text style={styles.streakSubtext}>Keep your streak alive!</Text>
            </View>

            <View style={styles.calendarPlaceholder}>
              <Icon name="calendar" size={64} color="#D1D5DB" />
              <Text style={styles.calendarText}>
                Calendar view coming soon!
              </Text>
              <Text style={styles.calendarSubtext}>
                Track your daily practice history
              </Text>
            </View>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowStreakCalendar(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Encouraging Message - Jesus for high achievers, Wooly otherwise */}
      {userProgress.level >= 5 ? (
        <CharacterGuide
          character="jesus"
          message={
            userProgress.completedLessons.length >= 20
              ? "You have studied faithfully and it is good. Keep seeking wisdom and knowledge of My Word."
              : "You are growing in knowledge. Keep persevering in your study of Scripture."
          }
          mood="teaching"
        />
      ) : (
        <Wooly
          message="You're doing great! Keep learning and you'll grow stronger! 💪"
          mood="encouraging"
          size="medium"
        />
      )}

      {/* Progress by Category */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progress by Category</Text>
        {Object.entries(userProgress.categoryProgress).map(([category, progress]) => {
          const percentage = progress.lessonsCompleted / (progress.totalLessons || 1) * 100;
          return (
            <View key={category} style={styles.categoryProgress}>
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryName}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Text>
                <Text style={styles.categoryStats}>
                  {progress.lessonsCompleted}/{progress.totalLessons || 0}
                </Text>
              </View>
              <View style={styles.progressBarContainer}>
                <View
                  style={[styles.progressBar, { width: `${percentage}%` }]}
                />
              </View>
            </View>
          );
        })}
      </View>

      {/* Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleSyncToCloud}
        >
          <View style={styles.actionIconContainer}>
            <Icon name="cloud" size={20} color="#3B82F6" />
          </View>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Sync to Cloud</Text>
            <Text style={styles.actionSubtitle}>
              Backup your progress to the cloud
            </Text>
          </View>
          <Icon name="chevron-right" size={20} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleResetProgress}
        >
          <View style={styles.actionIconContainer}>
            <Icon name="rotate-ccw" size={20} color="#F59E0B" />
          </View>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Reset Progress</Text>
            <Text style={styles.actionSubtitle}>
              Start your journey from the beginning
            </Text>
          </View>
          <Icon name="chevron-right" size={20} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.logoutButton]}
          onPress={handleLogout}
        >
          <View style={[styles.actionIconContainer, styles.logoutIconContainer]}>
            <Icon name="log-out" size={20} color="#EF4444" />
          </View>
          <View style={styles.actionContent}>
            <Text style={[styles.actionTitle, styles.logoutText]}>Logout</Text>
            <Text style={styles.actionSubtitle}>
              Sign out of your account
            </Text>
          </View>
          <Icon name="chevron-right" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      {/* App Info */}
      <View style={styles.appInfo}>
        <Text style={styles.appInfoText}>Shepherd Bible Learning App</Text>
        <Text style={styles.appInfoText}>Version 1.0.0</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E3FF', // Light lilac
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#E8E3FF', // Light lilac
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#8B5CF6',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  levelText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  displayName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#6B7280',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    minWidth: '47%',
    backgroundColor: '#E8E3FF', // Light lilac
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },
  statSubtext: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  mainStatsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  mainStatCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  streakActive: {
    borderWidth: 2,
    borderColor: '#EF4444',
  },
  secondaryStatsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  secondaryStatCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  streakInfo: {
    alignItems: 'center',
    marginBottom: 32,
  },
  streakDays: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#EF4444',
    marginTop: 12,
  },
  streakSubtext: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  calendarPlaceholder: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    marginBottom: 24,
  },
  calendarText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B5563',
    marginTop: 16,
  },
  calendarSubtext: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 4,
  },
  closeButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#E8E3FF', // Light lilac
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  categoryProgress: {
    marginBottom: 16,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  categoryStats: {
    fontSize: 14,
    color: '#6B7280',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 4,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  actionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 2,
  },
  actionSubtitle: {
    fontSize: 13,
    color: '#6B7280',
  },
  logoutButton: {
    borderBottomWidth: 0,
  },
  logoutIconContainer: {
    backgroundColor: '#FEE2E2',
  },
  logoutText: {
    color: '#EF4444',
  },
  appInfo: {
    alignItems: 'center',
    paddingTop: 16,
  },
  appInfoText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 4,
  },
});
