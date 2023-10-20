import styles from './Game.module.css';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import { FC, useState } from 'react';

type ZoomControlsProps = {
  zoomIn: () => void;
  zoomOut: () => void;
  resetTransform: () => void;
};

const ZoomControls: FC<ZoomControlsProps> = ({
  zoomIn,
  zoomOut,
  resetTransform,
}) => {
  const [isControlMenuOpen, setIsControlMenuOpen] = useState(false);

  const toggleControlMenu = () => {
    setIsControlMenuOpen(!isControlMenuOpen);
  };

  return (
    <aside
      className={
        isControlMenuOpen
          ? `${styles.zoomControlMenu} ${styles.expanded}`
          : `${styles.zoomControlMenu}`
      }
    >
      <IconButton onClick={toggleControlMenu} aria-label='Toggle zoom controls'>
        {isControlMenuOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
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
  );
};

export default ZoomControls;
