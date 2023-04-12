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
      link: 'https://twitter.com/bounce_finance',
    },
    {
      icon: '/images/joinCommunity/telegram.svg',
      name: 'Telegram',
      desc: 'Join our telegram community to get newest information',
      link: 'https://t.me/bouncefinance',
    },
    {
      icon: '/images/joinCommunity/medium.svg',
      name: 'Medium',
      desc: 'Join our medium to get newest information',
      link: 'https://bouncefinance.medium.com/',
    },
    {
      icon: '/images/joinCommunity/forum.svg',
      name: 'Forum',
      desc: 'Join our forum to get newest information',
      link: 'https://community.bounce.finance/',
    },
    {
      icon: '/images/joinCommunity/governance.svg',
      name: 'Governance',
      desc: 'Join our governance to get newest information',
      link: 'https://snapshot.org/#/bouncedao.eth',
    },
    {
      icon: '/images/joinCommunity/youtube.svg',
      name: 'Youtube',
      desc: 'Join our youtube to get newest information',
      link: 'https://youtube.com/channel/UCXP8b1rwRcoG3nBRIJbHCRA',
    },
    {
      icon: '/images/joinCommunity/discord.svg',
      name: 'Discord',
      desc: 'Join our discord to get newest information',
      link: 'https://discord.gg/EFQC6jYd8e',
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
                <Box
                  className={classes.itemBox}
                  onClick={() => {
                    item.link && window.open(item.link, '_blank');
                  }}
                >
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
