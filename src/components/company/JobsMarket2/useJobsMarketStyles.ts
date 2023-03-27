import { makeStyles, Theme } from '@material-ui/core';

export const useJobsMarketStyles = makeStyles<Theme>(theme => ({
  root: {
    maxWidth: '1110px',
    margin: `${theme.spacing(10.75)}px auto 90px`
  },
  container: {
    position: 'relative',
    background:
      'radial-gradient(42.33% 446.85% at 90.8% 39.88%, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.39) 0.01%, rgba(255, 255, 255, 0.17) 81.44%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2B51DA',
    borderRadius: 24,
    color: '#fff',
    display: 'flex',
    flexFlow: 'row nowrap',
    [theme.breakpoints.down('md')]: {
      flexFlow: 'column nowrap',
      padding: '40px 20px 0',
    },
  },
  jobsMarketLeft: {
    width: '100%',
    padding: theme.spacing(6.5, 5),
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
  jobsMarketRight: {
    position: 'absolute',
    right: '0',
    bottom: '-65px',
    width: '488px',
    '& $img': {
      width: '100%',
      hegiht: '100%',
      ObjectFit: 'cover',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  title: {
    marginBottom: theme.spacing(3),
    lineHeight: '34px',
    fontSize: 32,
  },
  description: {
    marginBottom: theme.spacing(7),
    maxWidth: 740,
    lineHeight: '24px',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  btn: {
    height: 60,
    lineHeight: '20px',
    background: ' #fff',
    borderRadius: 30,
    color: '#232323',
    '& .MuiButton-label': {
      padding: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  jobsMarketBottom: {
    width: '100%',
    '& $img': {
      position: 'relative',
      display: 'none',
      width: '100%',
      marginTop: '60px',
      [theme.breakpoints.down('md')]: {
        display: 'block',
      },
    },
  },
}));
