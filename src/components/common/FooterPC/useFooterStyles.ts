import { makeStyles } from '@material-ui/core';

export const useFooterStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    background: '#FFFFFF',
    color: '#000000',
    [theme.breakpoints.up('md')]: {
      minHeight: 70,
    },
  },
  noBg: {
    background: 'transparent !important',
  },
  container: {},
  content: {
    minHeight: 200,
    padding: '44px 0 34px',
    borderTop: '1px solid #D7D6D9',
    borderBottom: '1px solid #D7D6D9',
  },
  col: {
    display: 'flex',
    justifyContent: 'center',
    color: '#fff',

    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-start',
    },
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
    color: '#fff',
    transition: 'color 0.2s',
    padding: theme.spacing(1),
    minWidth: 0,
    height: 'auto',
    border: 'none',
    fontSize: 'inherit',

    '&:hover': {
      background: 'none',
      color: '#fff',
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
    marginTop: 40,
    display: 'flex',
    alignItems: 'center',
  },
  developLink: {
    marginTop: 18,
  },
  footerLogo: {
    marginTop: 48,
    position: 'relative',
    width: 300,
    height: 174,
  },
  iframeBox: {
    border: '0 none',
    position: 'absolute',
    top: -11,
    left: -56,
    height: 222,
  },
  linkTitle: {
    fontSize: 14,
    marginBottom: 40,
  },
  ulBox: {
    margin: 0,
    padding: 0,
  },
  linkLi: {
    listStyle: 'none',
    marginBottom: 12,
  },
  linkText: {
    color: '#000000',
    padding: 0,
    height: 18,
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

  darkTheme: {
    background: '#232323',
    color: '#FFFFFF',
    '& a': {
      color: '#FFFFFF',
      '&:hover': {
        color: '#FFFFFF',
      },
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
}));
