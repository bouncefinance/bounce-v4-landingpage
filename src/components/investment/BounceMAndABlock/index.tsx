import { Container, Grid, Typography, Box } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useBounceMAndABlockStyles } from './useBounceMAndABlockStyles';

const FeatureItems: React.FC = () => {
  const classes = useBounceMAndABlockStyles();
  const featureList = [
    {
      title: 'bounce-M&A.featureList.title1',
      info: 'bounce-M&A.featureList.info1',
    },
    {
      title: 'bounce-M&A.featureList.title2',
      info: 'bounce-M&A.featureList.info2',
    },
    {
      title: 'bounce-M&A.featureList.title3',
      info: 'bounce-M&A.featureList.info3',
    },
    {
      title: 'bounce-M&A.featureList.title4',
      info: 'bounce-M&A.featureList.info4',
    },
  ];

  return (
    <div>
      <WithAnimation
        Component={Typography}
        variant="h4"
        className={classNames(classes.mergeProcess, classes.feature)}
      >
        {t('bounce-M&A.features')}
      </WithAnimation>
      <Grid container spacing={2}>
        {featureList?.map(item => {
          return (
            <Grid item xs={12} lg={6} key={uid(item)}>
              <div className={classes.featureBox}>
                <WithAnimation
                  Component={Typography}
                  variant="h4"
                  className={classes.featureTitle}
                >
                  {t(item.title)}
                </WithAnimation>
                <WithAnimation
                  Component={Typography}
                  variant="body2"
                  className={classes.featureInfo}
                >
                  {t(item.info)}
                </WithAnimation>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const MergeProcess: React.FC = () => {
  const classes = useBounceMAndABlockStyles();
  return (
    <div>
      <WithAnimation
        Component={Typography}
        variant="h4"
        className={classes.mergeProcess}
      >
        {t('bounce-M&A.mergeProcess')}
      </WithAnimation>
      <div className={classes.processBox}>
        <WithAnimation
          Component={Typography}
          variant="h5"
          className={classes.btnBox}
        >
          {t('bounce-M&A.input')}
        </WithAnimation>
        <WithAnimation>
          <Box className={classes.arrow1}>
            <img src="/images/home/bounce-labs/arrow.png" />
          </Box>
        </WithAnimation>
        <WithAnimation>
          <Box className={classes.arrow3}>
            <img src="/images/home/bounce-labs/arrow.png" />
          </Box>
        </WithAnimation>
        <WithAnimation>
          <img
            src="images/investment/m&a/mergeCup.png"
            className={classes.centerCase}
            alt="cup"
          />
        </WithAnimation>
        <WithAnimation>
          <img
            src="images/investment/m&a/mergeCupMobile.png"
            className={classes.centerCaseMobile}
            alt="cup"
          />
        </WithAnimation>
        <WithAnimation>
          <Box className={classes.arrow2}>
            <img src="/images/home/bounce-labs/arrow.png" />
          </Box>
        </WithAnimation>
        <WithAnimation>
          <Box className={classes.arrow3}>
            <img src="/images/home/bounce-labs/arrow.png" />
          </Box>
        </WithAnimation>
        <WithAnimation
          Component={Typography}
          variant="h5"
          className={classes.btnBox}
        >
          {t('bounce-M&A.output')}
        </WithAnimation>
      </div>
    </div>
  );
};

const BounceMAndABlock: React.FC = () => {
  const classes = useBounceMAndABlockStyles();
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
              {t('bounce-M&A.title')}
            </WithAnimation>
            {/* <WithAnimation
              Component={Typography}
              variant="h2"
              className={classNames(classes.title, classes.smallTitle)}
            >
              {t('bounce-M&A.smallTitle')}
            </WithAnimation> */}
            <WithAnimation
              Component={Typography}
              variant="body1"
              className={classes.subtitle}
            >
              {t('bounce-M&A.subtitle')}
            </WithAnimation>
            <MergeProcess />
            <FeatureItems />
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};

export default BounceMAndABlock;
