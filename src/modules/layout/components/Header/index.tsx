import {
  Box,
  Button,
  ClickAwayListener,
  Container,
  Drawer,
  Typography,
  Link,
} from '@material-ui/core';
import { SocialLinks } from 'src/modules/layout/components/SocialLinks';
import { Toggle } from '../Toggle';
import { useHeaderStyles } from './useHeaderStyles';
import { LocaleSwitcher } from '../LocaleSwitcher';
import React, { useMemo, useState } from 'react';
import NavLink from './components/NavLink';
import { t } from 'src/i18n/intl';
import { Logo } from './components/Logo';
import { useRouter } from 'next/router';
import { UrlObject } from 'url';
import { ILinksItemProps } from './components/NavLink';
import ComBtn from 'src/components/common/ComBtn';
import { MediumIcon } from 'src/modules/common/components/Icons/MediumIcon';
import { TelegramIcon } from 'src/modules/common/components/Icons/TelegramIcon';
import { TwitterIcon } from 'src/modules/common/components/Icons/TwitterIcon';
// import AdFixContent from './components/AdFixContent/index'
export const Header = () => {
  // mobile menu logi 0: close 1: open menu  2:open second menu (show back)
  const [mobileNavShowed, setMobileNavShowed] = useState<number>(0);
  const router = useRouter();
  const classes = useHeaderStyles();
  type Url = string | UrlObject;
  const renderedDesktop = (
    <div className={classes.renderDesktop}>
      <NavLink />
      <LocaleSwitcher
        style={{
          marginLeft: '30px',
        }}
      />
      <Link
        role="link"
        rel="noopener noreferrer"
        target="_blank"
        href={'https://app.bounce.finance/'}
      >
        <Button variant="outlined" className={classes.loginBtn}>
          Launch App
        </Button>
      </Link>
    </div>
  );
  // handle menu toggle
  const handleMenuTogge = () => {
    if (mobileNavShowed === 0) {
      setMobileNavShowed(1);
    } else if (mobileNavShowed === 1) {
      setMobileNavShowed(0);
    } else if (mobileNavShowed === 2) {
      setMobileNavShowed(1);
    }
  };
  const links: ILinksItemProps[] = useMemo(
    () => [
      {
        label: 'Auction Products',
        list: [
          {
            label: 'Token & NFT Auction',
            isExternal: false,
            href: '/tokenAndnftAuction',
          },
          {
            label: 'Real-World Collectible Auction',
            isExternal: false,
            href: '/realWorldCollectAuction',
          },
          {
            label: 'Ad Space Auction',
            isExternal: false,
            href: '/adsAuction',
          },
          {
            label: 'SDKs & Plug-ins',
            isExternal: false,
            href: '/sdkAndPlugins',
          },
        ],
      },
      {
        label: 'Bounce M&A',
        isExternal: true,
        href: 'https://mna.bounce.finance/'
        },
      // {
      //   label: 'Solutions',
      //   list: [
      //     {
      //       label: 'Advertisement',
      //       isExternal: false,
      //       href: '/advertisementSolution',
      //     },
      //     {
      //       label: 'AI+Auction ',
      //       isExternal: false,
      //       href: '/aiAuctionSolution',
      //     },
      //   ],
      // },
      {
        label: 'Resources',
        list: [
          {
            label: 'Bounce Quanto',
            isExternal: true,
            href: 'https://quanto.bounce.finance/trade',
          },
          {
            label: 'Support Center',
            isExternal: false,
            href: '/FAQ',
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
          {
            label: 'Community',
            isExternal: false,
            href: '/joinCommunity',
          },
          {
            label: 'Contact Sales',
            isExternal: true,
            href: `https://docs.google.com/forms/d/1DJxbqqfv6MnN5-kOwDGU-_DGpXDxbJJkUT2UqKgvbUs/edit`,
          },
          {
            label: 'Contact Marketing',
            isExternal: true,
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSeDS5XUSVtlBfWHM_kVAMRDnqi6y2ecwY5nS_Xbis7t_VFxsw/viewform',
          },
          {
            label: 'Private Launchpad Form',
            isExternal: true,
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSeSXXbKG6Dk_6NhzGnT1gkZsG5MVvdtDmLVU87sIsnmHdjYWg/viewform?usp=sf_link',
          },
        ],
      },
    ],
    [],
  );
  const socialLinks = [
    {
      title: 'Medium',
      icon: MediumIcon,
      href: 'https://medium.com/@bouncefinance',
    },
    {
      title: 'Twitter',
      icon: TwitterIcon,
      href: 'https://twitter.com/bounce_finance?s=21',
    },
    {
      title: 'Telegram',
      icon: TelegramIcon,
      href: 'https://t.me/bounce_finance',
    },
  ];
  const [secondlinks, setSecondlinks] = useState<Array<ILinksItemProps>>([]);
  const [secondLabel, setSecondLabel] = useState<string>('');
  const renderedMobile = (
    <div className={classes.renderMobile}>
      <nav className={classes.links} />
      <div className={classes.buttons}>
        <ClickAwayListener onClickAway={() => setMobileNavShowed(0)}>
          <div>
            <Toggle
              onClick={() => {
                mobileNavShowed ? setMobileNavShowed(0) : setMobileNavShowed(1);
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
              open={mobileNavShowed > 0}
              onClose={() => setMobileNavShowed(0)}
            >
              <Container className={classes.navInner}>
                <Box className={classes.drawerTop}>
                  <Box
                    onClick={() => {
                      router.push('/');
                      mobileNavShowed > 0
                        ? setMobileNavShowed(0)
                        : setMobileNavShowed(1);
                    }}
                  >
                    <Logo />
                  </Box>
                  <Toggle
                    onClick={() => handleMenuTogge()}
                    isActive={mobileNavShowed}
                  />
                </Box>
                <Box mb={1} className={classes.mobileMenuLinks}>
                  {mobileNavShowed === 1 && (
                    <Box
                      style={{
                        marginTop: 60,
                      }}
                      className={classes.mobileMenuLinkBox}
                    >
                      {links.map((item, index) => (
                        <Box
                          key={index}
                          className={classes.mobileMenuLinkItem}
                          onClick={() => {
                            if(item.isExternal){
                              window.open(item.href as string, '_blank');
                            }else{
                              router.push(item.href || '/');
                            }
                            if(item.list){
                              setMobileNavShowed(2);
                              setSecondlinks(item?.list || []);
                              setSecondLabel(item?.label || '');
                            }
                             
                          }}
                        >
                          {' '}
                          {item.label}
                        </Box>
                      ))}
                    </Box>
                  )}
                  {mobileNavShowed === 2 && (
                    <Box className={classes.mobileMenuLinkBox}>
                      <Box className={classes.mobileMenuLinkItemTitle}>
                        {secondLabel}
                      </Box>
                      {secondlinks.map((item, index) => (
                        <Box
                          key={index}
                          className={classes.mobilesecondMenuLinkItem}
                          onClick={() => {
                            router.push(item.href || '/');
                            setMobileNavShowed(0);
                          }}
                        >
                          {' '}
                          {item.label}
                        </Box>
                      ))}
                    </Box>
                  )}
                  <Box
                    style={{
                      display: 'block',
                      fontSize: 16,
                      width: 'calc(100% - 32px)',
                    }}
                  >
                    {mobileNavShowed === 1 && (
                      <div className={classes.iconBox}>
                        <Typography variant="body2">
                          {t('footer.social')}&nbsp;&nbsp;
                        </Typography>
                        <SocialLinks links={socialLinks} />
                      </div>
                    )}
                    <Box
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                      }}
                    >
                      <ComBtn
                        style={{
                          display: 'block',
                          fontSize: 16,
                          width: '100%',
                        }}
                        handleClick={() => {
                          window.open('https://app.bounce.finance/', '_blank');
                        }}
                        text={'Launch App'}
                      ></ComBtn>
                    </Box>
                  </Box>
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
      {/* <AdFixContent /> */}
    </header>
  );
};
