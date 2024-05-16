import React, { useEffect, useState } from 'react';
import { useTypesOfAuctionBounceStyles } from './useWhatIsBounceBooster';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import Side2 from './Side2';
import { useIsMDDown } from 'src/modules/theme';

export const WhatIsBounceBooster = () => {
  const [showImg, setShowImg] = useState(false);
  const [percent, setPercent] = useState(0);
  const classes = useTypesOfAuctionBounceStyles();
  const offerList = [
    {
      title: 'Providing multiple avenues for income',
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
      title: 'Use your $AUCTION to purchase IDO tokens',
      desc: 'Some of the trading fees generated from these Funding Rate Arbitrage strategies are reinvested into our ecosystem through $AUCTION buyback, offering $AUCTION farming pools. As an $AUCTION holder, you can participate in the Initial DEX Offerings listed on the Bounce Private Launchpad and use $AUCTION to purchase IDO tokens.',
    },
  ];
  const isMd = useIsMDDown();
  useEffect(() => {
    const container = document.getElementById('booster-what-is');
    const nextContainer = document.getElementById('booster-how-foes-it-works');
    if (!container || !nextContainer) return;
    const fnc = () => {
      if (isMd) {
        setPercent(100);
        setShowImg(true);
        return;
      }
      const rect = container.getBoundingClientRect();

      const y = rect.y;
      const yNext = nextContainer.getBoundingClientRect().y;

      const full = window.innerHeight / 2 - (window.innerHeight - rect.height);

      const percentInner = Math.floor(
        ((window.innerHeight / 2 - rect.top) / full) * 100,
      );

      // const percent =
      //   (rect.y - rect.height) / (window.innerHeight + rect.height);
      const percent = percentInner;
      console.log(container.getBoundingClientRect(), -rect.top, full);
      if (percent > 100) {
        setPercent(100);
      } else if (percent < 0) {
        setPercent(0);
      } else {
        setPercent(percent);
      }

      if (rect.top > window.innerHeight / 2 || yNext < 35) {
        setShowImg(false);
      } else {
        setShowImg(true);
      }
    };
    addEventListener('scroll', fnc);
    return () => {
      removeEventListener('scroll', fnc);
    };
  }, []);
  return (
    <>
      <WithScrollFreezing paddingTop="0">
        <div className={classes.root} id="booster-what-is">
          <Container maxWidth={false} className={classes.container}>
            <WithAnimation
              className={classes.title}
              Component={Typography}
              variant="h2"
            >
              What is Bounce Booster?
            </WithAnimation>
            <WithAnimation>
              <Grid
                container
                spacing={2}
                style={{
                  marginBottom: 120,
                  width: isMd ? '100%' : '50%',
                }}
              >
                {offerList.map((item, index) => (
                  <Grid item md={12} sm={12} key={index}>
                    <Box className={classes.item}>
                      <Box className={classes.itemRight}>
                        <Typography className={classes.itemTitle}>
                          {item.title}
                        </Typography>
                        <Typography className={classes.itemDesc}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </WithAnimation>
          </Container>
        </div>
      </WithScrollFreezing>{' '}
      {showImg && (
        <>
          {isMd ? (
            <></>
          ) : (
            <WithAnimation
              defaultAnimation={false}
              rootMargin={'50%'}
              className={classes.p2}
              addClassInView={classes.p2Show}
            >
              <Side2 percent={percent} className={classes.svg} />
            </WithAnimation>
          )}
        </>
      )}
    </>
  );
};
