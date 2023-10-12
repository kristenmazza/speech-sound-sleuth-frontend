import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import styles from './Sounds.module.css';

export default function Sounds() {
  return (
    <Container maxWidth='md'>
      <Box component='main' sx={{ p: 3 }}>
        <h1 className={styles.heading}>Select your sound target</h1>

        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent='left' spacing={7}>
              <Grid item>
                <a href='/'>
                  <img
                    className={styles.sound}
                    src='/images/scene-letters/busystreet-r.png'
                    alt='R'
                  />
                </a>
              </Grid>
              <Grid item>
                <a href='/'>
                  <img
                    className={styles.sound}
                    src='/images/scene-letters/busystreet-l.png'
                    alt='L'
                  />
                </a>
              </Grid>
              <Grid item>
                <a href='/'>
                  <img
                    className={styles.sound}
                    src='/images/scene-letters/busystreet-s.png'
                    alt='S'
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
