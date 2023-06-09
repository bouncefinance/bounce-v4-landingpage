import React, { useMemo, useState } from 'react';
import { useTackiesTheIssuesStyles } from './useTackiesTheIssuesStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { WithAnimation } from 'src/modules/WithAnimation';
import Footer from 'src/components/common/Footer';
import classNames from 'classnames';
import { useIsMDDown } from '../../../modules/theme';

const TackiesTheIssues: React.FC = () => {
  const classes = useTackiesTheIssuesStyles();
  const isMd = useIsMDDown();

  const [slideIndex, setSlideIndex] = useState(0);
  const industryList = useMemo(() => {
    const data = [
      {
        icon: '/images/realWorldAuction/p1.svg',
        title: 'Improve transparency',
        content: `Bounce's on-chain auction process offers a transparent and secure environment for bidding ads, giving all parties involved an equal opportunity to participate.`,
      },
      {
        icon: '/images/realWorldAuction/p2.svg',
        title: 'Expand reach',
        content: `Bounce's platform offers a wide range of options for ads placement, giving businesses the ability to reach a larger audience and maximize their reach.`,
      },
      {
        icon: '/images/realWorldAuction/p3.svg',
        title: 'Lower cost',
        content: `By offering a more efficient and cost-effective solution, Bounce's ads auction helps businesses reduce the cost of advertising and improve their return on investment.`,
      },
      {
        icon: '/images/realWorldAuction/p4.svg',
        title: 'Eliminate risk of fraud and manipulation',
        content: `With Bounce’s on-chain ads auction, all transaction, bid history and auction outcomes are recorded on a public ledger, I.e. blockchain. This eliminates the risk of fraud or manipulation and enhances the transparency and fairness of advertising.`,
      },
      {
        icon: '/images/realWorldAuction/p5.svg',
        title: 'Empower customization',
        content: `Bounce provides Ads sellers with the flexibility to Implement our Ads plugin to their websites and select the area they want to provide ads. Both the Ads buyers and sellers are free to choose which type and mode of auction they prefer.`,
      },
      {
        icon: '/images/realWorldAuction/p6.svg',
        title: 'Encourage engagement',
        content: `Bounce's ads auction solution transforms traditional advertising by allowing users to participate in the auction process, creating an interactive and dynamic environment that encourages engagement and fosters a sense of community.`,
      },
    ];
    return data.slice(slideIndex * 4, slideIndex * 4 + 4);
  }, [slideIndex]);
  function IndustryItem({ item, index }: { item: any; index: number }) {
    return (
      <Box
        className={classNames(
          classes.industryItem,
          [1, 3, 5].indexOf(index) > -1 ? classes.industryItem2 : '',
        )}
      >
        <WithAnimation>
          <img className={classes.itemIcon} src={item.icon} alt="" />
        </WithAnimation>
        <WithAnimation>
          <Typography className={classes.industryItemTitle}>
            {item.title}
          </Typography>
        </WithAnimation>
        <WithAnimation>
          <Typography className={classes.industryItemContent}>
            {item.content}
          </Typography>
        </WithAnimation>
      </Box>
    );
  }

  return (
    <WithScrollFreezing>
      <div className={classes.root} id="industry-block">
        <Container maxWidth="xl" className={classes.container}>
          <WithAnimation>
            <Typography className={classes.industryTitle}>
              Bounce Finance's Ad Space Auction{' '}
              <span className={classes.bottomLine}>Provides A Solution</span>
            </Typography>
          </WithAnimation>
          <Box className={classes.paginationBox}>
            {slideIndex === 0 ? (
              <img
                className={classNames(
                  classes.paginationBtn,
                  classes.paginationDisabled,
                )}
                src="/images/realWorldAuction/left-active.png"
                alt=""
              />
            ) : (
              <img
                className={classes.paginationBtn}
                onClick={() => {
                  setSlideIndex(0);
                }}
                src="/images/realWorldAuction/left-arrow.png"
                alt=""
              />
            )}
            {slideIndex === 1 ? (
              <img
                className={classNames(
                  classes.paginationBtn,
                  classes.paginationDisabled,
                )}
                src="/images/realWorldAuction/right-active.png"
                alt=""
              />
            ) : (
              <img
                onClick={() => {
                  setSlideIndex(1);
                }}
                className={classes.paginationBtn}
                src="/images/realWorldAuction/right-arrow.png"
                alt=""
              />
            )}
          </Box>
          {!isMd && (
            <Grid
              container
              spacing={2}
              className={isMd ? classes.mobileScroll : ''}
            >
              {industryList.map((item, index) => (
                <Grid
                  item
                  md={3}
                  sm={11}
                  className={isMd ? classes.mobileScrollItem : ''}
                >
                  <IndustryItem item={item} index={index} />
                </Grid>
              ))}
            </Grid>
          )}
          {isMd && (
            <Box className={classes.mobileScroll}>
              {industryList.map((item, index) => (
                <Box className={classes.mobileScrollItem}>
                  <IndustryItem item={item} index={index} />
                </Box>
              ))}
            </Box>
          )}
        </Container>
        <Footer colorTheme={'dark'} noBg={false}></Footer>
      </div>
    </WithScrollFreezing>
  );
};

export default TackiesTheIssues;
