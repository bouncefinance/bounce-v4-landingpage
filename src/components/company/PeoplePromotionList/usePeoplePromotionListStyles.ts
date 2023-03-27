import { makeStyles, Theme } from '@material-ui/core';

export const usePeoplePromotionListStyles = makeStyles<Theme>(theme => ({
  item: {
    marginRight: 20,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    background: '#F5F6F8',
    borderRadius: 20,
    [theme.breakpoints.down('md')]: {
      flexFlow: 'column nowrap',
    },
  },
  avatar: {
    marginRight: 16,
    width: 90,
    height: 90,
    borderRadius: 16,
  },
  content: {
    width: 'calc(100% - 106px)',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  contentMobile: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
    },
  },
  name: {
    lineHeight: '28px',
    color: '#2B51DA',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      fontSize: '16px',
      lineHeight: '28px',
      marginBottom: '4px',
    },
  },
  position: {
    marginBottom: 12,
    lineHeight: '21px',
    color: 'rgba(0, 0, 0, 0.8)',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      fontSize: '14px',
      marginBottom: '10px',
    },
  },
  introduction: {
    lineHeight: '21px',
    color: 'rgba(0, 0, 0, 0.8)',
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      fontSize: '14px',
      color: '#171717'
    },
  },
}));
