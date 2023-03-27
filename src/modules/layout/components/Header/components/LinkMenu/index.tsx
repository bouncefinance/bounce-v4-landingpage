import React, { useState } from 'react';
import { Link, Menu, MenuItem, Grid, Box } from '@material-ui/core';
import { uid } from 'react-uid';
import { useLinkMenuStyles } from './useLinkMenuStyles';
import classNames from 'classnames';
import { ILinksItemProps } from '../NavLink';
import LinkButton from '../LinkButton';
import { AngleDownIcon } from 'src/modules/common/components/Icons/AngleDownIcon';
import { IItemsProps } from '../NavLink';

interface IProductsMenuProps {
  data: ILinksItemProps;
  linkClass?: string;
}

const LinkMenu = ({ linkClass, data }: IProductsMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useLinkMenuStyles();
  const [rightMenu, setRightMenu] = useState<null | Array<IItemsProps>>(null);

  const handleClick = (event: any) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderedDesktop = (
    <>
      <Link
        href="/"
        aria-controls="products-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classNames(linkClass, classes.link)}
      >
        {data.label}
        <AngleDownIcon className={classes.icon} />
      </Link>
      <Menu
        id="products-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.menu, list: classes.menuPadding }}
      >
        <Grid
          container
          onMouseLeave={() => {
            handleClose();
            setRightMenu([]);
          }}
        >
          <Grid item xs className={classes.leftMenu}>
            {data.list &&
              data.list.map(item => {
                if (Array.isArray(item.list) && item.list.length > 0) {
                  return (
                    <MenuItem
                      key={uid(item)}
                      className={classes.menuItem}
                      onMouseEnter={() => {
                        setRightMenu(item.list || []);
                      }}
                    >
                      <Link className={linkClass}>{data.label}</Link>
                    </MenuItem>
                  );
                } else {
                  return (
                    <MenuItem
                      key={uid(item)}
                      className={classes.menuItem}
                      onClick={handleClose}
                      onMouseEnter={() => {
                        setRightMenu([]);
                      }}
                    >
                      <LinkButton data={item} linkClass={linkClass} />
                    </MenuItem>
                  );
                }
              })}
          </Grid>
          {Array.isArray(rightMenu) && rightMenu.length > 0 && (
            <Grid item xs className={classes.rightMenu}>
              {rightMenu.map(j => {
                return (
                  <MenuItem
                    key={uid(j)}
                    className={classes.menuItem}
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    <LinkButton data={j} linkClass={linkClass} />
                  </MenuItem>
                );
              })}
            </Grid>
          )}
        </Grid>
      </Menu>
    </>
  );

  return <>{renderedDesktop}</>;
};

export default LinkMenu;
