import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createReducer  from '../slice';

const rootReducer = combineReducers({
   createReducer
})

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch