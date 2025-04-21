import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useWithScrollFreezingStyles } from './useWithScrollFreezingStyles';
import classNames from 'classnames';
import { PARALLAX_MARGIN } from '../theme/const';

interface IWithScrollFreezingProps {
  children: ReactNode;
  paddingTop?: string;
}

export const WithScrollFreezing = ({
  children,
  paddingTop,
}: IWithScrollFreezingProps) => {
  const classes = useWithScrollFreezingStyles();

  const [wrapHeight, setWrapHeight] = useState('auto');
  const [floatingWrapClass, setFloatingWrapClass] = useState(classes.notFixed);

  const wrapRef = useRef(null);
  const floatingWrapRef = useRef(null);

  const getWrapHeight = useCallback(() => {
    if (floatingWrapRef.current) {
      const floatingWrap: any = floatingWrapRef.current;
      const height = floatingWrap?.offsetHeight;
      setWrapHeight(height ?? 'auto');
    }
  }, [floatingWrapRef]);

  const toggleFreezing = useCallback(() => {
    const scrollTop = window.scrollY + window.innerHeight;
    const scrollTopForEffect =
      window.scrollY - PARALLAX_MARGIN + window.innerHeight / 2;
    const wrap: any = wrapRef.current;
    const wrapBottom = wrap?.offsetHeight + wrap?.offsetTop;
    const wrapBottomFallBack = wrap?.offsetHeight * 2 + wrap?.offsetTop;
    if (scrollTop > wrapBottom && scrollTop < wrapBottomFallBack) {
      if (scrollTopForEffect > wrapBottom) {
        setFloatingWrapClass(
          classNames(classes.fixed, classes.fixedWithEffect),
        );
      } else {
        setFloatingWrapClass(classes.fixed);
      }
    } else {
      scrollTop < wrapBottomFallBack && setFloatingWrapClass(classes.notFixed);
    }
  }, [floatingWrapRef]);
  const waitImgLoaded = async (root: {
    querySelectorAll: (arg0: string) => any;
  }) => {
    const imgs =
      root instanceof HTMLImageElement ? [root] : root.querySelectorAll('img');
    const list = Array.from(imgs);
    if (Array.isArray(list) && list.length) {
      return await Promise.all(
        list.map(
          (img: HTMLImageElement) =>
            new Promise(resolve =>
              img.addEventListener('load', () => {
                resolve(img);
              }),
            ),
        ),
      );
    } else {
      return Promise.reject(false);
    }
  };
  useEffect(() => {
    getWrapHeight();
    toggleFreezing();
    waitImgLoaded(document.getElementsByTagName('body')[0]).then(res => {
      getWrapHeight();
    });
    window.addEventListener('ready', getWrapHeight);
    window.addEventListener('resize', getWrapHeight);
    window.addEventListener('scroll', toggleFreezing);
    return () => {
      window.removeEventListener('ready', getWrapHeight);
      window.removeEventListener('resize', getWrapHeight);
      window.removeEventListener('scroll', toggleFreezing);
    };
  }, []);

  return (
    <div ref={wrapRef} className={classes.root} style={{ height: wrapHeight }}>
      <div
        ref={floatingWrapRef}
        className={classNames(classes.floatingWrap, floatingWrapClass)}
        style={{
          paddingTop: paddingTop,
        }}
      >
        {children}
      </div>
    </div>
  );
};
