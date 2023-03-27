import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import 'src/assets/fonts/style.css';
import React, { useEffect } from 'react';
import { Layout } from '../modules/layout/components/Layout';
import 'swiper/swiper.min.css';
import { mainTheme } from 'src/modules/theme/mainTheme';
import Head from 'next/head';
import { t } from 'src/i18n/intl';

interface IAppProps {
  Component: any;
  pageProps: any;
}

function App({ Component, pageProps }: IAppProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window?.dataLayer.push(arguments);
    }
    // @ts-ignore;
    gtag('js', new Date());
    // @ts-ignore;
    gtag('config', 'G-W23MQH5JZ9');
  }, []);
  return (
    <>
      <Head>
        <meta name="title" content={'Bounce'} />
        <meta name="keywords" content={"bounce, bounce finance, finance, DeFi, bot"} />
        <meta name="description" content={'Bounce powers an ecosystem of products for auctions. Build, design, connect, collect and trade all kinds of assets, tokens and NFTs across multiple blockchains.'} />
        <meta property="og:title" content={'Bounce'} />
        <meta property="og:description" content={'Bounce powers an ecosystem of products for auctions. Build, design, connect, collect and trade all kinds of assets, tokens and NFTs across multiple blockchains.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bounce.finance/" />
        <meta property="og:image" content="/images/social-share.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <title>{'Bounce'}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W23MQH5JZ9"
        ></script>
      </Head>

      <MuiThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuiThemeProvider>
    </>
  );
}

export default App;
