import { Typography, Box, AppBar, Toolbar } from '@mui/material';

import HeaderToolbar from '../headerToolbar';
import styles from './styles';

function Header() {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography>
            <Box style={styles.wordborder}>
              <Typography variant="h4">geth-gateway</Typography>
            </Box>
            <Typography variant="h6">MAMPU Private Ethereum Network</Typography>
          </Typography>
          <HeaderToolbar />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
