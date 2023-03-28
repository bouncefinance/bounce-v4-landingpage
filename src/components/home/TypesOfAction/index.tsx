import React, { useEffect, useState } from 'react';
import { useIsMDUp } from 'src/modules/theme';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import Balls from './Balls';
import { Typography, Box } from '@material-ui/core';

import { useTypesOfActionStyles } from './useTypesOfActionStyles';

export type IBuildWithBounceProps = {};
interface BtnProps {
  img: string;
  text: string;
  style?: React.CSSProperties;
}
const BtnItem = (props: BtnProps) => {
  const classes = useTypesOfActionStyles();

  const { img, text, style } = props;
  return (
    <Box className={classes.btnItem} style={{ ...style }}>
      <img className={classes.btnImg} src={img} alt="" />
      <Typography className={classes.btnText}>{text}</Typography>
    </Box>
  );
};
const TypesOfAction: React.FC<IBuildWithBounceProps> = ({}) => {
  const classes = useTypesOfActionStyles();
  const isMDUp = useIsMDUp();

  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <Typography className={classes.title}>
          Types of Auction On Bounce
        </Typography>
        <Box className={classes.animationBlock}>
          <Box className={classes.animationBlockLeft}>
            <BtnItem
              img={'/images/home/typesOfAuction/1.svg'}
              text={'Fixed-priced Auction'}
              style={{
                marginBottom: '32px',
              }}
            />{' '}
            <BtnItem
              img={'/images/home/typesOfAuction/2.svg'}
              text={'English Auction'}
              style={{
                marginBottom: '32px',
              }}
            />{' '}
            <BtnItem
              img={'/images/home/typesOfAuction/3.svg'}
              text={'Dutch Auction'}
              style={{
                marginBottom: '32px',
              }}
            />{' '}
            <BtnItem
              img={'/images/home/typesOfAuction/4.svg'}
              text={'Sealed-Bid Auction'}
            />{' '}
          </Box>
          <Box className={classes.animationBlockCenter}>
            <Box className={classes.centerTop}>
              <img src="/images/home/typesOfAuction/left-arrow.svg" alt="" />
              <Balls />
              <img src="/images/home/typesOfAuction/right-arrow.svg" alt="" />
            </Box>
            <Box className={classes.centerBottom}>
              <BtnItem
                img={'/images/home/typesOfAuction/5.svg'}
                text={'Token & NFT'}
                style={{
                  marginRight: 12,
                  width: 150,
                }}
              />{' '}
              <BtnItem
                img={'/images/home/typesOfAuction/6.svg'}
                text={'NFTs'}
                style={{
                  marginRight: 12,
                  width: 90,
                }}
              />{' '}
              <BtnItem
                img={'/images/home/typesOfAuction/7.svg'}
                text={'Real-world Collectibles'}
                style={{
                    width: 200,
                  }}
              />
            </Box>
          </Box>
          <Box className={classes.animationBlockLeft}>
            <BtnItem
              img={'/images/home/typesOfAuction/1.svg'}
              text={'Fixed-priced Auction'}
              style={{
                marginBottom: '32px',
              }}
            />{' '}
            <BtnItem
              img={'/images/home/typesOfAuction/1.svg'}
              text={'Fixed-priced Auction'}
              style={{
                marginBottom: '32px',
              }}
            />{' '}
            <BtnItem
              img={'/images/home/typesOfAuction/1.svg'}
              text={'Fixed-priced Auction'}
              style={{
                marginBottom: '32px',
              }}
            />{' '}
            <BtnItem
              img={'/images/home/typesOfAuction/1.svg'}
              text={'Fixed-priced Auction'}
            />{' '}
          </Box>
        </Box>
      </div>
    </WithScrollFreezing>
  );
};

export default TypesOfAction;
