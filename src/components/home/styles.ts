import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 900,
    position: 'relative',
    marginTop: 95,
    marginBottom: -134,
    backgroundImage: 'url(/images/home/pumpkin/pumpkin_bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    paddingLeft: 200,
    [theme.breakpoints.down('lg')]: {
      marginTop: 87,
      paddingLeft: 50,
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 79,
      paddingLeft: 0,
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '24px',
    // maxWidth: '603px',
  },
  title: {
    fontFamily: 'Public Sans',
    fontWeight: 700,
    fontSize: '72px',
    lineHeight: '0.9722222222222222em',
    color: '#5A3D1D',
    margin: 0,
  },
  subtitle: {
    fontFamily: 'Public Sans',
    fontWeight: 500,
    fontSize: '40px',
    lineHeight: '1.75em',
    color: '#171717',
    margin: 0,
  },
  button: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '1.25em',
    backgroundColor: '#5A3D1D',
    color: '#FFFFFF',
    borderRadius: '30px',
    padding: '12px 24px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#4A3317',
    },
  },
}));
