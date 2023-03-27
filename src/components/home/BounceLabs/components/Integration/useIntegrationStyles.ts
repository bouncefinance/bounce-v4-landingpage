import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from 'src/modules/theme/mainTheme';

export const useIntegrationStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(22.25)
  },
  list: {
    position: 'relative',
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid #FFFFFF',
    borderRadius: 130,
  },
  item: {
    padding: theme.spacing(3.5, 3.25),
    lineHeight: '20px',
    background: '#fff',
    borderRadius: 48,
  },
  arrow: {
    position: 'absolute',
    left: '50%',
    top: '100%',
    width: 1,
    height: 60,
    background: '#fff',
    borderRadius: 50,
    '& img': {
      position: 'absolute',
      top: 50,
      left: -6,
      width: 12,
      height: 12,
    }
  },
  btnWrap: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(9)
  },
  btn: {
    padding: theme.spacing(4.5, 5.5),
    borderRadius: 48,
    fontFamily: FONTS.medium,
    fontWeight: 500,
    fontSize: 28,
    lineHeight: '20px',
    color: '#232323',
  }
}));