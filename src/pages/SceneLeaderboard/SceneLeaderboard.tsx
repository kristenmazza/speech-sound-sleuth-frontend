import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { useGameContext } from '../../context/useGameContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ScoreTable from './ScoreTable';
import styles from './SceneLeaderboard.module.css';

type scoresType = {
  _id: string;
  nickname: string;
  timeInS: number;
};

export default function SceneLeaderboard() {
  const { setIsGamePage } = useGameContext();
  useEffect(() => {
    setIsGamePage(false);
  }, [setIsGamePage]);

  const { sceneTitle } = useParams();
  const [rScores, setRScores] = useState<scoresType[] | null>(null);
  const [lScores, setLScores] = useState<scoresType[] | null>(null);
  const [sScores, setSScores] = useState<scoresType[] | null>(null);

  useEffect(() => {
    const getScores = async (sound: string) => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + `/${sceneTitle}/${sound}/scores`,
        );

        if (sound === 'r') {
          setRScores(response.data);
        } else if (sound === 'l') {
          setLScores(response.data);
        } else if (sound === 's') {
          setSScores(response.data);
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(message);
      }
    };

    getScores('r');
    getScores('l');
    getScores('s');
  }, [sceneTitle]);

  return (
    <Box component='main' sx={{ p: 3 }}>
      <Container maxWidth='md'>
        <h1 className={styles.heading}>
          Leaderboard:{' '}
          {sceneTitle
            ?.replace(/-/g, ' ')
            .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())}
        </h1>
        <section id='r'>
          <h2 className={styles.heading2}>R Sound</h2>
          <ScoreTable scores={rScores || []} />
        </section>
        <section id='l'>
          <h2 className={styles.heading2}>L Sound</h2>
          <ScoreTable scores={lScores || []} />
        </section>
        <section id='s'>
          <h2 className={styles.heading2}>S Sound</h2>
          <ScoreTable scores={sScores || []} />
        </section>
      </Container>
    </Box>
  );
}
