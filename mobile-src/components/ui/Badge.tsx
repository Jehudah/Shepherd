import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../theme';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'neutral';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: keyof typeof Feather.glyphMap;
  pill?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  pill = false,
  style,
  textStyle,
}: BadgeProps) {
  const getBadgeStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      gap: 4,
      borderRadius: pill ? theme.radius.pill : theme.radius.sm,
    };

    // Size
    switch (size) {
      case 'sm':
        baseStyle.paddingVertical = 2;
        baseStyle.paddingHorizontal = theme.spacing[2];
        break;
      case 'lg':
        baseStyle.paddingVertical = theme.spacing[2];
        baseStyle.paddingHorizontal = theme.spacing[4];
        break;
      default: // md
        baseStyle.paddingVertical = 4;
        baseStyle.paddingHorizontal = theme.spacing[3];
    }

    // Variant colors
    switch (variant) {
      case 'primary':
        baseStyle.backgroundColor = theme.colors.primary[100];
        break;
      case 'success':
        baseStyle.backgroundColor = theme.colors.success[100];
        break;
      case 'warning':
        baseStyle.backgroundColor = theme.colors.warning[100];
        break;
      case 'error':
        baseStyle.backgroundColor = theme.colors.error[100];
        break;
      case 'neutral':
        baseStyle.backgroundColor = theme.colors.gray[100];
        break;
    }

    return baseStyle;
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      fontWeight: theme.typography.fontWeight.semibold,
    };

    // Size
    switch (size) {
      case 'sm':
        baseStyle.fontSize = theme.typography.fontSize.xs;
        break;
      case 'lg':
        baseStyle.fontSize = theme.typography.fontSize.base;
        break;
      default: // md
        baseStyle.fontSize = theme.typography.fontSize.sm;
    }

    // Variant colors
    switch (variant) {
      case 'primary':
        baseStyle.color = theme.colors.primary[600];
        break;
      case 'success':
        baseStyle.color = theme.colors.success[600];
        break;
      case 'warning':
        baseStyle.color = theme.colors.warning[600];
        break;
      case 'error':
        baseStyle.color = theme.colors.error[600];
        break;
      case 'neutral':
        baseStyle.color = theme.colors.gray[700];
        break;
    }

    return baseStyle;
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 12;
      case 'lg':
        return 16;
      default:
        return 14;
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case 'primary':
        return theme.colors.primary[600];
      case 'success':
        return theme.colors.success[600];
      case 'warning':
        return theme.colors.warning[600];
      case 'error':
        return theme.colors.error[600];
      case 'neutral':
        return theme.colors.gray[700];
    }
  };

  return (
    <View style={[getBadgeStyle(), style]}>
      {icon && <Feather name={icon} size={getIconSize()} color={getIconColor()} />}
      <Text style={[getTextStyle(), textStyle]}>{children}</Text>
    </View>
  );
}
