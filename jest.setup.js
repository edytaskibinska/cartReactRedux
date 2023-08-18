import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16"; // Remplacez par l'adaptateur approprié

// Configurer Enzyme
configure({ adapter: new Adapter() });

// Configurer les mocks globaux ici
jest.mock("src/Utils/fetchData");
// ... d'autres mocks globaux si nécessaire
