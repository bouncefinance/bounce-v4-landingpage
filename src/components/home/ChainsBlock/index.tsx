import React from 'react';
import { useChainsBlockStyles } from './useChainsBlockStyles';
import { Container } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import Chains from './components/Chains';
import Partners from './components/Partners';

const ChainsBlock: React.FC = () => {
  const classes = useChainsBlockStyles();

  return (
    <WithScrollFreezing>
      <div className={classes.root} id="chains-block">
        <Container maxWidth="xl" className={classes.container}>
          <Chains />
          <Partners />
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default ChainsBlock;
