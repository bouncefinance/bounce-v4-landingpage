import React from 'react';
import { WithAnimation } from 'src/modules/WithAnimation';
import { Box, Typography } from '@material-ui/core';
import { useAuctionPoolSlideStyles } from './useAuctionPoolSlideStyles';
import classNames from 'classnames';
const AuctionPoolSlide: React.FC = () => {
  const classes = useAuctionPoolSlideStyles();
  const slideContent = [
    {
      name: 'Bounce APP',
      desc: 'Blockchain and Smart contract based Auction Technology',
    },
    {
      name: 'Bounce APP',
      desc: 'Blockchain and Smart contract based Auction Technology',
    },
    {
      name: 'Bounce APP',
      desc: 'Blockchain and Smart contract based Auction Technology',
    },
    {
      name: 'Bounce APP',
      desc: 'Blockchain and Smart contract based Auction Technology',
    },
    {
      name: 'Bounce APP',
      desc: 'Blockchain and Smart contract based Auction Technology',
    },
  ];
  return (
    <WithAnimation
      className={classes.auctionPoolblock}
      defaultAnimation={false}
      addClassInView={classes.auctionPoolShowblock}
    >
      <Box className={classes.content}>
        <Box className={classNames(classes.slideContent, classes.toLeft)}>
          {slideContent.map((item, index) => {
            return (
              <Box className={classes.auctionItem}>
                <Box className={classes.auctionLeft}>
                  <Typography key={index} className={classes.auctionName}>
                    {item.name}
                  </Typography>
                  <Typography key={index} className={classes.desc}>
                    {item.desc}
                  </Typography>
                </Box>
                <img className={classes.icon}  src="/images/home/auction/arrow1.svg" alt="" />
              </Box>
            );
          })}
        </Box>
      </Box>
    </WithAnimation>
  );
};

export default AuctionPoolSlide;
