import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';

interface StatCardProps {
  icon: keyof typeof Feather.glyphMap;
  value: number | string;
  label: string;
  gradient?: string[];
  iconBackgroundColor?: string;
  animateValue?: boolean;
  style?: ViewStyle;
}

export default function StatCard({
  icon,
  value,
  label,
  gradient,
  iconBackgroundColor = theme.colors.primary[100],
  animateValue = true,
  style,
}: StatCardProps) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const numericValue = typeof value === 'number' ? value : 0;

  useEffect(() => {
    if (animateValue && typeof value === 'number') {
      Animated.timing(animatedValue, {
        toValue: numericValue,
        duration: theme.animations.countUp.duration,
        useNativeDriver: false,
      }).start();
    }
  }, [numericValue, animateValue]);

  const displayValue = animateValue && typeof value === 'number'
    ? animatedValue.interpolate({
        inputRange: [0, numericValue],
        outputRange: ['0', numericValue.toString()],
      })
    : value;

  return (
    <View style={[styles.container, style]}>
      {/* Icon Container */}
      {gradient ? (
        <LinearGradient
          colors={gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.iconContainer}
        >
          <Feather name={icon} size={24} color="#FFFFFF" />
        </LinearGradient>
      ) : (
        <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
          <Feather
            name={icon}
            size={24}
            color={
              gradient
                ? '#FFFFFF'
                : iconBackgroundColor === theme.colors.primary[100]
                ? theme.colors.primary[600]
                : theme.colors.text.primary
            }
          />
        </View>
      )}

      {/* Stats Content */}
      <View style={styles.content}>
        {animateValue && typeof value === 'number' ? (
          <Animated.Text style={styles.value}>
            {animatedValue.interpolate({
              inputRange: [0, numericValue],
              outputRange: [0, numericValue],
            }).interpolate((val) => Math.floor(val as number).toString())}
          </Animated.Text>
        ) : (
          <Text style={styles.value}>{value}</Text>
        )}
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing[4],
    ...theme.shadows.base,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing[3],
  },
  content: {
    flex: 1,
  },
  value: {
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginBottom: 2,
  },
  label: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },
});
