const { pathsToModuleNameMapper } = require('ts-jest/utils')
// Load the config which holds the path aliases.
const { compilerOptions } = require('./tsconfig.paths.json')

const packageName = require('./package.json').name.split('@myscope/').pop()

module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  rootDir: './',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/../../setupTests.ts', `<rootDir>/src/setupTests.ts`],
  testRegex: `(/.*/__tests__/.*|\\.(test|spec))\\.tsx?$`,
  moduleDirectories: ['node_modules'],
  modulePaths: [`<rootDir>/src/`],
  name: packageName,
  displayName: packageName,
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/../../__mocks__/styleMock.js',
    '\\.(svg|png)$': '<rootDir>/../../__mocks__/assetsMock.js',
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      // This has to match the baseUrl defined in tsconfig.json.
      prefix: '<rootDir>',
    }),
  },
}
