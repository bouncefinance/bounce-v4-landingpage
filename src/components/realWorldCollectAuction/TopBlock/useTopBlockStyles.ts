import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from 'src/modules/theme/mainTheme';

export const useTopBlockStyles = makeStyles<Theme>(theme => ({
  pageRoot: {
    width: '100% !important',
    margin: 0,
    minHeight: '90vh',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    background: `url('/images/tokenAndNftAuction/bg.svg') no-repeat top center / 100% auto`,
  },
  pageContainer: {
    position: 'relative',
    paddingTop: 190,
    width: '100vw !important',
    maxWidth: '1340px !important',
    display: 'flex',
    margin: '0 auto 0',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  title1: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 28,
    color: '#2B51DA',
    textAlign: 'left',
    marginBottom: 16,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  title2: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 58,
    lineHeight: '75px',
    color: '#171717',
    textAlign: 'left',
    marginBottom: 16,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      lineHeight: '41.6px',
      marginBottom: 0,
    },
  },
  text: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '32px',
    color: '#171717',
    textAlign: 'left',
    maxWidth: 970,
    margin: '40px 0 32px',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    },
  },
  btnBox: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: 183,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  leftTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 28,
    marginBottom: 48,
  },
  beginnerRow: {
    position: 'relative',
    marginBottom: '30px',
  },
  beginnerTitle: {
    fontFamily: `'Inter'`,
    fontWeight: 500,
    fontSize: 16,
    color: '#171717',
    marginBottom: 8,
    lineHeight: '24px',
  },
  beginnerTitleIcon: {
    width: 12,
    height: 12,
    marginRight: 12,
  },
  beginnerDesc: {
    fontFamily: `'Inter'`,
    fontSize: 16,
    color: '#171717',
    marginBottom: 8,
    opacity: 0.8,
    lineHeight: '24px',
  },
  beginnerRightImg: {
    height: 613,
  },
  descContent: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  descText: {
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  descImg: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 56,
      marginBottom: 80,
    },
  },
}));
