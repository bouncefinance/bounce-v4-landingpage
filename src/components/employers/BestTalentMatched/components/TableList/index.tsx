import { Button, Avatar, Box, Typography } from '@material-ui/core';
import React, { useMemo, useState } from 'react';
import { useTableListStyles } from './useTableListStyles';
import { t } from 'src/i18n/intl';

export type ITableListProps = {};

export interface IListItemProps {
  avatar?: string;
  status?: string;
  name?: string;
  experience?: string;
  id?: number | string;
}

const TableList: React.FC<ITableListProps> = ({}) => {
  const classes = useTableListStyles();
  const [maxLen, setMaxLen] = useState(9);
  const data = [
    {
      avatar: '/images/jobs/employers/1.png',
      status: '3D Artist',
      name: 'Nataliya Tsygankova',
      experience: '6 Years',
    },,
    {
      avatar: '/images/jobs/employers/2.png',
      status: '3D Artist',
      name: 'ElfeNoir3D',
      experience: '6 Years',
    },
    {
      avatar: '/images/jobs/employers/3.png',
      status: '3D Artist',
      name: 'Artem Makarenko',
      experience: '6 Years',
    },
    {
      avatar: '/images/jobs/employers/4.png',
      status: '3D Artist',
      name: 'Marosh',
      experience: '6 Years',
    },
    {
      avatar: '/images/jobs/employers/5.png',
      status: 'Media Operations',
      name: 'Flab',
      experience: '12 Years',
    },
    {
      avatar: '/images/jobs/employers/6.png',
      status: 'Media Operations',
      name: 'ThatAudioGuy',
      experience: '12 Years',
    },
    {
      avatar: '/images/jobs/employers/6.png',
      status: 'Operations Manager',
      name: 'adspace',
      experience: '10 Years',
    },
    {
      avatar: '/images/jobs/employers/7.png',
      status: 'Product Designer',
      name: 'SirBauz',
      experience: '5 Years',
    },
    {
      avatar: '/images/jobs/employers/8.png',
      status: 'Graphic Designer',
      name: 'alfajart02',
      experience: '6 Years',
    },
    {
      avatar: '/images/jobs/employers/9.png',
      status: 'Graphic Designer',
      name: 'AnnJansze',
      experience: '10 Years',
    },
    {
      avatar: '/images/jobs/employers/10.png',
      status: 'Game Designer',
      name: 'Titan',
      experience: '12 Years',
    },
    {
      avatar: '/images/jobs/employers/11.png',
      status: 'Frontend Engineer',
      name: 'web3dev',
      experience: '8 Years',
    },
    {
      avatar: '/images/jobs/employers/12.png',
      status: 'Marketing Manager',
      name: 'Fandriyan',
      experience: '15 Years',
    },
    {
      avatar: '/images/jobs/employers/13.png',
      status: 'UI / UX Designer',
      name: 'Design',
      experience: '3 Years',
    },
    {
      avatar: '/images/jobs/employers/14.png',
      status: 'UI / UX Designer',
      name: 'Weingojo',
      experience: '4 Years',
    },
    {
      avatar: '/images/jobs/employers/15.png',
      status: 'Graphic Designer',
      name: 'Geovany Castro Q',
      experience: '9 Years',
    },
    {
      avatar: '/images/jobs/employers/16.png',
      status: 'Social Media Manager',
      name: 'Meleanor',
      experience: '3 Years',
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
        <Typography variant="body2" style={{ flex: '2 1' }}>
          Talent Name
        </Typography>
        <Typography variant="body2" style={{ flex: '2 1' }}>
        Primary Role
        </Typography>
        <Typography variant="body2" style={{ flex: '1 1' }}>
        Experience
        </Typography>
      </Box>
      <Box className={classes['table-list-body']}>
        {list?.map(v => (
          <Box className={classes.item} key={v.id}>
            <Box className={classes.company} style={{ flex: '2 1' }}>
              <Avatar alt="avatar" src={v?.avatar} className={classes.avatar} />
              <Typography variant="body2">{v?.name}</Typography>
            </Box>
            <Box className={classes.market} style={{ flex: '2 1' }}>
              {v?.status}
            </Box>
            <Box className={classes.market} style={{ flex: '1 1' }}>
              {v?.experience}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TableList;
