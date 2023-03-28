import React from 'react';
import {WithAnimation} from 'src/modules/WithAnimation';
import {Box, Typography, Grid} from '@material-ui/core';
import {useAuctionContentStyles} from './useAuctionContentStyles';
import classNames from 'classnames';
import {useIsMDDown} from "../../../../../modules/theme";

const AutionTitle: React.FC = () => {
  const classes = useAuctionContentStyles();
  const isMDDown = useIsMDDown();
  const imgList = [
    {
      url: '/images/home/auction/slide-right-animation/p5.png',
      style: {
        top: 327,
        left: 259,
        width: 1180,
        height: 282,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/p1.png',
      style: {
        top: 144,
        left: 0,
        width: 284,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/icon1.png',
      style: {
        top: 370,
        left: 80,
        width: 240,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/icon3.png',
      style: {
        top: 0,
        left: 267,
        width: 58,
        height: 58,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/p2.png',
      style: {
        top: 102,
        left: 326,
        width: 686,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/p3.png',
      style: {
        top: 60,
        left: 1092,
        width: 300,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/p4.png',
      style: {
        top: 237,
        left: 1412,
        width: 662,
        height: 402,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/icon2.png',
      style: {
        top: 180,
        left: 1080,
        width: 123,
        height: 123,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/icon4.png',
      style: {
        top: 570,
        left: 1180,
        width: 58,
        height: 58,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/icon5.png',
      style: {
        top: 100,
        left: 1480,
        width: 58,
        height: 58,
      },
    },
  ];
  return (
    <Box className={classes.auctionContentSection}>
      <WithAnimation
        className={classes.auctionContent}
        rootMargin="-50%"
        defaultAnimation={false}
        addClassInView={classes.auctionContentShow}
      >
        <Box className={classes.title}>
          Integrate Bounce's Auction Technology With Any Website
        </Box>
        <Grid container spacing={0}>
          <Grid item md={6} sm={12}>
            <Typography className={classes.desc} style={{paddingTop: '16px'}}>
              <img
                className={classes.leftTopArrow}
                src="/images/home/auction/left-top-arrow.svg"
              />
              Empowering Auctions with Innovation: Bounce offers complete
              solutions for launching and conducting various types of auction
              with seamless on-chain settlements. Transforming traditional
              industries through cutting-edge technology for improved efficiency
              and profitability.
            </Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography className={classes.desc} style={{paddingTop: '16px'}}>
              The types of auction that Bounce provides include fixed-price
              auction, English auction, Dutch auction, sealed-bid auction,
              random selection auction, playable auction, order book auction,
              hold-to-compete auction.
            </Typography>
          </Grid>
        </Grid>
      </WithAnimation>
      <WithAnimation
        className={classes.auctionAnimationContent}
        rootMargin="-50%"
        defaultAnimation={false}
        addClassInView={classes.auctionAnimationContentShow}
      >
        <Box className={classes.animationBlock}>
          {imgList.map(item => {
            return (
              <img
                src={item.url}
                style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  ...item.style,
                }}
              />
            );
          })}
        </Box>
      </WithAnimation>
    </Box>
  );
};

export default AutionTitle;
