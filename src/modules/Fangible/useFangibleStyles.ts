import { makeStyles, Theme } from '@material-ui/core';
import { PALETTE } from '../theme/mainTheme';
import { PARALLAX_MARGIN } from '../theme/const';

export const useFangibleStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background:
      'linear-gradient(180deg, #B57AFF 2.28%, #B57AFF 39.8%, #5C1FA9 100%)',
    color: PALETTE.text.light,
    minHeight: '100vh',
    marginTop: PARALLAX_MARGIN,
    paddingBottom: theme.spacing(10),
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#B57AFF',
      height: 60,
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(23),
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
  },
  wrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  topContainer: {
    paddingRight: 0,
  },
}));
