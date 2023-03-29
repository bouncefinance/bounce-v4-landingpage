import React from 'react';
import { useTopBlockStyles } from './useTopBlockStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import ComBtn from 'src/components/common/ComBtn';
import { useIsMDDown } from '../../../modules/theme';

export const TopBlock = () => {
  const isMd = useIsMDDown();
  const classes = useTopBlockStyles();
  const beginners = [
    {
      title: 'No-code option',
      desc: 'Build, customize and deploy auction interfaces directly from the Bounce Dashboard',
    },
    {
      title: 'Easy to access ',
      desc: 'Permissionless environment for auction participation and creation',
    },
    {
      title: 'One click execution',
      desc: 'Launch auctions and submit bids through only one click',
    },
  ];
  const title = (
    <WithAnimation>
      <Typography className={classes.leftTitle}>
        Transform Your Advertising Strategy With Bounce's Full Suite of
        Innovative Solutions.
      </Typography>
    </WithAnimation>
  );

  function desc() {
    return beginners.map(item => {
      return (
        <WithAnimation>
          <Box className={classes.beginnerRow}>
            <Typography className={classes.beginnerTitle}>
              <img
                className={classes.beginnerTitleIcon}
                src="/images/home/auction/left-icon.svg"
              />
              {item.title}
            </Typography>
            <Typography className={classes.beginnerDesc}>
              {item.desc}
            </Typography>
          </Box>
        </WithAnimation>
      );
    });
  }

  const img = (
    <WithAnimation style={{ marginRight: '-16px' }}>
      <img
        className={classes.beginnerRightImg}
        src="/images/adsAuction/bg.png"
      />
    </WithAnimation>
  );

  return (
    <div className={classes.pageRoot}>
      <Container maxWidth={false} className={classes.pageContainer}>
        <WithAnimation
          className={classes.title1}
          Component={Typography}
          variant="h2"
        >
          Ads Auction
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Maximize Your Reach,
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Minimize Your Cost. Auction
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Your Ads with Confidence.
        </WithAnimation>
        <WithAnimation className={classes.text} Component={Typography}>
          The automated and precise bidding solution for advertising success.
          With Bounce, your advertising budget is optimized to reach your target
          audience, minimize costs, and maximize ROI. Say goodbye to manual
          bidding and hello to a smarter, more efficient way to auction your
          ads.
        </WithAnimation>
        <WithAnimation className={classes.btnBox}>
          <ComBtn text={'Start Now'}></ComBtn>
        </WithAnimation>
        {!isMd && (
          <Grid container spacing={0}>
            <Grid
              item
              xs={6}
              style={{
                paddingTop: 109,
              }}
            >
              {title}
              {desc()}
            </Grid>
            <Grid item xs={6}>
              {img}
            </Grid>
          </Grid>
        )}
        {isMd && (
          <Box>
            {img}
            {title}
            {desc()}
          </Box>
        )}
      </Container>
    </div>
  );
};
