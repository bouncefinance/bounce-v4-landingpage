import React from 'react';
import { useBottomBlockStyles } from './useBottomBlockStyles';
import { Button, Container, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { useIsLGDown } from 'src/modules/theme';
import { WithAnimation } from 'src/modules/WithAnimation';
import { t } from 'src/i18n/intl';

interface IBottomBlockProps {
  id: string;
  BrandLogo: any;
  brandName: string;
  title: string;
  text: string;
  href?: string;
  isSecond?: boolean;
}

export const BottomBlock = ({
  id,
  BrandLogo,
  brandName,
  title,
  text,
  href,
  isSecond = false,
}: IBottomBlockProps) => {
  const classes = useBottomBlockStyles();
  const isLGDown = useIsLGDown();

  return (
    <div
      className={classNames(classes.root, isSecond && classes.secondStyles)}
      id={id}
    >
      <Container maxWidth={false} className={classNames(isSecond ? classes.secondcontainer : classes.container, isLGDown && classes.native)}>
        <div className={classes.tileTop}>
          <WithAnimation className={classes.brand}>
            <BrandLogo className={classes.brandLogo} />
            <div className={classes.brandContent}>
              <div className={classes.brandName}>{brandName}</div>
              {!href && (
                <div className={classes.tileComingSoon}>
                  {t('common.coming-soon')}
                </div>
              )}
            </div>
          </WithAnimation>
        </div>

        <WithAnimation
          className={classes.title}
          Component={Typography}
          variant="h2"
        >
          {title}
        </WithAnimation>
        <WithAnimation className={classes.text} Component={Typography}>
          {text}
        </WithAnimation>
        {href && (
          <WithAnimation className={classes.btnWrap}>
            <Button
              className={classes.btn}
              variant="contained"
              href={href}
              role="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('common.launch-app')}
            </Button>
          </WithAnimation>
        )}
      </Container>
    </div>
  );
};
