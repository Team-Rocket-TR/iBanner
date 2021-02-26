import React from 'react';

import BannerMaker from 'domain/BannerMaker';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import 'fontsource-roboto';

import GlobalStyles from './GlobalStyles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'fontsource-roboto',
      'Roboto',
    ].join(','),
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <BannerMaker />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
