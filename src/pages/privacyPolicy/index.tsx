import Head from 'next/head';
import React from 'react';
import TextContent from '../../components/privacyPolicy/TextContent';
import TextFooter from '../../components/termsOfService/TextFooter';

export type PrivacyPolicyProps = {};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({}) => {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Bounce</title>
        <meta name="description" content="Privacy Policy | Bounce" />
        <meta name="keywords" content="Privacy Policy | Bounce" />
      </Head>
      <TextContent />
      <TextFooter />
    </div>
  );
};

export default PrivacyPolicy;
