const { compilerOptions } = require('./tsconfig.json')
const { pathsToModuleNameMapper } = require('ts-jest/utils')

module.exports = {

  clearMocks: true,

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),

  preset: 'ts-jest',

  // The test environment that will be used for testing
  testEnvironment: 'node',
  
  modulePathIgnorePatterns: ["<rootDir>/client/"]
}
