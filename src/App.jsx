import React from 'react';

import BannerMaker from 'domain/BannerMaker';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import GlobalStyles from './GlobalStyles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'BMDOHYEON',
      // 'Roboto',
      // 'fontsource-roboto',
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
