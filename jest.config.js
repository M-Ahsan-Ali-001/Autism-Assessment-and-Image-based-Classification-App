module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|@react-native-community|@expo|expo|@unimodules|react-native-reanimated|react-native-shadow-2|react-native-chart-kit|react-native-boring-avatars|react-native-paper)/)',
  ],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jest.setup.js',
  ],
  moduleNameMapper: {
    '^react-native-shared-preferences$':
      '<rootDir>/__mocks__/react-native-shared-preferences.js',
  },
  automock: false,
};
