import { Avatar, Box, Typography } from '@material-ui/core';
import React, { useMemo, useState } from 'react';
import { useTableListStyles } from './useTableListStyles';

export type ITableListProps = {};

export interface IListItemProps {
  avatar: string;
  company: string;
  status: string;
  market: string;
  startupTime: string;
  id: number | string;
  link?: string;
}

const TableList: React.FC<ITableListProps> = ({}) => {
  const data = [
    {
      avatar: '/images/home/follow-invest-in-web3/p1.png',
      company: 'Coinbase',
      status: 'Public',
      market: 'Web3',
      startupTime: '2012',
      link: 'https://www.coinbase.com/',
    },
    {
      avatar: '/images/home/follow-invest-in-web3/p2.png',
      company: 'Binance',
      status: 'Public',
      market: 'Defi',
      startupTime: '2017',
      link: 'https://www.binance.com/',
    },
    {
      avatar: '/images/home/follow-invest-in-web3/p3.png',
      company: 'Open Sea',
      status: 'Public',
      market: 'NFT',
      startupTime: '2017',
      link: 'https://opensea.io/',
    },
    {
      avatar: '/images/home/follow-invest-in-web3/p4.png',
      company: 'GALAXY',
      status: 'Public',
      market: 'Web3',
      startupTime: '2021',
      link: 'https://www.galaxy.com/web3-entrepreneurs/',
    },
    {
      avatar: '/images/home/follow-invest-in-web3/p5.png',
      company: 'Aptos',
      status: 'Public',
      market: 'Web3',
      startupTime: '2021',
      link: 'https://aptoslabs.com/',
    },
    {
      avatar: '/images/home/follow-invest-in-web3/p6.png',
      company: 'Polygon',
      status: 'Public',
      market: 'Web3',
      startupTime: '2017',
      link: 'https://polygonscan.com/',
    },
    {
      avatar: '/images/home/follow-invest-in-web3/p7.png',
      company: 'MakerDAO',
      status: 'Public',
      market: 'DAO',
      startupTime: '2014',
      link: 'https://makerdao.com/',
    },
    {
      avatar: '/images/home/follow-invest-in-web3/p8.png',
      company: 'Lido',
      status: 'Public',
      market: 'Web3',
      startupTime: '2020',
      link: 'https://lido.fi/',
    },
    {
      avatar: '/images/home/follow-invest-in-web3/p9.png',
      company: 'Yuga Labs',
      status: 'Public',
      market: 'Web3',
      startupTime: '2021',
      link: 'https://www.yuga.com/',
    },
    {
      avatar: '/images/home/follow-invest-in-web3/p10.png',
      company: 'Uniswap',
      status: 'Public',
      market: 'Defi',
      startupTime: '2018',
      link: 'https://uniswap.org/',
    },
    {
      avatar: '/images/home/follow-invest-in-web3/p11.png',
      company: 'Optimism',
      status: 'Public',
      market: 'Web3',
      startupTime: '2019',
      link: 'https://www.optimism.io/',
    },
    {
      avatar: '/images/home/follow-invest-in-web3/p12.png',
      company: 'Magic Eden',
      status: 'Public',
      market: 'NFT',
      startupTime: '2021',
      link: 'https://magiceden.io/',
    },
    {
      avatar: '/images/home/follow-invest-in-web3/p14.png',
      company: 'AAVE',
      status: 'Public',
      market: 'Web3',
      startupTime: '2017',
      link: 'https://aave.com/',
    },
  ];
  const list: IListItemProps[] = useMemo(
    () =>
      data.map((v, i) => {
        return {
          ...v,
          id: i,
        };
      }),
    [],
  );
  const classes = useTableListStyles();
  const openLink = (link: string) => {
    link && window.open(link, '_blank');
  };
  return (
    <Box className={classes['table-list']}>
      <Box className={classes['table-list-header']}>
        <Typography variant="body2" style={{ flex: '1 1' }}>
          company
        </Typography>
        <Typography variant="body2" style={{ flex: '1 1' }}>
          status
        </Typography>
        <Typography variant="body2" style={{ flex: '1 1' }}>
          market
        </Typography>
        <Typography variant="body2" style={{ flex: '1 1', textAlign: 'end' }}>
          FOUNDED
        </Typography>
      </Box>
      <Box className={classes['table-list-body']}>
        {list?.map(v => (
          <Box
            className={classes.item}
            key={v.id}
            onClick={() => openLink(v?.link || '')}
          >
            <Box className={classes.company} style={{ flex: '1 1' }}>
              <Avatar alt="avatar" src={v?.avatar} className={classes.avatar} />
              <Typography variant="body2">{v?.company}</Typography>
            </Box>
            <Box className={classes.status} style={{ flex: '1 1' }}>
              <span>{v?.status}</span>
            </Box>
            <Box className={classes.market} style={{ flex: '1 1' }}>
              {v?.market}
            </Box>
            <Box
              className={classes.startupTime}
              style={{ flex: '1 1', textAlign: 'end' }}
            >
              {v?.startupTime}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TableList;
