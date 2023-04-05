const nextJest = require('next/jest');

const createJestconfig = nextJest({
  dir: './',
});

/** @type {require('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: [
    '<rootDir>/src/testing/setup-tests.ts',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};

module.exports = createJestconfig(customJestConfig);
