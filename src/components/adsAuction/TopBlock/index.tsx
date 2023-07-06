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
      title: 'Ads Auction marketplace',
      desc: 'The One-Stop Marketplace for All Your Advertising Needs',
    },
    {
      title: 'Ads Management Terminal',
      desc: 'The entire auction process is being recorded and managed on-chain',
    },
    {
      title: 'Ads Plug-in',
      desc: 'Seamless integration with your website to let you choose your ideal ads placement',
    },
  ];
  const title = (
    <WithAnimation>
      <Typography className={classes.leftTitle}>
        Transform Your Advertising Strategy With Bounce Finance's Full Suite of
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
  const DevDesc = (
    <Box className={classes.rightDesc}>
      <Box className={classes.rightBg}></Box>
      <img
        className={classes.beginnerRightImg}
        src="/images/adsAuction/p11.png"
      />
    </Box>
  );
  return (
    <div className={classes.pageRoot}>
      <Container maxWidth={false} className={classes.pageContainer}>
        <WithAnimation
          className={classes.title1}
          Component={Typography}
          variant="h2"
        >
          Ad Space Auction
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
          With Bounce Finance, your advertising budget is optimized to reach
          your target audience, minimize costs, and maximize ROI. Say goodbye to
          manual bidding and hello to a smarter, more efficient way to auction
          your ads.
        </WithAnimation>
        <WithAnimation className={classes.btnBox}>
          <ComBtn
            text={'Start Now'}
            handleClick={() => {
              window.open('https://app.bounce.finance/ads-auction', '_blank');
            }}
          ></ComBtn>
        </WithAnimation>
        {!isMd && (
          <Grid container spacing={3}>
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
              {DevDesc}
            </Grid>
          </Grid>
        )}
        {isMd && (
          <Box>
            {DevDesc}
            {title}
            {desc()}
          </Box>
        )}
      </Container>
    </div>
  );
};
