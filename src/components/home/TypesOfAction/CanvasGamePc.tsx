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
export const BtnItemMobile = (props: BtnProps) => {
    const classes = useTypesOfActionStyles();
    const { img, text, style } = props;
    return (
      <Box className={classes.btnItemMobile} style={{ ...style }}>
        <img className={classes.btnImgMobile} src={img} alt="" />
        <Typography className={classes.btnTextMobile}>{text}</Typography>
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
          img={'/images/home/typesOfAuction/8.svg'}
          text={'Random Selection Auction'}
          style={{
            marginBottom: '32px',
          }}
        />{' '}
        <BtnItem
          img={'/images/home/typesOfAuction/9.svg'}
          text={'Playable Auction'}
          style={{
            marginBottom: '32px',
          }}
        />{' '}
        <BtnItem
          img={'/images/home/typesOfAuction/10.svg'}
          text={'Order Book Auction'}
          style={{
            marginBottom: '32px',
          }}
        />{' '}
        <BtnItem
          img={'/images/home/typesOfAuction/11.svg'}
          text={'Hold-to-compete Auction'}
        />{' '}
      </Box>
    </Box>
  ) : (
    <Box className={classes.animationBlockMobile}>
      <Box className={classes.animationBlockTopMobile}>
        <BtnItemMobile
          img={'/images/home/typesOfAuction/1.svg'}
          text={'Fixed-priced Auction'}
          style={{
            width: '140px',
            fontSize: '10px',
          }}
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/8.svg'}
          text={'Fixed-priced Auction'}
          style={{
            width: '140px',
          }}
        />{' '}
        <BtnItemMobile
          style={{
            width: '140px',
          }}
          img={'/images/home/typesOfAuction/2.svg'}
          text={'English Auction'}
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/9.svg'}
          text={'Fixed-priced Auction'}
          style={{
            width: '140px',
          }}
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/3.svg'}
          text={'Dutch Auction'}
          style={{
            width: '140px',
          }}
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/10.svg'}
          text={'Fixed-priced Auction'}
          style={{
            width: '140px',
          }}
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/4.svg'}
          text={'Sealed-Bid Auction'}
          style={{
            width: '140px',
          }}
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/11.svg'}
          text={'Fixed-priced Auction'}
          style={{
            width: '140px',
          }}
        />{' '}
      </Box>
      <img src="/images/home/typesOfAuction/top-arrow.svg" alt="" />
      <Box className={classes.animationBlockCenter}>
        <Balls />
      </Box>
      <img src="/images/home/typesOfAuction/bottom-arrow.svg" alt="" />
      <Box className={classes.animationBlockBottomMobile}>
        <BtnItemMobile
          img={'/images/home/typesOfAuction/5.svg'}
          text={'Token & NFT'}
          style={{
            width: '100%',
          }}
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/6.svg'}
          text={'NFTs'}
          style={{
            width: '100%',
          }}
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/7.svg'}
          text={'Real-world Collectibles'}
          style={{
            width: '100%',
          }}
        />
      </Box>
    </Box>
  );
};

export default CanvasGamePc;
