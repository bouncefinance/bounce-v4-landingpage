import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { uid } from 'react-uid';
import { t, tHTML } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useBounceAuctionBlockStyles } from './useBounceAuctionBlockStyles';

const autionTypeList = [
  'fixed-swap',
  'english-auction',
  'dutch-auction',
  'sealed-bid-auction',
  'lottery-auction',
];

const functionList = [
  'whitelisting',
  'schedule',
  'dutch-auction',
  'nft-certificate',
];

const BounceAuctionBlock: React.FC = () => {
  const classes = useBounceAuctionBlockStyles();

  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <div className={classes.wrap}>
          <Container maxWidth="xl" className={classes.container}>
            <WithAnimation
              Component={Typography}
              variant="h2"
              className={classes.title}
            >
              {t('auction-block.title')}
            </WithAnimation>
            <WithAnimation
              Component={Typography}
              variant="body1"
              className={classes.subtitle}
            >
              {tHTML('auction-block.subtitle')}
            </WithAnimation>
            <Grid container spacing={3} className={classes.box}>
              <Grid item xs={12} lg={6}>
                <div className={classes.auctionType}>
                  <WithAnimation
                    Component={Typography}
                    variant="h4"
                    className={classes.auctionTitle}
                  >
                    {t('auction-block.auction-type.title')}
                  </WithAnimation>
                  <ul className={classes.list}>
                    {autionTypeList.map(item => {
                      return (
                        <li key={uid(item)}>
                          {t(`auction-block.auction-type.${item}`)}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <div className={classes.functionBox}>
                  <WithAnimation
                    Component={Typography}
                    variant="h4"
                    className={classes.functionTitle}
                  >
                    {t('auction-block.function.title')}
                  </WithAnimation>
                  <ul className={classes.blueList}>
                    {functionList.map(item => {
                      return (
                        <li key={uid(item)}>
                          {t(`auction-block.function.${item}`)}
                        </li>
                      );
                    })}
                  </ul>
                  <img
                    src="/images/bounce-auction-block/funcitonBg.png"
                    className={classes.functionBg}
                  />
                </div>
              </Grid>
            </Grid>
            <WithAnimation
              Component={Typography}
              variant="body2"
              className={classes.tip}
            >
              {t('auction-block.tip')}
            </WithAnimation>
            <WithAnimation
              Component={Typography}
              variant="body2"
              className={classes.case}
            >
              <img
                src="/images/investment/p1-pc.png"
                alt="bg"
                className={classes.casePc}
              />
              <img
                src="/images/investment/p1-mobile.png"
                alt="bg"
                className={classes.caseMobile}
              />
            </WithAnimation>
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};

export default BounceAuctionBlock;
