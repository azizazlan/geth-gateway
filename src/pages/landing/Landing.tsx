import React from 'react';
import { Typography } from '@mui/material';

import HeaderToolbar from '../../components/headerToolbar';
import DescPanel from '../../components/descPanel';
import Montage from '../../components/montage';

function Landing() {
  return (
    <div>
      <HeaderToolbar />
      <Typography variant="h4" style={{ textAlign: 'center' }}>
        Connect your dApp or web3 solution to the private (Ethereum) blockchain
        network infrastructure.
      </Typography>
      <Montage />
      <DescPanel />
    </div>
  );
}

export default Landing;
