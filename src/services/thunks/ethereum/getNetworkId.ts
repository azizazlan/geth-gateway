/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from 'ethers';

const RPC_PRODUCTION = 'http://pusbin.mampu.gov.my';
const RPC_DEVELOPMENT = 'http://localhost:8545';

const getNetworkId = createAsyncThunk(
  'getNetworkId',
  async ({ networkType }: { networkType: string }) => {
    let rpc = RPC_DEVELOPMENT;

    if (networkType === 'production') {
      rpc = RPC_PRODUCTION;
    }

    console.log(rpc);

    const provider = ethers.providers.getDefaultProvider(`${rpc}`);
    const network = await provider.getNetwork();
    console.log(network);
    return network.chainId; // aka network id
  }
);
export default getNetworkId;
