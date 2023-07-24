import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ProductList from "./ProductList";
import { InterfaceCartElement } from "../../Interfaces/InterfaceCartElement";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../Store/reducers/cartSlice";

// mock Redux store
const mockStore = configureMockStore();

describe("ProductList component", () => {
  const sampleCartItems: InterfaceCartElement[] = [
    {
      id: 1,
      title: "Product 1",
      description: "Description for Product 1",
      quantity: 2,
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description for Product 2",
      quantity: 3,
    },
  ];

  it("renders product list correctly", () => {
    const store = mockStore({ cart: { items: [] } }); //initialize the store with an empty cart

    const { getByText, queryAllByText } = render(
      //update the destructured variables
      <Provider store={store}>
        <ProductList cartItems={sampleCartItems} />
      </Provider>
    );

    expect(getByText("Product 1")).toBeInTheDocument();
    expect(getByText("Product 2")).toBeInTheDocument();
    expect(queryAllByText("Ajouter au panier")).toHaveLength(2); //check if there are two "Ajouter au panier" buttons
  });

  it("add correctly a product to cart when click on Ajouter au panier button ", () => {
    const newItem: InterfaceCartElement = {
      id: 2,
      title: "Product 2",
      description: "Description for Product 2",
      quantity: 3,
    };

    const store = mockStore({
      cart: { items: [{ id: 1, title: "Product 1", quantity: 1 }] },
    });

    const { getByText } = render(
      <Provider store={store}>
        <ProductList cartItems={sampleCartItems} />
      </Provider>
    );

    fireEvent.click(getByText("Ajouter au panier")); // fire event on burron "Ajouter .." increase product quantity in the cart

    // check if  the addItem action was dispatched with the correct payload
    expect(store.getActions()).toContainEqual(
      expect.objectContaining({
        type: "cart/addItem",
        payload: newItem,
      })
    );
  });

  it("increases and decreases product quantity in the cart", () => {
    const store = mockStore({
      cart: { items: [{ id: 1, title: "Product 1", quantity: 1 }] },
    });

    const { getByText } = render(
      <Provider store={store}>
        <ProductList cartItems={sampleCartItems} />
      </Provider>
    );

    fireEvent.click(getByText("+")); //increase by 1 the product quantity in the cart
    expect(store.getActions()).toContainEqual(increaseQuantity(1));

    fireEvent.click(getByText("-")); //decrease by 1 the product quantity in the cart
    expect(store.getActions()).toContainEqual(decreaseQuantity(1));
  });
});
