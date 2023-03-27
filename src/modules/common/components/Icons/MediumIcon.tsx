import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export const MediumIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      width="20"
      height="11"
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="5.60748" cy="5.5" rx="5.60748" ry="5.5" fill="#171717" />
      <ellipse cx="14.9522" cy="5.5" rx="2.80374" ry="5.5" fill="#171717" />
      <rect
        x="18.6912"
        width="1.30841"
        height="11"
        rx="0.654206"
        fill="#171717"
      />
    </SvgIcon>
  );
};
