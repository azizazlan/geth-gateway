import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Divider, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../Logo/Logo';
import styles from './styles';
import { useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';

function Links() {
  return (
    <div style={styles.linksDiv}>
      <Link to="/signup" style={styles.link}>
        Sign up
      </Link>
      <Divider />
      <Link to="/signin" style={styles.link}>
        Sign in
      </Link>
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
          {isSignedIn ? <UserProfile /> : <Links />}
        </div>
      </Toolbar>
    </AppBar>
  );
}
