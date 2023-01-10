import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Avatar from '@mui/material/Avatar/Avatar';
import { DRAWER_WIDTH } from '../Header/AdminHeader';
import AdminDrawerMenus from './AdminDrawerMenus';
import styles from './styles';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

type AdminDrawerProps = {
  open: boolean;
  handleDrawerClose: () => void;
  user: any;
};

export default function AdminDrawer(props: AdminDrawerProps) {
  const theme = useTheme();
  const { open, handleDrawerClose, user } = props;

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Box sx={styles.drawerHdr}>
          <Typography variant="h6">ADMIN</Typography>
        </Box>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Box sx={styles.menusContainer}>
        <Box sx={styles.profileContainer}>
          <Avatar sx={styles.avatar} src="../../assets/imgs/jackSparrow.png" />
          {user ? <Typography variant="body2">{user.email}</Typography> : null}
        </Box>
        <Divider />
        <AdminDrawerMenus />
        <Box sx={styles.footer}>
          <Typography variant="caption" sx={{ color: 'grey' }}>
            Version 0.0.0 | thuleen.io
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
