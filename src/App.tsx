import { Box, CssBaseline } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  type HiddenImageType = {
    _id: string;
    name: string;
    imageUrl: string;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };

  const initialScene = {
    data: {
      hiddenImages: [],
      imageCreditLink: '',
      imageCreditName: '',
      imageUrl: '',
      sound: '',
      title: '',
      _id: '',
    },
  };

  const [isGamePage, setIsGamePage] = useState(false);
  const [scene, setScene] = useState(initialScene);
  const [foundItems, setFoundItems] = useState<HiddenImageType[]>([]);

  return (
    <>
      <CssBaseline />
      <Header isGamePage={isGamePage} scene={scene} foundItems={foundItems} />
      <Box
        className='main'
        width='100%'
        display='flex'
        flexDirection='column'
        sx={{ padding: 0 }}
      >
        <Outlet
          context={{
            isGamePage,
            setIsGamePage,
            scene,
            setScene,
            foundItems,
            setFoundItems,
          }}
        />
      </Box>
      <Footer scene={scene} />
    </>
  );
}

export default App;
