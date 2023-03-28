import React from 'react';
import {useTackiesTheIssuesStyles} from './useTackiesTheIssuesStyles';
import {Container, Typography, Box, Grid} from '@material-ui/core';
import {WithScrollFreezing} from 'src/modules/WithScrollFreezing';
import {WithAnimation} from 'src/modules/WithAnimation';
import Footer from 'src/components/common/Footer';
import classNames from 'classnames';
import {useIsMDDown} from "../../../modules/theme";

const TackiesTheIssues: React.FC = () => {
  const classes = useTackiesTheIssuesStyles();
  const isMd = useIsMDDown();
  const industryList = [
    {
      icon: '/images/realWorldAuction/p1.svg',
      title: 'Improve transparency & secuity',
      content: `Bounce's on-chain solution offers a more secure and transparent platform for real goods auction, unleashing the power of decentralization.`,
    },
    {
      icon: '/images/realWorldAuction/p2.svg',
      title: 'Lower cost, time saving',
      content: `Bounce's on-chain real goods auction minimizes the cost and time involved in traditional real goods auctions, providing a more cost-effective and efficient solution.`,
    },
    {
      icon: '/images/realWorldAuction/p3.svg',
      title: 'Enhance efficiency',
      content: `Bounce's on-chain solution streamlines the bidding process, making it more efficient and user-friendly`,
    },
    {
      icon: '/images/realWorldAuction/p4.svg',
      title: 'Risk of fraud and manipulation',
      content: `With Bounce’s on-chain auction, all transaction, bid history and auction outcomes are recorded on a public ledger, I.e. blockchain. This eliminates the risk of fraud or manipulation and enhances the transparency and fairness of advertising.`,
    },
  ];

  function IndustryItem({item, index}: { item: any, index: number }) {
    return (
      <Box
        className={classNames(
          classes.industryItem,
          [1, 3, 5].indexOf(index) > -1 ? classes.industryItem2 : '',
        )}
      >
        <WithAnimation>
          <img className={classes.itemIcon} src={item.icon} alt=""/>
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
    )
  }

  return (
    <WithScrollFreezing>
      <div className={classes.root} id="industry-block">
        <Container maxWidth="xl" className={classes.container}>
          <WithAnimation>
            <Typography className={classes.industryTitle}>
              How Bounce's On-Chain Auction Solution{' '}
              <span
                style={{
                  borderBottom: '2px solid #2B51DA',
                }}
              >
                Tackles the Issues
              </span>
            </Typography>
          </WithAnimation>
          {!isMd && <Grid container spacing={2} className={isMd ? classes.mobileScroll : ''}>
            {industryList.map((item, index) => (
              <Grid item md={3} sm={11} className={isMd ? classes.mobileScrollItem : ''}>
                <IndustryItem item={item} index={index}/>
              </Grid>
            ))}
          </Grid>}
          {isMd && <Box className={classes.mobileScroll}>
            {industryList.map((item, index) => (
              <Box className={classes.mobileScrollItem}>
                <IndustryItem item={item} index={index}/>
              </Box>
            ))}
          </Box>}
        </Container>
        <Footer colorTheme={'dark'} noBg={false}></Footer>
      </div>
    </WithScrollFreezing>
  );
};

export default TackiesTheIssues;
