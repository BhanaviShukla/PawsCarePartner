// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/__tests__/setup-tests.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  moduleNameMapper: {
    '@tests/(.*)$': '<rootDir>/__tests__/$1',
    '^@util/(.*)': ['<rootDir>/src/util/$1'],
    '^@components/(.*)': ['<rootDir>/src/components/$1'],
    '^@pages/(.*)': ['<rootDir>/pages/$1'],
    '^@hooks/(.*)': ['<rootDir>/src/hooks/$1'],
    '^@api/(.*)': ['<rootDir>/src/api/$1'],
    '^@screens/(.*)': ['<rootDir>/src/screens/$1'],
    '^@redux/(.*)': ['<rootDir>/src/redux/$1'],
    '^@layout/(.*)': ['<rootDir>/src/layout/$1'],
    'react-spring': '<rootDir>/node_modules/react-spring/web.cjs'
  },
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  coverageReporters: ['html', 'text'],
  collectCoverageFrom: [
    'components/*.{js,jsx,ts,tsx}',
    'util/*.{js,jsx,ts,tsx}',
    'hooks/*.{js,jsx,ts,tsx}',
    'api/*.{js,jsx,ts,tsx}',
    'pages/*.{js,jsx,ts,tsx}'
  ],
  preset: 'ts-jest',
  extensionsToTreatAsEsm: ['.ts', '.tsx']
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
