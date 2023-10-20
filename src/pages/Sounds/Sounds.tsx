import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import styles from './Sounds.module.css';
import { useParams } from 'react-router-dom';

export default function Sounds() {
  const { sceneTitle } = useParams<{ sceneTitle: string }>();

  const busyStreet = [
    {
      id: 0,
      sound: 'r',
      src: '/images/scene-letters/busystreet-r.png',
    },
    {
      id: 1,
      sound: 'l',
      src: '/images/scene-letters/busystreet-l.png',
    },
    {
      id: 2,
      sound: 's',
      src: '/images/scene-letters/busystreet-s.png',
    },
  ];

  const fairytaleLand = [
    {
      id: 0,
      sound: 'r',
      src: '/images/scene-letters/fairytaleland-r.png',
    },
    {
      id: 1,
      sound: 'l',
      src: '/images/scene-letters/fairytaleland-l.png',
    },
    {
      id: 2,
      sound: 's',
      src: '/images/scene-letters/fairytaleland-s.png',
    },
  ];

  const theHeist = [
    {
      id: 0,
      sound: 'r',
      src: '/images/scene-letters/theheist-r.png',
    },
    {
      id: 1,
      sound: 'l',
      src: '/images/scene-letters/theheist-l.png',
    },
    {
      id: 2,
      sound: 's',
      src: '/images/scene-letters/theheist-s.png',
    },
  ];

  const sceneMap = {
    'busy-street': busyStreet,
    'fairytale-land': fairytaleLand,
    'the-heist': theHeist,
  };

  const currentScene = sceneMap[sceneTitle as keyof typeof sceneMap];

  const renderSoundLinks = currentScene?.map((item) => (
    <a key={item.id} href={`${sceneTitle}/${item.sound}/play`}>
      <img className={styles.soundImage} src={item.src} alt={item.sound} />
    </a>
  ));

  return (
    <Container maxWidth='md'>
      <Box component='main' sx={{ p: 3 }}>
        <h1 className={styles.heading}>Select your sound target</h1>
        <Box className={styles.soundContainer}>{renderSoundLinks}</Box>
      </Box>
    </Container>
  );
}
