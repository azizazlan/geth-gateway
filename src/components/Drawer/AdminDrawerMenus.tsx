import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemIcon,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import ethereumLogo from '../../assets/eth-darker-logo.svg';
import logo32 from '../../assets/logo-32.svg';

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

export default function AdminDrawerMenus() {
  const navigate = useNavigate();

  const handleClick = (pathname: string) => {
    navigate(`/admin/${pathname}`);
  };

  return (
    <>
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
              <ListItemText primary={<ListItemPrimaryText label="Pending" />} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 12 }}>
              <ListItemText
                primary={<ListItemPrimaryText label="Approved" />}
              />
            </ListItemButton>
          </List>
        </List>
      </Box>
      <Box sx={{ margin: 1 }}>
        <List>
          <Divider />
          <ListItem key="account" disablePadding>
            <ListItemButton>
              <ListItemText primary={<ListItemPrimaryText label="Account" />} />
            </ListItemButton>
          </ListItem>
          <ListItem key="settings" disablePadding>
            <ListItemButton onClick={() => handleClick('projects')}>
              <ListItemText
                primary={<ListItemPrimaryText label="Settings" />}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key="signout" disablePadding>
            <ListItemButton onClick={() => handleClick('projects')}>
              <ListItemText
                primary={<ListItemPrimaryText label="Sign out" />}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
