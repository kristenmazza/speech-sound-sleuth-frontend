import Box from '@mui/material/Box';
import { FC, useEffect } from 'react';
import { useGameContext } from '../../context/useGameContext';
import styles from './Game.module.css';
import GameImage from './GameImage';

const Game: FC = () => {
  const { setIsGamePage } = useGameContext();

  useEffect(() => {
    setIsGamePage(true);
  }, [setIsGamePage]);

  return (
    <Box component='main' className={styles.main} sx={{ p: 3 }}>
      <GameImage />
    </Box>
  );
};

export default Game;
