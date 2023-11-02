import { useStopwatch } from 'react-timer-hook';
import styles from './Timer.module.css';
import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
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
  const [sessionID, setSessionID] = useState<string>('');

  const formatTime = (time: number) => {
    return String(time).padStart(2, '0');
  };

  useEffect(() => {
    async function pauseTimer() {
      try {
        await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/pause-timer/${sessionID}`,
        );
        pause();
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(message);
      }
    }

    if (isPracticeTime) {
      pauseTimer();
    }
  }, [isPracticeTime, pause, sessionID]);

  useEffect(() => {
    const startTimer = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + '/start-timer',
        );
        const responseSessionID = response.data.sessionID;
        setSessionID(responseSessionID);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(message);
      }
    };

    startTimer();
  }, []);

  useEffect(() => {
    async function resumeTimer() {
      try {
        await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/resume-timer/${sessionID}`,
        );
        start();
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(message);
      }
    }

    if (isResumingTime) {
      resumeTimer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResumingTime, sessionID]);

  useEffect(() => {
    const getFinalTime = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/final-time/${sessionID}`,
        );
        const time = response.data.finalTime.toFixed(2);
        setFinalTime(time);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(message);
      }
    };

    if (isGameFinished) {
      getFinalTime();
    }
  }, [isGameFinished, setFinalTime, sessionID]);

  const disconnectPlayer = useCallback(async () => {
    if (sessionID) {
      try {
        await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/disconnect-player/${sessionID}`,
        );
        setSessionID('');
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(message);
      }
    }
  }, [sessionID, setSessionID]);

  useEffect(() => {
    window.addEventListener('beforeunload', disconnectPlayer);

    return () => {
      window.removeEventListener('beforeunload', disconnectPlayer);
    };
  }, [disconnectPlayer]);

  return (
    <div className={styles.timer} style={{ textAlign: 'center' }}>
      <span>{formatTime(hours)}</span>:<span>{formatTime(minutes)}</span>:
      <span>{formatTime(seconds)}</span>
    </div>
  );
};

export default Timer;
