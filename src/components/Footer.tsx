import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import styles from './Footer.module.css';
import { FC } from 'react';

function Copyright() {
  return (
    <Typography
      className={styles.copyright}
      variant='body2'
      color='text.secondary'
    >
      {'Speech Sound Sleuth created by '}
      <Link color='inherit' href='https://kristenmazza.dev/'>
        Kristen Mazza
      </Link>
    </Typography>
  );
}

type StickyFooterProps = {
  scene: {
    data: {
      imageCreditLink?: string;
      imageCreditName?: string;
      imageUrl?: string;
      sound?: string;
      title?: string;
      _id?: string;
    };
  };
};

const StickyFooter: FC<StickyFooterProps> = ({ scene }) => {
  return (
    <>
      <Box className={styles.footer} component='footer'>
        <Container maxWidth='sm'>
          <Typography
            className={styles.copyright}
            variant='body2'
            color='text.secondary'
          >
            Scene illustrated by{' '}
            <Link
              color='inherit'
              aria-label={
                scene.data.imageCreditName +
                ' website - link opens in a new tab'
              }
              href={scene.data.imageCreditLink}
              target='_blank'
            >
              {scene.data.imageCreditName}
            </Link>
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </>
  );
};

export default StickyFooter;
