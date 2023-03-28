import React from 'react';
import {useChooseModesForAdsStyles} from './useChooseModesForAdsStyles';
import {Container, Typography, Box, Grid} from '@material-ui/core';
import {WithScrollFreezing} from 'src/modules/WithScrollFreezing';
import {WithAnimation} from 'src/modules/WithAnimation';
import Footer from 'src/components/common/Footer';
import classNames from 'classnames';
import {useIsMDDown} from "../../../modules/theme";

const ChooseModesForAds: React.FC = () => {
  const classes = useChooseModesForAdsStyles();
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
              Choose Your Path with Bounce's Two Different Modes for Auctioning
              Ads
            </Typography>
          </WithAnimation>
          <Grid container spacing={2} style={{marginBottom: isMd ? 80 : 0}}>
            {industryList.map((item, index) => (
              <Grid item md={6} sm={12} style={{marginBottom: isMd ? 0 : 120}}>
                <Box
                  className={classNames(
                    classes.industryItem,
                    index === 1 ? classes.industryItem2 : '',
                  )}
                >
                  <WithAnimation>
                    <Typography className={classes.industryItemTitle}>
                      {item.title}
                    </Typography>
                  </WithAnimation>
                  <WithAnimation>
                    <Typography className={classes.industryItemContent}>
                      {item.content}
                    </Typography>
                  </WithAnimation>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer colorTheme={'dark'} noBg={false}></Footer>
      </div>
    </WithScrollFreezing>
  );
};

export default ChooseModesForAds;
