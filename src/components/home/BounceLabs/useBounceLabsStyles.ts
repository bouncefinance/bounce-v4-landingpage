import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from 'src/modules/theme/const';

export const useBounceLabsStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background: '#2B51DA',
    color: '#fff',
    minHeight: '100vh',
    marginTop: PARALLAX_MARGIN,
    // paddingBottom: theme.spacing(10),
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#2B51DA',
      height: 60,
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
  },
  wrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    paddingTop: 20,
    [theme.breakpoints.up('md')]: {
      paddingTop: 60,
    },
  },
  title: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 58,
    marginBottom: 71,
    paddingLeft: 80,
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      paddingLeft: 0,
      marginBottom: 40,
      textAlign: 'center',
    },
  },
  description: {
    marginBottom: 20,
    fontSize: 24,
    lineHeight: '36px',
    [theme.breakpoints.up('md')]: {
      marginBottom: 30,
      fontSize: 48,
      lineHeight: '60px',
      maxWidth: 768,
    },
  },
  detail: {
    marginBottom: 52,
    fontSize: 16,
    lineHeight: '26px',
    color: 'rgba(255, 255, 255, 0.8)',
    [theme.breakpoints.up('md')]: {
      marginBottom: 80,
      maxWidth: 854,
      lineHeight: '30px',
      fontSize: 20,
    },
  },
  imgRow1: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 31,
  },
  imgRow2: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 31,
  },
  imgRow3: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 31,
  },
  rowImg: {
    dispaly: 'block',
    width: 220,
    height: 86,
    margin: '0 10px',
    background: '#fff',
    borderRadius: '20px',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '58px',
      borderRadius: '13px',
      margin: 0,
    },
  },
  rowImgSm: {
    padding: theme.spacing(1),
    background: '#fff',
    borderRadius: '20px',
    height: '58px',
    width: '100%',
  },

  imgContainer: {
    width: '100%',
    maxWidth: 1280,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,220px)',
    gridGap: '30px 20px',
    marginBottom: 100,
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr',
      gridGap: '23px 13px',
    },
  },
}));
