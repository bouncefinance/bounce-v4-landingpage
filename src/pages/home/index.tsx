import React, { useEffect, useState, useRef } from 'react';
import BounceLabs from 'src/components/home/BounceLabs';
// import BuildWithBounce from 'src/components/home/BuildWithBounce';
// import { CompanyList } from 'src/components/home/CompanyList';
import { TopBlock } from 'src/components/home/TopBlock';
// import TopStack from 'src/components/home/TopStack';
// import ChainsBlock from '../../components/home/ChainsBlock';
import { useIsMDDown } from 'src/modules/theme';
// import BinanceExchange from 'src/components/home/BinanceExchange';
import { Box } from '@material-ui/core';
import AuctionBlock from 'src/components/home/AuctionBlock';
import DesignedForEveryone from 'src/components/home/DesignedForEveryone';
import IndustrySolutions from 'src/components/home/IndustrySolutions';
import TypesOfAction from 'src/components/home/TypesOfAction';
import HomeDialog from 'src/components/home/homeDialog';
export type IHomeProps = {};

const Home: React.FC<IHomeProps> = ({}) => {
  const isMd = useIsMDDown();
  const [showVideo, setShowVideo] = useState(false);
  const videoEl = useRef<HTMLVideoElement | null>(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl?.current &&
      videoEl?.current?.play &&
      videoEl?.current?.play();
  };
  //   useEffect(() => {
  //     let hasViewVideo = localStorage.getItem('hasViewVideo');
  //     if (!hasViewVideo && !isMd) {
  //       localStorage.setItem('hasViewVideo', 'true');
  //       setShowVideo(true);
  //       setTimeout(() => {
  //         attemptPlay();
  //       });
  //     }
  //     return () => {};
  //   }, []);
  return (
    <div dateset-a={'123'}>
      <TopBlock />
      <AuctionBlock />
      <TypesOfAction />
      <DesignedForEveryone />
      <IndustrySolutions />
      {/* <ChainsBlock /> */}
      {/* <BuildWithBounce /> */}
      {/* <CompanyList /> */}
      {/* <TopStack /> */}
      <BounceLabs />
      {/* {!isMd && <BinanceExchange />} */}
      {showVideo && (
        <Box
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            background: '#fff',
          }}
        >
          <video
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: isMd ? 'contain' : 'cover',
            }}
            playsInline
            webkit-playsinline=""
            x5-playsinline=""
            x-webkit-airplay="allow"
            muted
            auto-pause-if-navigate
            autoPlay
            src="https://images-v3.bounce.finance/74560e87b071e1a1e514ca1df9de8cfc-1675665928.mov"
            ref={videoEl}
            onEnded={() => {
              setShowVideo(false);
              const homeBannerVideo: HTMLVideoElement | null = isMd
                ? (document.getElementById('videoMd') as HTMLVideoElement)
                : (document.getElementById('videoPc') as HTMLVideoElement);
              homeBannerVideo &&
                homeBannerVideo?.play &&
                homeBannerVideo?.play();
            }}
          ></video>
        </Box>
      )}
      <HomeDialog />
    </div>
  );
};

export default Home;
