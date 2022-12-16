import { AppBar, Toolbar } from '@mui/material';
import Branding from '../branding';

import HeaderToolbar from '../headerToolbar';
import styles from './styles';

function Header() {
  return (
    <AppBar
      style={{ position: 'absulute', top: 0 }}
      position="static"
      color="default"
    >
      <Toolbar>
        <Branding />
        <HeaderToolbar />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
