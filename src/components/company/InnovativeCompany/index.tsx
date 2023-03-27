import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import Web3Company from '../Web3Company';
import { useInnovativeCompanyStyles } from './useInnovativeCompanyStyles';

export type IInnovativeCompanyProps = {};

const InnovativeCompany: React.FC<IInnovativeCompanyProps> = ({}) => {
  const classes = useInnovativeCompanyStyles();
  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <div className={classes.wrap}></div>
        <Container maxWidth={false} className={classes.container}>
          <WithAnimation
            className={classes.title1}
            Component={Typography}
            variant="h2"
          >
            {t('company-page.innovative-company.title1')}
          </WithAnimation>
          <WithAnimation className={classes.comapnyList}>
            <Web3Company />
          </WithAnimation>
          <WithAnimation
            className={classes.title2}
            Component={Typography}
            variant="h2"
          >
            {t('company-page.innovative-company.title2')}
          </WithAnimation>
          <WithAnimation
            className={classes.title3}
            Component={Typography}
            variant="h2"
          >
            Bounce is driving innovation at scale: by giving investors and
            startups the tools and infrastructure they need, companies can focus
            on what they do best.
          </WithAnimation>
          <WithAnimation>
            <img
              className={classes.process}
              src="/images/company/innovative-company/process.png"
              alt="process"
            />
          </WithAnimation>
          <WithAnimation>
            <img
              className={classes.processMobile}
              src="/images/company/p2.png"
              alt="process"
            />
          </WithAnimation>
          <WithAnimation>
            <img
              className={classes.processMobile}
              src="/images/company/p3.png"
              alt="process"
            />
          </WithAnimation>
          <WithAnimation>
            <img
              className={classes.processMobile}
              src="/images/company/p4.png"
              alt="process"
            />
          </WithAnimation>
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default InnovativeCompany;
