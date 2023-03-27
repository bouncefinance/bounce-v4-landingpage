import React from 'react';
import { useAuctionBlockStyles } from './useAuctionBlockStyles';
import { Container } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import AuctionTitle from './components/AuctionTitle';
import AuctionContent from './components/AuctionContent'
import AuctionPoolSlide from './components/AuctionPoolSlide'
const AuctionBlock: React.FC = () => {
  const classes = useAuctionBlockStyles();

  return (
    <WithScrollFreezing>
      <div className={classes.root} id="auction-block">
        <Container maxWidth="xl" className={classes.container}>
          <AuctionTitle />
          <AuctionContent />
          <AuctionPoolSlide />
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default AuctionBlock;
