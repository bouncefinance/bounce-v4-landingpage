import { MenuCloseIcon } from 'src/modules/common/components/Icons/MenuCloseIcon';
import { useIsSMDown } from 'src/modules/theme';
import { useHeaderStyles } from '../../useHeaderStyles';
import { useState } from 'react'
import { useCountDown } from 'ahooks'
import {
    Box,
  } from '@material-ui/core';
const AdFixContent = () => {
    const classes = useHeaderStyles();
    const isSm = useIsSMDown()
    const [showAd, setShowAd] = useState(true)
    const closeNotice = () => {
        setShowAd(false)
    }
    const [countdown, { days, hours, minutes, seconds }] = useCountDown({
        targetDate: new Date(1692921600 * 1000).getTime()
    })
    if (!showAd) return <></>
    return <Box
        mb={isSm ? 8 : 0}
        className={classes.AdFixContent}
    >
        <Box
        style={{
            display:'flex',
            flexFlow:'row nowrap',
            alignItems:'center',
            maxWidth: '1296px',
            margin: '0 auto',
            justifyContent: 'space-between'
        }}
        >
        <Box
            style={{
                cursor: 'pointer',
                display:'flex',
                flexFlow:'row nowrap',
                alignItems:'center',
            }}
            onClick={() => {
                window.open('https://diamondhand.bounce.finance/', '_blank')
            }}
        >
            <img style={{
                width: '16px',
                height:'16px',
                marginRight: '15px'
            }} src="/images/gree-err.svg" alt="" />
            <Box
            className={classes.adFixText1}
            >
            Diamond Hand Necklace Auction: Where Resilience Meets Luxury and Rewards. 
            {countdown > 0 ? <span style={{
                marginLeft: '10px'
            }}>
            <span style={{
                color:'#20994B',
                margin:'0 4px'
            }}>{days}</span>Days
            <span style={{
                color:'#20994B',
                margin:'0 4px'
            }}>{hours}</span>Hours
            <span style={{
                color:'#20994B',
                margin:'0 4px'
            }}>{minutes}</span>Minutes
            <span style={{
                color:'#20994B',
                margin:'0 4px'
            }}>{seconds}</span>Seconds
            </span>:<span style={{
                color:'#20994B',
                margin:'0 4px'
            }}>Auction is live!</span>
            }
            </Box>
        </Box>
        <MenuCloseIcon style={{ cursor: 'pointer' }} onClick={closeNotice} />
        </Box>
    </Box>
  }
  export default AdFixContent