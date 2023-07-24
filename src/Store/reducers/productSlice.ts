import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InterfaceCartElement } from "../../Interfaces/InterfaceCartElement";

import { fetchData } from "../../Utils/fetchData";

interface ProductsState {
  items: InterfaceCartElement [];
}

const initialState: ProductsState = {
  items: [],
};

export const fetchInitialData = () => async (dispatch: any) => {
  try {
    const data = await fetchData("./fakeData.json");
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
      const product = state.items.find((item) => item.id === productId);
      console.log("state", state)
      if (product && product.quantity !== undefined) {
        product.quantity++;
      }
    },
    setInitialData: (state, action: PayloadAction<InterfaceCartElement []>) => {
      state.items = action.payload;
    },
  },
});

export const { addToCart, setInitialData } = productsSlice.actions;

export default productsSlice.reducer;
