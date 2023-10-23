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
import { useGameContext } from '../../context/useGameContext';
import { v4 as uuidv4 } from 'uuid';

export default function GameImage() {
  type GameContextType = {
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

  const { scene } = useGameContext() as GameContextType;

  const [imageMenu, setImageMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [coordinates, setCoordinates] = useState<[number, number] | undefined>(
    undefined,
  );
  const [scale, setScale] = useState<number>(1.01);
  const [correctCoordinates, setCorrectCoordinates] = useState<
    Array<[number, number] | undefined>
  >([]);

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

  const displayCorrectTargets = () => {
    return correctCoordinates?.map((coordinates) =>
      coordinates ? (
        <div
          key={uuidv4()}
          className={styles.correctTargetBox}
          style={{
            top: `calc(${coordinates[1]}% - 20px)`,
            left: `calc(${coordinates[0]}% - 15px)`,
          }}
        ></div>
      ) : (
        ''
      ),
    );
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
                    {coordinates && (
                      <div
                        className={styles.targetBox}
                        style={{
                          top: `calc(${coordinates[1]}% - 20px)`,
                          left: `calc(${coordinates[0]}% - 15px)`,
                        }}
                      ></div>
                    )}
                    {correctCoordinates && displayCorrectTargets()}
                    <img
                      className={styles.image}
                      id='gameImage'
                      src={scene.data.imageUrl}
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
        <HiddenImageMenu
          imageMenu={imageMenu}
          setImageMenu={setImageMenu}
          coordinates={coordinates}
          correctCoordinates={correctCoordinates}
          setCorrectCoordinates={setCorrectCoordinates}
        />
      </div>
    </>
  );
}
