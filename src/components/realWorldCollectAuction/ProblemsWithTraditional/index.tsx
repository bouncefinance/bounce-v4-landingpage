import React from 'react';
import { useProblemsWithTraditionalStyles } from './useProblemsWithTraditionalStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { WithAnimation } from 'src/modules/WithAnimation';
import classNames from 'classnames';
import { useIsMDDown } from '../../../modules/theme';

const KeyFeatures: React.FC = () => {
  const classes = useProblemsWithTraditionalStyles();
  const isMd = useIsMDDown();
  const industryList = [
    {
      icon: '/images/realWorldAuction/p1.svg',
      title: 'Lack of transparency and security',
      content:
        'Traditional real goods auctions often lack transparency, making it difficult for bidders to know how the auction is being conducted and how the results are being determined.',
    },
    {
      icon: '/images/realWorldAuction/p2.svg',
      title: 'High costs',
      content:
        'Traditional real goods auctions can be expensive, especially for small businesses, making it difficult for them to participate and compete with larger businesses.',
    },
    {
      icon: '/images/realWorldAuction/p3.svg',
      title: 'Inefficient bidding process',
      content:
        'Traditional real goods auctions can be inefficient, with a slow and cumbersome bidding process that can discourage potential bidders from participating.',
    },
    {
      icon: '/images/realWorldAuction/p4.svg',
      title: 'Risk of fraud and manipulation',
      content:
        'Traditional real goods auctions are vulnerable to fraud and manipulation, such as bid rigging or false bidding, which can negatively impact the integrity of the auction.',
    },

    {
      icon: '/images/realWorldAuction/p5.svg',
      title: 'Limited customization',
      content:
        'Traditional real goods auctions often have limited customization options, making it difficult for businesses to tailor the auction experience to meet their specific needs.',
    },
    {
      icon: '/images/realWorldAuction/p6.svg',
      title: 'Lack of real-time information',
      content:
        'Traditional real goods auctions often lack real-time information, making it difficult for bidders to stay informed and make informed decisions during the auction.',
    },
  ];
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="industry-block">
        {!isMd && (
          <>
            <WithAnimation rootMargin={'50%'}>
              <img
                className={classes.shoe}
                src="/images/realWorldAuction/icon1.png"
                alt=""
              />
            </WithAnimation>
            <WithAnimation rootMargin={'50%'}>
              <img
                className={classes.watch}
                src="/images/realWorldAuction/watch.png"
                alt=""
              />
            </WithAnimation>
            <WithAnimation rootMargin={'50%'}>
              <img
                className={classes.glass}
                src="/images/realWorldAuction/glass.png"
                alt=""
              />
            </WithAnimation>
            <WithAnimation rootMargin={'50%'}>
              <img
                className={classes.shoe}
                src="/images/realWorldAuction/icon1.png"
                alt=""
              />
            </WithAnimation>
          </>
        )}
        <Container maxWidth="xl" className={classes.container}>
          <WithAnimation>
            <Typography className={classes.industryTitle}>
              <span
                style={{
                  borderBottom: '2px solid #2B51DA',
                }}
              >
                Problems
              </span>
              with Traditional Real Goods Auction
            </Typography>
          </WithAnimation>

          <Grid container spacing={2}>
            {industryList.map((item, index) => (
              <Grid item md={4} sm={12}>
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
      </div>
    </WithScrollFreezing>
  );
};

export default KeyFeatures;
