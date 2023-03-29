import { makeStyles, Theme } from '@material-ui/core';
// import { PARALLAX_MARGIN } from '../theme/const';

export const useWithScrollFreezingStyles = makeStyles<Theme>(theme => ({
  root: {
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  floatingWrap: {
    // paddingTop: PARALLAX_MARGIN,
    boxSizing: 'border-box',
    paddingTop: 134,
    transition: 'transform 0.5s, filter 0.5s',
    willChange: 'transform, filter',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  notFixed: {
    position: 'relative',
    zIndex: 2,
    transition: 'transform 0.2s, filter 0.2s',
  },
  fixed: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  fixedWithEffect: {
    filter: 'grayscale(0.5)',
  },
}));
