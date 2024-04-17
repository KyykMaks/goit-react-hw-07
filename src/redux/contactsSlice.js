import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  }
}
const contactSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
 
  extraReducers: (builder) => builder
  .addCase(fetchContacts.pending, (state) => {
    state.contacts.loading = true;
    state.contacts.error = false;
  })
  .addCase(fetchContacts.fulfilled, (state,action) => {
    state.contacts.loading = false;
    state.contacts.items = action.payload;
  })
  .addCase(fetchContacts.rejected, (state) => {
    state.contacts.loading = false;
    state.contacts.error = true;
  })
  .addCase(addContact.pending, (state) => {
    state.contacts.loading = true;
    state.contacts.error = false;
  })
  .addCase(addContact.fulfilled, (state, action) => {
    state.contacts.loading = false;
    state.contacts.items.push(action.payload);
  })
  .addCase(addContact.rejected, (state) => {
    state.contacts.loading = false;
    state.contacts.error = true;
  })
  .addCase(deleteContact.pending, (state) => {
    state.contacts.loading = true;
    state.contacts.error = false;
  })
  .addCase(deleteContact.fulfilled, (state, action) => {
    state.contacts.loading = false;
    state.contacts.items = state.contacts.items.filter(
      (contact) => contact.id!== action.payload
    );
  })
  .addCase(deleteContact. rejected, (state) => {
    state.contacts.loading = false;
    state.contacts.error = true;
  })
});

export const selectItems = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectItems, selectNameFilter],
  (items, filter) =>
    items.filter((contact) =>
      contact.text.toLowerCase().includes(filter.trim().toLowerCase())
    )
);
  

export const contactsReducer = contactSlice.reducer;

