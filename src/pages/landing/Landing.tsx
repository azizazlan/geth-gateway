import { Typography } from '@mui/material';

import DescPanel from '../../components/descPanel';
import Montage from '../../components/montage';
import Header from '../../components/header';

function Landing() {
  return (
    <div>
      <Header />
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
