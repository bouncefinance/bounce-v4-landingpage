import { HowDoesItWorks } from 'src/components/boost/HowDoesItWorks';
import { TopBlock } from 'src/components/boost/TopBlock';
import { WhatIsBounceBooster } from 'src/components/boost/WhatIsBounceBooster';

export default function Booster() {
  return (
    <div>
      <TopBlock />
      <WhatIsBounceBooster />
      <HowDoesItWorks />
    </div>
  );
}
