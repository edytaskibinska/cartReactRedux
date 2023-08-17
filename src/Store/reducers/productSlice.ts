import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InterfaceCartElement } from "../../Interfaces/InterfaceCartElement";
import { fetchData } from "../../Utils/fetchData";

interface ProductsState {
  items: InterfaceCartElement[];
}

const initialState: ProductsState = {
  items: [],
};

// Utilisez ThunkDispatch avec le type approprié pour l'argument dispatch
// export const fetchInitialData = () => async (dispatch: ThunkDispatch<ProductsState, any, PayloadAction<InterfaceCartElement[]>>) => {
//   try {
//     const data = await fetchData("./fakeData.json");
//     dispatch(productsSlice.actions.setInitialData(data));
//   } catch (error) {
//     console.error("Error fetching initial data:", error);
//   }
// };

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

//export const { setInitialData } = productsSlice.actions;

export default productsSlice.reducer;
