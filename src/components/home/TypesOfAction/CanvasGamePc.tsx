import React from 'react';
import Balls from './Balls';
import { Typography, Box } from '@material-ui/core';
import { useTypesOfActionStyles } from './useTypesOfActionStyles';
import { useIsMDUp } from 'src/modules/theme';

interface BtnProps {
  img: string;
  text: string;
  style?: React.CSSProperties;
}
export const BtnItem = (props: BtnProps) => {
  const classes = useTypesOfActionStyles();
  const { img, text, style } = props;
  return (
    <Box className={classes.btnItem} style={{ ...style }}>
      <img className={classes.btnImg} src={img} alt="" />
      <Typography className={classes.btnText}>{text}</Typography>
    </Box>
  );
};
export type IBuildWithBounceProps = {};

const CanvasGamePc: React.FC<IBuildWithBounceProps> = ({}) => {
  const classes = useTypesOfActionStyles();
  const isMd = useIsMDUp();
  return isMd ? (
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
  ) : (
    <Box className={classes.animationBlock}>
      <Box className={classes.animationBlockTop}>
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
      <Box className={classes.animationBlockCenter}>
        <Balls />
      </Box>
      <Box className={classes.animationBlockLeft}>
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
  );
};

export default CanvasGamePc;