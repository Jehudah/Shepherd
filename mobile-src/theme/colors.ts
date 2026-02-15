/**
 * Color System - Playful & Modern Palette
 *
 * Includes semantic colors with gradient pairs for playful, modern design
 */

export const colors = {
  // Primary Blue (Learn, Featured)
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    500: '#3B82F6',
    600: '#2563EB',
    gradient: ['#3B82F6', '#06B6D4'], // Blue → Cyan
  },

  // Secondary Purple (Achievements, Special Features)
  secondary: {
    50: '#E8E3FF',
    100: '#EDE9FE',
    500: '#8B5CF6',
    600: '#7C3AED',
    gradient: ['#8B5CF6', '#EC4899'], // Purple → Pink
  },

  // Success Green (Streaks, Correct Answers)
  success: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    500: '#10B981',
    600: '#059669',
    gradient: ['#10B981', '#06B6D4'], // Green → Cyan
  },

  // Warning Amber (XP, Alerts)
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    500: '#F59E0B',
    600: '#D97706',
    gradient: ['#F59E0B', '#EF4444'], // Amber → Red
  },

  // Error/Danger Red (Memorize, Incorrect, Errors)
  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    500: '#EF4444',
    600: '#DC2626',
    gradient: ['#EF4444', '#DC2626'], // Red → Dark Red
  },

  // Cyan (Study, Articles)
  cyan: {
    50: '#ECFEFF',
    100: '#CFFAFE',
    500: '#06B6D4',
    600: '#0891B2',
    gradient: ['#06B6D4', '#3B82F6'], // Cyan → Blue
  },

  // Pink (Community, Social)
  pink: {
    50: '#FDF2F8',
    100: '#FCE7F3',
    500: '#EC4899',
    600: '#DB2777',
    gradient: ['#EC4899', '#8B5CF6'], // Pink → Purple
  },

  // Neutral/Gray Scale
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Special Gradients
  rainbow: ['#3B82F6', '#8B5CF6', '#EC4899'], // For special celebrations
  fire: ['#F59E0B', '#EF4444'], // For streaks
  gold: ['#FCD34D', '#F59E0B'], // For achievements

  // Semantic Colors (Brand: Light Lilac)
  background: '#E8E3FF', // Light lilac - brand color
  surface: '#FFFFFF',
  text: {
    primary: '#1F2937',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
    inverse: '#FFFFFF',
  },
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
  },

  // Functional Colors
  link: '#3B82F6',
  overlay: 'rgba(0, 0, 0, 0.5)',
  disabled: '#D1D5DB',
  placeholder: '#9CA3AF',
} as const;

export type Colors = typeof colors;
