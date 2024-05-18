import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from 'src/modules/theme/mainTheme';

export const useTopBlockStyles = makeStyles<Theme>(theme => ({
  pageRoot: {
    width: '100% !important',
    margin: 0,
    minHeight: '90vh',
    // paddingBottom: 120,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 10,
    },
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    background: `url('/images/booster/bg.png') no-repeat top center / 100% auto`,
    backgroundSize: '100% 100%',
    [theme.breakpoints.down('md')]: {
      background: `url('/images/tokenAndNftAuction/bg.svg') no-repeat top center / auto 100%`,
    },
  },
  pageContainer: {
    position: 'relative',
    padding: '200px 0px 220px 10vw',
    width: '100vw !important',
    maxWidth: '100% !important',
    display: 'flex',
    margin: 0,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '150px 0px 170px 10vw',
    },
  },
  title1: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 28,
    mx:'225px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
    color: '#2B51DA',
    textAlign: 'left',
    zIndex: 1,
  },
  title2: {
    position: 'relative',
    zIndex:2,
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 58,
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      lineHeight: '41.6px',
      marginBottom: 0,
    },
    lineHeight: '75px',
    color: '#171717',
    textAlign: 'left',
  },
  text: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '32px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
      lineHeight: '22.5px',
    },
    color: '#171717',
    textAlign: 'left',
    maxWidth: 970,
    margin: '40px auto 32px',
    zIndex: 1,
  },
  btnBox: {
    display: 'flex',
    justifyContent: 'left',
    marginTop: '86px',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      marginTop: '50px',
    }
  },
  p2: {
    position: 'absolute',
    top: '50vh',
    right: '0',
    width: '50vw',
    transform: 'translate3D(550px, -55%, 0)',
    opacity: 0,
    [theme.breakpoints.down('sm')]: {
      position: 'static',
      width: '100%',
      top:'75%',
      transform: 'translate3D(40%, -55%, 0)',
      objectFit: 'contain',
      marginTop:'30px',
    },
    transition: 'all 0.6s',
    transitionDelay: '0.3s',
  },
  p2Show: {
    opacity: 1,
    transform: 'translate3D(0, -55%, 0)',
    [theme.breakpoints.down('sm')]: {
      transform: 'translate3D(0, 0, 0)',
    },
  },
  animationImg: {
    width: '100%',
  },
}));
