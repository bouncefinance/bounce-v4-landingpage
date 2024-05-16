import { makeStyles, Theme } from '@material-ui/core';

export const useTypesOfAuctionBounceStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -54,
      width: '100%',
      background: '#ffffff',
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
    paddingTop: 40,
    paddingBottom: 120,
    display: 'flex',
    flexFlow: 'column nowrap',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
      paddingBottom: 100,
    },
  },
  title: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 48,
    color: '#232323',
    textAlign: 'center',
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      marginBottom: 18,
    },
    
  },
  title1: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 24,
    color: '#232323',
    textAlign: 'center',
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      marginBottom: 30,
    },
    
  },
  p2: {
    width: '100%',
    transform: 'translate3D(550px, 10%, 0)',
    opacity: 0,
    [theme.breakpoints.down('sm')]: {
      transform: 'translate3D(0, 10%, 0)',
    },
    transition: 'all 0.6s',
    transitionDelay: '0.3s',
  },
  p2Show: {
    opacity: 1,
    transform: 'translate3D(0, 0%, 0)',
    [theme.breakpoints.down('sm')]: {
      transform: 'translate3D(0, 0, 0)',
    },
  },
  animationImg: {
    width: '100%',
  },
  
}));
