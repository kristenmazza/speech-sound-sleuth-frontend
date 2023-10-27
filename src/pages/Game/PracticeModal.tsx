import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useGameContext } from '../../context/useGameContext';
import PracticeCheckboxes from './PracticeCheckboxes';
import styles from './PracticeModal.module.css';
import NicknameForm from './NicknameForm';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(230, 234, 237)',
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

type CustomError = {
  response: {
    request: {
      response: string;
    };
  };
};

const PracticeModal: FC<PracticeModalProps> = ({ open, setOpen }) => {
  const initialFoundItemState = { name: '', imageUrl: '' };
  const {
    setIsPracticeTime,
    setIsResumingTime,
    foundItems,
    isGameFinished,
    setIsGameFinished,
    finalTime,
  } = useGameContext();
  const [lastFoundItem, setLastFoundItem] = useState(initialFoundItemState);
  const [foundAllItems, setFoundAllItems] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { sceneTitle, sound } = useParams();
  const [nickname, setNickname] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    setIsPracticeTime(false);
    setIsResumingTime(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + `/${sceneTitle}/${sound}/scores`,
        {
          nickname: nickname,
          timeInS: finalTime,
          sound: sound,
          scene: sceneTitle,
        },
      );
      setError(null);
      navigate('/leaderboard');
    } catch (err) {
      const customError = JSON.parse(
        (err as CustomError).response.request.response,
      ).errors[0].msg;
      setError(customError);
    }
  };

  const handleEndGame = () => {
    setIsGameFinished(true);
  };

  useEffect(() => {
    if (foundItems) {
      setLastFoundItem(foundItems.slice(-1)[0]);
    }

    if (foundItems.length === 4) {
      setFoundAllItems(true);
    }
  }, [foundItems]);

  const displayError = () => {
    return (
      <div
        className={error ? styles.error : styles.offscreen}
        aria-live='assertive'
      >
        {error}
      </div>
    );
  };

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
                fontSize: '1.2rem',
                textAlign: 'center',
              }}
            >
              You found all of the hidden items! Enter your nickname to submit
              your score to the leaderboard.
            </Typography>
            <NicknameForm
              setNickname={setNickname}
              handleSubmit={handleSubmit}
            />
            {error ? displayError() : ''}
          </Box>
        )}
      </Modal>
    </div>
  );
};

export default PracticeModal;
