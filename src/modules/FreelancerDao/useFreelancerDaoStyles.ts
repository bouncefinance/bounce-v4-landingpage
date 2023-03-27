import { makeStyles, Theme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { PARALLAX_MARGIN } from '../theme/const';
import { PALETTE } from '../theme/mainTheme';

export const useFreelancerDaoStyles = makeStyles<Theme>(theme => ({
    polkadot: {
        position: 'relative',
        background:
            '#FF699F',
        color: '#7B2141',
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
            background: '#FF699F',
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
    daoText: {
        color: '#7B2141',
        [theme.breakpoints.up('sm')]: {
            paddingRight: theme.spacing(6),
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.spacing(6.75),
        },
        [theme.breakpoints.up('lg')]: {
            paddingRight: theme.spacing(25),
        },
    }
}));
