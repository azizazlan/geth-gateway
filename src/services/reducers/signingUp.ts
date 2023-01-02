import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface SignupState {
  isUserSignUp: boolean;
}

const initialState: SignupState = {
  isUserSignUp: false,
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    signup: (state) => {
      state.isUserSignUp = true;
    },
  },
});

export const { signup } = appSlice.actions;
export default appSlice.reducer;
