// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";

import { getCatalogue, getLocations } from "./catalogue-operation";

import { initialStateCatalogueType } from "../types/initialEntity";

const initialState: initialStateCatalogueType = {
  catalogueList: [],
  locationsList: [],
};

export const catalogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getCatalogue.fulfilled, (state, action) => {
        state.catalogueList = action.payload;
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.locationsList = action.payload;
      });
  },
});

export default catalogueSlice.reducer;
