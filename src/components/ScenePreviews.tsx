import Grid from '@mui/material/Grid';
import styles from './ScenePreviews.module.css';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export default function ScenePreviews() {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent='left' spacing={4}>
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

          <Grid key='2' item>
            <Card
              sx={{
                width: 250,
                backgroundColor: 'rgb(59, 74, 105)',
                border: '2px solid #465676',
              }}
            >
              <CardActionArea href='/fairytale-land/sounds'>
                <CardMedia
                  sx={{ height: 200 }}
                  image='/images/scene-previews/fairytaleland-preview.jpg'
                  title='Fairytale Land'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    className={styles.sceneTitle}
                  >
                    Fairytale Land
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid key='3' item>
            <Card
              sx={{
                width: 250,
                backgroundColor: 'rgb(59, 74, 105)',
                border: '2px solid #465676',
              }}
            >
              <CardActionArea href='/the-heist/sounds'>
                <CardMedia
                  sx={{ height: 200 }}
                  image='/images/scene-previews/theheist-preview.jpg'
                  title='The Heist'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    className={styles.sceneTitle}
                  >
                    The Heist
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
