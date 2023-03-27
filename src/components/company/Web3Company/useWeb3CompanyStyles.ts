import { makeStyles, Theme } from '@material-ui/core';

export const useWeb3CompanyStyles = makeStyles<Theme>(theme => ({
  item: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    background: '#363636',
    borderRadius: 20,
    [theme.breakpoints.down('md')]: {
      flexFlow: 'column nowrap',
    },
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
  logo: {
    marginRight: 16,
    width: 90,
    height: 90,
    borderRadius: 76,
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      marginBottom: 12,
    },
  },
  name: {
    lineHeight: '28px',
    marginBottom: 0,
    marginRight: '10px',
    [theme.breakpoints.down('md')]: {
      marginBottom: 12,
      marginRight: '0',
      textAlign: 'center',
    },
  },
  top: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '6px',
  },
  bottom: {
    display: 'flex',
    alignItems: 'center',
  },
  status: {
    marginRight: 8,
    borderRadius: 14,
    '& .MuiChip-label': {
      paddingTop: 4,
      paddingBottom: 4,
      fontSize: 12,
      lineHeight: '20px',
      letterSpacing: '0.02em',
    },
    [theme.breakpoints.down('md')]: {
      width: '57px',
      margin: '0 auto',
      marginTop: '12px',
    },
  },
  seed: {
    background: 'rgba(50, 171, 84, 0.06)',
    '& .MuiChip-label': {
      color: '#32AB54',
    },
  },
  introduction: {
    display: '-webkit-box',
    width: '100%',
    lineHeight: '20px',
    textTransform: 'uppercase',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '40px',
    webkitLineClamp: 2,
    wordBreak: 'break-all',
    [theme.breakpoints.down('md')]: {
      height: '80px',
      maxWidth: '100%',
      marginTop: '8px',
      fontSize: '14px',
      lineHeight: '20px',
      whiteSpace: 'unset',
      overflow: 'unset',
      textOverflow: 'unset',
      webkitLineClamp: 4,
    },
  },
}));
