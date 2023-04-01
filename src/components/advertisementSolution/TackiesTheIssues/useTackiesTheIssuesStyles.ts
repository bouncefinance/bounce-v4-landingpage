import { makeStyles, Theme } from '@material-ui/core';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useTackiesTheIssuesStyles = makeStyles<Theme>(theme => ({
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
    maxWidth: '1110px !important',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      padding: '80px 0 150px',
    },
  },
  industryTitle: {
    width: '518px',
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 44,
    color: '#fff',
    textAlign: 'center',
    margin: '0 auto 40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      margin: '0 16px 40px',
      width: 'auto',
    },
  },
  paginationBox: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 32,
  },
  paginationBtn: {
    cursor: 'pointer',
    width: 48,
    height: 48,
    margin: '0 12px',
  },
  paginationDisabled: {
    cursor: 'not-allowed',
  },
  industryItem: {
    position: 'relative',
    background: '#E6E8F1',
    borderRadius: '16px',
    padding: '24px 24px 0',
    minHeight: '360px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '306px',
    },
  },
  industryItem2: {
    background: '#F5F6F8',
  },
  industryBg: {
    background: `url('/images/home/industry-solutions/bg.png') no-repeat center center / cover`,
  },
  itemIcon: {
    width: 64,
    height: 64,
    marginBottom: 14,
  },
  industryItemTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 18,
    color: '#171717',
    marginBottom: 14,
    wordBreak: 'break-all',
  },
  industryItemContent: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 14,
    color: '#171717',
  },
  mobileScroll: {
    display: 'flex',
    overflowX: 'auto',
    width: '100%',
    padding: '0 16px',
  },
  mobileScrollItem: {
    display: 'inline-block',
    width: '90%',
    margin: '0 4px',
  },
  bottomLine: {
    position: 'relative',
    '&:after': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 3,
      background: '#2B51DA',
      borderRadius: '3px',
    },
  },
}));
