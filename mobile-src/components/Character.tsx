import React from 'react';
import { Image, StyleSheet, ImageStyle } from 'react-native';

export type CharacterName =
  | 'jesus'
  | 'sheep'
  | 'david'
  | 'john'
  | 'peter'
  | 'paul'
  | 'moses'
  | 'elijah'
  | 'mary-magdalene'
  | 'king-solomon'
  | 'james'
  | 'isaiah'
  | 'thomas'
  | 'matthew'
  | 'luke'
  | 'king-saul'
  | 'king-hezekiah';

// Map character names to their PNG files
const characterImages: Record<CharacterName, any> = {
  'jesus': require('../assets/characters/Jesus.png'),
  'sheep': require('../assets/characters/Wooly.png'),
  'david': require('../assets/characters/King David.png'),
  'john': require('../assets/characters/John.png'),
  'peter': require('../assets/characters/Peter.png'),
  'paul': require('../assets/characters/Paul.png'),
  'moses': require('../assets/characters/Moses.png'),
  'elijah': require('../assets/characters/Elijah.png'),
  'mary-magdalene': require('../assets/characters/Mary Magdalene.png'),
  'king-solomon': require('../assets/characters/King Solomon.png'),
  'james': require('../assets/characters/James.png'),
  'isaiah': require('../assets/characters/Isaiah.png'),
  'thomas': require('../assets/characters/Wooly.png'), // Fallback to Wooly (missing)
  'matthew': require('../assets/characters/Matthew.png'),
  'luke': require('../assets/characters/Luke.png'),
  'king-saul': require('../assets/characters/King Saul.png'),
  'king-hezekiah': require('../assets/characters/King Hezekiah.png'),
};

interface CharacterProps {
  name: CharacterName;
  size?: number;
  style?: ImageStyle;
}

export default function Character({ name, size = 80, style }: CharacterProps) {
  return (
    <Image
      source={characterImages[name]}
      style={[
        styles.image,
        {
          width: size,
          height: size,
        },
        style,
      ]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'transparent',
  },
});
