import { PALETTE } from 'src/modules/theme/mainTheme';
import { fade, makeStyles, Theme } from '@material-ui/core';

export const useChainsStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    marginBottom: theme.spacing(4),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      minHeight: 700,
      display: 'grid',
      gridTemplateRows: '1fr auto',
      marginBottom: theme.spacing(20),
    },
  },
  title: {
    fontFamily: 'Sharp Grotesk DB Cyr Medium 22',
    fontWeight: 500,
    textAlign: 'left',
    color: '#FFFFFF',
    fontSize: '24px',
    lineHeight: '36px',
    marginBottom: '32px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
      fontSize: '36px',
      lineHeight: '50px',
      width: '57%',
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
    left: '10%',
    pointerEvents: 'none',
  },
  item: {
    width: '33.33%',
    height: '50%',
    [theme.breakpoints.up('md')]: {
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
    width: '100%',
    display: 'flex',
    flexFlow:'row wrap',
    justifyContent: 'center',
    padding: '0 16px',
  },
  itemEl: {
    position: 'relative',
    width: 'calc((100% - 48px) / 2)',
    paddingBottom: 'calc((100% - 48px) / 2)',
    margin:'0 16px 16px 0',
    transition: 'all 0.8s',
    transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
    '&:nth-child(1)': {
      left: '-40%'
    },
    '&:nth-child(2)': {
      left: '40%'
    },
    '&:nth-child(3)': {
      left: '-40%'
    },
    '&:nth-child(4)': {
      left: '40%'
    },
    '&:nth-child(5)': {
      top: '40%'
    }
  },
  singleEl: {
    position: 'absolute',
    top: '0',
    left: '0',
    opacity: 1,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    cursor: 'pointer',
    pointerEvents: 'auto',
    color: PALETTE.text.light,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    border: `1px solid ${fade(theme.palette.common.white, 0.3)}`,
    '&:hover': {
      borderColor: 'transparent',
      backgroundColor: '#404040',
    },
  },
  singleElTitle: {
    fontFamily: 'Sharp Grotesk DB Cyr Medium 22',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '31px',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: '8px'
  },
  singleElLabel: {
    fontFamily: 'Sharp Grotesk DB Cyr Book 20',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '8px'
  },
  itemsMobileInView: {
    '& $itemEl': {
      opacity: 1,
      top: '0',
      left: '0'
    },
  },
}));
