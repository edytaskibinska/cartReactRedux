// jest.config.js
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // Autres options de configuration spécifiques au projet
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/empty-module.js",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Chemin vers les fichiers que vous souhaitez couvrir
  ],
  coverageDirectory: "coverage", // Dossier où seront stockés les rapports de couverture
  coverageReporters: ["text", "lcov"], // Rapport en texte et rapport LCOV
};
