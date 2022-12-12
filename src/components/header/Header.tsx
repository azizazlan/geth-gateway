import { Typography, Box, AppBar, Toolbar } from '@mui/material';

import HeaderToolbar from '../headerToolbar';

const commonStyles = {
  bgcolor: 'background',
  m: 1,
  borderColor: 'text.primary',
  width: '240px',
  height: '50px',
};

function Header() {
  return (
    <div>
      <AppBar
        style={{
          margin: 0,
        }}
        position="static"
        color="default"
      >
        <Toolbar>
          <Typography style={{ marginRight: 500 }} sx={{ flexgrow: 1 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                ...commonStyles,
                border: 1,
                marginLeft: 4,
              }}
            >
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
