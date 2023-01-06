/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type SignInPayload = {
  email: string;
  password: string;
};

const URL = `${import.meta.env.VITE_APP_API}/admin/signin`;
const appPassword = `${import.meta.env.VITE_APP_PASSWORD}`;
const withCredentials = import.meta.env.VITE_APP_ENABLE_SESSION === 'true';

const signIn = createAsyncThunk('signIn', async (payload: SignInPayload) => {
  const { email, password } = payload;
  try {
    const { data } = await axios.post(
      URL,
      {
        appPassword,
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        withCredentials,
      }
    );
    return data;
  } catch (error) {
    return null;
  }
});
export default signIn;
