/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from 'ethers';

const getNetworkId = createAsyncThunk('getNetworkId', async () => {
  const provider = ethers.providers.getDefaultProvider('http://localhost:8545');
  const network = await provider.getNetwork();
  return network.chainId; // aka network id
});
export default getNetworkId;
