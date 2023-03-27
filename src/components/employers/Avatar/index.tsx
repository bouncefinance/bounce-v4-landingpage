import React from 'react';
import { Avatar } from '@material-ui/core';


export type IAvatarProps = {
  size?: number;
  height?: number;
  src?: string;
  bgcolor?: string;
  sx?: any;
  className?: string;
  variant?: any;
  onClick?: (e: any) => void;
};

const Avatar23: React.FC<IAvatarProps> = ({
  children,
  size = 48,
  height,
  src,
  bgcolor,
  sx,
  variant,
  ...rest
}) => {
  return (
    <Avatar
      variant={variant}
      src={src}
      style={{
        ...sx,
        bgcolor: src ? '#FFFFFF' : '#AAE5FF',
        width: size,
        height: height || size,
        boxShadow: src && '3.77112px 3.77112px 13.1989px rgba(0, 0, 0, 0.1)',
      }}
      {...rest}
    >
      {children}
    </Avatar>
  );
};

export default Avatar23;
