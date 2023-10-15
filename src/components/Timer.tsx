import { useStopwatch } from 'react-timer-hook';
import styles from './Timer.module.css';

export default function Timer() {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  const formatTime = (time) => {
    return String(time).padStart(2, '0');
  };

  return (
    <div className={styles.timer} style={{ textAlign: 'center' }}>
      <span>{formatTime(hours)}</span>:<span>{formatTime(minutes)}</span>:
      <span>{formatTime(seconds)}</span>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  );
}
