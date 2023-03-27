import {
  Card,
  Container,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import { useFreelanceMarketBlockStyles } from './useFreelanceMarketBlockStyles';
import { default as marketList } from 'src/mocks/market.json';
import { uid } from 'react-uid';
import Avatar from '../Avatar';
import Footer from 'src/components/common/Footer';

export interface BinanceExchangeConfig {
  showFooter?: true | false;
}
const FreelanceMarketBlock: React.FC<BinanceExchangeConfig> = ({
  showFooter = true,
}) => {
  const classes = useFreelanceMarketBlockStyles();
  // console.log('数据', marketList);
  return (
    <WithScrollFreezing>
      <div className={classes.root}>
        <div className={classes.wrap}>
          <Container maxWidth="xl" disableGutters>
            <WithAnimation
              Component={Typography}
              variant="h2"
              className={classes.title}
            >
              {t('freelance-market.title')}
            </WithAnimation>
            <Grid container spacing={3} className={classes.container}>
              {marketList?.map(item => {
                const data = {
                  id: item.id,
                  fileUrl: item.posts[0].fileUrl,
                  avatar: item.avatar,
                  userName: item.userName,
                  description: item.description,
                  price: item.totalAmount,
                };
                return (
                  <Grid item xs={12} lg={3} key={uid(item)}>
                    <WithAnimation>
                      <Link
                        href={`https://metalents.com/services/${data.id}`}
                        target="_blank"
                        className={classes.cardLink}
                      >
                        <Card className={classes.cardBox}>
                          <div className={classes.cardImg}>
                            <img src={data.fileUrl} />
                          </div>
                          <div className={classes.cardDetail}>
                            <div className={classes.personInfo}>
                              <div className={classes.user}>
                                <Avatar size={40} src={data.avatar}>
                                  {data.userName?.[0]?.toLocaleUpperCase() ||
                                    'U'}
                                </Avatar>
                                <Typography
                                  variant="body2"
                                  className={classes.userName}
                                >
                                  {data.userName}
                                </Typography>
                              </div>
                              <div className={classes.likeBox}>
                                <img src="/images/like.svg" />
                              </div>
                            </div>
                            <Typography
                              variant="body1"
                              className={classes.description}
                            >
                              {data.description}
                            </Typography>
                            <Typography variant="h5" className={classes.price}>
                              ${data.price}
                            </Typography>
                          </div>
                        </Card>
                      </Link>
                    </WithAnimation>
                  </Grid>
                );
              })}
            </Grid>
            {showFooter && <Footer />}
          </Container>
        </div>
      </div>
    </WithScrollFreezing>
  );
};

export default FreelanceMarketBlock;
