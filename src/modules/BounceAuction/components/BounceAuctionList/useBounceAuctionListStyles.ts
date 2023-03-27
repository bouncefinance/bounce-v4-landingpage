import { fade, makeStyles, Theme } from '@material-ui/core';

export const useBounceAuctionListStyles = makeStyles<Theme>(theme => ({
  root: {
    margin: theme.spacing(3, 0),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(8),
    },
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(4, 0),
      paddingRight: theme.spacing(12.5),
    },
    [theme.breakpoints.up('xl')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      margin: theme.spacing(6, 0),
    },
  },
  list: {
    width: '100%',
  },
  listItem: {
    position: 'relative',
    padding: theme.spacing(3.5, 0),
    fontSize: 16,
    borderTop: `1px solid ${fade(theme.palette.common.white, 0.5)}`,
    '&:first-child': {
      borderTop: 'none',
    },
    '&:nth-child(1)': {
      transitionDelay: '0.3s',
    },
    '&:nth-child(2)': {
      transitionDelay: '0.6s',
    },
    '&:nth-child(3)': {
      transitionDelay: '0.9s',
    },
    '&:nth-child(4)': {
      transitionDelay: '1.2s',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
    },
  },
}));
