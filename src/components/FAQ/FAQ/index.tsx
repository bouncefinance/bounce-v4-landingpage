import React, { useState } from 'react';
import { useFAQStyles } from './useFAQStyles';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import Footer from 'src/components/common/Footer';
import classNames from 'classnames';
export interface FooterProps {
  text?: string;
  handleClick?: () => void;
  isCurrent?: boolean;
  style?: React.CSSProperties;
}
const ComBtn: React.FC<FooterProps> = ({
  text = '',
  handleClick,
  isCurrent,
  style,
}) => {
  const classes = useFAQStyles();
  return (
    <Box
      onClick={() => {
        handleClick && handleClick();
      }}
      className={classNames(classes.btn, isCurrent ? classes.btnActive : '')}
      style={{
        ...style,
      }}
    >
      {text}
    </Box>
  );
};
export const FAQ = () => {
  const classes = useFAQStyles();
  const offerList = [
    {
      question: 'How to sign up for an account?',
      answer:
        'For details, please see :  https://www.bounce.finance/tools/token',
    },
    {
      question: 'How to create a fixed-price auction?',
      answer:
        'For details, please see :  https://www.bounce.finance/tools/token',
    },
    {
      question: 'How to sign up for an account?',
      answer:
        'For details, please see :  https://www.bounce.finance/tools/token',
    },
    {
      question: 'How to sign up for an account?',
      answer:
        'For details, please see :  https://www.bounce.finance/tools/token',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <WithScrollFreezing>
      <div className={classes.root} id="bounce-offers-block">
        <Container maxWidth={false} className={classes.container}>
          <WithAnimation
            className={classes.title}
            Component={Typography}
            variant="h2"
          >
            FAQ
          </WithAnimation>
          {offerList.map((item, index) => (
            <WithAnimation>
              <Box className={classes.item}>
                <Box className={classes.questionBox}>
                  <Typography className={classes.question}>
                    {item.question}
                  </Typography>
                  <ComBtn
                    isCurrent={index === currentIndex}
                    handleClick={() => {
                      setCurrentIndex(index);
                    }}
                    text={'View more'}
                  ></ComBtn>
                </Box>
                {currentIndex === index && (
                  <Typography className={classes.answer}>
                    {item.answer}
                  </Typography>
                )}
              </Box>
            </WithAnimation>
          ))}
        </Container>
        <Footer colorTheme={'dark'} noBg={true}></Footer>
      </div>
    </WithScrollFreezing>
  );
};
