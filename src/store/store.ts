import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import { baseApi } from "./api/api";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type ApiDispatch = typeof store.dispatch;
