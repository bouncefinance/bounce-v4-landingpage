import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from 'src/modules/theme/mainTheme';

export const useNavLinkStyles = makeStyles<Theme>(theme => ({
  links: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    // width: '100%',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
      gap: '0 40px',
    },
  },
  link: {
    color: 'inherit',
    display: 'block',
    padding: '1em',
    fontFamily: FONTS.primary,
    [theme.breakpoints.down('lg')]: {
      // paddingLeft: theme.spacing(5),
      // paddingRight: theme.spacing(5),
      // fontSize: 18,
    },
    [theme.breakpoints.up('xl')]: {
      // display: 'inline-block',
      // padding: '0.5em',
    },
    '&:hover': {
      textDecoration: 'underline'
    }
  },
}));
