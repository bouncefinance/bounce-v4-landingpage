import { makeStyles, Theme } from '@material-ui/core';

export const useCompanyBannerStyles = makeStyles<Theme>(theme => ({
  root: {
    minHeight: '90vh',
    paddingBottom: theme.spacing(15),
    paddingTop: theme.spacing(15),
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
  container: {},
  title: {
    lineHeight: '70px',
    fontSize: 26,
    color: '#2B51DA',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      lineHeight: '36px',
      fontSize: 16,
    },
  },
  description: {
    margin: '0px auto 28px',
    maxWidth: 700,
    lineHeight: '70px',
    textAlign: 'center',
    paddingLeft: '106px',
    textIndent: '-380px',
    color: '#171717',
    [theme.breakpoints.down('md')]: {
      lineHeight: '55px',
      fontSize: 38,
      paddingLeft: '0',
      textIndent: '0',
    },
  },
  description1: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '1181px',
    lineHeight: '70px',
    textAlign: 'left',
    paddingLeft: '106px',
    color: '#171717',
    [theme.breakpoints.down('md')]: {
      lineHeight: '55px',
      fontSize: 38,
      paddingLeft: '0',
      textIndent: '0',
    },
  },
  description2: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '1181px',
    lineHeight: '70px',
    textAlign: 'right',
    paddingRight: '106px',
    color: '#171717',
    [theme.breakpoints.down('md')]: {
      lineHeight: '55px',
      fontSize: 38,
      paddingLeft: '0',
      textIndent: '0',
    },
  },
  detail: {
    margin: '0px auto 40px',
    maxWidth: 738,
    lineHeight: '26px',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.8)',
  },
  'join-btn-wrap': {
    display: 'flex',
    justifyContent: 'center',
  },
  'join-btn': {
    marginBottom: theme.spacing(12.5),
    height: 60,
    background: ' #2B51DA',
    borderRadius: 30,
    lineHeight: '20px',
    fontSize: '16px',
    color: '#fff',
    '& .MuiButton-label': {
      padding: theme.spacing(0, 6),
    },
    '&:before': {
      background: '#2B51DA',
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
    background: '#F5F6F8',
    [theme.breakpoints.down('md')]: {
      padding: '32px 20px',
    },
  },
  item2: {
    background: '#F4F0FF',
  },
  'item-title': {
    marginBottom: theme.spacing(5),
    minHeight: 68,
    lineHeight: '34px',
    color: '#2B51DA',
    fontSize: 32,
    [theme.breakpoints.down('md')]: {
      minHeight: 24,
      fontSize: 18,
      marginBottom: '24px',
    },
  },
  'item-paragraph': {
    lineHeight: '24px',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.8)',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
}));
