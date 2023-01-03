/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { createAsyncThunk } from '@reduxjs/toolkit';

type SignInPayload = {
  email: string;
  password: string;
};

const signIn = createAsyncThunk('signIn', async (payload: SignInPayload) => {
    const { email, password } = payload;
    console.log(`email: ${email} password ${password}`)
});
export default signIn;
