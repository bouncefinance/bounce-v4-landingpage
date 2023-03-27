import React from 'react';
import { useAdsProcessWorksStyles } from './useAdsProcessWorksStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { WithAnimation } from 'src/modules/WithAnimation';
import classNames from 'classnames';

const AdsProcessWorks: React.FC = () => {
  const classes = useAdsProcessWorksStyles();
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="industry-block">
        <Container maxWidth="xl" className={classes.container}>
          <WithAnimation>
            <Typography className={classes.industryTitle}>
              How Our Ads Auction Process Works
            </Typography>
          </WithAnimation>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <WithAnimation>
                <img
                  className={classes.contentImg}
                  src="/images/advertisementSolution/p2.png"
                  alt=""
                />
              </WithAnimation>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                marginBottom: 80,
              }}
            >
              <WithAnimation>
                <img
                  className={classes.contentImg}
                  src="/images/advertisementSolution/p3.png"
                  alt=""
                />
              </WithAnimation>
            </Grid>
          </Grid>
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default AdsProcessWorks;
