import React from 'react';
import { useTopBlockStyles } from './useTopBlockStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import ComBtn from 'src/components/common/ComBtn';
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
          Advertising Solution
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Revolutionize Advertising
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          with Decentralized Auction
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Technology
        </WithAnimation>
        <WithAnimation className={classes.text} Component={Typography}>
          Bounce Finance applies the on-chain auction technology to advertising
          with the objective of helping businesses maximize their reach to
          target audience while minimize their cost. By offering various types
          of on-chain auction and different modes of ads, we make the
          advertising process more efficient, transparent and fun!
        </WithAnimation>
        <Box className={classes.contentBox}>
          <WithAnimation className={classes.btnBox}>
            <ComBtn
              style={{
                marginRight: 16,
                padding: '0 44px',
                // padding: isMd ? '0 44px' : '0 70px',
              }}
              handleClick={() => {
                window.open('https://app.bounce.finance/ads-auction', '_blank');
              }}
              text={'Start Now'}
            ></ComBtn>
            <ComBtn
              notHightLight={true}
              text={'Contact Us'}
              style={{
                // padding: isMd ? '0 44px' : '0 70px',
                padding: '0 44px',
              }}
              handleClick={() => {
                window.open('https://docs.google.com/forms/d/1DJxbqqfv6MnN5-kOwDGU-_DGpXDxbJJkUT2UqKgvbUs/viewform?edit_requested=truehttps://docs.google.com/forms/d/1DJxbqqfv6MnN5-kOwDGU-_DGpXDxbJJkUT2UqKgvbUs/viewform?edit_requested=true', '_blank');
              }}
            ></ComBtn>
          </WithAnimation>
          <WithAnimation className={classes.animationBox}>
            <img
              className={classes.banner}
              src={'images/advertisementSolution/banner.png'}
              alt={''}
            />
            <img
              className={classes.smallStar}
              src={'images/advertisementSolution/small-star.png'}
              alt={''}
            />
            <img
              className={classes.bigStar}
              src={'images/advertisementSolution/big-star.png'}
              alt={''}
            />
          </WithAnimation>
        </Box>
      </Container>
    </div>
  );
};
