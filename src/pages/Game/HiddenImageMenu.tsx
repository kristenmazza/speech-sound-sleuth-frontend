import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FC } from 'react';
import { useGameContext } from '../../context/useGameContext';
import styles from './HiddenImageMenu.module.css';
import axios from 'axios';

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
  coordinates: [number, number] | [null, null];
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

const HiddenImageMenu: FC<HiddenImageMenuProps> = ({
  imageMenu,
  setImageMenu,
  coordinates,
}) => {
  const handleImageMenuClose = () => {
    setImageMenu(null);
  };

  const { scene } = useGameContext() as GameContextType;

  const handleItemSelection = (hiddenImageId: string) => {
    handleImageMenuClose();
    validateSelection(hiddenImageId);
  };

  let renderHiddenMenuOptions;
  if (scene.data.hiddenImages) {
    renderHiddenMenuOptions = scene.data.hiddenImages.map((item) => (
      <MenuItem
        className={styles.menuItem}
        key={item._id}
        onClick={() => handleItemSelection(item._id)}
      >
        <div className={styles.imgContainer}>
          <img className={styles.menuImg} src={item.imageUrl} alt='' />
        </div>
        {item.name}
      </MenuItem>
    ));
  }

  const validateSelection = async (hiddenImageId: string) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL +
          `/image/${hiddenImageId}?x=${coordinates[0]}&y=${coordinates[1]}`,
      );
      console.log(response);
    } catch (err) {
      if (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.log(message);
      }
    }
  };

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

export default HiddenImageMenu;
