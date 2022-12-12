import { Toolbar, Stack, Button } from '@mui/material';

function HeaderToolbar() {
  return (
    <Toolbar>
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
  );
}
export default HeaderToolbar;
