import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from 'src/modules/theme/const';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useKeyFeaturesStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background: '#171717',
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
    maxWidth: '1080px !important',
    margin: '0 auto',
  },
  industryTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 44,
    color: '#fff',
    textAlign: 'center',
    marginBottom: '40px',
  },
  industryItem: {
    position: 'relative',
    background: '#E6E8F1',
    borderRadius: '16px',
    padding: '43px 44px 0',
    height: '252px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    cursor: 'pointer',
  },
  industryItem2: {
    background: '#F5F6F8'
  },
  industryBg: {
    background: `url('/images/home/industry-solutions/bg.png') no-repeat center center / cover`,
  },
  industryItemIcon: {
    width: 48,
    height: 48,
    marginBottom: 24,
  },
  industryItemTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 24,
    color: '#2B51DA',
    marginBottom: 16,
  },
  industryItemContent: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 16,
    color: '#171717',
    marginBottom: 16,
  },
}));
