import { Button, Container, Typography, Box } from '@material-ui/core';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { IBtnListItemProps } from 'src/components/home/TopBlock';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { useEmployersBannerStyles } from './useEmployersBannerStyles';

export type IEmployersBannerProps = {};

const EmployersBanner: React.FC<IEmployersBannerProps> = ({}) => {
  const classes = useEmployersBannerStyles();

  const btnList: IBtnListItemProps[] = useMemo(
    () => [
      {
        className: 'sign-up-btn',
        variant: 'contained',
        href: 'https://app.bounce.finance/login',
        text: t('jobs-employers-page.banner.sign-up-btn'),
      },
      // {
      //   className: 'post-job-btn',
      //   variant: 'outlined',
      //   href: 'https://www.baidu.com',
      //   text: t('jobs-employers-page.banner.post-job-btn'),
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
        <Box className={classes.leftContent}>
          <WithAnimation
            className={classes.title}
            Component={Typography}
            variant="h4"
          >
            {t('jobs-employers-page.banner.title')}
          </WithAnimation>
          <WithAnimation
            className={classes.description}
            Component={Typography}
            variant="h1"
          >
            {t('jobs-employers-page.banner.description')}
          </WithAnimation>
          <WithAnimation
            className={classes.detail}
            Component={Typography}
            variant="body1"
          >
            {t('jobs-employers-page.banner.detail')}
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
          <WithAnimation>
            <img
              src="/images/jobs/p2.png"
              alt="bg"
              className={classes.bannerMobile}
            />
          </WithAnimation>
        </Box>
        <WithAnimation>
          <img
            src="/images/jobs/banner.png"
            alt="bg"
            className={classes.banner}
          />
        </WithAnimation>
      </Container>
    </div>
  );
};

export default EmployersBanner;
