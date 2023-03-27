import { ServerStyleSheets } from '@material-ui/styles';
import Document, {
  DocumentContext,
  Head,
  Main,
  Html,
  NextScript,
} from 'next/document';
import React from 'react';
import flush from 'styled-jsx/server';
import intl from 'react-intl-universal';
import { t } from 'src/i18n/intl';

type Props = {};

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_document.tsx
 */
class MyDocument extends Document<Props> {
  static getInitialProps = async (ctx: DocumentContext): Promise<any> => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();

    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <>
          {sheets.getStyleElement()}
          {flush() || null}
        </>
      ),
    };
  };

  render() {
    return (
      <Html dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/images/favicon.svg" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/images/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
