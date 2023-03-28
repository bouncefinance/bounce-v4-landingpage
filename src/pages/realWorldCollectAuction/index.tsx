import React from 'react';
import { TopBlock } from 'src/components/realWorldCollectAuction/TopBlock';
import KeyFeature from 'src/components/realWorldCollectAuction/KeyFeatures';
import ProblemsWithTraditional from 'src/components/realWorldCollectAuction/ProblemsWithTraditional';
import TackiesTheIssues from 'src/components/realWorldCollectAuction/TackiesTheIssues';
import HowAuctionWorks from '../../components/realWorldCollectAuction/howAuctionWorks';
export type IHomeProps = {};

const AdsAuction: React.FC<IHomeProps> = ({}) => {
  return (
    <div>
      <TopBlock />
      <KeyFeature />
      <HowAuctionWorks />
      <ProblemsWithTraditional />
      <TackiesTheIssues />
    </div>
  );
};

export default AdsAuction;
