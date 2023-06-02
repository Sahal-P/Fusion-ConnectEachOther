import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LOGIN, SIGNUP, SIGNOUT } from "../../../constants/constants";


const name = 'createChannelPop'
const initialState = createinitialState();
const reducers = createReducers();
// const extraActions = createExtraActions();
const slice = createSlice({ name, initialState, reducers })

export const CreateChannelActions = { ...slice.actions};
export const CreateChannelReducers = slice.reducer;


function createinitialState() {
    return{
    value : false,
    }
    }

function createReducers(){
    return {
        setChannelPop
    };
    function setChannelPop(state, action){
        state.value = action.payload;   
    }
}

// function createExtraActions(){

//     return {
//         login: login(),
//         logout: logout(),
//         register: register()
//     }

//     function login(){
//         return createAsyncThunk(
//             `${name}/login`,
//             async function ( {email, password}, { dispatch }){
//                 try{
//                     const response = await axios.post(LOGIN,{email,password},{
//                         withCredentials: true,
//                       })
//                     dispatch(authActions.setAuth(true))
//                     useNavigate('/')
//                 } catch (error) {
//                     console.log(error);
//                 }
//             })
//     }

//     function register(){
//         return createAsyncThunk(
//             `${name}/register`,
//             async function ( {formData, navigate},  { dispatch }){
//                 try{
//                     console.log(formData,'kkkkkkkkkkkkkkkkkkk');
//                     const response = await axios.post(SIGNUP, formData, {
//                         withCredentials: true,
//                       })
//                     if(response.status == 201){
//                         navigate('/auth/login')
//                     }
//                 } catch (error) {
//                     console.log(error);
//                 }
//             })
//     }


//     function logout(){
//         return createAsyncThunk(
//             `${name}/logout`,
//              async function(arg ,{ dispatch }){
//                 await axios.post('logout')
//                 localStorage.removeItem('auth');
//                 dispatch(authActions.setAuth(false))
//             }
//         )
//     }
// }


// export const authSlice = createSlice({
//     name : 'auth',
//     initialState,
//     reducers:{
//         setAuth: (state,action)=>{
//             state.value = action.payload;
//         }
//     }

// })

// export const {setAuth} = authSlice.actions;

export default CreateChannelReducers;