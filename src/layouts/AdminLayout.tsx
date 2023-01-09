import { styled } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import AdminHeader, { DRAWER_WIDTH } from '../components/Header/AdminHeader';
import { useAdminSelector } from '../services/hook';
import { AdminState } from '../services/store';
import AdminDrawer from '../components/Drawer/AdminDrawer';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AdminLayout() {
  const { isSignedIn } = useAdminSelector((state: AdminState) => state.admin);
  const { user } = useAdminSelector((state: AdminState) => state.admin);
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!isSignedIn) {
    return (
      <div>
        <AdminHeader open={open} handleDrawerOpen={handleDrawerOpen} />
        <Outlet />
      </div>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AdminHeader open={open} handleDrawerOpen={handleDrawerOpen} />
      <AdminDrawer
        user={user}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
