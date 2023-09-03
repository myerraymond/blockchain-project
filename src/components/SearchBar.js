// import required libraries and folders
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import './main.css';

// Defines and array of page names for navigation
const pages = ['Home', 'About Us', 'Blog'];

// Create a functional component ReponsiveAppBar
function ResponsiveAppBar() {
  // Define the state for the navigation menu
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // Function to open navmenu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Function to close the navmenu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(to left, #3498db, #2c3e50)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Brand logo and title */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#FFF',
              textDecoration: 'none',
              fontSize: '1.5rem',
            }}
          >
            BLOCKCHAIN ANALYSIS
          </Typography>
          {/* Mobile navigation menu */}

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* Generate navigation links for mobile */}

              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: '#333',
                    '&:hover': {
                      background: '#FFF',

                    },
                  }}
                >
                  <Typography textAlign="center">
                    <Link to={`/${page}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Desktop navigation links */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                variant="text"
                size="large"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  color: '#FFF',
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#B84592',
                  },
                  ml: index === 0 ? 'auto' : 2,
                }}
              >
                <Link to={`/${page}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar; // Export the ReponsiveAppBar
