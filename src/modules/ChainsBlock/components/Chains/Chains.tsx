import React, { useMemo } from 'react';
import { useChainsStyles } from './useChainsStyles';
import { Typography } from '@material-ui/core';
import { useIsXLUp } from '../../../theme';
import { EthereumIcon } from '../../../common/components/Icons/EthereumIcon';
import { BSCIcon } from '../../../common/components/Icons/BSCIcon';
import { PolkadotIcon } from '../../../common/components/Icons/PolkadotIcon';
import { KusamaIcon } from '../../../common/components/Icons/KusamaIcon';
import { PolygonIcon } from '../../../common/components/Icons/PolygonIcon';
import { SolanaIcon } from '../../../common/components/Icons/SolanaIcon';
import { uid } from 'react-uid';
import { WithAnimation } from 'src/modules/WithAnimation';
import { t, tHTML } from 'src/i18n/intl';
import { ChainItem } from '../ChainItem';

export const Chains = () => {
  const classes = useChainsStyles();

  const isXLUp = useIsXLUp();

  const items = useMemo(
    () => [
      {
        label: 'Ethereum',
        icon: <EthereumIcon />,
      },
      {
        label: 'Binance Smart Chain',
        icon: <BSCIcon />,
      },
      {
        label: 'Polkadot',
        icon: <PolkadotIcon />,
      },
      {
        label: 'Kusama',
        icon: <KusamaIcon />,
      },
      {
        label: 'Polygon',
        icon: <PolygonIcon />,
      },
      {
        label: 'Solana',
        icon: <SolanaIcon />,
      },
    ],
    [],
  );

  return (
    <div className={classes.root}>
      <WithAnimation
        className={classes.title}
        Component={Typography}
        variant="h2"
      >
        {tHTML('chains-block.chains.title')}
      </WithAnimation>
      {isXLUp ? (
        <WithAnimation
          className={classes.itemsDesktop}
          rootMargin="-50%"
          defaultAnimation={false}
          addClassInView={classes.itemsDesktopInView}
        >
          {items.map(item => (
            <div className={classes.item} key={uid(item)}>
              <ChainItem label={item.label} icon={item.icon} />
            </div>
          ))}
        </WithAnimation>
      ) : (
        <WithAnimation
          className={classes.itemsMobile}
          rootMargin="-5%"
          defaultAnimation={false}
          addClassInView={classes.itemsMobileInView}
        >
          {items.map(item => (
            <div className={classes.item} key={uid(item)}>
              <ChainItem label={item.label} icon={item.icon} />
            </div>
          ))}
        </WithAnimation>
      )}
      <div className={classes.textWrap}>
        <WithAnimation className={classes.text} Component={Typography}>
          {t('chains-block.chains.text')}
        </WithAnimation>
      </div>
    </div>
  );
};
