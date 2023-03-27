import { Button, Container, Typography, Box } from '@material-ui/core';
import React, { useMemo } from 'react';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { useJobsMarketStyles } from './useJobsMarketStyles';

export type IJobsMarketProps = {
  type?: string;
};

const JobsMarket: React.FC<IJobsMarketProps> = ({ type = 'JOBS' }) => {
  const classes = useJobsMarketStyles();

  const title = useMemo(
    () =>
      ['TOOLBOX'].includes(type)
        ? t('company-page.digital-card.toolbox.title')
        : t('company-page.banner.jobs-market.title'),
    [],
  );

  const description = useMemo(
    () =>
      ['TOOLBOX'].includes(type)
        ? t('company-page.digital-card.toolbox.description')
        : t('company-page.banner.jobs-market.description'),
    [],
  );

  const btnInfo = useMemo(
    () =>
      ['TOOLBOX'].includes(type)
        ? {
            text: t('company-page.digital-card.toolbox.create-btn'),
            href: 'https://app.bounce.finance/market',
          }
        : {
            text: t('company-page.banner.jobs-market.post-job-btn'),
            href: 'https://app.bounce.finance/market',
          },
    [],
  );
  const imgInfo = useMemo(
    () =>
      ['TOOLBOX'].includes(type)
        ? {
            img: '/images/company/p6.png',
          }
        : {
          img: '/images/company/p1.png',
          },
    [],
  );
  return (
    <WithAnimation className={classes.root}>
      <Container maxWidth={false} className={classes.container}>
        <Box className={classes.jobsMarketLeft}>
          <WithAnimation
            className={classes.title}
            Component={Typography}
            variant="h4"
          >
            {title}
          </WithAnimation>
          <WithAnimation
            className={classes.description}
            Component={Typography}
            variant="body1"
          >
            {description}
          </WithAnimation>
          <WithAnimation>
            <Button
              className={classes['btn']}
              variant="contained"
              href={btnInfo.href}
              role="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {btnInfo.text}
            </Button>
          </WithAnimation>
        </Box>
        <WithAnimation className={classes.jobsMarketRight}>
          <img src={imgInfo.img} alt="" />
        </WithAnimation>
        <WithAnimation className={classes.jobsMarketBottom}>
          <img src={imgInfo.img} alt="" />
        </WithAnimation>
      </Container>
    </WithAnimation>
  );
};

export default JobsMarket;
