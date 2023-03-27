import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

export const MenuCloseIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7L7 21" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 7L21 21" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</SvgIcon>
  );
};
