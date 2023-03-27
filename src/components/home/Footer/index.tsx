import React from 'react';
import { useFooterStyles } from './useFooterStyles';
import { WithScrollFreezing } from '../../../modules/WithScrollFreezing';
import Footer from '../../common/Footer';

const FooterBlock: React.FC = () => {
  const classes = useFooterStyles();
  return (
    <WithScrollFreezing>
      <div className={classes.footerPage}>
        <div
          className={classes.wrap}
          style={{
            marginBottom: '30px',
          }}
        >
        {/* footer */}
        <Footer colorTheme="dark" />
      </div>
      </div>
    </WithScrollFreezing>
  );
};

export default FooterBlock;
