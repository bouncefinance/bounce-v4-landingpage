import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../../../theme/mainTheme';

export const useLocalSwitcherStyles = makeStyles<Theme>(theme => ({
  btn: {
    whiteSpace: 'nowrap',
    padding: '0.5em',
    color: 'inherit',
    fontFamily: FONTS.bold,
  },
  icon: {
    fontSize: 16,
    marginRight: theme.spacing(1.5),
    verticalAlign: 'text-bottom',
  },
  menu: {},
  menuItem: {
    fontSize: 14,
    padding: 0,
  },
  menuItemLink: {
    display: 'block',
    color: theme.palette.text.primary,
    padding: theme.spacing(2, 3),
  },
}));
