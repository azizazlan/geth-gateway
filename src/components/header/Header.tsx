import { Typography, Box } from '@mui/material';
import React from 'react';

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
    </div>
  );
}

export default Header;
