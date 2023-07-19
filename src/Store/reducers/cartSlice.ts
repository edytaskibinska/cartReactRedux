import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartElement } from "../../Interfaces/ICartElement";

interface CartState {
  items: ICartElement[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartElement>) => {
      const item = state.items?.find((item) => item.id === action.payload);

      console.log("ADDED item", item)

      const productId = action.payload;
      state.items = [...state.items, productId];
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items?.find((item) => item.id === action.payload);
      if (item && item.quantity !== undefined) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items?.find((item) => item.id === action.payload);
      if (item && item.quantity !== undefined) {
        item.quantity--;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items?.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
