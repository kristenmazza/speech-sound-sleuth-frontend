import Box from '@mui/material/Box';
import { useGameContext } from '../../context/useGameContext';
import { useEffect } from 'react';

export default function Leaderboard() {
  const { setIsGamePage } = useGameContext();
  useEffect(() => {
    setIsGamePage(false);
  }, [setIsGamePage]);

  return (
    <Box component='main' sx={{ p: 3 }}>
      This is the LEADERBOARD page.
    </Box>
  );
}
