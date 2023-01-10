/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import getProjects from '../../thunks/admin/getProjects';
import signIn from '../../thunks/admin/signIn';
import { SubmissionStates } from '../submissionStates';
import dummyAdmin from './dummyAdmin';

interface AdminState {
  isSignedIn: boolean;
  submissionState: SubmissionStates;
  user: any;
  projects: Array<any> | null;
}

const initialState: AdminState = {
  isSignedIn: true,
  user: dummyAdmin,

  submissionState: 'IDLE',
  projects: null,

  // isSignedIn: false,
  // user: null,
};

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    reset: () => initialState,
    getProject: (state, payload) => {
      // from payload we can get projectId
      if (!state.projects) {
        return null;
      }
      return state.projects[0];
    },
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
    builder.addCase(getProjects.pending, (state, { payload }) => {
      state.submissionState = 'PENDING';
    });
    builder.addCase(getProjects.fulfilled, (state, { payload }) => {
      if (payload.status === 'Error') {
        state.submissionState = 'FAILED';
        state.projects = null;
      }
      state.submissionState = 'OK';
      state.projects = payload.result.projects;
    });
  },
});

export const { reset, getProject } = adminSlice.actions;
export default adminSlice.reducer;
