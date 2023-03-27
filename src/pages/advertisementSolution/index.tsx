import React from 'react';
import { TopBlock } from 'src/components/advertisementSolution/TopBlock';
import KeyFeature from 'src/components/advertisementSolution/KeyFeatures';
import AdsProcessWorks from 'src/components/advertisementSolution/AdsProcessWorks';
import ProblemsWithTraditional from 'src/components/advertisementSolution/ProblemsWithTraditional';
import TackiesTheIssues from 'src/components/advertisementSolution/TackiesTheIssues';
export type IHomeProps = {};

const AdvertisementSolution: React.FC<IHomeProps> = ({}) => {
  return (
    <div>
      <TopBlock />
      <KeyFeature />
      <AdsProcessWorks />
      <ProblemsWithTraditional />
      <TackiesTheIssues />
    </div>
  );
};

export default AdvertisementSolution;
