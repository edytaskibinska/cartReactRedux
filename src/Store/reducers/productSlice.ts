import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartElement } from "../../Interfaces/ICartElement";

interface ProductsState {
  items: ICartElement[];
}

const initialState: ProductsState = {
  items: [
    {
      id: 1,
      title: "Article 1",
      description: "Description de l'article 1",
      quantity: 1,
    },
    {
      id: 2,
      title: "Article 2",
      description: "Description de l'article 2",
      quantity: 1,
    },
    {
      id: 3,
      title: "Article 3",
      description: "Description de l'article 3",
      quantity: 1,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      console.log("action.payload", action.payload);
      const product = state.items.find((item) => item.id === productId);
      if (product && product.quantity !== undefined) {
        product.quantity++;
      }
    },
  },
});

export const { addToCart } = productsSlice.actions;

export default productsSlice.reducer;
