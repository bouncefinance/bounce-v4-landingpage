import React from 'react';
import { Box } from '@material-ui/core';
import { useComBtnStyles } from './useComBtnStyles';
import classNames from 'classnames';

export interface FooterProps {
  text?: string;
  disabled?: boolean;
  handleClick?: () => void;
  notHightLight?: boolean;
  style?: React.CSSProperties;
}
const ComBtn: React.FC<FooterProps> = ({
  text = '',
  disabled = false,
  handleClick,
  notHightLight = false,
  style,
}) => {
  const classes = useComBtnStyles();
  return (
    <Box
      onClick={() => {
        handleClick && handleClick();
      }}
      className={classNames(
        classes.btn,
        disabled ? classes.disabled : '',
        notHightLight ? classes.notHightLight : '',
      )}
      style={{
        ...style,
      }}
    >
      {text}
    </Box>
  );
};

export default ComBtn;
