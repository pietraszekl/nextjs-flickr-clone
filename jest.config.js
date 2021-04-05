module.exports = {
  setupFilesAfterEnv: ['./setupTests.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/'
  ],
  // Automatically clear mock calls and instances between every test
  //clearMocks: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: '.coverage',
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@/pages(.*)$': '<rootDir>/pages$1',
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/lib(.*)$': '<rootDir>/lib$1',
    '^@/styles(.*)$': '<rootDir>/styles$1',
    '^@/utils(.*)$': '<rootDir>/utils$1',
    '^@/types(.*)$': '<rootDir>/types$1'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
};
