import React from 'react';
import { useDesignedForEveryoneStyle } from './useDesignedForEveryoneStyle';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useIsMDDown } from '../../../modules/theme';
import { WithAnimation } from 'src/modules/WithAnimation';

const AuctionBlock: React.FC = () => {
  const classes = useDesignedForEveryoneStyle();
  const isMd = useIsMDDown();

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
  const BeginTitle = (
    <Typography className={classes.leftTitle}>For Beginners</Typography>
  );
  const DevTitle = (
    <Typography className={classes.rightTitle}>For Developers</Typography>
  );

  function BeginDesc() {
    return beginners.map(item => {
      return (
        <Box className={classes.beginnerRow}>
          <WithAnimation>
            <Typography className={classes.beginnerTitle}>
              <img
                className={classes.beginnerTitleIcon}
                src="/images/home/auction/left-icon.svg"
              />
              {item.title}
            </Typography>
          </WithAnimation>
          <WithAnimation>
            <Typography className={classes.beginnerDesc}>
              {item.desc}
            </Typography>
          </WithAnimation>
        </Box>
      );
    });
  }

  const DevDesc = (
    <Box className={classes.rightDesc}>
      <Box className={classes.rightBg}>
        <img
          className={classes.beginnerRightImg}
          src="/images/home/designed-for-everyone/p1.png"
        />
      </Box>
    </Box>
  );

  return (
    <WithScrollFreezing>
      <div className={classes.root} id="auction-block">
        <Container className={classes.container}>
          <Typography className={classes.title}>
            Designed for Everyone
          </Typography>
          {isMd && <Box className={classes.centerLine}></Box>}
          {!isMd && (
            <Box className={classes.content}>
              <Box className={classes.bothTitle}>
                {BeginTitle}
                {!isMd && <Box className={classes.centerLine}></Box>}
                {DevTitle}
              </Box>
              <Grid container spacing={0}>
                <Grid
                  item
                  md={6}
                  style={{
                    paddingTop: 109,
                  }}
                >
                  {BeginDesc()}
                </Grid>
                <Grid item md={6}>
                  {DevDesc}
                </Grid>
              </Grid>
            </Box>
          )}
          {isMd && (
            <Box className={classes.content}>
              <Box>
                <Box className={classes.bothTitle}>{BeginTitle}</Box>
                {BeginDesc()}
                <Box className={classes.centerLine}></Box>
                <Box className={classes.bothTitle}>{DevTitle}</Box>
                {DevDesc}
              </Box>
            </Box>
          )}
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default AuctionBlock;
