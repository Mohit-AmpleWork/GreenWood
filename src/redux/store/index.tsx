import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "redux/slice/counterRedux";
import userReducer from "redux/slice/userAuth/userReducer";

const rootReducer = combineReducers({
  reducer:reducer,
  user: userReducer,
});

export type rootState = ReturnType<typeof reducer>;

export default configureStore({
   reducer: rootReducer
});