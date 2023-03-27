import React from 'react';
import { useTopBlockStyles } from './useTopBlockStyles';
import { Container, Typography, Box } from '@material-ui/core';
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
          <ComBtn text={'Start Now'}></ComBtn>
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
        <WithAnimation defaultAnimation={false} className={classes.p4} addClassInView={classes.p4Show}>
          <img
            className={classes.animationImg}
            src={'/images/tokenAndNftAuction/p4.png'}
            alt=""
          />
        </WithAnimation>
        <WithAnimation defaultAnimation={false} className={classes.p5} addClassInView={classes.p5Show}>
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
              On-chain auctions take place entirely on the blockchain network.
              It involves the use of smart contracts, which are self-executing
              contracts with the terms of the agreement between buyers and
              sellers being directly written into lines of code, allowing buyers
              and sellers to trade assets in a decentralized, transparent and
              secure way. Unlike traditional auctions that rely on
              intermediaries and central authorities, on-chain auctions record
              bids, bid history, and auction outcomes directly on the
              blockchain.
            </Typography>
            <img
              className={classes.infoImg}
              src="/images/tokenAndNftAuction/p1.svg"
              alt=""
            />
          </Box>
        </WithAnimation>
      </Container>
    </div>
  );
};
