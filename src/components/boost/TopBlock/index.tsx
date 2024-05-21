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
        <Box
          maxWidth={'1350px'}
          margin="0 auto"
          width={'100%'}
          paddingLeft={'24px'}
        >
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
              style={{
                pointerEvents: 'none',
                border: 'none',
                background: '#C5C5C5',
              }}
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
            src={'/images/booster/side.png'}
            alt=""
          />
        </WithAnimation>
      </Container>
    </div>
  );
};
