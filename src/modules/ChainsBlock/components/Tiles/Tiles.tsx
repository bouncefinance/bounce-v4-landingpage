import React, { useCallback } from 'react';
import { useTilesStyles } from './useTilesStyles';
import { Button, Grid } from '@material-ui/core';
import classNames from 'classnames';
import { LogoIcon } from '../../../common/components/Icons/LogoIcon';
import { FangibleIcon } from '../../../common/components/Icons/FangibleIcon';
import { BouncePolkaIcon } from '../../../common/components/Icons/BouncePolkaIcon';
import { ToolboxIcon } from '../../../common/components/Icons/ToolboxIcon';
import { useIsXLUp } from 'src/modules/theme';
import { WithAnimation } from 'src/modules/WithAnimation';
import { t } from 'src/i18n/intl';

export const Tiles = () => {
  const classes = useTilesStyles();

  const isXLUp = useIsXLUp();

  const scrollToHandle = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.getBoundingClientRect().top + window.scrollY,
      });
    }
  }, []);

  return (
    <Grid container spacing={isXLUp ? 6 : 2} className={classes.root}>
      <WithAnimation
        Component={Grid}
        item
        xs={6}
        xl={3}
        className={classes.tileItem}
        rootMargin="0%"
      >
        <div
          className={classNames(classes.tileItemContent, classes.tileToolbox)}
        >
          <div className={classes.tileTop}>
            <ToolboxIcon className={classes.tileLogo} />
          </div>
          <div className={classes.tileContent}>
            <div className={classes.tileTitle}>
              {t('chains-block.tiles.metaverse')}
            </div>
            <Button
              className={classes.tileBtn}
              variant="contained"
              href="https://metaverse.bounce.finance/"
              role="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('common.landing-page')}
            </Button>

            <Button
              onClick={() => scrollToHandle('bounce-metaverse')}
              className={classes.tileMore}
              variant="text"
              role="link"
            >
              {t('common.learn-more')}
            </Button>
          </div>
        </div>
      </WithAnimation>

      <WithAnimation
        Component={Grid}
        item
        xs={6}
        xl={3}
        className={classes.tileItem}
        rootMargin="0%"
      >
        <div
          className={classNames(classes.tileItemContent, classes.tileAuction)}
        >
          <div className={classes.tileTop}>
            <LogoIcon className={classes.tileLogo} />
          </div>
          <div className={classes.tileContent}>
            <div className={classes.tileTitle}>
              {t('chains-block.tiles.bounce-auction')}
            </div>
            <Button
              className={classes.tileBtn}
              variant="contained"
              href="https://app.bounce.finance/"
              role="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('common.launch-app')}
            </Button>
            <Button
              onClick={() => scrollToHandle('bounce-auction')}
              className={classes.tileMore}
              variant="text"
              role="link"
            >
              {t('common.learn-more')}
            </Button>
          </div>
        </div>
      </WithAnimation>

      <WithAnimation
        Component={Grid}
        item
        xs={6}
        xl={3}
        className={classes.tileItem}
        rootMargin="0%"
      >
        <div
          className={classNames(classes.tileItemContent, classes.tileFangible)}
        >
          <div className={classes.tileTop}>
            <FangibleIcon className={classes.tileLogo} />
          </div>
          <div className={classes.tileContent}>
            <div className={classes.tileTitle}>
              {t('chains-block.tiles.fangible')}
            </div>
            <Button
              className={classes.tileBtn}
              variant="contained"
              href="https://fangible.com/"
              role="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('common.launch-app')}
            </Button>
            <Button
              onClick={() => scrollToHandle('fangible')}
              className={classes.tileMore}
              variant="text"
              role="link"
            >
              {t('common.learn-more')}
            </Button>
          </div>
        </div>
      </WithAnimation>

      <WithAnimation
        Component={Grid}
        item
        xs={6}
        xl={3}
        className={classes.tileItem}
        rootMargin="0%"
      >
        <div
          className={classNames(classes.tileItemContent, classes.tilePolkadot)}
        >
          <div className={classes.tileTop}>
            <BouncePolkaIcon className={classes.tileLogo} />
          </div>
          <div className={classes.tileContent}>
            <div className={classes.tileTitle}>
              {t('chains-block.tiles.polka')}
            </div>
            <Button
              className={classes.tileBtn}
              variant="contained"
              href="https://metalents.com"
              role="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('common.landing-page')}
            </Button>
            <Button
              onClick={() => scrollToHandle('bounce-polkadot')}
              className={classes.tileMore}
              variant="text"
              role="link"
            >
              {t('common.learn-more')}
            </Button>
          </div>
        </div>
      </WithAnimation>
    </Grid>
  );
};
