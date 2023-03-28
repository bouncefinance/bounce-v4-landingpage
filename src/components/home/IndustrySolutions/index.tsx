import React from 'react';
import { useIndustrySolutionsStyles } from './useIndustrySolutionsStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import IndustryTitle from './components/IndustryTitle';
import { WithAnimation } from 'src/modules/WithAnimation';
import classNames from 'classnames';

const AuctionBlock: React.FC = () => {
  const classes = useIndustrySolutionsStyles();
  const industryList = [
    {
      icon: '/images/home/industry-solutions/icon1.svg',
      title: 'For Web3 and Crypto',
      content:
        'With the most extensive infrastructure, we lead the way in hosting a diverse array of auctions on multiple blockchains for unparalleled accessibility and versatility.',
    },
    {
      icon: '/images/home/industry-solutions/icon2.svg',
      title: 'For Embeded Finance',
      content:
        'With us, you can create auctions that are flexible and accessible, unleashing your power to achieve your goals.',
    },
    {
      icon: '/images/home/industry-solutions/icon3.svg',
      title: 'For Traditional Auction settlement',
      content:
        'We adopt decentralized bank-free crypto payments, offering exceptional security with one-time authentication and irreversible execution.',
    },
    {
      icon: '/images/home/industry-solutions/icon4.svg',
      title: 'For Advertisers',
      content:
        'As a platform, we empower you to auction ads directly from websites, without any intermediaries or obstacles.',
    },
  ];
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="industry-block">
        <Container maxWidth="xl" className={classes.container}>
          <IndustryTitle />
          <WithAnimation
            className={classes.industryCentent}
            defaultAnimation={false}
            addClassInView={classes.industryCententShow}
          >
            <Typography className={classes.industryTitle}>
              Industry Solutions
            </Typography>
            <Grid container spacing={2}>
              {industryList.map((item, index) => (
                <Grid item md={6} sm={12}>
                  <Box className={classNames(classes.industryItem, index === 1 || index === 2 ? classes.industryBg: '' )}>
                    <img
                      className={classes.industryItemIcon}
                      src={item.icon}
                    />
                    <Typography className={classes.industryItemTitle}>
                      {item.title}
                    </Typography>
                    <Typography className={classes.industryItemContent}>
                      {item.content}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </WithAnimation>
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default AuctionBlock;
