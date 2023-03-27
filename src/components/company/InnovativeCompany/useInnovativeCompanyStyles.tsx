import { makeStyles, Theme } from '@material-ui/core';
// import { PARALLAX_MARGIN } from 'src/modules/theme/const';

export const useInnovativeCompanyStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background: '#232323',
    color: '#fff',
    // marginTop: PARALLAX_MARGIN,
    paddingBottom: theme.spacing(10),
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#232323',
      height: 60,
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(23),
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
  },
  wrap: {
    position: 'relative',
  },
  container: {
    padding: 0,
    margin: 0,
    maxWidth: '100%',
  },
  comapnyList: {
    paddingLeft: '60px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '16px',
    },
  },
  title1: {
    marginBottom: theme.spacing(8.75),
    lineHeight: '60px',
    textAlign: 'center',
    padding: '0 24px',
    [theme.breakpoints.down('md')]: {
      fontSize: '42px'
    }
  },
  title2: {
    margin: theme.spacing(17.5, 0, 19),
    lineHeight: '60px',
    textAlign: 'center',
    padding: '0 24px',
    [theme.breakpoints.down('md')]: {
      margin: '80px 0 20px',
      fontSize: '42px'
    },
  },
  title3: {
    fontFamily: 'Sharp Grotesk DB Cyr Book 20',
    fontWeight: 400,
    fontSize: '16px',
    textAlign: 'center',
    color: '#FFFFFF',
    opacity: '0.8',
    marginBottom: '40px',
    display: 'none',
    padding: '0 24px',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  process: {
    width: '100%',
    display: 'block',
    maxWidth: '1110px',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  processMobile: {
    width: '100%',
    maxWidth: '1330px',
    display: 'none',
    padding: '0 16px',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      marginBottom: '72px',
    },
  },
}));
