/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import { SubmissionStates } from '../submissionStates';

interface EthereumState {
  netId: number;
}

const initialState: EthereumState = {
  netId: -1,
};

export const adminSlice = createSlice({
  name: 'ethereumSlice',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    // builder.addCase(signIn.pending, (state, { payload }) => {
    //   state.submissionState = 'PENDING';
    //   state.user = null;
    //   state.isSignedIn = false;
    // });
  },
});

export const { reset } = ethereumSlice.actions;
export default ethereumSlice.reducer;
