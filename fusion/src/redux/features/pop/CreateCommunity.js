import { createSlice } from "@reduxjs/toolkit";
const name = "createCommunityPop";
const initialState = createinitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

export const CreateCommunityActions = { ...slice.actions };
export const CreateCommunityReducers = slice.reducer;

function createinitialState() {
  return {
    value: false,
  };
}

function createReducers() {
  return {
    setCommunityPop,
  };
  function setCommunityPop(state, action) {
    state.value = action.payload;
  }
}

export default CreateCommunityReducers;
