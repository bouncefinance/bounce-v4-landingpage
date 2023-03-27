import React, { useEffect, useRef } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { createEngine } from './createEngine.js';
import { createScene } from './createScene.js';
import { useBounceMetaverseStyles } from './useBounceMetaverseStyles';
import { SideContent } from 'src/modules/common/components/SideContent/SideContent';
import { SideScreen } from 'src/modules/common/components/SideScreen/SideScreen';
import { LogoIcon } from 'src/modules/common/components/Icons/LogoIcon';
import { t, tHTML } from 'src/i18n/intl';
import Footer from 'src/components/common/Footer';
import { WithAnimation } from 'src/modules/WithAnimation';
interface BounceMetaParam {
  onlyAnimation1?: boolean;
}
export const BounceMetaverse = (props: BounceMetaParam) => {
  const { onlyAnimation1 } = props;
  const classes = useBounceMetaverseStyles();
  const canvasRef = useRef(null);
  useEffect(() => {
    const engine = createEngine();
    !onlyAnimation1 && createScene(engine, canvasRef.current);
  }, []);
  return (
    <div>
      {onlyAnimation1 && (
        <div className={classes.metaverseWrap} id="bounce-metaverse">
          <div className={classes.wrap}>
            <Container maxWidth={false} className={classes.container}>
              <Grid container>
                <Grid item xs={12} md={12} lg={6} xl={6}>
                  <div className={classes.sideInfo}>
                    <SideContent
                      BrandLogo={LogoIcon}
                      brandName={t('bounce-metaverse.brand')}
                      title={tHTML('bounce-metaverse.title')}
                      text={t('bounce-metaverse.text')}
                      btnUrl="https://metaverse.bounce.finance/"
                      btnText={t('bounce-metaverse.btnText')}
                    />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={classes.gifWrap}>
            <SideScreen screenPath="/images/bounce-metaverse/bounce-metaverse.gif" />
          </div>
          <img
            className={classes.gifWrapMobile}
            src={'/images/bounce-metaverse/bounce-metaverse.gif'}
            alt=""
          />
        </div>
      )}
      {!onlyAnimation1 && (
        <>
          <div className={classes.metaverseWrap} id="bounce-metaverse">
            <div className={classes.wrap}>
              <Container maxWidth={false} className={classes.container}>
                <Grid container>
                  <Grid item xs={12} md={12} lg={6} xl={6}>
                    <div className={classes.sideInfo}>
                      <SideContent
                        BrandLogo={LogoIcon}
                        brandName={t('bounce-metaverse.brand')}
                        title={tHTML('bounce-metaverse.title')}
                        text={t('bounce-metaverse.text')}
                        btnUrl="https://metaverse.bounce.finance/"
                        btnText={t('bounce-metaverse.btnText')}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
            <div className={classes.gifWrap}>
              <SideScreen screenPath="/images/bounce-metaverse/bounce-metaverse.gif" />
            </div>
            <img
              className={classes.gifWrapMobile}
              src={'/images/bounce-metaverse/bounce-metaverse.gif'}
              alt=""
            />
          </div>
          <div className={classes.metaverseCityWrap}>
            <Container maxWidth={false}>
              <Typography variant="h2">
                {t('bounce-metaverse.metaverse-city')}
              </Typography>
              <div className={classes.cityInfo}>
                {t('bounce-metaverse.metaverse-city-info')}
              </div>
              <canvas
                className={classes.canvas}
                id="renderCanvas"
                ref={canvasRef}
                touch-action="none"
              ></canvas>
            </Container>
          </div>
          <Footer colorTheme="dark" />
        </>
      )}
    </div>
  );
};
