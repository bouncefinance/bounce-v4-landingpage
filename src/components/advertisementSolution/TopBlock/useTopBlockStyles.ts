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
    [theme.breakpoints.down('md')]: {
      background: `url('/images/tokenAndNftAuction/bg.svg') no-repeat top center / auto 100%`,
    },
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
  contentBox: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  animationBox: {
    position: 'relative',
    width: '100%',
    maxWidth: 700,
    margin: '0 auto',
    paddingTop: 30,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      paddingBottom: 80,
      paddingTop: 90,
    },
  },
  banner: {
    display: 'block',
    width: 462,
    margin: '0 auto -10px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 277,
    },
  },
  smallStar: {
    position: 'absolute',
    width: 52,
    bottom: 126,
    left: 0,
    animation: `$startAnimation 2s linear infinite`,
    [theme.breakpoints.down('sm')]: {
      width: 24,
      bottom: 135,
      left: 34,
    },
  },
  bigStar: {
    position: 'absolute',
    width: 52,
    top: 0,
    right: 50,
    animation: `$startAnimation 2s linear infinite`,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 31,
      top: 35,
      right: 34,
    },
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
