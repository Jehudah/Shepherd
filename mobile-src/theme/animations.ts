/**
 * Animation System
 *
 * Timing, easing, and constants for consistent animations
 */

// Animation durations (in milliseconds)
export const duration = {
  fastest: 100,
  fast: 150,
  normal: 250,
  slow: 350,
  slowest: 500,
} as const;

// Animation easing curves
export const easing = {
  linear: 'linear',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
} as const;

// Common animation configs
export const animations = {
  // Fade in/out
  fade: {
    duration: duration.normal,
    easing: easing.easeInOut,
  },

  // Scale (for button press)
  scale: {
    pressed: 0.97,
    normal: 1.0,
    duration: duration.fastest,
  },

  // Slide transitions
  slide: {
    duration: duration.normal,
    easing: easing.easeOut,
  },

  // Stagger intervals (for list items)
  stagger: {
    short: 50,   // 50ms between items
    medium: 100, // 100ms between items
    long: 150,   // 150ms between items
  },

  // Pulse (for notifications, streaks)
  pulse: {
    scale: { min: 1.0, max: 1.1 },
    duration: duration.slow,
  },

  // Bounce (for achievements, unlocks)
  bounce: {
    duration: duration.slow,
    springiness: 0.7,
  },

  // Shimmer (for skeletons)
  shimmer: {
    duration: 1500, // 1.5s for full shimmer cycle
  },

  // Count-up animation
  countUp: {
    duration: duration.slowest,
  },
} as const;

export type Animations = typeof animations;
