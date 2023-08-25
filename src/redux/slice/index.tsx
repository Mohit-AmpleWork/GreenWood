import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "redux/store"

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 1
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = action?.payload + 1
      console.log('inc ==>', state.value);
      
    },
    decrement: (state,action) => {
      state.value = action?.payload - 1
      console.log('dec ==> ', state.value);
      
    },
  }
})

export const  {increment, decrement} = counterSlice.actions;
export const selectCount = (state: RootState) => state.createReducer.value;

export default counterSlice.reducer;