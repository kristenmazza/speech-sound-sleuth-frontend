import styles from './Game.module.css';
import React, { useState } from 'react';
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from 'react-zoom-pan-pinch';
import { CircularProgress } from '@mui/material';
import ZoomControls from './ZoomControls';
import HiddenImageMenu from './HiddenImageMenu';

export default function GameImage() {
  const [imageMenu, setImageMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [coordinates, setCoordinates] = useState<
    [number, number] | [null, null]
  >([null, null]);
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
    const xPercent = (xPx / visibleImageWidth) * 100;
    const yPercent = (yPx / visibleImageHeight) * 100;

    setCoordinates([xPercent, yPercent]);
    console.log(xPercent, yPercent);
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
          minScale={0.8}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <React.Fragment>
              <div className={styles.imageWrapper}>
                <TransformComponent>
                  <div
                    onClick={handleImageClick}
                    style={{ cursor: 'image-menu' }}
                  >
                    {/* Target box */}
                    {coordinates[0] !== null && coordinates[1] !== null && (
                      <div
                        className={styles.targetBox}
                        style={{
                          top: `${coordinates[1] - 2.1}%`,
                          left: `${coordinates[0] - 1.2}%`,
                        }}
                      ></div>
                    )}
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
              <ZoomControls
                zoomIn={zoomIn}
                zoomOut={zoomOut}
                resetTransform={resetTransform}
              />
            </React.Fragment>
          )}
        </TransformWrapper>

        {/* Image menu for hidden item selection */}
        <HiddenImageMenu imageMenu={imageMenu} setImageMenu={setImageMenu} />
      </div>
    </>
  );
}
