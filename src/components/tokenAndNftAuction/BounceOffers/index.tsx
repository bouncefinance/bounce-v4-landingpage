import React from 'react';
import { useBounceOffersStyles } from './useBounceOffersStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';

export const BounceOffers = () => {
  const classes = useBounceOffersStyles();
  const offerList = [
    {
      title: 'Permissionless and No-code Auction Creation',
      desc: 'Create auctions anytime, in just a few simple steps, with our easy-to-use form.',
    },
    {
      title: 'Customizable Settings',
      desc: 'Customize your auction based on your own needs. Set your preferred lockups, credentials and price rates.',
    },
    {
      title: 'Contingent and Auto- execute',
      desc: 'Bidding takes place in a decentralized, fair and transparent manner, with the help of self-executing smart contracts.',
    },
  ];
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="bounce-offers-block">
        <Container maxWidth={false} className={classes.container}>
          <WithAnimation>
            <img
              className={classes.logo}
              src={'/images/tokenAndNftAuction/p6.svg'}
              alt=""
            />
          </WithAnimation>
          <WithAnimation
            className={classes.title}
            Component={Typography}
            variant="h2"
          >
            What Bounce Offers
          </WithAnimation>
          <WithAnimation>
            <Grid container spacing={2}>
              {offerList.map((item, index) => (
                <Grid item md={4} sm={12} key={index}>
                  <Box className={classes.item}>
                    <Typography className={classes.itemTitle}>
                      {item.title}
                    </Typography>
                    <Typography className={classes.itemDesc}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </WithAnimation>
        </Container>
      </div>
    </WithScrollFreezing>
  );
};
