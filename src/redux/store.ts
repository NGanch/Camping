import { configureStore } from "@reduxjs/toolkit";
// import likeReducer from "./likeReducer";
// import cartReducer from "./cartReducer";

// import { authReducer } from "./auth/auth-slice.js";
// import productsReducer from "./products/products-slice.ts";
// import cartReducer from "./products/cartReducer.ts";
// import likeReducer from "./products/likeReducer.ts";
import catalogueSlice from "./catalogue/catalogue-slice";
// import languageReducer from "./languageReducer.ts";

export const store = configureStore({
  reducer: {
    // productsLikeState: likeReducer,
    // languageState: languageReducer,
    // productsInCart: cartReducer,
    // products: productsReducer,
    // auth:  authReducer,
    catalogue: catalogueSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;