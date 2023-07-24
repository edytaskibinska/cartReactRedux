// jest.config.js
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // Autres options de configuration spécifiques à votre projet peuvent être ajoutées ici
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/empty-module.js",
  },
};
