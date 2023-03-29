import React from 'react';
import { WithAnimation } from 'src/modules/WithAnimation';
import { Box, Typography } from '@material-ui/core';
import { useIndustryTitleStyles } from './useIndustryTitleStyles';
import classNames from 'classnames';
const AutionTitle: React.FC = () => {
  const classes = useIndustryTitleStyles();
  const slideContent = [
    'AUCTION AS A SERVICE',
    'icon5',
    'AUCTION AS A SERVICE',
    'icon5',
    'AUCTION AS A SERVICE',
    'icon5',
    'AUCTION AS A SERVICE',
    'icon5',
    'AUCTION AS A SERVICE',
    'icon5',
    'AUCTION AS A SERVICE',
    'icon5',
    'AUCTION AS A SERVICE',
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
            if (item === 'icon5') {
              return (
                <img
                  className={classes.titleIcon}
                  key={index}
                  src="/images/home/industry-solutions/icon5.svg"
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
