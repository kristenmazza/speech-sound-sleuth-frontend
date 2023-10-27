import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import styles from './HelpModal.module.css';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  bgcolor: 'rgb(230, 234, 237)',
  boxShadow: 24,
  p: 4,
  maxHeight: '70%',
  overflowY: 'auto',
};

export default function HelpModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip title='How to Play'>
        <IconButton
          className={styles.iconButtonPadding}
          onClick={handleOpen}
          sx={{ color: 'rgb(219, 221, 232)' }}
        >
          <HelpIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Tooltip>
      <Modal
        disableScrollLock={true}
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
            <ol className={styles.modalList}>
              <li>
                <b>Pick a Scene:</b> First, choose a fun scene that you like!
              </li>
              <li>
                <b>Select a Sound:</b> Now, select a sound you want to practice.
                It's like a special mission!
              </li>
              <li>
                <b>Find the Hidden Items:</b> On the game page, click 'View
                Targets' to see what you need to find.
              </li>
              <li>
                <b>Start the Hunt:</b> Search the scene for the hidden items.
                When you find one, click it!
              </li>
              <li>
                <b>Practice Time:</b> If you're right, a practice pop-up will
                appear. You'll be prompted to practice saying the item's name.
              </li>
              <li>
                <b>Keep Going:</b> Keep searching and clicking until you find
                all the items. The game ends when you've found them all!
              </li>
              <li>
                <b>Quick! The Timer is Running:</b> Be fast, because the timer
                starts as soon as the game begins.
              </li>
            </ol>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
