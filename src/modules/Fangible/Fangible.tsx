import React from 'react';
import { useFangibleStyles } from './useFangibleStyles';
import { Container, Grid } from '@material-ui/core';
import { SideScreen } from '../common/components/SideScreen';
import { SideContent } from '../common/components/SideContent';
import { FangibleIcon } from '../common/components/Icons/FangibleIcon';
import { WithScrollFreezing } from '../WithScrollFreezing';
import { Celebrities } from './components/Celebrities';
import { t } from 'src/i18n/intl';

export const Fangible = () => {
  const classes = useFangibleStyles();

  return (
    <WithScrollFreezing>
      <div className={classes.root} id="fangible">
        <div className={classes.wrap}>
          <Container maxWidth={false} className={classes.topContainer}>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <SideContent
                  BrandLogo={FangibleIcon}
                  brandName={t('fangible.brand')}
                  title={t('fangible.title')}
                  text={t('fangible.text')}
                  btnUrl="https://fangible.com/"
                  smallTitleStyle
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <SideScreen screenPath="/images/fangible/screen.jpg" />
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth={false} className={classes.celebContainer}>
            <Celebrities />
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};
