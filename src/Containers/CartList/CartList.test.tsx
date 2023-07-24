import {
  render,
  //fireEvent
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
//importing configured stoer
import { Provider } from "react-redux";
import store from "../../Store/configureStore";
//importing components and interfaces
import CartList from "./CartList";
import { InterfaceCartElement } from "../../Interfaces/InterfaceCartElement";

//DONE : adding unit tests :

//mock fetchData fn:
jest.mock("../../Utils/fetchData");

describe("CartList component", () => {
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

  it("renders cart product correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <CartList cartItems={sampleCartItems} />
      </Provider>
    );

    // Check if all the cart item titles are rendered
    expect(getByText("Product 1")).toBeInTheDocument();
    expect(getByText("Product 2")).toBeInTheDocument();

    // Check if quantity is displayed correctly for each item
    expect(getByText("Quantité :2")).toBeInTheDocument();
    expect(getByText("Quantité :3")).toBeInTheDocument();
  });
});
