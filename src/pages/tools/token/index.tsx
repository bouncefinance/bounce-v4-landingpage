import React from 'react';
import TokenBanner from 'src/components/token/TokenBanner';
import BinanceExchange from 'src/components/token/BinanceExchange';
import CryptoCurrenciesBlock from 'src/components/token/CryptoCurrenciesBlock';
import Head from 'next/head';

export type ITokenProps = {};

const Token: React.FC<ITokenProps> = ({ }) => {
  return (
    <div>
      <Head>
        <title>Tools for AUCTION Token | Bounce</title>
        <meta name="description" content="Tools for AUCTION Token | Bounce" />
        <meta name="keywords" content="Tools for AUCTION Token | Bounce" />
      </Head>
      <TokenBanner />
      <BinanceExchange showFooter={false} />
      <CryptoCurrenciesBlock />
    </div>
  );
}

export default Token;