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
import { useNavigate } from 'react-router-dom';
import {
  FaProjectDiagram,
  FaEthereum,
  FaBorderAll,
  FaCog,
  FaUserCog,
  FaConnectdevelop,
  FaNetworkWired,
  FaFileContract,
} from 'react-icons/fa';

interface PrimaryTextProps {
  label: string;
}

function ListItemPrimaryText({ label }: PrimaryTextProps) {
  return (
    <Typography component="span" variant="body2" sx={{ fontSize: 14 }}>
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
                <FaBorderAll />
              </ListItemIcon>
              <ListItemText
                primary={<ListItemPrimaryText label="Dashboard" />}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key="gethNodes" disablePadding>
            <ListItemButton onClick={() => handleClick('nodes')}>
              <ListItemIcon>
                <FaEthereum />
              </ListItemIcon>
              <ListItemText
                primary={<ListItemPrimaryText label="Ethereum network" />}
              />
            </ListItemButton>
          </ListItem>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 9 }}
              onClick={() => handleClick('nodes/production')}
            >
              <ListItemIcon>
                <FaConnectdevelop />
              </ListItemIcon>
              <ListItemText
                primary={<ListItemPrimaryText label="Production" />}
              />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 9 }}
              onClick={() => handleClick('nodes/development')}
            >
              <ListItemIcon>
                <FaNetworkWired />
              </ListItemIcon>
              <ListItemText
                primary={<ListItemPrimaryText label="Development" />}
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }}>
              <ListItemIcon>
                <FaFileContract />
              </ListItemIcon>
              <ListItemText
                primary={<ListItemPrimaryText label="Smart contracts" />}
              />
            </ListItemButton>
          </List>
          <ListItem key="projects" disablePadding>
            <ListItemButton onClick={() => handleClick('projects')}>
              <ListItemIcon>
                <FaProjectDiagram />
              </ListItemIcon>
              <ListItemText
                primary={<ListItemPrimaryText label="Projects" />}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ margin: 1 }}>
        <List>
          <Divider />
          <ListItem key="account" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaUserCog />
              </ListItemIcon>
              <ListItemText primary={<ListItemPrimaryText label="Account" />} />
            </ListItemButton>
          </ListItem>
          <ListItem key="settings" disablePadding>
            <ListItemButton onClick={() => handleClick('projects')}>
              <ListItemIcon>
                <FaCog />
              </ListItemIcon>
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
