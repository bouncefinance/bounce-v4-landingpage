import React from 'react';
import { WithAnimation } from 'src/modules/WithAnimation';
import { Box, Typography } from '@material-ui/core';
import { useAuctionTitleStyles } from './useAuctionTitleStyles';
import classNames from 'classnames';
const AutionTitle: React.FC = () => {
  const classes = useAuctionTitleStyles();
  const slideContent = [
    'Priced Auction',
    'icon1',
    'English Auction',
    'icon2',
    'Dutch Auction',
    'icon1',
    'Sealed-Bid Auction',
    'icon2',
    'Random Selection Auction',
    'icon1',
    'Playable Auction',
    'icon2',
    'Orderbook Auction',
  ];
  return (
    <WithAnimation
      className={classes.auctionTitleblock}
      rootMargin="50%"
      defaultAnimation={false}
      addClassInView={classes.auctionTitleShowblock}
    >
      <Box className={classes.content}>
        <Box className={classNames(classes.slideContent, classes.toLeft)}>
          {slideContent.map((item, index) => {
            if (item === 'icon1') {
              return (
                <img
                  className={classes.titleIcon}
                  key={index}
                  src="/images/home/auction/icon1.svg"
                />
              );
            } else if (item === 'icon2') {
              return (
                <img
                  className={classes.titleIcon}
                  key={index}
                  src="/images/home/auction/icon2.svg"
                />
              );
            } else {
              return (
                <Typography
                  key={index}
                  className={classes.slideTitle}
                  component={'span'}
                >
                  {item}
                </Typography>
              );
            }
          })}
        </Box>
        <Box className={classes.sectionName}>
          <Box className={classes.sectionBtn}>AUCTIONS</Box>
        </Box>
      </Box>
    </WithAnimation>
  );
};

export default AutionTitle;
