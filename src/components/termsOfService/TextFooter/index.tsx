import { Typography, Box } from '@material-ui/core';
import React from 'react';
import { useTextContentStyles } from './useTextContentStyles';
import Link from 'next/link';
import classNames from 'classnames';

const TextFooter: React.FC = () => {
  const classes = useTextContentStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.text}>©2021 Bounce dao Ltd. All rights reserved.</Typography>
      <Box className={classes.right}>
        <Link href={'/termsOfService'}>
          <Typography className={classNames(classes.text, classes.rightText)}>Terms Of Service</Typography>
        </Link>
        <Link href={'/privacyPolicy'}>
          <Typography className={classNames(classes.text, classes.rightText)}>Privacy Policy</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default TextFooter;
