import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './styles';
import logo from '../../assets/logo.svg';

export default function Logo() {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="logo" style={styles.logo} />
      </div>
      <div style={styles.textContainer}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <div>
            <Typography variant="h4">BUNGA RAYA</Typography>
          </div>
          <div>
            <Typography variant="body2" style={{ color: 'black' }}>
              Ethereum Network Infrastructure
            </Typography>
          </div>
        </Link>
      </div>
    </div>
  );
}
