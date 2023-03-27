import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from 'src/modules/theme/const';

export const useFooterStyles = makeStyles((theme: Theme) => ({
  footerPage: {
    position: 'relative',
    background: '#232323',
    color: '#FFFFFF',
    minHeight: '100vh',
    marginTop: PARALLAX_MARGIN,
    paddingBottom: theme.spacing(10),
    pointerEvents: 'auto',
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(23),
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
    [theme.breakpoints.down('lg')]: {
      background: '#2B51DA',
    },
  },
  wrap: {
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
      background: '#2B51DA',
    },
  },
}));
