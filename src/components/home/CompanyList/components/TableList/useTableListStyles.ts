import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from 'src/modules/theme/mainTheme';

export const useTableListStyles = makeStyles<Theme>(theme => ({
  'table-list': {
    minWidth: '760px',
  },
  'table-list-header': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '26px 40px',
    background: '#EBECEF',
    borderRadius: '40px',
    '& > p': {
      textTransform: 'uppercase',
      fontFamily: FONTS.medium,
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '20px',
      letterSpacing: '0.04em',
      color: '#2B51DA',
    },
  },
  'table-list-body': {},
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    padding: '26px 40px',
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid #D7D6D9',
      borderRadius: '40px',
    },
  },
  company: {
    display: 'flex',
    alignItems: 'center',
  },
  status: {
    '& > span': {
      padding: theme.spacing(0.5, 1.5),
      background: '#EBF4EE',
      borderRadius: '14px',
      lineHeight: '20px',
      color: '#32AB54',
    },
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 12,
    '& > img': {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
    },
  },
  moreBtn: {
    marginTop: theme.spacing(8.5),
    height: 60,
    border: '1px solid #2B51DA',
    borderRadius: 30,
    fontSize: 16,
    lineHeight: '20px',
    color: '#2B51DA',
    '& .MuiButton-label': {
      padding: theme.spacing(0, 6.25),
    },
    '&:hover': {
      background: '#2B51DA',
      color: '#fff',
    },
  },
}));
