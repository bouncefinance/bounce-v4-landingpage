import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from 'src/modules/theme/const';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useAuctionBlockStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background: '#232323',
    color: PALETTE.text.light,
    minHeight: '100vh',
    pointerEvents: 'auto',
    borderRadius: '28px 28px 0 0',
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(23),
    },
    '& ::selection': {
      background: PALETTE.background.default,
      color: PALETTE.text.reverse,
    },
  },
  container: {
    // paddingTop: theme.spacing(2.5), 
    padding: '0',
    maxWidth: '100% !important',
    [theme.breakpoints.up('md')]: {
    //   paddingTop: theme.spacing(7.5)
    }
  },
}));
