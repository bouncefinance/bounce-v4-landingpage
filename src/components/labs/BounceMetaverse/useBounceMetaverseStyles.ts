import { makeStyles, Theme } from '@material-ui/core';

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
      background:
        'radial-gradient(47.33% 10.51% at 0% 100%, #582584 0%, #60408E 100%);',
      minHeight: 714,
      paddingBottom: 0,
    },
    [theme.breakpoints.up('md')]: {
      background:
        'radial-gradient(47.33% 10.51% at 0% 100%, #582584 0%, #60408E 100%);',
      minHeight: 714,
      paddingBottom: 0,
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: 800,
      background:
        'linear-gradient(180deg, #592187 0%, #632F86 39.73%, #782888 43.28%, #993888 46.74%, #A83888 50.34%, #C04090 54.75%, #D2528E 61.44%, #D86898 72.98%, #D87898 86.2%, #DA7AA6 100%);',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: 96,
      minHeight: 800,
      background:
        'linear-gradient(180deg, #592187 0%, #632F86 39.73%, #782888 43.28%, #993888 46.74%, #A83888 50.34%, #C04090 54.75%, #D2528E 61.44%, #D86898 72.98%, #D87898 86.2%, #DA7AA6 100%);',
    },
  },
  container: {
    position: 'relative',
  },
  wrap: {
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.up('lg')]: {
      minHeight: 700,
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
      overflow: 'hidden'
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
}));
