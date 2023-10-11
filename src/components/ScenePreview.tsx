import Grid from '@mui/material/Grid';
import styles from './ScenePreviews.module.css';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export default function ScenePreview() {
  return (
    <Grid key='1' item>
      <Card
        sx={{
          width: 250,
          backgroundColor: 'rgb(59, 74, 105)',
          border: '2px solid #465676',
        }}
      >
        <CardActionArea href='/busy-street/sounds'>
          <CardMedia
            sx={{ height: 200 }}
            image='/images/scene-previews/busystreet-preview.jpg'
            title='Busy Street'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              className={styles.sceneTitle}
            >
              Busy Street
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
