import { Button, Container, Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React, { useState } from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { useIsMDUp } from 'src/modules/theme';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useBuildWithBounceStyles } from './useBuildWithBounceStyles';

export type IBuildWithBounceProps = {};

const BuildWithBounce: React.FC<IBuildWithBounceProps> = ({}) => {
  const classes = useBuildWithBounceStyles();
  const isMDUp = useIsMDUp();
  
  const [active, setActive] = useState('finance');

  const btnList = [
    {
      label: t('home-page.build-with-bounce.finance-btn'),
      disabled: false,
      key: 'finance',
    },
    {
      label: t('home-page.build-with-bounce.nfts-btn'),
      disabled: true, 
      key: 'nfts',
    },
    {
      label: t('home-page.build-with-bounce.managment-btn'),
      disabled: false,
      key: 'managment'
    },
    {
      label: t('home-page.build-with-bounce.market-btn'),
      disabled: false,
      key: 'market'
    }
  ];

  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <div className={classes.wrap}>
          <Container 
            maxWidth={false} 
            className={classes.container}
          >
            <Grid container>
              <Grid item xs={12} lg={6}>
                <WithAnimation
                  className={classes.title}
                  Component={Typography}
                  variant="h1"
                  >
                  {t('home-page.build-with-bounce.title')}
                </WithAnimation>
                <Grid 
                  container 
                  spacing={1}
                >
                  {
                    btnList.map(v => (
                      <Grid item key={uid(v)}>
                        <Button
                          className={classNames(classes.btn, active === v.key && classes['active-btn'])}
                          disabled={v.disabled}
                          variant="contained"
                          onClick={() => setActive(v.key)}
                        >
                          {v.label}
                        </Button>
                      </Grid>
                    ))
                  }
                </Grid>
                <WithAnimation
                  className={classes.description}
                  Component={Typography}
                  variant="h4"
                  >
                  {t('home-page.build-with-bounce.description')}
                </WithAnimation>
                <WithAnimation
                  className={classes.detail}
                  Component={Typography}
                  variant="body1"
                  >
                  {t('home-page.build-with-bounce.detail')}
                </WithAnimation>
              </Grid>
              <Grid item xs={12} lg={6}>
                {
                  isMDUp && (
                    <div className={classes.imgWrap}>
                      <WithAnimation
                        className={classes.screenWrap}
                        defaultAnimation={false}
                        addClassInView={classes.screenInView}
                      >
                        <img className={classes.screen} src={`/images/home/build-with-bounce/desk-${active}.png`} alt="" />
                      </WithAnimation>
                    </div>
                  )
                }
                {
                  !isMDUp && (
                    <WithAnimation className={classes['mobile-img-wrap']}>
                      <img src={`/images/home/build-with-bounce/mobile-${active}.png`} alt="" />
                    </WithAnimation>
                  )
                }
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
}

export default BuildWithBounce;