import { makeStyles, Theme } from '@material-ui/core';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useDesignedForEveryoneStyle = makeStyles<Theme>(theme => ({
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
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(23),
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
  },
  container: {
    paddingTop: theme.spacing(2.5),
    padding: '0',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(7.5),
    },
  },
  title: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 58,
    textAlign: 'center',
    marginBottom: 115,
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      marginTop: 52,
      marginBottom: 40,
    },
  },
  content: {
    position: 'relative',
    width: '100%',
    paddingBottom: 102,
  },
  bothTitle: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 109,
    width: 'calc(100% - 130px)',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      position: 'static',
      width: 'auto',
    },
  },
  leftTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 28,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      margin: '0 16px',
    },
  },
  centerLine: {
    flex: 1,
    margin: '0 35px',
    height: 1,
    borderBottom: `1px dashed #e3e3e3`,
    [theme.breakpoints.down('sm')]: {
      margin: '0 16px',
    },
  },
  rightTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 28,
    color: '#2B51DA',
    [theme.breakpoints.down('sm')]: {
      margin: '0 16px',
      fontSize: 18,
      color: '#FFFFFF',
    },
  },
  beginnerRow: {
    position: 'relative',
    marginBottom: '30px',
  },
  beginnerTitle: {
    fontFamily: `'Inter'`,
    fontWeight: 500,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
    lineHeight: '24px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 16px',
    },
  },
  beginnerTitleIcon: {
    width: 12,
    height: 12,
    marginRight: 12,
  },
  beginnerDesc: {
    fontFamily: `'Inter'`,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
    opacity: 0.8,
    lineHeight: '24px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 16px',
    },
  },
  beginnerRightImg: {
    height: 613,
    [theme.breakpoints.down('sm')]: {
      height: 300,
      margin: '0 0 0 16px',
    },
  },
}));
