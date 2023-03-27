import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from 'src/modules/theme/mainTheme';

export const useTableListStyles = makeStyles<Theme>(theme => ({
  'table-list': {
    minWidth: '760px'
  },
  'table-list-header': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '26px 40px',
    background: '#363636',
    borderRadius: '40px',
    '& > p': {
      textTransform: 'uppercase',
      fontFamily: FONTS.medium,
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '20px',
      letterSpacing: '0.04em',
      color: '#fff',
    },
  },
  'table-list-body': {},
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    padding: '26px 40px',
    '&:hover': {
      border: '1px solid #D7D6D9',
      borderRadius: '40px',
    }
  },
  company: {
    display: 'flex',
    alignItems: 'center',
  },
  status: {
    '& > span': {
      padding: theme.spacing(0.5, 1.5),
      background: 'rgba(50, 171, 84, 0.06)',
      borderRadius: '14px',
      lineHeight: '20px',
      color: '#32AB54',
    }
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 12,
    '& > img': {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
    }
  },
  moreBtn: {
    marginTop: theme.spacing(8.5),
    height: 60,
    border: '1px solid #fff',
    borderRadius: 30,
    fontSize: 16,
    lineHeight: '20px',
    color: '#fff',
    '& .MuiButton-label': {
      padding: theme.spacing(0, 6.25),
    },
    '&:hover': {
      background: '#fff',
      color: '#171717',
    },
  },
}));