import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useTopStackStyles } from './useTopStackStyles';

export type ITopStackProps = {};

const TopStack: React.FC<ITopStackProps> = ({}) => {
  const classes = useTopStackStyles();

  const list = useMemo(
    () => [
      {
        title: t('home-page.top-stack.list.item1-title'),
        text: t('home-page.top-stack.list.item1-text'),
      },
      {
        title: t('home-page.top-stack.list.item2-title'),
        text: t('home-page.top-stack.list.item2-text'),
      },
      {
        title: t('home-page.top-stack.list.item3-title'),
        text: [
          t('home-page.top-stack.list.item3-text1'),
          t('home-page.top-stack.list.item3-text2'),
        ],
      },
    ],
    [],
  );

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
              {t('home-page.top-stack.title')}
            </WithAnimation>
            <Grid container spacing={2}>
              {list.map((v, index) => (
                <WithAnimation
                  Component={Grid}
                  item
                  key={`topstack` + index}
                  xl={4}
                  lg={6}
                  md={6}
                  sm={12}
                >
                  <Box className={classes.item}>
                    <Typography className={classes['item-title']}>
                      {v.title}
                    </Typography>
                    {Array.isArray(v.text) &&
                      v.text.length &&
                      v.text.map((item, k) => {
                        return (
                          <Typography
                            variant="body1"
                            key={k}
                            className={classes['item-text']}
                          >
                            {item}
                          </Typography>
                        );
                      })}
                    {!Array.isArray(v.text) && (
                      <Typography
                        variant="body1"
                        className={classes['item-text']}
                      >
                        {v.text}
                      </Typography>
                    )}
                  </Box>
                </WithAnimation>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};

export default TopStack;
