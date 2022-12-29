import { Typography } from '@mui/material';

import DescPanel from '../../components/DescPanel/DescPanel';
import Montage from '../../components/Montage/Montage';
import Header from '../../components/Header/Header';
import styles from './styles';
import { NavbarMode } from '../../components/Navbar/Navbar';

export default function Landing() {
  return (
    <>
      <Header mode={NavbarMode.DEFAULT} />
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
