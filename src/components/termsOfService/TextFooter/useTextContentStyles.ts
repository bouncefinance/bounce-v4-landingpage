import { makeStyles, Theme } from '@material-ui/core';

export const useTextContentStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    padding: '30px 60px',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Sharp Grotesk DB Cyr Medium 22',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '20px',
    color: '#908E96',
    cursor: 'pointer'
  },
  right: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },
  rightText: {
    marginRight: '28px',
  },
}));
