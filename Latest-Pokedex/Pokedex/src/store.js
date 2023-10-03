import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./apislice";
import { fileUploadApi } from "./fileUploadReducer";

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [fileUploadApi.reducerPath]: fileUploadApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      pokemonApi.middleware,
      fileUploadApi.middleware,
    ]),
});

export default store;
