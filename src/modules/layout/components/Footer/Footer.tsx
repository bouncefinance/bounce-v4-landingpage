import React from 'react';
import { useFooterStyles } from './useFooterStyles';
import { Container, Grid, Link } from '@material-ui/core';
import classNames from 'classnames';
import { SocialLinks } from '../SocialLinks';
import { t } from 'src/i18n/intl';

export const Footer = () => {
  const classes = useFooterStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth={false} className={classes.container}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={12} lg={7} xl={7} className={classes.col}>
            {t('footer.copyrights', {
              year: new Date().getFullYear(),
            })}
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            lg={5}
            xl={5}
            className={classNames(classes.rightWrap)}
          >
            <Grid container className={classNames(classes.rightContent)}>
              <Grid
                item
                xs={12}
                md={12}
                lg={4}
                xl={4}
                className={classNames(classes.rightCol, classes.socialCol)}
              >
                {/* <SocialLinks /> */}
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                lg={4}
                xl={4}
                className={classNames(classes.docCol, classes.rightCol)}
              >
                <Link
                  href={'https://app.bounce.finance/TermsOfService.html'}
                  role="link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={classes.link}
                >
                  {t('footer.terms-of-service')}
                </Link>
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                lg={4}
                xl={4}
                className={classNames(
                  classes.docCol,
                  classes.rightCol,
                  classes.policyCol,
                )}
              >
                <Link
                  href={'https://app.bounce.finance/PrivacyPolicy.html'}
                  role="link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={classes.link}
                >
                  {t('footer.privacy-policy')}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
