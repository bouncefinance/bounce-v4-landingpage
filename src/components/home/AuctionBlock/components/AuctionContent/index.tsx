import React, { useEffect, useState } from 'react';
import { WithAnimation } from 'src/modules/WithAnimation';
import { Box, Typography, Grid } from '@material-ui/core';
import { useAuctionContentStyles } from './useAuctionContentStyles';
import { useIsMDDown } from 'src/modules/theme';

const AutionTitle: React.FC = () => {
  const classes = useAuctionContentStyles();
  const [contentStyle, setContentStyle] = useState({});
  const imgList = [
    {
      url: '/images/home/auction/slide-right-animation/p5.png',
      style: {
        top: 327,
        left: 259,
        width: 1180,
        height: 282,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/p1.png',
      style: {
        top: 144,
        left: 0,
        width: 284,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/icon1.png',
      style: {
        top: 370,
        left: 80,
        width: 240,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/icon3.png',
      style: {
        top: 0,
        left: 267,
        width: 58,
        height: 58,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/p2.png',
      style: {
        top: 102,
        left: 326,
        width: 686,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/p3.png',
      style: {
        top: 60,
        left: 1092,
        width: 300,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/p4.png',
      style: {
        top: 237,
        left: 1412,
        width: 662,
        height: 402,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/icon2.png',
      style: {
        top: 180,
        left: 1080,
        width: 123,
        height: 123,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/icon4.png',
      style: {
        top: 570,
        left: 1180,
        width: 58,
        height: 58,
      },
    },
    {
      url: '/images/home/auction/slide-right-animation/icon5.png',
      style: {
        top: 100,
        left: 1480,
        width: 58,
        height: 58,
      },
    },
  ];
  const isMd = useIsMDDown();
  useEffect(() => {
    // size 2075 * 748 when screen is 1400
    function getElementTop(el: any): number {
      if (el.offsetParent) {
        return getElementTop(el.offsetParent) + el.offsetTop;
      }
      return el.offsetTop || 0;
    }
    function debounce(fn: () => void, ms: number) {
      let timer: NodeJS.Timeout | null;
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn();
          timer = null;
        }, ms);
      };
    }
    const handleScrollTop = () => {
      debounce(() => {
        const slideBox = document.getElementById('animation-box');
        const slideContent = document.getElementById('animation-content');
        if (slideBox) {
          // size 2075 * 748 when screen is 1467
          const winH = window.innerHeight; // 视窗高度
          const winW = window.innerWidth; // 视窗高度
          const pageScrollTop = document.body.scrollTop; // 页面当前滚动，距离页面顶部的距离
          const clientTop = slideBox?.getBoundingClientRect()?.top || 0; // 距离视窗顶部的距离
          const elOffsetTop = getElementTop(slideBox);
          // 根据当前浏览器宽度，重置动画组件的大小
          const scale =  winW / 1467;
          console.log('isMd<>>>>', !!isMd)
          setContentStyle({
            zoom: isMd ? 'unset' :scale,
          });
          const elHeight = slideContent?.offsetHeight || 0; // 元素高度
          const elWidth = slideContent?.offsetWidth || 0; // 元素宽度
          // 动画应该固定在顶部的距离
          let startTop = 0;
          if (elHeight < winH) {
            startTop = (winH - elHeight) / 2;
          }
          console.log(
            'pageScrollTop, winH, elHeight, clientTop,startTop, elOffsetTop',
            pageScrollTop,
            winH,
            elHeight,
            clientTop,
            startTop,
            elOffsetTop,
          );
          if (elOffsetTop === elHeight) {
            return;
          }
          let endLeft = 0;
          if (clientTop <= startTop && Math.abs(clientTop) < 4000 - elHeight) {
            document
              .getElementById('layout')
              ?.setAttribute('style', 'overflow:visible');
            endLeft =
              (elWidth - 550) * (Math.abs(clientTop) / (4000 - elHeight));
            if (clientTop >= 0) {
              setContentStyle({
                zoom: isMd ? 'unset' :scale,
                top: `${startTop - clientTop}px`,
              });
            } else {
              setContentStyle({
                top: `${startTop}px`,
                zoom: isMd ? 'unset' :scale,
                transform: `translateX(-${endLeft}px)`,
              });
            }
          } else if (Math.abs(clientTop) >= 4000 - elHeight) {
            document
              .getElementById('layout')
              ?.setAttribute('style', 'overflow:visible');
            endLeft = elWidth - 550;
            setContentStyle({
              top: 0,
              zoom: isMd ? 'unset' :scale,
              transform: `translatex(-${endLeft}px)`,
            });
          } else {
            document
              .getElementById('layout')
              ?.setAttribute('style', 'overflow:hidden');
          }
        }
      }, 50)();
    };
    window.addEventListener('scroll', handleScrollTop);
    window.addEventListener('resize', handleScrollTop);
    return () => {
      window.removeEventListener('scroll', handleScrollTop);
      window.removeEventListener('resize', handleScrollTop);
      document.getElementById('layout')?.removeAttribute('style');
    };
  }, [isMd]);
  return (
    <Box className={classes.auctionContentSection}>
      <WithAnimation
        className={classes.auctionContent}
        rootMargin="-50%"
        defaultAnimation={false}
        addClassInView={classes.auctionContentShow}
      >
        <Box className={classes.title}>
          Integrate Bounce's Auction Technology With Any Website
        </Box>
        <Grid container spacing={0}>
          <Grid item md={6} sm={12}>
            <Typography className={classes.desc} style={{ paddingTop: '16px' }}>
              <img
                className={classes.leftTopArrow}
                src="/images/home/auction/left-top-arrow.svg"
              />
              Empowering Auctions with Innovation: Bounce offers complete
              solutions for launching and conducting various types of auction
              with seamless on-chain settlements. Transforming traditional
              industries through cutting-edge technology for improved efficiency
              and profitability.
            </Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography className={classes.desc} style={{ paddingTop: '16px' }}>
              The types of auction that Bounce provides include fixed-price
              auction, English auction, Dutch auction, sealed-bid auction,
              random selection auction, playable auction, order book auction,
              hold-to-compete auction.
            </Typography>
          </Grid>
        </Grid>
      </WithAnimation>
      <Box className={classes.auctionAnimationContent} id="animation-box">
        <Box
          className={classes.animationBlock}
          style={contentStyle}
          id="animation-content"
        >
          {imgList.map(item => {
            return (
              <img
                src={item.url}
                style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  ...item.style,
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default AutionTitle;
