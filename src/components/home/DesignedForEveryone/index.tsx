import React from 'react';
import { useDesignedForEveryoneStyle } from './useDesignedForEveryoneStyle';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
const AuctionBlock: React.FC = () => {
  const classes = useDesignedForEveryoneStyle();
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
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="auction-block">
        <Container className={classes.container}>
          <Typography className={classes.title}>
            Designed for Everyone
          </Typography>
          <Box className={classes.content}>
            <Box className={classes.bothTitle}>
              <Typography className={classes.leftTitle}>
                For Beginners
              </Typography>
              <Box className={classes.centerLine}></Box>
              <Typography className={classes.rightTitle}>
                For Developers
              </Typography>
            </Box>
            <Grid container spacing={0}>
              <Grid
                item
                xs={6}
                style={{
                  paddingTop: 109,
                }}
              >
                {beginners.map(item => {
                  return (
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
                  );
                })}
              </Grid>
              <Grid item xs={6}>
                <img
                  className={classes.beginnerRightImg}
                  src="/images/home/auction/right-img.png"
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default AuctionBlock;
