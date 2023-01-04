/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import createProject from '../../thunks/user/createProject';
import getProjects from '../../thunks/user/getProjects';
import signIn from '../../thunks/user/signIn';
import { SubmissionStates } from '../submissionStates';

const dummyUser = {
  id: 69,
  name: 'Jebon bin Muntal',
  email: 'jebon@gmail.com',
  jobPosition: 'IT Executive',
  role: 'ORG_USER',
  org: {
    id: 1,
    name: 'Jabatan Pembangunan Melayu',
    website: 'https://www.mangkuk.gov.my',
  },
};

const dummyProjects = [
  {
    id: 1,
    name: 'Projek Sijil Dato',
    description: 'Memantau gajah-gajah di dalam hutan semenanjung',
    status: 'PENDING',
    apiKey: null,
    createdAt: 'YYYY-MM-DD hh:mm:ss',
  },
  {
    id: 2,
    name: 'Projek Pekerja Poyo',
    description: 'Sistem Pensijilan para pekerja bersifat poyo',
    status: 'APPROVED',
    apiKey: 'ABCcfdjkslfjdskfj123fkdsff',
    createdAt: 'YYYY-MM-DD hh:mm:ss',
  },
  {
    id: 3,
    name: 'Projek KPI',
    description: 'Sistem Permarkahan KPI Perkerja',
    status: 'PENDING',
    apiKey: null,
    createdAt: 'YYYY-MM-DD hh:mm:ss',
  },
];

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
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
