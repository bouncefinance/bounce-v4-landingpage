import { makeStyles } from '@material-ui/core';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useCryptoCurrenciesBlockStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: '#FFFFFF',
    color: '#171717',
    // minHeight: '100vh',
    // paddingBottom: theme.spacing(14),
    paddingTop: 60,
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#FFFFFF',
      height: '60px',
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      // paddingBottom: theme.spacing(23),
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
    '& ::selection': {
      background: PALETTE.background.default,
      color: PALETTE.text.reverse,
    },
  },
  wrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    // paddingRight: 0,
  },
  title: {
    lineHeight: '60px',
    marginBottom: 30,
    [theme.breakpoints.up('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '24px'
    },
  },
  subtitle: {
    marginTop: 20,
    color: 'rgba(23, 23, 23, 0.8)',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px'
    },
  },
  sub1: {
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '16px'
    },
  },
  imgScreen: {
    '& div:first-child': {
      marginTop: 0,
    },
    '& img': {
      left: 0,
    },
  },
  imgScreenMobile: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'block',
      marginTop: '30px',
      '& $img': {
        width: '100%',
        height: 'auto'
      }
    },
  },
  poweredBy: {
    margin: '60px 0 26px',
    color: 'rgba(23, 23, 23, 0.5)',
    lineHeight: '160%',
  },
}));
