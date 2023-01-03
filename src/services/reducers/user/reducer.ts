/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import signIn from '../../thunks/user/signIn';
import { SubmissionStates } from '../submissionStates';

interface UserState {
  isSignedIn: boolean;
  submissionState: SubmissionStates;
}

const initialState: UserState = {
  isSignedIn: false,
  submissionState: 'IDLE',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state, { payload }) => {
      state.submissionState = 'PENDING';
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      if (!payload) {
        state.isSignedIn = false;
        state.submissionState = 'FAILED';
        return;
      }
      if (!payload.result) {
        state.isSignedIn = false;
        state.submissionState = 'FAILED';
        return;
      }
      state.isSignedIn = true;
      state.submissionState = 'OK';
    });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
