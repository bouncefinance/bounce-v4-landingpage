import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { useTokenBannerStyles } from './useTokenBannerStyles';
export type ITokenBannerProps = {};

const TokenBanner: React.FC<ITokenBannerProps> = ({}) => {
  const classes = useTokenBannerStyles();

  const cardList = useMemo(
    () => [
      {
        title: t('tools-token-page.banner.card1.title'),
        paragraph: t('tools-token-page.banner.card1.paragraph'),
        className: classes.item1,
      },
      {
        title: t('tools-token-page.banner.card2.title'),
        paragraph: t('tools-token-page.banner.card2.paragraph'),
        className: classes.item2,
      },
      {
        title: t('tools-token-page.banner.card3.title'),
        paragraph: t('tools-token-page.banner.card3.paragraph'),
        className: classes.item3,
      },
      {
        title: t('tools-token-page.banner.card4.title'),
        paragraph: t('tools-token-page.banner.card4.paragraph'),
        className: classes.item4,
      },
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
        <Box className={classes.contentBlcok}>
          <Box className={classes.leftContent}>
            <WithAnimation
              className={classes.title}
              Component={Typography}
              variant="h1"
            >
              {t('tools-token-page.banner.title')}
            </WithAnimation>
            <WithAnimation
              className={classNames(classes.title, classes.subtitle)}
              Component={Typography}
              variant="h1"
            >
              {t('tools-token-page.banner.sub-title')}
            </WithAnimation>
            <WithAnimation
              className={classes.description}
              Component={Typography}
              variant="body1"
            >
              {t('tools-token-page.banner.description')}
            </WithAnimation>
            <WithAnimation>
              <Button
                className={classes['launch-btn']}
                variant="contained"
                href="https://app.bounce.finance"
                role="link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t('tools-token-page.banner.launch-btn')}
              </Button>
            </WithAnimation>
            <WithAnimation>
            <img
              src={'/images/tools/p1.svg'}
              alt="bg"
              className={classes.bannerMobile}
            />
          </WithAnimation>
          </Box>
          <WithAnimation>
            <img
              src={'/images/tools/p1.svg'}
              alt="bg"
              className={classes.banner}
            />
          </WithAnimation>
        </Box>

        <Grid container spacing={2}>
          {cardList.map(v => (
            <WithAnimation
              Component={Grid}
              item
              key={uid(v)}
              lg={6}
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
                  className={classes['item-paragraph']}
                  Component={Typography}
                  variant="body1"
                >
                  {v.paragraph}
                </WithAnimation>
              </Box>
            </WithAnimation>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default TokenBanner;
