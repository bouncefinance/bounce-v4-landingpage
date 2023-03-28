import { Container, Typography, Grid, Box } from '@material-ui/core';
import React, { useMemo } from 'react';
import { uid } from 'react-uid';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useBounceLabsStyles } from './useBounceLabsStyles';
import Footer from 'src/components/common/Footer';

export type IBounceLabsProps = {};

const BounceLabs: React.FC<IBounceLabsProps> = ({}) => {
  const classes = useBounceLabsStyles();
  const infoList = [
    {
      img: '/images/aiAuctionSolution/logo1.svg',
      title: `The Integration of Bounce's`,
      content: `AI algorithms can be used to assess the value of goods and determine the fair market price, providing a more accurate valuation of assets compared to traditional methods.`,
    },
    {
      img: '/images/aiAuctionSolution/logo2.svg',
      title: `Efficiency`,
      content: `AI can automate various tasks in the auction process, such as bidding and settlement, reducing the time and resources required to conduct an auction.`,
    },
    {
      img: '/images/aiAuctionSolution/logo3.svg',
      title: `Accessibility`,
      content: `Integrating AI and blockchain technology can make the auction process more accessible to a wider range of participants, regardless of location or resources.`,
    },
  ];
  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <div className={classes.wrap}></div>
        <Container maxWidth={false} className={classes.container}>
          <WithAnimation>
            <Typography className={classes.title}>
              The Integration of Bounce's
            </Typography>
          </WithAnimation>
          <WithAnimation>
            <Typography className={classes.title}>
              Decentralized Auction
            </Typography>
          </WithAnimation>
          <WithAnimation>
            <Typography className={classes.title}>Technology and AI</Typography>
          </WithAnimation>
          <Box
            style={{
              height: 127,
            }}
          ></Box>
          <Grid
            container
            spacing={2}
            style={{
              marginBottom: 159,
            }}
          >
            {infoList.map(item => (
              <Grid item xs={4}>
                <Box className={classes.item}>
                  <WithAnimation>
                    <img className={classes.itemLogo} src={item.img} alt="" />
                    <Typography className={classes.itemTitle}>
                      {item.title}
                    </Typography>
                    <Typography className={classes.itemContent}>
                      {item.content}
                    </Typography>
                  </WithAnimation>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Footer colorTheme="dark" noBg={true} />
        </Container>
      </div>
    </WithScrollFreezing>
  );
};

export default BounceLabs;
