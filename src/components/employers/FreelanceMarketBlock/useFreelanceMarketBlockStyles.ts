import { makeStyles } from '@material-ui/core';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useFreelanceMarketBlockStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: '#FFFFFF',
    color: '#000000',
    minHeight: '100vh',
    // paddingBottom: theme.spacing(14),
    paddingTop: 60,
    pointerEvents: 'auto',
    boxSizing: 'border-box',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#FFFFFF',
      height: 60,
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      // paddingBottom: theme.spacing(23),
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
    '& ::selection': {
      background: PALETTE.background.default,
      color: PALETTE.text.reverse,
    },
  },
  wrap: {
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      padding: '0 16px',
    },
  },
  container: {
    rowGap: 16,
    marginBottom: '90px'
  },
  title: {
    lineHeight: '60px',
    color: '#171717',
    marginBottom: 60,
  },
  cardBox: {
    border: '1px solid #D7D6D9',
    minHeight: 397,
    borderRadius: 20,
    width: '100%',
    cursor: 'pointer',
    boxShadow: 'none',
  },
  cardLink: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  cardImg: {
    height: 205,
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: 20,
    },
  },
  cardDetail: {
    margin: '14px 20px 24px',
  },
  personInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
  },
  userName: {
    marginLeft: 12,
  },
  likeBox: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'rgba(70, 6, 223, 0.1)',
    backdropFilter: 'blur(2.5px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    margin: '12px 0 24px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
  },
  price: {
    fontSize: 22,
    lineHeight: '30px',
  },
}));
