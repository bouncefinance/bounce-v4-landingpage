import { makeStyles, Theme } from '@material-ui/core';
import { NONAME } from 'dns';
import { FONTS } from 'src/modules/theme/mainTheme';

export const useLogoStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: 'inherit',
    },
  },

  img: {
    height: 24,
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    },
  },
  mobileImg: {
    height: 22,
    width: 110,
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },
  },
  name: {
    fontSize: '24px',
    fontFamily: 'Helvetica Neue',
    lineHeight:'29px',
    fontWeight: 700,
    cursor: 'pointer',
    verticalAlign: 'middle',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    },
  },
}));
