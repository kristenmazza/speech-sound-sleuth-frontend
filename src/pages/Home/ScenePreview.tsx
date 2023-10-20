import styles from './ScenePreview.module.css';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { FC } from 'react';

type ScenePreviewProps = {
  sceneHref: string;
  sceneImage: string;
  sceneTitle: string;
};

const ScenePreview: FC<ScenePreviewProps> = ({
  sceneHref,
  sceneImage,
  sceneTitle,
}) => {
  return (
    <div className={styles.sceneCardContainer}>
      <Card className={styles.sceneCard}>
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
    </div>
  );
};

export default ScenePreview;
