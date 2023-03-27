import { makeStyles, Theme } from '@material-ui/core';

export const useEmployersBannerStyles = makeStyles<Theme>(theme => ({
  root: {
    minHeight: '90vh',
    paddingBottom: theme.spacing(15),
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'hidden',
    position: 'relative',
    top: 100,
    [theme.breakpoints.up('md')]: {
      minHeight: 'calc(100vh - 100px)',
      boxSizing: 'content-box',
      alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: 0,
      alignItems: 'flex-start',
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
  banner: {
    position: 'absolute',
    top: '50%',
    left: '40px',
    width: '643px',
    objectFit: 'cover',
    transform: 'translate3D(0, -50%, 0)',
    '& $img': {
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  bannerMobile: {
    width: '100%',
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      flexFlow: 'column nowrap',
    },
  },
  leftContent: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  title: {
    lineHeight: '70px',
    fontSize: 26,
    color: '#480CDB',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '36px',
    },
  },
  description: {
    paddingLeft: '57px',
    textIndent: '-114px',
    marginBottom: theme.spacing(3.5),
    maxWidth: 650,
    lineHeight: '70px',
    textAlign: 'center',
    color: '#171717',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      paddingLeft: '0',
      maxWidth: '100%',
      textIndent: '0',
      textAlign: 'left',
      fontSize: '38px',
      lineHeight: '55px',
      marginBottom: '12px',
    },
  },
  detail: {
    marginBottom: theme.spacing(8.5),
    maxWidth: 570,
    lineHeight: '26px',
    color: 'rgba(0, 0, 0, 0.8)',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      marginBottom: '48px',
    },
  },
  'sign-up-btn': {
    marginRight: theme.spacing(2),
    height: 60,
    lineHeight: '20px',
    background: '#4606DF',
    borderRadius: '30px',
    fontSize: '16px',
    color: '#fff',
    '& .MuiButton-label': {
      padding: theme.spacing(0, 4),
    },
    '&:before': {
      background: '#4606DF',
    },
    '&:hover': {
      background:
        'linear-gradient(90deg, rgba(255, 255, 255, 0) 40.91%, rgba(255, 255, 255, 0.24) 76.36%, rgba(255, 255, 255, 0.12) 100%), #480CDB',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: '20px',
      marginRight: '0',
    },
  },
  'post-job-btn': {
    height: 60,
    lineHeight: '20px',
    background: '#fff',
    border: '1px solid #480CDB',
    borderRadius: '30px',
    fontSize: '16px',
    color: '#480CDB',
    '& .MuiButton-label': {
      padding: theme.spacing(0, 5.5),
    },
    '&:hover': {
      background: '#4606DF',
      color: '#fff',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: '48px',
      marginRight: '0',
    },
  },
}));
