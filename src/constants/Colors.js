import { createTheme } from '@mui/material/styles';
import { lime } from '@mui/material/colors';

const Colors = createTheme({
  palette: {
    primary: {
      main: lime[300],
      contrastText: '#000',
    },
    button: {
      main: lime[300],
    },
    object: {
      main: '#f50057',
    },
    selectedObject: {
      main: lime[200],
    },
  },
});

export default Colors;
