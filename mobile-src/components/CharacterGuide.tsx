import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Character, { CharacterName } from './Character';
import { theme } from '../theme';

type Mood = 'encouraging' | 'celebrating' | 'teaching' | 'questioning';

interface CharacterGuideProps {
  character: CharacterName;
  message: string;
  mood?: Mood;
  style?: ViewStyle;
}

const moodColors: Record<Mood, string[]> = {
  encouraging: ['#FFFFFF', '#FFFFFF'],
  celebrating: ['#FFFFFF', '#FFFFFF'],
  teaching: ['#FFFFFF', '#FFFFFF'],
  questioning: ['#FFFFFF', '#FFFFFF'],
};

export default function CharacterGuide({
  character,
  message,
  mood = 'encouraging',
  style,
}: CharacterGuideProps) {
  const gradientColors = moodColors[mood];

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.container, style]}
    >
      <View style={styles.content}>
        <Character name={character} size={60} style={styles.character} />
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.radius.xl,
    padding: theme.spacing[4],
    marginHorizontal: theme.spacing[4],
    marginVertical: theme.spacing[3],
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[3],
  },
  character: {
    flexShrink: 0,
  },
  messageContainer: {
    flex: 1,
  },
  message: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.primary,
    lineHeight: 20,
  },
});
