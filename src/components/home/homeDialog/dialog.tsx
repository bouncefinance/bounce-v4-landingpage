import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from '@material-ui/core';
// import CloseSvg from '../../../assets/img/close.svg'
import { useHomeDialogStyles } from './useHomeDialogStyles';
import { t } from 'src/i18n/intl';
const Page = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const classes = useHomeDialogStyles();
  return (
    <Dialog
      style={{ padding: 24 }}
      open={open}
      className={classes.dialogStyle}
      onClose={() => onClose()}
    >
      <Box className={classes.dialogHeader}>
        <IconButton
          onClick={() => onClose()}
          className={classes.dialogHeaderBtn}
        >
          <img src="/images/home/dialog/close.svg" />
        </IconButton>
      </Box>
      <DialogContent>
        <Box>
          <Typography className={classes.dialogTitle}>
            {t('home-dialog.title')}
          </Typography>
          <Typography className={classes.content}>
            {t('home-dialog.content')}
          </Typography>
        </Box>
        <Box className={classes.animationContainer}>
          <Box>
            <img
              src="/images/home/dialog/block-round.png"
              className={classes.blockBall}
            />
          </Box>
          <Box>
            <img
              src="/images/home/dialog/Vector1.png"
              className={classes.scaleImg}
            />
          </Box>
        </Box>
        <Button
          className={classes.button}
          onClick={() => {
            window.open('https://www.bouncebit.io/', '_blank');
            onClose();
          }}
          endIcon={<img src="/images/home/dialog/arrow-right.svg" />}
        >
          {t('home-dialog.button')}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
export default Page;
