import { Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import { usePeoplePromotionListStyles } from './usePeoplePromotionListStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { uid } from 'react-uid';
import { WithAnimation } from 'src/modules/WithAnimation';

export type IPeoplePromotionListProps = {};

const PeoplePromotionList: React.FC<IPeoplePromotionListProps> = ({ }) => {
  const classes = usePeoplePromotionListStyles();

  const list = useMemo(() => [
    {
      avatar: '/images/company/digital-card/investor1.png',
      name: 'Sustainable Food',
      position: 'CEO & Founder',
      introduction: 'Hello everyone. Broadly speaking about the NFT interface platform, it has the features of the ability it has the features of the ability',
    },
    {
      avatar: '/images/company/digital-card/investor2.png',
      name: 'Sustainable Food',
      position: 'CEO & Founder',
      introduction: 'Hello everyone. Broadly speaking about the NFT interface platform, it has the features of the ability it has the features of the ability',
    },
    {
      avatar: '/images/company/digital-card/investor1.png',
      name: 'Sustainable Food',
      position: 'CEO & Founder',
      introduction: 'Hello everyone. Broadly speaking about the NFT interface platform, it has the features of the ability it has the features of the ability',
    },
    {
      avatar: '/images/company/digital-card/investor2.png',
      name: 'Sustainable Food',
      position: 'CEO & Founder',
      introduction: 'Hello everyone. Broadly speaking about the NFT interface platform, it has the features of the ability it has the features of the ability',
    },
    {
      avatar: '/images/company/digital-card/investor1.png',
      name: 'Sustainable Food',
      position: 'CEO & Founder',
      introduction: 'Hello everyone. Broadly speaking about the NFT interface platform, it has the features of the ability it has the features of the ability',
    }
  ], []);

  return (
    <Swiper
        spaceBetween={20} 
        slidesPerView={1.5}
        loop
        breakpoints={{
          576: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.2,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
    >
      {
        list.map(v => (
          <SwiperSlide key={uid(v)}>
            <WithAnimation className={classes.item}>
              <img src={v.avatar} alt="logo" className={classes.avatar} />
              <div className={classes.content}>
                <WithAnimation
                  className={classes.name}
                  Component={Typography}
                  variant="h6" 
                >
                  {v.name}
                </WithAnimation>
                <WithAnimation
                  className={classes.position}
                  Component={Typography}
                  variant="body2" 
                >
                  {v.position}
                </WithAnimation>
                <WithAnimation
                  className={classes.introduction}
                  Component={Typography}
                  variant="body2" 
                >
                  {v.introduction}
                </WithAnimation>
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
                  className={classes.position}
                  Component={Typography}
                  variant="body2" 
                >
                  {v.position}
                </WithAnimation>
                <WithAnimation
                  className={classes.introduction}
                  Component={Typography}
                  variant="body2" 
                >
                  {v.introduction}
                </WithAnimation>
              </div>
            </WithAnimation>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export default PeoplePromotionList;