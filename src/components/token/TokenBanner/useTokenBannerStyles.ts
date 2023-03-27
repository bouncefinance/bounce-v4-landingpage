import { makeStyles, Theme } from '@material-ui/core';

export const useTokenBannerStyles = makeStyles<Theme>(theme => ({
  root: {
    minHeight: 'calc(100vh - 100px)',
    // paddingBottom: theme.spacing(15),
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'hidden',
    position: 'relative',
    padding: '120px 0',
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
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  contentBlcok: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    marginBottom: '20px',
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
  title: {
    marginBottom: theme.spacing(3.5),
    paddingLeft: 58,
    lineHeight: '70px',
    maxWidth: 655,
    textIndent: -58,
    color: '#171717',
    wordBreak: 'break-all',
    fontSize: '54px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '100%',
      textIndent: '0',
      paddingLeft: 0,
      textAlign: 'left',
      fontSize: '48px',
    },
  },
  subtitle: {
    fontSize: '54px',
    [theme.breakpoints.down('md')]: {
      fontSize: '28px'
    }
  },
  description: {
    marginBottom: theme.spacing(5),
    maxWidth: 866,
    lineHeight: '26px',
    color: 'rgba(0, 0, 0, 0,8)',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '100%',
      fontSize: '16px',
      textIndent: '0',
      textAlign: 'left',
      marginBottom: '48px',
    },
  },
  'launch-btn': {
    marginBottom: theme.spacing(13.75),
    height: 60,
    background: ' #2B51DA',
    borderRadius: 30,
    lineHeight: '20px',
    fontSize: '16px',
    color: '#fff',
    '& .MuiButton-label': {
      padding: theme.spacing(0, 1),
    },
    '&:before': {
      background: '#2B51DA',
    },
    '&:hover': {
      background:
        'linear-gradient(90deg, rgba(255, 255, 255, 0) 40.91%, rgba(255, 255, 255, 0.24) 76.36%, rgba(255, 255, 255, 0.12) 100%), #480CDB',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      width: '100%',
      boxSizing: 'content-box',
      alignItems: 'center',
    },
  },
  item: {
    height: '100%',
    padding: theme.spacing(4, 3),
    borderRadius: 24,
    background: '#E9E6F1',
  },
  item2: {
    background: '#F5F6F8',
  },
  item4: {
    background: '#F5F6F8',
  },
  'item-title': {
    marginBottom: 24,
    minHeight: 68,
    lineHeight: '34px',
    color: '#480CDB',
    fontSize: 24,
  },
  'item-paragraph': {
    lineHeight: '24px',
    color: 'rgba(0, 0, 0, 0.8)',
  },
}));
