import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Animated,
} from 'react-native';
import { theme } from '../../theme';

type CardVariant = 'default' | 'elevated' | 'outlined';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  onPress?: () => void;
  style?: ViewStyle;
  animated?: boolean;
  shadowLevel?: 'sm' | 'base' | 'md' | 'lg' | 'xl';
}

export default function Card({
  children,
  variant = 'default',
  onPress,
  style,
  animated = true,
  shadowLevel = 'md',
}: CardProps) {
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

  const getCardStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radius.xl,
      padding: theme.spacing[4],
    };

    switch (variant) {
      case 'elevated':
        Object.assign(baseStyle, theme.shadows[shadowLevel]);
        break;
      case 'outlined':
        baseStyle.borderWidth = 1;
        baseStyle.borderColor = theme.colors.border.light;
        break;
      default:
        Object.assign(baseStyle, theme.shadows.base);
    }

    return baseStyle;
  };

  const animatedStyle = animated && onPress ? {
    transform: [{ scale: scaleValue }],
  } : {};

  const content = (
    <Animated.View style={[getCardStyle(), animatedStyle, style]}>
      {children}
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
