/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type CreateProjectPayload = {
  name: string;
  description: string;
  userId: string;
  orgId: string;
};

const URL = `${import.meta.env.VITE_APP_API}/create-project`;
const appPassword = `${import.meta.env.VITE_APP_PASSWORD}`;
const withCredentials = import.meta.env.VITE_APP_ENABLE_SESSION === 'true';

const createProject = createAsyncThunk(
  'createProject',
  async (payload: CreateProjectPayload) => {
    const { name, description, userId, orgId } = payload;
    try {
      const { data } = await axios.post(
        URL,
        {
          appPassword,
          userId,
          orgId,
          projectName: name,
          projectDesc: description,
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
export default createProject;
