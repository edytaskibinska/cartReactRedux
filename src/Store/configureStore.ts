import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchInitialData } from "./reducers/productSlice";
import cartReducer from "./reducers/cartSlice";
import thunk from "redux-thunk"; // Import redux-thunk middleware

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: [thunk],
});
//@ts-ignore
store.dispatch(fetchInitialData()); // Fetch initial data before rendering the app

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
