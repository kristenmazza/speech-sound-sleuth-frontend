import { Box, CssBaseline } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [isGamePage, setIsGamePage] = useState(false);

  return (
    <>
      <CssBaseline />
      <Header isGamePage={isGamePage} />
      <Box
        className='main'
        width='100%'
        display='flex'
        flexDirection='column'
        sx={{ padding: 0 }}
      >
        <Outlet context={{ isGamePage, setIsGamePage }} />
      </Box>
      <Footer />
    </>
  );
}

export default App;
