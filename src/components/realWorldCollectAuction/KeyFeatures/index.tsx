import React from 'react';
import { useKeyFeaturesStyles } from './useKeyFeaturesStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { WithAnimation } from 'src/modules/WithAnimation';
import classNames from 'classnames';

const KeyFeature: React.FC = () => {
  const classes = useKeyFeaturesStyles();
  const industryList = [
    {
      title: 'Tokenizing Physical Assets',
      content:
        'Representing ownership rights to a physical asset in the form of a digital token allows the asset to be traded, bought, and sold in a decentralized, digitized manner on a blockchain network.',
    },
    {
      title: 'On-chain Auction and Representation',
      content:
        'Our auctioning process of physical assets is recorded and tracked on blockchain, providing a secure, transparent, and fair environment for these assets to be traded.',
    },
    {
      title: 'Authentication and Warehouse Services',
      content:
        'Our real goods auction begins by the seller sending the physical asset to a secure warehouse for authentication, and ends with the warehouse sending the physical asset to the buyer once the on-chain trading is completed.',
    },
    {
      title: 'NFT Redemption',
      content:
        'The creation and trading of Non-Fungible Tokens (NFTs) for physical assets is a highlight feature of our real goods auction process.',
    },
  ];
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="industry-block">
        <Container maxWidth="xl" className={classes.container}>
          <WithAnimation>
            <Typography className={classes.industryTitle}>
              Key Features of Our On-Chain Real World collectibles Auction
            </Typography>
          </WithAnimation>
          <Grid container spacing={2}>
            {industryList.map((item, index) => (
              <Grid item xs={6}>
                <Box
                  className={classNames(
                    classes.industryItem,
                    index === 1 ? classes.industryItem2 : '',
                  )}
                >
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

export default KeyFeature;
