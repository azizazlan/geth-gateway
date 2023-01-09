/* eslint-disable no-console */
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Logo from '../Logo/Logo';
import logoImg from '../../assets/logo.svg';
import styles from './styles';
import { useAdminSelector } from '../../services/hook';
import { AdminState } from '../../services/store';

export const DRAWER_WIDTH = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type AdminHeaderProps = {
  open: boolean | undefined;
  handleDrawerOpen: () => void | undefined;
};

export default function AdminHeader(props: AdminHeaderProps) {
  const { open, handleDrawerOpen } = props;
  const { isSignedIn } = useAdminSelector((state: AdminState) => state.admin);

  if (!isSignedIn) {
    return (
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <div style={styles.toolbarInnerDiv}>
            <div style={styles.logoDiv}>
              <Logo />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <StyledAppBar position="fixed" open={open} elevation={0}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={logoImg}
          alt="Bunga raya logo"
          style={{ width: '32px', height: 'auto', marginRight: '7px' }}
        />
        <Typography variant="h6" noWrap component="div" sx={{ color: 'white' }}>
          Bunga Raya
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}
