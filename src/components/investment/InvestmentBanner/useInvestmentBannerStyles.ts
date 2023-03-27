import { makeStyles, Theme } from '@material-ui/core';

export const useInvestmentBannerStyles = makeStyles<Theme>(theme => ({
  root: {
    minHeight: 'calc(100vh - 100px)',
    paddingBottom: theme.spacing(15),
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'hidden',
    position: 'relative',
    paddingTop: '80px',
    top: 100,
    [theme.breakpoints.up('md')]: {
      minHeight: 'calc(100vh - 100px)',
      boxSizing: 'content-box',
      alignItems: 'center',
    },
  },
  bg: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    minWidth: '100vw',
    minHeight: '100vh',
    objectFit: 'cover',
    transform: 'translate(-50%, -50%)',
  },
  container: {
    // padding: 0,
  },
  title: {
    lineHeight: '70px',
    textAlign: 'center',
    fontSize: 26,
    color: '#2B51DA',
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '36px',
    },
  },
  text: {
    marginBottom: theme.spacing(5),
    maxWidth: 1320,
    lineHeight: '70px',
    textAlign: 'center',
    color: '#171717',
    fontSize: 58,
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '55px',
    },
  },
  'sign-up-btn-wrap': {
    display: 'flex',
    justifyContent: 'center',
  },
  'sign-up-btn': {
    marginBottom: theme.spacing(12.5),
    height: 60,
    background: ' #480CDB',
    borderRadius: 30,
    lineHeight: '20px',
    fontSize: '16px',
    color: '#fff',
    '& .MuiButton-label': {
      padding: theme.spacing(0, 6),
    },
    '&:before': {
      background: '#480CDB',
    },
    '&:hover': {
      background:
        'linear-gradient(90deg, rgba(255, 255, 255, 0) 40.91%, rgba(255, 255, 255, 0.24) 76.36%, rgba(255, 255, 255, 0.12) 100%), #480CDB',
    },
  },
  item: {
    height: '100%',
    padding: theme.spacing(5.5, 5),
    borderRadius: 24,
  },
  item1: {
    background: '#E9E6F1',
  },
  item2: {
    background: '#F5F6F8',
  },
  'item-title': {
    marginBottom: theme.spacing(7.5),
    lineHeight: '34px',
    color: '#480CDB',
    fontSize: 32,
  },
  'item-paragraph1': {
    marginBottom: theme.spacing(3.75),
    lineHeight: '24px',
    color: 'rgba(0, 0, 0, 0.8)',
  },
  tips: {
    lineHeight: '18px',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
  },
}));
