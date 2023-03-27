import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { WithAnimation } from 'src/modules/WithAnimation';
import { t } from 'src/i18n/intl';
import { Typography, Box } from '@material-ui/core';
import { useIsSMDown } from 'src/modules/theme';
import { useChainsStyles } from './useChainsStyles';
import ChainItem from '../ChainItem';

const Chains: React.FC = () => {
  const classes = useChainsStyles();

  const isSm = useIsSMDown();

  const items = useMemo(
    () => [
      {
        label: 'label1',
        title: '3,000',
      },
      {
        label: 'label2',
        title: '500',
      },
      {
        label: 'label3',
        title: '6,000',
      },
      {
        label: 'label4',
        title: '500',
      },
      {
        label: 'label5',
        title: '100',
      },
    ],
    [],
  );

  return (
    <div className={classes.root}>
      <WithAnimation
        className={classes.title}
        Component={Typography}
        variant="h3"
        style={{
          fontSize: isSm ? '24px' : '36px',
          lineHeight: isSm ? '36px' : '50px',
          marginBottom: isSm ? '32px' : '',
          width: isSm ? '100%' : '57%',
          height: 'auto',
        }}
      >
        {t('chain-block.title')}
      </WithAnimation>
      {!isSm ? (
        <WithAnimation
          className={classes.itemsDesktop}
          rootMargin="-50%"
          defaultAnimation={false}
          addClassInView={classes.itemsDesktopInView}
        >
          {items.map(item => (
            <div className={classes.item} key={uid(item)}>
              <ChainItem
                label={t(`chain-block.circle.${item.label}`)}
                title={item.title}
              />
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
          {items.reverse().map(item => (
            <div className={classes.itemEl} key={uid(item)}>
              <div className={classes.singleEl}>
                <div className={classes.singleElTitle}>{item.title}</div>
                <div className={classes.singleElLabel}>{t(`chain-block.circle.${item.label}`)}</div>
              </div>
            </div>
          ))}
        </WithAnimation>
      )}
    </div>
  );
};

export default Chains;
