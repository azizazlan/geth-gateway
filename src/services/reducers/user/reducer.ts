import { createSlice } from '@reduxjs/toolkit';

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
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
