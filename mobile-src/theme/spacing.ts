/**
 * Spacing System
 *
 * Based on 4px grid system for consistent spacing throughout the app
 */

export const spacing = {
  0: 0,
  1: 4,    // 4px
  2: 8,    // 8px
  3: 12,   // 12px
  4: 16,   // 16px
  5: 20,   // 20px
  6: 24,   // 24px
  7: 28,   // 28px
  8: 32,   // 32px
  10: 40,  // 40px
  12: 48,  // 48px
  14: 56,  // 56px
  16: 64,  // 64px
  20: 80,  // 80px
  24: 96,  // 96px
  32: 128, // 128px
  40: 160, // 160px
  48: 192, // 192px
  56: 224, // 224px
  64: 256, // 256px
} as const;

export type Spacing = typeof spacing;

// Common spacing aliases for better semantics
export const space = {
  xs: spacing[2],      // 8px
  sm: spacing[3],      // 12px
  md: spacing[4],      // 16px
  lg: spacing[6],      // 24px
  xl: spacing[8],      // 32px
  '2xl': spacing[12],  // 48px
  '3xl': spacing[16],  // 64px
} as const;
