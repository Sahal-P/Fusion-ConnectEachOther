import userReducers from "./userSlice";
import authReducers from "./authSlice";
import { combineReducers } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session'
import persistReducer from "redux-persist/es/persistReducer";
import CreateChannelReducers from "./pop/CreateChannelPopSlice";
import CreateCommunityReducers from "./pop/CreateCommunity";
import CommunitySettingReducers from "./pop/CommunitySettingPop";


const userPersistConfig = {
    key: 'user',
    storage: storageSession,
  }

const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducers),
    auth: authReducers,
    createChannel: CreateChannelReducers,
    createCommunity: CreateCommunityReducers,
    communityDetail: CommunitySettingReducers,
  });
  
export default rootReducer;