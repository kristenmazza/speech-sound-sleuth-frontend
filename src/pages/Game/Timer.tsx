import { useStopwatch } from 'react-timer-hook';
import styles from './Timer.module.css';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import axios from 'axios';

type TimerProps = {
  isPracticeTime: boolean;
  isResumingTime: boolean;
  setIsResumingTime: Dispatch<SetStateAction<boolean>>;
  setFinalTime: Dispatch<SetStateAction<number | null>>;
  isGameFinished: boolean;
};

const Timer: FC<TimerProps> = ({
  isPracticeTime,
  isResumingTime,
  setFinalTime,
  isGameFinished,
}) => {
  const { seconds, minutes, hours, start, pause } = useStopwatch({
    autoStart: true,
  });

  const formatTime = (time: number) => {
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

    resetTimer();
  }, []);

  useEffect(() => {
    async function pauseTimer() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + '/pause-timer',
        );
        pause();
        console.log(response);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.log(message);
      }
    }

    if (isPracticeTime) {
      pauseTimer();
    }
  }, [isPracticeTime, pause]);

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

  useEffect(() => {
    async function resumeTimer() {
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
    }

    if (isResumingTime) {
      resumeTimer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResumingTime]);

  useEffect(() => {
    const getFinalTime = async () => {
      console.log(import.meta.env.VITE_BACKEND_URL + '/final-time');
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + '/final-time',
        );
        const time = response.data.finalTime.toFixed(2);
        console.log(time);
        setFinalTime(time);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.log(message);
      }
    };

    if (isGameFinished) {
      getFinalTime();
    }
  }, [isGameFinished, setFinalTime]);

  return (
    <div className={styles.timer} style={{ textAlign: 'center' }}>
      <span>{formatTime(hours)}</span>:<span>{formatTime(minutes)}</span>:
      <span>{formatTime(seconds)}</span>
    </div>
  );
};

export default Timer;
