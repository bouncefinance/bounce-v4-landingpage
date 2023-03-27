import Head from 'next/head';
import React from 'react';
import TextContent from '../../components/termsOfService/TextContent';
import TextFooter from '../../components/termsOfService/TextFooter';
export type IInvestmentProps = {};

const TermsOfService: React.FC<IInvestmentProps> = ({ }) => {
  return (
    <div>
      <Head>
        <title>Terms of User Agreement | Bounce</title>
        <meta name="description" content="Terms of User Agreement | Bounce" />
        <meta name="keywords" content="Terms of User Agreement | Bounce" />
      </Head>
      <TextContent />
      <TextFooter />
    </div>
  );
}

export default TermsOfService;