import Box from '@mui/material/Box';
import { FC, useEffect, useState } from 'react';
import { useGameContext } from '../../context/useGameContext';
import styles from './Game.module.css';
import GameImage from './GameImage';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
          import.meta.env.VITE_BACKEND_URL + `/${sceneTitle}/${sound}`,
        );
        setScene(response);
        setError(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.log(message);
        setError(message);
      }
    };

    getScene();
  }, [sceneTitle]);

  return (
    <Box component='main' className={styles.main} sx={{ p: 3 }}>
      <GameImage />
    </Box>
  );
};

export default Game;
