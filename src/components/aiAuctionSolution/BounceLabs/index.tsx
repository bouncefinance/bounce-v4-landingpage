import { Container, Typography, Grid } from '@material-ui/core';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useBounceLabsStyles } from './useBounceLabsStyles';
import Footer from 'src/components/common/Footer';

export type IBounceLabsProps = {};

const BounceLabs: React.FC<IBounceLabsProps> = ({}) => {
  const classes = useBounceLabsStyles();

  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <div className={classes.wrap}></div>
        <Container maxWidth={false} className={classes.container}>
          <WithAnimation>
            <Typography className={classes.title}>
              The Integration of Bounce's
            </Typography>
          </WithAnimation>
          <WithAnimation>
            <Typography className={classes.title}>
              Decentralized Auction
            </Typography>
          </WithAnimation>
          <WithAnimation>
            <Typography className={classes.title}>Technology and AI</Typography>
          </WithAnimation>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <WithAnimation></WithAnimation>
            </Grid>
          </Grid>
          <Footer colorTheme="dark" noBg={true} />
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default BounceLabs;
