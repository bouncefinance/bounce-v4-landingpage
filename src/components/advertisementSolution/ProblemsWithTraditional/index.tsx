import React from 'react';
import { useProblemsWithTraditionalStyles } from './useProblemsWithTraditionalStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { WithAnimation } from 'src/modules/WithAnimation';
import classNames from 'classnames';

const KeyFeatures: React.FC = () => {
  const classes = useProblemsWithTraditionalStyles();
  const industryList = [
    {
      icon: '/images/advertisementSolution/icon3.svg',
      title: 'Lack of transparency',
      content:
        'Traditional advertising methods often lack transparency, making it difficult for advertisers to know how their ads are performing and how they are being received by the target audience.',
    },
    {
      icon: '/images/advertisementSolution/icon4.svg',
      title: 'Limited reach',
      content:
        'Traditional advertising methods can be limited in their reach, especially for small businesses, making it difficult for them to reach their target audience effectively.',
    },
    {
      icon: '/images/advertisementSolution/icon5.svg',
      title: 'High costs',
      content:
        'Traditional advertising methods can be expensive, especially for small businesses, making it difficult for them to compete with larger businesses.',
    },
    {
      icon: '/images/advertisementSolution/icon6.svg',
      title: 'Fraud and manipulation',
      content:
        'Traditional advertising methods are vulnerable to fraud and manipulation, such as click fraud, which can negatively impact the performance of an advertising campaign.',
    },

    {
      icon: '/images/advertisementSolution/icon7.svg',
      title: 'Limited customization',
      content:
        'Traditional advertising methods often have limited customization options, making it difficult for businesses to tailor their advertising campaigns to meet their specific needs.',
    },
    {
      icon: '/images/advertisementSolution/icon8.svg',
      title: 'Lack of engagement',
      content:
        'Traditional advertising methods can lack engagement and interaction with the target audience, making it difficult for businesses to build relationships with their customers.',
    },
  ];
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="industry-block">
        <Container maxWidth="xl" className={classes.container}>
          <WithAnimation>
            <Typography className={classes.industryTitle}>
              <span className={classes.bottomLine}>Problems</span> with
              Traditional Advertising1
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
