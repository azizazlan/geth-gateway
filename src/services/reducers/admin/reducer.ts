import { createSlice } from '@reduxjs/toolkit';
import signIn from '../../thunks/admin/signIn';
import { SubmissionStates } from '../submissionStates';
import dummyAdmin from './dummyAdmin';

interface AdminState {
  isSignedIn: boolean;
  submissionState: SubmissionStates;
  user: any;
}

const initialState: AdminState = {
  // isSignedIn: true,
  // user: dummyAdmin,
  // submissionState: 'IDLE',

  isSignedIn: false,
  user: null,
  submissionState: 'IDLE',
};

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state, { payload }) => {
      state.submissionState = 'PENDING';
      state.user = null;
      state.isSignedIn = false;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      // Check
      if (payload.status === 'Error') {
        state.submissionState = 'FAILED';
        state.user = null;
        state.isSignedIn = false;
        return;
      }

      state.submissionState = 'OK';
      state.user = payload.result.user;
      state.isSignedIn = true;
    });
  },
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;
