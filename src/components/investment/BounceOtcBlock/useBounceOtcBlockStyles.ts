import { makeStyles } from '@material-ui/core';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useBounceOtcBlockStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: '#480CDB',
    color: '#FFFFFF',
    // minHeight: '100vh',
    paddingBottom: theme.spacing(14),
    paddingTop: 60,
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#480CDB',
      height: 60,
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(23),
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
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    margin: '20px auto 40px',
    [theme.breakpoints.up('md')]: {
      width: '82%',
      margin: '20px auto 79px',
    },
  },
  case: {
    display: 'block',
    width: '100%',
  },
  casePc: {
    display: 'block',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  caseMobile: {
    display: 'none',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
}));
