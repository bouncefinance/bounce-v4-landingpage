import { makeStyles, Theme } from '@material-ui/core';

export const useBounceOffersStyles = makeStyles<Theme>(theme => ({
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
    maxWidth: '1340px !important',
    paddingTop: 93,
    [theme.breakpoints.down('md')]: {
      paddingTop: 20,
    },
    paddingBottom: 120,
    display: 'flex',
    flexFlow: 'column nowrap',
    margin: '0 auto',
  },
  logo: {
    display: 'block',
    width: 40,
    height: 60,
    [theme.breakpoints.down('sm')]: {
      width: 20,
      height: 30,
      marginBottom: 20,
    },
    margin: '0 auto',
    marginBottom: 32,
  },
  title: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 44,
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      marginBottom: 40,
    },
    textAlign: 'center',
    marginBottom: 55,
  },
  item: {
    width: '100%',
    height: '360px',
    background: '#fff',
    borderRadius: 24,
    padding: '40px 28px',
    [theme.breakpoints.down('sm')]: {
      padding: '32px, 20px, 48px, 20px',
      height: 'auto',
    },
  },
  itemTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 16,
      fontSize: 17,
      height: 'auto',
      lineHeight: '23.8px',
    },
    color: '#2B51DA',
    marginBottom: 24,
    textAlign: 'left',
    lineHeight: '34px',
    height: 108,
  },
  itemDesc: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 16,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
    color: '#171717',
    lineHeight: '24px',
    textAlign: 'left',
  },
}));
