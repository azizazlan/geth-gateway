import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material';

import Header from '../header';

function HeaderToolbar() {
  return (
    <AppBar
      style={{
        margin: 0,
      }}
      position="static"
      color="default"
    >
      <Toolbar>
        <Typography style={{ marginRight: 500 }} sx={{ flexgrow: 1 }}>
          <Header />
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="text" color="inherit">
            Signup Now!
          </Button>
          <Button variant="text" color="inherit">
            Organisation Login
          </Button>
          <Button variant="text" color="inherit">
            Admin Login
          </Button>
          <Button variant="text" color="inherit">
            About
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default HeaderToolbar;
