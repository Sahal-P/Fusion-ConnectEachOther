import { createSlice } from "@reduxjs/toolkit";
const name = 'CommunitySettingPop'
const initialState = createinitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers })

export const CommunitySettingActions = { ...slice.actions};
export const CommunitySettingReducers = slice.reducer;


function createinitialState() {
    return{
    value : false,
        }
    }

function createReducers(){
    return {
        setCommunitySettingPop
    };
    function setCommunitySettingPop(state, action){
        state.value = action.payload;   
    }
}

export default CommunitySettingReducers;