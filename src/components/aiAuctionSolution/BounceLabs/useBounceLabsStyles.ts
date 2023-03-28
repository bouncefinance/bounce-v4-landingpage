import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from 'src/modules/theme/const';

export const useBounceLabsStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    background: '#2B51DA',
    color: '#fff',
    minHeight: '100vh',
    // paddingBottom: theme.spacing(10),
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -19,
      width: '100%',
      background: '#2B51DA',
      height: 20,
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
    paddingTop: 120,
  },
  title: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 58,
    color: '#fff',
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
    width: 220,
    height: 86,
    margin: '0 10px',
  },
}));
