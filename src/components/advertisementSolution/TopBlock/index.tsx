import React from 'react';
import { useTopBlockStyles } from './useTopBlockStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import ComBtn from 'src/components/common/ComBtn';
export const TopBlock = () => {
  const classes = useTopBlockStyles();
  return (
    <div className={classes.pageRoot}>
      <Container maxWidth={false} className={classes.pageContainer}>
        <WithAnimation
          className={classes.title1}
          Component={Typography}
          variant="h2"
        >
          Advertisement Solution
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
        Bounce applies the on-chain auction technology to advertising with the objective of helping businesses maximize their reach to target audience while minimize their cost. By offering various types of on-chain auction and different modes of ads, we make the advertising process more efficient, transparent and fun!
        </WithAnimation>
        <WithAnimation className={classes.btnBox}>
          <ComBtn
            style={{
              marginRight: 16,
            }}
            text={'Start Now'}
          ></ComBtn>
          <ComBtn notHightLight={true} text={'Contact Us'}></ComBtn>
        </WithAnimation>
      </Container>
    </div>
  );
};
