/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ethers } from 'ethers';

type SignInPayload = {
  userId: string; // admin's user id
};

const URL = `${import.meta.env.VITE_APP_API}/admin/projects`;
console.log(URL);
const appPassword = `${import.meta.env.VITE_APP_PASSWORD}`;
const withCredentials = import.meta.env.VITE_APP_ENABLE_SESSION === 'true';

const getProjects = createAsyncThunk(
  'admin.getProjects',
  async (payload: SignInPayload) => {

    const provider = ethers.providers.getDefaultProvider(
      'http://localhost:8545'
    );
    const netId = await provider.getNetwork();
    console.log(netId);

    const { userId } = payload;
    console.log(`userId ${userId}`);
    try {
      const { data } = await axios.post(
        URL,
        {
          appPassword,
          userId,
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
  }
);
export default getProjects;
