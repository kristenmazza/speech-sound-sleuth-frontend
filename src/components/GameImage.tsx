import styles from './Game.module.css';
import React, { useState } from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';

export default function GameImage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <React.Fragment>
          <div className={styles.imageWrapper}>
            <TransformComponent>
              <img
                className={styles.image}
                src='https://kristen-mazza-blog-images.s3.us-west-1.amazonaws.com/uploads/busystreet.png'
                alt='test'
              />
            </TransformComponent>
          </div>
          <aside
            className={
              isMenuOpen
                ? `${styles.zoomControlMenu} ${styles.expanded}`
                : `${styles.zoomControlMenu}`
            }
          >
            <IconButton onClick={toggleMenu} aria-label='Toggle zoom controls'>
              {isMenuOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>

            <IconButton
              disabled={!isMenuOpen}
              aria-label='Zoom In'
              onClick={() => zoomIn()}
            >
              <ZoomInIcon />
            </IconButton>
            <IconButton
              disabled={!isMenuOpen}
              aria-label='Zoom Out'
              onClick={() => zoomOut()}
            >
              <ZoomOutIcon />
            </IconButton>
            <IconButton
              disabled={!isMenuOpen}
              aria-label='Reset Image'
              onClick={() => resetTransform()}
            >
              <CenterFocusStrongIcon />
            </IconButton>
          </aside>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
}
