import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { useBinanceExchangeStyles } from './useBinanceExchangeStyles';
import { useIsLGDown, useIsMDDown } from '../../../modules/theme';
import { WithScrollFreezing } from '../../../modules/WithScrollFreezing';
import { SideContent } from '../../../modules/common/components/SideContent';
import { LogoIcon } from '../../../modules/common/components/Icons/LogoIcon';
import { t } from 'src/i18n/intl';
import { WithAnimation } from 'src/modules/WithAnimation';
import Footer from '../../common/Footer';

export interface BinanceExchangeConfig {
  showFooter?: true | false;
}
const BinanceExchange:React.FC<BinanceExchangeConfig> = ({ showFooter = true }) => {
  const classes = useBinanceExchangeStyles();
  const isLGDown = useIsLGDown();
  const isMd = useIsMDDown();
  const brandCont = () => {
    return (
      <div className={classes.brandCont}>
        <span>{t('binance-exchange.brand')}</span>
        <img
          src="/images/binance-exchange/fork.png"
          width={!isLGDown ? 20 : 12}
          style={{ margin: !isLGDown ? '0 36px' : '0 20px' }}
        />
        <img
          src="/images/binance-exchange/binance.png"
          height={!isLGDown ? 30 : 20}
        />
      </div>
    );
  };
  return (
    <WithScrollFreezing>
      <div className={classes.binanceExchange} id="binance-exchange">
        <div
          className={classes.wrap}
          style={{
            marginBottom: '30px',
          }}
        >
          <Container maxWidth={false} className={classes.topContainer}>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <SideContent
                  BrandLogo={LogoIcon}
                  brandName={brandCont()}
                  title={t('binance-exchange.title')}
                  text={t('binance-exchange.text')}
                  smallTitleStyle
                  className={classes.wrapText}
                  btnUrl="https://accounts.binance.com/en/register?ref=10760676"
                  btnText={t('binance-exchange.btn-text')}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <WithAnimation
                  className={classes.screenWrap}
                  defaultAnimation={false}
                  addClassInView={classes.screenInView}
                >
                  {isMd ? (
                    <img
                      className={classes.screenImgMobile}
                      src="/images/home/binance-exchange/right.png"
                      alt=""
                    />
                  ) : (
                    <img
                      className={classes.screenImg}
                      src="/images/home/binance-exchange/right.png"
                      alt=""
                    />
                  )}
                </WithAnimation>
              </Grid>
            </Grid>
          </Container>
          {showFooter && <Footer colorTheme={'dark'} />}
        </div>
      </div>
    </WithScrollFreezing>
  );
};

export default BinanceExchange;
