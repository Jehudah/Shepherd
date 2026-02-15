import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';

interface ProgressBarProps {
  progress: number; // 0-100
  height?: number;
  gradient?: string[];
  backgroundColor?: string;
  color?: string;
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
  style?: ViewStyle;
}

export default function ProgressBar({
  progress,
  height = 8,
  gradient,
  backgroundColor = theme.colors.gray[200],
  color = theme.colors.primary[500],
  showLabel = false,
  label,
  animated = true,
  style,
}: ProgressBarProps) {
  const animatedWidth = useRef(new Animated.Value(0)).current;
  const clampedProgress = Math.min(100, Math.max(0, progress));

  useEffect(() => {
    if (animated) {
      Animated.spring(animatedWidth, {
        toValue: clampedProgress,
        useNativeDriver: false,
        speed: 12,
        bounciness: 4,
      }).start();
    }
  }, [clampedProgress, animated]);

  const width = animated
    ? animatedWidth.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
      })
    : `${clampedProgress}%`;

  return (
    <View style={[styles.container, style]}>
      {/* Label */}
      {(showLabel || label) && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label || `${Math.round(clampedProgress)}%`}</Text>
        </View>
      )}

      {/* Progress Bar */}
      <View
        style={[
          styles.track,
          {
            height,
            backgroundColor,
            borderRadius: height / 2,
          },
        ]}
      >
        {gradient ? (
          <Animated.View
            style={[
              styles.fill,
              {
                width,
                borderRadius: height / 2,
                overflow: 'hidden',
              },
            ]}
          >
            <LinearGradient
              colors={gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1 }}
            />
          </Animated.View>
        ) : (
          <Animated.View
            style={[
              styles.fill,
              {
                width,
                backgroundColor: color,
                borderRadius: height / 2,
              },
            ]}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing[2],
  },
  label: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text.secondary,
  },
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});
