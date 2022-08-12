import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import MainThemeProvider from "./Providers/theme-provider";
import theme from "./Providers/theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MainThemeProvider>
        <App />
      </MainThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
