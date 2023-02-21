import { createTheme } from '@mui/material/styles';
import { lime } from '@mui/material/colors';

const Colors = createTheme({
  palette: {
    primary: {
      main: '#5E8790',
      contrastText: '#000',
    },
    button: {
      main: '#ffea08',
      contrastText: '#000',
    },
    object: {
      main: '#5E8790',
      contrastText: '#000',
    },
    selectedObject: {
      main: '#ffea08',
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
