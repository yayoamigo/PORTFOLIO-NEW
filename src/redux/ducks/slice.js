import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedPage: "home", isTopOfPage: true, isMenuToggled: true };

const Slice = createSlice({
    name: 'Change',
    initialState,
    reducers: {
      tooglePage: (state, { payload }) => {
        state.selectedPage = payload
      },
      toogleTop:  (state, { payload }) => {
        state.isTopOfPage = payload
      },
      toogleMenu:  (state, { payload }) => {
        state.isMenuToggled = payload
      },
    }, 

    extraReducers: () => {
      
    },
    
  });
  
  export const { tooglePage, toogleTop, toogleMenu} = Slice.actions;

  export default Slice;