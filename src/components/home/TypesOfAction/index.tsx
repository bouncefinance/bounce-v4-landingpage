import React from 'react';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { Typography } from '@material-ui/core';
import CanvasGamePc from './CanvasGamePc';
import { useTypesOfActionStyles } from './useTypesOfActionStyles';

export type IBuildWithBounceProps = {};

const TypesOfAction: React.FC<IBuildWithBounceProps> = ({}) => {
  const classes = useTypesOfActionStyles();

  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <Typography className={classes.title}>
          Types of Auction On Bounce Finance
        </Typography>
        <CanvasGamePc />
      </div>
    </WithScrollFreezing>
  );
};

export default TypesOfAction;
