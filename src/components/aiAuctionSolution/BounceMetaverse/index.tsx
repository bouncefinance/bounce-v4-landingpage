import { Container, Typography, Button, Box } from '@material-ui/core';
import { useBounceMetaverseStyles } from './useBounceMetaverseStyles';
import { LogoIcon } from 'src/modules/common/components/Icons/LogoIcon';
import { t, tHTML } from 'src/i18n/intl';
import { useIsMDDown } from '../../../modules/theme';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import classNames from 'classnames';
import { WithAnimation } from 'src/modules/WithAnimation';

export const BounceMetaverse = () => {
  const classes = useBounceMetaverseStyles();
  const isMd = useIsMDDown();
  return (
    <WithScrollFreezing>
      <div
        className={classes.metaverseWrap}
        style={{
          marginTop: isMd ? '0' : '-134px',
        }}
        id="bounce-metaverse"
      >
        <div className={classes.wrap}>
          <video
            muted
            loop
            autoPlay
            playsInline
            id="videoMd"
            className={classNames(classes.video, classes.videoSm)}
          >
            <source src="/video/lab-mobile-bg.mov" type="video/mp4" />
          </video>
          <video
            muted
            loop
            autoPlay
            playsInline
            id="videoMd"
            className={classNames(classes.video, classes.videoLg)}
          >
            <source src="/video/lab-pc-bg.mov" type="video/mp4" />
          </video>
          <Container maxWidth={false} className={classes.container}>
            <div className={classes.sideInfo}>
              <div className={classNames(classes.root)}>
                <WithAnimation className={classes.brand}>
                  <LogoIcon className={classes.brandLogo} />
                  <div className={classes.brandContent}>
                    <span className={classes.brandName}>
                      {t('bounce-metaverse.brand')}
                    </span>
                  </div>
                </WithAnimation>

                <WithAnimation
                  className={classNames(classes.title)}
                  Component={Typography}
                  variant="h2"
                >
                  {tHTML('bounce-metaverse.title')}
                </WithAnimation>
                <WithAnimation className={classes.text} Component={Typography}>
                  {t('bounce-metaverse.text')}
                </WithAnimation>

                <WithAnimation className={classes.btnWrap}>
                  <Button
                    className={classes['btn']}
                    variant="contained"
                    href={'https://metaverse.bounce.finance/'}
                    role="link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t('bounce-metaverse.btnText')}
                  </Button>
                </WithAnimation>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};
