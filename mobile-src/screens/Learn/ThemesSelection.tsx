import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather as Icon } from '@expo/vector-icons';
import Wooly from '../../components/Wooly';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Theme {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  lessonCount: number;
}

const themes: Theme[] = [
  {
    id: 'love',
    name: 'Love',
    description: 'God\'s love and loving others',
    icon: 'heart',
    color: '#EF4444',
    lessonCount: 5,
  },
  {
    id: 'faith',
    name: 'Faith',
    description: 'Trust and belief in God',
    icon: 'anchor',
    color: '#3B82F6',
    lessonCount: 5,
  },
  {
    id: 'hope',
    name: 'Hope',
    description: 'Living with eternal perspective',
    icon: 'sunrise',
    color: '#F59E0B',
    lessonCount: 5,
  },
  {
    id: 'peace',
    name: 'Peace',
    description: 'God\'s peace in all circumstances',
    icon: 'cloud',
    color: '#06B6D4',
    lessonCount: 5,
  },
  {
    id: 'wisdom',
    name: 'Wisdom',
    description: 'Biblical wisdom for daily life',
    icon: 'book',
    color: '#8B5CF6',
    lessonCount: 5,
  },
];

export default function ThemesSelection() {
  const navigation = useNavigation<NavigationProp>();

  const handleThemePress = (theme: Theme) => {
    navigation.navigate('ThemesLessons', { themeId: theme.id });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#1F2937" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Biblical Themes</Text>
          <Text style={styles.headerSubtitle}>Explore key spiritual concepts</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Wooly's Welcome */}
        <Wooly
          message="These themes are the wool-derful building blocks of faith! Each one will help you grow closer to God."
          mood="thinking"
        />

        {/* Themes Grid */}
        <View style={styles.grid}>
          {themes.map((theme, index) => (
            <TouchableOpacity
              key={theme.id}
              style={[
                styles.themeCard,
                { borderLeftColor: theme.color, borderLeftWidth: 4 },
              ]}
              onPress={() => handleThemePress(theme)}
              activeOpacity={0.7}
            >
              <View
                style={[styles.themeIcon, { backgroundColor: `${theme.color}20` }]}
              >
                <Icon name={theme.icon} size={32} color={theme.color} />
              </View>
              <View style={styles.themeContent}>
                <Text style={styles.themeName}>{theme.name}</Text>
                <Text style={styles.themeDescription}>{theme.description}</Text>
                <View style={styles.lessonBadge}>
                  <Icon name="layers" size={14} color="#6B7280" />
                  <Text style={styles.lessonCount}>
                    {theme.lessonCount} lessons • 60 questions
                  </Text>
                </View>
              </View>
              <Icon name="chevron-right" size={24} color={theme.color} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Icon name="info" size={20} color="#3B82F6" />
            <Text style={styles.infoTitle}>About Themes</Text>
          </View>
          <Text style={styles.infoText}>
            These thematic lessons help you understand key biblical concepts that appear throughout Scripture. Each theme includes 5 progressive lessons with 12 questions each.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  grid: {
    marginTop: 16,
    gap: 16,
  },
  themeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  themeIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  themeContent: {
    flex: 1,
  },
  themeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  themeDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
    lineHeight: 20,
  },
  lessonBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  lessonCount: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
  },
  infoCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    borderWidth: 2,
    borderColor: '#BFDBFE',
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E40AF',
  },
  infoText: {
    fontSize: 14,
    color: '#1E40AF',
    lineHeight: 20,
  },
});
