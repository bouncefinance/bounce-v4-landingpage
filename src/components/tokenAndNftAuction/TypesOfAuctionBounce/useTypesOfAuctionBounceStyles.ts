import { makeStyles, Theme } from '@material-ui/core';

export const useTypesOfAuctionBounceStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    backgroundColor: '#232323',
    minHeight: '100vh',
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
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
  },
  container: {
    position: 'relative',
    width: '100% !important',
    maxWidth: '1080px !important',
    paddingTop: 93,
    paddingBottom: 120,
    display: 'flex',
    flexFlow: 'column nowrap',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
    },
  },
  title: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 44,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 80,
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      marginBottom: 40,
    },
  },
  item: {
    width: '100%',
    height: 231,
    background: '#363636',
    borderRadius: 20,
    padding: '28px 0 28px 0',
    display: 'flex',
    flexFlow: 'row nowrap',
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'column',
      alignItems: 'center',
      height: 'auto',
      padding: '24px 0px 40px',
    },
    cursor: 'pointer',
  },
  itemLeft: {
    width: 109,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImg: {
    width: 40,
    height: 40,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '21px',
    },
  },
  itemRight: {
    flex: 1,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    padding: '0 33px',
    height: 175,
    borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
    [theme.breakpoints.down('sm')]: {
      borderLeft: '0px',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      paddingTop: '24px',
    },
  },
  itemTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 16,
    color: '#fff',
    marginBottom: 6,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    lineHeight: '20px',
  },
  itemDesc: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 14,
    color: '#fff',
    lineHeight: '21px',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    opacity: 0.8,
  },
}));
