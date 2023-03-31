import React from 'react';
import { WithAnimation } from '../../modules/WithAnimation';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { useJoinCommunity } from '../../components/joinCommunity/useJoinCommunity';
import Footer from '../../components/common/Footer';

export type IHomeProps = {};

const JoinCommunity: React.FC<IHomeProps> = ({}) => {
  const classes = useJoinCommunity();
  const socialList = [
    {
      icon: '/images/joinCommunity/twitter.svg',
      name: 'Twitter',
      desc: 'Join our twitter community to get newest information',
    },
    {
      icon: '/images/joinCommunity/telegram.svg',
      name: 'Telegram',
      desc: 'Join our telegram community to get newest information',
    },
    {
      icon: '/images/joinCommunity/medium.svg',
      name: 'Medium',
      desc: 'Join our medium to get newest information',
    },
    {
      icon: '/images/joinCommunity/forum.svg',
      name: 'Forum',
      desc: 'Join our forum to get newest information',
    },
    {
      icon: '/images/joinCommunity/governance.svg',
      name: 'Governance',
      desc: 'Join our governance to get newest information',
    },
    {
      icon: '/images/joinCommunity/youtube.svg',
      name: 'Youtube',
      desc: 'Join our youtube to get newest information',
    },
  ];
  return (
    <div className={classes.pageRoot}>
      <Container maxWidth={false} className={classes.pageContainer}>
        <WithAnimation
          className={classes.title2}
          Component={Typography}
          variant="h2"
        >
          Join our community
        </WithAnimation>
        <Grid container className={classes.grid} spacing={3}>
          {socialList.map((item, idx) => {
            return (
              <Grid item md={4} key={idx}>
                <Box className={classes.itemBox}>
                  <img src={item.icon} className={classes.icon} />
                  <Box className={classes.textColumn}>
                    <Typography className={classes.socialName}>
                      {item.name}
                    </Typography>
                    <Typography className={classes.text}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Footer colorTheme={'dark'} noBg={false}></Footer>
    </div>
  );
};

export default JoinCommunity;
