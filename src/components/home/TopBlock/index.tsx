import React, { useMemo } from 'react';
import { useTopBlockStyles } from './useTopBlockStyles';
import { Button, Container, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { uid } from 'react-uid';
import { t, tHTML } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';

export interface IBtnListItemProps {
  className: string;
  variant: 'text' | 'contained' | 'outlined' | undefined;
  href: string;
  text: string;
}

export const TopBlock = () => {
  const classes = useTopBlockStyles();

  const btnList: IBtnListItemProps[] = useMemo(
    () => [
      {
        className: 'demoBtn',
        variant: 'contained',
        href: 'https://app.bounce.finance/',
        text: t('common.launch-app'),
      },
      {
        className: 'docsBtn',
        variant: 'outlined',
        href: 'https://coinmarketcap.com/currencies/bounce-token/#Markets',
        text: t('common.buy-auction'),
      },
    ],
    [],
  );

  return (
    <div className={classes.root}>
      <video
        muted
        autoPlay
        playsInline
        id="videoMd"
        className={classNames(classes.video, classes.videoSm)}
      >
        <source src="/video/top-block-bg-sm.mp4" type="video/mp4" />
      </video>
      <video
        muted
        autoPlay
        playsInline
        id="videoPc"
        className={classNames(classes.video, classes.videoLg)}
      >
        <source src="/video/top-block-bg.mp4" type="video/mp4" />
      </video>
      <Container maxWidth={false} className={classes.container}>
        <WithAnimation
          className={classes.title}
          Component={Typography}
          variant="h2"
        >
          {tHTML('home-page.banner.title')}
        </WithAnimation>
        <WithAnimation className={classes.text} Component={Typography}>
          {t('home-page.banner.text')}
        </WithAnimation>
        <WithAnimation className={classes.btnWrap}>
          {btnList.map(v => (
            <Button
              key={uid(v)}
              className={classes[v.className]}
              variant={v.variant}
              href={v.href}
              role="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {v.text}
            </Button>
          ))}
        </WithAnimation>
      </Container>
    </div>
  );
};
