import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from 'src/modules/theme/const';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useChainsBlockStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background: '#232323',
    color: PALETTE.text.light,
    minHeight: '100vh',
    marginTop: -PARALLAX_MARGIN,
    paddingBottom: theme.spacing(20),
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -54,
      width: '100%',
      background: '#232323',
      height: 60,
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(23),
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
    '& ::selection': {
      background: PALETTE.background.default,
      color: PALETTE.text.reverse,
    },
  },
  container: {
    paddingTop: theme.spacing(2.5),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(7.5)
    }
  },
}));
