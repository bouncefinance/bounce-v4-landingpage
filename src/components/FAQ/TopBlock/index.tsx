import React from 'react';
import { useTopBlockStyles } from './useTopBlockStyles';
import { Container, Typography, Box } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import ComBtn from 'src/components/common/ComBtn';
import { useIsMDDown } from '../../../modules/theme';

export const TopBlock = () => {
  const classes = useTopBlockStyles();
  const isMd = useIsMDDown();

  return (
    <div className={classes.pageRoot}>
      <Container maxWidth={false} className={classes.pageContainer}>
        <WithAnimation
          className={classes.title}
          Component={Typography}
          variant="h2"
        >
          How can we help?
        </WithAnimation>
        <WithAnimation>
          <Box className={classes.searchBox}>
            <img
              className={classes.searchIcon}
              src="/images/FAQ/search-icon.svg"
              alt=""
            />
            <input
              className={classes.searchInput}
              type="text"
              placeholder="Type your question here..."
            />
            {!isMd && (
              <ComBtn
                style={{
                  width: 130,
                  textAlign: 'center',
                  padding: '0',
                  marginLeft: 30,
                }}
                text={'Search'}
              ></ComBtn>
            )}
          </Box>
        </WithAnimation>
      </Container>
    </div>
  );
};
