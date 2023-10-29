import Box from '@mui/material/Box';
import { FC, useEffect, useState } from 'react';
import { useGameContext } from '../../context/useGameContext';
import styles from './Game.module.css';
import GameImage from './GameImage';
import axios from 'axios';
import { useParams } from 'react-router-dom';

type CustomError = {
  response: {
    request: {
      response: string;
    };
  };
};

const Game: FC = () => {
  const { setIsGamePage, setScene } = useGameContext();
  const { sceneTitle, sound } = useParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsGamePage(true);
  }, [setIsGamePage]);

  useEffect(() => {
    const getScene = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + `${sceneTitle}/${sound}`,
        );
        setScene(response);
        setError(null);
      } catch (err) {
        const message = JSON.parse(
          (err as CustomError).response.request.response,
        ).message;
        setError(message);
      }
    };

    getScene();
  }, [sceneTitle, setScene, sound]);

  return (
    <Box component='main' className={styles.main} sx={{ p: 3 }}>
      {error ? <p className={styles.error}>{error}</p> : ''}
      <GameImage />
    </Box>
  );
};

export default Game;
