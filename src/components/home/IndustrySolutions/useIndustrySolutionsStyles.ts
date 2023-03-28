import { makeStyles, Theme } from '@material-ui/core';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useIndustrySolutionsStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background: '#fff',
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
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(23),
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
  },
  container: {
    // paddingTop: theme.spacing(2.5),
    padding: '0',
    maxWidth: '100% !important',
    [theme.breakpoints.up('md')]: {
      //   paddingTop: theme.spacing(7.5)
    },
  },
  industryCentent: {
    width: '100%',
    maxWidth: '1340px',
    margin: '0 auto',
    padding: '100px 0',
    opacity: 0,
    [theme.breakpoints.down('sm')]: {
      padding: '80px 0',
    },
  },
  industryCententShow: {
    width: '100%',
    maxWidth: '1340px',
    margin: '0 auto',
    opacity: 1,
  },
  industryTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 58,
    color: '#171717',
    textAlign: 'center',
    marginBottom: '64px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      marginBottom: '40px',
    },
  },
  industryItem: {
    position: 'relative',
    background: '#E6E8F1',
    borderRadius: '16px',
    padding: '43px 44px 0',
    height: '298px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '16px',
      marginRight: '16px',
      height: 'auto',
      padding: '32px 20px 32px',
    },
  },
  industryBg: {
    background: `url('/images/home/industry-solutions/bg.png') no-repeat center center / cover`,
  },
  industryItemIcon: {
    width: 48,
    height: 48,
    marginBottom: 24,
    [theme.breakpoints.down('sm')]: {
      width: 35,
      height: 35,
    },
  },
  industryItemTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 24,
    color: '#2B51DA',
    marginBottom: 16,
    [theme.breakpoints.down('sm')]: {
      fontSize: 17,
    },
  },
  industryItemContent: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 16,
    color: '#171717',
    marginBottom: 16,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
}));
