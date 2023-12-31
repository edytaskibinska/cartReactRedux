import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceCartElement } from "../../Interfaces/InterfaceCartElement";

interface CartState {
  items: InterfaceCartElement[];
}

const initialState: CartState = {
  items: [],
};

//refacto example :
function updateProductQuantity(
  products: InterfaceCartElement[],
  productId: number,
  quantityDelta: number
): InterfaceCartElement[] | false {
  const product = products.find((p) => p.id === productId);

  const newQuantity = (product?.quantity ?? 0) + quantityDelta;
  if ((!product || product.quantity === undefined) && newQuantity < 0) {
    return false;
  }

  return products.map((productItem) =>
    productItem.id === productId
      ? { ...productItem, quantity: newQuantity }
      : productItem
  );
}
//fonction util to remove product:
function removeProduct(
  products: InterfaceCartElement[],
  productId: number
): InterfaceCartElement[] {
  return products.filter((product) => product.id !== productId);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<InterfaceCartElement>) => {
      const product = action.payload;
      const existingProduct = state?.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        const { id, quantity = 0 } = product;
        const updatedItems = updateProductQuantity(state.items, id, quantity);

        if (updatedItems === false) {
          // if the quantity is invalid
          return;
        }

        state.items = updatedItems;
      } else {
        state.items.push(product);
      }
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const updatedItems = updateProductQuantity(state.items, productId, 1);
      if (updatedItems === false) {
        // if the quantity is invalid
        return;
      }
      state.items = updatedItems;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const updatedItems = updateProductQuantity(state.items, productId, -1);
      if (updatedItems === false) {
        // if the quantity is invalid
        return;
      }
      state.items = updatedItems;
    },
    removeItem(state, action: PayloadAction<number>) {
      //was before refacto:
      //state.items = state.items?.filter((item) => item?.id !== action.payload);
      const productId = action.payload;
      state.items = removeProduct(state.items, productId);
    },
    emptyCart(state) {
      state.items = [];
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
