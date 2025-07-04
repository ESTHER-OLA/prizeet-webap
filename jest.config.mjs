import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
