import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  search: "",
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setCards, setSearch } = cardSlice.actions;

export default cardSlice.reducer;
