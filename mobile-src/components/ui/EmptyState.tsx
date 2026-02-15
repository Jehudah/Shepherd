import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../theme';
import Button from './Button';

interface EmptyStateProps {
  icon?: keyof typeof Feather.glyphMap;
  emoji?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  style?: ViewStyle;
}

export default function EmptyState({
  icon,
  emoji,
  title,
  description,
  actionLabel,
  onAction,
  style,
}: EmptyStateProps) {
  return (
    <View style={[styles.container, style]}>
      {/* Icon or Emoji */}
      {emoji ? (
        <Text style={styles.emoji}>{emoji}</Text>
      ) : icon ? (
        <View style={styles.iconContainer}>
          <Feather name={icon} size={48} color={theme.colors.text.tertiary} />
        </View>
      ) : null}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Description */}
      {description && <Text style={styles.description}>{description}</Text>}

      {/* Action Button */}
      {actionLabel && onAction && (
        <Button
          onPress={onAction}
          variant="primary"
          size="md"
          style={styles.button}
        >
          {actionLabel}
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing[6],
  },
  emoji: {
    fontSize: 64,
    marginBottom: theme.spacing[4],
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: theme.radius.circle,
    backgroundColor: theme.colors.gray[100],
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing[4],
  },
  title: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing[2],
  },
  description: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 320,
    marginBottom: theme.spacing[6],
  },
  button: {
    minWidth: 160,
  },
});
