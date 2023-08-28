import {createSlice} from '@reduxjs/toolkit';

const onboarding = createSlice({
  name: 'person',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    getEmail(state,action) {
      state.email = action?.payload;
      console.log(state.email);
      
    },
    getPassword: (state, action) => {
      state.password = action?.payload;
    },
  },
});
export const {getEmail, getPassword} = onboarding.actions;
export default onboarding.reducer;