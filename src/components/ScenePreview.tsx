import Grid from '@mui/material/Grid';
import styles from './ScenePreview.module.css';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { FC } from 'react';

interface ScenePreviewProps {
  sceneHref: string;
  sceneImage: string;
  sceneTitle: string;
}

const ScenePreview: FC<ScenePreviewProps> = ({
  sceneHref,
  sceneImage,
  sceneTitle,
}) => {
  return (
    <Grid item>
      <Card
        sx={{
          width: 250,
          backgroundColor: 'rgb(59, 74, 105)',
          border: '2px solid #465676',
        }}
      >
        <CardActionArea href={sceneHref}>
          <CardMedia
            sx={{ height: 250 }}
            image={sceneImage}
            title={sceneTitle}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              className={styles.sceneTitle}
            >
              {sceneTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ScenePreview;
