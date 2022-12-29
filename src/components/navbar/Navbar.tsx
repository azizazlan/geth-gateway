import React from 'react';
import { Toolbar, Stack } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

import DefaultNavbar from './DefaultNavbar';
import styles from './styles';

type NavbarProps = {
  mode: NavbarMode;
};

export enum NavbarMode {
  DEFAULT = 1, // for landing page
  SIGNED_IN, // for user that has logged in
  SIGN_IN, // for user who is about to log in
}

export default function Navbar(props: NavbarProps) {
  const { mode } = props;

  if (mode === NavbarMode.DEFAULT) {
    return <DefaultNavbar />;
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
