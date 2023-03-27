import { makeStyles } from '@material-ui/core';

export const useAuctionTitleStyles = makeStyles(theme => ({
  auctionTitleblock: {
    position: 'relative',
    width: '100%',
    height: '198px',
    opacity: 0,
    transform: 'translate3D(0, 50%, 0)',
  },
  auctionTitleShowblock: {
    position: 'relative',
    width: '100%',
    height: '198px',
    opacity: 1,
    transform: 'translate3D(0, 0, 0)',
  },
  content: {
    position: 'relative',
    width: '100%',
    height: '198px',
  },
  slideContent: {
    position: 'relative',
    height: '198px',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    transform: 'translate3D(0, 0, 0)',
  },
  slideTitle: {
    display: 'inline-block',
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: '58px',
    height: '76px',
    lineHeight: '76px',
    whiteSpace: 'nowrap',
  },
  sectionName: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '489px',
    height: '198px',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#232323',
    borderRadius: '28px 28px 0 0',
  },
  sectionBtn: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: '58px',
    lineHeight: '80px',
    height: '80px',
    textAlign: 'center',
    padding: '0 10px',
    border: '1px solid #fff',
    borderRadius: '20px',
  },
  titleIcon: {
    margin: '0 35px',
  },
  '@keyframes toLeft': {
    from: {
      left: '100%',
    },
    to: {
      left: 'calc(-4998px + 489px)',
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
}));
