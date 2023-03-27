import { makeStyles, Theme } from '@material-ui/core';
import { PARALLAX_MARGIN } from 'src/modules/theme/const';

export const useCompanyListStyles = makeStyles<Theme>(theme => ({
    root: {
        position: 'relative',
        background: '#fff',
        color: '#171717',
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
            background: '#fff',
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
        marginBottom: 24,
        fontSize: 24,
        lineHeight: '36px',
        color: '#171717',
        [theme.breakpoints.up('md')]: {
            marginBottom: 36,
            maxWidth: 772,
            fontSize: 48,
            lineHeight: '60px',
        },
    },
    btnWrap: {
        display: 'flex',
        justifyContent: 'center',
    },
    moreBtn: {
        marginTop: theme.spacing(8.5),
        height: 60,
        border: '1px solid #2B51DA',
        borderRadius: 30,
        fontSize: 16,
        lineHeight: '20px',
        color: '#2B51DA',
        '& .MuiButton-label': {
            padding: theme.spacing(0, 6.25),
        },
        '&:hover': {
            background: '#2B51DA',
            color: '#fff',
          }
    }
}));
