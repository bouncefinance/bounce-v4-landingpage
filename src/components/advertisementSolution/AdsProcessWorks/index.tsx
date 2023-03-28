import React from 'react';
import { useAdsProcessWorksStyles } from './useAdsProcessWorksStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { WithAnimation } from 'src/modules/WithAnimation';
import classNames from 'classnames';
import { useIsMDDown } from '../../../modules/theme';

const AdsProcessWorks: React.FC = () => {
  const isMDDown = useIsMDDown();
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
          <Grid container spacing={isMDDown ? 0 : 2}>
            <Grid
              item
              md={6}
              sm={12}
              style={{
                marginBottom: isMDDown ? '16px' : 0,
              }}
            >
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
              md={6}
              sm={12}
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
