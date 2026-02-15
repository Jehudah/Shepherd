/**
 * Border Radius System
 *
 * Increased border radius for softer, more friendly shapes
 * Compared to previous 16px standard
 */

export const radius = {
  none: 0,
  xs: 6,     // Small badges, chips
  sm: 8,     // Small buttons, inputs
  base: 12,  // Default buttons
  md: 16,    // Icon containers, medium cards
  lg: 20,    // Large cards (upgrade from 16px)
  xl: 24,    // Featured cards, primary cards (upgrade from 16px)
  '2xl': 28, // Extra large cards
  '3xl': 32, // Hero cards
  pill: 9999, // Full pill shape (badges, pills)
  circle: 9999, // Full circles (avatars, icon containers)
} as const;

export type Radius = typeof radius;
