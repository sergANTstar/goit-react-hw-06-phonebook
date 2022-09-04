
import { createSlice } from '@reduxjs/toolkit';

export const sliceContacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    setItems(state, action) {
      state.items.push(action.payload);
    },
    deleteItems(state, action) {
      state.items = [...action.payload];
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { setItems, setFilter, deleteItems } =
  sliceContacts.actions;