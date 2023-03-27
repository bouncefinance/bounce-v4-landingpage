import { Link as ExternalLink } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { uid } from 'react-uid';
import { ILinksItemProps, IListProps, Url } from '../NavLink';

export type IButtonLinkProps = {
  data: ILinksItemProps | IListProps;
  linkClass?: string;
}

const LinkButton: React.FC<IButtonLinkProps> = ({data, linkClass}) => {
  return (
    <>
    {
      data.isExternal ?
      <ExternalLink
        className={linkClass}
        href={data.href as string}
        role="link"
        rel="noopener noreferrer"
        target="_blank"
        key={uid(data)}
      >
        {data.label}
      </ExternalLink> : 
      <Link href={data.href as Url}>
        <a className={linkClass}>{data.label}</a>
      </Link>
    }
    </>
  );
}

export default LinkButton;