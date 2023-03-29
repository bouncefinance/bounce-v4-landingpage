import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from 'src/modules/theme/mainTheme';

export const useTopBlockStyles = makeStyles<Theme>(theme => ({
  root: {
    minHeight: '90vh',
    paddingBottom: theme.spacing(15),
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      minHeight: '100vh',
      boxSizing: 'content-box',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '30vh',
    },
  },
  video: {
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
  videoSm: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  videoLg: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  container: {
    position: 'relative',
    paddingTop: 100,
    paddingBottom: 100,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      paddingBottom: 200,
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0,
    },
  },
  title: {
    color: '#171717',
    fontSize: 38,
    lineHeight: '55px',
    fontFamily: FONTS.medium,
    fontWeight: 500,
    marginBottom: theme.spacing(3),
    transitionDelay: '0.2s',
    [theme.breakpoints.up('lg')]: {
      fontSize: 58,
      lineHeight: '70px',
      maxWidth: 874,
      // textIndent: '-70px',
      // paddingLeft: theme.spacing(8.75),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      lineHeight: '41.6px',
      marginTop: 110,
    },
  },
  text: {
    lineHeight: '32px',
    color: '#171717',
    fontSize: 20,
    fontFamily: FONTS.primary,
    marginBottom: theme.spacing(6),
    transitionDelay: '0.4s',
    [theme.breakpoints.up('md')]: {
      maxWidth: 671,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
      marginBottom: 48,
    },
  },
  btnWrap: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      gap: 12,
    },
  },
  demoBtn: {
    marginBottom: theme.spacing(2.5),
    height: 60,
    lineHeight: '20px',
    background: '#2B51DA',
    borderRadius: '30px',
    fontSize: '16px',
    color: '#fff',
    '& .MuiButton-label': {
      padding: theme.spacing(0, 4),
    },
    '&:before': {
      background: '#2B51DA',
    },
    '&:hover': {
      background:
        'linear-gradient(90deg, rgba(255, 255, 255, 0) 40.91%, rgba(255, 255, 255, 0.24) 76.36%, rgba(255, 255, 255, 0.12) 100%), #2B51DA',
    },
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      padding: 0,
      width: '50%',
      '& .MuiButton-label': {
        padding: 0,
      },
    },
  },
  docsBtn: {
    height: 60,
    lineHeight: '20px',
    background: '#fff',
    border: '1px solid #2B51DA',
    borderRadius: '30px',
    fontSize: '16px',
    color: '#2B51DA',
    '& .MuiButton-label': {
      padding: theme.spacing(0, 6.25),
    },
    '&:hover': {
      background: '#2B51DA',
      color: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      width: '50%',
      padding: 0,
      '& .MuiButton-label': {
        padding: theme.spacing(0, 2),
      },
    },
  },
}));
