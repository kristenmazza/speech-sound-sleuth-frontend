import { Dispatch, FC, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useGameContext } from '../../context/useGameContext';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type PracticeModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handlePracticeModalOpen: () => void;
};

const PracticeModal: FC<PracticeModalProps> = ({
  open,
  setOpen,
  handlePracticeModalOpen,
}) => {
  const handleClose = () => {
    setOpen(false);
    setIsPracticeTime(false);
    setIsResumingTime(true);
  };

  const { setIsPracticeTime, setIsResumingTime } = useGameContext();

  return (
    <div>
      <Button onClick={handlePracticeModalOpen}>Open modal</Button>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={handleClose}>Continue Game</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default PracticeModal;
