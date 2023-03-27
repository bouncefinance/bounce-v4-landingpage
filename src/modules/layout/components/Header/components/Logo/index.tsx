import Link from 'next/link';
import { LogoIcon } from 'src/modules/common/components/Icons/LogoIcon';
import { LogoMobileIcon } from 'src/modules/common/components/Icons/LogoMobileIcon';
import { useLogoStyles } from './useLogoStyles';

export const Logo = () => {
  const classes = useLogoStyles();
  return (
    <Link href="/">
      <div className={classes.root}>
        <LogoIcon className={classes.img} />
        <LogoMobileIcon className={classes.mobileImg}/>
        <span className={classes.name}>Bounce</span>
      </div>
    </Link>
  );
};
