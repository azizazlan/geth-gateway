import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ethereumLogo from '../../assets/eth-darker-logo.svg';
import logo32 from '../../assets/logo-32.svg';
import { DRAWER_WIDTH } from '../Header/AdminHeader';

interface PrimaryTextProps {
  label: string;
}

function ListItemPrimaryText({ label }: PrimaryTextProps) {
  return (
    <Typography component="span" variant="body2">
      {label}
    </Typography>
  );
}

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
  const navigate = useNavigate();

  const handleClick = (pathname: string) => {
    navigate(`/admin/${pathname}`);
  };

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
        <div
          style={{
            minWidth: '175px',
            alignItems: 'start',
          }}
        >
          <Typography variant="h6">ADMIN</Typography>
        </div>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box
          sx={{
            minHeight: '95px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src="/broken-image.jpg" sx={{ marginBottom: 1 }} />
          {user ? <Typography variant="body2">{user.email}</Typography> : null}
        </Box>
        <Divider />
        <Box sx={{ flexGrow: 1 }}>
          <List>
            <ListItem key="dashboard" disablePadding>
              <ListItemButton onClick={() => handleClick('dashboard')}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<ListItemPrimaryText label="Dashboard" />}
                />
              </ListItemButton>
            </ListItem>
            <ListItem key="gethNodes" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={ethereumLogo} alt="ethereum logo" />
                </ListItemIcon>
                <ListItemText primary={<ListItemPrimaryText label="Nodes" />} />
              </ListItemButton>
            </ListItem>
            <ListItem key="projects" disablePadding>
              <ListItemButton onClick={() => handleClick('projects')}>
                <ListItemIcon>
                  <img src={logo32} alt="bunga raya logo" />
                </ListItemIcon>
                <ListItemText
                  primary={<ListItemPrimaryText label="Projects" />}
                />
              </ListItemButton>
            </ListItem>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 12 }}>
                <ListItemText
                  primary={<ListItemPrimaryText label="Pending" />}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 12 }}>
                <ListItemText
                  primary={<ListItemPrimaryText label="Approved" />}
                />
              </ListItemButton>
            </List>
          </List>
        </Box>
        <Box sx={{ margin: 3 }}>
          <Typography variant="caption" sx={{ color: 'grey' }}>
            Version 0.0.0 | thuleen.io
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
