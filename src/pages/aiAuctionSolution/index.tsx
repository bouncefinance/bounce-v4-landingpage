import React from 'react';
import { TopBlock } from 'src/components/aiAuctionSolution/TopBlock';
import BounceLabs from 'src/components/aiAuctionSolution/BounceLabs';
import { BounceMetaverse } from 'src/components/aiAuctionSolution/BounceMetaverse';

export type IHomeProps = {};

const aiAuctionSolution: React.FC<IHomeProps> = ({}) => {
  return (
    <div>
      <TopBlock />
      <BounceMetaverse />
      <BounceLabs />
    </div>
  );
};

export default aiAuctionSolution;
