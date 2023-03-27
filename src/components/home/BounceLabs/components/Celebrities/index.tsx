import React, { useCallback, useMemo, useState } from 'react';
import { useCelebritiesStyles } from './useCelebritiesStyles';
import { Button, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { uid } from 'react-uid';
import { useIsXLUp } from 'src/modules/theme';
import { WithAnimation } from 'src/modules/WithAnimation';
import { StarIcon } from 'src/modules/common/components/Icons/StarIcon';
import { t } from 'src/i18n/intl';
import { useIsMDDown } from 'src/modules/theme';

export const Celebrities = () => {
  const classes = useCelebritiesStyles();

  const celebs = useMemo(
    () => [
      'eimi-fukada',
      'kyle-kuzma',
      'nick-young',
      'skyy-clark',
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
  const isMd = useIsMDDown();
  return (
    <div className={classes.root}>
      <div className={classes.list}>
      {isMd && (<Typography className={classes.mobileTitle}>Celebrities:</Typography>)}
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
              {t(`home-page.bounce-labs.celebrities.${item}.name`)}
            </Button>
            <div className={classes.itemContent}>
              <div className={classes.itemImage}>
                <img
                  src={`/images/fangible/celebrities/${item}.png`}
                  alt={t(`home-page.bounce-labs.celebrities.${item}.name`)}
                />
              </div>
              <div className={classes.itemText}>
                {t(`home-page.bounce-labs.celebrities.${item}.text`)}
              </div>
            </div>
          </WithAnimation>
        ))}
      </div>
    </div>
  );
};
