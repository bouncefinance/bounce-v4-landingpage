import { Theme, makeStyles } from '@material-ui/core';

export const useHomeDialogStyles = makeStyles((theme: Theme) => ({
  dialogStyle: {
    '& .MuiPaper-root': {
      borderRadius: 20,
      [theme.breakpoints.up('sm')]: {
        padding: 24,
      },
      [theme.breakpoints.down('sm')]: {
        padding: '12px 12px 40px 12px',
      },
      '& .MuiDialogContent-root': {
        [theme.breakpoints.up('md')]: {
          padding: '32px 120px 36px',
        },
        [theme.breakpoints.down('md')]: {
          padding: '32px 0px 36px',
        },
        [theme.breakpoints.down('sm')]: {
          padding: 0,
        },
      },
    },
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 820,
    },
    '& .MuiDialogContent-root': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      [theme.breakpoints.up('sm')]: {
        gap: 24,
      },
      [theme.breakpoints.down('sm')]: {
        gap: 0,
      },
    },
    '& .MuiDialog-paperScrollPaper': {
      [theme.breakpoints.up('sm')]: {
        maxHeight: 'calc(100% - 64px)',
      },
      [theme.breakpoints.down('sm')]: {
        maxHeight: '100%',
      },
    },
  },
  dialogHeader: {
    display: 'flex',
    justifyContent: 'end',
  },
  dialogHeaderBtn: {
    width: 24,
    height: 24,
    border: 'none',
    borderRadius: 0,
    '&>img': {
      width: 24,
      height: 24,
    },
  },
  dialogTitle: {
    color: '#2B51DA',
    leadingTrim: 'both',
    textEdge: 'cap',
    fontVariantNumeric: 'lining-nums proportional-nums',
    fontFamily: 'Sharp Grotesk DB Cyr Medium 22',
    marginBottom: 16,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '130%',
    letterSpacing: '-0.88px',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: 44,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  content: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '120%' /* 26.4px */,
    letterSpacing: '-0.44px',

    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      fontSize: 22,
      maxWidth: '100%',
      marginTop: 10,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      maxWidth: '80%',
      marginTop: 0,
    },
  },
  tokenBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 16,
    '&>img': {
      [theme.breakpoints.up('sm')]: {
        width: 48,
        height: 48,
      },
      [theme.breakpoints.down('sm')]: {
        width: 36,
        height: 36,
      },
    },
  },
  animationContainer: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'end',
    overflow: 'hidden',
    '&>div': {
      width: 'max-content',
      height: 'max-content',
    },
  },
  button: {
    borderRadius: 30,
    background: '#2B51DA',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '150%',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
      padding: '18px 47px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      padding: '20px',
      marginTop: 20,
    },
  },
  blockBall: {
    position: 'relative',
    transformOrigin: 'bottom',
    animation: '$toBall 2s linear infinite',
    marginBottom: '30px',
    [theme.breakpoints.up('sm')]: {
      width: 157,
      height: 157,
    },
    [theme.breakpoints.down('sm')]: {
      width: 127,
      height: 127,
    },
  },
  scaleImg: {
    width: 52,
    height: 77,
    transformOrigin: 'bottom',
    animation: '$toScale 2s linear infinite',
  },
  '@keyframes toScale': {
    '0%': {
      transform: 'scaleY(.71)',
    },
    '10%': {
      transform: 'scaleY(.71)',
    },
    '20%': {
      transform: 'scaleY(1)',
    },
    '30%': {
      transform: 'scaleY(1.03)',
    },
    '40%': {
      transform: 'scaleY(1)',
    },
    '45%': {
      transform: 'scaleY(0.97)',
    },
    '50%': {
      transform: 'scaleY(1)',
    },
    '55%': {
      transform: 'scaleY(1.03)',
    },
    '60%': {
      transform: 'scaleY(1)',
    },
    '70%': {
      transform: 'scaleY(0.97)',
    },
    '80%': {
      transform: 'scaleY(1)',
    },
    '90%': {
      transform: 'scaleY(0.71)',
    },
    '100%': {
      transform: 'scaleY(0.71)',
    },
  },
  '@keyframes toBall': {
    '0%': {
      transform: 'translateY(62px)',
    },
    '10%': {
      transform: 'translateY(62px)',
    },
    '20%': {
      transform: 'translateY(-20px)',
    },
    '30%': {
      transform: 'translateY(-20px)',
    },
    '40%': {
      transform: 'translateY(-14px)',
    },
    '45%': {
      transform: 'translateY(-20px)',
    },
    '50%': {
      transform: 'translateY(-26px)',
    },
    '55%': {
      transform: 'translateY(-20px)',
    },
    '60%': {
      transform: 'translateY(-23px)',
    },
    '70%': {
      transform: 'translateY(-20px)',
    },
    '80%': {
      transform: 'translateY(-23px)',
    },
    '90%': {
      transform: 'translateY(-20px)',
    },
    '100%': {
      transform: 'translateY(62px)',
    },
  },
}));
