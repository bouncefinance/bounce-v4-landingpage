import { makeStyles, Theme } from '@material-ui/core';

export const useAdsTerminalStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    backgroundColor: '#171717',
    minHeight: '100vh',
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -54,
      width: '100%',
      background: '#171717',
      height: 60,
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
  },
  container: {
    position: 'relative',
    width: '100% !important',
    maxWidth: '1110px !important',
    paddingTop: 93,
    paddingBottom: 120,
    display: 'flex',
    flexFlow: 'column nowrap',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
    },
  },
  logo: {
    display: 'block',
    width: 40,
    height: 60,
    margin: '0 auto',
    marginBottom: 32,
  },
  title: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
  },
  iconBlowTitle: {
    display: 'block',
    width: 10,
    height: 76,
    margin: '0 auto 21px',
  },
  animationBox: {
    width: '100%',
    maxWidth: '1110px',
    minHeight: 416,
    martin: '0 auto',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  animate1: {
    width: 32,
    height: 241,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    transitionDelay: '0.3s',
  },
  p2: {
    width: 32,
  },
  animate2: {
    width: 142,
    height: '450px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    transitionDelay: '0.6s',
  },
  p3: {
    width: 92,
  },
  p4: {
    width: 92,
  },
  p5: {
    width: '100%',
  },
  p6: {
    width: '100%',
  },
  animate3: {
    flex: 733,
    height: 450,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    transitionDelay: '0.9s',
  },
  animate4: {
    width: 87,
    height: 450,
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: '68px 0 68px 21px',
    justifyContent: 'space-between',
    alignItems: 'center',
    transitionDelay: '1s',
  },
  animate5: {
    width: 119,
    height: 450,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    transitionDelay: '1.1s',
  },
  p8: {
    width: '100%',
    transform: 'scale(1.5)'
  },
  p9: {
    width: '100%',
  },
  mobileImg: {
    height: 372,
    width: 'auto',
  },
}));
