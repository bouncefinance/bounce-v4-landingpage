import { makeStyles, Theme } from '@material-ui/core';
import { FONTS, PALETTE } from 'src/modules/theme/mainTheme';
export const useBounceMetaverseStyles = makeStyles<Theme>(theme => ({
  metaverseWrap: {
    position: 'relative',
    marginTop: 86,
    paddingBottom: theme.spacing(10),
    pointerEvents: 'auto',
    paddingTop: 60,
    // borderRadius: '60px 60px 0 0',
    [theme.breakpoints.down('md')]: {
      marginTop: 79,
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 714,
      paddingBottom: 0,
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 714,
      paddingBottom: 0,
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: 800,
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: 96,
      minHeight: 800,
    },
  },
  container: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '100%',
    maxWidth: '1110px',
    margin: '0 auto',
    height: '100%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wrap: {
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(ff30001-0110.png)`,
  },
  video: {
    position: 'relative',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  videoSm: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  videoLg: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  sideInfo: {
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      zIndex: 2,
      maxWidth: '43%',
    },
    [theme.breakpoints.down('sm')]: {
      '&>div:first-child': {
        paddingRight: 0,
      },
    },
  },
  gifWrap: {
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      marginTop: 40,
    },

    [theme.breakpoints.up('md')]: {
      width: '100vw',
      marginTop: 40,
    },
    [theme.breakpoints.up('lg')]: {
      width: 800,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      marginTop: 0,
      maxHeight: '100%',
      overflow: 'hidden',
    },
    [theme.breakpoints.up('xl')]: {
      width: 800,
      position: 'absolute',
      top: 0,
      right: 0,
      marginTop: 0,
    },
    '&>div:first-child': {
      marginTop: 0,
    },
    '& img': {
      width: '100%',
      // borderRadius: '0 60px 0 0',
      transform: 'translateX(0px) !important',
    },
  },
  gifWrapMobile: {
    width: '100%',
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      overflow: 'hidden',
    },
  },
  metaverseCityWrap: {
    background: '#000000',
    padding: '160px 0',
    color: '#ffffff',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '48px 0 60px',
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 714,
      padding: '48px 0 60px',
    },
  },
  cityInfo: {
    margin: '30px auto 46px',
    maxWidth: 828,
    fontWeight: 500,
    fontSize: 16,
    textAlign: 'center',
  },
  canvas: {
    outline: 'none',
    border: 'none',
    touchAction: 'none',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 200,
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: 400,
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      height: 600,
    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      height: 800,
    },
  },
  root: {
    marginTop: theme.spacing(4.5),
    color: PALETTE.text.light,
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(8),
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(12.5),
    },
  },

  brand: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(7.5),
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  brandLogo: {
    fontSize: 37,
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      marginRight: 17,
    },
  },
  brandName: {
    fontSize: 18,
    [theme.breakpoints.up('lg')]: {
      fontSize: 24,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  title: {
    idth: 638,
    fontSize: 58,
    fontFamily: FONTS.medium,
    fontWeight: 500,
    marginBottom: theme.spacing(5),
    transitionDelay: '0.2s',
    [theme.breakpoints.up('lg')]: {
      fontSize: 58,
      lineHeight: '66px',
      marginBottom: theme.spacing(4),
      maxWidth: 540,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      lineHeight: '41.6px',
      textAlign: 'center',
    },
  },
  titleSm: {
    fontSize: 30,
    [theme.breakpoints.up('lg')]: {
      fontSize: 36,
      lineHeight: '54px',
    },
  },
  text: {
    fontSize: 18,
    transitionDelay: '0.4s',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },

  btnWrap: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    transitionDelay: '0.6s',
    [theme.breakpoints.down('md')]: {
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      width: '100%',
      height: '60px',
      textAlign: 'center',
      lineHeight: '60px',
    },
  },
  btn: {
    height: 60,
    lineHeight: '20px',
    background: ' #fff',
    borderRadius: 30,
    color: '#232323',
    '& .MuiButton-label': {
      padding: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  brandContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  tileComingSoon: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    fontWeight: 700,
    display: 'inline-block',
  },
}));
