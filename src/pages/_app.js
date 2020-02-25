import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import withReduxStore from '../utils/with-redux-store';
import theme, { GlobalStyle } from '../utils/theme';
import config from '../utils/config';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <title>{config.siteName}</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css"
            />
          </Head>
          <Component {...pageProps} />
          <GlobalStyle />
        </>
      </ThemeProvider>
    );
  }
}

export default withReduxStore(MyApp);
