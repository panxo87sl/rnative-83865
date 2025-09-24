import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./slices/shopSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import { shopAPI } from "../services/shopAPI";
import { authAPI } from "../services/authAPI";
import { setupListeners } from "@reduxjs/toolkit/query";

export const Store = configureStore({
  reducer: {
    shopReducer: shopReducer,
    cartReducer: cartReducer,
    userReducer: userReducer,
    [shopAPI.reducerPath]: shopAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopAPI.middleware).concat(authAPI.middleware),
});

setupListeners(Store.dispatch);
