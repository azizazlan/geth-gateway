/* eslint-disable no-console */
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Divider, IconButton, Switch } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../Logo/Logo';
import styles from './styles';
import { useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import { i18n } from '../../translations/i18n';

function IndexMenu() {
  const label = { inputProps: { 'aria-label': 'EN/BM' } };

  const toggleLng = () => {
    if (i18n.language.includes('en')) {
      i18n.changeLanguage('ms-MY');
    } else {
      i18n.changeLanguage('en-GB');
    }
  };

  return (
    <div style={styles.indexDiv}>
      <Link to="/signup" style={styles.link}>
        Sign up
      </Link>
      <Divider />
      <Link to="/signin" style={styles.link}>
        Sign in
      </Link>
      <Switch
        {...label}
        color="secondary"
        defaultChecked={false}
        onChange={toggleLng}
      />
    </div>
  );
}

function UserProfile() {
  return (
    <IconButton>
      <PersonIcon style={{ color: 'white' }} />
    </IconButton>
  );
}

export default function Navbar() {
  const { isSignedIn } = useUserSelector((state: UserState) => state.user);
  return (
    <AppBar position="fixed">
      <Toolbar>
        <div style={styles.toolbarInnerDiv}>
          <div style={styles.logoDiv}>
            <Logo />
          </div>
          {isSignedIn ? <UserProfile /> : <IndexMenu />}
        </div>
      </Toolbar>
    </AppBar>
  );
}
