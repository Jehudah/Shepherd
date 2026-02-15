import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
type HapticType = 'light' | 'medium' | 'heavy' | 'none';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  icon?: keyof typeof Feather.glyphMap;
  iconPosition?: 'left' | 'right';
  haptic?: HapticType;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  children,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  haptic = 'light',
  style,
  textStyle,
}: ButtonProps) {
  const handlePress = async () => {
    if (loading || disabled) return;

    // Haptic feedback
    if (haptic !== 'none') {
      switch (haptic) {
        case 'light':
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          break;
        case 'medium':
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          break;
        case 'heavy':
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          break;
      }
    }

    onPress();
  };

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: theme.radius.base,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    };

    // Size
    switch (size) {
      case 'sm':
        baseStyle.paddingVertical = theme.spacing[2];
        baseStyle.paddingHorizontal = theme.spacing[3];
        baseStyle.minHeight = 36;
        break;
      case 'lg':
        baseStyle.paddingVertical = theme.spacing[4];
        baseStyle.paddingHorizontal = theme.spacing[6];
        baseStyle.minHeight = 56;
        break;
      default: // md
        baseStyle.paddingVertical = theme.spacing[3];
        baseStyle.paddingHorizontal = theme.spacing[5];
        baseStyle.minHeight = 44;
    }

    // Variant
    switch (variant) {
      case 'primary':
        baseStyle.backgroundColor = theme.colors.primary[500];
        break;
      case 'secondary':
        baseStyle.backgroundColor = theme.colors.secondary[500];
        break;
      case 'danger':
        baseStyle.backgroundColor = theme.colors.error[500];
        break;
      case 'outline':
        baseStyle.backgroundColor = 'transparent';
        baseStyle.borderWidth = 2;
        baseStyle.borderColor = theme.colors.primary[500];
        break;
      case 'ghost':
        baseStyle.backgroundColor = 'transparent';
        break;
    }

    // Disabled state
    if (disabled) {
      baseStyle.backgroundColor = theme.colors.disabled;
      baseStyle.borderColor = theme.colors.disabled;
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
        baseStyle.fontSize = theme.typography.fontSize.sm;
        break;
      case 'lg':
        baseStyle.fontSize = theme.typography.fontSize.lg;
        break;
      default: // md
        baseStyle.fontSize = theme.typography.fontSize.md;
    }

    // Variant color
    switch (variant) {
      case 'outline':
        baseStyle.color = disabled ? theme.colors.text.tertiary : theme.colors.primary[500];
        break;
      case 'ghost':
        baseStyle.color = disabled ? theme.colors.text.tertiary : theme.colors.primary[500];
        break;
      default:
        baseStyle.color = theme.colors.text.inverse;
    }

    return baseStyle;
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 16;
      case 'lg':
        return 24;
      default:
        return 20;
    }
  };

  const iconColor = variant === 'outline' || variant === 'ghost'
    ? (disabled ? theme.colors.text.tertiary : theme.colors.primary[500])
    : theme.colors.text.inverse;

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      style={[getButtonStyle(), style]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost' ? theme.colors.primary[500] : '#FFFFFF'}
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <Feather name={icon} size={getIconSize()} color={iconColor} />
          )}
          <Text style={[getTextStyle(), textStyle]}>{children}</Text>
          {icon && iconPosition === 'right' && (
            <Feather name={icon} size={getIconSize()} color={iconColor} />
          )}
        </>
      )}
    </TouchableOpacity>
  );
}
