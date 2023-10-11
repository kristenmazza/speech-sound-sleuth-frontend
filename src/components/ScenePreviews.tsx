import Grid from '@mui/material/Grid';
import ScenePreview from './ScenePreview';

export default function ScenePreviews() {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent='left' spacing={4}>
          <ScenePreview
            sceneHref={'/busy-street/sounds'}
            sceneImage={'/images/scene-previews/busystreet-preview.jpg'}
            sceneTitle={'Busy Street'}
          />
          <ScenePreview
            sceneHref={'/fairytale-land/sounds'}
            sceneImage={'/images/scene-previews/fairytaleland-preview.jpg'}
            sceneTitle={'Fairytale Land'}
          />
          <ScenePreview
            sceneHref={'/the-heist/sounds'}
            sceneImage={'/images/scene-previews/theheist-preview.jpg'}
            sceneTitle={'The Heist'}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
