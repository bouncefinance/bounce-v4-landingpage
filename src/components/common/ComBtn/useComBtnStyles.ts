import { makeStyles, Theme } from '@material-ui/core';

export const useComBtnStyles = makeStyles<Theme>(theme => ({
  btn: {
    display: 'inline-block',
    height: 60,
    lineHeight: '60px',
    textAlign: 'center',
    background: '#2B51DA',
    borderRadius: '30px',
    color: '#fff',
    padding: '0 70px',
    cursor: 'pointer',
    border: '1px solid #2B51DA',
    transition: 'all 0.3s',
    '&:hover': {
      background: '#fff',
      color: '#2B51DA',
      border: '1px solid #2B51DA',
    },
    [theme.breakpoints.down('sm')]: {
      width: '158px',
      padding: '0 40px',
    },
  },
  notHightLight: {
    background: '#fff',
    color: '#2B51DA',
    border: '1px solid #2B51DA',
    '&:hover': {
      background: '#2B51DA',
      color: '#fff',
      border: '1px solid #fff',
    },
  },
  disabled: {
    color: '#fff',
    background: '#e3e3e3',
  },
}));
