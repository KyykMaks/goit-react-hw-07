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
import { combineSlices, configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineSlices({
  filters: filtersReducer,
  contacts: contactsReducer,
});

const persistedTAskReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedTAskReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);