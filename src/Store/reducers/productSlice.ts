import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InterfaceCartElement } from "../../Interfaces/InterfaceCartElement";
import { fetchData } from "../../Utils/fetchData";

interface ProductsState {
  items: InterfaceCartElement[];
}

const initialState: ProductsState = {
  items: [],
};



export const fetchInitialData = createAsyncThunk(
  "products/fetchInitialData",
  async () => {
    try {
      const data = await fetchData("./fakeData.json");
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInitialData.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});


export default productsSlice.reducer;
