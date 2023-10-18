import styles from './Game.module.css';
import React, { useState } from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from 'react-zoom-pan-pinch';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CircularProgress } from '@mui/material';

export default function GameImage() {
  const [isControlMenuOpen, setIsControlMenuOpen] = useState(false);
  const [imageMenu, setImageMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);
  const [scale, setScale] = useState<number>(1.01);

  const imageLoaded = () => {
    setImageLoading(false);
  };

  const handleImageClick = (event: React.MouseEvent) => {
    handleImageMenuOpen(event);
    createTargetCoordinates(event);
  };

  // Toggles image menu's visibility on click by setting its position based on
  // mouse click coordinates
  const handleImageMenuOpen = (event: React.MouseEvent) => {
    event.preventDefault();
    setImageMenu(
      imageMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null,
    );
  };

  const createTargetCoordinates = (event: React.MouseEvent) => {
    const image = document.querySelector('#gameImage') as HTMLElement;

    if (!image) return;

    const imageRect = image.getBoundingClientRect();

    // Calculate width/height of the zoomed-in image's visible area on the screen
    const visibleImageWidth = imageRect.width / scale;
    const visibleImageHeight = imageRect.height / scale;

    // Calculate adjusted position in pixels of click event within zoomed image
    const xPx = (event.clientX - imageRect.left) / scale;
    const yPx = (event.clientY - imageRect.top) / scale;

    // Calculate position as a percentage within the visible area of the zoomed image
    const xPercent = xPx / visibleImageWidth;
    const yPercent = yPx / visibleImageHeight;

    setCoordinates([xPercent, yPercent]);
    console.log(xPercent, yPercent);
  };

  const handleImageMenuClose = () => {
    setImageMenu(null);
  };

  const toggleControlMenu = () => {
    setIsControlMenuOpen(!isControlMenuOpen);
  };

  // Set zoom factor (scale)
  const handleTransform = (
    _ref: ReactZoomPanPinchRef,
    state: { scale: number },
  ) => {
    setScale(state.scale);
  };

  return (
    <>
      <div
        className={styles.gameContainer}
        style={{ display: imageLoading ? 'flex' : 'none' }}
      >
        <CircularProgress sx={{ color: 'rgb(0, 182, 177)' }} />
      </div>
      <div
        className={styles.gameContainer}
        style={{ display: imageLoading ? 'none' : 'flex' }}
      >
        {/* TransformWrapper allows image to be pinched/zoomed */}
        <TransformWrapper
          initialScale={1.01}
          initialPositionX={0}
          initialPositionY={0}
          onTransformed={handleTransform}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <React.Fragment>
              <div className={styles.imageWrapper}>
                <TransformComponent>
                  <div
                    onClick={handleImageClick}
                    style={{ cursor: 'image-menu' }}
                  >
                    <img
                      className={styles.image}
                      id='gameImage'
                      src='https://kristen-mazza-blog-images.s3.us-west-1.amazonaws.com/uploads/busystreet.png'
                      alt='test'
                      onLoad={imageLoaded}
                    />
                  </div>
                </TransformComponent>
              </div>

              {/* Zoom controls */}
              <aside
                className={
                  isControlMenuOpen
                    ? `${styles.zoomControlMenu} ${styles.expanded}`
                    : `${styles.zoomControlMenu}`
                }
              >
                <IconButton
                  onClick={toggleControlMenu}
                  aria-label='Toggle zoom controls'
                >
                  {isControlMenuOpen ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>

                <IconButton
                  disabled={!isControlMenuOpen}
                  aria-label='Zoom In'
                  onClick={() => zoomIn()}
                >
                  <ZoomInIcon />
                </IconButton>
                <IconButton
                  disabled={!isControlMenuOpen}
                  aria-label='Zoom Out'
                  onClick={() => zoomOut()}
                >
                  <ZoomOutIcon />
                </IconButton>
                <IconButton
                  disabled={!isControlMenuOpen}
                  aria-label='Reset Image'
                  onClick={() => resetTransform()}
                >
                  <CenterFocusStrongIcon />
                </IconButton>
              </aside>
            </React.Fragment>
          )}
        </TransformWrapper>

        {/* Image menu for hidden item selection */}
        <Menu
          disableScrollLock={true}
          open={imageMenu !== null}
          onClose={handleImageMenuClose}
          anchorReference='anchorPosition'
          anchorPosition={
            imageMenu !== null
              ? { top: imageMenu.mouseY, left: imageMenu.mouseX }
              : undefined
          }
        >
          <MenuItem onClick={handleImageMenuClose}>Item1</MenuItem>
          <MenuItem onClick={handleImageMenuClose}>Item2</MenuItem>
          <MenuItem onClick={handleImageMenuClose}>Item3</MenuItem>
          <MenuItem onClick={handleImageMenuClose}>Item4</MenuItem>
        </Menu>
      </div>
    </>
  );
}
