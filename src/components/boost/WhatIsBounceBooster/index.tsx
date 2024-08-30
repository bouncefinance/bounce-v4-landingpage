import React, { useEffect, useState } from 'react';
import { useTypesOfAuctionBounceStyles } from './useWhatIsBounceBooster';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import Side2 from './Side2';
import { useIsMDDown } from 'src/modules/theme';

interface IOfferListContext {
  title: string;
  desc: string;
  level2Desc?: string;
}

export const WhatIsBounceBooster = () => {
  const [showImg, setShowImg] = useState(false);
  const [percent, setPercent] = useState(0);
  const classes = useTypesOfAuctionBounceStyles();
  const offerList: IOfferListContext[] = [
    {
      title: 'The Challenge: Overwhelming Opportunities ',
      desc: 'As the crypto space evolves, the number of decentralized finance (DeFi) and centralized finance (CeFi) yield offerings continues to grow, creating a vibrant yet often overwhelming environment for individual investors. Navigating this landscape requires significant research, constant monitoring of market conditions, and a deep understanding of various protocols, risks, and potential returns. The abundance of information and complex options can make it challenging for individuals to identify the most suitable opportunities and make informed investment decisions.',
    },
    {
      title: 'Our Solution: Bounce Booster',
      desc: 'Bounce Booster is designed to provide different investment strategies and simplify the yield generation process for users. By leveraging our resources and innovations in CeDeFi, Bounce Booster aggregates top CeDeFi offerings to ensure optimal yield for users who stake FSUSD and $AUCTION on Bounce Booster. Our protocol invests users’ stakes into premium CeDeFi strategies that combine the best of DeFi and CeFi, streamlining the investment process. All you need to do is stake on Bounce Booster, relax, and withdraw your profits—earning yield with minimal effort.',
      level2Desc:
        'In addition, staking on Bounce Booster will earn you Booster Points which serve as a factor in determining users’ allocations from Bounce Launchpad IDOs. Your Booster Points accumulate until an IDO starts on Bounce Launchpad and reset to 0 after the IDO ends. The more you stake during each point accumulation period, the more Booster Points you’ll get and the more IDO allocations. ',
    },
  ];
  const isMd = useIsMDDown();
  useEffect(() => {
    const container = document.getElementById('booster-what-is');
    const nextContainer = document.getElementById('booster-how-foes-it-works');
    if (!container || !nextContainer) return;
    const fnc = () => {
      if (isMd) {
        setPercent(100);
        setShowImg(true);
        return;
      }
      const rect = container.getBoundingClientRect();

      const y = rect.y;
      const yNext = nextContainer.getBoundingClientRect().y;

      const full = window.innerHeight / 2 - (window.innerHeight - rect.height);

      const percentInner = Math.floor(
        ((window.innerHeight / 2 - rect.top) / full) * 100,
      );

      // const percent =
      //   (rect.y - rect.height) / (window.innerHeight + rect.height);
      const percent = percentInner;
      console.log(container.getBoundingClientRect(), -rect.top, full);
      if (percent > 100) {
        setPercent(100);
      } else if (percent < 0) {
        setPercent(0);
      } else {
        setPercent(percent);
      }

      if (rect.top > window.innerHeight / 2 || yNext < 35) {
        setShowImg(false);
      } else {
        setShowImg(true);
      }
    };
    addEventListener('scroll', fnc);
    return () => {
      removeEventListener('scroll', fnc);
    };
  }, []);
  return (
    <>
      <WithScrollFreezing paddingTop="0">
        <div className={classes.root} id="booster-what-is">
          <Container maxWidth={false} className={classes.container}>
            <WithAnimation
              className={classes.title}
              Component={Typography}
              variant="h2"
            >
              What is Bounce Booster?
            </WithAnimation>
            <WithAnimation>
              <Grid
                container
                spacing={2}
                style={{
                  marginBottom: 120,
                  width: isMd ? '100%' : '50%',
                }}
              >
                {offerList.map((item, index) => (
                  <Grid item md={12} sm={12} key={index}>
                    <Box className={classes.item}>
                      <Box className={classes.itemRight}>
                        <Typography className={classes.itemTitle}>
                          {item.title}
                        </Typography>
                        <Typography className={classes.itemDesc}>
                          {item.desc}
                        </Typography>
                        {item.level2Desc && (
                          <>
                            <br />
                            <Typography className={classes.itemDesc}>
                              {item.level2Desc}
                            </Typography>
                          </>
                        )}
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </WithAnimation>
          </Container>
        </div>
      </WithScrollFreezing>{' '}
      {showImg && (
        <>
          {isMd ? (
            <></>
          ) : (
            <WithAnimation
              defaultAnimation={false}
              rootMargin={'50%'}
              className={classes.p2}
              addClassInView={classes.p2Show}
            >
              <Side2 percent={percent} className={classes.svg} />
            </WithAnimation>
          )}
        </>
      )}
    </>
  );
};
