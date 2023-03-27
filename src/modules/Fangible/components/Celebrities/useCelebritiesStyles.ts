import { makeStyles, Theme } from '@material-ui/core';
import { FONTS, PALETTE } from '../../../theme/mainTheme';

const BREAKPOINT = 'xl';

export const useCelebritiesStyles = makeStyles<Theme>(theme => ({
  root: {
    paddingTop: theme.spacing(10),
    [theme.breakpoints.up(BREAKPOINT)]: {
      paddingTop: theme.spacing(16),
    },
  },
  title: {
    fontSize: 28,
    color: PALETTE.text.light,
    paddingLeft: 38,
    maxWidth: 250,
    marginBottom: theme.spacing(3.5),
    [theme.breakpoints.up(BREAKPOINT)]: {
      fontSize: 24,
      paddingLeft: 0,
      maxWidth: 'none',
      marginBottom: theme.spacing(8),
      textAlign: 'center',
    },
  },
  list: {
    position: 'relative',
    pointerEvents: 'none',
    overflow: 'visible',
    [theme.breakpoints.up(BREAKPOINT)]: {
      paddingBottom: 300,
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'stretch',
      gap: 0,
    },
  },
  item: {
    flexGrow: 1,
    position: 'relative',
    padding: theme.spacing(1.5, 0),
    userSelect: 'none',
    [theme.breakpoints.up(BREAKPOINT)]: {
      textAlign: 'center',
      padding: theme.spacing(2),
      // TODO (Asap Rocky): remove it
      minWidth: '26%',
      '&:hover': {
        '& $itemImage': {
          opacity: 1,
        },
        '& $itemText': {
          opacity: 1,
        },
      },
    },
  },
  itemActive: {
    [theme.breakpoints.down('lg')]: {
      '& $itemImage': {
        opacity: 1,
      },
      '& $itemText': {
        opacity: 1,
      },
    },
  },
  itemName: {
    display: 'block',
    position: 'relative',
    fontSize: 32,
    fontFamily: FONTS.medium,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    pointerEvents: 'auto',
    color: 'inherit',
    height: 'auto',
    transition: 'opacity 0.3s 0.5s',
    [theme.breakpoints.down('lg')]: {
      '$itemActive &': {
        '&&': {
          zIndex: 5,
          opacity: 1,
          transition: 'none',
        },
      },
    },
    [theme.breakpoints.up(BREAKPOINT)]: {
      fontSize: 35,
      width: '100%',
      '$list:hover &': {
        opacity: 0.2,
        transitionDelay: '0s',
      },
      '&:hover': {
        '&&': {
          zIndex: 5,
          opacity: 1,
          transition: 'none',
        },
      },
    },
    '@media (min-width: 1420px)': {
      fontSize: 44,
    },
  },
  starIcon: {
    fontSize: 18,
    marginRight: 18,
    verticalAlign: 'middle',
    [theme.breakpoints.up(BREAKPOINT)]: {
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translate(-50%, -50%)',
      marginRight: 0,
      transition: 'opacity 0.3s 0.5s',
      '$list:hover &': {
        opacity: 0.2,
        transitionDelay: '0s',
      },
      // TODO (Asap Rocky): return it
      // '$item:nth-child(1) &, $item:nth-child(5) &': {
      //   display: 'none',
      // },
      // TODO (Asap Rocky): remove it
      '$item:nth-child(1) &, $item:nth-child(4) &': {
        display: 'none',
      },
    },
  },
  itemContent: {
    maxHeight: 0,
    overflow: 'hidden',
    textAlign: 'center',
    transition: 'max-height 0.5s',
    [theme.breakpoints.down('lg')]: {
      '$itemActive &': {
        maxHeight: 1000,
      },
    },
    [theme.breakpoints.up(BREAKPOINT)]: {
      '$item:hover &': {
        maxHeight: 1000,
      },
    },
  },
  itemImage: {
    paddingTop: 18,
    [theme.breakpoints.up(BREAKPOINT)]: {
      paddingTop: 0,
      position: 'absolute',
      left: '50%',
      top: '50%',
      zIndex: 2,
      transform: 'translate(-50%, -50%)',
      opacity: 0,
      transition: 'opacity 0.3s',
    },
    '& img': {
      maxWidth: '100%',
      height: 'auto',
      [theme.breakpoints.up(BREAKPOINT)]: {
        maxWidth: 'none',
      },
    },
  },
  itemText: {
    paddingTop: 12,
    fontSize: 18,
    textAlign: 'left',
    maxWidth: 350,
    margin: '0 auto',
    [theme.breakpoints.up(BREAKPOINT)]: {
      paddingTop: 0,
      position: 'absolute',
      left: '50%',
      top: 230,
      maxWidth: 'none',
      width: '100%',
      opacity: 0,
      transform: 'translateX(-50%)',
      transition: 'opacity 0.3s',
      padding: theme.spacing(2),
    },
  },
}));
