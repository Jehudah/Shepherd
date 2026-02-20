import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ViewStyle, Animated } from 'react-native';
import Character from './Character';
import { theme } from '../theme';

interface WoolyProps {
  message: string;
  mood?: 'happy' | 'excited' | 'thinking' | 'celebrating' | 'encouraging';
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
}

/**
 * Wooly - The friendly sheep guide who helps users through their learning journey
 * Now with actual character image and cute animations!
 */
export default function Wooly({ message, mood = 'happy', size = 'medium', style }: WoolyProps) {
  // Animation values
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const bubbleAnim = useRef(new Animated.Value(0)).current;
  const wiggleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Initial entrance animation: bounce in
    Animated.spring(bounceAnim, {
      toValue: 1,
      tension: 50,
      friction: 5,
      useNativeDriver: true,
    }).start();

    // Bubble fade and slide in
    Animated.timing(bubbleAnim, {
      toValue: 1,
      duration: 400,
      delay: 150,
      useNativeDriver: true,
    }).start();

    // Continuous gentle wiggle animation
    const wiggleLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(wiggleAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim, {
          toValue: -1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    );

    // Start wiggle after a brief delay
    const wiggleTimer = setTimeout(() => wiggleLoop.start(), 800);

    return () => {
      clearTimeout(wiggleTimer);
      wiggleLoop.stop();
    };
  }, []);

  const getSheepSize = () => {
    switch (size) {
      case 'small':
        return 40;
      case 'large':
        return 80;
      default:
        return 60;
    }
  };

  const getMessageStyle = () => {
    switch (size) {
      case 'small':
        return styles.messageSmall;
      case 'large':
        return styles.messageLarge;
      default:
        return styles.messageMedium;
    }
  };

  const getBubbleColor = () => {
    return '#FFFFFF';
  };

  // Animated transformations
  const bounceTransform = {
    transform: [
      {
        scale: bounceAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.3, 1],
        }),
      },
      {
        translateY: bounceAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0],
        }),
      },
    ],
  };

  const wiggleTransform = {
    transform: [
      {
        rotate: wiggleAnim.interpolate({
          inputRange: [-1, 1],
          outputRange: ['-5deg', '5deg'],
        }),
      },
    ],
  };

  const bubbleTransform = {
    opacity: bubbleAnim,
    transform: [
      {
        translateX: bubbleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-20, 0],
        }),
      },
    ],
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.View style={[styles.sheepContainer, bounceTransform, wiggleTransform]}>
        <Character name="sheep" size={getSheepSize()} />
      </Animated.View>
      <Animated.View style={[styles.bubble, { backgroundColor: getBubbleColor() }, bubbleTransform]}>
        <View style={[styles.bubbleArrow, { borderRightColor: getBubbleColor() }]} />
        <Text style={[styles.message, getMessageStyle()]}>{message}</Text>
        <Text style={styles.signature}>- Wooly 🐑</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: theme.spacing[3],
  },
  sheepContainer: {
    marginRight: theme.spacing[2],
    marginTop: theme.spacing[2],
  },
  bubble: {
    flex: 1,
    borderRadius: theme.radius.lg,
    padding: theme.spacing[4],
    borderWidth: 2,
    borderColor: theme.colors.border.light,
    ...theme.shadows.base,
    position: 'relative',
  },
  bubbleArrow: {
    position: 'absolute',
    left: -10,
    top: 20,
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: 'transparent',
    borderBottomWidth: 10,
    borderBottomColor: 'transparent',
    borderRightWidth: 10,
  },
  message: {
    color: theme.colors.text.primary,
    lineHeight: 22,
  },
  messageSmall: {
    fontSize: theme.typography.fontSize.sm,
  },
  messageMedium: {
    fontSize: theme.typography.fontSize.md,
  },
  messageLarge: {
    fontSize: theme.typography.fontSize.lg,
  },
  signature: {
    fontSize: theme.typography.fontSize.xs,
    fontStyle: 'italic',
    color: theme.colors.text.secondary,
    marginTop: theme.spacing[2],
    textAlign: 'right',
  },
});

/**
 * WoolyTip - A compact tip from Wooly with a cute bounce
 */
export function WoolyTip({ message, style }: { message: string; style?: ViewStyle }) {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension: 80,
      friction: 6,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        tipStyles.tipContainer,
        style,
        {
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <Character name="sheep" size={32} />
      <View style={tipStyles.tipContent}>
        <Text style={tipStyles.tipLabel}>Wooly's Tip:</Text>
        <Text style={tipStyles.tipMessage}>{message}</Text>
      </View>
    </Animated.View>
  );
}

const tipStyles = StyleSheet.create({
  tipContainer: {
    flexDirection: 'row',
    backgroundColor: '#EEF2FF',
    borderRadius: theme.radius.md,
    padding: theme.spacing[3],
    borderWidth: 2,
    borderColor: '#C7D2FE',
    alignItems: 'center',
    gap: theme.spacing[2],
  },
  tipContent: {
    flex: 1,
  },
  tipLabel: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.bold,
    color: '#4338CA',
    marginBottom: 2,
  },
  tipMessage: {
    fontSize: theme.typography.fontSize.sm,
    color: '#3730A3',
    lineHeight: 18,
  },
});
