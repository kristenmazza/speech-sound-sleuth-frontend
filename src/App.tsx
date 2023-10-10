import { Box } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Box
        height='100vh'
        width='100%'
        display='flex'
        flexDirection='column'
      ></Box>
      <Footer />
    </>
  );
}

export default App;
