import { Button, ButtonProps, Box } from '@material-ui/core';
import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { useToggleStyles } from './useToggleStyles';
import { MenuIcon } from 'src/modules/common/components/Icons/MenuIcon';
import { MenuCloseIcon } from 'src/modules/common/components/Icons/MenuCloseIcon';

interface IToggleProps extends ButtonProps {
  isActive?: number; // mobile menu status 0:close, 1: open menu, 2: open second menu
  className?: string;
}

export const Toggle = forwardRef<HTMLButtonElement, IToggleProps>(
  ({ className, isActive = 0, ...props }, ref) => {
    const classes = useToggleStyles();
    return (
      <Button
        className={classNames(
          classes.root,
          isActive > 0 && classes.active,
          className,
        )}
        ref={ref}
        variant="text"
        aria-label="open/close"
        {...props}
      >
        {isActive === 0 && <MenuIcon />}
        {isActive === 1 && <MenuCloseIcon />}
        {isActive === 2 && (
          <Box className={classes.backIcon}>
            <img src="/images/header/left-arrow.svg" alt="" />
            Back
          </Box>
        )}
      </Button>
    );
  },
);
