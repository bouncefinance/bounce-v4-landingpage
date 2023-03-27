import React from 'react';
import { useTackiesTheIssuesStyles } from './useTackiesTheIssuesStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { WithAnimation } from 'src/modules/WithAnimation';
import Footer from 'src/components/common/Footer';
import classNames from 'classnames';

const TackiesTheIssues: React.FC = () => {
  const classes = useTackiesTheIssuesStyles();
  const industryList = [
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
  ];
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="industry-block">
        <Container maxWidth="xl" className={classes.container}>
          <WithAnimation>
            <Typography className={classes.industryTitle}>
              Bounce's Ad Auction Provides A{' '}
              <span
                style={{
                  borderBottom: '2px solid #2B51DA',
                }}
              >
                Solution
              </span>
            </Typography>
          </WithAnimation>
          <Grid container spacing={2}>
            {industryList.map((item, index) => (
              <Grid item xs={3}>
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
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer colorTheme={'dark'} noBg={false}></Footer>
      </div>
    </WithScrollFreezing>
  );
};

export default TackiesTheIssues;
