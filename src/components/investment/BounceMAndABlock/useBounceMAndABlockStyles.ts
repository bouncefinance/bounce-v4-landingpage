import { makeStyles } from '@material-ui/core';
import { PALETTE } from 'src/modules/theme/mainTheme';

export const useBounceMAndABlockStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: '#232323',
    color: '#FFFFFF',
    minHeight: '100vh',
    paddingBottom: theme.spacing(14),
    paddingTop: 60,
    pointerEvents: 'auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      top: -59,
      width: '100%',
      background: '#232323',
      height: 60,
      borderRadius: '28px 28px 0 0',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(23),
      '&::before': {
        borderRadius: '60px 60px 0 0',
      },
    },
    '& ::selection': {
      background: PALETTE.background.default,
      color: PALETTE.text.reverse,
    },
  },
  wrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    // paddingRight: 0,
  },
  title: {
    lineHeight: '60px',
    textAlign: 'center',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
    },
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    margin: '20px auto 0',
  },
  smallTitle: {
    fontSize: 40,
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
    },
  },
  mergeProcess: {
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 70,
    textAlign: 'center',
    fontFamily: 'Sharp Grotesk DB Cyr Medium 22',
    fontSize: '28px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '36px',
    },
  },
  processBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexFlow: 'column nowrap',
    },
  },
  arrow1: {
    position: 'relative',
    width: 96,
    height: 2,
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
    marginLeft: '30px',
    display: 'block',
    '& img': {
      position: 'absolute',
      right: '-2px',
      top: -5,
      width: 12,
      height: 12,
      transform: 'rotateZ(-90deg)',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  arrow2: {
    position: 'relative',
    width: 96,
    height: 2,
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
    marginRight: '30px',
    display: 'block',
    '& img': {
      position: 'absolute',
      right: '-2px',
      top: -5,
      width: 12,
      height: 12,
      transform: 'rotateZ(-90deg)',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  arrow3: {
    position: 'relative',
    width: 2,
    height: 32,
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
    margin: '12px 0 25px',
    display: 'none',
    '& img': {
      position: 'absolute',
      bottom: '-2px',
      left: -5,
      width: 12,
      height: 12,
      transform: 'rotateZ(0deg)',
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  centerCase: {
    width: '200px',
    height: '200px',
    display: 'block',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  centerCaseMobile: {
    width: '93px',
    height: '93px',
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  btnBox: {
    fontFamily: 'Sharp Grotesk DB Cyr Medium 22',
    width: 188,
    height: 70,
    background: '#363636',
    boxShadow: '0px 0px 3.06981px 1.53491px rgba(0, 0, 0, 0.05)',
    borderRadius: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    [theme.breakpoints.down('md')]: {
      borderRadius: 20,
    },
  },
  line: {
    margin: '0 20px',
  },
  feature: {
    margin: '87px 0 48px',
  },
  featureBox: {
    minHeight: 134,
    background: '#363636',
    borderRadius: 20,
    padding: '32px 28px',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      '&::before': {
        content: "' '",
        width: 12,
        height: 12,
        background:
          'radial-gradient(16.86% 22.48% at 29.17% 29.17%, #C2C2C2 0%, rgba(102, 102, 102, 0) 100%),#FFFFFF',
        boxShadow: 'inset 0px 0px 2px rgba(255, 255, 255, 0.15)',
        transform: 'matrix(-1, 0, 0, 1, 0, 0)',
        borderRadius: '50%',
        display: 'inline-block',
        marginBottom: 20,
      },
    },
  },
  featureTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    '&::before': {
      content: "' '",
      width: 12,
      height: 12,
      background:
        'radial-gradient(16.86% 22.48% at 29.17% 29.17%, #C2C2C2 0%, rgba(102, 102, 102, 0) 100%),#FFFFFF',
      boxShadow: 'inset 0px 0px 2px rgba(255, 255, 255, 0.15)',
      transform: 'matrix(-1, 0, 0, 1, 0, 0)',
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: 12,
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      '&::before': {
        display: 'none',
      },
    },
  },
  featureInfo: {
    color: 'rgba(255, 255, 255, 0.8)',
    paddingLeft: 24,
    marginTop: 8,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      textAlign: 'center',
    },
  },
}));
