import { pathsToModuleNameMapper } from 'ts-jest/utils'
// Load the config which holds the path aliases.
import { compilerOptions } from './tsconfig.paths.json'

import packageJson from './package.json'
const packageName = packageJson.name.split('@myscope/').pop()

export default {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  rootDir: '../..',
  roots: [`<rootDir>/packages/${packageName}`],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts', `<rootDir>/packages/${packageName}/src/setupTests.ts`],
  testRegex: `(packages/${packageName}/.*/__tests__/.*|\\.(test|spec))\\.tsx?$`,
  moduleDirectories: ['node_modules'],
  modulePaths: [`<rootDir>/packages/${packageName}/src/`],
  name: packageName,
  displayName: packageName,
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(svg|png)$': '<rootDir>/__mocks__/assetsMock.js',
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      // This has to match the baseUrl defined in tsconfig.json.
      prefix: `<rootDir>/packages/${packageName}`,
    }),
  },
}
