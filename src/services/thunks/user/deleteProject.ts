/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type DeleteProjectPayload = {
  userId: string;
  projectId: string;
};

const URL = `${import.meta.env.VITE_APP_API}/delete-project`;
const appPassword = `${import.meta.env.VITE_APP_PASSWORD}`;
const withCredentials = import.meta.env.VITE_APP_ENABLE_SESSION === 'true';

const deleteProject = createAsyncThunk(
  'deleteProject',
  async (payload: DeleteProjectPayload) => {
    const { userId, projectId } = payload;
    try {
      const { data } = await axios.post(
        URL,
        {
          appPassword,
          userId,
          projectId,
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
export default deleteProject;
