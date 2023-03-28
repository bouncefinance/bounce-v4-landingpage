import React from 'react';
import { TopBlock } from 'src/components/aiAuctionSolution/TopBlock';
import BounceLabs from 'src/components/aiAuctionSolution/BounceLabs';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { BounceMetaverse } from 'src/components/labs/BounceMetaverse';

export type IHomeProps = {};

const aiAuctionSolution: React.FC<IHomeProps> = ({}) => {
  return (
    <div>
      <TopBlock />
      <WithScrollFreezing>
        <BounceMetaverse onlyAnimation1={true} />
      </WithScrollFreezing>
      <BounceLabs />
    </div>
  );
};

export default aiAuctionSolution;
