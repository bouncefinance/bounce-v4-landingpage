import React from 'react';
import { useFreelancerDaoStyles } from './useFreelancerDaoStyles';
import { Container, Grid } from '@material-ui/core';
import { SideScreen } from '../common/components/SideScreen';
import { BouncePolkaIcon } from '../common/components/Icons/BouncePolkaIcon';
import { BottomBlock } from '../BottomBlocks/components/BottomBlock';
import { SideContent } from '../common/components/SideContent';
import { WithScrollFreezing } from '../WithScrollFreezing';
import { t } from 'src/i18n/intl';

export const FreelancerDao = () => {
    const classes = useFreelancerDaoStyles();   

    return (
        <WithScrollFreezing>
            <div className={classes.polkadot} id="bounce-polkadot">
                <div className={classes.wrap}>
                    <Container maxWidth={false} className={classes.topContainer}>
                        <Grid container>
                            <Grid item xs={12} lg={6}>
                                <SideContent
                                    BrandLogo={BouncePolkaIcon}
                                    brandName={t('bounce-polkadot.brand')}
                                    title={t('bounce-polkadot.title')}
                                    text={t('bounce-polkadot.text')}
                                    smallTitleStyle
                                    className={classes.daoText}
                                    btnText={t('common.landing-page')}
                                    btnUrl="https://metalents.com"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <SideScreen screenPath="/images/polkadot-screen.png" />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </WithScrollFreezing>
    );
};
