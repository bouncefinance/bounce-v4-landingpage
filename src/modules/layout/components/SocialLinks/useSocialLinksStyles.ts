import { makeStyles, Theme } from '@material-ui/core';

const X_SPACING = 1;

export const useSocialLinksStyles = makeStyles<Theme>(theme => ({
  list: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    // margin: theme.spacing(0, -X_SPACING),
    padding: 0,
    listStyle: 'none',
    margin: 0,
  },

  listItem: {
    padding: '0 2px',
    fontSize: 16,
  },

  link: {
    color: theme.palette.text.primary,
    transition: 'color 0.2s',
    padding: theme.spacing(1),
    minWidth: 0,
    fontSize: 'inherit',
    border: '1px solid #DEDEDE',
    width: 36,
    height: 36,
    '&:hover': {
      background: 'none',
      color: theme.palette.text.primary,
      border: '1px solid #DEDEDE',
    },
    [theme.breakpoints.down('md')]: {
      background: 'transparent',
    },
  },

  icon: {
    fontSize: 'inherit',
  },
}));
