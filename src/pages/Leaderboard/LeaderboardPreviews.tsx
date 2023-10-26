import LeaderboardPreview from './LeaderboardPreview';
import styles from './LeaderboardPreviews.module.css';

export default function LeaderboardPreviews() {
  return (
    <div className={styles.LeaderboardPreviewsContainer}>
      <LeaderboardPreview
        sceneHref={'/leaderboard/busy-street'}
        sceneImage={'/images/large-previews/busystreet-large-preview.png'}
        sceneTitle={'Busy Street'}
      />
      <LeaderboardPreview
        sceneHref={'/leaderboard/fairytale-land'}
        sceneImage={'/images/large-previews/fairytaleland-large-preview.png'}
        sceneTitle={'Fairytale Land'}
      />
      <LeaderboardPreview
        sceneHref={'/leaderboard/the-heist'}
        sceneImage={'/images/large-previews/theheist-large-preview.jpg'}
        sceneTitle={'The Heist'}
      />
    </div>
  );
}
