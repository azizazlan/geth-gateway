import { AppBar, Toolbar } from '@mui/material';
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
        </div>
      </Toolbar>
    </AppBar>
  );
}
