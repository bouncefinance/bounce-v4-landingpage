import { MenuCloseIcon } from 'src/modules/common/components/Icons/MenuCloseIcon';
import { useIsSMDown } from 'src/modules/theme';
import { useHeaderStyles } from '../../useHeaderStyles';
import { useState } from 'react'
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
    if (!showAd) return <></>
    return <Box
        mb={isSm ? 8 : 0}
        className={classes.AdFixContent}
        onClick={() => {
            window.open('https://twitter.com/bounce_finance', '_blank')
        }}
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
        >
            <img style={{
                width: '16px',
                height:'16px',
                marginRight: '15px'
            }} src="/images/gree-err.svg" alt="" />
            <Box
            className={classes.adFixText1}
            >
            Our <a href={'https://twitter.com/bounce_finance'} style={{
                color:'blue'
            }}>@bounce_finance</a> Twitter has been hacked; please report any suspicious activity as we resolve this issue.
            
            </Box>
        </Box>
        <MenuCloseIcon style={{ cursor: 'pointer' }} onClick={(e) => {
            e.stopPropagation()
            closeNotice()
        }} />
        </Box>
    </Box>
  }
  export default AdFixContent