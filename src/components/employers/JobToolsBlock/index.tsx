import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { SideScreen } from 'src/modules/common/components/SideScreen';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useJobToolsStyles } from './useJobToolsStyles';
import { useIsMDDown } from '../../../modules/theme';
import Footer from 'src/components/common/Footer';

export const PersonList: React.FC = () => {
  const classes = useJobToolsStyles();
  return (
    <ul className={classes.personList}>
      {[1, 2, 3, 4, 5].map(item => {
        return (
          <li key={uid(item)}>
            <div className={classes.point}></div>
            <div>
              <b>{t(`job-tools.person-list.title${item}`)}</b>
              {t(`job-tools.person-list.info${item}`)}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const JobToolsBlock: React.FC = () => {
  const classes = useJobToolsStyles();
  const isMd = useIsMDDown();
  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <div className={classes.wrap}>
          <Container maxWidth="xl">
            <WithAnimation
              Component={Typography}
              variant="h2"
              className={classes.title}
            >
              {t('job-tools.title')}
            </WithAnimation>
            <WithAnimation
              Component={Typography}
              variant="body1"
              className={classes.subtitle}
            >
              {t('job-tools.subtitle')}
            </WithAnimation>
            <Grid
              container
              spacing={7}
              style={{
                marginBottom: '90px',
              }}
            >
              <Grid item xs={12} lg={6}>
                <PersonList />
              </Grid>
              <Grid item xs={12} lg={6}>
                {isMd ? (
                  <WithAnimation>
                    <img
                      style={{
                        width: '100%',
                      }}
                      src={'/images/jobs/p3.png'}
                      alt=""
                    />
                  </WithAnimation>
                ) : (
                  <SideScreen screenPath={'/images/jobs/p1.png'} />
                )}
              </Grid>
            </Grid>
            <Footer colorTheme={'dark'} />
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};

export default JobToolsBlock;
