import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { MMKV } from 'react-native-mmkv';
import createReducer  from '../slice';


const mmkv = new MMKV();

const rootReducer = combineReducers({
   createReducer,
   
})

const mmkvMiddleware = () => (next: any) => (action: any) => {
  const result = next(action);
  mmkv.set('reduxState', store.getState());
  return result;
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [mmkvMiddleware]
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch