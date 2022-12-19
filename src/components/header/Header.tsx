import { AppBar, Toolbar } from '@mui/material';
import Branding from '../branding';

import Navbar from '../navbar';
import { NavbarMode } from '../navbar/Navbar';
import styles from './styles';

type HeaderProps = {
  mode: NavbarMode;
};

function Header(props: HeaderProps) {
  const { mode } = props;
  return (
    <AppBar position="static" style={styles.root}>
      <Toolbar>
        <div style={styles.toolbarInnerDiv}>
          <div style={styles.brandingDiv}>
            <Branding />
          </div>
          <Navbar mode={mode} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
