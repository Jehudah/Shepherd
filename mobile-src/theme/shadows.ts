/**
 * Shadow/Elevation System
 *
 * 5-level elevation system for depth perception
 * Includes both iOS (shadow) and Android (elevation) properties
 */

export const shadows = {
  none: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },

  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  base: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },

  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },

  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
  },
} as const;

export type Shadows = typeof shadows;

// Utility to reduce shadow for press states
export const reduceShadow = (shadow: keyof typeof shadows) => {
  if (shadow === 'none' || shadow === 'sm') return shadows.none;
  if (shadow === 'base') return shadows.sm;
  if (shadow === 'md') return shadows.base;
  if (shadow === 'lg') return shadows.md;
  return shadows.lg;
};
