import { createTheme } from '@mui/material/styles';
import { lime } from '@mui/material/colors';

const Colors = createTheme({
  palette: {
    primary: {
      main: '#838383',
      contrastText: '#000',
    },
    button: {
      main: '#838383',
      contrastText: '#9cbdd4',
    },
    object: {
      main: '#A5D9F3',
      contrastText: '#000',
    },
    selectedObject: {
      main: '#5E8790',
      contrastText: '#000',
    },
    StartDirectory: {
      main: '#5E8790',
    },
    ErrorLine: {
      main: '#d32f2f',
    },
    CmdLine: {
      main: '#2e7d32',
    },
  },
});

export default Colors;
