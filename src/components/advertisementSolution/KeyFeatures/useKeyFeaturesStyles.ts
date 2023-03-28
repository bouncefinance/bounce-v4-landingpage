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
    padding: '120px 0 0',
    maxWidth: '1080px !important',
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
  icon: {
    width: 12,
    height: 12,
    marginRight: 16,
  },
  industryItem: {
    position: 'relative',
    background: '#363636',
    borderRadius: '16px',
    padding: '43px 44px 0',
    height: '252px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      margin: '0 16px',
    },
  },
  industryItem2: {
    position: 'relative',
    borderRadius: '16px',
    padding: '43px 44px 0',
    height: '252px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    cursor: 'pointer',
    background: '#F5F6F8',
    [theme.breakpoints.down('sm')]: {
      margin: '0 16px',
    },
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
    lineHeight: '34px',
  },
  industryItemContent: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 16,
    color: '#FFFFFFCC',
    marginBottom: 16,
    zIndex: 2,
  },
  industryItemContent2: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 16,
    color: '#171717',
    marginBottom: 16,
    zIndex: 2,
  },
  rightBg: {
    position: 'absolute',
    right: '0',
    top: 0,
  },
  fullImg: {
    display: 'block',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0 16px',
    },
  },
}));
