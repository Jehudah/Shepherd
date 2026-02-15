import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  success?: boolean;
  leftIcon?: keyof typeof Feather.glyphMap;
  rightIcon?: keyof typeof Feather.glyphMap;
  onRightIconPress?: () => void;
  showClearButton?: boolean;
  containerStyle?: ViewStyle;
}

export default function Input({
  label,
  error,
  success = false,
  leftIcon,
  rightIcon,
  onRightIconPress,
  showClearButton = false,
  value,
  onChangeText,
  containerStyle,
  secureTextEntry,
  ...textInputProps
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleClear = () => {
    if (onChangeText) {
      onChangeText('');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getInputContainerStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radius.base,
      borderWidth: 2,
      paddingHorizontal: theme.spacing[3],
      minHeight: 48,
    };

    // Border color based on state
    if (error) {
      baseStyle.borderColor = theme.colors.error[500];
    } else if (success) {
      baseStyle.borderColor = theme.colors.success[500];
    } else if (isFocused) {
      baseStyle.borderColor = theme.colors.primary[500];
      Object.assign(baseStyle, {
        ...theme.shadows.sm,
        shadowColor: theme.colors.primary[500],
      });
    } else {
      baseStyle.borderColor = theme.colors.border.light;
    }

    return baseStyle;
  };

  const getIconColor = () => {
    if (error) return theme.colors.error[500];
    if (success) return theme.colors.success[500];
    if (isFocused) return theme.colors.primary[500];
    return theme.colors.text.tertiary;
  };

  const showPasswordToggle = secureTextEntry !== undefined;
  const showClear = showClearButton && value && value.length > 0 && !showPasswordToggle;

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={getInputContainerStyle()}>
        {leftIcon && (
          <Feather
            name={leftIcon}
            size={20}
            color={getIconColor()}
            style={styles.leftIcon}
          />
        )}

        <TextInput
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          placeholderTextColor={theme.colors.placeholder}
          style={styles.input}
          {...textInputProps}
        />

        {showPasswordToggle && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconButton}>
            <Feather
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              color={getIconColor()}
            />
          </TouchableOpacity>
        )}

        {showClear && (
          <TouchableOpacity onPress={handleClear} style={styles.iconButton}>
            <Feather name="x-circle" size={20} color={theme.colors.text.tertiary} />
          </TouchableOpacity>
        )}

        {error && (
          <Feather name="alert-circle" size={20} color={theme.colors.error[500]} />
        )}

        {success && !error && (
          <Feather name="check-circle" size={20} color={theme.colors.success[500]} />
        )}

        {rightIcon && !showPasswordToggle && !showClear && (
          <TouchableOpacity onPress={onRightIconPress} style={styles.iconButton}>
            <Feather name={rightIcon} size={20} color={getIconColor()} />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing[4],
  },
  label: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[2],
  },
  input: {
    flex: 1,
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text.primary,
    paddingVertical: theme.spacing[2],
  },
  leftIcon: {
    marginRight: theme.spacing[2],
  },
  iconButton: {
    marginLeft: theme.spacing[2],
  },
  errorText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.error[500],
    marginTop: theme.spacing[1],
  },
});
