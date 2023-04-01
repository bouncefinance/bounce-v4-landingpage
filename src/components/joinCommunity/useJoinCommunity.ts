import { makeStyles, Theme } from '@material-ui/core';

export const useJoinCommunity = makeStyles<Theme>(theme => ({
  pageRoot: {
    width: '100% !important',
    height: '100%',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    background: `url('/images/tokenAndNftAuction/bg.svg') no-repeat top center / 100% auto`,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0,
    },
  },
  pageContainer: {
    position: 'relative',
    paddingTop: 190,
    width: '100vw !important',
    maxWidth: '1080px !important',
    paddingBottom: 100,
    display: 'flex',
    margin: '0 auto 0',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 150,
    },
  },
  title2: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 58,
    lineHeight: '75px',
    color: '#171717',
    textAlign: 'center',
    marginBottom: 16,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      lineHeight: '41.6px',
      marginBottom: 0,
    },
  },
  grid: {
    marginTop: 120,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 56,
    },
  },
  text: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '24px',
    color: '#232323',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  itemBox: {
    display: 'flex',
    padding: theme.spacing(2),
    zIndex: 1,
    cursor: 'pointer',
    '&:hover $icon': {
      boxShadow: '0px 0px 20px 1px rgba(0, 0, 0, 0.15)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  socialName: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 16,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  textColumn: {
    marginLeft: '18px',
    gap: '4px',
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
}));
