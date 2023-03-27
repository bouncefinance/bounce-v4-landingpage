import {
  Box,
  Button,
  ClickAwayListener,
  Container,
  Drawer,
  Link,
} from '@material-ui/core';
import { Toggle } from '../Toggle';
import { useHeaderStyles } from './useHeaderStyles';
import { LocaleSwitcher } from '../LocaleSwitcher';
import React, { useCallback, useMemo, useState } from 'react';
import NavLink from './components/NavLink';
import { t } from 'src/i18n/intl';
import { Logo } from './components/Logo';
import { useRouter } from 'next/router';
import { UrlObject } from 'url';

export const Header = () => {
  const [mobileNavShowed, setMobileNavShowed] = useState(false);
  const router = useRouter();
  const classes = useHeaderStyles();

  const handleLogin = useCallback(() => {
    router.push('/');
  }, []);
  type Url = string | UrlObject;
  interface ILinksItemProps {
    label: string;
    isExternal?: boolean;
    href?: Url;
  }
  const links: ILinksItemProps[] = useMemo(
    () => [
      {
        label: t('header.investment'),
        isExternal: false,
        href: '/investment',
      },
      {
        label: t('header.jobs-employers'),
        isExternal: false,
        href: '/jobs/talents',
      },
      {
        label: t('header.jobs-talents'),
        isExternal: false,
        href: '/jobs/employers',
      },
      {
        label: t('header.company'),
        list: [],
        isExternal: false,
        href: '/company',
      },
      {
        label: t('header.tools-token'),
        isExternal: false,
        href: '/tools/token',
      },
      {
        label: t('header.tools-labs'),
        isExternal: false,
        href: '/tools/labs',
      },
    ],
    [],
  );
  const renderedDesktop = (
    <div className={classes.renderDesktop}>
      <NavLink />
      <Link
        role="link"
        rel="noopener noreferrer"
        target="_blank"
        href={'https://app.bounce.finance/'}
      >
        <Button variant="outlined" className={classes.loginBtn}>
          {t('header.launch-app')}
        </Button>
      </Link>
      <LocaleSwitcher />
    </div>
  );
  const renderedMobile = (
    <div className={classes.renderMobile}>
      <nav className={classes.links} />
      <div className={classes.buttons}>
        <ClickAwayListener onClickAway={() => setMobileNavShowed(false)}>
          <div>
            <Toggle
              onClick={() => {
                mobileNavShowed
                  ? setMobileNavShowed(false)
                  : setMobileNavShowed(true);
              }}
              isActive={mobileNavShowed}
            />
            <Drawer
              className={classes.drawer}
              classes={{
                paperAnchorRight: classes.drawerPaper,
              }}
              elevation={0}
              anchor="right"
              open={mobileNavShowed}
              onClose={() => setMobileNavShowed(false)}
            >
              <Container className={classes.navInner}>
                <Box className={classes.drawerTop}>
                  <Box
                    onClick={() => {
                      router.push('/');
                      mobileNavShowed
                        ? setMobileNavShowed(false)
                        : setMobileNavShowed(true);
                    }}
                  >
                    <Logo />
                  </Box>
                  <Toggle
                    onClick={() => {
                      mobileNavShowed
                        ? setMobileNavShowed(false)
                        : setMobileNavShowed(true);
                    }}
                    isActive={mobileNavShowed}
                  />
                </Box>
                <Box mb={1} className={classes.mobileMenuLinks}>
                  {links.map((item, index) => (
                    <Box
                      key={index}
                      className={classes.mobileMenuLinkItem}
                      onClick={() => {
                        router.push(item.href || '/');
                        mobileNavShowed
                          ? setMobileNavShowed(false)
                          : setMobileNavShowed(true);
                      }}
                    >
                      {' '}
                      {item.label}
                    </Box>
                  ))}
                  <Link
                    role="link"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={'https://app.bounce.finance/'}
                  >
                    <Button variant="outlined" className={classes.loginBtn}>
                      {t('header.launch-app')}
                    </Button>
                  </Link>
                </Box>
                <Box className={classes.drawerBottom}>
                  <LocaleSwitcher />
                </Box>
              </Container>
            </Drawer>
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );

  return (
    <header className={classes.root}>
      <Container className={classes.container} maxWidth={false}>
        <Logo />
        {renderedMobile}
        {renderedDesktop}
      </Container>
    </header>
  );
};
