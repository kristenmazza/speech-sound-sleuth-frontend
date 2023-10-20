import { Box, CssBaseline } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
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

  return (
    <>
      <CssBaseline />
      <Header isGamePage={isGamePage} scene={scene} />
      <Box
        className='main'
        width='100%'
        display='flex'
        flexDirection='column'
        sx={{ padding: 0 }}
      >
        <Outlet context={{ isGamePage, setIsGamePage, scene, setScene }} />
      </Box>
      <Footer scene={scene} />
    </>
  );
}

export default App;
