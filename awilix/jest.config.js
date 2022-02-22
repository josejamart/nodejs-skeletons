module.exports = {
  "rootDir": "dist",
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/src/"
  ],
  "testEnvironment": "node",
  "moduleNameMapper": {
    "^@adapters/(.*)": "<rootDir>/main/adapters/$1",
    "^@domain/(.*)": "<rootDir>/main/domain/$1",
    "^@infra/(.*)": "<rootDir>/main/infra/$1",
    "^@usecases/(.*)": "<rootDir>/main/usecases/$1"
  }
};