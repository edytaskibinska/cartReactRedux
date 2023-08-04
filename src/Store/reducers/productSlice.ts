import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk"; // Importez ThunkDispatch
import { InterfaceCartElement } from "../../Interfaces/InterfaceCartElement";
import { fetchData } from "../../Utils/fetchData";

interface ProductsState {
  items: InterfaceCartElement[];
}

const initialState: ProductsState = {
  items: [],
};

// Utilisez ThunkDispatch avec le type approprié pour l'argument dispatch
export const fetchInitialData = () => async (dispatch: ThunkDispatch<ProductsState, any, PayloadAction<InterfaceCartElement[]>>) => {
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
    setInitialData: (state, action: PayloadAction<InterfaceCartElement[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setInitialData } = productsSlice.actions;

export default productsSlice.reducer;
