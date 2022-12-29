import { AppBar, Toolbar } from '@mui/material';
import Branding from '../Branding/Branding';

import Navbar, { NavbarMode } from '../Navbar/Navbar';
import styles from './styles';

type HeaderProps = {
  mode: NavbarMode;
};

export default function Header(props: HeaderProps) {
  const { mode } = props;
  return (
    <AppBar position="static">
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
