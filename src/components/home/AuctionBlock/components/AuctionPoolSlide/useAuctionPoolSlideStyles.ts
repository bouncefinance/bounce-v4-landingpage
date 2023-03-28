import { makeStyles } from '@material-ui/core';

export const useAuctionPoolSlideStyles = makeStyles(theme => ({
  auctionPoolblock: {
    position: 'relative',
    width: '100%',
    height: '198px',
    opacity: 0,
    transform: 'translate3D(0, 50%, 0)',
  },
  auctionPoolShowblock: {
    position: 'relative',
    width: '100%',
    height: '154px',
    opacity: 1,
    transform: 'translate3D(0, 0, 0)',
  },
  content: {
    position: 'relative',
    width: '100%',
    height: '154px',
  },
  slideContent: {
    position: 'relative',
    height: '154px',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    transform: 'translate3D(0, 0, 0)',
  },
  auctionItem: {
    maxWidth: 598,
    height: 64,
    borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
    borderRight: '1px solid rgba(255, 255, 255, 0.5)',
    padding: '0 46px',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
  },
  auctionLeft: {
    flex: 1,
    height: 64,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  auctionName: {
    fontFamily: `'Sharp Grotesk DB Cyr Medium 22'`,
    fontWeight: 500,
    fontSize: '18px',
    height: '24px',
    lineHeight: '24px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      lineHeight: '22.4px',
    },
  },
  desc: {
    fontFamily: `'Inter'`,
    width: '100%',
    height: '24px',
    lineHeight: '24px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '21px',
      width: '255px',
      textOverflow: 'unset',
      overflowWrap: 'normal',
      whiteSpace: 'normal',
      height: 'auto',
    },
  },
  icon: {
    width: 32,
    height: 32,
    marginLeft: 28,
    [theme.breakpoints.down('sm')]: {
      width: 20,
      height: 20,
    },
  },
  '@keyframes toLeft': {
    from: {
      left: '0',
    },
    to: {
      left: 'calc(-100%)',
    },
  },
  toLeft: {
    animation: `$toLeft 24s linear infinite`,
    AnimationPlayState: 'running',
    [theme.breakpoints.down('md')]: {
      animation: `$toLeft 24s linear infinite`,
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
