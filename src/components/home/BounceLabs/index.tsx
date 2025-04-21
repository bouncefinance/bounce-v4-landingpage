import { Box, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { Celebrities } from './components/Celebrities';
// import Integration from './components/Integration';
// import IntegrationMobile from './components/IntegrationMobile';
import { useBounceLabsStyles } from './useBounceLabsStyles';
// import { useIsMDDown } from 'src/modules/theme';
// import BinanceExchangeMobile from 'src/components/home/BinanceExchangeMobile';
import Footer from 'src/components/common/Footer';
import { useIsMDDown } from '../../../modules/theme';

export type IBounceLabsProps = {};

const BounceLabs: React.FC<IBounceLabsProps> = ({}) => {
  const isMDDown = useIsMDDown();
  const [isLg, setLg] = useState(false);

  const classes = useBounceLabsStyles();
  //   const isMd = useIsMDDown();
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w <= 1250) {
        setLg(false);
      } else {
        setLg(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imgRow1 = [
    {
      img: '/images/home/partners/logo1.png',
    },
    {
      img: '/images/home/partners/logo2.png',
    },
    {
      img: '/images/home/partners/logo3.png',
    },
    {
      img: '/images/home/partners/logo4.png',
    },
    {
      img: '/images/home/partners/logo5.png',
    },
  ];
  const imgRow2 = [
    {
      img: '/images/home/partners/logo6.png',
    },
    {
      img: '/images/home/partners/logo7.png',
    },
    {
      img: '/images/home/partners/logo8.png',
    },
    {
      img: '/images/home/partners/logo9.png',
    },
    {
      img: '/images/home/partners/logo10.png',
    },
  ];
  const imgRow3 = [
    {
      img: '/images/home/partners/logo11.png',
    },
    {
      img: '/images/home/partners/logo12.png',
    },
    {
      img: '/images/home/partners/logo13.png',
    },
    {
      img: '/images/home/partners/logo14.png',
    },
  ];
  const mbImgRow = [...imgRow1, ...imgRow2, ...imgRow3];
  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <div className={classes.wrap}></div>
        <Container maxWidth={false} className={classes.container}>
          <WithAnimation>
            <Typography className={classes.title}>
              Investors and Partners
            </Typography>
          </WithAnimation>
          {!isLg ? (
            <WithAnimation className={classes.imgContainer}>
              {mbImgRow.map(v => (
                <img
                  className={classes.rowImg}
                  key={v.img}
                  src={v.img}
                  alt=""
                />
              ))}
            </WithAnimation>
          ) : (
            <Box>
              <WithAnimation className={classes.imgRow1}>
                {imgRow1.map(v => (
                  <img className={classes.rowImg} src={v.img} alt="" />
                ))}
              </WithAnimation>
              <WithAnimation className={classes.imgRow2}>
                {imgRow2.map(v => (
                  <img className={classes.rowImg} src={v.img} alt="" />
                ))}
              </WithAnimation>
              <WithAnimation className={classes.imgRow3}>
                {imgRow3.map(v => (
                  <img className={classes.rowImg} src={v.img} alt="" />
                ))}
              </WithAnimation>
            </Box>
          )}

          {/* {isMd ? <IntegrationMobile /> : <Integration />} */}
          <Celebrities />
          {/* {isMd && <BinanceExchangeMobile />} */}
          <Footer colorTheme="dark" noBg={true} />
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default BounceLabs;
