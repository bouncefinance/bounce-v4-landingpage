import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { useInvestmentBannerStyles } from './useInvestmentBannerStyles';

export type IInvestmentBannerProps = {};

const InvestmentBanner: React.FC<IInvestmentBannerProps> = ({ }) => {
  const classes = useInvestmentBannerStyles();

  const cardList = useMemo(() => [
    {
      title: t('investment-page.banner.card1.title'),
      paragraph1: t('investment-page.banner.card1.paragraph1'),
      paragraph2: t('investment-page.banner.card1.paragraph2'),
      className: classes.item1,
    },
    {
      title: t('investment-page.banner.card2.title'),
      paragraph1: t('investment-page.banner.card2.paragraph1'),
      paragraph2: t('investment-page.banner.card2.paragraph2'),
      className: classes.item2,
    },
  ], []);
  
  return (
    <div className={classes.root}>
      <img src='/images/investment/banner/bg.png' alt='bg' className={classes.bg} />
      <Container maxWidth={false} className={classes.container}>
        <WithAnimation
          className={classes.title}
          Component={Typography}
          variant="h4" 
        >
          {t('investment-page.banner.title')}
        </WithAnimation>
        <WithAnimation
          className={classes.text}
          Component={Typography}
          variant="h1" 
        >
          {t('investment-page.banner.text')}
        </WithAnimation>
        <WithAnimation
          className={classes['sign-up-btn-wrap']}
        >
          <Button
            className={classes['sign-up-btn']}
            variant='contained'
            href="https://app.bounce.finance/login"
            role="link"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('investment-page.banner.sign-up-btn')}
          </Button>
        </WithAnimation>
        <Grid 
          container 
          spacing={3}
        >
          {
            cardList.map(v => (
              <WithAnimation
                Component={Grid}
                item
                key={uid(v)}
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
                    className={classes['item-paragraph1']}
                    Component={Typography}
                    variant="body1" 
                  >
                    {v.paragraph1}
                  </WithAnimation>
                  <WithAnimation
                    className={classes['item-paragraph2']}
                    Component={Typography}
                    variant="body1" 
                  >
                    {v.paragraph2}
                  </WithAnimation>
                </Box>
              </WithAnimation>
            ))
          }
          <WithAnimation
            Component={Grid}
            item
            md={12}
            xs={12}
          >
            <Typography className={classes.tips} variant="body2">{t('investment-page.banner.tips1')}</Typography>
            <Typography className={classes.tips} variant="body2">{t('investment-page.banner.tips2')}</Typography>
          </WithAnimation>
        </Grid>
      </Container>
    </div>
  );
}

export default InvestmentBanner;