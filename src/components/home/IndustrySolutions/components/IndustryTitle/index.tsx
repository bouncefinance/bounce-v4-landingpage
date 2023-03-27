import React from 'react';
import { WithAnimation } from 'src/modules/WithAnimation';
import { Box, Typography } from '@material-ui/core';
import { useIndustryTitleStyles } from './useIndustryTitleStyles';
import classNames from 'classnames';
const AutionTitle: React.FC = () => {
  const classes = useIndustryTitleStyles();
  const slideContent = [
    'AUCTION AS A SERVICE',
    'icon1',
    'AUCTION AS A SERVICE',
    'icon2',
    'AUCTION AS A SERVICE',
    'icon1',
    'AUCTION AS A SERVICE',
    'icon2',
    'AUCTION AS A SERVICE',
    'icon1',
    'AUCTION AS A SERVICE',
    'icon2',
    'AUCTION AS A SERVICE',
  ];
  return (
    <WithAnimation
      className={classes.auctionTitleblock}
      rootMargin="-50%"
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
      </Box>
    </WithAnimation>
  );
};

export default AutionTitle;
