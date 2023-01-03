/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type SignInPayload = {
  email: string;
  password: string;
};

const URL = `http://127.0.0.1:3000/signin`;
const appPassword = 'AppPassword12!'
const role = "ORG_USER";

const signIn = createAsyncThunk('signIn', async (payload: SignInPayload) => {
    const { email, password } = payload;
    console.log(`email: ${email} password ${password}`)
    const { data } = await axios.post(
      URL,
      {
        appPassword,
        email,
        password,
        role
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        // withCredentials: true,
      }
    );
    return data;
});
export default signIn;
