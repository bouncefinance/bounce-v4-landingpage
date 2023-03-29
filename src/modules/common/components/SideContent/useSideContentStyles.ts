import { makeStyles, Theme } from '@material-ui/core';
import { FONTS, PALETTE } from '../../../theme/mainTheme';

export const useSideContentStyles = makeStyles<Theme>(theme => ({
  root: {
    marginTop: theme.spacing(4.5),
    color: PALETTE.text.light,
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(8),
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(12.5),
    },
  },

  brand: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(7.5),
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  brandLogo: {
    fontSize: 37,
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      marginRight: 17,
    },
  },
  brandName: {
    fontSize: 18,
    [theme.breakpoints.up('lg')]: {
      fontSize: 24,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  title: {
    fontSize: 48,
    fontFamily: FONTS.medium,
    fontWeight: 500,
    marginBottom: theme.spacing(5),
    transitionDelay: '0.2s',
    [theme.breakpoints.up('lg')]: {
      fontSize: 58,
      lineHeight: '66px',
      marginBottom: theme.spacing(4),
      maxWidth: 540,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      lineHeight: '41.6px',
      textAlign: 'center',
    },
  },
  titleSm: {
    fontSize: 30,
    [theme.breakpoints.up('lg')]: {
      fontSize: 36,
      lineHeight: '54px',
    },
  },
  text: {
    transitionDelay: '0.4s',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },

  btnWrap: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    transitionDelay: '0.6s',
    [theme.breakpoints.down('md')]: {
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      width: '100%',
      height: '60px',
      textAlign: 'center',
      lineHeight: '60px',
    },
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
  brandContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  tileComingSoon: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    fontWeight: 700,
    display: 'inline-block',
  },
}));
