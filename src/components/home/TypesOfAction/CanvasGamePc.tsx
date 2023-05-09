import React from 'react';
import Balls from './Balls';
import { Typography, Box } from '@material-ui/core';
import { useTypesOfActionStyles } from './useTypesOfActionStyles';
import { useIsMDUp } from 'src/modules/theme';

interface BtnProps {
  img: string;
  text: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
export const BtnItem = (props: BtnProps) => {
  const classes = useTypesOfActionStyles();
  const { img, text, style, onClick } = props;
  return (
    <Box className={classes.btnItem} style={{ ...style }} onClick={onClick}>
      <img className={classes.btnImg} src={img} alt="" />
      <Typography className={classes.btnText}>{text}</Typography>
    </Box>
  );
};
export const BtnItemMobile = (props: BtnProps) => {
  const classes = useTypesOfActionStyles();
  const { img, text, style, onClick } = props;
  return (
    <Box className={classes.btnItemMobile} style={{ ...style }} onClick={onClick}>
      <img className={classes.btnImgMobile} src={img} alt="" />
      <Typography className={classes.btnTextMobile}>{text}</Typography>
    </Box>
  );
};
export type IBuildWithBounceProps = {};

const CanvasGamePc: React.FC<IBuildWithBounceProps> = ({}) => {
  const classes = useTypesOfActionStyles();
  const isMd = useIsMDUp();
  const linkToNewTab = (link: string) => {
    window.open(link, '_blank');
  };
  return isMd ? (
    <Box className={classes.animationBlock}>
      <Box className={classes.animationBlockLeft}>
        <BtnItem
          img={'/images/home/typesOfAuction/1.svg'}
          text={'Fixed-priced Auction'}
          style={{
            marginBottom: '32px',
          }}
          onClick={() =>
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/fixed-price-auction',
            )
          }
        />{' '}
        <BtnItem
          img={'/images/home/typesOfAuction/2.svg'}
          text={'English Auction'}
          style={{
            marginBottom: '32px',
          }}
          onClick={() =>
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/english-auction',
            )
          }
        />{' '}
        <BtnItem
          img={'/images/home/typesOfAuction/3.svg'}
          text={'Dutch Auction'}
          style={{
            marginBottom: '32px',
          }}
          onClick={() =>
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/dutch-auction',
            )
          }
        />{' '}
        <BtnItem
          img={'/images/home/typesOfAuction/4.svg'}
          text={'Sealed-Bid Auction'}
          onClick={() =>
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/sealed-bid-auction',
            )
          }
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
            text={'Tokens & NFTs'}
            style={{
              marginRight: 12,
              width: 150,
            }}
            onClick={() =>
              linkToNewTab(
                'https://www.bounce.finance/tokenAndnftAuction',
              )
            }
          />{' '}
          <BtnItem
            img={'/images/home/typesOfAuction/6.svg'}
            text={'Ad Spaces'}
            style={{
              marginRight: 12,
              width: 120,
            }}
            onClick={() =>
              linkToNewTab(
                'https://www.bounce.finance/adsAuction',
              )
            }
          />{' '}
          <BtnItem
            img={'/images/home/typesOfAuction/7.svg'}
            text={'Real-World Collectibles'}
            style={{
              width: 195,
            }}
            onClick={() =>
              linkToNewTab(
                'https://www.bounce.finance/realWorldCollectAuction',
              )
            }
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
          onClick={() => {
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/random-selection-auction',
            );
          }}
        />{' '}
        <BtnItem
          img={'/images/home/typesOfAuction/9.svg'}
          text={'Playable Auction'}
          style={{
            marginBottom: '32px',
          }}
          onClick={() => {
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/playable-auction',
            );
          }}
        />{' '}
        <BtnItem
          img={'/images/home/typesOfAuction/10.svg'}
          text={'Order Book Auction'}
          style={{
            marginBottom: '32px',
          }}
          onClick={() => {
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/orderbook-auction',
            );
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
          onClick={() =>
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/fixed-price-auction',
            )
          }
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/8.svg'}
          text={'Random Selection Auction'}
          onClick={() => {
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/random-selection-auction',
            );
          }}
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/2.svg'}
          text={'English Auction'}
          onClick={() =>
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/english-auction',
            )
          }
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/9.svg'}
          text={'Playable Auction'}
          onClick={() => {
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/playable-auction',
            );
          }}
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/3.svg'}
          text={'Dutch Auction'}
          onClick={() =>
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/dutch-auction',
            )
          }
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/10.svg'}
          text={'Order Book Auction'}
          onClick={() => {
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/orderbook-auction',
            );
          }}
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/4.svg'}
          text={'Sealed-Bid Auction'}
          onClick={() =>
            linkToNewTab(
              'https://docs.bounce.finance/bounce-auctions/random-selection-auction',
            )
          }
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/11.svg'}
          text={'Hold-to-compete Auction'}
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
          text={'Tokens & NFTs'}
          style={{
            width: '100%',
          }}
          onClick={() =>
            linkToNewTab(
              'https://www.bounce.finance/tokenAndnftAuction',
            )
          }
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/6.svg'}
          text={'Ad Spaces'}
          style={{
            width: '100%',
          }}
          onClick={() =>
            linkToNewTab(
              'https://www.bounce.finance/adsAuction',
            )
          }
        />{' '}
        <BtnItemMobile
          img={'/images/home/typesOfAuction/7.svg'}
          text={'Real-World Collectibles'}
          style={{
            width: '100%',
          }}
          onClick={() =>
            linkToNewTab(
              'https://www.bounce.finance/realWorldCollectAuction',
            )
          }
        />
      </Box>
    </Box>
  );
};

export default CanvasGamePc;
