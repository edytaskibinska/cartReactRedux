import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import productsReducer, { fetchInitialData } from "./productSlice";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe("productSlice reducers", () => {
  it("should handle fetchInitialData correctly", async () => {
    const initialState = {
      products: {
        items: [],
      },
    };

    const mockData = [
      { id: 1, title: "Product 1", description: "Description 1", quantity: 1 },
      { id: 2, title: "Product 2", description: "Description 2", quantity: 1 },
    ];

    const store = mockStore(initialState);

    // Dispatch l'action asynchrone et attendez qu'elle se résolve
    await store.dispatch(fetchInitialData());

    // Attendez que toutes les actions aient été traitées
    const actions = store.getActions();
    const newState = actions.reduce(productsReducer, initialState.products);

    expect(newState.items).toEqual(mockData);
  });
});
