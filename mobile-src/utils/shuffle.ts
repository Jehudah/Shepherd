/**
 * Shuffle utility functions for randomizing arrays
 */

/**
 * Shuffle an array randomly
 * @param array - The array to shuffle
 * @returns A new shuffled array
 */
export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

/**
 * Shuffle question options
 * @param options - Array of option strings
 * @returns Shuffled options array
 */
export function shuffleOptions(options: string[]): string[] {
  return shuffleArray(options);
}
