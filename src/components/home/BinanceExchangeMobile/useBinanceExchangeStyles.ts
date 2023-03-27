import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from 'src/modules/theme/const';

export const useBinanceExchangeStyles = makeStyles((theme: Theme) => ({
  binanceExchange: {
    position: 'relative',
    background: '#232323',
    color: '#FFFFFF',
    marginTop: PARALLAX_MARGIN,
    pointerEvents: 'auto',
    borderRadius: '24px',
    overflow: 'hidden'
  },
  wrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  topContainer: {
    paddingRight: 0,
  },
  wrapText: {
    color: '#FFFFFF',
    paddingRight: theme.spacing(2.75),
    marginTop: '60px',
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(6),
      '& h2': {
        fontSize: 24,
      },
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(2.75),
      '& h2': {
        fontSize: 28,
      },
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(16.25),
      '& h2': {
        fontSize: 48,
      },
    },

    '& p': {
      color: 'rgba(255, 255, 255, 0.7)',
      fontWeight: 400,
      fontSize: 18,
      [theme.breakpoints.up('md')]: {
        marginRight: 21,
      },
      [theme.breakpoints.up('lg')]: {
        marginRight: theme.spacing(4),
      },
    },
  },
  screenWrap: {
    position: 'relative',
    '&::before': {
      display: 'block',
      content: `''`,
      paddingTop: '100%',
    },
  },
  screenInView: {
    '& $screenImgMobile': {
      transform: 'translate3D(-50%, -50%, 0)',
      opacity: 1,
    },
  },
  screenImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 20,
    backfaceVisibility: 'hidden',
    transformOrigin: '100% 0',
    transition: 'transform 0.5s 0.3s, opacity 0.5s 0.3s',
    '.client-side &': {
      opacity: 0,
      transform: 'translateX(200px)',
    },
    '$screenInView &': {
      opacity: 1,
      transform: 'translateX(120px)',
    },
  },
  screenImgMobile: {
    position: 'absolute',
    width: '80%',
    top: '50%',
    left: '50%',
    backfaceVisibility: 'hidden',
    transform: 'translate3D(0, -50%, 0)',
    opacity: 0,
    transformOrigin: '100% 0',
    transition: 'transform 0.5s 0.3s, opacity 0.5s 0.3s',
  },
  brandCont: {
    display: 'flex',
    alignItems: 'center',
  },
  btnBox: {
    display: 'flex',
    alignItems: 'center',
  },
}));
