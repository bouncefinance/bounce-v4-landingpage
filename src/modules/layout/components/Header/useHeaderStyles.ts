import { makeStyles, Theme } from '@material-ui/core';

export const HEADER_HEIGHT = 68;

export const useHeaderStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    color: theme.palette.text.primary,
    height: '68px',
    [theme.breakpoints.up('xl')]: {
      height: '85px',
    },
  },

  container: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'auto auto',
    gap: theme.spacing(0, 4),
    justifyContent: 'space-between',
    borderBottom: '1px solid #D7D6D9',
    padding: '32px 24px 24px',
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'auto auto',
      justifyContent: 'initial',
      padding: '32px 24px 24px',
    },
  },

  renderMobile: {
    display: 'grid',
    alignItems: 'center',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  renderDesktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },

  loginBtn: {
    height: 40,
    lineHeight: '20px',
    marginLeft: theme.spacing(3.75),
    // marginRight: theme.spacing(3.75),
    boxSizing: 'border-box',
    border: '1px solid #2B51DA',
    borderRadius: '22px',
    padding: '0 13px',
    color: '#fff',
    background: '#2B51DA',
    fontSize: '16px',
    textDecoration: 'none',
    '&:hover': {
      border: '1px solid #2B51DA',
      color: '#fff',
      background: '#2B51DA',
    },
  },

  buttons: {
    display: 'grid',
    alignItems: 'center',
    gap: theme.spacing(0, 2),
    gridTemplateColumns: 'auto',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'auto auto',
    },
  },

  drawer: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  '@keyframes mobileMenuDrawerTop': {
    '0%': { opacity: 0, transform: 'translateY(-40px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },

  drawerTop: {
    animationName: '$mobileMenuDrawerTop',
    animationDuration: '0.3s',
    animationTimingFunction: 'linear',
    animationFillMode: 'both',
    height: HEADER_HEIGHT,
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  drawerPaper: {
    position: 'absolute',
    width: '100%',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: theme.palette.common.white,
    color: theme.palette.common.black,
  },

  '@keyframes mobileMenuDrawerBottom': {
    '0%': { opacity: 0, transform: 'translateY(40px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },

  drawerBottom: {
    animationName: '$mobileMenuDrawerBottom',
    animationDuration: '0.3s',
    animationTimingFunction: 'linear',
    animationFillMode: 'both',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1, 0, 2),
  },

  navInner: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    overflow: 'hidden',
  },

  mobileMenuDivider: {
    margin: theme.spacing(3, 5),
  },

  '@keyframes mobileMenuLinks': {
    '0%': { opacity: 0, transform: 'translateX(40px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },

  mobileMenuLinks: {
    flex: 1,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    '& > *': {
      [theme.breakpoints.down('lg')]: {
        animationName: '$mobileMenuLinks',
        animationDuration: '0.2s',
        animationTimingFunction: 'linear',
        animationFillMode: 'both',
        '&:nth-child(1)': {
          animationDelay: '0.2s',
        },
        '&:nth-child(2)': {
          animationDelay: '0.3s',
        },
        '&:nth-child(3)': {
          animationDelay: '0.4s',
        },
        '&:nth-child(4)': {
          animationDelay: '0.5s',
        },
        '&:nth-child(5)': {
          animationDelay: '0.6s',
        },
        '&:nth-child(6)': {
          animationDelay: '0.7s',
        },
        '&:nth-child(7)': {
          animationDelay: '0.8s',
        },
        '&:nth-child(8)': {
          animationDelay: '0.9s',
        },
        '&:nth-child(9)': {
          animationDelay: '1s',
        },
        '&:nth-child(10)': {
          animationDelay: '1.1s',
        },
        '&:nth-child(11)': {
          animationDelay: '1.2s',
        },
      },
    },
  },
  mobileMenuLinkItem: {
    fontFamily: 'Sharp Grotesk DB Cyr Book 20',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '20px',
    color: '#232323',
    margin: '30px 0',
    cursor: 'pointer',
  },
  mobileLoginBtn: {
    height: 40,
    lineHeight: '20px',
    boxSizing: 'border-box',
    background: '#fff',
    border: '1px solid #2B51DA',
    borderRadius: '22px',
    color: '#2B51DA',
    fontSize: '16px',
    padding: '0 34px',
    '&:hover': {
      background: '#2B51DA',
      color: '#fff',
    },
  },
}));
