// jest.config.js
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // Autres options de configuration spécifiques au projet
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/empty-module.js",
  },
};
