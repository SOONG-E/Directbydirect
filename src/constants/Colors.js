import { createTheme } from '@mui/material/styles';

export const DarkColors = createTheme({
  palette: {
    primary: {
      main: '#455c79',
      contrastText: '#000',
      dial: '#112744',
    },
    History: {
      main: '#0a1929',
      contrastText: '#ffffff',
      border: '#00000000',
      errorBg: '#ffffff20',
    },
    Theme: {
      bgColor: '#E9E9EA',
    },
    object: {
      main: '#1a4169',
      contrastText: '#000',
    },
    selectedObject: {
      main: '#94a6ba',
      contrastText: '#000',
    },
    StartDirectory: {
      main: '#5E8790',
    },
  },
});

export const LightColors = createTheme({
  palette: {
    primary: {
      main: '#FCF9ED',
      contrastText: '#000',
      dial: '#112744',
    },
    History: {
      main: '#ffffff90',
      contrastText: '#000000',
      border: '#000000',
      errorBg: '#D6B75A40',
    },
    Theme: {
      bgColor: '#ecbe30',
    },
    object: {
      main: '#e7d02f',
      contrastText: '#000',
    },
    selectedObject: {
      main: '#fdec74',
      contrastText: '#000',
    },
    StartDirectory: {
      main: '#5E8790',
    },
  },
});
