import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import 'src/assets/fonts/style.css';
import React, { useEffect } from 'react';
import { Layout } from '../modules/layout/components/Layout';
import 'swiper/swiper.min.css';
import { mainTheme } from 'src/modules/theme/mainTheme';
import Head from 'next/head';
import { t } from 'src/i18n/intl';
// import HomeDialog from 'src/components/home/homeDialog';
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
        <meta name="title" content={'Bounce Finance'} />
        <meta
          name="keywords"
          content={'bounce, bounce finance, finance, DeFi, bot'}
        />
        <meta
          name="description"
          content={
            'Bounce powers an ecosystem of products for auctions. Build, design, connect, collect and trade all kinds of assets, tokens and NFTs across multiple blockchains.'
          }
        />
        <meta property="og:title" content={'Bounce'} />
        <meta
          property="og:description"
          content={
            'Bounce powers an ecosystem of products for auctions. Build, design, connect, collect and trade all kinds of assets, tokens and NFTs across multiple blockchains.'
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bounce.finance/" />
        <meta property="og:image" content="/images/social-share.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta
          name="google-site-verification"
          content="B5lx8TxvQcU-puuVS2dQoES9kmvDgkf-OVMy7KxTGLI"
        />
        <title>{'Bounce Finance'}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W23MQH5JZ9"
        ></script>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        ></link>
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=f0707b31-0c92-4230-8947-b71f925d0f23"
        >
          {' '}
        </script>
      </Head>

      <MuiThemeProvider theme={mainTheme}>
        {/* <HomeDialog /> */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuiThemeProvider>
    </>
  );
}

export default App;
