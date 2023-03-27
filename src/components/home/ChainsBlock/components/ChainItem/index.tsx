import React, { ReactNode } from 'react';
import { useChainItemStyles } from './useChainItemStyles';
import classNames from 'classnames';

interface IChaiItemProps {
  label: string;
  title: string;
  className?: any;
}

const ChainItem: React.FC<IChaiItemProps> = ({ label, title, className }) => {
  const classes = useChainItemStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.title}>{title}</div>
      <div className={classes.label}>{label}</div>
    </div>
  );
};

export default ChainItem;