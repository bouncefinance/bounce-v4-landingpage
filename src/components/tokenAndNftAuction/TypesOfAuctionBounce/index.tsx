import React from 'react';
import { useTypesOfAuctionBounceStyles } from './useTypesOfAuctionBounceStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import Footer from 'src/components/common/Footer';
import { BtnItem } from 'src/components/home/TypesOfAction';
import Balls from 'src/components/home/TypesOfAction/Balls';
export const TypesOfAuctionBounce = () => {
  const classes = useTypesOfAuctionBounceStyles();
  const offerList = [
    {
      img: '/images/tokenAndNftAuction/whatBounceOffers/icon1.svg',
      title: 'Fixed-Priced Auction',
      desc: 'A fixed-priced auction is a type of auction where the price for the assets being auctioned is pre-determined and agreed upon by the auctioneer and participants. This type of auction is typically used when the auctioneer has a specific value target for the assets being sold.',
    },
    {
      img: '/images/tokenAndNftAuction/whatBounceOffers/icon2.svg',
      title: 'Dutch Auction',
      desc: 'A Dutch auction, also known as descending price auction, refers to a type of auction in which an auctioneer starts with a very high price, incrementally lowering the price until someone places a bid. The first bid wins the auction, assuming the price is above the reserve price, avoiding any bidding wars.',
    },
    {
      img: '/images/tokenAndNftAuction/whatBounceOffers/icon3.svg',
      title: 'Sealed-Bid Auction',
      desc: 'A sealed bid auction, also known as blind auction, is a type of auction where all bidders submit their offers simultaneously, in sealed envelopes, without knowing the bids of the other participants. The highest bid wins the auction.',
    },
    {
      img: '/images/tokenAndNftAuction/whatBounceOffers/icon4.svg',
      title: 'Random Selection Auctionn',
      desc: 'A random selection auction is a type of auction where, instead of the highest bid winning the auction, the winning bid is determined randomly, like a lottery.',
    },
    {
      img: '/images/tokenAndNftAuction/whatBounceOffers/icon5.svg',
      title: 'Order Book Auction',
      desc: 'An Order Book auction is a type of auction where auctioneers can submit ask orders with price and quantity, while participants can place bid orders with their desired price and quantity. Bids can be canceled or modified until the end of the auction period, after which matching will occur and orders will be executed.',
    },
    {
      img: '/images/tokenAndNftAuction/whatBounceOffers/icon6.svg',
      title: 'English Auction',
      desc: 'An English auction is a type of auction in which items are sold to the highest bidder. The auction starts with an initial asking price, and participants then place increasing bids until there are no more bidders willing to pay more. The highest bidder wins the auction and is obligated to purchase the item at the final bid price.',
    },
    {
      img: '/images/tokenAndNftAuction/whatBounceOffers/icon7.svg',
      title: 'Playable Auction',
      desc: 'A playable auction is a type of auction where distribution is determined by in-game performance. Auctioneers will create each auction by selecting the allocation size, determining the amount of allocation each qualified participant will earn, the number of winners in each playable auction, and the duration of the auction.',
    },
    {
      img: '/images/tokenAndNftAuction/whatBounceOffers/icon8.svg',
      title: 'Hold-to-compete Auction',
      desc: 'A hold-to-compete auction is a type of auction where bidders are required to place a deposit as an act of commitment in order to participate in the auction.',
    },
  ];
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="bounce-offers-block">
        <Container maxWidth={false} className={classes.container}>
          <WithAnimation
            className={classes.title}
            Component={Typography}
            variant="h2"
          >
            Types of Auctions On Bounce
          </WithAnimation>
          <WithAnimation>
            <Grid
              container
              spacing={2}
              style={{
                marginBottom: 120,
              }}
            >
              {offerList.map((item, index) => (
                <Grid item md={6} sm={12} key={index}>
                  <Box className={classes.item}>
                    <Box className={classes.itemLeft}>
                      <img className={classes.itemImg} src={item.img} alt="" />
                    </Box>
                    <Box className={classes.itemRight}>
                      <Typography className={classes.itemTitle}>
                        {item.title}
                      </Typography>
                      <Typography className={classes.itemDesc}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </WithAnimation>
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
        </Container>
        <Footer colorTheme={'dark'} noBg={true}></Footer>
      </div>
    </WithScrollFreezing>
  );
};
