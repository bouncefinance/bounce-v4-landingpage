import React from 'react';
import { useTopBlockStyles } from './useTopBlockStyles';
import { Box, Container, Typography } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import ComBtn from 'src/components/common/ComBtn';
import { useIsMDDown } from '../../../modules/theme';
export const TopBlock = () => {
  const classes = useTopBlockStyles();
  const isMd = useIsMDDown();

  return (
    <div className={classes.pageRoot}>
      <Container maxWidth={false} className={classes.pageContainer}>
        <Box>
          <WithAnimation
            className={classes.title1}
            Component={Typography}
            variant="h2"
          >
            Bounce Booster
          </WithAnimation>
          <WithAnimation
            className={classes.title2}
            Component={Typography}
            variant="h2"
          >
            Maximize Yield,
          </WithAnimation>
          <WithAnimation
            className={classes.title2}
            Component={Typography}
            variant="h2"
          >
            Minimize Effort.
          </WithAnimation>
          <WithAnimation className={classes.btnBox}>
            <ComBtn
              disabled
              text={'Coming Soon'}
              handleClick={() => {
                window.open(
                  'https://app.bounce.finance/TokenAuction',
                  '_blank',
                );
              }}
              style={{ background: '#2B51DA', pointerEvents: 'none' }}
            ></ComBtn>
          </WithAnimation>
        </Box>

        <WithAnimation
          defaultAnimation={false}
          rootMargin={'50%'}
          className={classes.p2}
          addClassInView={classes.p2Show}
        >
          <img
            className={classes.animationImg}
            src={'/images/booster/side.svg'}
            alt=""
          />
        </WithAnimation>
      </Container>
    </div>
  );
};
