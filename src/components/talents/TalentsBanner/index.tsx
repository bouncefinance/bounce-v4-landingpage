import { Button, Container, Typography, Box } from '@material-ui/core';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { IBtnListItemProps } from 'src/components/home/TopBlock';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { useTalentsBannerStyles } from './useTalentsBannerStyles';
import { useIsMDDown } from '../../../modules/theme';

export type ITalentsBannerProps = {};

const TalentsBanner: React.FC<ITalentsBannerProps> = ({}) => {
  const classes = useTalentsBannerStyles();
  const isMd = useIsMDDown();
  const btnList: IBtnListItemProps[] = useMemo(
    () => [
      {
        className: 'sign-up-btn',
        variant: 'contained',
        href: 'https://app.bounce.finance/login',
        text: t('jobs-talents-page.banner.sign-up-btn'),
      },
      // {
      //   className: 'post-job-btn',
      //   variant: 'outlined',
      //   href: 'https://www.baidu.com',
      //   text: t('jobs-talents-page.banner.post-job-btn'),
      // },
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
        <Box className={classes.containerBox}>
          <Box className={classes.leftContent}>
            <WithAnimation
              className={classes.title}
              Component={Typography}
              variant="h4"
            >
              {t('jobs-talents-page.banner.title')}
            </WithAnimation>
            {isMd ? (
              <WithAnimation
                className={classes.description}
                Component={Typography}
                variant="h1"
              >
                {t('jobs-talents-page.banner.description')}
              </WithAnimation>
            ) : (
              <>
                <WithAnimation
                  className={classes.description1}
                  Component={Typography}
                  variant="h1"
                >
                  {t('jobs-talents-page.banner.description1')}
                </WithAnimation>
                <WithAnimation
                  className={classes.description2}
                  Component={Typography}
                  variant="h1"
                >
                  {t('jobs-talents-page.banner.description2')}
                </WithAnimation>
              </>
            )}
            <WithAnimation
              className={classes.detail}
              Component={Typography}
              variant="body1"
            >
              {t('jobs-talents-page.banner.detail')}
            </WithAnimation>
            <WithAnimation>
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
          </Box>
          <WithAnimation
            className={classes.rightContent}
            defaultAnimation={false}
            addClassInView={classes.rightContentInView}
          >
            <img
              src="/images/jobs/p4.png"
              className={classes.card1}
              alt="cup"
            />
            <img
              src="/images/jobs/p5.png"
              className={classes.card2}
              alt="cup"
            />
            <img
              src="/images/jobs/p6.png"
              className={classes.card3}
              alt="cup"
            />
          </WithAnimation>
        </Box>
        <WithAnimation
          className={classes.bottomCardBlock}
          defaultAnimation={false}
          addClassInView={classes.rightContentInView}
        >
          <img
            src="/images/jobs/talents/12.png"
            className={classes.card1Mobile}
            alt="cup"
          />
          <img
            src="/images/jobs/talents/13.png"
            className={classes.card2Mobile}
            alt="cup"
          />
          <img
            src="/images/jobs/talents/14.png"
            className={classes.card3Mobile}
            alt="cup"
          />
        </WithAnimation>
        <Box className={classes.bottomContent}>
          <WithAnimation
            className={classes.recentlyPostedJobs}
            Component={Typography}
            variant="h4"
          >
            {t("extra.recently-posted-jobs")}
          </WithAnimation>
          <WithAnimation className={classes.recentlyPostedImg}>
            <img src="/images/jobs/p7.png" alt="cup" />
          </WithAnimation>
          <WithAnimation className={classes.recentlyPostedImgMobile}>
            <img src="/images/jobs/p8.png" alt="cup" />
          </WithAnimation>
        </Box>
      </Container>
    </div>
  );
};

export default TalentsBanner;
