import React from 'react';
import { useChainsBlockStyles } from './useChainsBlockStyles';
import { Container } from '@material-ui/core';
import { Chains } from './components/Chains';
import { WithScrollFreezing } from '../WithScrollFreezing';

export const ChainsBlock = () => {
  const classes = useChainsBlockStyles();

  return (
    <WithScrollFreezing>
      <div className={classes.root} id="chains-block">
        <Container maxWidth={false} className={classes.container}>
          <Chains />
        </Container>
      </div>
    </WithScrollFreezing>
  );
};
