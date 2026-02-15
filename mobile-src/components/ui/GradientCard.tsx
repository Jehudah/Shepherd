import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';

type GradientPreset = 'primary' | 'secondary' | 'success' | 'warning' | 'fire' | 'rainbow';

interface GradientCardProps {
  children: React.ReactNode;
  gradient?: string[] | GradientPreset;
  onPress?: () => void;
  style?: ViewStyle;
  animated?: boolean;
  shadowLevel?: 'sm' | 'base' | 'md' | 'lg' | 'xl';
}

export default function GradientCard({
  children,
  gradient = 'primary',
  onPress,
  style,
  animated = true,
  shadowLevel = 'lg',
}: GradientCardProps) {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    if (animated && onPress) {
      Animated.spring(scaleValue, {
        toValue: theme.animations.scale.pressed,
        useNativeDriver: true,
        speed: 50,
      }).start();
    }
  };

  const handlePressOut = () => {
    if (animated && onPress) {
      Animated.spring(scaleValue, {
        toValue: theme.animations.scale.normal,
        useNativeDriver: true,
        speed: 50,
      }).start();
    }
  };

  const getGradientColors = (): string[] => {
    if (Array.isArray(gradient)) {
      return gradient;
    }

    switch (gradient) {
      case 'primary':
        return theme.colors.primary.gradient;
      case 'secondary':
        return theme.colors.secondary.gradient;
      case 'success':
        return theme.colors.success.gradient;
      case 'warning':
        return theme.colors.warning.gradient;
      case 'fire':
        return theme.colors.fire;
      case 'rainbow':
        return theme.colors.rainbow;
      default:
        return theme.colors.primary.gradient;
    }
  };

  const cardStyle: ViewStyle = {
    borderRadius: theme.radius.xl,
    padding: theme.spacing[4],
    overflow: 'hidden',
    ...theme.shadows[shadowLevel],
  };

  const animatedStyle = animated && onPress ? {
    transform: [{ scale: scaleValue }],
  } : {};

  const content = (
    <Animated.View style={[cardStyle, animatedStyle, style]}>
      <LinearGradient
        colors={getGradientColors()}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        {children}
      </LinearGradient>
    </Animated.View>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    borderRadius: theme.radius.xl,
  },
});
