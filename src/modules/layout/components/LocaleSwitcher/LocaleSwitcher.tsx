import React, { useCallback, useMemo, useState } from 'react';
import { Locale } from '../../../../i18n/types/locale';
import { Link as MuiLink, Menu, MenuItem } from '@material-ui/core';
import { uid } from 'react-uid';
import { useLocalSwitcherStyles } from './useLocalSwitcherStyles';
import { GlobeIcon } from '../../../common/components/Icons/GlobeIcon';
import classNames from 'classnames';
import intl from 'react-intl-universal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { t } from 'src/i18n/intl';

interface ILocalSwitcherProps {
  style?: React.CSSProperties;
}

export const LocaleSwitcher = (LocaleSwitcher: ILocalSwitcherProps) => {
  const { style } = LocaleSwitcher;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const classes = useLocalSwitcherStyles();

  const handleClick = (event: any) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const localeOptions = useMemo(
    () => [
      {
        value: Locale['en-US'],
        label: t('language.en-US'),
      },
      {
        value: Locale['zh-CN'],
        label: t('language.zh-CN'),
      },
    //   {
    //     value: Locale['tr-TR'],
    //     label: t('language.tr-TR'),
    //   },
    //   {
    //     value: Locale['ja-JP'],
    //     label: t('language.ja-JP'),
    //   },
    //   {
    //     value: Locale['ru-RU'],
    //     label: t('language.ru-RU'),
    //   },
    //   {
    //     value: Locale['fr-FR'],
    //     label: t('language.fr-FR'),
    //   },
    //   {
    //     value: Locale['de-DE'],
    //     label: t('language.de-DE'),
    //   },
    //   {
    //     value: Locale['id-ID'],
    //     label: t('language.id-ID'),
    //   },
    //   {
    //     value: Locale['ko-KR'],
    //     label: t('language.ko-KR'),
    //   },
    ],
    [],
  );

  const { currentLocale, fallbackLocale } = intl.getInitOptions();

  const renderCurrentLocale = useCallback(() => {
    const curLocale = localeOptions.find(item => item.value === currentLocale);

    if (curLocale) {
      return curLocale.label;
    }
  }, [localeOptions, currentLocale]);

  return (
    <>
      <MuiLink
        href="/"
        aria-controls="lang-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.btn}
        style={{
          ...style,
        }}
      >
        <GlobeIcon className={classes.icon} />
        {renderCurrentLocale()}
      </MuiLink>
      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        {localeOptions.map(item => {
          const { pathname, query, asPath } = router;
          return (
            <MenuItem
              disabled={item.value === currentLocale}
              className={classes.menuItem}
              key={uid(item)}
            >
              <Link href={{ pathname, query }} as={asPath} locale={item.value}>
                <a className={classes.menuItemLink}>{item.label}</a>
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
