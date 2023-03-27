import React from 'react';
import { useSideContentStyles } from './useSideContentStyles';
import { Typography, Button } from '@material-ui/core';
import classNames from 'classnames';
import { WithAnimation } from 'src/modules/WithAnimation';
import { t } from 'src/i18n/intl';

interface ISideContentProps {
  BrandLogo: any;
  brandName: string | React.ReactElement;
  title: string;
  text: string;
  btnUrl?: string;
  smallTitleStyle?: boolean;
  className?: any;
  btnText?: string | React.ReactElement;
}

export const SideContent = ({
  BrandLogo,
  brandName,
  title,
  text,
  btnUrl,
  smallTitleStyle = false,
  className,
  btnText,
}: ISideContentProps) => {
  const classes = useSideContentStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <WithAnimation className={classes.brand}>
        <BrandLogo className={classes.brandLogo} />
        <div className={classes.brandContent}>
          <span className={classes.brandName}>{brandName}</span>
          {!btnUrl && (
            <div className={classes.tileComingSoon}>
              {t('common.coming-soon')}
            </div>
          )}
        </div>
      </WithAnimation>

      <WithAnimation
        className={classNames(
          classes.title,
          smallTitleStyle && classes.titleSm,
        )}
        Component={Typography}
        variant="h2"
      >
        {title}
      </WithAnimation>
      <WithAnimation className={classes.text} Component={Typography}>
        {text}
      </WithAnimation>

      {btnUrl && (
        <WithAnimation className={classes.btnWrap}>
          <Button
            className={classes['btn']}
            variant="contained"
            href={btnUrl}
            role="link"
            rel="noopener noreferrer"
            target="_blank"
          >
            {btnText ? btnText : t('common.launch-app')}
          </Button>
        </WithAnimation>
      )}
    </div>
  );
};
