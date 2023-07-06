import React from 'react';
import { useTopBlockStyles } from './useTopBlockStyles';
import { Container, Typography, Box } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import ComBtn from 'src/components/common/ComBtn';
import { useIsMDDown } from '../../../modules/theme';
export const TopBlock = () => {
  const classes = useTopBlockStyles();
  const isMd = useIsMDDown();

  return (
    <div className={classes.pageRoot}>
      <Container maxWidth={false} className={classes.pageContainer}>
        <WithAnimation
          className={classes.title1}
          Component={Typography}
          variant="h2"
        >
          Token & NFT Auction
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          The Most Diverse Range of
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Auctions on the Largest
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Number of Blockchains
        </WithAnimation>
        <WithAnimation className={classes.text} Component={Typography}>
          Bounce offers 10 types of on-chain auctions on 40 blockchains, with
          flexibility and accessibility. Create your customized auction pool and
          tailor it to your specific needs, or join existing pools to increase
          competition and maximize your chances of success.
        </WithAnimation>
        <WithAnimation className={classes.btnBox}>
          <ComBtn
            text={'Start Now'}
            handleClick={() => {
              window.open('https://app.bounce.finance/TokenAuction', '_blank');
            }}
          ></ComBtn>
        </WithAnimation>
        <WithAnimation
          defaultAnimation={false}
          rootMargin={'50%'}
          className={classes.p2}
          addClassInView={classes.p2Show}
        >
          <img
            className={classes.animationImg}
            src={'/images/tokenAndNftAuction/p2.png'}
            alt=""
          />
        </WithAnimation>
        <WithAnimation
          defaultAnimation={false}
          className={classes.p3}
          addClassInView={classes.p3Show}
        >
          <img
            className={classes.animationImg}
            src={'/images/tokenAndNftAuction/p3.png'}
            alt=""
          />
        </WithAnimation>
        <WithAnimation
          defaultAnimation={false}
          className={classes.p4}
          addClassInView={classes.p4Show}
        >
          <img
            className={classes.animationImg}
            src={'/images/tokenAndNftAuction/p4.png'}
            alt=""
          />
        </WithAnimation>
        <WithAnimation
          defaultAnimation={false}
          className={classes.p5}
          addClassInView={classes.p5Show}
        >
          <img
            className={classes.animationImg}
            src={'/images/tokenAndNftAuction/p5.png'}
            alt=""
          />
        </WithAnimation>
        <WithAnimation>
          <Box className={classes.infoBox}>
            <Typography className={classes.infoTitle}>
              What is an on-chain auction?
            </Typography>
            <Typography className={classes.infoDesc}>
              Bounce Finance offers 10 types of on-chain auctions on 40
              blockchains, with flexibility and accessibility. Create your
              customized auction pool and tailor it to your specific needs, or
              join existing pools to increase competition and maximize your
              chances of success.
            </Typography>
            <img
              className={classes.infoImg}
              src={
                isMd
                  ? '/images/tokenAndNftAuction/on-chain-sm.png'
                  : '/images/tokenAndNftAuction/p1.svg'
              }
              alt=""
            />
          </Box>
        </WithAnimation>
      </Container>
    </div>
  );
};
