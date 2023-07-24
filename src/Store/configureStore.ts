import { configureStore } from "@reduxjs/toolkit";
import { fetchInitialData } from "./reducers/productSlice";

import thunk from "redux-thunk";

// adding redux-persist features
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productSlice";
import cartReducer from "./reducers/cartSlice";
import storage from "redux-persist/lib/storage"; // storage engines (localStorage, sessionStorage, etc.)
//end persist imports

//S.O.L.I.D - SRP - Single Responsibility Principle

const persistConfig = {
  key: "root", // key for persisted data
  version: 1,
  storage, // storage engine
};
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // utilise le persistedReducer ici au lieu du rootReducer directement
  middleware: [thunk],
});
// before:
// const store = configureStore({
//   reducer: {
//     products: productsReducer,
//     cart: cartReducer,
//   },
//   middleware: [thunk],
// });

store.dispatch(fetchInitialData() as any);

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
//before:
//export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
