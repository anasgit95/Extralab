import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
 import Typography from '@mui/material/Typography';
 
import Container from '@mui/material/Container';
 import Button from '@mui/material/Button';
 import {
 
    Link
  } from "react-router-dom";

const pages = ['Home', 'Favorites'];
 
const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  
  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img 
            
            src="https://uploads-ssl.webflow.com/5feaf7c497cb0605ecb0f1d9/604276a0765c446df49e6d3b_logo-final-form-dark-p-2000.png" 
            className='extralabLogo'
            
            />
          </Typography>
 
       
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                 sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link  className='text-link' to={"/"+page}>               
                {page}
                            
                            
                            </Link>
              </Button>
            ))}
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;