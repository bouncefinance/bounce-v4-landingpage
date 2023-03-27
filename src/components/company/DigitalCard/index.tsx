// import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { SideScreen } from 'src/modules/common/components/SideScreen';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import JobsMarket2 from '../JobsMarket2';
import PeoplePromotionList from '../PeoplePromotionList';
import { useDigitalCardStyles } from './useDigitalCardStyles';
import Footer from 'src/components/common/Footer';

export type IDigitalCardProps = {};

const DigitalCard: React.FC<IDigitalCardProps> = ({}) => {
  const classes = useDigitalCardStyles();

  const list = useMemo(
    () => [
      {
        text: t('company-page.digital-card.item1'),
      },
      {
        text: t('company-page.digital-card.item2'),
      },
      {
        text: t('company-page.digital-card.item3'),
      },
      {
        text: t('company-page.digital-card.item4'),
      },
    ],
    [],
  );

  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <div className={classes.wrap}></div>
        <Container maxWidth={false}>
          <WithAnimation
            className={classes.title}
            Component={Typography}
            variant="h2"
          >
            {t('company-page.digital-card.title')}
          </WithAnimation>
          <WithAnimation
            className={classes.description}
            Component={Typography}
            variant="body1"
          >
            {t('company-page.digital-card.description')}
          </WithAnimation>
          <Grid container spacing={7}>
            <Grid item xs={12} lg={6}>
              <SideScreen screenPath="/images/company/p5.png" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box className={classes.textWrap}>
                {list.map(v => (
                  <WithAnimation
                    className={classes.item}
                    Component={Typography}
                    variant="h6"
                    key={uid(v)}
                  >
                    {v.text}
                  </WithAnimation>
                ))}
                {/* <WithAnimation>
                  <Button
                    className={classes['get-card-btn']}
                    variant='contained'
                    href="http://www.baidu.com"
                    role="link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t('company-page.digital-card.get-card-btn')}
                  </Button>
                </WithAnimation> */}
              </Box>
            </Grid>
          </Grid>
          <Box className={classes['promotion-wrapper']}>
            <WithAnimation
              className={classes['promotion-title']}
              Component={Typography}
              variant="h4"
            >
              {t('company-page.digital-card.people-promotion')}
            </WithAnimation>
            <PeoplePromotionList />
          </Box>
          <JobsMarket2 type="TOOLBOX" />
          <Footer />
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default DigitalCard;
