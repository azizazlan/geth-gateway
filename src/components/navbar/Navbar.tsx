import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Divider } from '@mui/material';
import Logo from '../Logo/Logo';
import styles from './styles';

export default function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <div style={styles.toolbarInnerDiv}>
          <div style={styles.logoDiv}>
            <Logo />
          </div>
          <div style={styles.linksDiv}>
            <Link to="/signup" style={styles.link}>
              Sign up
            </Link>
            <Divider />
            <Link to="/signin" style={styles.link}>
              Sign in
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
