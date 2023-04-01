import { makeStyles, Theme } from '@material-ui/core';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useHowAuctionWorksStyles = makeStyles<Theme>(theme => ({
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
    padding: '120px 0 150px',
    maxWidth: '1110px !important',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      padding: '80px 0 150px',
    },
  },
  industryTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 44,
    color: '#fff',
    textAlign: 'center',
    marginBottom: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      margin: '0 24px 40px',
    },
  },
  img: {
    display:'block',
    margin: '80px auto 0',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 0',
      padding: '0 32px 40px',
      width: '100%',
    },
  },
}));
