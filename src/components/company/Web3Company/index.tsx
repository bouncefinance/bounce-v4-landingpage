import { Chip, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { WithAnimation } from 'src/modules/WithAnimation';
import { useWeb3CompanyStyles } from './useWeb3CompanyStyles';
import { Swiper, SwiperSlide } from 'swiper/react';

export type IWeb3CompanyProps = {};

const Web3Company: React.FC<IWeb3CompanyProps> = ({}) => {
  const classes = useWeb3CompanyStyles();

  const list = useMemo(
    () => [
      {
        logo: '/images/company/innovative-company/1.png',
        name: 'Aptos',
        status: 'Seed',
        introduction:
          'Aptos is building the safest and most scalable Layer 1 blockchain.',
      },
      {
        logo: '/images/company/innovative-company/2.png',
        name: 'ECO',
        status: 'Seed',
        introduction:
          'One simple balance that lets you spend, send, save and make money at the same time',
      },
      {
        logo: '/images/company/innovative-company/3.png',
        name: 'Project Galaxy',
        status: 'Seed',
        introduction:
          'Project Galaxy is built on open and collaborative infrastructure with the mission to help Web 3...',
      },
      {
        logo: '/images/company/innovative-company/4.png',
        name: 'Nym',
        status: 'Seed',
        introduction:
          'One simple balance that lets you spend, send, save and make money at the same time',
      },
      {
        logo: '/images/company/innovative-company/5.png',
        name: 'Goldfinch Finance',
        status: 'Seed',
        introduction:
          'Goldfinch is a decentralized credit Platform for crypto loans without collateral.',
      },
    ],
    [],
  );

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.5}
      loop
      breakpoints={{
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2.5,
        },
      }}
    >
      {list.map(v => (
        <SwiperSlide key={uid(v)}>
          <WithAnimation className={classes.item}>
            <img src={v.logo} alt="logo" className={classes.logo} />
            <div className={classes.content}>
              <div className={classes.top}>
                <WithAnimation
                  className={classes.name}
                  Component={Typography}
                  variant="h6"
                >
                  {v.name}
                </WithAnimation>
                <Chip
                  label={v.status}
                  className={classNames(classes.status, classes.seed)}
                />
              </div>
              <div className={classes.bottom}>
                <WithAnimation
                  className={classes.introduction}
                  Component={Typography}
                  variant="body2"
                >
                  {v.introduction}
                </WithAnimation>
              </div>
            </div>
            <div className={classes.contentMobile}>
              <WithAnimation
                className={classes.name}
                Component={Typography}
                variant="h6"
              >
                {v.name}
              </WithAnimation>
              <WithAnimation
                className={classes.introduction}
                Component={Typography}
                variant="body2"
              >
                {v.introduction}
              </WithAnimation>
              <Chip
                label={v.status}
                className={classNames(classes.status, classes.seed)}
              />
            </div>
          </WithAnimation>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Web3Company;
