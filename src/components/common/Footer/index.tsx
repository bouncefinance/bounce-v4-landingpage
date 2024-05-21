import React from 'react';
import { useIsLGDown } from '../../../modules/theme';
import FooterPc from '../FooterPC';
import FooterMobile from '../FooterMobile';
export interface FooterProps {
  colorTheme?: 'light' | 'dark';
  noBg?: boolean;
}
const Footer: React.FC<FooterProps> = ({
  colorTheme = 'light',
  noBg = false,
}) => {
  const isLg = useIsLGDown();
  return (
    <>
      {isLg ? (
        <FooterMobile colorTheme={colorTheme} noBg={noBg} />
      ) : (
        <FooterPc noBg={noBg} colorTheme={colorTheme} />
      )}
    </>
  );
};

export default Footer;
