import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { t, tHTML } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useBounceOtcBlockStyles } from './useBounceOtcBlockStyles';

const BounceOtcBlock: React.FC = () => {
  const classes = useBounceOtcBlockStyles();
  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <div className={classes.wrap}>
          <Container maxWidth="xl" className={classes.container}>
            <WithAnimation
              Component={Typography}
              variant="h2"
              className={classes.title}
            >
              {t('bounce-otc.title')}
            </WithAnimation>
            <WithAnimation
              Component={Typography}
              variant="body1"
              className={classes.subtitle}
            >
              {tHTML('bounce-otc.subtitle')}
            </WithAnimation>
            <WithAnimation
              Component={Typography}
              variant="body2"
              className={classes.case}
            >
              <img
                src="/images/investment/p2-pc.png"
                alt="bg"
                className={classes.casePc}
              />
              <img
                src="/images/investment/p2-mobile.png"
                alt="bg"
                className={classes.caseMobile}
              />
            </WithAnimation>
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};

export default BounceOtcBlock;
