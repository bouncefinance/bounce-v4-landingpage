import Head from 'next/head';
import React from 'react';
import { BounceMetaverse } from 'src/components/labs/BounceMetaverse';

export type ILabsProps = {};

const Labs: React.FC<ILabsProps> = ({ }) => {
  return (
    <div>
      <Head>
        <title>Tools for Labs | Bounce</title>
        <meta name="description" content="Tools for Labs | Bounce" />
        <meta name="keywords" content="Tools for Labs | Bounce" />
      </Head>
      <BounceMetaverse />
    </div>
  );
}

export default Labs;