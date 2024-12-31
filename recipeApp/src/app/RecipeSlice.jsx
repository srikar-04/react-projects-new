import { createSlice } from "@reduxjs/toolkit";
import React, { useState } from "react";

const initialState = {
  input: "",
  apiData:{},
  favouriteId : []
};

const RecipeSlice = createSlice({
  name: "RecipeSlice",
  initialState,
  reducers: {
    setInput: (state, action) => {
      
      state.input = action.payload;
    },

    setApiData: (state, action) => {
      state.apiData = action.payload;
      console.log(state.apiData, "API DATA");
      
    },

    setFavouriteId: (state, action) =>  {
      if(state.favouriteId.includes(action.payload)) {
        state.favouriteId.splice(state.favouriteId.indexOf(action.payload), 1)
      } else {
        state.favouriteId.push(action.payload);
      }
    }
  },
});

export const { setInput, setApiData, setFavouriteId } = RecipeSlice.actions;
export default RecipeSlice.reducer;