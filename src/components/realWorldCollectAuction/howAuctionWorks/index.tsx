import React from 'react';
import { useHowAuctionWorksStyles } from './useHowAuctionWorksStyles';
import { Container, Typography } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { WithAnimation } from 'src/modules/WithAnimation';

const HowAuctionWorks: React.FC = () => {
  const classes = useHowAuctionWorksStyles();
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="industry-block">
        <Container maxWidth="xl" className={classes.container}>
          <WithAnimation>
            <Typography className={classes.industryTitle}>
              How Our On-Chain Real Goods collectibles Auction Process Works
            </Typography>
          </WithAnimation>
          <WithAnimation>
            <img
              className={classes.img}
              src={'/images/realWorldAuction/how-auction-works.png'}
              alt={''}
            />
          </WithAnimation>
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default HowAuctionWorks;
