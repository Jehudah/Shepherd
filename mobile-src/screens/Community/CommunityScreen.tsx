import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '../../types';
import Icon from 'react-native-vector-icons/Feather';
import { useStore } from '../../store/useStore';
import Wooly from '../../components/Wooly';

export default function CommunityScreen() {
  const navigation = useNavigation<NavigationProp>();
  const userProgress = useStore((state) => state.userProgress);

  const handleNavigate = (screen: 'Friends' | 'Leaderboard' | 'StudyGroups' | 'PrayerRequests' | 'Forums') => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community</Text>
        <Text style={styles.headerSubtitle}>
          Connect with fellow Bible learners
        </Text>
      </View>

      {/* Wooly Welcome */}
      <Wooly
        message="Learning together is more fun! Connect with friends and encourage each other in your faith journey!"
        mood="excited"
        size="small"
      />

      {/* Available Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Connect & Compete</Text>

        <TouchableOpacity
          style={styles.availableCard}
          onPress={() => handleNavigate('Friends')}
        >
          <View style={[styles.availableIcon, { backgroundColor: '#DBEAFE' }]}>
            <Icon name="users" size={28} color="#3B82F6" />
          </View>
          <View style={styles.availableContent}>
            <Text style={styles.availableTitle}>Friends</Text>
            <Text style={styles.availableDescription}>
              Add friends, see their progress, and encourage each other
            </Text>
          </View>
          <Icon name="chevron-right" size={24} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.availableCard}
          onPress={() => handleNavigate('Leaderboard')}
        >
          <View style={[styles.availableIcon, { backgroundColor: '#FEF3C7' }]}>
            <Icon name="trophy" size={28} color="#F59E0B" />
          </View>
          <View style={styles.availableContent}>
            <Text style={styles.availableTitle}>Leaderboard</Text>
            <Text style={styles.availableDescription}>
              See how you rank among friends and globally
            </Text>
          </View>
          <Icon name="chevron-right" size={24} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      {/* More Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Community Features</Text>

        <TouchableOpacity
          style={styles.availableCard}
          onPress={() => handleNavigate('StudyGroups')}
        >
          <View style={[styles.availableIcon, { backgroundColor: '#FCE7F3' }]}>
            <Icon name="users" size={28} color="#EC4899" />
          </View>
          <View style={styles.availableContent}>
            <Text style={styles.availableTitle}>Study Groups</Text>
            <Text style={styles.availableDescription}>
              Form or join study groups to learn together
            </Text>
          </View>
          <Icon name="chevron-right" size={24} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.availableCard}
          onPress={() => handleNavigate('PrayerRequests')}
        >
          <View style={[styles.availableIcon, { backgroundColor: '#E0E7FF' }]}>
            <Icon name="heart" size={28} color="#6366F1" />
          </View>
          <View style={styles.availableContent}>
            <Text style={styles.availableTitle}>Prayer Requests</Text>
            <Text style={styles.availableDescription}>
              Share prayer requests and pray for others
            </Text>
          </View>
          <Icon name="chevron-right" size={24} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.availableCard}
          onPress={() => handleNavigate('Forums')}
        >
          <View style={[styles.availableIcon, { backgroundColor: '#FEE2E2' }]}>
            <Icon name="message-circle" size={28} color="#EF4444" />
          </View>
          <View style={styles.availableContent}>
            <Text style={styles.availableTitle}>Discussion Forums</Text>
            <Text style={styles.availableDescription}>
              Ask questions and share biblical insights
            </Text>
          </View>
          <Icon name="chevron-right" size={24} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      {/* Your Stats Preview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Stats</Text>
        <View style={styles.statsCard}>
          <View style={styles.statRow}>
            <View style={styles.stat}>
              <Icon name="zap" size={20} color="#F59E0B" />
              <Text style={styles.statValue}>{userProgress.totalXP.toLocaleString()}</Text>
              <Text style={styles.statLabel}>Total XP</Text>
            </View>
            <View style={styles.stat}>
              <Icon name="award" size={20} color="#8B5CF6" />
              <Text style={styles.statValue}>{userProgress.level}</Text>
              <Text style={styles.statLabel}>Level</Text>
            </View>
          </View>
          <View style={styles.statRow}>
            <View style={styles.stat}>
              <Icon name="check-circle" size={20} color="#10B981" />
              <Text style={styles.statValue}>{userProgress.completedLessons.length}</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
            <View style={styles.stat}>
              <Icon name="flame" size={20} color="#EF4444" />
              <Text style={styles.statValue}>{userProgress.currentStreak}</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Spacing */}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB'
  },
  content: {
    paddingBottom: 40
  },
  header: {
    padding: 20,
    paddingBottom: 10
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280'
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    marginTop: 8
  },
  availableCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  availableIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16
  },
  availableContent: {
    flex: 1
  },
  availableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4
  },
  availableDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 18
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  featureContent: {
    flex: 1
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4
  },
  featureDescription: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18
  },
  statsCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2
  },
  statRow: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 12
  },
  stat: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 8,
    marginBottom: 4
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500'
  },
  bottomSpacing: {
    height: 20
  }
});
