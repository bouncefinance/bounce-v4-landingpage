import React, { useState } from 'react';
import { useFAQStyles } from './useFAQStyles';
import { Container, Typography, Box } from '@material-ui/core';
import { WithAnimation } from 'src/modules/WithAnimation';
import { WithScrollFreezing } from 'src/modules/WithScrollFreezing';
import Footer from 'src/components/common/Footer';
import classNames from 'classnames';
import { useIsMDDown } from '../../../modules/theme';

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
  const isMd = useIsMDDown();
  const offerList = [
    {
      question: 'How to sign up for an account?',
      answer:
        'For details, please see : ',
        link:'https://youtu.be/J55RQSk7QBI'
    },
    {
      question: 'How to create a token auction pool?',
      answer:
        'For details, please see : ',
        link:'https://youtu.be/yBLsSgu5hcQ'
    },
    {
      question: 'How to create a fixed-price auction pool?',
      answer:
        'For details, please see : ',
        link:'https://youtu.be/XvhOMsrAVos'
    },
    {
      question: 'How to create a random selection auction pool?',
      answer:
        'For details, please see : ',
        link:'https://youtu.be/mijzNmoBS5E'
    },
    {
        question: 'What countries does Bounce Finance restrict?',
        answer:
          'US,Cuba,China,Ukraine,North Korea,Iran,Syria',
          link:''
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
                  <Typography
                    className={classes.question}
                    onClick={() => {
                      if (isMd) {
                        if (currentIndex !== index) {
                          setCurrentIndex(index);
                        } else {
                          setCurrentIndex(99);
                        }
                      }
                    }}
                  >
                    {item.question}
                  </Typography>
                  {!isMd && (
                    <ComBtn
                      isCurrent={index === currentIndex}
                      handleClick={() => {
                        if (currentIndex !== index) {
                          setCurrentIndex(index);
                        } else {
                          setCurrentIndex(99);
                        }
                      }}
                      text={'View more'}
                    ></ComBtn>
                  )}
                </Box>
                <Box
                  className={classNames(
                    classes.answer,
                    currentIndex === index ? classes.current : '',
                  )}
                >
                    {item.answer}
                    <Typography
                        component={'a'}
                        style={{
                            display:'inline-block',
                            color:'#2B51DA'
                        }}
                        href={item.link}
                        target={'_blank'}
                    >
                    {item.link}
                    </Typography>
                </Box>
              </Box>
            </WithAnimation>
          ))}
        </Container>
        <Footer colorTheme={'dark'} noBg={true}></Footer>
      </div>
    </WithScrollFreezing>
  );
};
