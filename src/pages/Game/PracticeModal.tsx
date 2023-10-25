import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useGameContext } from '../../context/useGameContext';
import PracticeCheckboxes from './PracticeCheckboxes';
import styles from './PracticeModal.module.css';
import NicknameForm from './NicknameForm';

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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

type PracticeModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handlePracticeModalOpen: () => void;
};

const PracticeModal: FC<PracticeModalProps> = ({ open, setOpen }) => {
  const initialFoundItemState = { name: '', imageUrl: '' };
  const { setIsPracticeTime, setIsResumingTime, foundItems } = useGameContext();
  const [lastFoundItem, setLastFoundItem] = useState(initialFoundItemState);
  const [foundAllItems, setFoundAllItems] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setIsPracticeTime(false);
    setIsResumingTime(true);
  };

  const handleEndGame = () => {
    setIsGameFinished(true);
  };

  useEffect(() => {
    if (foundItems) {
      setLastFoundItem(foundItems.slice(-1)[0]);
    }

    console.log(foundItems);
    if (foundItems.length === 4) {
      setFoundAllItems(true);
    }
  }, [foundItems]);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby='practice'
        aria-describedby='word-practice'
        sx={{ color: 'rgb(15, 15, 15)' }}
      >
        {!isGameFinished ? (
          <Box sx={style}>
            <Typography
              id='practice'
              variant='h6'
              component='h2'
              sx={{ paddingBottom: '.5rem' }}
            >
              Practice the word 5 times:
            </Typography>
            <Typography id='word-practice' variant='h4' component='h2'>
              {lastFoundItem ? lastFoundItem.name : ''}
            </Typography>
            {lastFoundItem ? (
              <img
                className={styles.practiceImage}
                src={lastFoundItem.imageUrl}
                alt=''
              />
            ) : (
              ''
            )}
            <PracticeCheckboxes />
            {!foundAllItems ? (
              <Button
                variant='contained'
                sx={{
                  marginTop: '3rem',
                  backgroundColor: 'rgb(46, 59, 85)',
                  '&:hover': { backgroundColor: 'rgb(56, 71, 101)' },
                }}
                onClick={handleClose}
              >
                Continue Game
              </Button>
            ) : (
              <Button
                variant='contained'
                sx={{
                  marginTop: '3rem',
                  backgroundColor: 'rgb(46, 59, 85)',
                  '&:hover': { backgroundColor: 'rgb(56, 71, 101)' },
                }}
                onClick={handleEndGame}
              >
                Finish Game
              </Button>
            )}
          </Box>
        ) : (
          <Box sx={style}>
            <Typography id='practice' variant='h6' component='h2'>
              Congratulations!
            </Typography>
            <Typography
              id='practice'
              sx={{
                padding: '1rem 0 1.5rem 0',
                fontSize: '1.3rem',
                textAlign: 'center',
              }}
            >
              You found all of the hidden items. Enter your nickname to submit
              your score.
            </Typography>
            <NicknameForm />
            <Button
              variant='contained'
              sx={{
                backgroundColor: 'rgb(46, 59, 85)',
                '&:hover': { backgroundColor: 'rgb(56, 71, 101)' },
              }}
              //   onClick={handleEndGame}
            >
              Submit
            </Button>
          </Box>
        )}
      </Modal>
    </div>
  );
};

export default PracticeModal;
