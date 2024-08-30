import React from 'react';
import { useTypesOfAuctionBounceStyles } from './useHowDoesItWorks';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import Footer from 'src/components/common/Footer';

export const HowDoesItWorks = () => {
  const classes = useTypesOfAuctionBounceStyles();
  const offerList = [
    {
      title: 'providing multiple avenues for income',
      desc: 'Bounce Booster optimizes your yield by providing multiple avenues for income, including Binance Launchpool investments, Funding Rate Arbitrage strategies, $AUCTION farming and access to Bounce on-chain Launchpad IDOs.',
    },
    {
      title: 'Streamlines your participation in Binance Launchpool',
      desc: 'Bounce Booster streamlines your participation in Binance Launchpool, a platform where users can stake BNB and FDUSD to mine liquidity and farm new tokens before they are officially listed on the exchange. Instead of navigating Binance Launchpool directly, you only need to deposit your BNB/FDUSD into Bounce Booster. Our protocol then uses these deposits to engage in Binance Launchpool on your behalf. Profits generated from these investments are returned to you in the form of BNB.',
    },
    {
      title: 'Offers Funding Rate Arbitrage strategies',
      desc: 'Besides Binance Launchpool opportunities, Bounce Booster offers Funding Rate Arbitrage strategies for those who deposit BNB/FDUSD. Funding Rate Arbitrage leverages the periodic payments exchanged between long and short positions in cryptocurrency perpetual futures markets to profit from the gap between the perpetual contract funding rates and the spot prices of the underlying asset.',
    },
    {
      title: 'use your $AUCTION to purchase IDO tokens',
      desc: 'Some of the trading fees generated from these Funding Rate Arbitrage strategies are reinvested into our ecosystem through $AUCTION buyback, offering $AUCTION farming pools. As an $AUCTION holder, you can participate in the Initial DEX Offerings listed on the Bounce Private Launchpad and use $AUCTION to purchase IDO tokens.',
    },
  ];
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="booster-how-foes-it-works">
        <Container maxWidth={false} className={classes.container}>
          <WithAnimation
            className={classes.title}
            Component={Typography}
            variant="h2"
          >
            How does Bounce Booster work?
          </WithAnimation>

          <WithAnimation
            className={classes.title1}
            Component={Typography}
            variant="h2"
          >
            Bounce Booster
          </WithAnimation>

          <WithAnimation
            defaultAnimation={false}
            rootMargin={'50%'}
            className={classes.p2}
            addClassInView={classes.p2Show}
          >
            <img
              className={classes.animationImg}
              src={'/images/booster/bottom.png'}
              alt=""
            />
          </WithAnimation>
        </Container>
        <Footer colorTheme={'light'} noBg={true}></Footer>
      </div>
    </WithScrollFreezing>
  );
};
