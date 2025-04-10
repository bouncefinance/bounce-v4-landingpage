import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useStyles } from './styles';

const PumpkinBlock: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleLaunchAuction = () => {
    window.open('https://app.bounce.finance/real-auction/pumpkin', '_blank');
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Typography variant="h1" className={classes.title}>
          The Infinity Pump
        </Typography>
        <Typography variant="h2" className={classes.subtitle}>
          Real-World Collectible Auction
        </Typography>
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

export default PumpkinBlock;
