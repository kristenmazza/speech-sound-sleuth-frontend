import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Box from '@mui/material/Box';
import styles from './Home.module.css';
import StarsIcon from '@mui/icons-material/Stars';
import ScenePreviews from './ScenePreviews';
import { useGameContext } from '../../context/useGameContext';
import { useEffect } from 'react';

export default function Home() {
  const { setIsGamePage } = useGameContext();
  useEffect(() => {
    setIsGamePage(false);
  }, [setIsGamePage]);

  return (
    <Box component='main' sx={{ p: 3 }}>
      <Container maxWidth='md'>
        <Box sx={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <div className={styles.description}>
            <h1 className={styles.heading}>
              A <span className={styles.coloredText}>fun</span> hidden pictures
              speech therapy game
            </h1>
            <p>
              Each scene features items containing common speech sounds.
              Challenge yourself to find the hidden items in each scene, and see
              how fast you can do it.
            </p>
            <List className={styles.list}>
              <ListItem disablePadding>
                <ListItemIcon className={styles.listIcon}>
                  <StarsIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Leaderboard – Compare your ranking with others' />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon className={styles.listIcon}>
                  <StarsIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Mobile-responsive – Enjoy gameplay on any device' />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon className={styles.listIcon}>
                  <StarsIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Unique backgrounds – Explore multiple scenes' />
              </ListItem>
            </List>
          </div>
          <img
            className={styles.decorativeImage}
            alt=''
            src='images/magnifying-glass-sounds.png'
          />
        </Box>
        <h1 className={styles.heading}>Choose your scene</h1>
        <ScenePreviews />
      </Container>
    </Box>
  );
}
