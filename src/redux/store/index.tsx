import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "redux/slice/counterRedux";

export type rootState = ReturnType<typeof reducer>;

export default configureStore({
  reducer:reducer
});
