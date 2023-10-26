import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styles from './Error.module.css';
import { Container, Toolbar } from '@mui/material';
import { FC, useEffect } from 'react';
import { useGameContext } from '../../context/useGameContext';

const Error: FC = () => {
  const error = useRouteError();
  const { setIsGamePage } = useGameContext();
  useEffect(() => {
    setIsGamePage(false);
  }, [setIsGamePage]);

  return (
    <Container
      maxWidth='lg'
      className={styles.errorContainer}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Toolbar sx={{ height: '1rem' }} />
      <h1 className={styles.errorHeading}>Oops!</h1>
      <p className={styles.errorPg}>Sorry, an unexpected error has occurred.</p>
      <p className={styles.errorPg}>
        {isRouteErrorResponse(error)
          ? error.data.message || error.statusText
          : 'Not found.'}
      </p>
    </Container>
  );
};

export default Error;
