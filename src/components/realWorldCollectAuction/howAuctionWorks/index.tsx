import React from 'react';
import { useHowAuctionWorksStyles } from './useHowAuctionWorksStyles';
import { Container, Typography } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { WithAnimation } from 'src/modules/WithAnimation';
import { useIsMDDown } from '../../../modules/theme';

const HowAuctionWorks: React.FC = () => {
  const classes = useHowAuctionWorksStyles();
  const isMd = useIsMDDown();

  return (
    <WithScrollFreezing>
      <div className={classes.root} id="industry-block">
        <Container maxWidth="xl" className={classes.container}>
          <WithAnimation>
            <Typography className={classes.industryTitle}>
              How Our On-Chain Real-World Collectible Auction Process Works
            </Typography>
          </WithAnimation>
          <WithAnimation>
            <img
              className={classes.img}
              src={
                isMd
                  ? '/images/realWorldAuction/how-auction-works-sm.svg'
                  : '/images/realWorldAuction/how-auction-works.png'
              }
              alt={''}
            />
          </WithAnimation>
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default HowAuctionWorks;
