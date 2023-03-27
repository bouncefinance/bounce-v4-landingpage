import { makeStyles, Theme } from '@material-ui/core';

export const useFooterStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
    background: theme.palette.background.default,
    color: theme.palette.text.primary,

    [theme.breakpoints.up('md')]: {
      minHeight: 70,
    },
  },

  container: {},

  col: {
    display: 'flex',
    justifyContent: 'center',

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
    color: theme.palette.text.primary + '!important',
    transition: 'color 0.2s',
    padding: theme.spacing(1),
    minWidth: 0,
    height: 'auto',
    border: 'none',
    fontSize: 'inherit',

    '&:hover': {
      background: 'none',
      color: theme.palette.primary.main,
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
}));
