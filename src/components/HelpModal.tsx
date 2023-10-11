import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  bgcolor: 'rgb(230, 234, 237)',
  boxShadow: 24,
  p: 4,
};

export default function HelpModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip title='How to Play'>
        <IconButton onClick={handleOpen} sx={{ color: 'rgb(242, 242, 242)' }}>
          <HelpIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='help'
        aria-describedby='modal-modal-description'
        sx={{ color: 'rgb(15, 15, 15)' }}
      >
        <Box sx={style}>
          <Typography id='help' variant='h6' component='h2'>
            How to Play
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
