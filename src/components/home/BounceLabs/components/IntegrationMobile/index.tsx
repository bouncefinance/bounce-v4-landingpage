import { Box, Button } from '@material-ui/core';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { useIntegrationStyles } from './useIntegrationStyles';

export type IIntegrationProps = {};

const Integration: React.FC<IIntegrationProps> = ({ }) => {
  const classes = useIntegrationStyles();

  const list = useMemo(() => [
    {
      label:  t('home-page.bounce-labs.list.bounce-v1'),
      href: 'https://v1.app.bounce.finance/'
    },
    {
      label:  t('home-page.bounce-labs.list.bounce-v2'),
      href: 'https://v2.app.bounce.finance/'
    },
    {
      label:  t('home-page.bounce-labs.list.fangible'),
      href: 'https://fangible.com'
    },
    {
      label:  t('home-page.bounce-labs.list.metalents'),
      href: 'https://metalents.com/'
    },
    {
      label:  t('home-page.bounce-labs.list.m&a-defi'),
      href: 'https://docs.bounce.finance'
    },
    {
      label:  t('home-page.bounce-labs.list.bounce-metaverse'),
      href: 'https://metaverse.bounce.finance/'
    },
    {
      label:  t('home-page.bounce-labs.list.syndicate-defi'),
      href: 'https://docs.bounce.finance'
    },
  ], []);

  return (
    <WithAnimation className={classes.root}>
        <Box className={classes.list}>
          {
            list.map(v => (
              <Button
                key={uid(v)}
                className={classes.item}
                variant="contained"
                href={v.href}
                role="link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {v.label}
              </Button>
            ))
          }
          <Box className={classes.arrow1}>
            <img src="/images/home/bounce-labs/arrow.png" />
          </Box>
          <Box className={classes.arrow2}>
            <img src="/images/home/bounce-labs/arrow.png" />
          </Box>
          <Box className={classes.arrow3}>
            <img src="/images/home/bounce-labs/arrow.png" />
          </Box>
          <Box className={classes.arrow4}>
            <img src="/images/home/bounce-labs/arrow.png" />
          </Box>
          <Box className={classes.arrow5}>
            <img src="/images/home/bounce-labs/arrow.png" />
          </Box>
          <Box className={classes.arrow6}>
            <img src="/images/home/bounce-labs/arrow.png" />
          </Box>
        </Box>
    </WithAnimation>
  );
}

export default Integration;