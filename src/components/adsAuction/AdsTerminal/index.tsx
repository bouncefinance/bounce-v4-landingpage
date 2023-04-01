import React from 'react';
import { useAdsTerminalStyles } from './useAdsTerminalStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useIsMDDown } from '../../../modules/theme';

export const AdsTerminal = () => {
  const classes = useAdsTerminalStyles();
  const isMd = useIsMDDown();
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="bounce-offers-block">
        <Container maxWidth={false} className={classes.container}>
          <WithAnimation
            className={classes.title}
            Component={Typography}
            variant="h2"
          >
            Bounce Ads Terminal
          </WithAnimation>
          {isMd ? (
            <>
              <WithAnimation>
                <img
                  className={classes.iconBlowTitle}
                  src="/images/adsAuction/p1.svg"
                  alt=""
                />
              </WithAnimation>
              <WithAnimation style={{ overflowX: 'auto', margin: '0 -16px' }}>
                <img
                  src={'/images/adsAuction/bounce-ads-terminal.png'}
                  alt=""
                  className={classes.mobileImg}
                />
              </WithAnimation>
            </>
          ) : (
            <>
              <WithAnimation>
                <img
                  className={classes.iconBlowTitle}
                  src="/images/adsAuction/p1.svg"
                  alt=""
                />
              </WithAnimation>
              <Box className={classes.animationBox}>
                <WithAnimation>
                  <Box className={classes.animate1}>
                    <img
                      className={classes.p2}
                      src="/images/adsAuction/p2.svg"
                      alt=""
                    />
                  </Box>
                </WithAnimation>
                <WithAnimation>
                  <Box className={classes.animate2}>
                    <img
                      className={classes.p3}
                      src="/images/adsAuction/p3.png"
                      alt=""
                    />
                    <img
                      className={classes.p4}
                      src="/images/adsAuction/p4.png"
                      alt=""
                    />
                  </Box>
                </WithAnimation>
                <WithAnimation>
                  <Box className={classes.animate3}>
                    <img
                      className={classes.p5}
                      src="/images/adsAuction/p5.png"
                      alt=""
                    />
                    <img
                      className={classes.p6}
                      src="/images/adsAuction/p6.png"
                      alt=""
                    />
                  </Box>
                </WithAnimation>
                <WithAnimation>
                  <Box className={classes.animate4}>
                    <img
                      className={classes.p5}
                      src="/images/adsAuction/p7.svg"
                      alt=""
                    />
                    <img
                      className={classes.p6}
                      src="/images/adsAuction/p7.svg"
                      alt=""
                    />
                  </Box>
                </WithAnimation>
                <WithAnimation>
                  <Box className={classes.animate5}>
                    <img
                      className={classes.p8}
                      src="/images/adsAuction/p8.png"
                      alt=""
                    />
                    <img
                      className={classes.p9}
                      src="/images/adsAuction/p9.png"
                      alt=""
                    />
                  </Box>
                </WithAnimation>
              </Box>
            </>
          )}
        </Container>
      </div>
    </WithScrollFreezing>
  );
};
