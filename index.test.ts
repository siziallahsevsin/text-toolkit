import {
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  toTitleCase,
  truncate,
  slugify,
  extractWords,
  wordCount,
  normalizeWhitespace,
  isEmail,
  isUrl,
  randomString,
  escapeHtml,
  similarity
} from '../index';

describe('Text Toolkit', () => {
  describe('Case Conversion', () => {
    test('toCamelCase', () => {
      expect(toCamelCase('hello world')).toBe('helloWorld');
      expect(toCamelCase('Hello-World_Test')).toBe('helloWorldTest');
    });

    test('toKebabCase', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world');
      expect(toKebabCase('Hello World Test')).toBe('hello-world-test');
    });

    test('toSnakeCase', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
      expect(toSnakeCase('Hello World Test')).toBe('hello_world_test');
    });

    test('toTitleCase', () => {
      expect(toTitleCase('hello world')).toBe('Hello World');
      expect(toTitleCase('HELLO WORLD')).toBe('Hello World');
    });
  });

  describe('String Manipulation', () => {
    test('truncate', () => {
      expect(truncate('Hello World', { length: 5 })).toBe('Hello...');
      expect(truncate('Hello World', { length: 5, preserveWords: true })).toBe('Hello...');
      expect(truncate('Hello', { length: 10 })).toBe('Hello');
    });

    test('slugify', () => {
      expect(slugify('Hello World!')).toBe('hello-world');
      expect(slugify('Café & Restaurant')).toBe('cafe-restaurant');
    });

    test('normalizeWhitespace', () => {
      expect(normalizeWhitespace('  hello    world  ')).toBe('hello world');
    });

    test('escapeHtml', () => {
      expect(escapeHtml('<div>Hello & "World"</div>')).toBe('&lt;div&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;');
    });
  });

  describe('Text Analysis', () => {
    test('extractWords', () => {
      expect(extractWords('Hello, world! How are you?')).toEqual(['Hello', 'world', 'How', 'are', 'you']);
    });

    test('wordCount', () => {
      expect(wordCount('hello world hello')).toEqual({ hello: 2, world: 1 });
    });

    test('similarity', () => {
      expect(similarity('hello', 'hello')).toBe(1);
      expect(similarity('hello', 'world')).toBeLessThan(1);
      expect(similarity('', '')).toBe(1);
    });
  });

  describe('Validation', () => {
    test('isEmail', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('invalid-email')).toBe(false);
    });

    test('isUrl', () => {
      expect(isUrl('https://example.com')).toBe(true);
      expect(isUrl('not-a-url')).toBe(false);
    });
  });

  describe('Utilities', () => {
    test('randomString', () => {
      const random1 = randomString(10);
      const random2 = randomString(10);
      expect(random1).toHaveLength(10);
      expect(random2).toHaveLength(10);
      expect(random1).not.toBe(random2);
    });
  });
});