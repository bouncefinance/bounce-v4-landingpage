import { makeStyles } from '@material-ui/core';
import { FONTS, PALETTE } from 'src/modules/theme/mainTheme';

export const useJobToolsStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: '#232323',
    color: '#FFFFFF',
    minHeight: '100vh',
    // paddingBottom: theme.spacing(14),
    paddingTop: 60,
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#232323',
      height: 60,
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      // paddingBottom: theme.spacing(23),
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 20,
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
    color: '#FFFFFF',
    [theme.breakpoints.up('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
      lineHeight: '36px'
    },
  },
  subtitle: {
    marginTop: 20,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  personList: {
    marginTop: 138,
    paddingLeft: 0,

    '& li': {
      marginBottom: 32,
      color: '#FFFFFF',
      fontSize: 16,
      listStyle: 'none',
      display: 'flex',
      '& b': {
        fontWeight: 500,
        fontFamily: FONTS.medium,
      }
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 48,
    },
  },
  point: {
    width: 12,
    height: 12,
    background:
      'radial-gradient(16.86% 22.48% at 29.17% 29.17%, #C2C2C2 0%, rgba(102, 102, 102, 0) 100%),#FFFFFF',
    boxShadow: 'inset 0px 0px 2px rgba(255, 255, 255, 0.15)',
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: 12,
    paddingRight: 12,
    marginTop: 6,
  },
}));
