import { Container, Typography, Button, Box } from '@material-ui/core';
import { useBounceMetaverseStyles } from './useBounceMetaverseStyles';
import { LogoIcon } from 'src/modules/common/components/Icons/LogoIcon';
import { t, tHTML } from 'src/i18n/intl';
import { useIsMDDown } from '../../../modules/theme';
import classNames from 'classnames';
import { WithAnimation } from 'src/modules/WithAnimation';

export const BounceMetaverse = () => {
  const classes = useBounceMetaverseStyles();
  const isMd = useIsMDDown();
  return (
    <div
      className={classes.metaverseWrap}
      id="bounce-metaverse"
    >
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
        width="100%"
        height="100%"
        className={classNames(classes.video, classes.videoLg)}
      >
        <source src="/video/lab-pc-bg.mov" type="video/mp4" />
      </video>
      <Box className={classes.shadow}></Box>
      <Container maxWidth={false} className={classes.container}>
        <div className={classes.sideInfo}>
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
              href={'https://app.bounce.finance/'}
              role="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('bounce-metaverse.btnText')}
            </Button>
          </WithAnimation>
        </div>
      </Container>
    </div>
  );
};
