import styles from './LeaderboardPreview.module.css';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from '@mui/material';
import { FC } from 'react';

type LeaderboardPreviewProps = {
  sceneHref: string;
  sceneImage: string;
  sceneTitle: string;
};

const LeaderboardPreview: FC<LeaderboardPreviewProps> = ({
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

          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              bgcolor: 'rgba(30, 39, 56, 0.74)',
              color: 'white',
              padding: '10px',
            }}
          >
            <Typography variant='h5'>{sceneTitle} Leaderboard</Typography>
          </Box>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default LeaderboardPreview;
