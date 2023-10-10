//Import necessary modules and components from external libraries
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
  
  // Create the custom theme
  const defaultTheme = createTheme({
    palette: {
      background: {
        default: 'white', // Default white background
      },
      primary: {
        main: '#29335c', // Set the primary color
      },
      secondary: {
        main: '#db2b39', // Set the secondary color
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif', // Set the default font
    },
  });


  return (
    // Wrap the entire app with the ThemeProvider to apply custom themes
    <ThemeProvider theme={defaultTheme}>
            {/* Apply baseline CSS styles to ensure a consistent starting point */}
      <CssBaseline />
            {/* Render the ResponsiveAppBar component, which likely contains navigation */}
      <ResponsiveAppBar />
            {/* Define the routing structure for your application */}
      <Routes>
        <Route path="/" element={<Main /> } />
        <Route path="/Home" element={<Main /> } />
        <Route path="/About Us" element={<AboutUs /> } />
        <Route path="/Blog" element={<Blog /> } />
        </Routes>

      
   </ThemeProvider>
  );
}

// Export the App component 
export default App;
