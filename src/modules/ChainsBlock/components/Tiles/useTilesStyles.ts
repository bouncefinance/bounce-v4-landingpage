import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../../../theme/mainTheme';

export const useTilesStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    transform: 'translateY(-148px)',
    marginTop: 0,
    marginBottom: 0,
    [theme.breakpoints.up('md')]: {
      transform: 'translateY(-216px)',
    },
  },
  tileItem: {
    [theme.breakpoints.up('xl')]: {
      '&&': {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    '&:nth-child(2)': {
      transitionDelay: '0.3s',
    },
    '&:nth-child(3)': {
      transitionDelay: '0.6s',
    },
    '&:nth-child(4)': {
      transitionDelay: '0.9s',
    },
  },
  tileItemContent: {
    display: 'block',
    borderRadius: 12,
    position: 'relative',
    padding: theme.spacing(1.5, 3),
    height: '100%',
    minHeight: 176,
    overflow: 'hidden',
    textDecoration: 'none',
    cursor: 'default',
    '&:hover $tileContent': {
      transform: 'translateY(0)',
    },
    '&:hover $tileTitle, &:hover $tileBtn, &:hover $tileMore': {
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(2.5),
      },
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: 21,
      padding: theme.spacing(4.5),
      minHeight: 312,
    },
  },
  tileTop: {
    display: 'flex',
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tileLogo: {
    fontSize: 26,
    [theme.breakpoints.up('md')]: {
      fontSize: 38,
    },
  },
  tileComingSoon: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    fontWeight: 700,
    textAlign: 'right',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-block',
    },
  },
  tileContent: {
    position: 'absolute',
    bottom: '-2px',
    transform: 'translateY(100%)',
    transition: 'transform 0.2s',
  },
  tileTitle: {
    position: 'absolute',
    bottom: '100%',
    fontFamily: FONTS.medium,
    fontWeight: 500,
    fontSize: 18,
    marginBottom: theme.spacing(1.5),
    transition: 'margin-bottom 0.2s',
    [theme.breakpoints.up('md')]: {
      fontSize: 24,
      marginBottom: theme.spacing(4.5),
    },
  },
  tileBtn: {
    marginBottom: theme.spacing(1.2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4.5),
    },
  },
  tileMore: {
    display: 'block',
    fontSize: 14,
    padding: 0,
    color: 'inherit',
  },

  tileAuction: {
    '&&': {
      backgroundColor: '#3A3A3A',
    },
  },
  tileFangible: {
    '&&': {
      backgroundColor: '#ae6fff',
      color: '#4F3076',
    },
  },
  tilePolkadot: {
    '&&': {
      backgroundColor: '#ff699f',
      color: '#7B2141',
    },
  },
  tileToolbox: {
    '&&': {
      backgroundColor: '#F4EDA8',
      color: '#665D11',
    },
  },
}));
