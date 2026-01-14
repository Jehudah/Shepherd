import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface WoolyProps {
  message: string;
  mood?: 'happy' | 'excited' | 'thinking' | 'celebrating' | 'encouraging';
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
}

/**
 * Wooly - The friendly sheep guide who helps users through their learning journey
 */
export default function Wooly({ message, mood = 'happy', size = 'medium', style }: WoolyProps) {
  const getSheepEmoji = () => {
    switch (mood) {
      case 'excited':
        return '🐑✨';
      case 'thinking':
        return '🐑💭';
      case 'celebrating':
        return '🐑🎉';
      case 'encouraging':
        return '🐑💪';
      default:
        return '🐑';
    }
  };

  const getSheepSize = () => {
    switch (size) {
      case 'small':
        return 32;
      case 'large':
        return 64;
      default:
        return 48;
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

  return (
    <View style={[styles.container, style]}>
      <View style={styles.sheepContainer}>
        <Text style={[styles.sheep, { fontSize: getSheepSize() }]}>
          {getSheepEmoji()}
        </Text>
      </View>
      <View style={styles.bubble}>
        <View style={styles.bubbleArrow} />
        <Text style={[styles.message, getMessageStyle()]}>{message}</Text>
        <Text style={styles.signature}>- Wooly</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 12,
  },
  sheepContainer: {
    marginRight: 8,
    marginTop: 8,
  },
  sheep: {
    fontSize: 48,
  },
  bubble: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    borderRightColor: '#FFFFFF',
  },
  message: {
    color: '#1F2937',
    lineHeight: 22,
  },
  messageSmall: {
    fontSize: 13,
  },
  messageMedium: {
    fontSize: 15,
  },
  messageLarge: {
    fontSize: 17,
  },
  signature: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'right',
  },
});

/**
 * WoolyTip - A compact tip from Wooly
 */
export function WoolyTip({ message, style }: { message: string; style?: ViewStyle }) {
  return (
    <View style={[styles.tipContainer, style]}>
      <Text style={styles.tipSheep}>🐑</Text>
      <View style={styles.tipContent}>
        <Text style={styles.tipLabel}>Wooly's Tip:</Text>
        <Text style={styles.tipMessage}>{message}</Text>
      </View>
    </View>
  );
}

const tipStyles = StyleSheet.create({
  tipContainer: {
    flexDirection: 'row',
    backgroundColor: '#EEF2FF',
    borderRadius: 12,
    padding: 12,
    borderWidth: 2,
    borderColor: '#C7D2FE',
    alignItems: 'center',
  },
  tipSheep: {
    fontSize: 24,
    marginRight: 10,
  },
  tipContent: {
    flex: 1,
  },
  tipLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4338CA',
    marginBottom: 2,
  },
  tipMessage: {
    fontSize: 14,
    color: '#3730A3',
    lineHeight: 18,
  },
});

// Add tip styles to main styles
Object.assign(styles, tipStyles);
