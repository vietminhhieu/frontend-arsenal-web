import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "filter",
  initialState: {
    phoneName: "",
  },
  reducers: {
    searchByName: (state, action) => {
      state.phoneName = action.payload;
    },
  },
});

export const { searchByName } = searchSlice.actions;

export default searchSlice.reducer;
