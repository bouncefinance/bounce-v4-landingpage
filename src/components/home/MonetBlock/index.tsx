import { Box, Button, Typography } from '@material-ui/core';
import { useMonetBlockStyles } from './useMonetBlockStyles';
import { useMemo } from 'react';
import { useIsSMDown } from 'src/modules/theme/useTheme';

export default function MonetBlock() {
  const classes = useMonetBlockStyles();

  const isSm = useIsSMDown();

  const asignatureImg = useMemo(
    () => (isSm ? 'Monet_asignature_mobile' : 'Monet_asignature'),
    [isSm],
  );

  return (
    <Box className={classes.root}>
      <Box className={classes.bg}>
        <img
          src={`/images/home/monet/${asignatureImg}.png`}
          className={classes.module4}
        />
      </Box>
      <Box className={classes.content}>
        {!isSm && (
          <Box className={classes.module1}>
            <Typography>PAINTING</Typography>
            <Typography>‘Paysage’</Typography>
            <Typography>CLAUDE MONET (1840 - 1926)</Typography>
          </Box>
        )}
        <Box className={classes.module2}>
          <Typography>AUTHENTIC PIECE</Typography>
        </Box>
        <Box className={classes.module3}>
          <Typography className="module3-title1">
            Auction of <br />
            Claude Monet's Paysage.
          </Typography>
          <Typography className="module3-title2">
             Multiple layers of rewards.
          </Typography>
          <Button
            onClick={() =>
              window.open('https://monet.bounce.finance/', '_blank')
            }
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
