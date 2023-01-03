import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  inSession: boolean;
}

const initialState: AppState = {
  inSession: false,
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    reset: () => initialState,
  },
});

export const { reset } = appSlice.actions;
export default appSlice.reducer;
