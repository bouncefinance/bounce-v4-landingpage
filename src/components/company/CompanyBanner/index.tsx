import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import JobsMarket from '../JobsMarket';
import { useCompanyBannerStyles } from './useCompanyBannerStyles';
import { useIsMDDown } from '../../../modules/theme';

export type ICompanyBannerProps = {};

const CompanyBanner: React.FC<ICompanyBannerProps> = ({}) => {
  const classes = useCompanyBannerStyles();
  const isMd = useIsMDDown();
  const cardList = useMemo(
    () => [
      {
        title: t('company-page.banner.card1.title'),
        paragraph: t('company-page.banner.card1.paragraph'),
        className: classes.item1,
      },
      {
        title: t('company-page.banner.card2.title'),
        paragraph: t('company-page.banner.card2.paragraph'),
        className: classes.item2,
      },
      {
        title: t('company-page.banner.card3.title'),
        paragraph: t('company-page.banner.card3.paragraph'),
        className: classes.item3,
      },
    ],
    [],
  );

  return (
    <div className={classes.root}>
      <img
        src="/images/investment/banner/bg.png"
        alt="bg"
        className={classes.bg}
      />
      <Container maxWidth={false} className={classes.container}>
        <WithAnimation
          className={classes.title}
          Component={Typography}
          variant="h4"
        >
          {t('company-page.banner.title')}
        </WithAnimation>
        {isMd && (
          <WithAnimation
            className={classes.description}
            Component={Typography}
            variant="h1"
          >
            {t('company-page.banner.description')}
          </WithAnimation>
        )}
        {!isMd && (
          <>
            <WithAnimation
              className={classes.description1}
              Component={Typography}
              variant="h1"
            >
              {t('company-page.banner.description1')}
            </WithAnimation>
            <WithAnimation
              className={classes.description2}
              Component={Typography}
              variant="h1"
            >
              {t('company-page.banner.description2')}
            </WithAnimation>
          </>
        )}
        <WithAnimation
          className={classes.detail}
          Component={Typography}
          variant="body1"
        >
          {t('company-page.banner.detail')}
        </WithAnimation>
        <WithAnimation className={classes['join-btn-wrap']}>
          <Button
            className={classes['join-btn']}
            variant="contained"
            href="https://app.bounce.finance/login"
            role="link"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('company-page.banner.join-btn')}
          </Button>
        </WithAnimation>
        <Grid container spacing={2}>
          {cardList.map(v => (
            <WithAnimation
              Component={Grid}
              item
              key={uid(v)}
              lg={4}
              md={6}
              xs={12}
            >
              <Box className={classNames(classes.item, v.className)}>
                <WithAnimation
                  className={classes['item-title']}
                  Component={Typography}
                  variant="h4"
                >
                  {v.title}
                </WithAnimation>
                <WithAnimation
                  className={classes['item-paragraph']}
                  Component={Typography}
                  variant="body1"
                >
                  {v.paragraph}
                </WithAnimation>
              </Box>
            </WithAnimation>
          ))}
        </Grid>
        <JobsMarket />
      </Container>
    </div>
  );
};

export default CompanyBanner;
