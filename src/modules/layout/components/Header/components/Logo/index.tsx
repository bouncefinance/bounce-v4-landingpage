import Link from 'next/link';
import { useLogoStyles } from './useLogoStyles';

export const Logo = () => {
  const classes = useLogoStyles();
  return (
    <Link href="/">
      <div className={classes.root}>
        <img src="/images/header/logo.svg" alt="" />
      </div>
    </Link>
  );
};
