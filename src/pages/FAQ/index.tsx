import React from 'react';
import { TopBlock } from 'src/components/FAQ/TopBlock';
import { FAQ as FAQCompnent } from 'src/components/FAQ/FAQ';
export type IHomeProps = {};

const FAQ: React.FC<IHomeProps> = ({}) => {
  return (
    <div>
      <TopBlock />
      <FAQCompnent />
    </div>
  );
};

export default FAQ;
