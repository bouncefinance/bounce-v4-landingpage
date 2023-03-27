import { Button, ButtonProps } from '@material-ui/core';
import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { useToggleStyles } from './useToggleStyles';
import { MenuIcon } from 'src/modules/common/components/Icons/MenuIcon';
import { MenuCloseIcon } from 'src/modules/common/components/Icons/MenuCloseIcon';

interface IToggleProps extends ButtonProps {
  isActive?: boolean;
  className?: string;
}

export const Toggle = forwardRef<HTMLButtonElement, IToggleProps>(
  ({ className, isActive, ...props }, ref) => {
    const classes = useToggleStyles();
    return (
      <Button
        className={classNames(
          classes.root,
          isActive && classes.active,
          className,
        )}
        ref={ref}
        variant="text"
        aria-label="open/close"
        {...props}
      >
        {!isActive ?<MenuIcon /> : <MenuCloseIcon />}
      </Button>
    );
  },
);
