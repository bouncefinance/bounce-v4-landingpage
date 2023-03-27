import { makeStyles } from '@material-ui/core';

export const usePartnersStyles = makeStyles(theme => ({
  title: {
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    marginBottom: 72,
    '& h3': {
      fontSize: '24px',
      lineHeight: '36px',
      [theme.breakpoints.up('md')]: {
        textAlign: 'right',
        fontSize: '36px',
        lineHeight: '50px',
        width: '60%',
      },
    },
  },
  iconsContainer: {
    display: 'inline-block',
    height: 86,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 24,
  },
  '@keyframes toLeft': {
    from: {
      left: '50%',
    },
    to: {
      left: '-3160px',
    },
  },
  iconsBox: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    height: 'inherit',
    position: 'absolute',
    left: '0%',
    top: '0%',
    transition: 'left 0.5s ease-out',
  },
  toLeft: {
    animation: `$toLeft 24s linear infinite`,
    [theme.breakpoints.down('md')]: {
      animation: `$toLeft 24s linear infinite`,
    },
  },
//   '@keyframes secondary': {
//     'from': {
//       left: '100%',
//     },
//     to: {
//       left: '0%',
//     }
//   },
//   secondary: {
//     animation: `$secondary 18s linear infinite`,
//   },
  '@keyframes toRight': {
    from: {
      left: '-3160px',
    },
    to: {
      left: '0',
    },
  },
  toRight: {
    animation: `$toRight 24s linear infinite`,
    [theme.breakpoints.down('md')]: {
      animation: `$toRight 24s linear infinite`,
    },
  },

  iconItem: {
    display: 'inline-block',
    verticalAlign: 'middle',
    outline: 'none',
    marginRight: 20,
  },
  icon: {
    display: 'flex',
    width: 220,
    height: 86,
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
  },
}));
