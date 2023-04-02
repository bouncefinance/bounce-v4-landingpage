import React from 'react';
import { useKeyFeaturesStyles } from './useKeyFeaturesStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { WithAnimation } from 'src/modules/WithAnimation';
import classNames from 'classnames';
import { useIsMDDown } from '../../../modules/theme';

const KeyFeature: React.FC = () => {
  const classes = useKeyFeaturesStyles();
  const isMd = useIsMDDown();
  const industryList = [
    {
      title: 'Exclusive Ads',
      content:
        'Bid and win the exclusive right to display your ads on your desired platform. No competing with other advertisements or having your message lost in the noise.',
    },
    {
      title: 'Joint Ads',
      content:
        'Bid for an ad placement and join forces with other businesses. Create a larger advertising footprint and reach a wider audience.',
    },
  ];
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="industry-block">
        <Container maxWidth="xl" className={classes.container}>
          <WithAnimation>
            <Typography className={classes.industryTitle}>
              Key Features of Our Ad Space <br /> Auction
            </Typography>
          </WithAnimation>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12}>
              <Box className={classNames(classes.industryItem)}>
                <WithAnimation>
                  <Typography
                    className={classNames(
                      classes.industryItemTitle,
                      classes.industryItemLeftTitle,
                    )}
                  >
                    <img
                      className={classes.icon}
                      src="/images/advertisementSolution/icon1.png"
                      alt=""
                    />
                    Exclusive Ad Space
                  </Typography>
                </WithAnimation>
                <WithAnimation>
                  <Typography className={classes.industryItemContent}>
                    Bid and win the exclusive right to display your ads on your
                    desired platform. No competing with other advertisements or
                    having your message lost in the noise.
                  </Typography>
                </WithAnimation>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              style={{
                marginBottom: isMd ? 40 : 80,
              }}
            >
              <Box className={classNames(classes.industryItem2)}>
                <WithAnimation>
                  <Typography className={classes.industryItemTitle}>
                    <img
                      className={classes.icon}
                      src="/images/advertisementSolution/icon2.png"
                      alt=""
                    />
                    Joint Ad Space
                  </Typography>
                </WithAnimation>
                <WithAnimation>
                  <Typography className={classes.industryItemContent2}>
                    Bid for an ad placement and join forces with other
                    businesses. Create a larger advertising footprint and reach
                    a wider audience.
                  </Typography>
                </WithAnimation>
                <img
                  className={classes.rightBg}
                  src="/images/advertisementSolution/bg.svg"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
          <img
            className={classNames(classes.fullImg)}
            src={
              isMd
                ? '/images/advertisementSolution/auction-key-features.png'
                : '/images/advertisementSolution/p1.png'
            }
            alt=""
          />
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default KeyFeature;
