import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from 'src/modules/theme/const';

export const useDigitalCardStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background: '#fff',
    color: '#171717',
    minHeight: '100vh',
    marginTop: PARALLAX_MARGIN,
    boxSizing: 'border-box',
    // paddingBottom: theme.spacing(20),
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#fff',
      height: 60,
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      // paddingBottom: theme.spacing(10),
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
  },
  wrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    marginTop: theme.spacing(7.5),
    lineHeight: '60px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      fontSize: '24px',
      lineHeight: '36px',
    },
  },
  description: {
    margin: theme.spacing(2.5, 0, 10),
    lineHeight: '26px',
    color: 'rgba(23, 23, 23, 0.8)',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      margin: '20px 0 0',
      fontSize: '24px',
      lineHeight: '36px',
    },
  },
  textWrap: {
    marginTop: 128,
    flex: 1,
    [theme.breakpoints.down('md')]: {
      margin: '0',
      fontSize: '24px',
      lineHeight: '36px',
    },
  },
  item: {
    marginBottom: theme.spacing(3.5),
    paddingLeft: 24,
    lineHeight: '28px',
    textIndent: -24,
    '&::before': {
      marginRight: theme.spacing(1.5),
      content: "' '",
      display: 'inline-block',
      width: 12,
      height: 12,
      borderRadius: '50%',
      background:
        'radial-gradient(16.86% 22.48% at 29.17% 29.17%, #C2C2C2 0%, rgba(102, 102, 102, 0) 100%), #171717',
      boxShadow: 'inset 0px 0px 2px rgba(255, 255, 255, 0.15)',
      transform: 'matrix(-1, 0, 0, 1, 0, 0)',
    },
    [theme.breakpoints.down('md')]: {
      margin: '0',
      color: '#171717',
      fontSize: '16px',
      lineHeight: '28px',
      marginBottom: '28px',
    },
  },
  'get-card-btn': {
    marginTop: theme.spacing(5.25),
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
      width: '100%',
    },
  },
  'promotion-wrapper': {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(11.25),
  },
  'promotion-title': {
    marginBottom: 20,
    lineHeight: '60px',
    fontSize: 32,
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
      lineHeight: '40px',
      textAlign: 'center',
    },
  },
}));
