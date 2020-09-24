import '../styles/globals.css'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import { wrapper } from '../redux/store';
import { ThemeProvider } from '@material-ui/core/styles';
import { Theme } from '../components/theme';
import Loading from '../components/loading';
import { useStore } from 'react-redux';
import { persistStore } from 'redux-persist';
import ReactGA from 'react-ga';


export default wrapper.withRedux(({ Component, pageProps }) => {
  const store = useStore();
  const isClient = typeof window !== 'undefined';
  if (isClient) {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING);
    ReactGA.ga('set', 'checkProtocolTask', null);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  return (
    <div>     <Head>

      <title>Project Title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b25d3e" />
      <meta name="apple-mobile-web-app-title" content="Project Title" />
      <meta name="application-name" content="Project Title" />
      <meta name="msapplication-TileColor" content="#f5f2e9" />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta name="description" content="Project Description" />
      <link href="https://fonts.googleapis.com/css2?family=Megrim&family=Roboto&display=swap"
        rel="stylesheet"></link>

      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='ESOM' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='msapplication-config' content='/browserconfig.xml' />
      <meta name='msapplication-tap-highlight' content='no' />


      <meta property='og:type' content='Website' />
      <meta property='og:title' content='Project Title' />
      <meta property='og:description' content='Project Description' />
      <meta property='og:site_name' content='Project Title' />
      <meta property='og:url' content='https://site.com' />
      <meta property='og:image' content='https://res.cloudinary.com/dq3t9ft8q/image/upload/v1592922806/Hackccent_5_sj1nwi.png' />

    </Head>
      <PersistGate persistor={store.__persistor} loading={<Loading />}>
        <ThemeProvider theme={Theme}>

          <Component {...pageProps} />

        </ThemeProvider>
      </PersistGate>
    </div>

  );
});
