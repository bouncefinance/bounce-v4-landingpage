import { Container, Typography, Box } from '@material-ui/core';
import React from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useJobToolsStyles } from './useJobToolsStyles';
import TableList from './components/TableList';

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

const BestTalentMatched: React.FC = () => {
  const classes = useJobToolsStyles();
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
              {t('extra.best-talent')}
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
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};

export default BestTalentMatched;
