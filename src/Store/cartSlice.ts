import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartElement } from "../Interfaces/ICartElement";

interface ICartInitState {
  items: ICartElement[];
}

const initialState: ICartInitState = {
  items: [
    {
      id: 1,
      title: "Article 1",
      description: "Description de l'article 1",
      quantity: 0,
    },
    {
      id: 2,
      title: "Article 2",
      description: "Description de l'article 2",
      quantity: 0,
    },
    {
      id: 3,
      title: "Article 3",
      description: "Description de l'article 3",
      quantity: 0,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQuantity: (state, action: PayloadAction<number>) => {
      console.log("increaseQuantity state", state);
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
        console.log("decreaseQuantity state", state);
        const item = state.items.find((item) => item.id === action.payload);
        if (item) {
          item.quantity -= 1;
        }
      },
    resetQuantity: (state, action: PayloadAction<number>) => {
      console.log("relove state", state);
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity = 0;
      }
    },
  },
});

export const { increaseQuantity,decreaseQuantity,  resetQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
