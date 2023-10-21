import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FC } from 'react';
import { useGameContext } from '../../context/useGameContext';
import styles from './HiddenImageMenu.module.css';

type HiddenImageMenuProps = {
  imageMenu: {
    mouseX: number;
    mouseY: number;
  } | null;
  setImageMenu: (
    imageMenu: {
      mouseX: number;
      mouseY: number;
    } | null,
  ) => void;
};

type GameContextType = {
  scene: {
    data: {
      imageCreditLink?: string;
      imageCreditName?: string;
      hiddenImages?: {
        _id: string;
        name: string;
        imageUrl: string;
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
      }[];
      imageUrl?: string;
      sound?: string;
      title?: string;
      _id?: string;
    };
  };
};

const ZoomControls: FC<HiddenImageMenuProps> = ({
  imageMenu,
  setImageMenu,
}) => {
  const handleImageMenuClose = () => {
    setImageMenu(null);
  };

  const { scene } = useGameContext() as GameContextType;

  let renderHiddenMenuOptions;
  if (scene.data.hiddenImages) {
    console.log(scene.data.hiddenImages[0]);

    renderHiddenMenuOptions = scene.data.hiddenImages.map((item) => (
      <MenuItem
        className={styles.menuItem}
        key={item._id}
        onClick={handleImageMenuClose}
      >
        <div className={styles.imgContainer}>
          <img className={styles.menuImg} src={item.imageUrl} alt='' />
        </div>
        {item.name}
      </MenuItem>
    ));
  }
  return (
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
      {renderHiddenMenuOptions}
    </Menu>
  );
};

export default ZoomControls;
