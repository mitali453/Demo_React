import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemSlice";
import itemDetailsReducer from "./itemDetailsSlice";

export const rootReducer = combineReducers({
  items: itemsReducer,
  itemDetails : itemDetailsReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
