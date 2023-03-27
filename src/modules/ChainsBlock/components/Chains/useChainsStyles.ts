import { fade, makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../../../theme/mainTheme';

export const useChainsStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    marginBottom: theme.spacing(4),
    paddingBottom: theme.spacing(5),
    borderBottom: `1px solid ${fade(theme.palette.common.white, 0.5)}`,
    [theme.breakpoints.up('xl')]: {
      borderBottom: 'none',
      minHeight: 700,
      display: 'grid',
      gridTemplateRows: '1fr auto',
      marginBottom: theme.spacing(20),
    },
  },
  title: {
    fontFamily: FONTS.medium,
    fontWeight: 500,
    fontSize: 48,
    [theme.breakpoints.up('md')]: {
      fontSize: 84,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 116,
    },
  },
  textWrap: {
    textAlign: 'right',
  },
  text: {
    display: 'inline-block',
    fontSize: 16,
    maxWidth: 200,
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
      maxWidth: 270,
    },
  },
  itemsDesktop: {
    position: 'absolute',
    top: '5%',
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: 'none',
  },
  item: {
    width: '33.33%',
    height: '50%',
    [theme.breakpoints.up('xl')]: {
      width: 'auto',
      height: 'auto',
    },
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'top 1s 0.4s, left 1s 0.4s, opacity 0.3s 0.4s',
    transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
    '.client-side &': {
      opacity: 0,
    },
    '&:hover': {
      zIndex: 1,
    },
  },
  itemsDesktopInView: {
    '& $item': {
      opacity: 1,
      '&:nth-child(1)': {
        top: '87.5%',
        left: '12.5%',
      },
      '&:nth-child(2)': {
        top: '72.5%',
        left: '27.5%',
      },
      '&:nth-child(3)': {
        top: '57.5%',
        left: '42.5%',
      },
      '&:nth-child(4)': {
        top: '42.5%',
        left: '57.5%',
      },
      '&:nth-child(5)': {
        top: '27.5%',
        left: '72.5%',
      },
      '&:nth-child(6)': {
        top: '12.5%',
        left: '87.5%',
      },
    },
  },

  itemsMobile: {
    position: 'relative',
    margin: '0 auto',
    maxWidth: 900,
    '&:before': {
      display: 'block',
      content: `''`,
      paddingTop: '66.66%',
    },
  },
  itemsMobileInView: {
    '& $item': {
      opacity: 1,
      '&:nth-child(1)': {
        top: '30%',
        left: '22.5%',
      },
      '&:nth-child(2)': {
        top: '30%',
        left: '50%',
      },
      '&:nth-child(3)': {
        top: '30%',
        left: '77.5%',
      },
      '&:nth-child(4)': {
        top: '70%',
        left: '22.5%',
      },
      '&:nth-child(5)': {
        top: '70%',
        left: '50%',
      },
      '&:nth-child(6)': {
        top: '70%',
        left: '77.5%',
      },
    },
  },
}));
