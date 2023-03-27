import React from 'react';
import FreelanceMarketBlock from 'src/components/employers/FreelanceMarketBlock';
import TalentsBanner from 'src/components/talents/TalentsBanner';
import FeaturedJobs from 'src/components/talents/FeaturedJobs';
import Head from 'next/head';
export type ITalentsProps = {};

const Talents: React.FC<ITalentsProps> = ({}) => {
  return (
    <div>
       <Head>
        <title>Jobs For Talents | Bounce</title>
        <meta name="description" content="Jobs For Talents | Bounce" />
        <meta name="keywords" content="Jobs For Talents | Bounce" />
      </Head>
      <TalentsBanner />
      <FeaturedJobs />
      <FreelanceMarketBlock />
    </div>
  );
};

export default Talents;
