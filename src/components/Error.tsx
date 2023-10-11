import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styles from './Error.module.css';
import { Container, Toolbar } from '@mui/material';
import { FC } from 'react';

const Error: FC = () => {
  const error = useRouteError();

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
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {isRouteErrorResponse(error)
          ? error.data.message || error.statusText
          : 'Not found.'}
      </p>
    </Container>
  );
};

export default Error;
