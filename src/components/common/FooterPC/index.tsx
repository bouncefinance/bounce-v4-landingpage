import {
  Container,
  Grid,
  Link as ExternalLink,
  Typography,
} from '@material-ui/core';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { t } from 'src/i18n/intl';
import { APIIcon } from 'src/modules/common/components/Icons/APIIcon';
import { APIWhiteIcon } from 'src/modules/common/components/Icons/APIWhiteIcon';
import { NewLogo } from 'src/modules/common/components/Icons/NewLogo';
import { NewLogoLight } from 'src/modules/common/components/Icons/NewLogoLight';
import { PlusIcon } from 'src/modules/common/components/Icons/PlusIcon';
import { PlusLightIcon } from 'src/modules/common/components/Icons/PlusLightIcon';
import { DesIcon } from 'src/modules/common/components/Icons/DesIcon';
import { DesLightIcon } from 'src/modules/common/components/Icons/DesLightIcon';
import { GithubIcon } from 'src/modules/common/components/Icons/GithubIcon';
import { GithubWhiteIcon } from 'src/modules/common/components/Icons/GithubWhiteIcon';
import { MediumIcon } from 'src/modules/common/components/Icons/MediumIcon';
import { MediumWhiteIcon } from 'src/modules/common/components/Icons/MediumWhiteIcon';
import { TelegramIcon } from 'src/modules/common/components/Icons/TelegramIcon';
import { TelegramWhiteIcon } from 'src/modules/common/components/Icons/TelegramWhiteIcon';
import { TwitterIcon } from 'src/modules/common/components/Icons/TwitterIcon';
import { TwitterWhiteIcon } from 'src/modules/common/components/Icons/TwitterWhiteIcon';
import { SocialLinks } from 'src/modules/layout/components/SocialLinks';
import { useFooterStyles } from './useFooterStyles';
import Link from 'next/link';
import { uid } from 'react-uid';
import { FooterLogo } from 'src/modules/common/components/Icons/FooterLogo';

export const FooterSocialLink: React.FC<{ colorTheme: 'light' | 'dark' }> = ({
  colorTheme,
}) => {
  const classes = useFooterStyles();
  const socialLinks = useMemo(
    () => [
      {
        title: 'Medium',
        icon: colorTheme === 'dark' ? MediumWhiteIcon : MediumIcon,
        href: 'https://medium.com/@bouncefinance',
      },
      {
        title: 'Twitter',
        icon: colorTheme === 'dark' ? TwitterWhiteIcon : TwitterIcon,
        href: 'https://twitter.com/bounce_finance?s=21',
      },
      {
        title: 'Telegram',
        icon: colorTheme === 'dark' ? TelegramWhiteIcon : TelegramIcon,
        href: 'https://t.me/bounce_finance',
      },
    ],
    [],
  );
  const developerLinks = useMemo(
    () => [
      {
        title: 'Github',
        icon: colorTheme === 'dark' ? GithubWhiteIcon : GithubIcon,
        href: 'https://github.com/bouncefinance',
      },
      {
        title: 'API',
        icon: colorTheme === 'dark' ? APIWhiteIcon : APIIcon,
        href: 'https://docs.bounce.finance/',
      },
    ],
    [],
  );
  return (
    <div>
      <FooterLogo style={{ width: 80, height: 16 }} />
      <div className={classes.iconBox}>
        <Typography variant="body2">
          {t('footer.social')}&nbsp;&nbsp;
        </Typography>
        <SocialLinks links={socialLinks} />
      </div>
      <div className={classNames(classes.iconBox, classes.developLink)}>
        <Typography variant="body2">
          {t('footer.developer')}&nbsp;&nbsp;
        </Typography>
        <SocialLinks links={developerLinks} />
      </div>
      <div className={classes.footerLogo}>
        {colorTheme === 'dark' ? (
          <iframe
            src="/darkCrypotoWidget.html"
            width="100%"
            className={classes.iframeBox}
          ></iframe>
        ) : (
          <iframe
            src="/crypotoWidget.html"
            width="100%"
            className={classes.iframeBox}
          ></iframe>
        )}
      </div>
    </div>
  );
};

interface FooterLinksProps {
  title: string;
  links: {
    label: string;
    isExternal: boolean; // 是否是外链
    href: string;
    isDisabled: boolean;
    extraIcon: string | React.ReactElement;
    className: string;
  }[];
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  const classes = useFooterStyles();

  return (
    <div>
      <Typography variant="h5" className={classes.linkTitle}>
        {title}
      </Typography>
      <ul className={classes.ulBox}>
        {links.map(item => {
          return (
            <li key={uid(item)} className={classes.linkLi}>
              {item.extraIcon}
              {item.isDisabled ? (
                <a className={classNames(classes.disabledLink, item.className)}>
                  {item.label}
                </a>
              ) : item.isExternal ? (
                <ExternalLink
                  // className={linkClass}
                  className={classNames(classes.linkText, item.className)}
                  href={item.href as string}
                  role="link"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-disabled={true}
                >
                  {item.label}
                </ExternalLink>
              ) : (
                <Link href={item.href}>
                  <a className={classNames(classes.linkText, item.className)}>
                    {item.label}
                  </a>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export interface FooterProps {
  colorTheme?: 'light' | 'dark';
  noBg?: boolean;
}

const FooterPc: React.FC<FooterProps> = ({
  colorTheme = 'light',
  noBg = false,
}) => {
  const classes = useFooterStyles();

  const companyLinks = useMemo(
    () => [
      {
        label: t('header.company'),
        isExternal: false,
        href: '/company',
        isDisabled: false,
        extraIcon: '',
        className: '',
      },
      {
        label: t('header.jobs-employers'),
        isExternal: false,
        href: '/jobs/talents',
        isDisabled: false,
        extraIcon: '',
        className: '',
      },
      {
        label: t('header.jobs-talents'),
        isExternal: false,
        href: '/jobs/employers',
        isDisabled: false,
        extraIcon: '',
        className: '',
      },
      {
        label: t('footer.links.company-list.find-investors'),
        isExternal: true,
        href: 'https://app.bounce.finance/company/institutionInvestors',
        isDisabled: false,
        extraIcon: (
          <img
            src="/images/footer/live.png"
            width={16}
            style={{ marginRight: 4 }}
          />
        ),
        className: '',
      },
      {
        label: t('footer.links.company-list.browse-startup-idea'),
        isExternal: true,
        href: 'https://app.bounce.finance/company/startupIdeas',
        isDisabled: false,
        extraIcon: (
          <img
            src="/images/footer/live.png"
            width={16}
            style={{ marginRight: 4 }}
          />
        ),
        className: '',
      },
      {
        label: t('footer.links.investment-list.share-startup-idea'),
        isExternal: true,
        href: 'https://app.bounce.finance/idea/create',
        isDisabled: false,
        extraIcon: (
          <img
            src="/images/footer/live.png"
            width={16}
            style={{ marginRight: 4 }}
          />
        ),
        className: '',
      },
      {
        label: t('footer.links.investment-list.web3-id-verified'),
        isExternal: false,
        href: '/',
        isDisabled: true,
        extraIcon: '',
        className: '',
      },
      {
        label: t('footer.links.investment-list.team-management'),
        isExternal: false,
        href: '/',
        isDisabled: true,
        extraIcon: '',
        className: '',
      },
    ],
    [],
  );

  const InvestmentLinks = useMemo(
    () => [
      {
        label: t('footer.links.auction-homepage'),
        isExternal: false,
        href: '/investment',
        isDisabled: false,
        extraIcon: '',
        className: '',
      },
      {
        label: t('footer.links.investment-list.browse-market'),
        isExternal: true,
        href: 'https://app.bounce.finance/market',
        isDisabled: false,
        extraIcon: (
          <img
            src="/images/footer/live.png"
            width={16}
            style={{ marginRight: 4 }}
          />
        ),
        className: '',
      },
      {
        label: t('footer.links.investment-list.browse-company'),
        isExternal: true,
        href: 'https://app.bounce.finance/company',
        isDisabled: false,
        extraIcon: (
          <img
            src="/images/footer/live.png"
            width={16}
            style={{ marginRight: 4 }}
          />
        ),
        className: '',
      },
      {
        label: t('footer.links.investment-list.auction-pool'),
        isExternal: true,
        href: 'https://app.bounce.finance/market/pools',
        isDisabled: false,
        extraIcon: (
          <img
            src="/images/footer/live.png"
            width={16}
            style={{ marginRight: 4 }}
          />
        ),
        className: '',
      },
      {
        label: t('footer.links.investment-list.nft-launchpad'),
        isExternal: false,
        href: '',
        isDisabled: true,
        extraIcon: '',
        className: classes.bottomLink,
      },
      {
        label: t('footer.links.investment-list.mergers-acquisitions'),
        isExternal: false,
        href: '',
        isDisabled: true,
        extraIcon: '',
        className: classes.bottomLink,
      },
    ],
    [],
  );

  // const jobsLinks = useMemo(
  //   () => [
  //     // {
  //     //   label: t('footer.links.jobs-list.for-employers'),
  //     //   isExternal: false,
  //     //   href: '/jobs/employers',
  //     //   isDisabled: false,
  //     //   extraIcon: '',
  //     //   className: '',
  //     // },
  //     // {
  //     //   label: t('footer.links.jobs-list.pos-job'),
  //     //   isExternal: false,
  //     //   href: '',
  //     //   isDisabled: true,
  //     //   extraIcon: '',
  //     //   className: classes.bottomLink,
  //     // },
  //     // {
  //     //   label: t('footer.links.jobs-list.browse-talent'),
  //     //   isExternal: false,
  //     //   href: '',
  //     //   isDisabled: true,
  //     //   extraIcon: '',
  //     //   className: classes.bottomLink,
  //     // },
  //     // {
  //     //   label: t('footer.links.jobs-list.for-talents'),
  //     //   isExternal: false,
  //     //   href: '/jobs/talents',
  //     //   isDisabled: false,
  //     //   extraIcon: '',
  //     //   className: classes.topLink,
  //     // },
  //     // {
  //     //   label: t('footer.links.jobs-list.create-portfolio'),
  //     //   isExternal: false,
  //     //   href: '',
  //     //   isDisabled: true,
  //     //   extraIcon: '',
  //     //   className: '',
  //     // },
  //     // {
  //     //   label: t('footer.links.jobs-list.browse-jobs'),
  //     //   isExternal: false,
  //     //   href: '',
  //     //   isDisabled: true,
  //     //   extraIcon: '',
  //     //   className: '',
  //     // },
  //   ],
  //   [],
  // );

  const toolsLinks = useMemo(
    () => [
      {
        label: t('header.tools-token'),
        isExternal: false,
        href: '/tools/token',
        isDisabled: false,
        extraIcon: '',
        className: '',
      },
      {
        label: t('footer.links.labs-list.bounce-v1'),
        isExternal: true,
        href: 'https://v1.app.bounce.finance/',
        isDisabled: false,
        extraIcon: '',
        className: '',
      },
      {
        label: t('footer.links.labs-list.bounce-v2'),
        isExternal: true,
        href: 'https://v2.app.bounce.finance/',
        isDisabled: false,
        extraIcon: '',
        className: '',
      },
      {
        label: t('footer.links.labs-list.fangible'),
        isExternal: true,
        href: 'https://fangible.com/',
        isDisabled: false,
        extraIcon: '',
        className: '',
      },
      {
        label: t('footer.links.labs-list.metalent'),
        isExternal: true,
        href: 'https://metalents.com/',
        isDisabled: false,
        extraIcon: '',
        className: '',
      },
      {
        label: t('footer.links.labs-list.bounce-metaverse'),
        isExternal: true,
        href: 'https://metaverse.bounce.finance/',
        isDisabled: false,
        extraIcon: '',
        className: '',
      },
    ],
    [],
  );

  // const labsLinks = useMemo(
  //   () => [
  //     // {
  //     //   label: t('footer.links.labs-list.bounce-v1'),
  //     //   isExternal: true,
  //     //   href: 'https://v1.app.bounce.finance/',
  //     //   isDisabled: false,
  //     //   extraIcon: '',
  //     //   className: '',
  //     // },
  //     // {
  //     //   label: t('footer.links.labs-list.bounce-v2'),
  //     //   isExternal: true,
  //     //   href: 'https://v2.app.bounce.finance/',
  //     //   isDisabled: false,
  //     //   extraIcon: '',
  //     //   className: '',
  //     // },
  //     // {
  //     //   label: t('footer.links.labs-list.fangible'),
  //     //   isExternal: true,
  //     //   href: 'https://fangible.com/',
  //     //   isDisabled: false,
  //     //   extraIcon: '',
  //     //   className: '',
  //     // },
  //     // {
  //     //   label: t('footer.links.labs-list.metalent'),
  //     //   isExternal: true,
  //     //   href: 'https://metalents.com/',
  //     //   isDisabled: false,
  //     //   extraIcon: '',
  //     //   className: '',
  //     // },
  //     // {
  //     //   label: t('footer.links.labs-list.bounce-metaverse'),
  //     //   isExternal: true,
  //     //   href: 'https://metaverse.bounce.finance/',
  //     //   isDisabled: false,
  //     //   extraIcon: '',
  //     //   className: '',
  //     // },
  //   ],
  //   [],
  // );

  return (
    <footer
      className={
        noBg
          ? classNames(classes.root, classes.noBg)
          : classNames(
              classes.root,
              colorTheme === 'dark' ? classes.darkTheme : '',
            )
      }
    >
      <Container maxWidth="xl" disableGutters>
        <div
          className={classNames(
            classes.content,
            colorTheme === 'dark' ? classes.darkTheme : '',
            noBg ? classes.noBg : '',
          )}
        >
          <Grid container>
            <Grid item xs={3}>
              <FooterSocialLink colorTheme={colorTheme} />
            </Grid>
            <Grid item xs={3}>
              <FooterLinks
                title={t('header.investment')}
                links={InvestmentLinks}
              />
            </Grid>
            <Grid item xs={3}>
              <FooterLinks
                title={t('footer.links.service')}
                links={companyLinks}
              />
            </Grid>
            {/* <Grid item xs={2}>
              <FooterLinks title={t('footer.links.jobs')} links={jobsLinks} />
            </Grid> */}
            <Grid item xs={3}>
              <FooterLinks title={t('header.ecosystem')} links={toolsLinks} />
            </Grid>
            {/* <Grid item xs={2}>
              <FooterLinks title={t('footer.links.labs')} links={labsLinks} />
            </Grid> */}
          </Grid>
        </div>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={12} lg={7} xl={7} className={classes.col}>
            {t('footer.copyrights', {
              year: new Date().getFullYear(),
            })}
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            lg={5}
            xl={5}
            className={classNames(classes.rightWrap)}
          >
            <Grid container className={classNames(classes.rightContent)}>
              <Grid
                item
                xs={12}
                md={12}
                lg={4}
                xl={4}
                className={classNames(classes.rightCol, classes.socialCol)}
              >
                {/* <SocialLinks /> */}
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                lg={4}
                xl={4}
                className={classNames(classes.docCol, classes.rightCol)}
              >
                <ExternalLink
                  href={'/termsOfService'}
                  role="link"
                  rel="noopener noreferrer"
                  className={classNames(classes.link, classes.darkLink)}
                >
                  {t('footer.terms-of-service')}
                </ExternalLink>
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                lg={4}
                xl={4}
                className={classNames(
                  classes.docCol,
                  classes.rightCol,
                  classes.policyCol,
                )}
              >
                <ExternalLink
                  href={'/privacyPolicy'}
                  role="link"
                  rel="noopener noreferrer"
                  className={classNames(classes.link, classes.darkLink)}
                >
                  {t('footer.privacy-policy')}
                </ExternalLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default FooterPc;
