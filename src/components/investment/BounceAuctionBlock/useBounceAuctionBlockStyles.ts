import { makeStyles } from '@material-ui/core';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useBounceAuctionBlockStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: '#232323',
    color: '#FFFFFF',
    // minHeight: '100vh',
    paddingBottom: theme.spacing(14),
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#232323',
      height: '120px',
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(23),
      '&::before': {
        borderRadius: '60px 60px 0 0',
        height: '81px',
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
    [theme.breakpoints.down('md')]: {
      lineHeight: '36px',
      fontSize: '24px',
    },
  },
  subtitle: {
    marginTop: 20,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  auctionType: {
    background: '#363636',
    borderRadius: 20,
    padding: '32px 28px',
    minHeight: 336,
    boxSizing: 'border-box',
  },
  box: {
    marginTop: 80,
  },
  functionBox: {
    background: '#F5F6F8',
    borderRadius: 20,
    padding: '32px 28px',
    minHeight: 336,
    boxSizing: 'border-box',
    position: 'relative',
  },
  auctionTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 4,
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
  },
  list: {
    margin: 0,
    paddingLeft: 0,
    '& li': {
      marginTop: 20,
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: 16,
      listStyle: 'none',
      '&::before': {
        content: "' '",
        width: 12,
        height: 12,
        background:
          'radial-gradient(16.86% 22.48% at 29.17% 29.17%, #C2C2C2 0%, rgba(102, 102, 102, 0) 100%),#FFFFFF',
        boxShadow: 'inset 0px 0px 2px rgba(255, 255, 255, 0.15)',
        transform: 'matrix(-1, 0, 0, 1, 0, 0)',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: 12,
      },
    },
  },
  functionBg: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  functionTitle: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 4,
  },
  blueList: {
    margin: 0,
    paddingLeft: 0,
    '& li': {
      marginTop: 20,
      color: 'rgba(0, 0, 0, 0.8)',
      fontSize: 16,
      listStyle: 'none',
      '&::before': {
        content: "' '",
        width: 12,
        height: 12,
        background:
          'radial-gradient(16.86% 22.48% at 29.17% 29.17%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%),#4506DF',
        boxShadow: 'inset 0px 0px 2px rgba(255, 255, 255, 0.15)',
        transform: 'matrix(-1, 0, 0, 1, 0, 0)',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: 12,
      },
    },
  },
  tip: {
    marginTop: 32,
    marginBottom: '40px',
    color: 'rgba(255, 255, 255, 0.5)',
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
    }
  },
}));
