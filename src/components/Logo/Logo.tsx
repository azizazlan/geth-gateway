import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './styles';

export default function Logo() {
  return (
    <div style={styles.container}>
      <Link to="/">
        <div>
          <Typography variant="h4" color="secondary">
            geth-gateway
          </Typography>
        </div>
        <div>
          <Typography variant="body2" style={{ color: 'white' }}>
            MAMPU-Ethereum Network
          </Typography>
        </div>
      </Link>
    </div>
  );
}
