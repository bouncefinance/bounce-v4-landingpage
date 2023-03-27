import React from 'react';
import { useBounceToolboxStyles } from './useBounceToolboxStyles';
import { Container, Grid } from '@material-ui/core';
import { BottomBlock } from '../BottomBlocks/components/BottomBlock';
import { ToolboxIcon } from '../common/components/Icons/ToolboxIcon';
import { useIsLGDown } from '../theme';
import { WithAnimation } from '../WithAnimation';
import classNames from 'classnames';
import { SideContent } from '../common/components/SideContent';
import { WithScrollFreezing } from '../WithScrollFreezing';
import { t } from 'src/i18n/intl';

export const BounceToolbox = () => {
    const classes = useBounceToolboxStyles();
    const isLGDown = useIsLGDown();

    return (
        <WithScrollFreezing>
            <div className={classes.toolbox} id="bounce-toolbox">
                <div className={classes.wrap}>
                    <Container maxWidth={false} className={classes.topContainer}>
                        <Grid container>
                            <Grid item xs={12} lg={6}>
                                <SideContent
                                    BrandLogo={ToolboxIcon}
                                    brandName={t('bounce-toolbox.brand')}
                                    title={t('bounce-toolbox.title')}
                                    text={t('bounce-toolbox.text')}
                                    smallTitleStyle
                                    className={classes.toolboxText}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <WithAnimation
                                    className={classes.screenWrap}
                                    defaultAnimation={false}
                                    addClassInView={classes.screenInView}
                                >
                                    <img className={classNames(classes.screenImg, !isLGDown && classes.screen)} src="/images/toolbox-screen.png" alt="" />
                                </WithAnimation>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </WithScrollFreezing>
    );
};
