import Head from 'next/head';
import React from 'react';
import DigitalCard from 'src/components/company/DigitalCard';
import InnovativeCompany from 'src/components/company/InnovativeCompany';
import CompanyBanner from '../../components/company/CompanyBanner';

export type ICompanyProps = {};

const Company: React.FC<ICompanyProps> = ({ }) => {
  return (
    <div>
      <Head>
        <title>For Company | Bounce</title>
        <meta name="description" content="For Company | Bounce" />
        <meta name="keywords" content="For Company | Bounce" />
      </Head>
      <CompanyBanner />
      <InnovativeCompany />
      <DigitalCard />
    </div>
  );
}

export default Company;