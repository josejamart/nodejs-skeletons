module.exports = {
  "rootDir": "dist",
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/src/main"
  ],
  "testEnvironment": "node",
  "moduleNameMapper": {
    "^@user/(.*)": "<rootDir>/main/user/$1",
    "^@shared/(.*)": "<rootDir>/main/shared/$1"
  }
};