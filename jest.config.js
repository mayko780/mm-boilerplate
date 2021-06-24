module.exports = {
  moduleNameMapper: {
    '^.+\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    '^.+\\.(gif|ttf|eot|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
}
