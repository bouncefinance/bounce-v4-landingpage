import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: 760,
    marginTop: 88,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '0 16px',
  },
  bg1: {
    width: '100%',
    height: 320,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundImage: 'url(/images/home/pumpkin/mobile-bg-2.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  bg2: {
    width: '100%',
    maxWidth: 270,
    height: '100%',
    maxHeight: 330,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: 84,
    backgroundImage: 'url(/images/home/pumpkin/mobile-bg-1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  contentWrapper: {
    position: 'absolute',
    left: 0,
    bottom: 100,
    width: '100%',
    padding: '0 20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 24,
  },
  title: {
    fontFamily: 'Public Sans',
    fontWeight: 700,
    fontSize: '32px',

    color: '#5A3D1D',
    margin: 0,
  },
  subtitle: {
    fontFamily: 'Public Sans',
    fontWeight: 500,
    fontSize: '20px',

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
    width: '100%',
    height: 60,
    '&:hover': {
      backgroundColor: '#4A3317',
    },
    marginTop: 48,
  },
}));

const PumpkinBlockMobile: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleLaunchAuction = () => {
    window.open('https://app.bounce.finance/real-auction/pumpkin', '_blank');
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.bg1} />
      <Box className={classes.bg2} />
      <Box className={classes.contentWrapper}>
        <Box className={classes.content}>
          <Typography variant="h1" className={classes.title}>
            The Infinity Pump
          </Typography>
          <Typography variant="h2" className={classes.subtitle}>
            Real-World Collectible Auction
          </Typography>
        </Box>
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleLaunchAuction}
        >
          Launch Auction
        </Button>
      </Box>
    </Box>
  );
};

export default PumpkinBlockMobile;
