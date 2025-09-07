/**
 * Text Processing Toolkit - A collection of useful text manipulation utilities
 */

export interface StringCaseOptions {
  preserveNumbers?: boolean;
  separator?: string;
}

export interface TruncateOptions {
  length: number;
  suffix?: string;
  preserveWords?: boolean;
}

export interface SlugifyOptions {
  lowercase?: boolean;
  separator?: string;
  removeDiacritics?: boolean;
}

/**
 * Convert string to camelCase
 */
export function toCamelCase(str: string, options: StringCaseOptions = {}): string {
  const { preserveNumbers = true } = options;
  
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '')
    .replace(preserveNumbers ? /[^a-zA-Z0-9]/g : /[^a-zA-Z]/g, '');
}

/**
 * Convert string to kebab-case
 */
export function toKebabCase(str: string, options: StringCaseOptions = {}): string {
  const { separator = '-' } = options;
  
  return str
    .replace(/([a-z])([A-Z])/g, '$1' + separator + '$2')
    .replace(/[\s_]+/g, separator)
    .toLowerCase();
}

/**
 * Convert string to snake_case
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

/**
 * Capitalize first letter of each word
 */
export function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

/**
 * Truncate string with options
 */
export function truncate(str: string, options: TruncateOptions): string {
  const { length, suffix = '...', preserveWords = false } = options;
  
  if (str.length <= length) return str;
  
  if (preserveWords) {
    const truncated = str.substring(0, length);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 
      ? truncated.substring(0, lastSpace) + suffix
      : truncated + suffix;
  }
  
  return str.substring(0, length) + suffix;
}

/**
 * Generate URL-friendly slug
 */
export function slugify(str: string, options: SlugifyOptions = {}): string {
  const { lowercase = true, separator = '-', removeDiacritics = true } = options;
  
  let result = str;
  
  if (removeDiacritics) {
    result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  
  result = result
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, separator);
  
  return lowercase ? result.toLowerCase() : result;
}

/**
 * Extract words from string
 */
export function extractWords(str: string): string[] {
  return str.match(/\b\w+\b/g) || [];
}

/**
 * Count word occurrences
 */
export function wordCount(str: string): Record<string, number> {
  const words = extractWords(str.toLowerCase());
  const count: Record<string, number> = {};
  
  words.forEach(word => {
    count[word] = (count[word] || 0) + 1;
  });
  
  return count;
}

/**
 * Remove extra whitespace
 */
export function normalizeWhitespace(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}

/**
 * Check if string is email format
 */
export function isEmail(str: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

/**
 * Check if string is URL format
 */
export function isUrl(str: string): boolean {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

/**
 * Generate random string
 */
export function randomString(length: number = 10, charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

/**
 * Escape HTML characters
 */
export function escapeHtml(str: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  
  return str.replace(/[&<>"']/g, char => htmlEscapes[char]);
}

/**
 * Calculate string similarity (Levenshtein distance)
 */
export function similarity(str1: string, str2: string): number {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
  
  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
  
  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }
  
  const distance = matrix[str2.length][str1.length];
  const maxLength = Math.max(str1.length, str2.length);
  
  return maxLength === 0 ? 1 : (maxLength - distance) / maxLength;
}