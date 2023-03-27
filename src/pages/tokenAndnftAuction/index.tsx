import React from 'react';
import { TopBlock } from 'src/components/tokenAndNftAuction/TopBlock';
import { BounceOffers } from 'src/components/tokenAndNftAuction/BounceOffers';
import { TypesOfAuctionBounce } from 'src/components/tokenAndNftAuction/TypesOfAuctionBounce';
export type IHomeProps = {};

const TokenAndnftAuction: React.FC<IHomeProps> = ({}) => {
  return (
    <div>
      <TopBlock />
      <BounceOffers />
      <TypesOfAuctionBounce />
    </div>
  );
};

export default TokenAndnftAuction;
