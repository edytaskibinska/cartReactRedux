import { InterfaceCartElement } from "../../Interfaces/InterfaceCartElement";

// Mock implementation of fetchData
export const fetchData = async (): Promise<InterfaceCartElement[]> => {
  // Return mock data
  return Promise.resolve([
    { id: 1, title: "Mock Product 1", description: "Mock Description 1", quantity: 1 },
    { id: 2, title: "Mock Product 2", description: "Mock Description 2", quantity: 1 },
  ]);
};


//ERROR IN TESTS : 
// The function fetchData is causing the problem. The specific error is "ReferenceError: fetch is not defined." 
// This error occurs because the fetch function, which is a browser API for making network requests, 
// is not available in the Node.js environment, which is what Jest uses to run the tests.
// Mock the Fetch Function: You can create a mock implementation of the fetch function that returns mock data for testing purposes. 
// Jest provides built-in support for mocking modules.