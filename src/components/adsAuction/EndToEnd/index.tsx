import React from 'react';
import { useEndToEndStyles } from './useEndToEndStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';

export const EndToEnd = () => {
  const classes = useEndToEndStyles();
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="bounce-offers-block">
        <Container maxWidth={false} className={classes.container}>
          <Grid container spacing={0}>
            <Grid
              item
              md={6}
              sm={12}
            >
              <WithAnimation>
                <Typography className={classes.leftTitle}>
                  An End-to-End Solution for Ads Auction
                </Typography>
              </WithAnimation>
              <WithAnimation>
                <Typography className={classes.leftDesc}>
                  Revolutionize the process of bidding for ads with our
                  comprehensive platform, providing the tools and resources you
                  need for a successful advertising campaign. Experience ease
                  and efficiency through our secure, transparent, and simple
                  on-chain auction process. With Bounce, achieving your
                  advertising goals has never been easier.
                </Typography>
              </WithAnimation>
            </Grid>
            <Grid item xs={6}>
              <WithAnimation>
                <img
                  className={classes.rightImg}
                  src="/images/adsAuction/p10.png"
                />
              </WithAnimation>
            </Grid>
          </Grid>
        </Container>
      </div>
    </WithScrollFreezing>
  );
};
