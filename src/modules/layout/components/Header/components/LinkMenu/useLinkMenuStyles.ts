import { makeStyles, Theme } from '@material-ui/core';

export const useLinkMenuStyles = makeStyles<Theme>(theme => ({
  link: {
    whiteSpace: 'nowrap',
  },
  icon: {
    marginLeft: 12,
    fontSize: 10,
  },
  menu: {
    borderRadius: '20px',
  },
  menuPadding: {
    padding: 0,
  },
  subMenu: {
    borderRadius: '20px',
  },
  leftMenu: {
    padding: '10px 0',
  },
  menuItem: {
    color: theme.palette.text.primary,
    fontSize: 14,
    lineHeight: '20px',
    padding: 0,
    '&:hover': {
      background: '#f6f6f6 !important'
    }
  },
  rightMenu: {
    background: '#fafafa',
    padding: '10px 0',
  },
  rightMenuItem: {
    color: theme.palette.text.primary,
    fontSize: 14,
    padding: 0,
    lineHeight: '20px',
  },
}));
