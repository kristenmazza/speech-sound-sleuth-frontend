import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Dispatch, FC, SetStateAction } from 'react';
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
  coordinates: [number, number] | undefined;
  correctCoordinates: Array<[number, number] | undefined>;
  setCorrectCoordinates: (
    correctCoordinates: Array<[number, number] | undefined>,
  ) => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handlePracticeModalOpen: () => void;
};

type HiddenImageType = {
  _id: string;
  name: string;
  imageUrl: string;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

type GameContextType = {
  scene: {
    data: {
      imageCreditLink: string;
      imageCreditName: string;
      hiddenImages: HiddenImageType[];
      imageUrl: string;
      sound: string;
      title: string;
      _id: string;
    };
  };
};

const HiddenImageMenu: FC<HiddenImageMenuProps> = ({
  imageMenu,
  setImageMenu,
  coordinates,
  correctCoordinates,
  setCorrectCoordinates,
  handlePracticeModalOpen,
}) => {
  const handleImageMenuClose = () => {
    setImageMenu(null);
  };

  const { scene } = useGameContext() as GameContextType;
  const { foundItems, setFoundItems } = useGameContext();
  const { setIsPracticeTime, setIsResumingTime } = useGameContext();

  const handleItemSelection = (hiddenImageId: string) => {
    handleImageMenuClose();
    validateSelection(hiddenImageId);
  };

  let renderHiddenMenuOptions;
  const hiddenItems = scene.data.hiddenImages;

  // Displays only items still needing to be found in dropdown menu
  if (hiddenItems) {
    const unFoundItems = hiddenItems.filter(
      (object1) => !foundItems.some((object2) => object1._id === object2._id),
    );

    renderHiddenMenuOptions = unFoundItems.map((item) => (
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
      let response;
      if (coordinates) {
        response = await axios.get(
          import.meta.env.VITE_BACKEND_URL +
            `/image/${hiddenImageId}?x=${coordinates[0]}&y=${coordinates[1]}`,
        );
      }
      if (response && response.data.message === 'Correct') {
        setCorrectCoordinates([...correctCoordinates, coordinates]);
        setIsPracticeTime(true);
        setIsResumingTime(false);
        handlePracticeModalOpen();
        const foundItem = scene.data.hiddenImages.find(
          (item) => item._id === hiddenImageId,
        );

        if (foundItem) {
          setFoundItems([...foundItems, foundItem]);
        }
      }
    } catch (err) {
      if (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(message);
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
