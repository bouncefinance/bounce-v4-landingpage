import React from 'react';
import { useBounceAuctionStyles } from './useBounceAuctionStyles';
import { Container, Grid } from '@material-ui/core';
import { SideScreen } from '../common/components/SideScreen';
import { SideContent } from '../common/components/SideContent';
import { BounceAuctionList } from './components/BounceAuctionList';
import { LogoIcon } from '../common/components/Icons/LogoIcon';
import { useIsLGUp, useIsMDDown } from '../theme';
import { WithScrollFreezing } from '../WithScrollFreezing';
import { t } from 'src/i18n/intl';

export const BounceAuction = () => {
  const classes = useBounceAuctionStyles();

  const isLGUp = useIsLGUp();
  const isMDDown = useIsMDDown();

  return (
    <WithScrollFreezing>
      <div className={classes.root} id="bounce-auction">
        <div className={classes.wrap}>
          <Container maxWidth={false} className={classes.container}>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <SideContent
                  BrandLogo={LogoIcon}
                  brandName={t('bounce-auction.brand')}
                  title={t('bounce-auction.title')}
                  text={t('bounce-auction.text')}
                  btnUrl="https://app.bounce.finance/"
                />
                {isMDDown && (
                  <SideScreen screenPath="/images/bounce-auction/screen.jpg" />
                )}
                <BounceAuctionList />
              </Grid>
              {isLGUp && (
                <Grid item xs={12} lg={6}>
                  <SideScreen screenPath="/images/bounce-auction/screen.jpg" />
                </Grid>
              )}
            </Grid>
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};
