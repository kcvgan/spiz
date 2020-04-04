import App from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import appTheme from '@/theme';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={appTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}
