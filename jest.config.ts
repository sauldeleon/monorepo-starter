export default {
  projects: ['<rootDir>/packages/*/jest.config.ts'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/packages/**/src/**/*.{ts,tsx}',
    '!<rootDir>/packages/**/src/**/*.mocks.{ts,tsx}',
    '!**/*.d.ts',
    '!**/src/index.tsx',
    '!**/packages/**/index.ts',
    '!**/packages/**/utils/tests.tsx',
  ],
}
