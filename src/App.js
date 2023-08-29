import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './components/styles.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ResponsiveAppBar from './components/SearchBar';
import Main from "./components/Main";
import AboutUs from "./components/AboutPage";
import Blog from "./components/Blog";


function App() {
  const defaultTheme = createTheme({
    palette: {
      background: {
        default: 'white',
      },
      primary: {
        main: '#29335c', // Change the primary color
      },
      secondary: {
        main: '#db2b39', // Change the secondary color
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif', // Change the default font
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Main /> } />
        <Route path="/Home" element={<Main /> } />
        <Route path="/About Us" element={<AboutUs /> } />
        <Route path="/Blog" element={<Blog /> } />
        </Routes>
   </ThemeProvider>
  );
}

export default App;
