import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from '../theme/const';

export const useBounceToolboxStyles = makeStyles<Theme>(theme => ({
    toolbox: {
        position: 'relative',
        background:
            '#F4EDA8',
        color: '#665D11',
        minHeight: '100vh',
        marginTop: PARALLAX_MARGIN,
        paddingBottom: theme.spacing(10),
        pointerEvents: 'auto',
        '&::before': {
            content: `''`,
            display: 'block',
            position: 'absolute',
            top: -59,
            width: '100%',
            background: '#F4EDA8',
            height: 60,
            borderRadius: '28px 28px 0 0',
        },
        [theme.breakpoints.up('md')]: {
            paddingBottom: theme.spacing(23),
            '&::before': {
                borderRadius: '60px 60px 0 0',
            },
        },
    },
    wrap: {
        position: 'relative',
        overflow: 'hidden',
    },
    topContainer: {
        paddingRight: 0,
    },
    toolboxText: {
        color: '#665D11',
        paddingRight: theme.spacing(2.75),
        [theme.breakpoints.up('sm')]: {
            paddingRight: theme.spacing(6) ,
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.spacing(2.75),
        },
        [theme.breakpoints.up('lg')]: {
            paddingRight: theme.spacing(16.25),
        },
        '& p': {
            [theme.breakpoints.up('md')]: {
                marginRight: 21,
            },
            [theme.breakpoints.up('lg')]: {
                marginRight: theme.spacing(8.125),
            },
        }
    },
    screenWrap: {
        position: 'relative',
        '&::before': {
            display: 'block',
            content: `''`,
            paddingTop: '100%',
        },
    },
    screenInView: {},
    screenImg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        borderRadius: 20,
        backfaceVisibility: 'hidden',
        transformOrigin: '100% 0',
        transition: 'transform 0.5s 0.3s, opacity 0.5s 0.3s',
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(0),
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(7),
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(17.5),
        },
        '.client-side &': {
            opacity: 0,
            transform: 'translateX(40px)',
        },
        '$screenInView &': {
            opacity: 1,
            transform: 'translateX(0)',
        },
    },
}));
