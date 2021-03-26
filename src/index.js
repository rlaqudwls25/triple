import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import Screen from './Screen';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Screen />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
