// __mocks__/react-native-shared-preferences.js

let mockData = {};

const SharedPreferences = {
  setItem: jest.fn((key, value, callback) => {
    mockData[key] = value;
    callback();
  }),
  getItem: jest.fn((key, callback) => {
    callback(mockData[key]);
  }),
};

export default SharedPreferences;
