import { fade, makeStyles, Theme } from '@material-ui/core';
import { PALETTE } from '../../../theme/mainTheme';

export const useChainItemStyles = makeStyles<Theme>(theme => ({
  root: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    cursor: 'pointer',
    pointerEvents: 'auto',
    position: 'relative',
    color: PALETTE.text.light,
    transition: 'background-color 0.2s, border-color 0.2s',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    border: `1px solid ${fade(theme.palette.common.white, 0.3)}`,
    [theme.breakpoints.up('xl')]: {
      width: 254,
      height: 254,
    },
    '&:hover': {
      borderColor: 'transparent',
      backgroundColor: '#404040',
    },
  },
  icon: {
    fontSize: 22,
    position: 'absolute',
    top: '50%',
    left: '50%',
    lineHeight: 0,
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.up('sm')]: {
      fontSize: 26,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 37,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 42,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 37,
    },
    '& > svg': {
      fontSize: 'inherit',
    },
  },
  label: {
    fontSize: 11,
    position: 'absolute',
    top: 'calc(50% + 15px)',
    left: '20%',
    right: '20%',
    textAlign: 'center',
    opacity: 0,
    transform: 'translateY(1em)',
    transition: 'opacity 0.2s, transform 0.3s',
    [theme.breakpoints.up('sm')]: {
      top: 'calc(50% + 17px)',
      fontSize: 14,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
      top: 'calc(50% + 30px)',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
      top: 'calc(50% + 40px)',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
      top: 'calc(50% + 30px)',
    },
    ':hover > &': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));
