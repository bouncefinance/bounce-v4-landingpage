import { Avatar, Box, Typography } from '@material-ui/core';
import React, { useMemo, useState } from 'react';
import { useTableListStyles } from './useTableListStyles';

export type ITableListProps = {};

export interface IListItemProps {
  avatar?: string;
  name?: string;
  experience?: string;
  jobType?: string;
  id?: number | string;
}

const TableList: React.FC<ITableListProps> = ({}) => {
  const classes = useTableListStyles();
  const [maxLen, setMaxLen] = useState(9);
  const data = [
    {
      avatar: '/images/jobs/talents/1.png',
      name: 'Chainlink, Senior Software Engineer, Developer Experience',
      jobType: 'Full-time',
      experience: '5+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/2.png',
      name: 'Alchemy, Content Creator, Design content marketing strategies',
      jobType: 'Full-time',
      experience: '2+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/2.png',
      name: 'Alchemy, Senior Product Manager, Guide products from conception to launch',
      jobType: 'Full-time',
      experience: '5+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/3.png',
      name: '1inch Network, Senior Frontend Engineer',
      jobType: 'Full-time',
      experience: '3+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/4.png',
      name: 'Lido, Protocol Business Development Manager',
      jobType: 'Full-time',
      experience: '3+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/4.png',
      name: 'Lido, Data Analyst, research and develop',
      jobType: 'Full-time',
      experience: '3+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/5.png',
      name: 'The Sandbox, UX/UI Designer, Ecosystem',
      jobType: 'Full-time',
      experience: '3+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/5.png',
      name: 'The Sandbox, Backend Developer, Ecosystem',
      jobType: 'Full-time',
      experience: '3+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/6.png',
      name: 'Ethereum Foundation, Ecosystem Developer',
      jobType: 'Full-time',
      experience: '5+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/7.png',
      name: 'Gala Games, Marketing Lead',
      jobType: 'Full-time',
      experience: '5+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/7.png',
      name: 'Gala Games, Senior UI Designer',
      jobType: 'Full-time',
      experience: '5+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/8.png',
      name: 'SSV Network, Senior Solidity Developer',
      jobType: 'Full-time',
      experience: '5+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/8.png',
      name: 'SSV Network, Senior GoLang Developer',
      jobType: 'Full-time',
      experience: '3+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/9.png',
      name: 'Uniswap Labs, Application Security Engineer',
      jobType: 'Full-time',
      experience: '3+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/9.png',
      name: 'Uniswap Labs, Director of Product Management, Platform',
      jobType: 'Full-time',
      experience: '3+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/10.png',
      name: 'Protocol Labs, Director of Marketing',
      jobType: 'Full-time',
      experience: '10+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/11.png',
      name: 'Binance, Project Research Analyst (Blockchain Research)',
      jobType: 'Full-time',
      experience: '3+ Years Experience',
    },
    {
      avatar: '/images/jobs/talents/11.png',
      name: 'Binance, Backend Engineer (Golang / Rust)',
      jobType: 'Full-time',
      experience: '3+ Years Experience',
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
    [maxLen],
  );

  return (
    <Box className={classes['table-list']}>
      <Box className={classes['table-list-header']}>
        <Typography variant="body2" style={{ flex: '3 1' }}>
          Job offer
        </Typography>
        <Typography variant="body2" style={{ flex: '1 1' }}></Typography>
        <Typography variant="body2" style={{ flex: '2 1' }}>
          Required experience
        </Typography>
        <Typography variant="body2" style={{ flex: '1 1' }}>
          JOB TYPES
        </Typography>
      </Box>
      <Box className={classes['table-list-body']}>
        {list?.map(v => (
          <Box className={classes.item} key={v.id}>
            <Box className={classes.company} style={{ flex: '3 1' }}>
              <Avatar alt="avatar" src={v?.avatar} className={classes.avatar} />
              <Typography
                variant="body2"
                style={{
                  maxWidth: '378px',
                }}
              >
                {v?.name}
              </Typography>
            </Box>
            <Box className={classes.status} style={{ flex: '1 1' }}>
              Remote possible
            </Box>
            <Box className={classes.status} style={{ flex: '2 1' }}>
              {v?.experience}
            </Box>
            <Box className={classes.status} style={{ flex: '1 1' }}>
              {v?.jobType}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TableList;
