import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: contactsReducer,
  }
})
