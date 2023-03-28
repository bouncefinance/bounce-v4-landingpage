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
    lineHeight: '75px',
    color: '#fff',
  },
  item: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  itemLogo: {
    display: 'block',
    width: 72,
    height: 72,
    marginBottom: 24,
  },
  itemTitle: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: 24,
    lineHeight: '34px',
    color: '#FFFBFB',
    marginBottom: 16,
  },
  itemContent: {
    fontFamily: `'Inter'`,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '34px',
    color: '#fff',
  },
}));
