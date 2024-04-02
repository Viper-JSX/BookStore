import { combineReducers, createReducer } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";

const rootReducer = combineReducers({ user: userReducer /*and other reducers like posts: postsReducer*/ });

export default rootReducer;