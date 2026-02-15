/**
 * Main Theme Export
 *
 * Centralized design system for the Shepherd app
 * Provides colors, spacing, typography, shadows, and animation constants
 */

import { colors } from './colors';
import { spacing, space } from './spacing';
import { radius } from './radius';
import { shadows, reduceShadow } from './shadows';
import { fontSize, fontWeight, lineHeight, textStyles } from './typography';
import { duration, easing, animations } from './animations';

export const theme = {
  colors,
  spacing,
  space,
  radius,
  shadows,
  typography: {
    fontSize,
    fontWeight,
    lineHeight,
    textStyles,
  },
  animations: {
    duration,
    easing,
    ...animations,
  },
} as const;

// Export utilities
export { reduceShadow };

// Export individual modules for convenience
export {
  colors,
  spacing,
  space,
  radius,
  shadows,
  fontSize,
  fontWeight,
  lineHeight,
  textStyles,
  duration,
  easing,
  animations,
};

// Type exports
export type Theme = typeof theme;
