import { Typography } from '@mui/material';
import DescPanel from '../../components/descPanel';
import Montage from '../../components/montage';
import Header from '../../components/header';
import styles from './styles';

function Landing() {
  return (
    <>
      <Header />
      <div style={styles.headline}>
        <Typography variant="h4">
          Connect your dApp or web3 solution to the private (Ethereum)
          blockchain network infrastructure.
        </Typography>
      </div>
      <Montage />
      <DescPanel />
    </>
  );
}

export default Landing;
