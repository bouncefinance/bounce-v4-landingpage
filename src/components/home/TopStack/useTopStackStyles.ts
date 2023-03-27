import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from 'src/modules/theme/const';
import { FONTS } from 'src/modules/theme/mainTheme';

export const useTopStackStyles = makeStyles<Theme>(theme => ({
    root: {
        position: 'relative',
        background: '#232323',
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
            background: '#232323',
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
        paddingTop: 20,
        [theme.breakpoints.up('md')]: {
            paddingTop: 60,
        }
    },
    title: {
        marginBottom: 32,
        fontSize: 24,
        lineHeight: '36px',
        [theme.breakpoints.up('md')]: {
            marginBottom: 60,
            fontSize: 48,
            lineHeight: '72px',
        }
    },
    item: {
        padding: '32px 20px',
        height: '100%',
        background: '#fff',
        borderRadius: '24px',
        [theme.breakpoints.up('md')]: {
            padding: '40px 28px',
        }
    },
    'item-title': {
        marginBottom: 16,
        lineHeight: '34px',
        fontFamily: FONTS.medium,
        fontWeight: 500,
        fontSize: 18,
        color: '#2B51DA',
        [theme.breakpoints.up('md')]: {
            marginBottom: 24,
            fontSize: 24,
        }
    },
    'item-text': {
        fontSize: 14,
        lineHeight: '21px',
        color: 'rgba(0, 0, 0, 0.8)',
        [theme.breakpoints.up('md')]: {
            fontSize: 16,
            lineHeight: '24px',
        }

    }
}));
