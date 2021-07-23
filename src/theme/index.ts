import {createTheme, Theme} from '@material-ui/core/styles';

import MuiStyles from './MuiStyles/index';
import {ThemeOptions} from '@material-ui/core/styles/createTheme';

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Ubuntu', 'Helvetica Neue', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#D3A4F0',
      light: '#E1C1F3',
      dark: '#9372A6',
    },
    secondary: {
      main: '#E3F0A3',
      dark: '#96A34E',
    },
    background: {
      default: '#F5E3FF',
      paper: '#E1C1F3',
    },
    error: {
      main: '#FF5300',
    },
    text: {
      primary: '#0D0C0E',
      secondary: '#F5E3FF',
      hint: '#736F79',
      disabled: '#A8A2B0',
    },
  },
  spacing: 8,
  overrides: {
    ...MuiStyles,
  },
};

const theme: Theme = createTheme(themeOptions);

export default theme;
