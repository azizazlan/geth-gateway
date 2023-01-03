/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import getProjects from '../../thunks/user/getProjects';
import signIn from '../../thunks/user/signIn';
import { SubmissionStates } from '../submissionStates';

interface UserState {
  isSignedIn: boolean;
  submissionState: SubmissionStates;
  submissionErrMsg: string | null;
  projects: Array<any> | null;
  user: any | null;
}

const initialState: UserState = {
  submissionState: 'IDLE',
  submissionErrMsg: null,
  projects: null,
  isSignedIn: true,
  // user: null,
  user: {
    id: 69,
    name: 'Jebon bin Muntal',
    email: 'jebon@gmail.com',
    jobPosition: 'IT Executive',
    role: 'ORG_USER',
    org: {
      id: 1,
      name: 'Jabatan Mangkok Ayun',
      website: 'https://www.mangkuk.gov.my',
    },
  },
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
      state.submissionErrMsg = null;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      if (!payload) {
        state.isSignedIn = false;
        state.submissionState = 'FAILED';
        state.submissionErrMsg = 'Invalid credential';
        return;
      }
      if (!payload.result) {
        state.isSignedIn = false;
        state.submissionState = 'FAILED';
        state.submissionErrMsg = 'Invalid credential';
        return;
      }
      state.user = payload.result.user;
      state.isSignedIn = true;
      state.submissionState = 'OK';
      state.submissionErrMsg = null;
    });
    builder.addCase(getProjects.pending, (state, { payload }) => {
      state.submissionState = 'PENDING';
      state.submissionErrMsg = null;
    });
    builder.addCase(getProjects.fulfilled, (state, { payload }) => {
      console.log(payload);
      if (payload.status === 'Error') {
        state.projects = null;
        state.submissionState = 'FAILED';
        return;
      }
      if (!payload.result) {
        state.projects = null;
        state.submissionState = 'FAILED';
        return;
      }
      state.projects = payload.result.projects;
      state.submissionState = 'OK';
    });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
