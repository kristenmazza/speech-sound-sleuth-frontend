import Box from '@mui/material/Box';
import { FC } from 'react';
import { useGameContext } from '../context/useGameContext';

const Game: FC = () => {
  const { setIsGamePage } = useGameContext();

  setIsGamePage(true);

  return (
    <Box component='main' sx={{ p: 3 }}>
      This is the GAME page.
    </Box>
  );
};

export default Game;
