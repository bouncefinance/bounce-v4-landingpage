import React from 'react';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { useBounceAuctionListStyles } from './useBounceAuctionListStyles';

export const BounceAuctionList = () => {
  const classes = useBounceAuctionListStyles();

  return (
    <div className={classes.root}>
      <div className={classes.list}>
        <WithAnimation className={classes.listItem}>
          {t('bounce-auction.item1')}
        </WithAnimation>
        <WithAnimation className={classes.listItem}>
          {t('bounce-auction.item2')}
        </WithAnimation>
        <WithAnimation className={classes.listItem}>
          {t('bounce-auction.item3')}
        </WithAnimation>
        <WithAnimation className={classes.listItem}>
          {t('bounce-auction.item4')}
        </WithAnimation>
      </div>
    </div>
  );
};
