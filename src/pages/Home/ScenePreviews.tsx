import ScenePreview from './ScenePreview';
import styles from './ScenePreviews.module.css';

export default function ScenePreviews() {
  return (
    <div className={styles.scenePreviewsContainer}>
      <ScenePreview
        sceneHref={'/busy-street'}
        sceneImage={'/images/scene-previews/busystreet-preview.jpg'}
        sceneTitle={'Busy Street'}
      />
      <ScenePreview
        sceneHref={'/fairytale-land'}
        sceneImage={'/images/scene-previews/fairytaleland-preview.jpg'}
        sceneTitle={'Fairytale Land'}
      />
      <ScenePreview
        sceneHref={'/the-heist'}
        sceneImage={'/images/scene-previews/theheist-preview.jpg'}
        sceneTitle={'The Heist'}
      />
    </div>
  );
}
