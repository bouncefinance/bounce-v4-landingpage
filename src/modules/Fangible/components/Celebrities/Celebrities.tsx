import React, { useCallback, useMemo, useState } from 'react';
import { useCelebritiesStyles } from './useCelebritiesStyles';
import { Button, Typography } from '@material-ui/core';
import { uid } from 'react-uid';
import { StarIcon } from '../../../common/components/Icons/StarIcon';
import classNames from 'classnames';
import { useIsXLUp } from 'src/modules/theme';
import { WithAnimation } from 'src/modules/WithAnimation';
import { t } from 'src/i18n/intl';

export const Celebrities = () => {
  const classes = useCelebritiesStyles();

  const celebs = useMemo(
    () => [
      'eimi-fukada',
      'kyle-kuzma',
      'nick-young',
      'skyy-clark',
      //'asap-rocky', TODO (Asap Rocky): return commented styles witch marked as 'Asap Rocky'
      'deandre-hopkins',
      'devon-dotson',
    ],
    [],
  );

  const isXLUp = useIsXLUp();

  const [activeItem, setActiveItem] = useState(1);

  const activeHandle = useCallback(id => {
    setActiveItem(id);
  }, []);

  return (
    <div className={classes.root}>
      <WithAnimation Component={Typography} className={classes.title}>
        {t('fangible.celebrities.title')}
      </WithAnimation>
      <div className={classes.list}>
        {celebs.map((item, index) => (
          <WithAnimation
            className={classNames(
              classes.item,
              activeItem === index && classes.itemActive,
            )}
            key={uid(index)}
          >
            {isXLUp && <StarIcon className={classes.starIcon} />}
            <Button
              variant="text"
              className={classes.itemName}
              onClick={() => activeHandle(index)}
            >
              {!isXLUp && <StarIcon className={classes.starIcon} />}
              {t(`fangible.celebrities.${item}.name`)}
            </Button>
            <div className={classes.itemContent}>
              <div className={classes.itemImage}>
                <img
                  src={`/images/fangible/celebrities/${item}.png`}
                  alt={t(`fangible.celebrities.${item}.name`)}
                />
              </div>
              <div className={classes.itemText}>
                {t(`fangible.celebrities.${item}.text`)}
              </div>
            </div>
          </WithAnimation>
        ))}
      </div>
    </div>
  );
};
