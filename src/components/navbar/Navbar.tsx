import { Toolbar, Stack } from '@mui/material';
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
        <Stack direction="row" spacing={2} style={styles.linksContainer}>
          <div>Links 1</div>
          <div>Links 2</div>
          <div>Links 3</div>
          <div>Links 4</div>
        </Stack>
      </Toolbar>
    );
  }
  if (mode === NavbarMode.SIGNED_IN) {
    return (
      <Toolbar>
        <Stack direction="row" spacing={2} style={styles.toolbarButtons}>
          <div>Usr profile</div>
        </Stack>
      </Toolbar>
    );
  }
  return null;
}
export default Navbar;
