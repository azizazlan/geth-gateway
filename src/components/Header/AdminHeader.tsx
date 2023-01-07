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
          {isSignedIn ? <UserProfile /> : null}
        </div>
      </Toolbar>
    </AppBar>
  );
}
