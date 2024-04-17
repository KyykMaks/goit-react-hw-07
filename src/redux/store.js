import { filtersReducer } from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactsSlice";
import { configureStore } from "@reduxjs/toolkit";

const filterConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['filter']
};

export const store = configureStore({
  reducer: {
    filters: persistReducer(filterConfig,filtersReducer),
    contacts: contactsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);