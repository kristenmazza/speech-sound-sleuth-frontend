import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import styles from './Sounds.module.css';

export default function Sounds() {
  return (
    <Container maxWidth='md'>
      <Box component='main' sx={{ p: 3 }}>
        <h1 className={styles.heading}>Select your sound target</h1>
        <Box className={styles.soundContainer}>
          <a href='/'>
            <img
              className={styles.soundImage}
              src='/images/scene-letters/busystreet-r.png'
              alt='R'
            />
          </a>
          <a className={styles.soundLink} href='/'>
            <img
              className={styles.soundImage}
              src='/images/scene-letters/busystreet-l.png'
              alt='L'
            />
          </a>
          <a className={styles.soundLink} href='/'>
            <img
              className={styles.soundImage}
              src='/images/scene-letters/busystreet-s.png'
              alt='S'
            />
          </a>
        </Box>
      </Box>
    </Container>
  );
}
