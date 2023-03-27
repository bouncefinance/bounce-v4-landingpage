import React from 'react';
import BounceAuctionBlock from '../../components/investment/BounceAuctionBlock';
import InvestmentBanner from 'src/components/investment/InvestmentBanner';
import BounceOtcBlock from 'src/components/investment/BounceOtcBlock';
import BounceMAndABlock from 'src/components/investment/BounceMAndABlock';
import BounceNFTBlock from 'src/components/investment/BounceNFTBlock';
import Head from 'next/head';

export type IInvestmentProps = {};

const Investment: React.FC<IInvestmentProps> = ({ }) => {
  return (
    <div>
      <Head>
        <title>Auction Tools | Bounce</title>
        <meta name="description" content="Auction Tools | Bounce" />
        <meta name="keywords" content="Auction Tools | Bounce" />
      </Head>
      <InvestmentBanner />
      <BounceAuctionBlock />
      <BounceOtcBlock />
      <BounceMAndABlock />
      <BounceNFTBlock />
    </div>
  );
}

export default Investment;