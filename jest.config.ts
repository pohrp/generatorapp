import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',  // Use jsdom for browser-like testing
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Transform TypeScript files with ts-jest
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust this if you use aliases
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],  // For custom matchers
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};

export default config;
