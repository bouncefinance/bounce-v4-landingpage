import { Container, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { usePartnersStyles } from './usePartnersStyles';

interface IconsAnimationProps {
    iconsList: string[];
    direction: 'left' | 'right';
}

const IconsAnimation: React.FC<IconsAnimationProps> = ({iconsList, direction}) => {
  const classes = usePartnersStyles();

  return (
    <Container maxWidth="xl" className={classes.iconsContainer}>
      <div className={classNames(classes.iconsBox, direction === 'right' ? classes.toRight : classes.toLeft)}>
        {iconsList.map((item, index) => {
          return (
            <div key={uid(index)} className={classes.iconItem}>
              <div className={classes.icon}>
                <img src={item} />
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className={classNames(classes.iconsBox, classes.secondary)}>
        {secList.map(item => {
          return (
            <div key={uid(item)} className={classes.iconItem}>
              <div className={classes.icon}>
                <img src={item} />
              </div>
            </div>
          );
        })}
      </div> */}
    </Container>
  );
};

const Partners: React.FC = () => {
  const classes = usePartnersStyles();

  const leftIconsList = [
    '/images/home/partners/icon1.png',
    '/images/home/partners/icon2.svg',
    '/images/home/partners/icon3.png',
    '/images/home/partners/icon4.svg',
    '/images/home/partners/icon5.png',
    '/images/home/partners/icon6.png',
    '/images/home/partners/icon7.png',


    '/images/home/partners/icon1.png',
    '/images/home/partners/icon2.svg',
    '/images/home/partners/icon3.png',
    '/images/home/partners/icon4.svg',
    '/images/home/partners/icon5.png',
    '/images/home/partners/icon6.png',
    '/images/home/partners/icon7.png',
  ];

  const rightIconsList = [
    '/images/home/partners/icon8.png',
    '/images/home/partners/icon9.png',
    '/images/home/partners/icon10.png',
    '/images/home/partners/icon11.svg',
    '/images/home/partners/icon12.svg',
    '/images/home/partners/icon13.svg',
    '/images/home/partners/icon14.svg',


    '/images/home/partners/icon8.png',
    '/images/home/partners/icon9.png',
    '/images/home/partners/icon10.png',
    '/images/home/partners/icon11.svg',
    '/images/home/partners/icon12.svg',
    '/images/home/partners/icon13.svg',
    '/images/home/partners/icon14.svg',
  ];
  return (
    <div>
      <div className={classes.title}>
        <WithAnimation Component={Typography} variant="h3">
          {t('partners.title')}
        </WithAnimation>
      </div>
      <IconsAnimation iconsList={leftIconsList} direction="left" />
      <IconsAnimation iconsList={rightIconsList} direction="right" />
    </div>
  );
};

export default Partners;
