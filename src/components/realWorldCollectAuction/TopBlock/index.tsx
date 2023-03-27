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
          Real World Collectibles Auction
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Transform Traditional
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Auctions with Decentralized
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Technology
        </WithAnimation>
        <WithAnimation className={classes.text} Component={Typography}>
          By moving traditional real goods auctions onto the blockchain, Bounce
          offers a more secure and transparent environment for buyers and
          sellers to participate in. The decentralized nature of the blockchain
          eliminates the risk of fraud or manipulation, ensuring that the
          auction results are fair.
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
