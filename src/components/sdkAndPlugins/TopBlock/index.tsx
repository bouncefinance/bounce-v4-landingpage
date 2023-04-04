import React from 'react';
import { useTopBlockStyles } from './useTopBlockStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import ComBtn from 'src/components/common/ComBtn';
import classNames from 'classnames';
import Footer from 'src/components/common/Footer';
import { useIsMDDown } from '../../../modules/theme';

export const TopBlock = () => {
  const classes = useTopBlockStyles();
  const isMd = useIsMDDown();
  return (
    <div className={classes.pageRoot}>
      <Container maxWidth={false} className={classes.pageContainer}>
        <WithAnimation
          className={classes.title1}
          Component={Typography}
          variant="h2"
        >
          SDKs & Plug-ins
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Plug and Play.
        </WithAnimation>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Bring Auction Everywhere
        </WithAnimation>
        <Grid container spacing={2}>
          <Grid item md={7} sm={12}>
            <WithAnimation className={classes.text} Component={Typography}>
              Build, configure, and launch your own auction in just a few
              minutes. experience the convenience and flexibility of customizing
              your auction directly from Your website, with minimal disruption
              to your typical user experience.
            </WithAnimation>
            <WithAnimation className={classes.btnBox}>
              <ComBtn
              handleClick={() => {
                window.open('https://www.npmjs.com/package/bounce-sdk-beta', '_blank')
              }}
                style={{
                  marginRight: 16,
                }}
                text={'Developer Docs'}
              ></ComBtn>
            </WithAnimation>
          </Grid>
          <Grid item md={5} sm={12}>
            <Box className={classes.rightImgBox}>
              <WithAnimation className={classes.p1} rootMargin={'50%'}>
                <img
                  className={classes.bannerImg}
                  src="/images/sdkAndPlugins/p1.png"
                  alt=""
                />
              </WithAnimation>
              <WithAnimation
                defaultAnimation={false}
                className={classes.p2}
                addClassInView={classes.p2Show}
                rootMargin={'50%'}
              >
                <img
                  className={classes.bannerImg}
                  src="/images/sdkAndPlugins/p2.png"
                  alt=""
                />
              </WithAnimation>
              <WithAnimation
                defaultAnimation={false}
                className={classes.p3}
                addClassInView={classes.p3Show}
                rootMargin={'50%'}
              >
                <img
                  className={classes.bannerImg}
                  src="/images/sdkAndPlugins/p3.png"
                  alt=""
                />
              </WithAnimation>
              <WithAnimation
                defaultAnimation={false}
                className={classes.p4}
                addClassInView={classes.p4Show}
                rootMargin={'50%'}
              >
                <img
                  className={classes.bannerImg}
                  src="/images/sdkAndPlugins/p4.png"
                  alt=""
                />
              </WithAnimation>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={isMd ? 0 : 2}
          style={{ marginBottom: isMd ? 56 : 160 }}
        >
          <Grid item md={7} sm={12} style={{ paddingTop: 80 }}>
            <WithAnimation className={classes.text2} Component={Typography}>
              Enhance Your Auction Experience with Bounce Finance's Innovative
              SDKs and Plugins
            </WithAnimation>
            <WithAnimation className={classes.text3} Component={Typography}>
              Customization is at the forefront of our offerings, with the
              ability to tailor the auction experience to meet the unique needs
              of each user. The seamless integration of Bounce Finance's SDKs
              and plug-ins into your websites eliminates the need for you to
              navigate to a separate platform, empowering you to run your own
              auctions wherever and however you like.
            </WithAnimation>
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <Box className={classes.sdkAniBlock}>
              <WithAnimation>
                <Box className={classes.sdkAniBlockCenter}>
                  <Typography className={classes.sdkTitle}>
                    SDKs and Plug-ins
                  </Typography>
                  <Box className={classes.sdkBtnBox}>
                    <img
                      className={classes.icon5}
                      src="/images/sdkAndPlugins/icon5.png"
                      alt=""
                    />
                    <img
                      className={classes.icon4}
                      src="/images/sdkAndPlugins/icon4.png"
                      alt=""
                    />
                  </Box>
                  <img
                    className={classes.sdkImg}
                    src="/images/sdkAndPlugins/p8.png"
                    alt=""
                  />
                </Box>
                <Box className={classes.sdkBlueBtn}>Auction Now</Box>
              </WithAnimation>
            </Box>
            {/* <WithAnimation>
              <img
                className={classes.p5}
                src="/images/sdkAndPlugins/p5.png"
                alt=""
              />
            </WithAnimation> */}
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {!isMd && (
            <Grid item xs={6}>
              <Box className={classes.leftImgAnimation}>
                <WithAnimation>
                  <Box className={classes.beginnerRightImgbg}></Box>
                </WithAnimation>
                <WithAnimation className={classes.p7}>
                  <img
                    className={classes.animationImg}
                    src="/images/sdkAndPlugins/p7.png"
                  />
                </WithAnimation>
                <WithAnimation
                  className={classNames(classes.smallStart, classes.starAction)}
                  rootMargin={'50%'}
                >
                  <img
                    className={classes.animationImg}
                    src="/images/sdkAndPlugins/star-icon-small.png"
                  />
                </WithAnimation>
                <WithAnimation
                  className={classNames(classes.bigStart, classes.starAction)}
                  rootMargin={'50%'}
                >
                  <img
                    className={classes.animationImg}
                    src="/images/sdkAndPlugins/star-icon-big.png"
                  />
                </WithAnimation>
                <WithAnimation className={classes.icon1}>
                  <img
                    className={classes.animationImg}
                    src="/images/sdkAndPlugins/icon1.png"
                  />
                </WithAnimation>
                <WithAnimation className={classes.icon2}>
                  <img
                    className={classes.animationImg}
                    src="/images/sdkAndPlugins/icon2.png"
                  />
                </WithAnimation>
                <WithAnimation className={classes.icon3}>
                  <img
                    className={classes.animationImg}
                    src="/images/sdkAndPlugins/icon3.png"
                  />
                </WithAnimation>
              </Box>
            </Grid>
          )}
          <Grid
            item
            md={6}
            sm={12}
            style={{
              paddingTop: 19,
            }}
          >
            <WithAnimation>
              <Typography className={classes.rightTitle}>
                The Road to Deplatforming
              </Typography>
            </WithAnimation>
            <WithAnimation>
              <Typography className={classes.rightDesc}>
                We believe that deplatforming on-chain auction is the key to
                unlocking its full potential. By allowing individuals and
                businesses to create their own auctions on their own websites or
                apps, we can provide greater customization options, enhanced
                security, and a more seamless user experience.
              </Typography>
            </WithAnimation>
            <WithAnimation>
              <img
                className={classes.p6}
                src="/images/sdkAndPlugins/p6.png"
                alt=""
              />
            </WithAnimation>
            {isMd && (
              <WithAnimation style={{ marginLeft: '-16px' }}>
                <img
                  className={classes.p6}
                  src="/images/sdkAndPlugins/star-mobile.svg"
                  alt=""
                  style={{ marginTop: 80 }}
                />
              </WithAnimation>
            )}
          </Grid>
        </Grid>
      </Container>
      <Box
        style={{
          height: 106,
        }}
      ></Box>
      <Footer colorTheme={'dark'} noBg={false}></Footer>
    </div>
  );
};
