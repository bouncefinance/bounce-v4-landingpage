import React from 'react';
import EmployersBanner from 'src/components/employers/EmployersBanner';
import FreelanceMarketBlock from 'src/components/employers/FreelanceMarketBlock';
import JobToolsBlock from 'src/components/employers/JobToolsBlock';
import BestTalentMatched from 'src/components/employers/BestTalentMatched'
import Head from 'next/head';
export type IEmployersProps = {};

const Employers: React.FC<IEmployersProps> = ({ }) => {
  return (
    <div>
      <Head>
        <title>Talent For Employers | Bounce</title>
        <meta name="description" content="Talent For Employers" />
        <meta name="keywords" content="Talent For Employers" />
      </Head>
      <EmployersBanner />
      <BestTalentMatched />
      <FreelanceMarketBlock showFooter={false}/>
      <JobToolsBlock />
    </div>
  );
}

export default Employers;