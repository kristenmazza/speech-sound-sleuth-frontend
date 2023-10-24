import { useStopwatch } from 'react-timer-hook';
import styles from './Timer.module.css';
import { useEffect } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    const resetTimer = async () => {
      try {
        await axios.get(import.meta.env.VITE_BACKEND_URL + '/reset-timer');
        console.log('Timer reset');
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.log(message);
      }
    };

    // Ensures resetTimer is only called before page reload
    window.addEventListener('beforeunload', resetTimer);
    return () => window.removeEventListener('beforeunload', resetTimer);
  }, []);

  const handlePause = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + '/pause-timer',
      );
      console.log(response);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.log(message);
    }
    pause();
  };

  useEffect(() => {
    const startTimer = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + '/start-timer',
        );
        console.log(response);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.log(message);
      }
    };

    startTimer();
  }, []);

  const resumeTimer = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + '/resume-timer',
      );
      console.log(response);
      start();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.log(message);
    }
  };

  const getFinalTime = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + '/final-time',
      );
      console.log(response);
      pause();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.log(message);
    }
  };

  return (
    <div className={styles.timer} style={{ textAlign: 'center' }}>
      <span>{formatTime(hours)}</span>:<span>{formatTime(minutes)}</span>:
      <span>{formatTime(seconds)}</span>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={resumeTimer}>Resume</button>
      <button onClick={handlePause}>Pause</button>
      {/* <button onClick={reset}>Reset</button> */}
    </div>
  );
}
