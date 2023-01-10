/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import getNetworkId from '../../thunks/ethereum/getNetworkId';
import { SubmissionStates } from '../submissionStates';

interface EthereumState {
  submissionState: SubmissionStates;
  networkId: number;
}

const initialState: EthereumState = {
  submissionState: 'IDLE',
  networkId: -1,
};

export const ethereumSlice = createSlice({
  name: 'ethereumSlice',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getNetworkId.pending, (state, { payload }) => {
      state.submissionState = 'PENDING';
    });
    builder.addCase(getNetworkId.fulfilled, (state, { payload }) => {
      // TODO : Implement error case
      state.submissionState = 'OK';
      state.networkId = payload;
    });
  },
});

export const { reset } = ethereumSlice.actions;
export default ethereumSlice.reducer;
