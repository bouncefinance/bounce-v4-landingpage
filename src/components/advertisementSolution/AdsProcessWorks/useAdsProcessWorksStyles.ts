import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from 'src/modules/theme/const';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useAdsProcessWorksStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background: '#2B51DA',
    color: PALETTE.text.light,
    minHeight: '100vh',
    pointerEvents: 'auto',
    borderRadius: '28px 28px 0 0',
    '& ::selection': {
      background: PALETTE.background.default,
      color: PALETTE.text.reverse,
    },
    [theme.breakpoints.up('md')]: {
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
  },
  container: {
    padding: '120px 0 0',
    maxWidth: '1110px !important',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      padding: '80px 0 0',
    },
  },
  industryTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 44,
    color: '#fff',
    textAlign: 'center',
    marginBottom: '80px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      margin: '0 24px 40px',
    },
  },
  contentImg: {
    display: 'block',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0 16px',
    },
  },
}));
