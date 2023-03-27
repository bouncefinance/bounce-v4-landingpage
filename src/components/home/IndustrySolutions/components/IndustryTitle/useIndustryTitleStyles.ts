import { makeStyles } from '@material-ui/core';

export const useIndustryTitleStyles = makeStyles(theme => ({
  auctionTitleblock: {
    position: 'relative',
    width: '100%',
    height: '171px',
    opacity: 0,
    transform: 'translate3D(0, 50%, 0)',
    borderBottom: `1px solid #4B4B4B`
  },
  auctionTitleShowblock: {
    position: 'relative',
    width: '100%',
    height: '171px',
    opacity: 1,
    transform: 'translate3D(0, 0, 0)',
  },
  content: {
    position: 'relative',
    width: '100%',
    height: '171px',
  },
  slideContent: {
    position: 'relative',
    height: '171px',
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
    color: '#171717',
  },
  titleIcon: {
    margin: '0 35px',
    color: '#171717',
  },
  '@keyframes toLeft': {
    from: {
      left: '0',
    },
    to: {
      left: '-100%',
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
    animation: `$toLeft 12s linear infinite`,
    [theme.breakpoints.down('md')]: {
      animation: `$toLeft 12s linear infinite`,
    },
    '&:hover': {
      animationPlayState: 'paused',
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
