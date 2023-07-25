import productsReducer, { setInitialData } from "./productSlice";

//DONE : adding unit tests :

describe("productSlice reducers", () => {
  it("should handle setInitialData correctly", () => {
    //create initial state with some items
    const initialState = {
      items: [],
    };

    //create some mock data to set
    const mockData = [
      { id: 1, title: "Product 1", description: "Description 1", quantity: 1 },
      { id: 2, title: "Product 2", description: "Description 2", quantity: 1 },
    ];

    //call the reducer with the setInitialData action and mock data
    const newState = productsReducer(initialState, setInitialData(mockData));

    // expect the state items to be updated with the mock data
    expect(newState.items).toEqual(mockData);
  });
});
