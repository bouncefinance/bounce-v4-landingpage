import React from 'react';
import { useCompanyListStyles } from './useCompanyListStyles';
import { Button, Container, Typography, Box } from '@material-ui/core';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import TableList from './components/TableList';

export const CompanyList = () => {
  const classes = useCompanyListStyles();
  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <div className={classes.wrap}>
          <Container maxWidth={false} className={classes.container}>
            <WithAnimation
              className={classes.title}
              Component={Typography}
              variant="h2"
            >
              {t('home-page.companyList.title')}
            </WithAnimation>
            <WithAnimation>
              <Box
                style={{
                  width: '100%',
                  maxWidth: '100vw',
                  overflowX: 'auto',
                }}
              >
                <TableList />
              </Box>
            </WithAnimation>
            <WithAnimation>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  className={classes.moreBtn}
                  variant={'outlined'}
                  href={'https://app.bounce.finance/company'}
                  role="link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t('home-page.companyList.more')}
                </Button>
              </Box>
            </WithAnimation>
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};
