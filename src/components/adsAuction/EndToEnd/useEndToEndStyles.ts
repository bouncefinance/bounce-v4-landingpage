import { makeStyles, Theme } from '@material-ui/core';

export const useEndToEndStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    backgroundColor: '#2B51DA',
    minHeight: '100vh',
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -54,
      width: '100%',
      background: '#2B51DA',
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
    maxWidth: '1080px !important',
    paddingTop: 93,
    paddingBottom: 120,
    display: 'flex',
    flexFlow: 'column nowrap',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
    },
  },
  leftTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 58,
    color: '#fff',
    textAlign: 'left',
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      textAlign: 'center',
    },
  },
  leftDesc: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'left',
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  rightImg: {
    height: 445,
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: '100%',
    },
  },
}));
