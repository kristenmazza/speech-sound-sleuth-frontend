import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FC } from 'react';

interface HiddenImageMenuProps {
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
}

const ZoomControls: FC<HiddenImageMenuProps> = ({
  imageMenu,
  setImageMenu,
}) => {
  const handleImageMenuClose = () => {
    setImageMenu(null);
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
      <MenuItem onClick={handleImageMenuClose}>Item1</MenuItem>
      <MenuItem onClick={handleImageMenuClose}>Item2</MenuItem>
      <MenuItem onClick={handleImageMenuClose}>Item3</MenuItem>
      <MenuItem onClick={handleImageMenuClose}>Item4</MenuItem>
    </Menu>
  );
};

export default ZoomControls;
