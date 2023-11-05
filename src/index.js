import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import './Global-Styled.js';

const theme = {
  colors: {
    white: '#ffffff',
    colorText: '#524a4d',
    colorLabel: '#524a4d8b',
    textTable: ' #393e46',
    textHeader: '#262626',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
