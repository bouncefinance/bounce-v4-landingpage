import { Container, Typography, Box } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useBounceNFTBlockstyles } from './useBounceNFTBlockstyles';
import Footer from 'src/components/common/Footer';

const BounceNFTBlock: React.FC = () => {
  const classes = useBounceNFTBlockstyles();
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
              {t('bounce-NFT.title')}
            </WithAnimation>
            <WithAnimation
              Component={Typography}
              variant="h2"
              className={classNames(classes.title, classes.smallTitle)}
            >
              {t('bounce-NFT.smallTitle')}
            </WithAnimation>
            <WithAnimation
              Component={Typography}
              variant="body1"
              className={classes.subtitle}
            >
              {t('bounce-NFT.subtitle')}
            </WithAnimation>
            <WithAnimation
              className={classes.cardBox}
              defaultAnimation={false}
              addClassInView={classes.cardBoxInView}
            >
              <Box className={classes.cardItem}>
                <img
                  src="images/investment/p3-bg.png"
                  className={classes.cardBoxBg}
                  alt="cup"
                />
                <img
                  src="images/investment/p3-1.png"
                  className={classes.card1}
                  alt="cup"
                />
                <img
                  src="images/investment/p3-2.png"
                  className={classes.card2}
                  alt="cup"
                />
                <img
                  src="images/investment/p3-3.png"
                  className={classes.card3}
                  alt="cup"
                />
                <img
                  src="images/investment/p3-4.png"
                  className={classes.card4}
                  alt="cup"
                />
                <WithAnimation
                  Component={Typography}
                  variant="h2"
                  className={classes.cardText}
                >
                  NFT Launchpad
                </WithAnimation>
              </Box>
            </WithAnimation>
          </Container>
        </div>
        <Footer />
      </div>
    </WithScrollFreezing>
  );
};

export default BounceNFTBlock;
