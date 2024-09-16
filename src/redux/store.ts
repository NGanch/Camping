import { configureStore } from "@reduxjs/toolkit";

import catalogueSlice from "./catalogue/catalogue-slice";

export const store = configureStore({
  reducer: {
    catalogue: catalogueSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;