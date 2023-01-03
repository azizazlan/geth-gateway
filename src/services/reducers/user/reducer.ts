import { createSlice } from '@reduxjs/toolkit';
import signIn from '../../thunks/user/signIn';

interface UserState {
  isSignedIn: boolean;
}

const initialState: UserState = {
  isSignedIn: false,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state, { payload }) => {});
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      if (!payload.result) {
        state.isSignedIn = false;
      }
      state.isSignedIn = true;
    });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
