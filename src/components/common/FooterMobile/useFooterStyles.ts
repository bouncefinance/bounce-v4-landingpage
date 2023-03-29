import { makeStyles } from '@material-ui/core';

export const useFooterStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    boxSizing: 'border-box',
    background: 'transparent',
    [theme.breakpoints.up('md')]: {
      minHeight: 70,
    },
  },
  container: {
    boxSizing: 'border-box',
  },
  content: {
    minHeight: 200,
    padding: '35px 16px 0',
    boxSizing: 'border-box',
  },
  logo: {
    width: 80,
    height: 16,
    opacity: 0,
    transform: 'translate3D(-50%, 0, 0)',
    transition: 'transform 0.6s, left 1s 0.4s, opacity 0.3s 0.4s',
    transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
    cursor: 'pointer'
  },
  col: {
    display: 'flex',
    justifyContent: 'flex-start',
    color: '#fff',
    opacity: 1,
    transform: 'translate3D(0, 0, 0)',
    transition: 'transform 0.6s, left 1s 0.4s, opacity 0.3s 0.4s',
    transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
  },

  socialCol: {
    fontSize: 20,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('lg')]: {
      paddingBottom: 4,
    },
  },

  link: {
    color: '#171717',
    transition: 'color 0.2s',
    padding: theme.spacing(1),
    minWidth: 0,
    height: 'auto',
    border: 'none',
    fontSize: 'inherit',
    '&:hover': {
      background: 'none',
      color: '#171717',
      border: 'none',
    },
  },

  rightWrap: {
    display: 'flex',
  },

  rightContent: {
    alignItems: 'center',
  },

  rightCol: {
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    },
  },

  docCol: {
    fontSize: 14,
  },

  policyCol: {
    [theme.breakpoints.up('lg')]: {
      paddingRight: 20,
    },
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    opacity: 0,
    transform: 'translate3D(50%, 0, 0)',
    transition: 'transform 0.6s, left 1s 0.4s, opacity 0.3s 0.4s',
    transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
  },
  developLink: {
    marginTop: 18,
  },
  footerLogo: {
    position: 'relative',
    width: '100%',
    minHeight: '223px',
    margin: '20px 0 32px',
    borderBottom: '1px solid #D9D9DD',
    opacity: 0,
    transform: 'translate3D(50%, 0, 0)',
    transition: 'transform 0.6s, left 1s 0.4s, opacity 0.3s 0.4s',
    transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
  },
  FooterLinks: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    cursor: 'pointer',
    opacity: 0,
    transform: 'translate3D(0, 50%, 0)',
    transition: 'transform 0.6s, left 1s 0.4s, opacity 0.3s 0.4s',
    transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
  },
  iframeBox: {
    display: 'block',
    border: '0 none',
    width: 300,
    height: 222,
    margin: '0 auto',
  },
  linkTitle: {
    fontSize: 14,
    fontFamily: 'Sharp Grotesk DB Cyr Medium 22',
    fontWeight: 500,
    lineHeight: '20px',
    color: '#171717',
  },
  ulBox: {
    margin: 0,
    padding: 0,
    maxHeight: '0',
    overflow: 'hidden',
    opacity: 0,
    transformOrigin: '100% 0',
    transition: 'max-height 0.8s 0.3s, opacity 0.5s 0.3s',
    transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
  },
  linkLi: {
    listStyle: 'none',
    marginTop: 20,
  },
  linkText: {
    padding: 0,
    fontSize: 13,
    fontFamily: 'Sharp Grotesk DB Cyr Medium 22',
    fontWeight: 500,
    lineHeight: '17px',
    color: '#171717',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  disabledLink: {
    color: '#919191' + '!important',
    '&:hover': {
      textDecoration: 'none',
      color: '#919191' + '!important',
    },
  },
  topLink: {
    marginTop: 28,
    display: 'block',
  },
  homepage: {
    display: 'block',
    marginBottom: '32px',
  },
  bottomLink: {
    marginBottom: 16,
    display: 'block',
  },
  noBg: {
    background: 'transparent !important',
  },
  darkTheme: {
    background: '#232323',
    color: '#FFFFFF',
    '& a': {
      color: '#FFFFFF',
      '&:hover': {
        color: '#FFFFFF',
      },
    },
    '& $link': {
      color: '#FFFFFF',
    },
    '& $linkTitle': {
      color: '#FFFFFF',
    },
    // '& .disabledLink': {
    //   color: '#919191',
    //   '&:hover': {
    //     textDecoration: 'none',
    //     color: '#919191',
    //   },
    // },
  },
  darkLink: {
    color: '#fff' + '!important',
  },
  description: {
    marginTop: '20px',
    marginLeft: '-8px',
    opacity: 1,
    color: '#fff',
    paddingBottom: '24px',
    transform: 'translate3D(0, 0, 0)',
    transformOrigin: '100% 0',
    transition: 'max-height 0.8s 0.3s, opacity 0.5s 0.3s',
    transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
  },
  defaultStyle: {},
  inViewStyle: {
    '& $logo': {
      opacity: 1,
      transform: 'translate3D(0, 0, 0)',
    },
    '& $iconBox': {
      opacity: 1,
      transform: 'translate3D(0, 0, 0)',
    },
    '& $FooterLinks': {
      opacity: 1,
      transform: 'translate3D(0, 0, 0)',
    },
    '& $footerLogo': {
      opacity: 1,
      transform: 'translate3D(0, 0, 0)',
    },
  },
}));
