import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchInitialData } from "./reducers/productSlice";
import cartReducer from "./reducers/cartSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: [thunk],
});
store.dispatch(fetchInitialData() as any);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
