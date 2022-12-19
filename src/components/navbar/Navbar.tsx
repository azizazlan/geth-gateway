import { Toolbar, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';

import styles from './styles';

type NavbarProps = {
  mode: NavbarMode;
};

export enum NavbarMode {
  DEFAULT = 1, // for landing page
  SIGNED_IN, // for user that has logged in
  SIGN_IN, // for user who is about to log in
}

function Navbar(props: NavbarProps) {
  const { mode } = props;
  if (mode === NavbarMode.DEFAULT) {
    return (
      <Toolbar>
        <Stack direction="row" spacing={5} style={styles.linksContainer}>
          <Link style={styles.hyperlink} to="/signup">
            Sign Up
          </Link>
          <Link style={styles.hyperlink} to="/organisationlogin">
            Organisation Log In
          </Link>
          <Link style={styles.hyperlink} to="/adminlogin">
            Admin Log In
          </Link>
          <Link style={styles.hyperlink} to="/about">
            About
          </Link>
        </Stack>
      </Toolbar>
    );
  }
  if (mode === NavbarMode.SIGNED_IN) {
    return (
      <Toolbar>
        <Stack direction="row" spacing={2} style={styles.toolbarButtons}>
          <div>
            <AccountCircle style={styles.linksContainer} />
          </div>
        </Stack>
      </Toolbar>
    );
  }
  return null;
}
export default Navbar;
