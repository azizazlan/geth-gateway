import { Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import Montage from '../../components/Montage/Montage';
import { useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import styles from './styles';

export default function Landing() {
  const { user } = useUserSelector((state: UserState) => state.user);

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.headline}>
        <Typography variant="h4">
          Connect your dApp or web3 solution to the (Ethereum) blockchain
          network infrastructure.
        </Typography>
      </div>
      <Montage />
    </div>
  );
}
