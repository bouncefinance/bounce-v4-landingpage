import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from 'src/modules/theme/mainTheme';

export const useTopBlockStyles = makeStyles<Theme>(theme => ({
  pageRoot: {
    width: '100% !important',
    margin: 0,
    minHeight: '90vh',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    background: `url('/images/tokenAndNftAuction/bg.svg') no-repeat top center / 100% auto`,
  },
  pageContainer: {
    position: 'relative',
    paddingTop: 190,
    width: '100vw !important',
    maxWidth: '1110px !important',
    display: 'flex',
    margin: '0 auto 0',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  title1: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 28,
    color: '#2B51DA',
    textAlign: 'left',
    marginBottom: 16,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  title2: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 58,
    lineHeight: '75px',
    color: '#171717',
    textAlign: 'left',
    marginBottom: 16,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      lineHeight: '41.6px',
      marginBottom: 0,
    },
  },
  text: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '32px',
    color: '#171717',
    textAlign: 'left',
    maxWidth: 970,
    margin: '40px 0 32px',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    },
  },
  btnBox: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: 183,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  leftTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 28,
    marginBottom: 48,
  },
  beginnerRow: {
    position: 'relative',
    marginBottom: '30px',
  },
  beginnerTitle: {
    fontFamily: `'Inter'`,
    fontWeight: 500,
    fontSize: 16,
    color: '#171717',
    marginBottom: 8,
    lineHeight: '24px',
  },
  beginnerTitleIcon: {
    width: 12,
    height: 12,
    marginRight: 12,
  },
  beginnerDesc: {
    fontFamily: `'Inter'`,
    fontSize: 16,
    color: '#171717',
    marginBottom: 8,
    opacity: 0.8,
    lineHeight: '24px',
  },
  beginnerRightImg: {
    height: 613,
  },
  descContent: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  descText: {
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  descImg: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 56,
      marginBottom: 80,
    },
  },
  descAnimationImgBox: {
    position: 'relative',
    width: '100%',
    maxWidth: 300,
    height: 375,
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      marginTop: 56,
      marginBottom: 80,
    },
  },
  bannerImg: {
    width: '100%',
  },
  banner1: {
    position: 'absolute',
    width: 192,
    left: 0,
    top: 70,
    transform:
      'rotateX(-20deg) rotateY(-27deg) rotateZ(-2deg) translate3D(0, 50%, 0)',
    transformOrigin: 'center left',
    transition: '0.3s',
    animationDelay: '0.6s',
    zIndex: 1,
  },
  banner2: {
    position: 'absolute',
    width: 192,
    left: 109,
    top: -20,
    transform:
      'rotateX(-20deg) rotateY(-27deg) rotateZ(-2deg) translate3D(0, 50%, 0)',
    transformOrigin: 'center left',
    transition: '0.6s',
    animationDelay: '1s',
  },
  bannerIcon1: {
    position: 'absolute',
    width: 54,
    left: -12,
    top: 160,
    transform:
      'rotateX(-20deg) rotateY(-27deg) rotateZ(-2deg) translate3D(0, 50%, 0) scale(0.88)',
    transformOrigin: 'center left',
    transition: '1.3s',
    animationDelay: '1.3s',
    zIndex: 1,
    animation: `$startAnimation 2s linear infinite`,
  },
  bannerIcon2: {
    position: 'absolute',
    width: 54,
    left: 237,
    top: 109,
    transform:
      'rotateX(-20deg) rotateY(-27deg) rotateZ(-2deg) translate3D(0, 50%, 0) scale(0.88)',
    transformOrigin: 'center left',
    transition: '1.3s',
    animationDelay: '1.3s',
    animation: `$startAnimation 2s linear infinite`,
  },
  bannerShow: {
    transform:
      'rotateX(-20deg) rotateY(-27deg) rotateZ(-2deg) translate3D(0, 0, 0)',
  },
  timeCount1: {
    position: 'absolute',
    width: 186,
    height: 46,
    left: 108,
    top: 329,
    zIndex: 1,
    lineHeight: '46px',
    background: '#E6E8F1',
    borderRadius: 48,
    color: '#2B51DA',
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 500,
    transition: '2s',
    animationDelay: '2s',
    transform:
      'rotateX(-20deg) rotateY(-27deg) rotateZ(-2deg) scale(0.5) translate3D(0, 50%, 0)',
    transformOrigin: 'center left',
    opacity: 0,
  },
  timeCount2: {
    position: 'absolute',
    width: 186,
    height: 46,
    left: 208,
    top: 236,
    zIndex: 1,
    lineHeight: '46px',
    background: '#E6E8F1',
    borderRadius: 48,
    color: '#2B51DA',
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 500,
    transition: '2s',
    animationDelay: '2s',
    transform:
      'rotateX(-20deg) rotateY(-27deg) rotateZ(-2deg) scale(0.5) translate3D(0, 50%, 0)',
    transformOrigin: 'center left',
    opacity: 0,
  },
  timeCount1show: {
    left: 100,
    top: 329,
    zIndex: 1,
    transform:
      'rotateX(-20deg) rotateY(-27deg) rotateZ(-2deg) scale(0.5)  translate3D(0, 0, 0)',
    opacity: 1,
  },
  timeCount2show: {
    left: 208,
    top: 236,
    transform:
      'rotateX(-20deg) rotateY(-27deg) rotateZ(-2deg) scale(0.5) translate3D(0, 0, 0)',
    opacity: 1,
  },
  '@keyframes startAnimation': {
    '0%': {
      transform: 'rotateX(-20deg) rotateY(-27deg) rotateZ(-2deg) scale(0.88)',
    },
    '50%': {
      transform: 'rotateX(-20deg) rotateY(-27deg) rotateZ(-2deg) scale(1)',
    },
    '100%': {
      transform: 'rotateX(-20deg) rotateY(-27deg) rotateZ(-2deg) scale(0.88)',
    },
  },
}));
