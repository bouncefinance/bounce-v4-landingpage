import React from 'react';
import { TopBlock } from 'src/components/adsAuction/TopBlock';
import { AdsTerminal } from 'src/components/adsAuction/AdsTerminal';
import { EndToEnd } from 'src/components/adsAuction/EndToEnd';
import ChooseModesForAds from 'src/components/adsAuction/ChooseModesForAds';
export type IHomeProps = {};

const AdsAuction: React.FC<IHomeProps> = ({}) => {
  return (
    <div>
      <TopBlock />
      <AdsTerminal />
      <EndToEnd />
      <ChooseModesForAds />
    </div>
  );
};

export default AdsAuction;
