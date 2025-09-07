# Text Toolkit 🛠️

A comprehensive TypeScript utility library for text processing and manipulation. Perfect for developers who need reliable, well-tested text utilities.

## ✨ Features

- **Case Conversion**: camelCase, kebab-case, snake_case, Title Case
- **Text Manipulation**: truncate, slugify, normalize whitespace
- **Validation**: email and URL validation
- **Analysis**: word extraction, counting, similarity calculation
- **Security**: HTML escaping
- **Generation**: random string generation
- **TypeScript**: Full type support with comprehensive interfaces

## 📦 Installation

```bash
npm install @siziallahsevsin/text-toolkit
```

```bash
yarn add @siziallahsevsin/text-toolkit
```

## 🚀 Quick Start

```typescript
import { toCamelCase, slugify, truncate, isEmail } from '@siziallahsevsin/text-toolkit';

// Case conversion
toCamelCase('hello world'); // 'helloWorld'

// URL-friendly slugs
slugify('Hello World! 🌍'); // 'hello-world'

// Smart truncation
truncate('Long text here', { length: 10, preserveWords: true }); // 'Long text...'

// Validation
isEmail('user@example.com'); // true
```

## 📖 API Reference

### Case Conversion

#### `toCamelCase(str: string, options?: StringCaseOptions): string`
Convert string to camelCase.

```typescript
toCamelCase('hello world'); // 'helloWorld'
toCamelCase('hello-world_test'); // 'helloWorldTest'
```

#### `toKebabCase(str: string, options?: StringCaseOptions): string`
Convert string to kebab-case.

```typescript
toKebabCase('helloWorld'); // 'hello-world'
toKebabCase('Hello World Test'); // 'hello-world-test'
```

#### `toSnakeCase(str: string): string`
Convert string to snake_case.

```typescript
toSnakeCase('helloWorld'); // 'hello_world'
```

#### `toTitleCase(str: string): string`
Capitalize first letter of each word.

```typescript
toTitleCase('hello world'); // 'Hello World'
```

### Text Manipulation

#### `truncate(str: string, options: TruncateOptions): string`
Truncate string with smart options.

```typescript
truncate('Hello World', { 
  length: 5, 
  suffix: '...', 
  preserveWords: true 
}); // 'Hello...'
```

#### `slugify(str: string, options?: SlugifyOptions): string`
Generate URL-friendly slugs.

```typescript
slugify('Hello World! 🌍', { 
  lowercase: true, 
  separator: '-' 
}); // 'hello-world'
```

#### `normalizeWhitespace(str: string): string`
Remove extra whitespace.

```typescript
normalizeWhitespace('  hello    world  '); // 'hello world'
```

#### `escapeHtml(str: string): string`
Escape HTML characters for security.

```typescript
escapeHtml('<div>Hello & "World"</div>'); 
// '&lt;div&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;'
```

### Text Analysis

#### `extractWords(str: string): string[]`
Extract words from text.

```typescript
extractWords('Hello, world! How are you?'); 
// ['Hello', 'world', 'How', 'are', 'you']
```

#### `wordCount(str: string): Record<string, number>`
Count word occurrences.

```typescript
wordCount('hello world hello'); 
// { hello: 2, world: 1 }
```

#### `similarity(str1: string, str2: string): number`
Calculate similarity between strings (0-1).

```typescript
similarity('hello', 'hello'); // 1
similarity('hello', 'hallo'); // 0.8
```

### Validation

#### `isEmail(str: string): boolean`
Validate email format.

```typescript
isEmail('user@example.com'); // true
isEmail('invalid-email'); // false
```

#### `isUrl(str: string): boolean`
Validate URL format.

```typescript
isUrl('https://example.com'); // true
isUrl('not-a-url'); // false
```

### Utilities

#### `randomString(length?: number, charset?: string): string`
Generate random strings.

```typescript
randomString(10); // 'aBc123XyZ9'
randomString(8, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // 'XKJHGFDA'
```

## 🧪 Testing

```bash
npm test
npm run test:watch
```

## 🏗️ Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## 📄 License

MIT © [siziallahsevsin](https://github.com/siziallahsevsin)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues

Found a bug? Please [open an issue](https://github.com/siziallahsevsin/text-toolkit/issues).

## ⭐ Support

If this library helped you, please give it a ⭐ on [GitHub](https://github.com/siziallahsevsin/text-toolkit)!