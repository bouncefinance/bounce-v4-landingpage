import { makeStyles, Theme } from '@material-ui/core';

export const useMonetBlockStyles = makeStyles<Theme>(theme => ({
  root: {
    width: '100%',
    height: 'calc(100vh + 95px + 230px)',
    position: 'relative',
    paddingTop: 95,
    marginBottom: -230,
    [theme.breakpoints.down('sm')]: {
      height: 579,
      paddingTop: 88,
      marginBottom: -42,
    },
  },
  bg: {
    width: '100%',
    height: '100%',
    background: `url('/images/home/monet/pcBanner.png') lightgray 50% / cover no-repeat`,
    [theme.breakpoints.down('sm')]: {
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), url('/images/home/monet/mobileBanner.png') lightgray -4.697px -137.804px / 112.837% 124.394% no-repeat`,
    },
  },
  content: {
    width: '100%',
    height: '100%',
  },
  module1: {
    marginTop: 95,
    position: 'absolute',
    top: 50,
    left: 50,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    '& p': {
      color: 'var(--white, #FFF)',
      fontFamily: 'Open Sans',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '140%' /* 19.6px */,
    },
  },

  module2: {
    width: 180,
    height: 180,
    borderRadius: '100%',
    marginTop: 95,
    background: '#E11419',

    position: 'absolute',
    top: 60,
    right: 98,
    zIndex: 1,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& p': {
      color: 'var(--white, #FFF)',
      textAlign: 'center',

      fontFamily: 'Big Caslon',
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '120%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 88,

      width: 72,
      height: 72,
      top: 25,
      right: 20,
      '& p': {
        fontSize: 9,
      },
    },
  },
  module3: {
    position: 'absolute',
    left: 165,
    top: 'calc(50% - 95px)',
    transform: 'translateY(-50%)',
    zIndex: 1,

    '& .module3-title1': {
      color: '#FFF',
      'font-variant-numeric': 'lining-nums proportional-nums',
      fontFamily: 'Sharp Grotesk DB Cyr Medium 22',
      fontSize: 58,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '70px',
    },
    '& .module3-title2': {
      color: '#FFF',
      fontFamily: 'Inter',
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '32px',
      marginTop: 24,
      marginBottom: 48,
    },
    '& button': {
      width: 277,
      height: 60,
      borderRadius: 100,
      background: '#000',
      display: 'flex',
      padding: '20px 21px',
      justifyContent: 'center',
      alignItems: 'center',

      color: '#FFF',
      fontFamily: 'Inter',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 20,
    },
    [theme.breakpoints.down('sm')]: {
      top: '50%',
      left: 24,
      '& .module3-title1': {
        fontSize: 32,
        lineHeight: '48px',
      },
      '& .module3-title2': {
        fontSize: 20,
        marginTop: 16,
        marginBottom: 30,
      },
      '& button': {
        width: 159,
        height: 44,
      },
    },
  },
  module4: {
    width: 385.365,
    height: 94.274,
    transform: 'rotate(-5.073deg)',

    position: 'absolute',
    right: 23,
    bottom: 230,
    zIndex: 1,
    'mix-blend-mode': 'color-dodge',
    [theme.breakpoints.down('sm')]: {
      width: 134.09,
      height: 32.803,
      bottom: 76,
    },
  },
}));
