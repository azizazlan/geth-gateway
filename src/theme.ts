import { createTheme } from '@mui/material/styles';

const { palette } = createTheme();
const { augmentColor } = palette;

const createColor = (mainColor: any) =>
  augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: createColor('#192a56'),
    secondary: createColor('#f1c40f'),
  },
  typography: {
    h1: {
      fontFamily: 'Oswald',
    },
    h2: {
      fontFamily: 'Oswald',
    },
    h3: {
      fontFamily: 'Oswald',
    },
    h4: {
      fontFamily: 'Oswald',
    },
    h5: {
      fontFamily: 'Oswald',
    },
    h6: {
      fontFamily: 'Oswald',
    },
    button: {
      fontFamily: 'Oswald',
    },
  },
});

export default theme;
