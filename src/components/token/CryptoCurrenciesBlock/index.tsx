import { Container, Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import { t } from 'src/i18n/intl';
import { SideScreen } from 'src/modules/common/components/SideScreen';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useCryptoCurrenciesBlockStyles } from './useCryptoCurrenciesBlockStyles';
import Footer from 'src/components/common/Footer';

const CryptoCurrenciesBlock: React.FC = () => {
  const classes = useCryptoCurrenciesBlockStyles();
  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <div className={classes.wrap}>
          <Container maxWidth="xl">
            <Grid
              container
              spacing={10}
              style={{
                marginBottom: '90px',
              }}
            >
              <Grid item xs={12} lg={7}>
                <WithAnimation
                  Component={Typography}
                  variant="h2"
                  className={classes.title}
                >
                  {t('crypto-currencies.title')}
                </WithAnimation>
                <WithAnimation
                  Component={Typography}
                  variant="body1"
                  className={classNames(classes.subtitle, classes.sub1)}
                >
                  {t('crypto-currencies.subtitle')}
                </WithAnimation>
                <WithAnimation
                  Component={Typography}
                  variant="body1"
                  className={classes.subtitle}
                >
                  {t('crypto-currencies.subtitle2')}
                </WithAnimation>
                <Typography variant="body1" className={classes.poweredBy}>
                  {t('crypto-currencies.poweredBy')}
                </Typography>
                <WithAnimation>
                  <img src="/images/binance-exchange/binance.png" height={30} />
                </WithAnimation>
                <WithAnimation className={classes.imgScreenMobile}>
                  <img src="/images/tools/p3.png" />
                </WithAnimation>
              </Grid>
              <Grid item xs={12} lg={5} className={classes.imgScreen}>
                <SideScreen screenPath="/images/tools/p2.png" />
              </Grid>
            </Grid>
            <Footer />
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};

export default CryptoCurrenciesBlock;
