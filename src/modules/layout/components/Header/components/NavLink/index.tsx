import React, { Fragment, useMemo } from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { UrlObject } from 'url';
import LinkButton from '../LinkButton';
import LinkMenu from '../LinkMenu';
import { useNavLinkStyles } from './useNavLinkStyles';
import { Link as ExternalLink } from '@material-ui/core';

export type INavLinkProps = {};

export interface IItemsProps {
  label: string;
  list?: IItemsProps[];
  isExternal?: boolean;
  href?: Url;
}
export interface IListProps {
  label: string;
  list?: IItemsProps[];
  isExternal?: boolean;
  href?: Url;
}

export type Url = string | UrlObject;

export interface ILinksItemProps {
  label: string;
  list?: IListProps[];
  isExternal?: boolean;
  href?: Url;
  isAIAgent?: boolean;
}

const NavLink: React.FC<INavLinkProps> = ({}) => {
  const classes = useNavLinkStyles();

  const links: ILinksItemProps[] = useMemo(
    () => [
      //   {
      //     label: t('header.investment'),
      //     list: [],
      //     isExternal: false,
      //     href: '/investment',
      //   },
      {
        label: 'AI Agent',
        list: [],
        isExternal: true,
        href: 'https://ai.bounce.finance',
        isAIAgent: true,
      },
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
      // {
      //   label: 'Bounce Booster',
      //   href: '/booster',
      //   isExternal: false,
      // },

      // {
      //   label: 'Cedefi Mining',
      //   isExternal: true,
      //   href: 'https://app.mba.loans',
      // },
      // {
      //   label: 'Solutions',
      //   list: [
      //     {
      //       label: 'Advertising',
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
      //   {
      //     label: t('header.service'),
      //     list: [
      //       {
      //         label: t('header.company'),
      //         isExternal: false,
      //         href: '/company',
      //       },
      //       {
      //         label: t('header.jobs'),
      //         list: [
      //           {
      //             label: t('header.jobs-employers'),
      //             isExternal: false,
      //             href: '/jobs/talents',
      //           },
      //           {
      //             label: t('header.jobs-talents'),
      //             isExternal: false,
      //             href: '/jobs/employers',
      //           },
      //         ],
      //       },
      //     ],
      //   },
      {
        label: 'Resources',
        list: [
          {
            label: 'Bounce M&A',
            isExternal: true,
            href: 'https://mna.bounce.finance/',
          },
          {
            label: 'Bounce Quanto',
            isExternal: true,
            href: 'https://broccoli.bounce.finance/trade',
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
          //   {
          //     label: t('header.ecosystem'),
          //     list: [
          //       {
          //         label: t('footer.links.labs-list.bounce-metaverse'),
          //         isExternal: true,
          //         href: 'https://metaverse.bounce.finance/',
          //       },
          //       {
          //         label: t('footer.links.labs-list.bounce-v1'),
          //         isExternal: true,
          //         href: 'https://v1.app.bounce.finance/',
          //       },
          //       {
          //         label: t('footer.links.labs-list.bounce-v2'),
          //         isExternal: true,
          //         href: 'https://v2.app.bounce.finance/',
          //       },
          //       {
          //         label: t('footer.links.labs-list.fangible'),
          //         isExternal: true,
          //         href: 'https://fangible.com/',
          //       },
          //       {
          //         label: t('footer.links.labs-list.metalent'),
          //         isExternal: true,
          //         href: 'https://metalents.com/',
          //       },
          //     ],
          //   },
        ],
      },
    ],
    [],
  );

  return (
    <nav className={classes.links} style={{ alignItems: 'center' }}>
      {links.map(v => (
        <Fragment key={uid(v)}>
          {v.list && v.list.length ? (
            <LinkMenu linkClass={classes.link} data={v} />
          ) : v.isAIAgent ? (
            <ExternalLink
              href={v.href as string}
              role="link"
              rel="noopener noreferrer"
              target="_blank"
              key={v.label}
              style={{ height: 'fit-content' }}
            >
              <span className="btn-animation-mix-noborder" data-text="Ai Agent">
                {v.label}
              </span>
            </ExternalLink>
          ) : (
            <LinkButton linkClass={classes.link} data={v} />
          )}
        </Fragment>
      ))}
    </nav>
  );
};

export default NavLink;
