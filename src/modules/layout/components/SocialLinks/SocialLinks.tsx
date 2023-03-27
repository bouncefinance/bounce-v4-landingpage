import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { uid } from 'react-uid';
import { useSocialLinksStyles } from './useSocialLinksStyles';

interface ISocialLinks {
  links: {
    title: string;
    icon: any;
    href: string;
  }[];
  className?: any;
}

export const SocialLinks = ({ links, className }: ISocialLinks) => {
  const classes = useSocialLinksStyles();

  return (
    <Box component="nav" className={className}>
      <ul className={classes.list}>
        {links.map(({ title, href, icon: Icon }) => {
          return (
            <li className={classes.listItem} key={uid(title)}>
              <IconButton
                component="a"
                href={href}
                role="link"
                rel="noopener noreferrer"
                target="_blank"
                className={classes.link}
              >
                <Icon className={classes.icon} />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
