import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 'id-1', text: 'Rosie Simpson', phone: '459-12-56' },
    { id: 'id-2', text: 'Hermione Kline', phone: '443-89-12' },
    { id: 'id-3', text: 'Eden Clements', phone: '645-17-79' },
    { id: 'id-4', text: 'Annie Copeland', phone: '227-91-26' },
  ]
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload)
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;

