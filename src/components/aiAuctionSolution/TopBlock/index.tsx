import React from 'react';
import { useTopBlockStyles } from './useTopBlockStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import ComBtn from 'src/components/common/ComBtn';
import classNames from 'classnames';
import { useIsMDDown } from '../../../modules/theme';

export const TopBlock = () => {
  const isMd = useIsMDDown();
  const classes = useTopBlockStyles();
  return (
    <div className={classes.pageRoot}>
      <Container maxWidth={false} className={classes.pageContainer}>
        <WithAnimation
          className={classes.title1}
          Component={Typography}
          variant="h2"
        >
          AI + Auction Solution
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Unleash the Power of
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Artificial Intelligence in
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          On-Chain Auction
        </WithAnimation>
        <Grid container spacing={2}>
          <Grid item md={7} sm={12}>
            <WithAnimation className={classes.text} Component={Typography}>
              Bounce is dedicated to unlocking the full potential of AI
              technology through seamless integration with on-chain auctions.
              Our platform leverages the advantages of AI to enhance the user
              experience and provide a more efficient and transparent auction
              process.
            </WithAnimation>
            <WithAnimation className={classes.btnBox}>
              <ComBtn
                style={{
                  marginRight: 16,
                  padding: isMd ? '0 40px' : '0 70px',
                }}
                text={'Start Now'}
              ></ComBtn>
              <ComBtn
                notHightLight={true}
                style={{
                  marginRight: 16,
                  padding: isMd ? '0 40px' : '0 70px',
                }}
                text={'Contact Us'}
              ></ComBtn>
            </WithAnimation>
          </Grid>
          <Grid item md={5} sm={12}>
            <Box className={classes.rightImgBox}>
              <WithAnimation className={classes.p1} rootMargin={'50%'}>
                <img
                  className={classes.bannerImg}
                  src="/images/aiAuctionSolution/banner.png"
                  alt=""
                />
              </WithAnimation>
              <WithAnimation className={classes.bigStart} rootMargin={'50%'}>
                <img
                  className={classes.bannerImg}
                  src="/images/aiAuctionSolution/star.png"
                  alt=""
                />
              </WithAnimation>
              <WithAnimation className={classes.smallStart} rootMargin={'50%'}>
                <img
                  className={classes.bannerImg}
                  src="/images/aiAuctionSolution/gray-star.png"
                  alt=""
                />
              </WithAnimation>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
