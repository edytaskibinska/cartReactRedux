import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartElement } from "../../Interfaces/ICartElement";

import { fetchData } from "../../Utils/fetchData";

interface ProductsState {
  items: ICartElement[];
}

const initialState: ProductsState = {
  items: [],
};

export const fetchInitialData = () => async (dispatch: any) => {
  try {
    const data = await fetchData();
    dispatch(productsSlice.actions.setInitialData(data));
  } catch (error) {
    console.error("Error fetching initial data:", error);
  }
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
        product.quantity + 1;
      }
    },
    setInitialData: (state, action: PayloadAction<ICartElement[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addToCart , setInitialData} = productsSlice.actions;

export default productsSlice.reducer;
