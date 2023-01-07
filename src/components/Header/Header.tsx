/* eslint-disable no-console */
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Divider,
  IconButton,
  Switch,
  Button,
  Typography,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import styles from './styles';
import { useUserSelector } from '../../services/hook';
import { UserState } from '../../services/store';
import { i18n } from '../../translations/i18n';

function IndexMenu() {
  const [lng, setLng] = useState('EN');
  const toggleLng = () => {
    if (i18n.language.includes('en')) {
      i18n.changeLanguage('ms-MY');
      setLng('BM');
    } else {
      i18n.changeLanguage('en-GB');
      setLng('EN');
    }
  };

  return (
    <div style={styles.indexDiv}>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/signup"
      >
        get started
      </Button>
      <div style={{ backgroundColor: 'white', width: '1px', height: '27px' }} />
      <Link to="/signin" style={styles.link}>
        Login
      </Link>
      <div style={styles.lngBtnDiv}>
        <IconButton onClick={toggleLng}>
          <LanguageIcon style={styles.lngIconBtn} />
        </IconButton>
        <Typography>{lng}</Typography>
      </div>
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
