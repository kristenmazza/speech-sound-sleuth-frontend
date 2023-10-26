import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import styles from './Leaderboard.module.css';
import LeaderboardPreviews from './LeaderboardPreviews';
import { useGameContext } from '../../context/useGameContext';
import { useEffect } from 'react';

export default function Leaderboard() {
  const { setIsGamePage } = useGameContext();
  useEffect(() => {
    setIsGamePage(false);
  }, [setIsGamePage]);

  return (
    <Box component='main' sx={{ p: 3 }}>
      <Container maxWidth='md'>
        <h1 className={styles.heading}>Leaderboards</h1>
        <LeaderboardPreviews />
      </Container>
    </Box>
  );
}
