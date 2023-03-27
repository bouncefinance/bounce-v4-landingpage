import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from 'src/modules/theme/const';

export const useBuildWithBounceStyles = makeStyles<Theme>(theme => ({
    root: {
        position: 'relative',
        background: '#2B51DA',
        color: '#fff',
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
            background: '#2B51DA',
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
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '20px',
        [theme.breakpoints.up('md')]: {
            paddingTop: '60px'
        }
    },
    title: {
        fontSize: '24px',
        lineHeight: '36px',
        marginBottom: 24,
        [theme.breakpoints.up('md')]: {
            fontSize: '58px',
            lineHeight: '87px',
        },
    },
    btn: {
        padding: '10px 16px',
        lineHeight: '20px',
        color: '#fff',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '24px',
        '&:before': {
            background: 'rgba(255, 255, 255, 0.2)',
        },
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
        },
        '&.Mui-disabled': {
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'rgba(255, 255, 255, 0.5)',
        }
    },
    'active-btn': {
        background: '#fff',
        color: '#000',
    },
    description: {
        marginTop: 44,
        fontSize: '18px',
        lineHeight: '27px',
        [theme.breakpoints.up('md')]: {
            fontSize: '24px',
            lineHeight: '36px',
        }
    },
    detail: {
        marginTop: 20,
        fontSize: 16,
        lineHeight: '26px',
        color: 'rgba(255, 255, 255, 0.8)',
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
            lineHeight: '29px',
            maxWidth: 620,
        }   
    },
    imgWrap: {
        position: 'relative',
        marginTop: theme.spacing(-2.25),
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
    screen: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        backfaceVisibility: 'hidden',
        transformOrigin: '100% 0',
        transition: 'transform 0.5s 0.3s, opacity 0.5s 0.3s',
        '.client-side &': {
            opacity: 0,
            transform: 'translateX(40px)',
        },
        '$screenInView &': {
            opacity: 1,
            transform: 'translateX(0)',
        },
    },
    'mobile-img-wrap': {
        marginTop: '28px',
        display: 'flex',
        justifyContent: 'center',
    },
}));
