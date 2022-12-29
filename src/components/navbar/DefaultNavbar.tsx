import React from 'react';
import {
  Toolbar,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import styles from './styles';

export default function DefaultNavbar() {
  const device = useTheme();
  const isMinimized = useMediaQuery(device.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {isMinimized ? (
        <>
          <IconButton
            style={styles.burgericon}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link style={styles.contextmenu} to="/signup">
                Sign Up
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link style={styles.contextmenu} to="/organisationlogin">
                Organisation Log In
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link style={styles.contextmenu} to="/adminlogin">
                Admin Log In
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link style={styles.contextmenu} to="/about">
                About
              </Link>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Toolbar>
          <Stack direction="row" spacing={3} style={styles.linksContainer}>
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
      )}
    </div>
  );
}
