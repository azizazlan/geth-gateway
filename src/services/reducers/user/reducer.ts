/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import createProject from '../../thunks/user/createProject';
import deleteProject from '../../thunks/user/deleteProject';
import getProjects from '../../thunks/user/getProjects';
import signIn from '../../thunks/user/signIn';
import { SubmissionStates } from '../submissionStates';
import dummyUser from './dummyUser';
import dummyProjects from './dummyProjects';

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
  isSignedIn: false,
  user: null,
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
    builder.addCase(createProject.pending, (state, { payload }) => {
      state.submissionState = 'PENDING';
      state.submissionErrMsg = null;
    });
    builder.addCase(createProject.fulfilled, (state, { payload }) => {
      if (!payload) {
        state.submissionState = 'FAILED';
        return;
      }
      if (!state.projects) {
        state.submissionState = 'FAILED';
        return;
      }
      state.projects = [...state.projects, payload.result.project];
      state.submissionState = 'OK';
    });
    builder.addCase(deleteProject.pending, (state, { payload }) => {
      state.submissionState = 'PENDING';
      state.submissionErrMsg = null;
    });
    builder.addCase(deleteProject.fulfilled, (state, { payload }) => {
      // logic if else here
      if (payload.status === 'Error') {
        state.submissionState = 'FAILED';
        state.submissionErrMsg = 'Failed to delete a project';
        return;
      }

      if (!state.projects) {
        state.submissionState = 'FAILED';
        state.submissionErrMsg = 'Failed to delete a project';
        return;
      }

      state.submissionState = 'OK';
      state.submissionErrMsg = null;

      const projects = [...state.projects];
      const updatedProjects = projects.map((p) => {
        if (p.id === payload.result.deletedProjectId) {
          p.isDeleted = true;
        }
        return p;
      });
      state.projects = [...updatedProjects];
    });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
